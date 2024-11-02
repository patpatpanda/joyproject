// src/components/Hero/Hero.js
"use client";

import { useRef, useEffect, useState } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [showFirstVideo, setShowFirstVideo] = useState(true);

  useEffect(() => {
    // Funktion för att hantera slutet på första videon
    const handleFirstVideoEnd = () => {
      setShowFirstVideo(false);
      if (video2Ref.current) {
        video2Ref.current.play().catch(() => {
          // Om den andra videon inte spelas, återgå till första videon
          setShowFirstVideo(true);
          video1Ref.current.play();
        });
      }
    };

    // Funktion för att hantera slutet på andra videon
    const handleSecondVideoEnd = () => {
      setShowFirstVideo(true);
      video1Ref.current.play();
    };

    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    video1.addEventListener('ended', handleFirstVideoEnd);
    video2.addEventListener('ended', handleSecondVideoEnd);

    return () => {
      video1.removeEventListener('ended', handleFirstVideoEnd);
      video2.removeEventListener('ended', handleSecondVideoEnd);
    };
  }, []);

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
