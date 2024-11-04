"use client";
import styles from './ExclusiveOffers.module.css';

export default function ExclusiveOffers() {
  const offers = [
    // De tre första erbjudandena från första sidan
    {
      title: "Karibisk lyxkryssning",
      description: "Upplev en lyxig kryssning runt Karibiens öar, med allt från gourmetmat till exklusiva utflykter.",
      image: "/images/hero.webp",
    },
    {
      title: "Privat safaritur i Afrika",
      description: "Få en personlig safaritur i Afrika med en erfaren guide och boende på exklusiva lodger.",
      image: "/images/hero.webp",
    },
    {
      title: "Romantisk weekend i Paris",
      description: "Njut av en romantisk resa till Paris med specialerbjudanden på lyxhotell och restauranger.",
      image: "/images/hero.webp",
    },
    // Sex ytterligare erbjudanden
    {
      title: "Historiska slott i Skottland",
      description: "Utforska Skottlands mest mystiska och historiska slott med en guidad tur.",
      image: "/images/hero.webp",
    },
    {
      title: "Vinprovning i Toscana",
      description: "Upplev Italiens bästa vingårdar och smaka på världskända viner i Toscana.",
      image: "/images/hero.webp",
    },
    {
      title: "Fjällvandring i Norge",
      description: "En oförglömlig vandringsupplevelse genom Norges vackraste fjäll.",
      image: "/images/hero.webp",
    },
    {
      title: "Ökenäventyr i Dubai",
      description: "Ett spännande ökenäventyr med sandboarding, kamelridning och lyxigt ökenboende.",
      image: "/images/hero.webp",
    },
    {
      title: "Spahelg i Alperna",
      description: "Koppla av och njut av en spahelg i Alperna med utsikt över snöklädda berg.",
      image: "/images/hero.webp",
    },
    {
      title: "Kulturell rundtur i Tokyo",
      description: "Utforska Tokyos rika kultur, från gamla tempel till modern teknologi.",
      image: "/images/hero.webp",
    },
  ];

  return (
    <section className={styles.exclusiveOffers}>
      <div className={styles.offerGrid}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.offerCard}>
            <img src={offer.image} alt={offer.title} className={styles.offerImage} />
            <h4 className={styles.offerTitle}>{offer.title}</h4>
            <p className={styles.offerDescription}>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
