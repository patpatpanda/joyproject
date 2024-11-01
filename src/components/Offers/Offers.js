"use client";
import { useState } from "react";
import styles from "./Offers.module.css";
import Link from 'next/link';
export default function Offers() {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const offers = [
    {
      name: "Fyra dagars Karibien-kryssning",
      video: "/images/cari.mp4",
      description: "Det här paketerbjudandet är ett exklusivt erbjudande från vår(t) Resebyrå. Unna dig själv ett äventyr du sent kommer glömma! Platserna är begränsade, så kontakta oss idag för att säkerställa att du inte missar den här unika upplevelsen.",
    },
    {
      name: "Slottsrundtur i Bayern",
      video: "/images/castle.mp4",
      description: "Hör av dig om du vill veta mer om vår/våra exklusiva Slottstur i Bayern. Det finns ett begränsat antal platser kvar, så kontakta oss idag för att garantera att du inte missar erbjudandet. Förbered dig på att skapa oförglömliga minnen, och glöm inte att skicka ett vykort!",


    },
    {
      name: "Kulinarisk resa genom Sydostasien",
      image: "/images/asien.webp",
      description: "Om du gillar att få unika och spännande upplevelser är vår(t) Kulinarisk resa genom Sydostasien perfekt för dig. Oavsett om du reser själv eller med familjen så finns här något som alla kommer gilla. Kontakta oss idag för att boka din plats.",
    },
  ];

  const handleCardClick = (index) => {
    setFlippedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.offers}>
      <h2 className={styles.title}>Exklusiva Erbjudanden</h2>
      <div className={styles.grid}>
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`${styles.card} ${flippedCardIndex === index ? styles.flipped : ""}`}
            onClick={() => handleCardClick(index)}
            role="button"
            tabIndex="0"
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                {offer.video ? (
                  <video src={offer.video} className={styles.media} autoPlay loop muted playsInline />
                ) : (
                  <img src={offer.image} alt={offer.name} className={styles.media} />
                )}
                <div className={styles.overlay}>
                  <h3 className={styles.offerName}>{offer.name}</h3>
                </div>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.description}>{offer.description}</p>
                <Link href="/CallToAction" className={styles.button}>Kontakta oss</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
