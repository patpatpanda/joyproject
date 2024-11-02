// src/components/Header/Header.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Stänger menyn när en länk klickas
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <span className={styles.logoText}>JOY Destinations</span>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={closeMenu}>Hem</Link>
          <Link href="/services" onClick={closeMenu}>Tjänster</Link>
          
          {/* Dropdown för Destinationer */}
          <div className={styles.dropdown}>
            <span className={styles.dropdownTitle}>Destinationer</span>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/destination/italy" onClick={closeMenu}>Italien</Link></li>
              <li><Link href="/destination/norway" onClick={closeMenu}>Norge</Link></li>
              <li><Link href="/destination/Austria" onClick={closeMenu}>Österrike</Link></li>
              {/* Lägg till fler destinationer */}
            </ul>
          </div>

          <Link href="/#contact" onClick={closeMenu}>Kontakt</Link>
        </nav>

        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}
