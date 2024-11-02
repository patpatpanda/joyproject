// src/components/Hero/Hero.js
"use client";

import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const video1Ref = useRef(null);

  useEffect(() => {
    const video1 = video1Ref.current;
    if (video1) {
      video1.play().catch((error) => {
        console.error("Error playing the video:", error);
      });
    }
  }, []);

  return (
    <section className={styles.hero}>
      <video
        ref={video1Ref}
        autoPlay
        muted
        playsInline
        loop
        className={styles.backgroundVideo}
      >
        <source src="/videos/wtf.mp4" type="video/mp4" />
        Din webbläsare stöder inte videouppspelning.
      </video>

      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <img src="/images/joylogo.jpg" alt="Logga" className={styles.logo} />
        <p className={styles.subtitle}>
          Välkommen till en värld bortom det vanliga. Hos oss handlar resande om mer än
          att bara besöka en plats – det är en resa in i själens innersta hörn. Med våra
          exklusiva och skräddarsydda resor får du chansen att utforska ikoniska platser
          och gömda pärlor, omslutna av lyx och omtanke.
        </p>
        <Link href="/services">
          <button className={styles.ctaButton}>Upptäck dina drömmars resa</button>
        </Link>
      </div>
    </section>
  );
}
