// src/components/ExclusiveExperiences/ExclusiveExperiences.js
"use client";

import { useEffect, useState } from "react";
import styles from "./ExclusiveExperiences.module.css";

export default function ExclusiveExperiences() {
  const [visibleSections, setVisibleSections] = useState([]);

  const experiences = [
    {
      name: "Glamping-äventyr",
      video: "/videos/glamping.mp4",
      description:
        "Upplev en annorlunda typ av camping där natur möter lyx. Tänk dig att vakna upp till soluppgången med fågelkvitter och frisk skogsluft, allt medan du bor bekvämt och rymligt. Med vår glamping får du det bästa av två världar – charmiga, naturliga omgivningar och moderna bekvämligheter. Kvällarna avslutas vid lägerelden under en gnistrande stjärnhimmel, med härlig mat och mysiga samtal.",
      price: "Pris: 15 000kr",
    },
    {
      name: "Spa-upplevelse",
      video: "/videos/spa.mp4",
      description:
        "Fly från vardagen till en plats där lugn och harmoni väntar. Vår spa-upplevelse erbjuder ett brett utbud av behandlingar, från djupavslappnande massage till ansiktsbehandlingar som ger huden nytt liv. Perfekt för dig som vill återfå balans och energi. Efter en dag fylld med välgörande behandlingar kan du koppla av i en ångbastu eller njuta av ett mineralbad i en rogivande miljö.",
      price: "Pris: 20 000kr",
    },
    {
      name: "Avkopplande getaway",
      video: "/videos/gateway.mp4",
      description:
        "I en värld där vardagen ofta går i högt tempo, är en avkopplande getaway precis vad du behöver för att komma i balans. Vi erbjuder unika boenden på rofyllda platser, där du kan koppla av, läsa en bok vid sjön, eller vandra genom natursköna områden. Denna resa är skapad för total återhämtning, med fokus på lugn och stillhet. Perfekt för dig som längtar efter egentid eller en helg med nära och kära.",
      price: "Pris: 30 000kr",
    },
   
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(`.${styles.section}`);
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && !visibleSections.includes(index)) {
          setVisibleSections((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleSections]);

  return (
    <section className={styles.exclusiveExperiences}>
      <h2 className={styles.title}>Exklusiva Upplevelser</h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
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
