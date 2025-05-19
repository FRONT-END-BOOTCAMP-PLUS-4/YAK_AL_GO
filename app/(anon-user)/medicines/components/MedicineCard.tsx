import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import styles from "../medicines.module.scss";
import type { Medicine } from "./data";

interface MedicineCardProps {
  medicine: Medicine;
}

export const MedicineCard = ({ medicine }: MedicineCardProps) => {
  return (
    <Link href={`/medicines/${medicine.id}`}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <div className={styles.cardInner}>
            <div className={styles.imageContainer}>
              <Image
                src={medicine.image}
                alt={medicine.name}
                width={80}
                height={80}
                className={styles.cardImage}
                priority
                unoptimized
              />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{medicine.name}</h3>
                <Badge variant="outline" className={styles.badge}>
                  {medicine.type}
                </Badge>
              </div>
              <p className={styles.cardCompany}>{medicine.company}</p>
              <p className={styles.cardDescription}>{medicine.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
