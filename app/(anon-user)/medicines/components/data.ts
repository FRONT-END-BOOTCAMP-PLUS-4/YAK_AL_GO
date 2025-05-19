export interface Medicine {
  id: number;
  name: string;
  company: string;
  type: string;
  description: string;
  image: string;
}

export const medicinesData: Medicine[] = [
  {
    id: 1,
    name: "타이레놀",
    company: "한국얀센",
    type: "진통제",
    description: "해열, 진통, 소염 작용",
    image: "/images/medicine-placeholder.png",
  },
  {
    id: 2,
    name: "판콜에이",
    company: "동아제약",
    type: "감기약",
    description: "감기 증상 완화",
    image: "/images/medicine-placeholder.png",
  },
  {
    id: 3,
    name: "게보린",
    company: "삼진제약",
    type: "진통제",
    description: "두통, 치통, 생리통 완화",
    image: "/images/medicine-placeholder.png",
  },
  {
    id: 4,
    name: "베아제",
    company: "대웅제약",
    type: "소화제",
    description: "소화불량, 체함, 위부팽만감",
    image: "/images/medicine-placeholder.png",
  },
  {
    id: 5,
    name: "훼스탈골드",
    company: "한독",
    type: "소화제",
    description: "소화불량, 식체, 위부팽만감",
    image: "/images/medicine-placeholder.png",
  },
  {
    id: 6,
    name: "판피린",
    company: "동아제약",
    type: "진통제",
    description: "두통, 치통, 근육통 완화",
    image: "/images/medicine-placeholder.png",
  },
];
