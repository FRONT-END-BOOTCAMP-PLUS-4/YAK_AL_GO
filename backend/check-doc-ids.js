const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDocIds() {
  try {
    console.log('=== 데이터베이스 PDF 문서 ID 확인 ===');
    
    const samples = await prisma.medicines.findMany({
      select: {
        item_seq: true,
        item_name: true,
        ee_doc_id: true,
        ud_doc_id: true,
        nb_doc_id: true
      },
      where: {
        OR: [
          { ee_doc_id: { not: null } },
          { ud_doc_id: { not: null } },
          { nb_doc_id: { not: null } }
        ]
      },
      take: 10
    });
    
    console.log(`총 ${samples.length}개 샘플 확인됨`);
    console.log('');
    
    samples.forEach((med, index) => {
      console.log(`[${index + 1}] 약품명: ${med.item_name}`);
      console.log(`   품목일련번호: ${med.item_seq}`);
      console.log(`   효능효과 ID: ${med.ee_doc_id || 'NULL'}`);
      console.log(`   용법용량 ID: ${med.ud_doc_id || 'NULL'}`);
      console.log(`   주의사항 ID: ${med.nb_doc_id || 'NULL'}`);
      console.log('');
    });
    
    // 문서 ID 패턴 분석
    const allDocIds = [];
    samples.forEach(med => {
      if (med.ee_doc_id) allDocIds.push(med.ee_doc_id);
      if (med.ud_doc_id) allDocIds.push(med.ud_doc_id);
      if (med.nb_doc_id) allDocIds.push(med.nb_doc_id);
    });
    
    console.log('=== PDF 문서 ID 패턴 분석 ===');
    console.log('총 문서 ID 개수:', allDocIds.length);
    if (allDocIds.length > 0) {
      console.log('첫 번째 ID 예시:', allDocIds[0]);
      console.log('ID 길이 범위:', Math.min(...allDocIds.map(id => id.length)), '~', Math.max(...allDocIds.map(id => id.length)));
      console.log('숫자만 포함:', allDocIds.every(id => /^\d+$/.test(id)));
      console.log('URL 형태 포함:', allDocIds.some(id => id.includes('http')));
    }
    
  } catch (error) {
    console.error('데이터 조회 오류:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkDocIds(); 