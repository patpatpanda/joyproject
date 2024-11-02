// src/app/services/Services.js
"use client";
import { useEffect } from 'react';
import styles from './Services.module.css';
import ExclusiveExperiences from '../../components/ExclusiveExperiences/ExclusiveExperiences';

export default function Services() {
  const services = [
    {
      title: "Rådgivning för Familjeresor",
      description: "Att planera en resa kan vara överväldigande, och det är därför du behöver en/ett Resebyrå som du kan lita på. Med vår(t) Rådgivning för familjeresor kan du känna dig trygg i att vi vägleder dig genom varje steg på vägen.",
      icon: "family",
    },
    {
      title: "Reseplanering",
      description: "Oavsett vilken typ av resa du har i åtanke så har vi resurserna och expertisen som krävs för att skapa den perfekta resan. Se till att du bokar i förväg. Vår(t) Reseplanering är en av de mest populära tjänsterna och platserna tar snabbt slut.",
      icon: "planning",
    },
    {
      title: "Internationell resevägledning",
      description: "Vi har försett våra kunder med Internationell resevägledning under många år, och idag har vi den erfarenhet och expertis som krävs för att varje bokning ska bli så smidigt som möjligt. Om du har frågor får du gärna kontakta oss.",
      icon: "globe",
    },
  ];

  useEffect(() => {
    // Dynamiskt lägg till en fördröjning per kort för att få in fade-in effekten i sekvens
    const cards = document.querySelectorAll(`.${styles.serviceCard}`);
    cards.forEach((card, index) => {
      card.style.setProperty('--animation-delay', `${index * 0.5}s`);
    });
  }, []);

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Våra Tjänster</h2>
      <div className={styles.serviceContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={`${styles.iconContainer} ${styles[service.icon]}`}></div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
      <ExclusiveExperiences />
    </section>
  );
}
