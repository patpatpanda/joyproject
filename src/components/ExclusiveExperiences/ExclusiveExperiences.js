// src/components/ExclusiveExperiences/ExclusiveExperiences.js
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import styles from "./ExclusiveExperiences.module.css";

export default function ExclusiveExperiences() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionsRef = useRef([]);

  const experiences = [
    {
      name: "Glamping-äventyr",
      video: "/videos/glamping.mp4",
      description:
        "Upplev en annorlunda typ av camping där natur möter lyx. Tänk dig att vakna upp till soluppgången med fågelkvitter och frisk skogsluft, allt medan du bor bekvämt och rymligt.",
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
        "I en värld där vardagen ofta går i högt tempo, är en avkopplande getaway precis vad du behöver för att komma i balans.",
      price: "Pris: 30 000kr",
    },
  ];

  const handleIntersection = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index, 10);
        if (entry.isIntersecting) {
          setVisibleSections((prev) => {
            // Lägg bara till om index inte redan finns
            return prev.includes(index) ? prev : [...prev, index];
          });
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      sectionsRef.current = []; // Rensa referenser vid avmontering
    };
  }, [handleIntersection]);

  return (
    <section className={styles.exclusiveExperiences}>
      
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
