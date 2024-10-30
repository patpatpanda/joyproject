// src/components/Header/Header.js
"use client";

import { useState } from 'react';
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
          <span className={styles.logoText}>JOY Destinations</span> {/* Ny logotext */}
        </div>
        
        {/* Om menyn är öppen, lägg till klassen `navOpen` */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <a href="#home">Hem</a>
          <a href="#services">Tjänster</a>
          <a href="#destinations">Destinationer</a>
          <a href="#contact">Kontakt</a>
        </nav>
        
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}
