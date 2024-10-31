// src/components/Gallery/Gallery.js
"use client";

import styles from './Gallery.module.css';

export default function Gallery() {
  const destinations = [
    { name: "Italien", image: "/images/italy.jpg" },
    { name: "Österrike", image: "/images/österike.jpg" },
    { name: "Norge", image: "/images/norway.jpg" },
   
  ];

  return (
    <section className={styles.gallery}>
      <h2 className={styles.title}>Utvalda Destinationer</h2>
      <div className={styles.grid}>
        {destinations.map((destination, index) => (
          <div key={index} className={styles.card}>
            <img src={destination.image} alt={destination.name} className={styles.image} />
            <div className={styles.overlay}>
              <h3 className={styles.destinationName}>{destination.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
