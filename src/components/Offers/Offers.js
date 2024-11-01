// src/components/Offers/Offers.js
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Offers.module.css';

export default function Offers() {
  const offers = [
    {
      name: "Fyra dagars Karibien-kryssning",
      video: "/images/cari.mp4",
      description: "Detta exklusiva erbjudande från vår resebyrå tar dig på ett äventyr du sent kommer glömma! Platserna är begränsade, kontakta oss idag för att försäkra dig om att inte missa denna unika upplevelse.",
    },
    {
      name: "Slottsrundtur i Bayern",
      video: "/images/castle.mp4",
      description: "Är du intresserad av vår exklusiva slottsrundtur i Bayern? Platserna är få, så kontakta oss idag för att garantera din plats. Förbered dig för att skapa oförglömliga minnen – och glöm inte att skicka ett vykort!",
    },
    {
      name: "Kulinarisk resa genom Sydostasien",
      image: "/images/asien.webp",
      description: "För en unik och spännande upplevelse, är vår kulinariska resa genom Sydostasien perfekt för dig. Oavsett om du reser ensam eller med familjen, finns det något för alla. Kontakta oss idag för att boka din plats.",
    },
  ];

  return (
    <section className={styles.offers}>
      <h2 className={styles.title}>Exklusiva Erbjudanden</h2>
      <div className={styles.grid}>
        {offers.map((offer, index) => (
          <FlipCard key={index} offer={offer} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ offer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleCardClick}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          {offer.video ? (
            <video
              src={offer.video}
              className={styles.media}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img src={offer.image} alt={offer.name} className={styles.media} />
          )}
          <div className={styles.overlay}>
            <h3 className={styles.offerName}>{offer.name}</h3>
          </div>
        </div>
        <div className={styles.cardBack}>
          <p className={styles.description}>{offer.description}</p>
          <Link href="/contact" className={styles.button}>Kontakta oss</Link>
        </div>
      </div>
    </div>
  );
}
