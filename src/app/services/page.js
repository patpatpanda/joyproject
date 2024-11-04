"use client";
import { useEffect } from 'react';
import styles from './Services.module.css';
import { FaUsers, FaPlane, FaGlobe } from 'react-icons/fa';
import ExclusiveExperiences from '../../components/ExclusiveExperiences/ExclusiveExperiences';
import ExclusiveOffers from '../../components/ExclusiveOffers/ExclusiveOffers';

export default function Services() {
  const services = [
    {
      title: "Rådgivning för Familjeresor",
      description: "Vi erbjuder pålitlig rådgivning för familjeresor, så att du kan känna dig trygg i att varje steg är planerat för en minnesvärd upplevelse.",
      icon: <FaUsers />,
    },
    {
      title: "Reseplanering",
      description: "Med vår omfattande expertis skapar vi resplaner som passar alla dina behov. Perfekt för både soloäventyr och gruppresor.",
      icon: <FaPlane />,
    },
    {
      title: "Internationell resevägledning",
      description: "Med år av erfarenhet guidar vi våra kunder genom internationella resor med enkelhet och professionalism.",
      icon: <FaGlobe />,
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.serviceCard}`);
    cards.forEach((card, index) => {
      card.style.setProperty('--animation-delay', `${index * 0.3}s`);
    });
  }, []);

  return (
    <section className={styles.servicesSection}>
      <h1 className={styles.elegantTitle}>Tjänster</h1>

      {/* Sektion 1: Tjänster */}
      <div id="Expertise" className={styles.serviceContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconContainer}>{service.icon}</div>
            <h4 className={styles.cardTitle}>{service.title}</h4>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.divider}>
        <h3 className={styles.dividerTitle}>Utforska Våra Exklusiva Upplevelser</h3>
        <p className={styles.dividerSubtitle}>
          För att göra din resa extra minnesvärd, erbjuder vi unika och skräddarsydda upplevelser som du inte hittar någon annanstans.
        </p>
        <hr className={styles.dividerLine} />
      </div>

      {/* Sektion 2: Exklusiva Upplevelser */}
      <div id="exklusiva-upplevelser" className={styles.exclusiveExperiences}>
        <ExclusiveExperiences />
      </div>

      <div className={styles.divider}>
        <h3 className={styles.dividerTitle}>Exklusiva Erbjudanden för Dina Drömresor</h3>
        <p className={styles.dividerSubtitle}>
          Ta del av våra handplockade erbjudanden som gör din resa ännu mer prisvärd och minnesvärd. Oavsett om du letar efter en weekendresa, ett långt äventyr eller något däremellan, erbjuder vi rabatter och specialpaket på några av världens mest fantastiska destinationer. Våra erbjudanden är tidsbegränsade och unika, så passa på att boka din drömresa med extra förmåner!
        </p>
        <hr className={styles.dividerLine} />
      </div>

      {/* Sektion 3: Exklusiva Erbjudanden */}
      <div id="exklusiva-erbjudanden" className={styles.exclusiveOffers}>
        <ExclusiveOffers />
      </div>
    </section>
  );
}
