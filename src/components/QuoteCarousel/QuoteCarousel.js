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
    // Visa citatet med in-fade och vänta 4 sekunder
    const fadeInTimeout = setTimeout(() => {
      setFade(true);
    }, 100); // Kort fördröjning för att trigga fade in

    // Efter 4 sekunder, börja uttoning
    const fadeOutTimeout = setTimeout(() => {
      setFade(false);
    }, 4000); // Visa citatet i 4 sekunder

    // Efter 4.5 sekunder, byt till nästa citat och börja fade in
    const changeQuoteTimeout = setTimeout(() => {
      setCurrentQuoteIndex((currentQuoteIndex + 1) % quotes.length);
      setDisplayText(quotes[(currentQuoteIndex + 1) % quotes.length]);
      setFade(true);
    }, 4500); // Totalt 4.5 sekunder (med 0.5 sekunder fade out)

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
          "{displayText}"
        </p>
      </div>
    </section>
  );
}
