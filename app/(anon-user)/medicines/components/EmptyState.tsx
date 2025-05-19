import styles from "../medicines.module.scss";

export const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <p className={styles.emptyText}>검색 결과가 없습니다.</p>
    </div>
  );
};
