import { PrismaClient } from '../generated';

const prisma = new PrismaClient();

const reviewTypesData = [
  // 효과 카테고리
  {
    review_text: "효과가 빨라요",
    emoji: "💊",
    category: "효과",
    is_active: true,
  },
  {
    review_text: "효과가 확실해요",
    emoji: "✨",
    category: "효과",
    is_active: true,
  },
  {
    review_text: "증상이 많이 개선됐어요",
    emoji: "🎯",
    category: "효과",
    is_active: true,
  },
  {
    review_text: "기대했던 효과가 있어요",
    emoji: "👍",
    category: "효과",
    is_active: true,
  },

  // 복용 편의성 카테고리
  {
    review_text: "맛이 괜찮아요",
    emoji: "😋",
    category: "복용 편의성",
    is_active: true,
  },
  {
    review_text: "삼키기 쉬워요",
    emoji: "💧",
    category: "복용 편의성",
    is_active: true,
  },
  {
    review_text: "크기가 적당해요",
    emoji: "📏",
    category: "복용 편의성",
    is_active: true,
  },
  {
    review_text: "복용법이 간단해요",
    emoji: "⏰",
    category: "복용 편의성",
    is_active: true,
  },
  {
    review_text: "포장이 편리해요",
    emoji: "📦",
    category: "복용 편의성",
    is_active: true,
  },

  // 부작용 카테고리
  {
    review_text: "부작용이 없어요",
    emoji: "😊",
    category: "부작용",
    is_active: true,
  },
  {
    review_text: "순하고 자극이 적어요",
    emoji: "🌱",
    category: "부작용",
    is_active: true,
  },
  {
    review_text: "졸음이 오지 않아요",
    emoji: "😴",
    category: "부작용",
    is_active: true,
  },
  {
    review_text: "속이 불편하지 않아요",
    emoji: "🤢",
    category: "부작용",
    is_active: true,
  },

  // 가격/접근성 카테고리
  {
    review_text: "가격이 합리적이에요",
    emoji: "💰",
    category: "가격/접근성",
    is_active: true,
  },
  {
    review_text: "구하기 쉬워요",
    emoji: "🏪",
    category: "가격/접근성",
    is_active: true,
  },
  {
    review_text: "처방받기 편해요",
    emoji: "📋",
    category: "가격/접근성",
    is_active: true,
  },

  // 기타 만족도 카테고리
  {
    review_text: "전반적으로 만족해요",
    emoji: "❤️",
    category: "기타 만족도",
    is_active: true,
  },
  {
    review_text: "재구매 의향이 있어요",
    emoji: "🔄",
    category: "기타 만족도",
    is_active: true,
  },
  {
    review_text: "의사가 추천했어요",
    emoji: "👨‍⚕️",
    category: "기타 만족도",
    is_active: true,
  },
  {
    review_text: "꾸준히 복용하고 있어요",
    emoji: "📈",
    category: "기타 만족도",
    is_active: true,
  },

  // 부정적 리뷰 카테고리
  {
    review_text: "부작용이 있어요",
    emoji: "😵",
    category: "부정적 리뷰",
    is_active: true,
  },
  {
    review_text: "효과가 늦어요",
    emoji: "⏳",
    category: "부정적 리뷰",
    is_active: true,
  },
  {
    review_text: "가격이 비싸요",
    emoji: "💸",
    category: "부정적 리뷰",
    is_active: true,
  },
  {
    review_text: "맛이 쓰거나 냄새가 나요",
    emoji: "😷",
    category: "부정적 리뷰",
    is_active: true,
  },
];

async function seedReviewTypes() {
  console.log('🌱 Starting review types seeding...');

  try {
    // 기존 데이터 확인
    const existingReviewTypes = await prisma.review_types.count();
    console.log(`📊 Existing review types: ${existingReviewTypes}`);

    if (existingReviewTypes > 0) {
      console.log('⚠️  Review types already exist. Skipping seed...');
      return;
    }

    // 데이터 삽입
    console.log('📝 Inserting review types data...');
    
    const result = await prisma.review_types.createMany({
      data: reviewTypesData.map(item => ({
        ...item,
        created_at: new Date(),
      })),
      skipDuplicates: true,
    });

    console.log(`✅ Successfully seeded ${result.count} review types`);

    // 카테고리별 통계 출력
    const categories = [...new Set(reviewTypesData.map(item => item.category))];
    for (const category of categories) {
      const count = reviewTypesData.filter(item => item.category === category).length;
      console.log(`   📂 ${category}: ${count}개`);
    }

  } catch (error) {
    console.error('❌ Error seeding review types:', error);
    throw error;
  }
}

export default seedReviewTypes;

// 직접 실행 시
if (require.main === module) {
  seedReviewTypes()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
} 