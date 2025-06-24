import type { LucideIcon } from "lucide-react";
import { Building2, Home, TreeDeciduous, Handshake, ShieldCheck, CreditCard, Wrench, Users, GalleryHorizontal, ListChecks, MessageSquare, Phone, Mail, MapPin, DraftingCompass, Construction } from "lucide-react";

export const navLinks = [
    { href: "/", label: "Acasă" },
    { href: "/despre-noi", label: "Despre Noi" },
    { href: "/servicii", label: "Servicii" },
    { href: "/portofoliu", label: "Portofoliu" },
    { href: "/proces", label: "Proces de Lucru" },
    { href: "/faq", label: "Întrebări Frecvente" },
    { href: "/contact", label: "Contact" },
];

type Service = {
    icon: LucideIcon;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    hint: string;
}

export const services: Service[] = [
  {
    icon: Building2,
    title: "Case din Lemn (Framing & Modular)",
    description: "Soluții moderne și eficiente pentru locuințe durabile din lemn, complet personalizabile.",
    longDescription: "Casele pe structură de lemn, fie în sistem framing sau modular, reprezintă o soluție modernă, ecologică și eficientă energetic. Construite cu precizie, acestea garantează o calitate superioară și un timp redus de execuție. De la design minimalist la complex, adaptăm fiecare proiect nevoilor tale, folosind lemn de cea mai bună calitate.",
    image: "/case-din-lemn.jpg",
    hint: "wooden frame house"
  },
  {
    icon: Home,
    title: "Căsuțe A-frame",
    description: "Design iconic și fermecător pentru o viață aproape de natură.",
    longDescription: "Iconice și pline de farmec, căsuțele A-frame sunt alegerea perfectă pentru cei ce caută o locuință de vacanță sau o reședință permanentă cu un caracter distinct. Designul lor inteligent maximizează spațiul și lumina naturală, oferind o integrare perfectă în peisaje montane sau împădurite, fiind construite integral din lemn.",
    image: "/casute-a-frame.jpg",
    hint: "a-frame cabin"
  },
  {
    icon: TreeDeciduous,
    title: "Anexe și Structuri Diverse din Lemn",
    description: "De la cabane și foișoare, la terase și garduri durabile și estetice.",
    longDescription: "Lemnul este un material nobil, versatil și durabil. Realizăm o varietate de construcții anexe din lemn, inclusiv cabane rustice, foișoare pentru relaxare, terase funcționale și garduri estetice. Folosim lemn tratat de cea mai bună calitate pentru a asigura longevitatea și frumusețea proiectului tău.",
    image: "/foisor.jpg",
    hint: "wood gazebo"
  },
];

export const portfolio = [
    {
      title: "Casă din Lemn, Brașov",
      category: "Case din Lemn",
      image: "/casa-lemn-brasov.jpg",
      hint: "modern wooden house"
    },
    {
      title: "Refugiu A-frame, Apuseni",
      category: "Căsuțe A-frame",
      image: "/a-frame-apuseni.jpg",
      hint: "a-frame forest"
    },
    {
      title: "Cabana din Lemn, Suceava",
      category: "Construcții din Lemn",
      image: "/cabana-lemn-suceava.jpg",
      hint: "wooden cabin"
    },
    {
      title: "Ansamblu Case din Lemn, Cluj",
      category: "Case din Lemn",
      image: "/ansamblu.jpg",
      hint: "wooden house complex"
    },
    {
      title: "Foișor Grădină, București",
      category: "Construcții din Lemn",
      image: "/foisor-gradina.jpg",
      hint: "garden gazebo"
    },
    {
      title: "Terasă Extinsă, Constanța",
      category: "Construcții din Lemn",
      image: "/terasa-extinsa.jpg",
      hint: "wood terrace"
    },
    {
      title: "Casă din Lemn, Brașov (Imagine Locală)",
      category: "Case din Lemn",
      image: "/casa-lemn-brasov.jpg",
      hint: "modern wooden house"
    },
];

export const benefits = [
    {
        icon: Handshake,
        title: "Colaborare Contractuală",
        description: "Oferim siguranță și transparență totală prin contracte clare și detaliate pentru fiecare proiect."
    },
    {
        icon: CreditCard,
        title: "Fără Avans",
        description: "Avem încredere în calitatea muncii noastre, de aceea nu solicităm plată în avans. Plata se face pe etape."
    },
    {
        icon: ShieldCheck,
        title: "Garanție pentru Lucrări",
        description: "La finalizarea proiectului, oferim garanție pentru manoperă și materiale, asigurându-vă liniștea."
    },
    {
        icon: Wrench,
        title: "Flexibilitate",
        description: "Lucrăm atât cu materialele noastre, cât și cu ale clientului, adaptându-ne nevoilor și bugetului dumneavoastră."
    }
]

export const testimonials = [
    {
        quote: "O echipă de profesioniști desăvârșiți! Colaborarea cu David Construct a fost o plăcere. Casa noastră din lemn a fost livrată la timp și calitatea este excepțională. Recomand cu încredere!",
        author: "Familia Popescu",
        project: "Casă din Lemn, Brașov"
    },
    {
        quote: "Visul nostru de a avea o cabană A-frame în inima munților a devenit realitate datorită lor. Atenția la detalii și pasiunea pentru lucrul cu lemnul se văd în fiecare colț. Mulțumim!",
        author: "Andrei & Ioana M.",
        project: "Căsuță A-frame, Apuseni"
    },
    {
        quote: "Am apelat la David Construct pentru realizarea unei terase din lemn și suntem mai mult decât mulțumiți. Lucrarea este impecabilă, iar echipa a fost extrem de serioasă și eficientă. Vom reveni cu siguranță pentru proiecte viitoare.",
        author: "Mihai G.",
        project: "Terasă din Lemn, Constanța"
    }
];

export const workProcess = [
    {
      icon: MessageSquare,
      title: "1. Discuție Inițială și Consultanță",
      description: "Totul începe cu o discuție. Ascultăm nevoile, ideile și bugetul dumneavoastră pentru a înțelege viziunea proiectului din lemn."
    },
    {
      icon: DraftingCompass,
      title: "2. Proiectare și Personalizare",
      description: "Echipa noastră transformă ideile în planuri concrete, optimizând designul și funcționalitatea construcției din lemn."
    },
    {
      icon: Handshake,
      title: "3. Ofertare și Contract",
      description: "Prezentăm o ofertă de preț detaliată și transparentă. Stabilim toate aspectele colaborării într-un contract ferm."
    },
    {
      icon: Construction,
      title: "4. Execuția Lucrării",
      description: "Profesioniștii noștri încep construcția, respectând cu strictețe proiectul, termenele și cele mai înalte standarde de calitate în prelucrarea lemnului."
    },
    {
      icon: Home,
      title: "5. Recepție și Predare",
      description: "La final, inspectăm împreună lucrarea pentru a ne asigura că totul este perfect. Vă predăm cheile noii dumneavoastră locuințe din lemn."
    },
    {
      icon: ShieldCheck,
      title: "6. Garanție și Suport",
      description: "Relația noastră nu se încheie la finalizarea proiectului. Oferim garanție și rămânem disponibili pentru orice nelămuriri."
    }
];

export const faqItems = [
    {
        question: "Cum se stabilește prețul unei construcții din lemn?",
        answer: "Prețul fiecărui imobil este personalizat și variază în funcție de cerințele și preferințele individuale ale clientului (dimensiuni, esența de lemn, finisaje, complexitate). Ne angajăm să oferim un raport optim calitate-preț și transparență totală în ofertare."
    },
    {
        question: "Solicitați avans?",
        answer: "Nu, nu solicităm avans. Lucrăm pe bază de contract, iar plata se realizează în etape, pe metru pătrat sau metru liniar, conform stadiului lucrărilor. Acest lucru vă oferă siguranță financiară și demonstrează încrederea în munca noastră."
    },
    {
        question: "Oferiți garanție?",
        answer: "Da, absolut. Oferim garanție pentru toate lucrările executate după recepția oficială a construcției. Durata și termenii garanției sunt stipulate clar în contract."
    },
    {
        question: "Unde construiți? Aveți o arie de acoperire limitată?",
        answer: "Suntem mândri să putem lucra oriunde în țară. Indiferent de locația proiectului dumneavoastră, echipa noastră se poate deplasa pentru a construi casa visurilor dumneavoastră din lemn."
    },
    {
        question: "Pot folosi materialele mele pentru construcție?",
        answer: "Da, suntem flexibili. Putem oferi soluții complete (manoperă + material) sau putem lucra doar cu manoperă, utilizând materialele pe care le furnizați dumneavoastră."
    },
    {
        question: "Cât durează procesul de construcție a unei case din lemn?",
        answer: "Durata variază în funcție de tipul și complexitatea proiectului. Construcțiile pe structură de lemn, de exemplu, au un timp de execuție considerabil mai scurt decât cele tradiționale din zidărie. O estimare clară a termenelor va fi stabilită în faza de proiectare și contractuală."
    }
]
