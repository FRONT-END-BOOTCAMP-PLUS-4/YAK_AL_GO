import prisma from "../../../../lib/prisma"; // 싱글톤 인스턴스 사용
import axios from "axios";

const BATCH_SIZE = 100; // 배치 크기 조정

interface MedicineResponse {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    pageNo: number;
    totalCount: number;
    numOfRows: number;
    items: MedicineItem[] | MedicineItem;
  };
}

interface MedicineItem {
  ITEM_SEQ: string;
  ITEM_NAME: string;
  ENTP_NAME: string;
  ITEM_PERMIT_DATE: string;
  ETC_OTC_CODE: string;
  CLASS_NO: string;
  CHART: string;
  BAR_CODE: string;
  MATERIAL_NAME: string;
  EE_DOC_ID: string;
  UD_DOC_ID: string;
  NB_DOC_ID: string;
  INSERT_FILE: string;
  STORAGE_METHOD: string;
  VALID_TERM: string;
  REEXAM_TARGET: string;
  REEXAM_DATE: string;
  PACK_UNIT: string;
  EDI_CODE: string;
  CANCEL_DATE: string;
  CANCEL_NAME: string;
  TYPE_CODE: string;
  TYPE_NAME: string;
  CHANGE_DATE: string;
  BIZRNO: string;
}

export class MedicineDataService {
  private readonly baseUrl =
    "https://apis.data.go.kr/1471000/DURPrdlstInfoService03/getDurPrdlstInfoList03";
  private readonly apiKey = process.env.NEXT_PUBLIC_MEDICINE_API_KEY;

  // 개선된 날짜 형식 변환 함수
  private convertDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr || dateStr === "") return null;

    try {
      // ISO 형식 확인 (예: 2017-10-01T00:00:00)
      if (dateStr.includes("-") || dateStr.includes("T")) {
        return new Date(dateStr);
      }

      // YYYYMMDD 형식 확인
      if (/^\d{8}$/.test(dateStr)) {
        const year = parseInt(dateStr.substring(0, 4));
        const month = parseInt(dateStr.substring(4, 6)) - 1;
        const day = parseInt(dateStr.substring(6, 8));
        return new Date(year, month, day);
      }

      // 기존 형식 처리 (1957April26th)
      const datePattern =
        /^(\d{4})(January|February|March|April|May|June|July|August|September|October|November|December)(\d+)th$/;
      const match = dateStr.match(datePattern);

      if (!match) {
        console.log(`날짜 형식 불일치: ${dateStr}`);
        return null;
      }

      const year = parseInt(match[1]);
      const monthStr = match[2];
      const day = parseInt(match[3]);

      const months: { [key: string]: number } = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11,
      };

      return new Date(year, months[monthStr], day);
    } catch (error) {
      console.error(`날짜 변환 오류 (${dateStr}):`, error);
      return null;
    }
  }

  // 특정 약품만 검색하여 DB에 저장
  async fetchAndSaveMedicine(itemName: string) {
    try {
      console.log(`'${itemName}' 약품 데이터 요청 시작`);

      // DB 연결 테스트
      try {
        const count = await prisma.medicines.count();
        console.log(`현재 의약품 수: ${count}`);
      } catch (connError) {
        console.error("DB 연결 오류:", connError);
        throw connError;
      }

      if (!this.apiKey) {
        throw new Error(
          "API 키가 설정되지 않았습니다. 환경 변수 MEDICINE_API_KEY를 확인해주세요."
        );
      }

      const params = {
        type: "json",
        serviceKey: decodeURIComponent(this.apiKey), // API 키를 디코딩된 상태로 사용
        itemName: encodeURIComponent(itemName), // 검색어 인코딩
        pageNo: 1,
        numOfRows: 100,
      };

      console.log("API 요청 URL:", this.baseUrl);
      console.log("API 요청 파라미터:", {
        ...params,
        serviceKey: "(비공개)",
      });

      const response = await axios.get<MedicineResponse>(this.baseUrl, {
        params,
      });

      // 전체 응답 로깅
      console.log("API 원본 응답:", JSON.stringify(response.data, null, 2));

      // 응답 구조 검증
      if (!response.data) {
        throw new Error("API 응답이 비어있습니다.");
      }

      if (!response.data.header) {
        throw new Error(
          "API 응답에 header가 없습니다: " + JSON.stringify(response.data)
        );
      }

      console.log("API 응답 코드:", response.data.header.resultCode);
      console.log("API 응답 메시지:", response.data.header.resultMsg);

      if (response.data.header.resultCode !== "00") {
        throw new Error(`API Error: ${response.data.header.resultMsg}`);
      }

      // API 응답 형식 확인 및 처리
      let medicines: MedicineItem[] = [];
      if (Array.isArray(response.data.body.items)) {
        medicines = response.data.body.items;
      } else if (
        response.data.body.items &&
        typeof response.data.body.items === "object"
      ) {
        medicines = [response.data.body.items as MedicineItem];
      }

      console.log(`검색된 약품 개수: ${medicines.length}`);

      if (medicines.length === 0) {
        return {
          success: true,
          message: `'${itemName}' 검색 결과가 없습니다.`,
          data: [],
        };
      }

      // 첫 번째 항목 로깅
      console.log("첫 번째 약품 데이터 샘플:", medicines[0]);

      // 검색된 약품 저장
      const result = await this.saveAllMedicinesToDB(medicines);

      return {
        success: true,
        message: `'${itemName}' 검색 결과 ${medicines.length}개 데이터 중 ${result.count}개가 저장되었습니다.`,
        data: medicines,
      };
    } catch (error) {
      console.error(`'${itemName}' 검색 및 저장 중 오류 발생:`, error);
      if (error instanceof Error) {
        console.error("오류 메시지:", error.message);
        console.error("오류 스택:", error.stack);
      }
      throw error;
    }
  }

  private async saveAllMedicinesToDB(medicines: MedicineItem[]) {
    try {
      console.log("데이터베이스에 의약품 데이터 저장 시작...");
      let totalSaved = 0;

      // 트랜잭션 내에서 처리
      await prisma.$transaction(async (tx) => {
        // 배치 처리
        for (let i = 0; i < medicines.length; i += BATCH_SIZE) {
          const batch = medicines.slice(i, i + BATCH_SIZE);
          console.log(
            `배치 ${i / BATCH_SIZE + 1} 처리 중... (${batch.length}개 항목)`
          );

          const data = batch.map((medicine) => {
            // 데이터 변환 및 검증
            const itemData = {
              item_seq: medicine.ITEM_SEQ,
              item_name: medicine.ITEM_NAME || "",
              entp_name: medicine.ENTP_NAME || null,
              item_permit_date: this.convertDate(medicine.ITEM_PERMIT_DATE),
              etc_otc_code: medicine.ETC_OTC_CODE || null,
              class_no: medicine.CLASS_NO || null,
              chart: medicine.CHART || null,
              bar_code: medicine.BAR_CODE || null,
              material_name: medicine.MATERIAL_NAME || null,
              ee_doc_id: medicine.EE_DOC_ID || null,
              ud_doc_id: medicine.UD_DOC_ID || null,
              nb_doc_id: medicine.NB_DOC_ID || null,
              insert_file: medicine.INSERT_FILE || null,
              storage_method: medicine.STORAGE_METHOD || null,
              valid_term: medicine.VALID_TERM || null,
              reexam_target: medicine.REEXAM_TARGET || null,
              reexam_date: this.convertDate(medicine.REEXAM_DATE),
              pack_unit: medicine.PACK_UNIT || null,
              edi_code: medicine.EDI_CODE || null,
              cancel_date: this.convertDate(medicine.CANCEL_DATE),
              cancel_name: medicine.CANCEL_NAME || null,
              type_code: medicine.TYPE_CODE || null,
              type_name: medicine.TYPE_NAME?.trim() || null, // 공백 제거
              change_date: this.convertDate(medicine.CHANGE_DATE),
              bizrno: medicine.BIZRNO || null,
              created_at: new Date(),
              updated_at: new Date(),
            };

            // 첫 번째 항목 로깅
            if (i === 0 && medicines.indexOf(medicine) === 0) {
              console.log("변환된 첫 번째 데이터:", itemData);
            }

            return itemData;
          });

          try {
            // createMany 사용
            const result = await tx.medicines.createMany({
              data,
              skipDuplicates: true,
            });

            totalSaved += result.count;
            console.log(
              `배치 저장 완료: ${result.count}/${batch.length}개 항목 저장됨`
            );
          } catch (batchError) {
            console.error("배치 저장 실패, 개별 항목 저장 시도:", batchError);

            // 개별 저장 시도
            let itemsSaved = 0;
            for (const item of data) {
              try {
                await tx.medicines.upsert({
                  where: { item_seq: item.item_seq },
                  update: item,
                  create: item,
                });
                itemsSaved++;
              } catch (itemError) {
                console.error(`항목 저장 실패 (${item.item_seq}):`, itemError);
              }
            }

            totalSaved += itemsSaved;
            console.log(
              `개별 저장 완료: ${itemsSaved}/${batch.length}개 항목 저장됨`
            );
          }
        }
      });

      console.log(
        `의약품 데이터 저장 완료: 총 ${totalSaved}/${medicines.length}개 항목 저장됨`
      );
      return { count: totalSaved };
    } catch (error) {
      console.error("DB 저장 중 오류 발생:", error);
      if (error instanceof Error) {
        console.error("오류 메시지:", error.message);
        console.error("오류 스택:", error.stack);
      }
      throw error;
    }
  }
}
