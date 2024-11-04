// src/components/AboutUs/AboutUs.js
"use client";

import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section className={styles.aboutUsWrapper}>
      {/* Lutande övergång (top) */}
      <div className={styles.slantedTop}></div>

      {/* About Us Content */}
      <div className={styles.aboutUsContent}>
        <h2 className={styles.title}>Om  Destinations of Joy</h2>
        <p className={styles.description}>
          Joy Destinations är en premiumresebyrå som erbjuder exklusiva, skräddarsydda resor för dig som söker unika upplevelser runt om i världen. Vårt fokus ligger på att skapa minnesvärda resor som kombinerar lyx, kultur och äventyr i en harmoni av autentiska upplevelser och personlig service. Med vårt team av erfarna reseexperter och ett brett nätverk av samarbetspartners, säkerställer vi att varje detalj i din resa blir en del av en oförglömlig helhetsupplevelse.
        </p>
        <p className={styles.tagline}>
          Upplev världen på ett helt nytt sätt - låt oss förvandla dina drömmar till verklighet.
        </p>
        
      </div>

      {/* Lutande övergång (bottom) */}
      <div className={styles.slantedBottom}></div>
    </section>
  );
}
