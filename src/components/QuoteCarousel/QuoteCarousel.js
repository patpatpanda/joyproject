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
  const [displayText, setDisplayText] = useState(quotes[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setFade(true);
    }, 100);

    const fadeOutTimeout = setTimeout(() => {
      setFade(false);
    }, 4000);

    const changeQuoteTimeout = setTimeout(() => {
      const nextIndex = (currentQuoteIndex + 1) % quotes.length;
      setCurrentQuoteIndex(nextIndex);
      setDisplayText(quotes[nextIndex]);
      setFade(true);
    }, 4500);

    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(changeQuoteTimeout);
    };
  }, [currentQuoteIndex, quotes]);

  return (
    <section className={styles.quoteCarousel}>
      <div className={`${styles.quoteContainer} ${fade ? styles.fadeIn : styles.fadeOut}`}>
        <p className={styles.quoteText}>
          &quot;{displayText}&quot;
        </p>
      </div>
    </section>
  );
}
