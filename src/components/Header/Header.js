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

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <span className={styles.logoText}>JOY Destinations</span>
        </div>
        
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/">Hem</Link>
          <Link href="/#services">Tjänster</Link>
          
          {/* Dropdown för Destinationer */}
          <div className={styles.dropdown}>
            <Link href="/destination">Destinationer</Link>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/destination/italy">Italien</Link></li>
              <li><Link href="/destination/norway">Norge</Link></li>
              <li><Link href="/destination/Austria">Österike</Link></li>
              {/* Lägg till fler destinationer */}
            </ul>
          </div>

          <Link href="/#contact">Kontakt</Link>
        </nav>

        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}
