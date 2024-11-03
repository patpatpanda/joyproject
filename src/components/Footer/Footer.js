// src/components/Footer/Footer.js
"use client";

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>JOY Destinations</h2>
          <p className={styles.tagline}>Upptäck världen med oss.</p>
        </div>

        <div className={styles.linksSection}>
          <h3 className={styles.sectionTitle}>Snabbnavigering</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/" className={styles.link}>Hem</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services" className={styles.link}>Tjänster</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/destination" className={styles.link}>Destinationer</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/#contact" className={styles.link}>Kontakt</Link>
            </li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Kontakt</h3>
          <p>Email: joyrudqvist@gmail.com</p>
          <p>Telefon: +46 123 456 789</p>
          <p>Adress: Storgatan 1, 111 22 Stockholm</p>
        </div>

        <div className={styles.socialSection}>
          <h3 className={styles.sectionTitle}>Följ oss</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Twitter</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} JOY Destinations. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}
