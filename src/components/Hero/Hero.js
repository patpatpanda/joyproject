// src/components/Hero/Hero.js
"use client";

import { useRef, useEffect, useState, useCallback } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [showFirstVideo, setShowFirstVideo] = useState(true);

  // Använder useCallback för att undvika att skapa nya funktioner varje gång komponenten renderas
  const handleFirstVideoEnd = useCallback(() => {
    setShowFirstVideo(false);
    if (video2Ref.current) {
      video2Ref.current.play().catch(() => {
        // Om den andra videon inte spelas, återgå till första videon
        setShowFirstVideo(true);
        video1Ref.current?.play();
      });
    }
  }, []);

  const handleSecondVideoEnd = useCallback(() => {
    setShowFirstVideo(true);
    video1Ref.current?.play();
  }, []);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    if (video1) {
      video1.addEventListener('ended', handleFirstVideoEnd);
    }
    if (video2) {
      video2.addEventListener('ended', handleSecondVideoEnd);
    }

    return () => {
      if (video1) {
        video1.removeEventListener('ended', handleFirstVideoEnd);
      }
      if (video2) {
        video2.removeEventListener('ended', handleSecondVideoEnd);
      }
    };
  }, [handleFirstVideoEnd, handleSecondVideoEnd]);

  return (
    <section className={styles.hero}>
      <video
        ref={video1Ref}
        autoPlay
        muted
        playsInline
        loop={!showFirstVideo} // Loopa första videon om fallback är aktiv
        className={styles.backgroundVideo}
        style={{ display: showFirstVideo ? 'block' : 'none' }}
      >
        <source src="/images/li.mp4" type="video/mp4" />
        Din webbläsare stöder inte videouppspelning.
      </video>

      <video
        ref={video2Ref}
        muted
        playsInline
        className={styles.backgroundVideo}
        style={{ display: showFirstVideo ? 'none' : 'block' }}
      >
        <source src="/images/lo.mp4" type="video/mp4" />
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
