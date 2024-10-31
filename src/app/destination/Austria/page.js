// src/app/destination/austria/page.js
"use client";

import Destination from '../../../components/Destination/Destination';

const austriaData = {
  name: "Österrike",
  general: {
    capital: "Wien",
    language: "Tyska",
    currency: "Euro (€)",
    population: "Cirka 9 miljoner",
    area: "83,871 km²",
  },
  
  description:
    "Österrikes matkultur är en underbar blandning av centraleuropeiska smaker med influenser från Ungern, Italien och Tyskland. Landet är känt för sina rustika rätter som schnitzel, strudel och gulasch, där varje måltid ofta är en varm och inbjudande upplevelse. Varje region har sina egna specialiteter, från de mustiga kötträtterna i Alperna till de söta bakverken i Wien. Österrikarna är stolta över sin matkultur, där lokala ingredienser och hållbarhet står i centrum. En stor del av matupplevelsen i Österrike är att njuta av ett mål på en lokal 'Heuriger' – en vinrestaurang där man kan smaka regionens viner och enklare rätter.",
  foodImage: "/images/austria/food.jpg",
  food: "Schnitzel och Strudel",
  facts: [
    "Österrike är hem för Alperna och erbjuder fantastisk skidåkning och vandring i världsklass.",
    "Wien är känt som musikens huvudstad och har varit hem för kompositörer som Mozart, Beethoven och Strauss.",
    "Den österrikiska alpmjölken används i många traditionella mejeriprodukter och är känd för sin kvalitet.",
    "Österrike har ett av världens äldsta zoo, Schönbrunn Zoo, som grundades 1752.",
    "Wien har röstats fram som en av de mest levnadsvänliga städerna i världen flera år i rad.",
    "Kaffe och bakelser är en viktig del av den österrikiska kulturen, och Wiens kaféer är UNESCO-skyddade.",
  ],
  popularDestinations: 
  "Österrike erbjuder en mängd populära resmål, från de kejserliga palatsen i Wien till de majestätiska Alperna. Wien är en stad av eleganta byggnader, klassiska konserthus och kaféer där besökare kan njuta av en kopp kaffe och en skiva Sachertorte. Salzburg, Mozarts födelsestad, är känd för sin barockarkitektur och sitt pittoreska läge vid Alpernas fot.\n\n" +
  "För naturälskare är Tyrolen en dröm med sin spektakulära natur, perfekta skidorter och vandringsleder. Hallstatt, en charmig by vid Hallstätter See, är känd för sina vackra sjöutsikter och har blivit en av Österrikes mest fotograferade platser. Innsbruck, med sin unika blandning av medeltida arkitektur och bergslandskap, lockar både kulturintresserade och äventyrssökare.\n\n" +
  "Regionen Steiermark, känd som 'Österrikes gröna hjärta', erbjuder frodiga landskap, vingårdar och termalbad. Wachau-dalen, som är ett UNESCO-världsarv, är en annan skatt med sina vingårdar och historiska kloster längs Donau. Varje region har sin egen charm, och Österrike bjuder på allt från storstadspuls till lugna alpsluttningar.",

  travelTips: [
    "Ta gärna med kontanter, eftersom vissa mindre caféer och restauranger föredrar det framför kort.",
    "Utforska Wien till fots eller med cykel – det är ett fantastiskt sätt att se stadens skönhet.",
    "Boka biljetter i förväg om du planerar att besöka populära sevärdheter som Schönbrunn och Mozarts födelsehus.",
    "Om du besöker Alperna, se till att packa för väderomslag då klimatet kan förändras snabbt i bergen.",
  ],
  popularDestinationsImage: "/images/austria/popular.jpg",
  tipsImage: "/images/austria/tips.jpg",
};

export default function DestinationAustriaPage() {
  return <Destination data={austriaData} />;
}
