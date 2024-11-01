// src/components/Footer/Footer.js
"use client";

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
          <ul className={styles.linkList}> {/* Lokal klass för ul */}
            <li className={styles.linkItem}><a href="#home" className={styles.link}>Hem</a></li>
            <li className={styles.linkItem}><a href="#services" className={styles.link}>Tjänster</a></li>
            <li className={styles.linkItem}><a href="#destinations" className={styles.link}>Destinationer</a></li>
            <li className={styles.linkItem}><a href="#contact" className={styles.link}>Kontakt</a></li>
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} JOY Destinations. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}
