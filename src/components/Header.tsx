"use client";
import { useState, useEffect } from "react";
import styles from "@/app/page.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    // Tempatkan konten Header yang ada di sini, pastikan untuk menambahkan state isMobileMenuOpen
    // Contoh:
    <header className={styles.header}>
      {/* Konten Header */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={styles.menuBtn}>
        {/* Ikon Menu */}
      </button>
      {isMobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          {/* Menu Mobile */}
        </div>
      )}
    </header>
  );
}
