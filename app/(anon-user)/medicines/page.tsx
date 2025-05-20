"use client";

import { ChangeEvent, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import styles from "./medicines.module.scss";
import { cn } from "@/lib/utils";

// 약 데이터 타입 정의
interface Medicine {
  id: number;
  name: string;
  company: string;
  type: string;
  description: string;
  image: string;
}

// 약 데이터
const medicinesData: Medicine[] = [
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

const MedicinesPage = () => {
  const [medicines, setMedicines] = useState(medicinesData);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // 정렬 핸들러
  const handleSort = () => {
    if (sortOrder === null || sortOrder === "desc") {
      setMedicines(
        [...medicines].sort((a, b) => a.name.localeCompare(b.name, "ko"))
      );
      setSortOrder("asc");
    } else {
      setMedicines(
        [...medicines].sort((a, b) => b.name.localeCompare(a.name, "ko"))
      );
      setSortOrder("desc");
    }
  };

  // 검색 핸들러
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // 탭 변경 핸들러
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // 필터링 및 정렬 적용
  useEffect(() => {
    let filtered = medicinesData;

    // 검색어 필터링
    if (searchQuery) {
      filtered = filtered.filter(
        (medicine) =>
          medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          medicine.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          medicine.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 탭 필터링
    if (activeTab !== "all") {
      const typeMap: Record<string, string> = {
        painkillers: "진통제",
        cold: "감기약",
        digestive: "소화제",
        antibiotics: "항생제",
      };
      filtered = filtered.filter(
        (medicine) => medicine.type === typeMap[activeTab]
      );
    }

    // 정렬 적용
    if (sortOrder === "asc") {
      filtered = [...filtered].sort((a, b) =>
        a.name.localeCompare(b.name, "ko")
      );
    } else if (sortOrder === "desc") {
      filtered = [...filtered].sort((a, b) =>
        b.name.localeCompare(a.name, "ko")
      );
    }

    setMedicines(filtered);
  }, [searchQuery, activeTab, sortOrder]);

  return (
    <div className="main-container">
      <div className={styles.headerSection}>
        <h1 className={styles.title}>약 검색</h1>
        <p className={styles.description}>
          약 이름, 성분, 제조사 등으로 검색하여 원하는 약을 찾아보세요.
        </p>
      </div>

      <div className={styles.searchSection}>
        <div className={styles.searchInputContainer}>
          <Input
            type="text"
            placeholder="약 이름, 성분, 제조사 검색"
            value={searchQuery}
            onChange={handleSearch}
          />
          <Button className={styles.searchButton} type="submit">
            <Search
              className="h-4 w-4"
              style={{ width: "20px", height: "20px" }}
            />
            {/* <span className="sr-only">검색</span> */}
          </Button>
        </div>
        <div className={styles.actionButtons}>
          <Button
            variant="outline"
            className={styles.sortButton}
            onClick={handleSort}
          >
            <ArrowUpDown
              className="h-4 w-4"
              style={{ width: "16px", height: "16px" }}
            />
            {sortOrder === "asc" ? (
              <span>
                <span className={styles.sortText}>가나다순</span>{" "}
                <span className={styles.arrow}>↓</span>
              </span>
            ) : sortOrder === "desc" ? (
              <span>
                <span className={styles.sortText}>가나다순</span>{" "}
                <span className={styles.arrow}>↑</span>
              </span>
            ) : (
              <span className={styles.sortText}>가나다순</span>
            )}
          </Button>
          <Button variant="outline" className={styles.filterButton}>
            <Filter
              className="h-4 w-4"
              style={{ width: "16px", height: "16px" }}
            />
            필터
          </Button>
        </div>
      </div>

      <div className={styles.tabList}>
        <button
          className={cn(styles.tab, activeTab === "all" && styles.tabActive)}
          onClick={() => handleTabChange("all")}
        >
          전체
        </button>
        <button
          className={cn(
            styles.tab,
            activeTab === "painkillers" && styles.tabActive
          )}
          onClick={() => handleTabChange("painkillers")}
        >
          진통제
        </button>
        <button
          className={cn(styles.tab, activeTab === "cold" && styles.tabActive)}
          onClick={() => handleTabChange("cold")}
        >
          감기약
        </button>
        <button
          className={cn(
            styles.tab,
            activeTab === "digestive" && styles.tabActive
          )}
          onClick={() => handleTabChange("digestive")}
        >
          소화제
        </button>
        <button
          className={cn(
            styles.tab,
            activeTab === "antibiotics" && styles.tabActive
          )}
          onClick={() => handleTabChange("antibiotics")}
        >
          항생제
        </button>
      </div>

      <div className={styles.cardGrid}>
        {medicines.length > 0 ? (
          medicines.map((medicine) => (
            <Link
              href={`/medicines/${medicine.id}`}
              key={medicine.id}
              className={styles.cardLink}
            >
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.cardInner}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={medicine.image}
                        alt={medicine.name}
                        width={80}
                        height={80}
                        className={styles.cardImage}
                        unoptimized
                      />
                    </div>
                    <div className={styles.cardInfo}>
                      <div className={styles.cardHeader}>
                        <h3 className={styles.cardTitle}>{medicine.name}</h3>
                        <span className={styles.medicineTypeTag}>
                          {medicine.type}
                        </span>
                      </div>
                      <p className={styles.cardCompany}>{medicine.company}</p>
                      <p className={styles.cardDescription}>
                        {medicine.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicinesPage;
