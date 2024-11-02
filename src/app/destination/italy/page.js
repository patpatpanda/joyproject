// src/app/destination/italy/page.js
"use client";

import Destination from '../../../components/Destination/Destination';

const italyData = {
  name: "Italien",
  heroVideo: "/videos/italy.mp4",
  
  theme: {
    primary: "#009246",   // Italiensk grön (från flaggan)
    secondary: "#CE2B37", // Italiensk röd (från flaggan)
    accent: "#FFFFFF",    // Vit accentfärg för kontrast
  },

  description:
    "Italien är inte bara ett land – det är en smakresa genom tradition och passion. Från de gyllene kullarna i Toscana till Amalfikustens solkyssta stränder, är varje region en hyllning till unika smaker och säsongsbetonade råvaror. Här är måltider mer än bara mat; de är stunder att dela och minnas. Norra Italien lockar med tryffel, krämig risotto och mustiga rätter, medan södern bjuder på enkla, men fantastiska smaker som solmogna tomater, pizzans hemstad Neapel och extra jungfruolivolja från Apulien. Glöm inte att avsluta med en äkta italiensk espresso – stark och fylld med karaktär. I Italien är varje tugga en berättelse och varje måltid en del av livets konst.",
  foodImage: "/images/italy/food.jpg",
  food: "Pasta och Pizza",
  
  facts: [
    "Italien har fler UNESCO-världsarv än något annat land i världen, med över 55 listade platser.",
    "Rom har en egen stat inom staden, Vatikanstaten, som är världens minsta självständiga stat.",
    "Det italienska alfabetet har bara 21 bokstäver – J, K, W, X och Y används främst för lånord.",
    "Operan föddes här, med världens första operahus i Venedig, byggt 1637.",
    "Venedig är byggd på 118 små öar och har över 400 broar, men inga bilar.",
    "Italien har tre aktiva vulkaner: Etna, Stromboli och Vesuvius.",
  ],
  
  popularDestinations: 
    "Italien är ett land av kontraster, där du kan förlora dig i Roms antika underverk, segla på Venedigs romantiska kanaler och drömma dig bort i Florens, renässansens hjärta. Men resor hit handlar inte bara om att bocka av sevärdheter – det handlar om att leva som italienarna. Stanna en stund på en piazza, smaka på en lokal gelato, och låt dig svepas med av tempot och atmosfären.\n\n" +
    "Utöver de stora städerna finns det mängder av dolda pärlor. Matera med sina historiska 'Sassi' grottbostäder tar dig tillbaka i tiden. Cinque Terre på Liguriens kust består av fem färgglada fiskebyar, perfekta för både vandringsentusiaster och vinälskare. I Puglia väntar vita byar, urgamla olivlundar och sagoliknande trulli-hus i Alberobello, som är en UNESCO-skyddad plats.\n\n" +
    "Italien erbjuder så mycket mer än de kända turiststråken – med regioner som Piemonte och den toskanska landsbygden där vingårdar och böljande kullar skapar scener ur en målning. Varje plats har sin unika karaktär och bjuder på autentiska upplevelser som bara väntar på att upptäckas.",

  travelTips: [
    "Utforska lokala matmarknader – de är fulla av spännande, regionala smaker.",
    "Bo på en agriturismo-gård för att uppleva det italienska lantlivet på nära håll.",
    "Beställ 'vino della casa' – husets vin – på restauranger för en lokal vinupplevelse.",
    "Res till populära destinationer under lågsäsong för en lugnare upplevelse.",
    "Ta den lokala tågresan för att njuta av vackra landskap mellan städer.",
    "Utforska italienska städer till fots – många gömda pärlor väntar i gränder och på torg.",
    "Delta i lokala festivaler och marknader för att uppleva Italiens färgrika kultur på nära håll.",
  ],

  popularDestinationsImage: "/images/italy/popular.jpg",
  tipsImage: "/images/italy/tips.jpg",
};

export default function DestinationItalyPage() {
  return <Destination data={italyData} />;
}
