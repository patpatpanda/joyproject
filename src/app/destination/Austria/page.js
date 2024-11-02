// src/app/destination/austria/page.js
"use client";

import Destination from '../../../components/Destination/Destination';

const austriaData = {
  heroVideo: "/videos/austria.mp4",

  theme: {
    primary: "#ed1c24", // Röd från Österrikes flagga
    secondary: "#ffffff", // Vit från flaggan
    accent: "#a11d1f", // Mörkare röd för kontrast
  },

  description:
    "Österrike är ett land där tradition möter elegans och där matkulturen är lika mångsidig som landskapet. Från Wienerschnitzel till den klassiska Apfelstrudeln, är Österrikes kök en blandning av rustika smaker och kejserlig sofistikering. I Wien kan du slå dig ner på ett UNESCO-skyddat kafé för att njuta av en kopp kaffe och Sachertorte, medan de alpina regionerna erbjuder robusta måltider som värmer efter en dag i skidbackarna. Österrikarna är stolta över sina lokala råvaror, och på landets mysiga 'Heuriger' (vinrestauranger) kan du prova regionala viner och enkla rätter i en atmosfär full av gemytlighet och lokal tradition.",
  
  foodImage: "/images/austria/food.jpg",
  food: "Schnitzel och Strudel",
  
  facts: [
    "Österrike är hem till Alperna, vilket gör landet till en av Europas mest eftertraktade skid- och vandringsdestinationer.",
    "Wien, 'musikens huvudstad', har varit hem för storheter som Mozart, Beethoven och Strauss.",
    "Landets traditionella mejeriprodukter, särskilt från alpmjölk, är kända för sin höga kvalitet.",
    "Schönbrunn Zoo i Wien, grundat 1752, är ett av världens äldsta zoo och ett populärt familjeresmål.",
    "Wien rankas regelbundet som en av världens mest levnadsvänliga städer, med en rik kultur och ett rikt stadsliv.",
    "Wiens kafékultur är UNESCO-skyddad, och ett besök i staden är inte komplett utan en paus på ett klassiskt kafé.",
  ],
  
  popularDestinations: 
    "Österrike bjuder på fantastiska resmål, från Wiens kejserliga prakt till Alpernas majestät. I Wien hittar du pampiga palats, konserthus och traditionella kaféer där du kan njuta av historien och det klassiska musikarvet. Salzburg, födelseplatsen för Mozart, är en barockpärla med utsikt över Alperna och bjuder på charmiga kullerstensgator och storslagna vyer.\n\n" +
    "För naturälskare är Tyrolen perfekt med sina snötäckta fjäll, skidorter och vandringsleder. En annan höjdpunkt är Hallstatt, en sagolik by vid en spegelblank sjö, känd för sina pittoreska vyer som ser ut att vara tagna ur en drömbok. Innsbruck erbjuder en unik blandning av kultur och natur, med en historisk stadskärna och storslagna alpvyer.\n\n" +
    "Steiermark, även kallat 'Österrikes gröna hjärta', erbjuder böljande vinodlingar, frodiga landskap och avslappnande termalbad. Wachau-dalen längs Donau, känd för sina vingårdar och medeltida kloster, är ett UNESCO-världsarv och en idyllisk plats för vinälskare och historiaintresserade. Österrike är fullt av kontraster, från Wiens livliga gator till de lugna alpina dalgångarna – landet bjuder på en upplevelse för alla sinnen.",
  
  travelTips: [
    "Många små caféer och restauranger föredrar kontanter, så det är bra att ha med sig lite i plånboken.",
    "Wien är perfekt att utforska till fots eller med cykel – stadens arkitektur och grönområden är väl värda att upptäcka långsamt.",
    "Förboka biljetter till populära sevärdheter som Schönbrunn och Mozarts födelsehus, särskilt under högsäsong.",
    "Om du ska till Alperna, packa för väderomslag – temperaturen kan variera snabbt i bergen.",
    "Ett besök på en 'Heuriger' är ett måste för att smaka på lokala viner och enklare rätter i en avslappnad atmosfär.",
  ],
  
  popularDestinationsImage: "/images/austria/popular.jpg",
  tipsImage: "/images/austria/tips.jpg",
};

export default function DestinationAustriaPage() {
  return <Destination data={austriaData} />;
}
