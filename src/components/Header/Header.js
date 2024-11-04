"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
          <span className={styles.logoText}>JOY Destinations</span>
        </div>

        {/* Stäng-knapp endast när menyn är öppen */}
        <button
          className={`${styles.menuButton} ${menuOpen ? styles.closeButton : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={closeMenu}>Hem</Link>
          <Link href="/services" onClick={closeMenu}>Tjänster</Link>

          <div className={styles.dropdown} ref={dropdownRef}>
            <Link href="/destination" className={styles.dropdownTitle} onClick={toggleDropdown}>
              Destinationer
            </Link>
            <ul className={`${styles.dropdownMenu} ${dropdownOpen ? styles.dropdownMenuOpen : ''}`}>
              <li><Link href="/destination/italy" onClick={closeMenu}>Italien</Link></li>
              <li><Link href="/destination/norway" onClick={closeMenu}>Norge</Link></li>
              <li><Link href="/destination/Austria" onClick={closeMenu}>Österrike</Link></li>
            </ul>
          </div>

          <Link href="/#contact" onClick={closeMenu}>Kontakt</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
        </nav>
      </div>
    </header>
  );
}
