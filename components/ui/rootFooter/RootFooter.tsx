"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./rootFooter.module.scss";

export default function RootFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logos/favicon.png"
              alt="약알고 로고"
              width={24}
              height={24}
              style={{ marginRight: "-7px" }}
            />
            약알고
          </Link>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} 약알고. All rights reserved.
          </p>
        </div>
        <nav className={styles.nav}>
          <Link href="/terms" className={styles.navLink}>
            이용약관
          </Link>
          <Link href="/privacy" className={styles.navLink}>
            개인정보처리방침
          </Link>
          <Link
            href="https://github.com/FRONT-END-BOOTCAMP-PLUS-4/YAK_AL_GO"
            className={styles.navLink}
          >
            GitHub
          </Link>
        </nav>
      </div>
    </footer>
  );
}
