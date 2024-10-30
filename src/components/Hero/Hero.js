// src/components/Hero/Hero.js
"use client";

import { useRef, useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  // Referenser till de två videoklippen
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [showSecondVideo, setShowSecondVideo] = useState(false);

  useEffect(() => {
    // När den första videon är slut, starta den andra och dölj den första
    const handleVideoEnd = () => {
      setShowSecondVideo(true); // Visa den andra videon
      video2Ref.current.play(); // Starta den andra videon
    };

    // Lägg till event listener på den första videon
    const video1 = video1Ref.current;
    video1.addEventListener('ended', handleVideoEnd);

    return () => {
      video1.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <video
        ref={video1Ref}
        autoPlay
        muted
        className={styles.backgroundVideo}
        style={{ display: showSecondVideo ? 'none' : 'block' }} // Dölj efter första videon
      >
        <source src="/images/li.mp4" type="video/mp4" />
        Din webbläsare stöder inte videouppspelning.
      </video>

      <video
        ref={video2Ref}
        muted
        className={styles.backgroundVideo}
        style={{ display: showSecondVideo ? 'block' : 'none' }} // Visa endast när andra videon är aktiv
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
        <button className={styles.ctaButton}>Upptäck dina drömmars resa</button>
      </div>
    </section>
  );
}
