import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MessageCircle, MapPin, Mail, Star, Check,
  Trees, Construction, Grid3x3, Wrench, Home, ChevronRight, Menu, X
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HP Gartengestaltung & Hausmeisterservice Leipheim" },
      { name: "description", content: "Professionelle Gartengestaltung, Pflasterarbeiten, Fliesenlegen und Hausmeisterservice in Leipheim. Zuverlässig, sauber und termintreu." },
      { property: "og:title", content: "HP Gartengestaltung & Hausmeisterservice Leipheim" },
      { property: "og:description", content: "Pflasterarbeiten, Fliesenlegen und alle Arbeiten rund ums Haus." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Trees, title: "Gartengestaltung", items: ["Gartenplanung", "Rasenflächen", "Terrassenbau", "Naturstein", "Gartenwege"] },
  { icon: Construction, title: "Pflasterarbeiten", items: ["Einfahrten", "Hofpflaster", "Gehwege", "Terrassen", "Randsteine"] },
  { icon: Grid3x3, title: "Fliesenarbeiten", items: ["Bodenfliesen", "Wandfliesen", "Badezimmer", "Großformat"] },
  { icon: Wrench, title: "Hausmeister", items: ["Objektbetreuung", "Reparaturen", "Pflegearbeiten", "Winterdienst"] },
  { icon: Home, title: "Rund ums Haus", items: ["Außenanlagen", "Instandhaltung", "Renovierungen", "Handwerkerarbeiten"] },
];

const steps = [
  { n: "1", title: "Beratung", text: "Kostenlose Beratung und Besichtigung vor Ort. Wir hören Ihnen zu und beraten Sie kompetent." },
  { n: "2", title: "Planung", text: "Wir planen Ihr Projekt individuell nach Ihren Wünschen und erstellen ein detailliertes Angebot." },
  { n: "3", title: "Umsetzung", text: "Professionelle und saubere Ausführung durch unser erfahrenes Team mit modernster Ausrüstung." },
  { n: "4", title: "Fertigstellung", text: "Ihr Projekt wird termingerecht abgeschlossen. Wir übergeben Ihnen das fertige Ergebnis." },
];

const reviews = [
  { initials: "MP", name: "Melanie Pongratz", text: "Super Preis-Leistungsverhältnis. Pari kam direkt nach der Angebotsanfrage persönlich vorbei und es wurde ein Kostenvorschlag abgegeben. Arbeiten wurden wie besprochen und super schnell durchgeführt. Es wurde sauber gearbeitet. Team ist ebenfalls super nett. Immer wieder gerne und mehr als zu empfehlen." },
  { initials: "MO", name: "Metehan Oruc", text: "Wir haben Pari und seinem Team unsere komplette Terrasse machen lassen. Super Arbeit, höchstzufrieden. Pünktlich, er hält sein Versprechen, geht auf Wünsche ein. Preis-Leistung TOP." },
  { initials: "VH", name: "Vanessa Hauf", text: "Super Gartengestaltung mit Terrasse. Saubere Arbeit, sehr freundlich und super zuverlässig. Sehr gerne wieder." },
  { initials: "TC", name: "Tom Carlo", text: "Super tolle Arbeit. Pari und sein Team sind einfach nur klasse. Hohe fachliche Kompetenz und tolle menschliche Qualitäten." },
  { initials: "NM", name: "Natascha M", text: "Nach dem Anschreiben bekamen wir sehr schnell eine Antwort. Ein paar Tage später fingen die Jungs an zu arbeiten. Schnell, zuverlässig und sehr sauber." },
  { initials: "MC", name: "Marco Cuvato", text: "Sehr gute Arbeit und ein tolles Team. Pari geht jedem Wunsch nach und setzt alles schnell und ordentlich um." },
  { initials: "AS", name: "African Sleeping", text: "Sehr gute Kommunikation und Auftragsabwicklung. Alle Arbeiten wurden mit viel Kompetenz und Fachwissen ausgeführt." },
  { initials: "SL", name: "Stefanie Lietsche", text: "Der Service ist klasse. Sie sind pünktlich, freundlich, zuverlässig und arbeiten sauber." },
  { initials: "MB", name: "Michael Bolkart", text: "Top Arbeit, freundliche Mitarbeiter und Chef." },
  { initials: "VW", name: "Viktor Wolf", text: "Vielen Dank für Ihre perfekte Arbeit." },
];

const projects = [
  { img: "/images/project1.jpg", title: "Perfekte Einfahrten & Wege", sub: "Sauber · Präzise · Langlebig" },
  { img: "/images/project2.jpg", title: "Pflasterarbeiten", sub: "Professionelle Verlegung" },
  { img: "/images/project3.jpg", title: "Gartenbau", sub: "Rasenflächen & Bepflanzung" },
  { img: "/images/project4.jpg", title: "Baggerarbeiten", sub: "Präzise Verlegung" },
];

function TopBar() {
  return (
    <div className="hidden md:block bg-dark text-dark-foreground text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+4917189365770" className="flex items-center gap-2 hover:text-brand transition"><Phone className="w-4 h-4" />0171 8936577</a>
          <a href="https://wa.me/491718936577" className="flex items-center gap-2 hover:text-brand transition"><MessageCircle className="w-4 h-4" />WhatsApp</a>
          <span className="flex items-center gap-2 text-dark-foreground/80"><MapPin className="w-4 h-4 text-brand" />Leipheim</span>
        </div>
        <a href="#kontakt" className="bg-brand text-brand-foreground px-4 py-1.5 rounded-md font-semibold hover:opacity-90 transition">Kostenloses Angebot</a>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-brand/10 border-2 border-brand flex items-center justify-center font-black text-brand text-xl">HP</div>
          <div className="hidden sm:block leading-tight">
            <div className="font-bold text-sm">HP Hausmeister</div>
            <div className="text-xs text-muted-foreground">Garten- & Landschaftsbau</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#leistungen" className="hover:text-brand transition">Leistungen</a>
          <a href="#projekte" className="hover:text-brand transition">Projekte</a>
          <a href="#ueber" className="hover:text-brand transition">Über Uns</a>
          <a href="#kontakt" className="bg-brand text-brand-foreground px-5 py-2.5 rounded-md font-semibold hover:opacity-90 transition">Kontakt</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1">
            {[["Leistungen","#leistungen"],["Projekte","#projekte"],["Über Uns","#ueber"],["Kontakt","#kontakt"]].map(([l,h])=>(
              <a key={h} href={h} onClick={()=>setOpen(false)} className="px-4 py-3 rounded-md hover:bg-secondary font-medium">{l}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <img src="/images/hero.jpg" alt="Gartengestaltung Leipheim" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center text-dark-foreground">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
          Professionelle <span className="text-brand">Gartengestaltung</span> & Hausmeisterservice in Leipheim
        </h1>
        <p className="mt-8 text-lg md:text-xl text-dark-foreground/85 max-w-2xl mx-auto">
          Pflasterarbeiten, Fliesenlegen und alle Arbeiten rund ums Haus – zuverlässig, sauber und termintreu.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="#kontakt" className="bg-brand text-brand-foreground px-8 py-4 rounded-md font-bold text-lg hover:opacity-90 transition shadow-lg">Angebot anfragen</a>
          <a href="https://wa.me/491718936577" className="bg-dark/60 border-2 border-dark-foreground/30 text-dark-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-dark/80 transition flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />WhatsApp Kontakt
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_,i)=>(<Star key={i} className="w-5 h-5 fill-brand text-brand" />))}
          </div>
          <span className="text-dark-foreground/90 font-medium">5,0 Sterne bei Google</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="leistungen" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand font-semibold uppercase tracking-wider mb-3">Unsere Leistungen</div>
          <h2 className="text-3xl md:text-5xl font-black">Alles aus einer Hand</h2>
          <p className="mt-4 text-lg text-muted-foreground">Kompetente Handwerksarbeit aus Leipheim</p>
          <a href="tel:+491718936577" className="inline-flex items-center gap-2 mt-6 text-brand font-bold hover:underline"><Phone className="w-4 h-4" />Jetzt anrufen</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-card rounded-xl p-8 border border-border hover:border-brand hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 rounded-lg bg-brand/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 text-brand flex-shrink-0" />{it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src="/images/about.jpg" alt="Ihr Partner für Handwerksarbeit" className="rounded-2xl shadow-2xl w-full" />
          <div className="absolute -bottom-6 -right-6 bg-brand text-brand-foreground rounded-2xl p-6 shadow-xl">
            <div className="text-5xl font-black">15+</div>
            <div className="font-semibold">Jahre Erfahrung</div>
          </div>
        </div>
        <div>
          <div className="text-brand font-semibold uppercase tracking-wider mb-3">Über Uns</div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ihr Partner für Handwerksarbeit in Leipheim</h2>
          <p className="text-lg text-muted-foreground mb-4">
            HP Gartengestaltung / Hausmeister steht für zuverlässige Handwerksarbeit, saubere Ausführung und zufriedene Kunden.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Mit Erfahrung im Gartenbau, Pflasterarbeiten, Fliesenlegen und Hausmeisterservice kümmern wir uns um alles rund ums Haus. Unser Anspruch ist höchste Qualität, saubere Arbeit und termingerechte Umsetzung.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {["Qualitätsarbeit","Termintreu","Saubere Arbeit","Zuverlässig"].map((f)=>(
              <div key={f} className="flex items-center gap-3 font-semibold">
                <div className="w-8 h-8 rounded-full bg-brand/15 flex items-center justify-center"><Check className="w-4 h-4 text-brand" /></div>
                {f}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="bg-brand text-brand-foreground px-6 py-3 rounded-md font-bold hover:opacity-90 transition">Jetzt Angebot anfragen</a>
            <a href="#projekte" className="border-2 border-border px-6 py-3 rounded-md font-bold hover:border-brand transition">Unsere Projekte</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 bg-dark text-dark-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand font-semibold uppercase tracking-wider mb-3">Ablauf</div>
          <h2 className="text-3xl md:text-5xl font-black">So läuft Ihr Projekt ab</h2>
          <p className="mt-4 text-lg text-dark-foreground/70">Professionell, transparent und kundenorientiert – von der Beratung bis zur Fertigstellung</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative bg-dark-foreground/5 border border-dark-foreground/10 rounded-xl p-8">
              <div className="w-14 h-14 rounded-full bg-brand text-brand-foreground flex items-center justify-center text-2xl font-black mb-5">{s.n}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-dark-foreground/70">{s.text}</p>
              {i < steps.length - 1 && <ChevronRight className="hidden lg:block absolute top-1/2 -right-5 w-6 h-6 text-brand/60" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand font-semibold uppercase tracking-wider mb-3">Kundenbewertungen</div>
          <h2 className="text-3xl md:text-5xl font-black">Das sagen unsere Kunden</h2>
          <div className="mt-6 inline-flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-sm border border-border">
            <div className="flex gap-1">{[...Array(5)].map((_,i)=>(<Star key={i} className="w-5 h-5 fill-brand text-brand" />))}</div>
            <span className="font-bold">5,0</span><span className="text-muted-foreground">Google Bewertung</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_,i)=>(<Star key={i} className="w-4 h-4 fill-brand text-brand" />))}</div>
              <p className="text-muted-foreground mb-6 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-brand/15 text-brand flex items-center justify-center font-bold text-sm">{r.initials}</div>
                <div className="font-semibold">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://maps.app.goo.gl/T8C7CA7tcYcxQrpP8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-6 py-3 rounded-md font-bold hover:opacity-90 transition">
            <Star className="w-4 h-4 fill-current" />Jetzt auf Google bewerten
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projekte" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand font-semibold uppercase tracking-wider mb-3">Unsere Projekte</div>
          <h2 className="text-3xl md:text-5xl font-black">Ein kleiner Einblick</h2>
          <p className="mt-4 text-lg text-muted-foreground">Abgeschlossene Projekte aus unserer Werkstatt</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-dark-foreground">
                <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
                <p className="text-dark-foreground/80">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#kontakt" className="inline-block bg-brand text-brand-foreground px-8 py-4 rounded-md font-bold hover:opacity-90 transition">Projekt anfragen</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand font-semibold uppercase tracking-wider mb-3">Kontakt</div>
          <h2 className="text-3xl md:text-5xl font-black">Kostenloses Angebot anfragen</h2>
          <p className="mt-4 text-lg text-muted-foreground">Rufen Sie uns an oder schreiben Sie uns eine Nachricht. Wir beraten Sie kostenlos und unverbindlich.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              { icon: MapPin, label: "Adresse", value: "Brühlgasse 8, 89340 Leipheim", href: null },
              { icon: Phone, label: "Telefon", value: "0171 8936577", href: "tel:+491718936577" },
              { icon: MessageCircle, label: "WhatsApp", value: "Nachricht senden", href: "https://wa.me/491718936577" },
              { icon: Mail, label: "E-Mail", value: "hp-hausmeister@hotmail.com", href: "mailto:hp-hausmeister@hotmail.com" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-brand/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{label}</div>
                  {href ? <a href={href} className="text-lg font-bold hover:text-brand">{value}</a> : <div className="text-lg font-bold">{value}</div>}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input required type="text" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Telefon</label>
              <input required type="tel" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">E-Mail</label>
              <input required type="email" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Nachricht</label>
              <textarea required rows={5} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-brand resize-none" />
            </div>
            <button type="submit" className="w-full bg-brand text-brand-foreground py-4 rounded-md font-bold text-lg hover:opacity-90 transition">
              {sent ? "Vielen Dank! Wir melden uns." : "Kostenloses Angebot anfragen"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-brand/20 border-2 border-brand flex items-center justify-center font-black text-brand">HP</div>
            <div>
              <div className="font-bold">HP Hausmeister</div>
              <div className="text-xs text-dark-foreground/60">Garten- & Landschaftsbau</div>
            </div>
          </div>
          <p className="text-dark-foreground/70 text-sm">Professionelle Handwerksarbeit aus Leipheim – zuverlässig, sauber und termintreu.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm text-dark-foreground/70">
            <li>Brühlgasse 8, 89340 Leipheim</li>
            <li><a href="tel:+491718936577" className="hover:text-brand">0171 8936577</a></li>
            <li><a href="mailto:hp-hausmeister@hotmail.com" className="hover:text-brand">hp-hausmeister@hotmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-dark-foreground/70">
            <li><a href="#leistungen" className="hover:text-brand">Leistungen</a></li>
            <li><a href="#projekte" className="hover:text-brand">Projekte</a></li>
            <li><a href="#ueber" className="hover:text-brand">Über Uns</a></li>
            <li><a href="#kontakt" className="hover:text-brand">Kontakt</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-dark-foreground/10 text-center text-sm text-dark-foreground/50">
        © {new Date().getFullYear()} HP Gartengestaltung & Hausmeisterservice. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a href="https://wa.me/491718936577" target="_blank" rel="noreferrer"
       className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand text-brand-foreground shadow-2xl flex items-center justify-center hover:scale-110 transition">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

function Index() {
  return (
    <div>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Reviews />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
