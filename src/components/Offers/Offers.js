"use client";
import Link from 'next/link';
import styles from "./Offers.module.css";

export default function Offers() {
  const offers = [
    {
      name: "Fyra dagars Karibien-kryssning",
      video: "/images/cari.mp4",
      description: "Det här paketerbjudandet är ett exklusivt erbjudande från vår(t) Resebyrå. Unna dig själv ett äventyr du sent kommer glömma! Platserna är begränsade, så kontakta oss idag för att säkerställa att du inte missar den här unika upplevelsen.",
      fullDescription: "Detta exklusiva erbjudande från vår resebyrå tar dig på ett äventyr du sent kommer glömma! Platserna är begränsade, kontakta oss idag för att försäkra dig om att inte missa denna unika upplevelse.",
    },
    {
      name: "Slottsrundtur i Bayern",
      video: "/images/castle.mp4",
      description: "Hör av dig om du vill veta mer om vår/våra exklusiva Slottstur i Bayern. Det finns ett begränsat antal platser kvar, så kontakta oss idag för att garantera att du inte missar erbjudandet. Förbered dig på att skapa oförglömliga minnen, och glöm inte att skicka ett vykort!",
      fullDescription: "Är du intresserad av vår exklusiva slottsrundtur i Bayern? Platserna är få, så kontakta oss idag för att garantera din plats. Förbered dig för att skapa oförglömliga minnen – och glöm inte att skicka ett vykort!",
    },
    {
      name: "Kulinarisk resa genom Sydostasien",
      image: "/images/asien.webp",
      description: "Om du gillar att få unika och spännande upplevelser är vår(t) Kulinarisk resa genom Sydostasien perfekt för dig. Oavsett om du reser själv eller med familjen så finns här något som alla kommer gilla. Kontakta oss idag för att boka din plats.",
      fullDescription: "För en unik och spännande upplevelse, är vår kulinariska resa genom Sydostasien perfekt för dig. Oavsett om du reser ensam eller med familjen, finns det något för alla. Kontakta oss idag för att boka din plats.",
    },
  ];

  return (
    <section className={styles.offers}>
      <h2 className={styles.title}>Exklusiva Erbjudanden</h2>
      <div className={styles.grid}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.card}>
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
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
