import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Ruler,
  Star,
  X,
  Youtube,
} from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keyes Real Estate — Pasadena to the Palisades™" },
      {
        name: "description",
        content:
          "Full-service Los Angeles real estate brokerage led by broker-attorney Brad Keyes. Residential, commercial, and investment properties handled with legal precision.",
      },
      { property: "og:title", content: "Keyes Real Estate — Pasadena to the Palisades™" },
      {
        property: "og:description",
        content: "Luxury LA real estate advisory. Residential · Commercial · Investment.",
      },
    ],
  }),
  component: KeyesHome,
});

/* ---------- DATA ---------- */

const heroSlides = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80",
];

type Listing = {
  address: string;
  neighborhood: string;
  price: string;
  beds?: number;
  baths?: number;
  sqft?: string;
  tag: "NEW LISTING" | "FOR LEASE" | "UNDER CONTRACT" | "COMMERCIAL" | "SOLD";
  category: "sale" | "lease" | "commercial";
  img: string;
};

const listings: Listing[] = [
  {
    address: "3627 Veteran Ave",
    neighborhood: "Palms",
    price: "$1,525,000",
    beds: 3,
    baths: 2,
    sqft: "1,860 sqft",
    tag: "NEW LISTING",
    category: "sale",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    address: "31952½ PCH",
    neighborhood: "Malibu",
    price: "$38,000/mo",
    beds: 4,
    baths: 3,
    sqft: "3,200 sqft",
    tag: "FOR LEASE",
    category: "lease",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  },
  {
    address: "810 S Longwood Ave",
    neighborhood: "Hancock Park",
    price: "$2,900,000",
    beds: 5,
    baths: 4,
    sqft: "4,100 sqft",
    tag: "NEW LISTING",
    category: "sale",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
  },
  {
    address: "4724 Poe Ave",
    neighborhood: "Woodland Hills",
    price: "$1,900,000",
    beds: 4,
    baths: 3.5,
    sqft: "3,050 sqft",
    tag: "UNDER CONTRACT",
    category: "sale",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    address: "311 N Santa Anita",
    neighborhood: "Arcadia",
    price: "$3,568,000",
    sqft: "12,400 sqft lot",
    tag: "COMMERCIAL",
    category: "commercial",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    address: "1553 Armacost Ave PH1",
    neighborhood: "West Los Angeles",
    price: "$1,405,000",
    beds: 3,
    baths: 3,
    sqft: "2,210 sqft",
    tag: "NEW LISTING",
    category: "sale",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    address: "2451 Hillside Terrace",
    neighborhood: "Silver Lake",
    price: "$2,150,000",
    beds: 3,
    baths: 2.5,
    sqft: "2,340 sqft",
    tag: "NEW LISTING",
    category: "sale",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
  },
  {
    address: "118 Marguerita Ave",
    neighborhood: "Pacific Palisades",
    price: "$24,500/mo",
    beds: 5,
    baths: 4,
    sqft: "4,500 sqft",
    tag: "FOR LEASE",
    category: "lease",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    address: "640 N Lake Ave",
    neighborhood: "Pasadena",
    price: "$4,250,000",
    sqft: "8,800 sqft retail",
    tag: "COMMERCIAL",
    category: "commercial",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  },
];

const team = [
  {
    name: "Brad Keyes",
    title: "Managing Partner",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Annie Keyes",
    title: "Director of Marketing",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Josh Stein-Sapir",
    title: "Partner",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Narine Vartanian",
    title: "Director of Compliance",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Brad sold my house in record time. I received 25 offers and accepted a cash offer at $1 million over list price.",
    name: "denimadi3",
    stars: 5,
  },
  {
    quote:
      "Brad and Josh were phenomenal. They sold our home in record time at a price higher than our asking price.",
    name: "liketogo23",
    stars: 5,
  },
  {
    quote:
      "As first-time homebuyers, Brad had the patience to help us figure out our must-haves. We found the perfect starter home.",
    name: "user0662097",
    stars: 5,
  },
  {
    quote:
      "Their legal background gave us confidence at every step. No surprises, just elegant, transparent execution.",
    name: "wsiderealtor",
    stars: 5,
  },
];

const neighborhoods: { name: string; x: number; y: number }[] = [
  { name: "Pasadena", x: 78, y: 32 },
  { name: "Eagle Rock", x: 70, y: 38 },
  { name: "Highland Park", x: 66, y: 42 },
  { name: "Atwater Village", x: 60, y: 46 },
  { name: "Silver Lake", x: 56, y: 50 },
  { name: "Los Feliz", x: 52, y: 46 },
  { name: "Echo Park", x: 54, y: 54 },
  { name: "Downtown LA", x: 58, y: 60 },
  { name: "Culver City", x: 36, y: 66 },
  { name: "Westwood", x: 28, y: 58 },
  { name: "Brentwood", x: 22, y: 56 },
  { name: "Pacific Palisades", x: 14, y: 60 },
  { name: "Malibu", x: 6, y: 68 },
];

/* ---------- COMPONENTS ---------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Properties", href: "#properties" },
    { label: "Our Team", href: "#team" },
    { label: "Map", href: "#map" },
    { label: "Home Valuation", href: "#valuation" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(10,10,30,0.85)] backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-semibold tracking-wide text-white">
            KEYES
          </span>
          <span className="text-[0.65rem] font-light tracking-[0.3em] text-muted-foreground uppercase">
            Real Estate
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.75rem] font-medium uppercase tracking-[0.22em] text-white/85 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#valuation" className="btn-ghost-gold">
            List Your Property
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="lg:hidden text-white"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-[rgba(10,10,18,0.97)] backdrop-blur-2xl">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-serif text-2xl text-white">KEYES</span>
            <button aria-label="Close" onClick={() => setOpen(false)} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-white hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a href="#valuation" onClick={() => setOpen(false)} className="btn-gold mt-6">
              List Your Property
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
      {heroSlides.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="Luxury Los Angeles property"
            className={`h-full w-full object-cover ${i === idx ? "animate-slow-zoom" : ""}`}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.85)_30%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,20,0.9),transparent_40%)]" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 lg:px-12">
        <div className="glass-strong max-w-2xl p-10 lg:p-14 rounded-sm">
          <div className="mb-6 flex items-center gap-3">
            <span className="gold-divider" />
            <span className="eyebrow">Pasadena to the Palisades™</span>
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Your Trusted <span className="italic text-gold">Los Angeles</span> Real&nbsp;Estate Advisor
          </h1>
          <p className="mt-7 max-w-lg text-base font-light leading-relaxed text-muted-foreground">
            Residential · Commercial · Investment — handled with the legal precision of a
            broker-attorney team.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#properties" className="btn-gold">
              Explore Listings <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#valuation" className="btn-ghost-gold">
              Get a Home Valuation
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-px w-12 transition-all duration-500 ${
              i === idx ? "bg-gold h-[2px] w-16" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  italic,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`reveal mb-14 ${align === "center" ? "text-center" : ""}`}>
      <div
        className={`mb-5 flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="gold-divider" />
        <span className="eyebrow">{eyebrow}</span>
        {align === "center" && <span className="gold-divider" />}
      </div>
      <h2 className="font-serif text-4xl text-white sm:text-5xl lg:text-6xl">
        {title} {italic && <span className="italic text-gold">{italic}</span>}
      </h2>
    </div>
  );
}

function PropertyCard({ l }: { l: Listing }) {
  return (
    <article className="reveal group relative overflow-hidden rounded-sm border border-white/10 bg-black gold-glow transition-all duration-500 hover:-translate-y-2">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={l.img}
          alt={l.address}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.95),rgba(0,0,0,0.1)_55%,rgba(0,0,0,0.4))]" />

        <span className="absolute left-4 top-4 bg-gold px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ink">
          {l.tag}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-serif text-2xl leading-tight text-white">{l.address}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {l.neighborhood}
          </p>
          <p className="mt-4 font-serif text-2xl text-gold">{l.price}</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/75">
            {l.beds !== undefined && (
              <span className="flex items-center gap-1.5">
                <BedDouble className="h-3.5 w-3.5 text-gold" /> {l.beds} bd
              </span>
            )}
            {l.baths !== undefined && (
              <span className="flex items-center gap-1.5">
                <Bath className="h-3.5 w-3.5 text-gold" /> {l.baths} ba
              </span>
            )}
            {l.sqft && (
              <span className="flex items-center gap-1.5">
                <Ruler className="h-3.5 w-3.5 text-gold" /> {l.sqft}
              </span>
            )}
          </div>
        </div>

        {/* hover gold strip */}
        <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </article>
  );
}

function Properties() {
  const [filter, setFilter] = useState<"all" | "sale" | "lease" | "commercial">("all");
  const filtered = listings.filter((l) => filter === "all" || l.category === filter);

  const tabs: { id: typeof filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "sale", label: "For Sale" },
    { id: "lease", label: "For Lease" },
    { id: "commercial", label: "Commercial" },
  ];

  return (
    <section id="properties" className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading eyebrow="Featured" title="Properties" />

        <div className="reveal mb-12 flex flex-wrap gap-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              className={`rounded-full border px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-all ${
                filter === t.id
                  ? "border-gold bg-gold text-ink"
                  : "border-white/15 text-white/80 hover:border-gold hover:text-gold"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l) => (
            <PropertyCard key={l.address} l={l} />
          ))}
        </div>

        <div className="reveal mt-14 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-gold hover:text-gold-soft"
          >
            View All Properties <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function BrokerSpotlight() {
  return (
    <section className="relative overflow-hidden bg-navy py-28 lg:py-36">
      {/* subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div className="reveal relative">
          <div className="absolute -inset-4 border border-gold/50" />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
            alt="Brad Keyes"
            className="relative aspect-[4/5] w-full object-cover grayscale"
          />
        </div>

        <div className="reveal">
          <div className="mb-5 flex items-center gap-3">
            <span className="gold-divider" />
            <span className="eyebrow">Meet the Broker</span>
          </div>
          <h2 className="font-serif text-5xl text-white lg:text-6xl">Brad Keyes</h2>
          <p className="mt-3 font-serif text-xl italic text-gold">
            Licensed Broker &amp; Real Estate Attorney
          </p>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground">
            With 16+ years of experience and over <span className="text-white">$1.5 billion</span>{" "}
            in transactional advisory experience, Brad brings a rare blend of legal expertise and
            brokerage savvy to every deal. Raised in Westwood, he is deeply rooted in the LA
            market — from Eagle Rock to the Westside.
          </p>

          <div className="mt-10 flex flex-wrap gap-10 border-y border-white/10 py-6">
            <div>
              <p className="font-serif text-3xl text-gold">$1.5B+</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                Advisory Experience
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">16+</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                Years in LA Real Estate
              </p>
            </div>
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-gold hover:text-gold-soft"
          >
            Read Full Bio <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const dur = 1800;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

function StatsBar() {
  const stats = [
    { value: 1096, suffix: "+", label: "Total Transactions" },
    { value: 883, prefix: "$", suffix: "M", label: "Total Sales Volume" },
    { value: 16, suffix: "+", label: "Years of Experience" },
    { value: 2, label: "Licensed RE Attorneys" },
  ];
  return (
    <section className="relative overflow-hidden py-24">
      <img
        src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=2400&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30 blur-md"
      />
      <div className="absolute inset-0 bg-[rgba(10,10,20,0.85)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`reveal px-6 text-center ${
                idx > 0 ? "lg:border-l lg:border-gold/30" : ""
              }`}
            >
              <p className="font-serif text-5xl text-gold lg:text-6xl">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-4 text-[0.7rem] uppercase tracking-[0.28em] text-white/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <section id="map" className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Service Areas"
          title="Pasadena to the"
          italic="Palisades™"
          align="center"
        />
        <p className="reveal mx-auto -mt-8 mb-16 max-w-xl text-center text-muted-foreground">
          Two offices. One connected team. Covering all of Los Angeles.
        </p>

        <div className="reveal relative mx-auto aspect-[16/8] max-w-5xl overflow-hidden rounded-sm border border-white/10 bg-navy-deep">
          {/* stylized map background */}
          <svg
            viewBox="0 0 100 50"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="g" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#0F1A2E" />
                <stop offset="100%" stopColor="#06070C" />
              </radialGradient>
            </defs>
            <rect width="100" height="50" fill="url(#g)" />
            {/* faux coastline + freeways */}
            <path
              d="M0,38 Q10,40 20,42 T40,46 T70,48 L100,50 L100,50 L0,50 Z"
              fill="rgba(201,169,98,0.08)"
            />
            <path
              d="M0,38 Q10,40 20,42 T40,46 T70,48 L100,50"
              stroke="rgba(201,169,98,0.35)"
              strokeWidth="0.15"
              fill="none"
            />
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={i * 7}
                x2="100"
                y2={i * 7 + 4}
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="0.1"
              />
            ))}
          </svg>

          {neighborhoods.map((n) => (
            <button
              key={n.name}
              onMouseEnter={() => setHover(n.name)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setHover(hover === n.name ? null : n.name)}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              aria-label={n.name}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gold shadow-[0_0_12px_rgba(201,169,98,0.8)]" />
              </span>
              {hover === n.name && (
                <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap glass-dark px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-white">
                  {n.name}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="reveal mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            { name: "Eagle Rock Office", addr: "1412 Colorado Blvd, Eagle Rock, CA 90041" },
            { name: "Pacific Palisades Office", addr: "15113 W Sunset Blvd, Ste 3, Pacific Palisades, CA 90272" },
          ].map((o) => (
            <div key={o.name} className="glass p-8 gold-glow transition-all">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gold">{o.name}</p>
                  <p className="mt-2 font-serif text-2xl leading-snug text-white">{o.addr}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="bg-navy py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading eyebrow="The Team" title="Meet the" italic="People" />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="reveal group glass overflow-hidden rounded-sm gold-glow transition-all"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <p className="font-serif text-2xl text-white">{m.name}</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-gold">
                  {m.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };
  return (
    <section className="bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="reveal mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="gold-divider" />
              <span className="eyebrow">Testimonials</span>
            </div>
            <h2 className="font-serif text-4xl text-white sm:text-5xl lg:text-6xl">
              What Our <span className="italic text-gold">Clients</span> Say
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              aria-label="Previous"
              onClick={() => scroll(-1)}
              className="glass flex h-12 w-12 items-center justify-center text-white hover:text-gold gold-glow"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll(1)}
              className="glass flex h-12 w-12 items-center justify-center text-white hover:text-gold gold-glow"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="reveal glass min-w-[320px] max-w-[400px] flex-1 snap-start p-8"
            >
              <Quote className="h-7 w-7 text-gold" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-6 font-serif text-xl leading-relaxed text-white">"{t.quote}"</p>
              <p className="mt-6 font-serif italic text-muted-foreground">— {t.name}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-gold hover:text-gold-soft"
          >
            View All Zillow Reviews <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Valuation() {
  return (
    <section id="valuation" className="relative overflow-hidden py-32">
      <img
        src="https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=2400&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover blur-sm"
      />
      <div className="absolute inset-0 bg-[rgba(10,10,20,0.78)]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="glass-strong p-10 text-center lg:p-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="gold-divider" />
            <span className="eyebrow">Complimentary</span>
            <span className="gold-divider" />
          </div>
          <h2 className="font-serif text-4xl text-white lg:text-5xl">
            What Is Your Home <span className="italic text-gold">Worth?</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Get a complimentary, no-obligation market analysis from our team.
          </p>
          <form
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Enter your property address"
              className="flex-1 border border-white/20 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-gold">
              Get Valuation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <section id="contact" className="bg-navy-deep pt-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading eyebrow="Get In Touch" title="Let's Start the" italic="Conversation" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <form
            className="reveal glass space-y-5 p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { label: "Full Name", type: "text" },
              { label: "Email", type: "email" },
              { label: "Phone", type: "tel" },
            ].map((f) => (
              <div key={f.label}>
                <label className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-gold">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  className="w-full border-b border-white/20 bg-transparent py-3 text-white focus:border-gold focus:outline-none"
                />
              </div>
            ))}
            <div>
              <label className="mb-2 block text-[0.65rem] uppercase tracking-[0.25em] text-gold">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border-b border-white/20 bg-transparent py-3 text-white focus:border-gold focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-gold mt-4">
              Send Message
            </button>
          </form>

          <div className="reveal space-y-6">
            {[
              {
                title: "Eagle Rock Office",
                addr: "1412 Colorado Blvd, Eagle Rock, CA 90041",
              },
              {
                title: "Pacific Palisades Office",
                addr: "15113 W Sunset Blvd, Ste 3, Pacific Palisades, CA 90272",
              },
            ].map((o) => (
              <div key={o.title} className="glass p-7">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gold">{o.title}</p>
                <p className="mt-3 font-serif text-2xl text-white">{o.addr}</p>
                <div className="mt-5 flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold" /> (310) 555-0142
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gold" /> hello@keyesre.com
                  </span>
                </div>
              </div>
            ))}
            <div className="aspect-[16/9] overflow-hidden border border-white/10 bg-navy">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80"
                alt="Map placeholder"
                className="h-full w-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="reveal mt-24 border-y border-white/10 py-10">
          <p className="mb-6 text-center text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
            Recognized By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-white/60">
            {[
              "LA Business Journal",
              "RealTrends",
              "LA Mag All-Stars",
              "Zillow Premier Agent",
            ].map((a) => (
              <span key={a} className="font-serif text-lg italic">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="grid grid-cols-1 gap-10 py-14 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-semibold text-white">KEYES</span>
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                Real Estate
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm italic text-muted-foreground">
              Pasadena to the Palisades™
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
            {["Properties", "Our Team", "Map", "Home Valuation", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[0.7rem] uppercase tracking-[0.22em] text-white/80 hover:text-gold"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex gap-4 md:justify-end">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="glass flex h-10 w-10 items-center justify-center text-white/80 hover:text-gold gold-glow"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </footer>

        <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
          © 2025 Keyes Real Estate · CalDRE #01912382 · All Rights Reserved
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */

function KeyesHome() {
  useReveal();
  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />
      <Hero />
      <Properties />
      <BrokerSpotlight />
      <StatsBar />
      <MapSection />
      <Team />
      <Testimonials />
      <Valuation />
      <ContactFooter />
    </main>
  );
}

// Used silently to avoid unused-import warnings if a section is removed
void Building2;
