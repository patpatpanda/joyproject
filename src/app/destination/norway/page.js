// src/app/destination/norway/page.js
"use client";

import Destination from '../../../components/Destination/Destination';

const norwayData = {
  name: "Norge",
  heroVideo: "/videos/norway.mp4",
  
  theme: {
    primary: "#BA0C2F",   // Norsk röd (från flaggan)
    secondary: "#00205B", // Norsk blå (från flaggan)
    accent: "#FFFFFF",    // Vit accentfärg för kontrast
  },

  description:
    "Norge är en dröm för naturälskare, känt för sina dramatiska fjordar, majestätiska fjäll och ett landskap som känns taget ur en saga. Här möter du ett land som vördar sin natur och sina traditioner. Norsk matkultur är enkel men präglad av rena smaker från havet och bergen – här njuter du av rätter som rakfisk, fårikål och den älskade brunosten. Samtidigt har städer som Oslo och Bergen vuxit fram som kulinariska pärlor med moderna tolkningar av nordiska smaker på prisbelönta restauranger. Oavsett om du befinner dig på ett mysigt kafé i Tromsø eller njuter av finare mat i Oslo, är maten en spegling av Norges naturnära själ och starka hållbarhetstänk.",
  
  foodImage: "/images/norway/food.jpg",
  food: "Fisk och Fårikål",
  
  facts: [
    "Norge har över 1,000 fjordar – mest kända är Geirangerfjorden och Nærøyfjorden, båda UNESCO-skyddade för sin skönhet.",
    "I norra Norge kan du uppleva midnattssol under sommaren och polarnattens mystik på vintern.",
    "Friluftsliv är djupt rotat i den norska kulturen och handlar om att vara i harmoni med naturen året runt.",
    "Norge är världens största producent av odlad lax, och denna lyxiga fisk når hela världen.",
    "Oslo är ett centrum för innovativ matlagning och har flera Michelin-restauranger som lockar matentusiaster.",
    "Nordnorge är en av de bästa platserna för att uppleva norrsken, en magisk naturföreteelse som förtrollar besökare under vintermånaderna.",
  ],

  popularDestinations: 
    "Norges storslagna natur är något som alla bör uppleva minst en gång. Oslo, Norges pulserande huvudstad, bjuder på en unik blandning av modern arkitektur och naturnära miljöer – staden omges av fjordar och skogar och är hem till sevärdheter som Nasjonalmuseet och Vigelandsparken. I Bergen, känd för sina färgglada trähus vid Bryggen, kan du uppleva porten till fjordarna och smaka på färsk fisk från stadens fiskmarknad.\n\n" +
    "Fjordregionen är ett absolut måste, där du hittar ikoniska vyer som Geirangerfjorden och Sognefjorden, vilka erbjuder möjligheter till båtturer, kajakpaddling och vandring. Lofoten är en annan magisk plats, där spektakulära fjäll, turkosa fjordar och små fiskebyar som Henningsvær och Reine ger en oförglömlig upplevelse. Här är naturen både rå och vacker, och du kan ofta se örnar kretsa över det vilda landskapet.\n\n" +
    "För den som söker äventyr är Nordkapp, Europas nordligaste punkt, en unik plats att besöka. Här står du på världens kant och blickar ut över det Arktiska havet. Jotunheimen nationalpark, med Norges högsta berg, är perfekt för friluftsentusiaster som vill vandra eller klättra. Under sommarmånaderna är Sørlandets kust med sina klippor och små badvikar en perfekt plats för segling och lugna stranddagar.",

  travelTips: [
    "Planerar du att köra bil? Var beredd på att många vägar är smala, särskilt i fjällområden, och kan vara utmanande att köra på vintertid.",
    "Klä dig i lager – norskt väder är oförutsägbart, även på sommaren kan det vara svalt och blåsigt.",
    "Utforska naturen med respekt – håll dig till markerade leder och följ lokalbefolkningens vana att lämna platser som du fann dem.",
    "Boka boende i förväg om du vill besöka populära områden som Lofoten under högsäsong. Många ställen blir snabbt fullbokade under sommaren.",
    "Tänk på att Norge är ett dyrt land – för att spara pengar kan du prova att handla i lokala matbutiker eller ta med picknick ut i naturen.",
  ],
  
  popularDestinationsImage: "/images/norway/popular.jpg",
  tipsImage: "/images/norway/tips.jpg",
};

export default function DestinationNorwayPage() {
  return <Destination data={norwayData} />;
}
