import type { CampsiteConfig } from "../types";

/**
 * Wohlfühloase am Trausdorfberg — Wohnmobilstellplatz, Sankt Marein bei Graz (Steiermark).
 * 100 % aus raw/digest abgeleitet. Quelle Preise: prices.md (€22/Nacht + €5 Strom).
 * Design: Original-Template-Palette (kein theme), heroVariant "center".
 */
const IMG = "/campsites/wohlfuehloase";

const wohlfuehloase: CampsiteConfig = {
  name: "Wohlfühloase am Trausdorfberg",
  shortName: "Wohlfühloase",
  slug: "wohlfuehloase",
  ort: "Sankt Marein bei Graz",
  region: "Steiermark",
  brandKind: "Stellplatz am Bauernhof",
  regionLong: "Südoststeiermark · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Fünf Stellplätze und ein Weitblick über die Hügel",
  claimEmphasis: "ein Weitblick",
  emailDetail: "der Sternenhimmel über dem Hof mit sichtbarer Milchstraße",
  intro:
    "Auf einer Anhöhe über der Südoststeiermark warten fünf Stellplätze mit freiem Blick auf Hügel, Wiesen und Wälder — ganzjährig geöffnet, rund um die Uhr anreisbar und mitten in einem über 100 Jahre alten Hof mit Schafen und Hühnern.",

  logo: { src: `${IMG}/logo-941610ad9b.png`, alt: "Logo Wohlfühloase am Trausdorfberg" },

  statement: {
    text: "Wer bei uns steht, übernachtet auf einem Hof, der seit über 100 Jahren von Mensch, Tier und Natur gemeinsam getragen wird.",
    emphasis: "über 100 Jahren",
  },

  pillars: [
    {
      title: "Der ganze Hof auf einen Blick",
      text: "Eingebettet zwischen Hügeln, Wäldern und Wiesen auf einer Anhöhe gelegen — und trotzdem nur rund 20 Minuten von Graz entfernt.",
      image: { src: `${IMG}/hero-240ea516a0.webp`, alt: "Luftaufnahme des Hofes der Wohlfühloase am Trausdorfberg mit Wohnmobilen" },
    },
    {
      title: "Schafe, Hühner & Hängematte",
      text: "Schafe und Hühner leben am Hof — wer mag, beobachtet die Tiere oder entspannt in der Hängematte im Garten.",
      image: { src: `${IMG}/gallery-c261196834.webp`, alt: "Gäste entspannen in Hängematten zwischen den Schafen auf dem Hof der Wohlfühloase" },
    },
    {
      title: "Die Genussoase am Hof",
      text: "Regionale Weine, Bauern-Eier, Säfte und Selbstgemachtes in der kleinen Genussoase direkt am Hof.",
      image: { src: `${IMG}/gallery-4125b1011a.webp`, alt: "Regionaler Wein und Gläser aus der Genussoase der Wohlfühloase" },
    },
  ],

  usps: [
    "Ganzjährig geöffnet",
    "24/7 ohne Reservierung",
    "Kostenloses WLAN",
    "Hunde willkommen",
    "Eigene Quelle & Ökostrom",
    "Sternenhimmel pur",
  ],

  trust: {
    heading: "Echter Hof, echte Ruhe",
    headingEmphasis: "echte Ruhe",
    intro:
      "Gäste aus Deutschland, Frankreich und Spanien kommen für dasselbe wieder: die Herzlichkeit am Hof, topmoderne Sanitäranlagen, frische Eier aus der Genussoase und Abende am Lagerfeuer mit Blick über die Hügel.",
  },

  awards: [],

  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-165af045f2.webp`, alt: "Sonnenaufgang über dem Nebelmeer der Südoststeiermark, Blick von der Wohlfühloase am Trausdorfberg" },
  },

  camping: {
    heading: "Camping mitten im Hofleben",
    intro:
      "Fünf ebene Plätze mit Panoramablick, hochwertige Sanitäranlagen und vieles inklusive — vom Wasseranschluss bis zum WLAN. Dazu Tiere, Feuerschale und die Genussoase direkt nebenan.",
    features: [
      {
        title: "Fünf Plätze mit Weitblick",
        text: "Fünf Stellplätze mit Weitblick über Hügel, Wiesen und Wälder, schräg angelegt, rund um die Uhr anreisbar.",
        image: { src: `${IMG}/gallery-4cd522a2a8.webp`, alt: "Wohnmobile am Stellplatz der Wohlfühloase, davor grasende Schafe" },
      },
      {
        title: "Borstiburner & Feuerschale",
        text: "Der Borstiburner-Holzgrill und die Feuerschale laden zu Grillabenden unterm Sternenhimmel ein.",
        image: { src: `${IMG}/gallery-b0162c6341.webp`, alt: "Gegrillte Steaks vom Borstiburner-Holzgrill der Wohlfühloase" },
      },
      {
        title: "Sternenhimmel statt Straßenlicht",
        text: "Bewusst nur Orientierungslichter — an klaren Abenden zeigt sich ein Sternenhimmel mit sichtbarer Milchstraße.",
        image: { src: `${IMG}/gallery-da6b2853e2.webp`, alt: "Abenddämmerung mit weitem Blick über die Hügel der Südoststeiermark" },
      },
      {
        title: "Mit Holz & Quellwasser gebaut",
        text: "Eigene Quelle, Holz aus dem Wald, Photovoltaik und ein 28.000-Liter-Regenwassertank für kleinen Fußabdruck.",
        image: { src: `${IMG}/gallery-d5a59f86ef.webp`, alt: "Holzgebäude der Wohlfühloase am Trausdorfberg eingebettet in die grüne Hügellandschaft" },
      },
      {
        title: "Wellness zum Dazubuchen",
        text: "Sauna und Whirlpool der Ferienapartments können Stellplatzgäste bei Verfügbarkeit gegen Gebühr anfragen.",
        image: { src: `${IMG}/gallery-6a6623e90a.webp`, alt: "Outdoor-Whirlpool der Ferienapartments mit winterlichem Sonnenuntergang über den Hügeln" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg auf den Trausdorfberg",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A2 bis zur Abfahrt Gleisdorf Süd oder Lassnitzhöhe, dann rund 10 Minuten bis Goggitsch 3. Bitte die zweite, untere Einfahrt nutzen und schräg parken.",
      },
      {
        title: "Lage & Umgebung",
        text: "20 Minuten nach Graz und zum Flughafen, 30–40 Minuten zur Thermenregion und zur Südsteirischen Weinstraße — Wanderwege starten direkt am Hof.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächste Bahnhöfe sind Gleisdorf und Graz Hauptbahnhof; die letzten Kilometer auf den Trausdorfberg legst du am besten mit dem Auto zurück.",
      },
    ],
  },

  galerie: {
    heading: "Impressionen vom Trausdorfberg",
    headingEmphasis: "Trausdorfberg",
    intro:
      "Sonnenuntergänge über dem Nebel, lange Abende und der Wellnessblick der Ferienapartments — ein paar Eindrücke aus der Wohlfühloase.",
    tag: "Südoststeiermark",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-e4c3974491.webp`, alt: "Sonnenuntergang mit Liegestühlen über dem Nebelmeer der Südoststeiermark" },
      { src: `${IMG}/amenity-3d110e5dea.webp`, alt: "Paar mit Sekt im Outdoor-Whirlpool der Ferienapartments der Wohlfühloase" },
      { src: `${IMG}/gallery-83c043277f.webp`, alt: "Outdoor-Whirlpool mit Herbstblick über die Hügel, exklusiv für Apartment-Gäste" },
    ],
  },

  booking: {
    heading: "Einfach ankommen — Platz ist da",
    headingEmphasis: "Platz ist da",
    intro:
      "Keine Reservierung nötig: Du kannst rund um die Uhr anreisen. Schreib uns vorab, wenn du Fragen hast oder ein Ferienapartment dazubuchen möchtest.",
    pricesArePlaceholder: false,
    priceNote: "€ 22 pro Nacht, Strom € 5/Nacht extra — Wasser, Ver- & Entsorgung und WLAN sind inklusive.",
    highlight: { title: "24/7 anreisbar", text: "Keine Reservierung, ganzjährig geöffnet — du kommst, wann es dir passt." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 22 },
      { id: "zelt", label: "Zeltplatz (1–2 Nächte)" },
    ],
  },

  kontakt: {
    tel: "+43 699 81908393",
    telHref: "tel:+4369981908393",
    mail: "willkommen@wohlfuehloase.com",
    adresse: "Goggitsch 3 · 8323 Sankt Marein bei Graz · Steiermark",
    coords: { lat: 47.0259, lng: 15.7073 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Stellplatz", href: "#camping", children: [
      { label: "Plätze & Ausstattung", href: "#camping" },
      { label: "Genussoase", href: "#camping" },
    ]},
    { label: "Hof & Umgebung", href: "#anreise" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default wohlfuehloase;
