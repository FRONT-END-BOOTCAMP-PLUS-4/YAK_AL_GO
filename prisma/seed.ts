import { PrismaClient } from './generated';
import seedReviewTypes from './seeds/reviewTypesSeed';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');
  console.log('==========================================');

  try {
    // Review Types 시드 실행
    await seedReviewTypes();

    console.log('==========================================');
    console.log('✅ Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 