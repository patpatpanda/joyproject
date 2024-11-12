"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (menuOpen) closeMenu(); // Stäng hela menyn om toggle-menyn är öppen
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !menuOpen
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
         {/* Logotypen */}
<div className={styles.logo}>
  <div className={styles.lineContainer}>
    <div className={styles.lineLeft}></div>
    <h1>Destination of Joy</h1>
    <div className={styles.lineRight}></div>
  </div>
  <div className={styles.logoLine}></div> {/* Linje under texten */}
  <h2>{language === 'sv' ? 'Omfamna resan' : 'Embrace the Journey'}</h2>
</div>

        </div>

        {/* Stäng-knapp endast när menyn är öppen */}
        <button
          className={`${styles.menuButton} ${menuOpen ? styles.closeButton : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={closeMenu}>{language === 'sv' ? 'Hem' : 'Home'}</Link>
          <Link href="/services" onClick={closeMenu}>{language === 'sv' ? 'Tjänster' : 'Services'}</Link>

          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              className={`${styles.dropdownTitle}`}
              onClick={toggleDropdown}
            >
              {language === 'sv' ? 'Destinationer' : 'Destinations'}
            </button>
            <ul className={`${styles.dropdownMenu} ${dropdownOpen ? styles.dropdownMenuOpen : ''}`}>
              <li><Link href="/destination/italy" onClick={closeMenu}>{language === 'sv' ? 'Italien' : 'Italy'}</Link></li>
              <li><Link href="/destination/norway" onClick={closeMenu}>{language === 'sv' ? 'Norge' : 'Norway'}</Link></li>
              <li><Link href="/destination/Austria" onClick={closeMenu}>{language === 'sv' ? 'Österrike' : 'Austria'}</Link></li>
            </ul>
          </div>

          <Link href="/#contact" onClick={closeMenu}>{language === 'sv' ? 'Kontakt' : 'Contact'}</Link>
          <Link href="/blog" onClick={closeMenu}>{language === 'sv' ? 'Blogg' : 'Blog'}</Link>

          {/* Språkväxlingsknapp */}
          <button onClick={toggleLanguage} className={styles.languageButton}>
            {language === 'sv' ? 'Switch to English' : 'Byt till Svenska'}
          </button>
        </nav>
      </div>
    </header>
  );
}
