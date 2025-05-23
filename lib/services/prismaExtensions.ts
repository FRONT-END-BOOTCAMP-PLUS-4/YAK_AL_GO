import { Prisma } from '@prisma/generated'; // 표준 경로로 수정

// 더 이상 필요 없는 확장 기능은 제거하고 기본적인 확장만 유지
export const withBatchInsert = Prisma.defineExtension((client) => {
  return client.$extends({});
});
