"use client";

import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

interface MedicineResponse {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: {
    pageNo: number;
    totalCount: number;
    numOfRows: number;
    items: MedicineItem[];
  };
}

interface MedicineItem {
  ITEM_SEQ: string; // 품목일련번호
  ITEM_NAME: string; // 품목명
  ENTP_NAME: string; // 업체명
  ITEM_PERMIT_DATE: string; // 허가일자
  ETC_OTC_CODE: string; // 전문/일반 구분
  CLASS_NO: string; // 분류번호
  CHART: string; // 성상
  BAR_CODE: string; // 표준코드
  MATERIAL_NAME: string; // 원료성분
  STORAGE_METHOD: string; // 저장방법
  VALID_TERM: string; // 유효기간
  TYPE_CODE: string; // 품목 구분 코드
  TYPE_NAME: string; // 품목 구분명
  EE_DOC_ID: string; // 효능효과 문서 경로
  UD_DOC_ID: string; // 용법용량 문서 경로
  NB_DOC_ID: string; // 신규 허가사항 문서 경로
  INSERT_FILE: string; // 첨부문서 경로
  CANCEL_NAME: string; // 취소상태
  REEXAM_TARGET: string; // 재심사대상
  REEXAM_DATE: string; // 재심사날짜
  PACK_UNIT: string; // 포장단위
  EDI_CODE: string; // EDI 코드
  CANCEL_DATE: string; // 취소일자
  CHANGE_DATE: string; // 변경일자
  BIZRNO: string; // 사업자등록번호
}

export class MedicineDataService {
  private readonly baseUrl =
    "https://apis.data.go.kr/1471000/DURPrdlstInfoService03/getDurPrdlstInfoList03";
  private readonly apiKey = process.env.NEXT_PUBLIC_MEDICINE_API_KEY;

  async fetchAndSaveMedicineData(itemName?: string) {
    try {
      const params = {
        type: "json",
        serviceKey: this.apiKey,
        ...(itemName && { itemName }),
        pageNo: 1,
        numOfRows: 100,
      };

      const response = await axios.get<MedicineResponse>(this.baseUrl, {
        params,
      });

      if (response.data.header.resultCode !== "00") {
        throw new Error(`API Error: ${response.data.header.resultMsg}`);
      }

      const medicines = response.data.body.items;
      const totalPages = Math.ceil(
        response.data.body.totalCount / params.numOfRows
      );

      // 첫 페이지 데이터 저장
      await this.saveMedicinesToDB(medicines);

      // 나머지 페이지 데이터 가져오기
      for (let page = 2; page <= totalPages; page++) {
        const nextResponse = await axios.get<MedicineResponse>(this.baseUrl, {
          params: { ...params, pageNo: page },
        });

        if (nextResponse.data.header.resultCode === "00") {
          await this.saveMedicinesToDB(nextResponse.data.body.items);
        }
      }

      return {
        success: true,
        message: `총 ${response.data.body.totalCount}개의 의약품 데이터가 저장되었습니다.`,
      };
    } catch (error) {
      console.error("의약품 데이터 저장 중 오류 발생:", error);
      throw error;
    }
  }

  private async saveMedicinesToDB(medicines: MedicineItem[]) {
    try {
      for (const medicine of medicines) {
        await prisma.medicines.upsert({
          where: { item_seq: medicine.ITEM_SEQ },
          update: {
            item_name: medicine.ITEM_NAME,
            entp_name: medicine.ENTP_NAME,
            item_permit_date: new Date(medicine.ITEM_PERMIT_DATE),
            etc_otc_code: medicine.ETC_OTC_CODE,
            class_no: medicine.CLASS_NO,
            chart: medicine.CHART,
            bar_code: medicine.BAR_CODE,
            material_name: medicine.MATERIAL_NAME,
            storage_method: medicine.STORAGE_METHOD,
            valid_term: medicine.VALID_TERM,
            type_code: medicine.TYPE_CODE,
            type_name: medicine.TYPE_NAME,
            ee_doc_id: medicine.EE_DOC_ID,
            ud_doc_id: medicine.UD_DOC_ID,
            nb_doc_id: medicine.NB_DOC_ID,
            insert_file: medicine.INSERT_FILE,
            cancel_name: medicine.CANCEL_NAME,
            reexam_target: medicine.REEXAM_TARGET,
            reexam_date: medicine.REEXAM_DATE
              ? new Date(medicine.REEXAM_DATE)
              : null,
            pack_unit: medicine.PACK_UNIT,
            edi_code: medicine.EDI_CODE,
            cancel_date: medicine.CANCEL_DATE
              ? new Date(medicine.CANCEL_DATE)
              : null,
            change_date: medicine.CHANGE_DATE
              ? new Date(medicine.CHANGE_DATE)
              : null,
            bizrno: medicine.BIZRNO,
            updated_at: new Date(),
          },
          create: {
            item_seq: medicine.ITEM_SEQ,
            item_name: medicine.ITEM_NAME,
            entp_name: medicine.ENTP_NAME,
            item_permit_date: new Date(medicine.ITEM_PERMIT_DATE),
            etc_otc_code: medicine.ETC_OTC_CODE,
            class_no: medicine.CLASS_NO,
            chart: medicine.CHART,
            bar_code: medicine.BAR_CODE,
            material_name: medicine.MATERIAL_NAME,
            storage_method: medicine.STORAGE_METHOD,
            valid_term: medicine.VALID_TERM,
            type_code: medicine.TYPE_CODE,
            type_name: medicine.TYPE_NAME,
            ee_doc_id: medicine.EE_DOC_ID,
            ud_doc_id: medicine.UD_DOC_ID,
            nb_doc_id: medicine.NB_DOC_ID,
            insert_file: medicine.INSERT_FILE,
            cancel_name: medicine.CANCEL_NAME,
            reexam_target: medicine.REEXAM_TARGET,
            reexam_date: medicine.REEXAM_DATE
              ? new Date(medicine.REEXAM_DATE)
              : null,
            pack_unit: medicine.PACK_UNIT,
            edi_code: medicine.EDI_CODE,
            cancel_date: medicine.CANCEL_DATE
              ? new Date(medicine.CANCEL_DATE)
              : null,
            change_date: medicine.CHANGE_DATE
              ? new Date(medicine.CHANGE_DATE)
              : null,
            bizrno: medicine.BIZRNO,
            created_at: new Date(),
            updated_at: new Date(),
          },
        });
      }
    } catch (error) {
      console.error("DB 저장 중 오류 발생:", error);
      throw error;
    }
  }
}
