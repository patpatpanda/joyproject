// src/app/destination/italy/page.js
"use client";

import Destination from '../../../components/Destination/Destination';

const italyData = {
  name: "Italien",
  general: {
    capital: "Rom",
    language: "Italienska",
    currency: "Euro (€)",
    population: "Cirka 60 miljoner",
    area: "301,340 km²",
  },
  
  theme: {
    primary: "#009246",   // Italiensk grön (från flaggan)
    secondary: "#CE2B37", // Italiensk röd (från flaggan)
    accent: "#FFFFFF",    // Vit accentfärg för kontrast
  },

  description:
    "Italiens matkultur är världsberömd för sin enkelhet, kvalitet och starka regionala identitet. Varje region har sina unika specialiteter – från norra Italiens krämiga risotto och tryffelrätter till södra Italiens solmogna tomater, olivolja och pizza från Neapel. Italiensk mat bygger på färska, säsongsbetonade ingredienser där varje rätt lyfter fram råvarans naturliga smaker. Tradition och familj är centrala, och måltider ses som sociala stunder att njuta tillsammans. Med Slow Food-rörelsens påverkan står Italien också för hållbarhet och respekt för lokala produkter. Matens följeslagare är landets berömda viner och en gedigen kaffekultur, där varje måltid avslutas med en espresso.",
  foodImage: "/images/italy/food.jpg",
  food: "Pasta och Pizza",
  facts: [
    "Italien har fler UNESCO-världsarv än något annat land i världen, med över 55 listade platser.",
    "Rom har en egen stat inom staden, Vatikanstaten, som är världens minsta självständiga stat.",
    "Det italienska alfabetet har bara 21 bokstäver – J, K, W, X och Y används främst för lånord.",
    "Italien är känt för att ha gett världen operan och byggde den första operascenen i Venedig 1637.",
    "Venedig är byggd på 118 små öar och har över 400 broar, men inga bilar.",
    "Italien har tre aktiva vulkaner: Etna, Stromboli och Vesuvius.",
    "Det italienska köket varierar mycket mellan olika regioner, med tydliga lokala specialiteter.",
  ],
  popularDestinations: 
  "Italien är fullt av ikoniska resmål som Rom, Venedig och Florens, där historiska monument, konstskatter och charmiga gator gör dessa städer till drömmar för resenärer. Rom bjuder på antika underverk som Colosseum och Forum Romanum, medan Venedig lockar med sina romantiska kanaler och unika arkitektur. Florens är renässansens hjärta, där Michelangelos David och Uffizierna är ett måste för konstälskare.\n\n" +
  "Men Italien har också en mängd dolda pärlor som erbjuder en mer autentisk upplevelse bortom turistmassorna. Matera i södra Italien, känt för sina historiska \"Sassi\" – grottbostäder som nu är UNESCO-skyddade – ger en resa tillbaka i tiden. Cinque Terre på Liguriens kust består av fem färgglada fiskebyar som klänger sig fast på bergssluttningarna och bjuder på dramatiska kustvyer, vandringsleder och lokala viner.\n\n" +
  "I Puglia, längst nere i Italiens klack, hittar man charmiga vita byar, olivlundar och ett långsammare tempo. Här ligger Alberobello, känt för sina unika trulli-hus, samt den vackra barockstaden Lecce. Regionen erbjuder även vackra stränder och kristallklart vatten längs Adriatiska och Joniska havet, vilket gör det till en favorit för den som söker lugn och naturskönhet.\n\n" +
  "Utöver dessa finns regioner som Piemonte med sina vingårdar och toskanska landsbygden med böljande kullar och vingårdar, där besökare kan uppleva italiensk vin- och matkultur på nära håll. Varje region i Italien har sin unika karaktär och lockelse, vilket gör landet till en destination som bjuder på en otrolig mångfald av upplevelser – från de mest kända resmålen till de gömda skatterna som bara väntar på att upptäckas.",

  travelTips: [
    "Ta dig tid att utforska de lokala matmarknaderna – varje region har sina unika delikatesser.",
    "Besök mindre kända platser som Amalfikusten utanför högsäsongen för att undvika trängsel.",
    "Lär dig några grundläggande fraser på italienska – lokalbefolkningen uppskattar när besökare försöker.",
    "Om du kör bil, var beredd på att italiensk trafik kan vara intensiv, speciellt i storstäderna.",
  ],
  popularDestinationsImage: "/images/italy/popular.jpg",
  tipsImage: "/images/italy/tips.jpg",
};

export default function DestinationItalyPage() {
  return <Destination data={italyData} />;
}
