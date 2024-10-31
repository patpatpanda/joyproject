// src/components/QuoteCarousel/QuoteCarousel.js
"use client";

import { useState, useEffect } from 'react';
import styles from './QuoteCarousel.module.css';

export default function QuoteCarousel() {
  const quotes = [
    "Livet är en resa, inte en destination.",
    "Världen är en bok och de som inte reser läser bara en sida.",
    "Res långt, res ofta, och lev med passion.",
    "Att resa är att leva - upptäck, upplev och inspireras.",
    "Dröm stort, res långt, och låt varje steg forma din själ.",
    "Världen är full av under – vänta inte på rätt ögonblick, skapa det.",
    "Där kartan slutar börjar äventyret.",
    "Att resa är att upptäcka hur mycket mer det finns att lära sig."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Starta med in-fade
    const fadeInTimeout = setTimeout(() => {
      setFade(true);
    }, 100);

    // Byt till ut-fade efter 4 sekunder
    const fadeOutTimeout = setTimeout(() => {
      setFade(false);
    }, 4000);

    // Uppdatera citat och återställ fade-in efter 4.5 sekunder
    const changeQuoteTimeout = setTimeout(() => {
      const nextIndex = (currentQuoteIndex + 1) % quotes.length;
      setCurrentQuoteIndex(nextIndex);
      setFade(true);
    }, 4500);

    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(changeQuoteTimeout);
    };
  }, [currentQuoteIndex]);

  return (
    <section className={styles.quoteCarousel}>
      <div className={`${styles.quoteContainer} ${fade ? styles.fadeIn : styles.fadeOut}`}>
        <p className={styles.quoteText}>
          &quot;{quotes[currentQuoteIndex]}&quot;
        </p>
      </div>
    </section>
  );
}
