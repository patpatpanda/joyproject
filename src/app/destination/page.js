// src/app/destination/page.js
"use client";

import Link from 'next/link';
import styles from './Destinations.module.css';

const Destinations = () => {
  const destinations = [
    {
      name: "Italien",
      description: "Utforska soliga stränder, fantastisk mat och historiska sevärdheter i Italien.",
      image: "/images/italy.jpg",
      link: "/destination/italy"
    },
    {
      name: "Norge",
      description: "Upplev fantastiska fjordar, norrsken och unika naturupplevelser i Norge.",
      image: "/images/norway.jpg",
      link: "/destination/norway"
    },
    {
      name: "Österrike",
      description: "Njut av Alpernas skönhet, skidåkning och kultur i Österrike.",
      image: "/images/österike.jpg",
      link: "/destination/austria"
    }
  ];

  return (
    <section className={styles.destinations}>
      <h2 className={styles.title}>Välj Rätt Destination</h2>
      <p className={styles.subtitle}>
        Här är några tips för att hjälpa dig att välja den perfekta resan baserat på dina preferenser och behov.
      </p>
      <div className={styles.tips}>
        <div className={styles.tip}>
          <h3>Definiera dina mål</h3>
          <p>Fundera på vad du vill få ut av din resa – äventyr, kultur, avkoppling eller kanske en mix av allt? Att ha ett tydligt mål hjälper dig att välja rätt destination.</p>
        </div>
        <div className={styles.tip}>
          <h3>Tänk på din budget</h3>
          <p>Resor kan variera kraftigt i kostnad beroende på destination, boende och aktiviteter. Att sätta en budget i förväg hjälper dig att begränsa alternativen och undvika överraskningar.</p>
        </div>
        <div className={styles.tip}>
          <h3>Undersök klimatet</h3>
          <p>Klimatet påverkar resan avsevärt. Vill du njuta av sol och värme, eller är svalare temperaturer och snö mer i din smak? Kolla väderförhållandena för att få en bättre upplevelse.</p>
        </div>
        <div className={styles.tip}>
          <h3>Utforska kulturella upplevelser</h3>
          <p>Om kultur och traditioner är viktiga för dig, undersök vilka kulturella sevärdheter, festivaler och historiska platser som finns på olika destinationer.</p>
        </div>
        <div className={styles.tip}>
          <h3>Resans längd och logistik</h3>
          <p>Planera efter hur lång tid du har tillgängligt. Vissa destinationer är bättre lämpade för kortare resor, medan andra kräver mer tid för att verkligen upplevas.</p>
        </div>
        <div className={styles.tip}>
          <h3>Utforska lokala smultronställen</h3>
          <p>Förutom de välkända turistattraktionerna kan det vara givande att besöka mindre kända platser som bara lokalbefolkningen känner till. Genom att prata med lokalinvånare eller göra lite research innan resan kan du hitta unika sevärdheter, restauranger och evenemang som ger en mer autentisk upplevelse.</p>
        </div>
      </div>
      <h2 className={styles.destinationsTitle}>Våra Destinationer</h2>
      <div className={styles.cardsContainer}>
        {destinations.map((destination, index) => (
          <Link href={destination.link} key={index}>
            <div className={styles.card}>
              <img src={destination.image} alt={destination.name} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{destination.name}</h3>
                <p className={styles.cardDescription}>{destination.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
