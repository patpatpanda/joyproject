// src/components/Offers/Offers.js
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Offers.module.css";

export default function Offers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const offers = [
    {
      name: "Fyra dagars Karibien-kryssning",
      video: "/images/cari.mp4",
      description:
        "Det här paketerbjudandet är ett exklusivt erbjudande från vår resebyrå. Unna dig själv ett äventyr du sent kommer glömma!",
      fullDescription:
        "Detta exklusiva erbjudande från vår resebyrå tar dig på ett äventyr du sent kommer glömma! Kontakta oss idag för att försäkra dig om att inte missa denna unika upplevelse.",
    },
    {
      name: "Slottsrundtur i Bayern",
      video: "/images/castle.mp4",
      description:
        "Upptäck det magiska i vår exklusiva slottsrundtur i Bayern. Platserna är få, så kontakta oss idag för att garantera din plats.",
      fullDescription:
        "Är du intresserad av vår exklusiva slottsrundtur i Bayern? Förbered dig för att skapa oförglömliga minnen – och glöm inte att skicka ett vykort!",
    },
    {
      name: "Kulinarisk resa genom Sydostasien",
      image: "/images/asien.webp",
      description:
        "För unika och spännande matupplevelser är vår kulinariska resa genom Sydostasien perfekt. Boka din plats idag.",
      fullDescription:
        "Oavsett om du reser ensam eller med familjen, finns det något för alla. Kontakta oss idag för att boka din plats.",
    },
  ];

  const nextOffer = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + offers.length) % offers.length
    );
  };

  const currentOffer = offers[currentIndex];

  return (
    <section className={styles.offers}>
      <h2 className={styles.title}>Exklusiva Erbjudanden</h2>
      <div className={styles.carouselContainer}>
        <button className={styles.prevButton} onClick={prevOffer}>
          ‹
        </button>
        <div className={styles.card}>
          <div className={styles.mediaContainer}>
            {currentOffer.video ? (
              <video
                src={currentOffer.video}
                className={styles.media}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={currentOffer.image}
                alt={currentOffer.name}
                className={styles.media}
              />
            )}
          </div>
          <div className={styles.content}>
            <h3 className={styles.offerName}>{currentOffer.name}</h3>
            <p className={styles.description}>{currentOffer.description}</p>
            <Link href="/services" className={styles.button}>
              Läs mer
            </Link>
          </div>
        </div>
        <button className={styles.nextButton} onClick={nextOffer}>
          ›
        </button>
      </div>
    </section>
  );
}
