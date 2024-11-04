"use client";
import { useState, useEffect } from 'react';
import styles from "./Offers.module.css";

export default function Offers() {
  const offers = [
    {
      name: "Fyra dagars Karibien-kryssning",
      video: "/images/cari.mp4",
      description: "Unna dig själv ett äventyr du sent kommer glömma! Platserna är begränsade, så kontakta oss idag för att säkerställa att du inte missar den här unika upplevelsen.",
    },
    {
      name: "Slottsrundtur i Bayern",
      video: "/videos/castle.mp4",
      description: "Hör av dig om du vill veta mer om vår exklusiva Slottstur i Bayern. Platserna är få, så kontakta oss för att garantera din plats.",
    },
    {
      name: "Kulinarisk resa genom Sydostasien",
      video: "/videos/asia.mp4",
      description: "En unik och spännande upplevelse genom Sydostasiens smaker och kulturer. Kontakta oss idag för att boka din plats.",
    },
  ];

  const [currentOffer, setCurrentOffer] = useState(0);

  // Cyklar genom erbjudandena var 7:e sekund
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [offers.length]);

  const offer = offers[currentOffer];

  return (
    <section className={styles.offers}>
      <h2 className={styles.title}>Exklusiva Erbjudanden</h2>
      <div className={styles.card}>
        <div className={styles.mediaContainer}>
          {offer.video ? (
            <video src={offer.video} className={styles.media} autoPlay loop muted playsInline />
          ) : (
            <img src={offer.image} alt={offer.name} className={styles.media} />
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.offerName}>{offer.name}</h3>
          <p className={styles.description}>{offer.description}</p>
          <button
  className={styles.button}
  onClick={() => (window.location.href = '/services#exklusiva-erbjudanden')}
>
  Visa Alla
</button>

        </div>
      </div>
    </section>
  );
}
