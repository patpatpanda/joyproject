"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    if (dropdownOpen) {
      closeMenu(); // Om dropdown är öppen, stäng den
    } else {
      setDropdownOpen(true); // Annars, öppna dropdown
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <span className={styles.logoText}>JOY Destinations</span>
        </div>

        {/* Stäng-knapp endast när menyn är öppen */}
        <button className={`${styles.menuButton} ${menuOpen ? styles.closeButton : ''}`} onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={closeMenu}>Hem</Link>
          <Link href="/services" onClick={closeMenu}>Tjänster</Link>

          <div className={styles.dropdown} onClick={toggleDropdown}>
            <Link href="/destination" className={styles.dropdownTitle} onClick={closeMenu}>
              Destinationer
            </Link>
            <ul className={`${styles.dropdownMenu} ${dropdownOpen ? styles.dropdownMenuOpen : ''}`}>
              <li><Link href="/destination/italy" onClick={closeMenu}>Italien</Link></li>
              <li><Link href="/destination/norway" onClick={closeMenu}>Norge</Link></li>
              <li><Link href="/destination/austria" onClick={closeMenu}>Österrike</Link></li>
            </ul>
          </div>

          <Link href="/#contact" onClick={closeMenu}>Kontakt</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
        </nav>
      </div>
    </header>
  );
}
