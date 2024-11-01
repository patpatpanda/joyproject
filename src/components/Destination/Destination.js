// src/components/Destination/Destination.js
"use client";

import styles from './Destination.module.css';

export default function Destination({ data }) {
  return (
    <>
      {/* Hero Section - fullbredd utanför destination-sektionen */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${data.heroImage})` }}
      >
        {/* Extra div för gradient overlay med landspecifika färger */}
        <div
          className={styles.heroOverlay}
          style={{
            background: `linear-gradient(180deg, ${data.theme.primary}AA, ${data.theme.accent}66, ${data.theme.secondary}AA)`,
          }}
        ></div>
        
       
      </div>

      {/* Destination Section */}
      <section className={styles.destination}>
        {/* General Info Section - Behåller gamla stilen */}
        <div className={`${styles.generalInfo} ${styles.fadeIn}`}>
          <h2>Allmän Information</h2>
          <p><strong>Huvudstad:</strong> {data.general.capital}</p>
          <p><strong>Språk:</strong> {data.general.language}</p>
          <p><strong>Valuta:</strong> {data.general.currency}</p>
          <p><strong>Befolkning:</strong> {data.general.population}</p>
          <p><strong>Område:</strong> {data.general.area}</p>
        </div>

        {/* Food Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <img src={data.foodImage} alt={`${data.name} Mat`} className={styles.image} />
          <div>
            <h2>{data.name} Mat</h2>
            <p>{data.description}</p>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <h2>Visste Du Att?</h2>
          <ul className={styles.list}>
            {data.facts.map((fact, index) => (
              <li key={index} className={styles.listItem}>{fact}</li>
            ))}
          </ul>
        </div>

        {/* Popular Destinations Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <img src={data.popularDestinationsImage} alt="Populära Resmål" className={styles.image} />
          <div>
            <h2>Populära Resmål i {data.name}</h2>
            <p>{data.popularDestinations}</p>
          </div>
        </div>

        {/* Travel Tips Section */}
        <div className={`${styles.section} ${styles.fadeIn}`}>
          <img src={data.tipsImage} alt="Resenärstips" className={styles.image} />
          <div>
            <h2>Tips för Resenärer</h2>
            <ul className={styles.list}>
              {data.travelTips.map((tip, index) => (
                <li key={index} className={styles.listItem}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
