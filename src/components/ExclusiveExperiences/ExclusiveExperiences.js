// src/components/ExclusiveExperiences/ExclusiveExperiences.js
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ExclusiveExperiences.module.css";

export default function ExclusiveExperiences() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionsRef = useRef([]);

  const experiences = [
    {
      name: "Glamping-äventyr",
      video: "/videos/glamping.mp4",
      description:
        "Upplev en annorlunda typ av camping där natur möter lyx. Tänk dig att vakna upp till soluppgången med fågelkvitter och frisk skogsluft, allt medan du bor bekvämt och rymligt. Med vår glamping får du det bästa av två världar – charmiga, naturliga omgivningar och moderna bekvämligheter.",
      price: "Pris: 15 000kr",
    },
    {
      name: "Spa-upplevelse",
      video: "/videos/spa.mp4",
      description:
        "Fly från vardagen till en plats där lugn och harmoni väntar. Vår spa-upplevelse erbjuder ett brett utbud av behandlingar, från djupavslappnande massage till ansiktsbehandlingar som ger huden nytt liv.",
      price: "Pris: 20 000kr",
    },
    {
      name: "Avkopplande getaway",
      video: "/videos/gateway.mp4",
      description:
        "I en värld där vardagen ofta går i högt tempo, är en avkopplande getaway precis vad du behöver för att komma i balans. Vi erbjuder unika boenden på rofyllda platser, där du kan koppla av och återhämta dig.",
      price: "Pris: 30 000kr",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      sectionsRef.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section className={styles.exclusiveExperiences}>
      <h2 className={styles.title}>Exklusiva Upplevelser</h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          data-index={index}
          className={`${styles.section} ${visibleSections.includes(index) ? styles.visible : ""}`}
        >
          <div className={styles.videoContainer}>
            <video
              src={experience.video}
              className={styles.video}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className={styles.content}>
            <h3 className={styles.name}>{experience.name}</h3>
            <p className={styles.description}>{experience.description}</p>
            <p className={styles.price}>{experience.price}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
