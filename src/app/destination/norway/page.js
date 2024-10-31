// src/app/destination/norway/page.js
"use client";

import Destination from '../../../components/Destination/Destination';

const norwayData = {
  name: "Norge",
  general: {
    capital: "Oslo",
    language: "Norska",
    currency: "Norsk krona (NOK)",
    population: "Cirka 5,4 miljoner",
    area: "385,207 km²",
  },
  
  description:
    "Norge är känt för sina dramatiska fjordar, majestätiska fjäll och en djup respekt för naturen. Matkulturen i Norge speglar landets kalla klimat och kustnära geografi, där fisk och skaldjur är centrala ingredienser. Traditionella rätter som rakfisk, fårikål och brunost är älskade av lokalbefolkningen. De norska måltiderna är ofta enkla men näringsrika, med fokus på hållbara och lokala råvaror. Samtidigt har Norge en växande matscen i städer som Oslo och Bergen, där moderna tolkningar av skandinavisk mat kan avnjutas på prisbelönta restauranger.",
  foodImage: "/images/norway/food.jpg",
  food: "Fisk och Fårikål",
  facts: [
    "Norge har över 1,000 fjordar, och de mest kända är Geirangerfjorden och Nærøyfjorden, som är UNESCO-världsarv.",
    "Norska vintrar kan vara extremt kalla, speciellt i norr där midnattssolen lyser på sommaren och polarnatten varar på vintern.",
    "Landet har en stark friluftstradition och uttrycket 'friluftsliv' handlar om att njuta av naturen året runt.",
    "Norge är en stor producent av lax, och sushiälskare världen över äter ofta norsk odlad lax.",
    "Oslo har blivit ett populärt resmål för matintresserade och har flera Michelin-restauranger.",
    "Nordnorge är en av de bästa platserna att se norrsken, en magisk naturupplevelse under vintermånaderna.",
  ],
  popularDestinations: 
  "Norge bjuder på en imponerande natur med allt från mäktiga fjordar till charmiga kuststäder. Oslo, huvudstaden, kombinerar modern arkitektur med rika kulturupplevelser som Nasjonalmuseet och Vigelandsparken. Bergen, Norges andra största stad, är porten till fjordarna och känd för sina färgglada hus längs Bryggen – en UNESCO-skyddad plats.\n\n" +
  "Fjordregionen är ett måste, med Geirangerfjorden och Sognefjorden som erbjuder spektakulära vyer och möjlighet till båtturer och vandringar. Lofoten är en annan magisk plats, där branta berg och vilda kuster möts och små fiskebyar som Henningsvær och Reine ligger utspridda längs kusten.\n\n" +
  "Nordkapp, Europas nordligaste punkt, ger besökare en chans att stå vid världens kant och se ut över det arktiska havet. Jotunheimen nationalpark lockar friluftsentusiaster med sina höga berg och vilda natur, medan kusten i Sørlandet är perfekt för sommarens båtturer och bad.",
  
  travelTips: [
    "Om du planerar att köra bil, var beredd på att många vägar är smala och kan vara isiga under vintermånaderna.",
    "Klä dig varmt – även sommartid kan temperaturerna vara svala, särskilt i fjällen.",
    "Försök att utforska naturen – vandring, fiske och skidåkning är populära aktiviteter.",
    "Boka boende i förväg om du planerar att besöka populära områden som Lofoten under högsäsongen.",
  ],
  popularDestinationsImage: "/images/norway/popular.jpg",
  tipsImage: "/images/norway/tips.jpg",
};

export default function DestinationNorwayPage() {
  return <Destination data={norwayData} />;
}
