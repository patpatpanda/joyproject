// src/components/Destination/Destination.js
"use client";

import { FaUtensils, FaGlobe, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';
import styles from './Destination.module.css';

export default function Destination({ data }) {
  return (
    <>
      {/* Hero Section with Video Background */}
      <div className={styles.hero}>
        <video
          className={styles.heroVideo}
          src={data.heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
       
       
      </div>

      {/* Destination Section */}
      <section className={styles.destination}>
        
        {/* General Info Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}><FaGlobe /> {data.name}</h2>
          <p>{data.description}</p>
        </div>

        {/* Fun Facts Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}><FaLightbulb /> Visste Du Att?</h2>
          <ul className={styles.list}>
            {data.facts.map((fact, index) => (
              <li key={index} className={styles.listItem}>
               {fact}
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Destinations Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}><FaMapMarkerAlt /> Populära Resmål i {data.name}</h2>
          <p>{data.popularDestinations}</p>
        </div>

        {/* Travel Tips Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <h2 className={styles.sectionTitle}><FaUtensils /> Tips för Resenärer</h2>
          <ul className={styles.list}>
            {data.travelTips.map((tip, index) => (
              <li key={index} className={styles.listItem}>
              {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
