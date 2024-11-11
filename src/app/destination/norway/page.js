// src/app/destination/norway/page.js
"use client";

import { useLanguage } from '../../../context/LanguageContext';
import Destination from '../../../components/Destination/Destination';

export default function DestinationNorwayPage() {
  const { language } = useLanguage();

  const norwayData = {
    name: language === 'sv' ? "Norge" : "Norway",
    heroVideo: "/videos/norway.mp4",
    
    theme: {
      primary: "#BA0C2F",   // Norsk röd (från flaggan)
      secondary: "#00205B", // Norsk blå (från flaggan)
      accent: "#FFFFFF",    // Vit accentfärg för kontrast
    },

    description:
      language === 'sv'
        ? "Norge är en dröm för naturälskare, känt för sina dramatiska fjordar, majestätiska fjäll och ett landskap som känns taget ur en saga. Här möter du ett land som vördar sin natur och sina traditioner. Norsk matkultur är enkel men präglad av rena smaker från havet och bergen – här njuter du av rätter som rakfisk, fårikål och den älskade brunosten. Samtidigt har städer som Oslo och Bergen vuxit fram som kulinariska pärlor med moderna tolkningar av nordiska smaker på prisbelönta restauranger. Oavsett om du befinner dig på ett mysigt kafé i Tromsø eller njuter av finare mat i Oslo, är maten en spegling av Norges naturnära själ och starka hållbarhetstänk."
        : "Norway is a dream for nature lovers, known for its dramatic fjords, majestic mountains, and landscapes that feel taken from a fairytale. Here you find a country that honors its nature and traditions. Norwegian cuisine is simple but marked by pure flavors from the sea and mountains – enjoy dishes like rakfisk, fårikål, and the beloved brunost. Cities like Oslo and Bergen have emerged as culinary gems, with modern interpretations of Nordic flavors in award-winning restaurants. Whether you're at a cozy café in Tromsø or enjoying fine dining in Oslo, the food reflects Norway's nature-focused soul and commitment to sustainability.",

    foodImage: "/images/norway/food.jpg",
    food: language === 'sv' ? "Fisk och Fårikål" : "Fish and Fårikål",
    
    facts: language === 'sv'
      ? [
          "Norge har över 1,000 fjordar – mest kända är Geirangerfjorden och Nærøyfjorden, båda UNESCO-skyddade för sin skönhet.",
          "I norra Norge kan du uppleva midnattssol under sommaren och polarnattens mystik på vintern.",
          "Friluftsliv är djupt rotat i den norska kulturen och handlar om att vara i harmoni med naturen året runt.",
          "Norge är världens största producent av odlad lax, och denna lyxiga fisk når hela världen.",
          "Oslo är ett centrum för innovativ matlagning och har flera Michelin-restauranger som lockar matentusiaster.",
          "Nordnorge är en av de bästa platserna för att uppleva norrsken, en magisk naturföreteelse som förtrollar besökare under vintermånaderna.",
        ]
      : [
          "Norway has over 1,000 fjords – the most famous are the Geirangerfjord and Nærøyfjord, both UNESCO-protected for their beauty.",
          "In northern Norway, you can experience the midnight sun in summer and the mystique of polar nights in winter.",
          "Outdoor life (friluftsliv) is deeply rooted in Norwegian culture, reflecting harmony with nature year-round.",
          "Norway is the world’s largest producer of farmed salmon, and this luxury fish reaches the whole world.",
          "Oslo is a hub for innovative cuisine and has several Michelin-starred restaurants attracting food enthusiasts.",
          "Northern Norway is one of the best places to experience the Northern Lights, a magical phenomenon that enchants visitors during winter months.",
        ],

    popularDestinations: language === 'sv'
      ? "Norges storslagna natur är något som alla bör uppleva minst en gång. Oslo, Norges pulserande huvudstad, bjuder på en unik blandning av modern arkitektur och naturnära miljöer – staden omges av fjordar och skogar och är hem till sevärdheter som Nasjonalmuseet och Vigelandsparken. I Bergen, känd för sina färgglada trähus vid Bryggen, kan du uppleva porten till fjordarna och smaka på färsk fisk från stadens fiskmarknad.\n\n" +
        "Fjordregionen är ett absolut måste, där du hittar ikoniska vyer som Geirangerfjorden och Sognefjorden, vilka erbjuder möjligheter till båtturer, kajakpaddling och vandring. Lofoten är en annan magisk plats, där spektakulära fjäll, turkosa fjordar och små fiskebyar som Henningsvær och Reine ger en oförglömlig upplevelse. Här är naturen både rå och vacker, och du kan ofta se örnar kretsa över det vilda landskapet.\n\n" +
        "För den som söker äventyr är Nordkapp, Europas nordligaste punkt, en unik plats att besöka. Här står du på världens kant och blickar ut över det Arktiska havet. Jotunheimen nationalpark, med Norges högsta berg, är perfekt för friluftsentusiaster som vill vandra eller klättra. Under sommarmånaderna är Sørlandets kust med sina klippor och små badvikar en perfekt plats för segling och lugna stranddagar."
      : "Norway’s magnificent nature is something everyone should experience at least once. Oslo, Norway's vibrant capital, offers a unique blend of modern architecture and nature-oriented surroundings – the city is surrounded by fjords and forests and is home to attractions like the National Museum and Vigeland Park. In Bergen, known for its colorful wooden houses at Bryggen, you can experience the gateway to the fjords and taste fresh fish from the city’s fish market.\n\n" +
        "The fjord region is a must-see, where you’ll find iconic views like the Geirangerfjord and Sognefjord, offering opportunities for boat trips, kayaking, and hiking. Lofoten is another magical place, with spectacular mountains, turquoise fjords, and small fishing villages like Henningsvær and Reine, creating an unforgettable experience. Here, nature is both raw and beautiful, and you can often see eagles soaring over the wild landscape.\n\n" +
        "For those seeking adventure, the North Cape, Europe’s northernmost point, is a unique place to visit. Here you stand on the edge of the world, gazing over the Arctic Sea. Jotunheimen National Park, with Norway’s highest peaks, is perfect for outdoor enthusiasts looking to hike or climb. During the summer months, the southern coast of Sørlandet with its cliffs and small coves is ideal for sailing and peaceful beach days.",

    travelTips: language === 'sv'
      ? [
          "Planerar du att köra bil? Var beredd på att många vägar är smala, särskilt i fjällområden, och kan vara utmanande att köra på vintertid.",
          "Klä dig i lager – norskt väder är oförutsägbart, även på sommaren kan det vara svalt och blåsigt.",
          "Utforska naturen med respekt – håll dig till markerade leder och följ lokalbefolkningens vana att lämna platser som du fann dem.",
          "Boka boende i förväg om du vill besöka populära områden som Lofoten under högsäsong. Många ställen blir snabbt fullbokade under sommaren.",
          "Tänk på att Norge är ett dyrt land – för att spara pengar kan du prova att handla i lokala matbutiker eller ta med picknick ut i naturen.",
        ]
      : [
          "Planning to drive? Be prepared for narrow roads, especially in mountainous areas, which can be challenging in winter.",
          "Dress in layers – Norwegian weather is unpredictable, and it can be cool and windy even in summer.",
          "Explore nature with respect – stick to marked trails and follow the local custom of leaving places as you found them.",
          "Book accommodation in advance if you plan to visit popular areas like Lofoten during peak season. Many places fill up quickly in summer.",
          "Keep in mind that Norway is an expensive country – to save money, consider shopping at local grocery stores or taking a picnic into nature.",
        ],

    popularDestinationsImage: "/images/norway/popular.jpg",
    tipsImage: "/images/norway/tips.jpg",
  };

  return <Destination data={norwayData} />;
}
