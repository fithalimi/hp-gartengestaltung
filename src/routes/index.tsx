import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

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

const services = [
  { icon: "leaf", title: "Gartengestaltung", items: ["Gartenplanung", "Rasenflächen", "Terrassenbau", "Naturstein", "Gartenwege"] },
  { icon: "layer-group", title: "Pflasterarbeiten", items: ["Einfahrten", "Hofpflaster", "Gehwege", "Terrassen", "Randsteine"] },
  { icon: "th-large", title: "Fliesenarbeiten", items: ["Bodenfliesen", "Wandfliesen", "Badezimmer", "Großformat"] },
  { icon: "home", title: "Hausmeister", items: ["Objektbetreuung", "Reparaturen", "Pflegearbeiten", "Winterdienst"] },
  { icon: "tools", title: "Rund ums Haus", items: ["Außenanlagen", "Instandhaltung", "Renovierungen", "Handwerkerarbeiten"] },
];

const projects = [
  { img: "/images/project1.jpg", title: "Perfekte Einfahrten & Wege", sub: "Sauber · Präzise · Langlebig" },
  { img: "/images/project2.jpg", title: "Pflasterarbeiten", sub: "Professionelle Verlegung" },
  { img: "/images/project3.jpg", title: "Gartenbau", sub: "Rasenflächen & Bepflanzung" },
  { img: "/images/project4.jpg", title: "Baggerarbeiten", sub: "Präzise Verlegung" },
];

function FaIcon({ icon, className = "" }: { icon: string; className?: string }) {
  return <i className={`fas fa-${icon} ${className}`} aria-hidden="true" />;
}

function FabIcon({ icon, className = "" }: { icon: string; className?: string }) {
  return <i className={`fab fa-${icon} ${className}`} aria-hidden="true" />;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header id="global-header">
      <div className="bg-[#111111] text-white text-sm w-full hidden sm:block">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 max-w-[1600px] mx-auto">
            <div className="flex items-center gap-6">
              <a href="tel:+491718936577" className="flex items-center gap-2 hover:text-[#19A34A] transition-colors">
                <FaIcon icon="phone-alt" className="text-xs" />
                <span>0171 8936577</span>
              </a>
              <a href="https://wa.me/491718936577" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#19A34A] transition-colors">
                <FabIcon icon="whatsapp" className="text-xs" />
                <span>WhatsApp</span>
              </a>
              <div className="hidden md:flex items-center gap-2">
                <FaIcon icon="map-marker-alt" className="text-xs text-[#19A34A]" />
                <span>Leipheim</span>
              </div>
            </div>
            <a href="#kontakt" className="bg-[#19A34A] text-white px-4 py-1.5 rounded-lg font-medium text-xs hover:bg-[#0E6B33] transition-all">Kostenloses Angebot</a>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-28 max-w-[1600px] mx-auto">
            <a href="/" className="flex items-center">
              <img src="/images/hero.jpg" alt="HP Gartengestaltung / Hausmeister Logo" className="h-24 sm:h-24 lg:h-28 xl:h-32 py-2" />
            </a>
            <div className="hidden lg:flex items-center gap-8">
              <a href="#leistungen" className="text-[#111111] font-medium hover:text-[#19A34A] transition-colors">Leistungen</a>
              <a href="#projekte" className="text-[#111111] font-medium hover:text-[#19A34A] transition-colors">Projekte</a>
              <a href="#ueber-uns" className="text-[#111111] font-medium hover:text-[#19A34A] transition-colors">Über Uns</a>
              <a href="#kontakt" className="bg-[#19A34A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0E6B33] transition-all">Kontakt</a>
            </div>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#2C3E50]" aria-label="Menü öffnen">
              <FaIcon icon={open ? "times" : "bars"} className="text-2xl" />
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden bg-white border-t w-full">
            <div className="px-4 py-4 space-y-3 max-w-[1600px] mx-auto">
              <a href="#leistungen" onClick={() => setOpen(false)} className="block text-[#111111] font-medium py-2 border-b border-gray-100">Leistungen</a>
              <a href="#projekte" onClick={() => setOpen(false)} className="block text-[#111111] font-medium py-2 border-b border-gray-100">Projekte</a>
              <a href="#ueber-uns" onClick={() => setOpen(false)} className="block text-[#111111] font-medium py-2 border-b border-gray-100">Über Uns</a>
              <a href="#kontakt" onClick={() => setOpen(false)} className="block bg-[#19A34A] text-white px-6 py-3 rounded-lg font-medium text-center mt-4 hover:bg-[#0E6B33]">Kontakt</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden" id="seizxx">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero.jpg" alt="Gartengestaltung Leipheim" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
          Professionelle <span className="text-[#19A34A]">Gartengestaltung</span> &amp;
          Hausmeisterservice in Leipheim
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto">
          Pflasterarbeiten, Fliesenlegen und alle Arbeiten rund ums Haus –
          zuverlässig, sauber und termintreu.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
          <a href="#kontakt" className="bg-[#19A34A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0E6B33] transition-all transform hover:scale-105 shadow-lg">
            Angebot anfragen
          </a>
          <a href="https://wa.me/491718936577" target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-3">
            <FabIcon icon="whatsapp" className="text-2xl" />
            WhatsApp Kontakt
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-white">
          <div className="flex text-[#19A34A]">
            <FaIcon icon="star" /><FaIcon icon="star" /><FaIcon icon="star" /><FaIcon icon="star" /><FaIcon icon="star" />
          </div>
          <span className="text-lg font-medium ml-2">5,0 Sterne bei Google</span>
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaIcon icon="chevron-down" className="text-white text-xl sm:text-2xl" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-20 bg-[#F5F7F9] w-full" id="leistungen">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">Unsere Leistungen</h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">Alles aus einer Hand – kompetente Handwerksarbeit aus Leipheim</p>
        </div>
        <div className="text-center mb-8">
          <a href="tel:+491718936577" className="inline-flex items-center justify-center gap-3 bg-[#19A34A] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#0E6B33] transition-all duration-300 shadow-lg">
            <FaIcon icon="phone-alt" />
            Jetzt anrufen
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#19A34A]">
              <div className="w-16 h-16 bg-[#19A34A]/10 rounded-xl flex items-center justify-center mb-4">
                <FaIcon icon={s.icon} className="text-3xl text-[#19A34A]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">{s.title}</h3>
              <ul className="space-y-2 text-base text-[#6B7280]">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <FaIcon icon="check" className="text-[#19A34A] text-xs" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 bg-white w-full" id="ueber-uns">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/images/about.jpg" alt="Ihr Partner für Handwerksarbeit" className="rounded-2xl shadow-2xl w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover" />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#19A34A] text-white p-4 sm:p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm font-medium">Jahre Erfahrung</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">Ihr Partner für Handwerksarbeit in Leipheim</h2>
            <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
              HP Gartengestaltung / Hausmeister steht für zuverlässige Handwerksarbeit, saubere Ausführung und zufriedene Kunden.
            </p>
            <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
              Mit Erfahrung im Gartenbau, Pflasterarbeiten, Fliesenlegen und Hausmeisterservice kümmern wir uns um alles rund ums Haus. Unser Anspruch ist höchste Qualität, saubere Arbeit und termingerechte Umsetzung.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "check-circle", label: "Qualitätsarbeit" },
                { icon: "clock", label: "Termintreu" },
                { icon: "broom", label: "Saubere Arbeit" },
                { icon: "user-tie", label: "Zuverlässig" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#19A34A]/10 rounded-full flex items-center justify-center">
                    <FaIcon icon={f.icon} className="text-[#19A34A] text-xl" />
                  </div>
                  <span className="font-medium text-[#111111]">{f.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" className="inline-flex items-center justify-center gap-3 bg-[#19A34A] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#0E6B33] transition-all duration-300 shadow-lg">
                Jetzt Angebot anfragen
                <FaIcon icon="arrow-right" />
              </a>
              <a href="#projekte" className="inline-flex items-center justify-center gap-3 bg-white text-[#19A34A] font-bold text-lg px-8 py-4 rounded-full border-2 border-[#19A34A] hover:bg-[#19A34A] hover:text-white transition-all duration-300 shadow-lg">
                Unsere Projekte
                <FaIcon icon="arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "1", icon: "comments", title: "Beratung", text: "Kostenlose Beratung und Besichtigung vor Ort. Wir hören Ihnen zu und beraten Sie kompetent." },
    { n: "2", icon: "pencil-alt", title: "Planung", text: "Wir planen Ihr Projekt individuell nach Ihren Wünschen und erstellen ein detailliertes Angebot." },
    { n: "3", icon: "hard-hat", title: "Umsetzung", text: "Professionelle und saubere Ausführung durch unser erfahrenes Team mit modernster Ausrüstung." },
    { n: "4", icon: "check-circle", title: "Fertigstellung", text: "Ihr Projekt wird termingerecht abgeschlossen. Wir übergeben Ihnen das fertige Ergebnis." },
  ];
  return (
    <section className="py-16 sm:py-20 w-full relative" id="swko714" style={{ backgroundImage: "url('/images/bg.jpg')", backgroundAttachment: "scroll", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">So läuft Ihr Projekt ab</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Professionell, transparent und kundenorientiert – von der Beratung bis zur Fertigstellung</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {steps.map((s) => (
            <div key={s.n} className="text-center group">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#19A34A] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FaIcon icon={s.icon} className="text-3xl sm:text-4xl text-white" />
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#19A34A] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">{s.n}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-300">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, (page + 1) * perPage);

  return (
    <section className="py-20 bg-white w-full" id="sxr5jpk">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-2">Kundenbewertungen</h2>
          <p className="text-lg text-[#6B7280] mb-4">Das sagen unsere Kunden über unsere Arbeit.</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-[#19A34A] text-xl">
              <FaIcon icon="star" /><FaIcon icon="star" /><FaIcon icon="star" /><FaIcon icon="star" /><FaIcon icon="star" />
            </div>
            <span className="text-xl font-bold text-[#111111]">5,0</span>
            <span className="text-[#6B7280]">Google Bewertung</span>
          </div>
        </div>

        <div className="relative">
          <button onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#19A34A] hover:bg-[#19A34A] hover:text-white transition-all duration-300">
            <FaIcon icon="chevron-left" className="text-lg" />
          </button>

          <div className="overflow-hidden px-8 sm:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {visible.map((r) => (
                <div key={r.name} className="bg-white rounded-2xl p-6 shadow-lg h-full border border-gray-100">
                  <div className="flex items-center gap-1 text-[#19A34A] mb-3">
                    <FaIcon icon="star" className="text-sm" /><FaIcon icon="star" className="text-sm" /><FaIcon icon="star" className="text-sm" /><FaIcon icon="star" className="text-sm" /><FaIcon icon="star" className="text-sm" />
                  </div>
                  <p className="text-[#111111] mb-4 text-sm leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-[#19A34A] flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{r.initials}</span>
                    </div>
                    <p className="font-bold text-[#111111] text-lg">{r.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => setPage((p) => (p + 1) % totalPages)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#19A34A] hover:bg-[#19A34A] hover:text-white transition-all duration-300">
            <FaIcon icon="chevron-right" className="text-lg" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)} className={`w-3 h-3 rounded-full transition-all ${i === page ? "bg-[#19A34A]" : "bg-gray-300"}`} aria-label={`Seite ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="py-20 bg-[#F5F7F9] w-full" id="projekte">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">Unsere Projekte</h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">Ein kleiner Einblick in unsere abgeschlossenen Projekte</p>
        </div>
        <div className="text-center mt-10 sm:mt-16 mb-12 sm:mb-20">
          <a href="#kontakt" className="inline-flex items-center gap-2 sm:gap-3 bg-[#19A34A] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#0E6B33] transition-all duration-300 shadow-lg">
            Projekt anfragen
            <FaIcon icon="arrow-right" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-gray-200">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-20 bg-[#111111] w-full" id="kontakt">
      <div id="kontakt" className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Kostenloses Angebot anfragen</h2>
            <p className="text-lg text-gray-300 mb-8">Rufen Sie uns an oder schreiben Sie uns eine Nachricht. Wir beraten Sie kostenlos und unverbindlich.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#19A34A] rounded-full flex items-center justify-center">
                  <FaIcon icon="map-marker-alt" className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Adresse</p>
                  <p className="text-gray-300">Brühlgasse 8, 89340 Leipheim</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#19A34A] rounded-full flex items-center justify-center">
                  <FaIcon icon="phone-alt" className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Telefon</p>
                  <a href="tel:+491718936577" className="text-gray-300 hover:text-[#19A34A] transition-colors">0171 8936577</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#19A34A] rounded-full flex items-center justify-center">
                  <FabIcon icon="whatsapp" className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <a href="https://wa.me/491718936577" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#19A34A] transition-colors">Nachricht senden</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#19A34A] rounded-full flex items-center justify-center">
                  <FaIcon icon="envelope" className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">E-Mail</p>
                  <a href="mailto:hp-hausmeister@hotmail.com" className="text-gray-300 hover:text-[#19A34A] transition-colors">hp-hausmeister@hotmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8">
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#111111] mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19A34A] focus:border-transparent outline-none transition-all bg-white text-base" placeholder="Ihr Name" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#111111] mb-2">Telefon</label>
                <input type="tel" id="phone" name="phone" className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19A34A] focus:border-transparent outline-none transition-all bg-white text-base" placeholder="Ihre Telefonnummer" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#111111] mb-2">E-Mail</label>
                <input type="email" id="email" name="email" className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19A34A] focus:border-transparent outline-none transition-all bg-white text-base" placeholder="Ihre E-Mail-Adresse" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#111111] mb-2">Nachricht</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19A34A] focus:border-transparent outline-none transition-all resize-none bg-white text-base" placeholder="Wie können wir Ihnen helfen?" required />
              </div>
              <button type="submit" className="w-full bg-[#19A34A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#0E6B33] transition-all">
                {sent ? "Vielen Dank! Wir melden uns." : "Kostenloses Angebot anfragen"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Map() {
  return (
    <section className="h-[500px] w-full" id="svv94iu">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.0!2d10.2!3d48.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47995f0f0f0f0f0f%3A0x0!2sBr%C3%BChlgasse%208%2C%2089340%20Leipheim%2C%20Germany!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        title="Standort Leipheim"
      />
    </section>
  );
}

function WhatsAppFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50" id="svqtunn">
      <a href="https://wa.me/491718936577" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform" aria-label="WhatsApp kontaktieren">
        <FabIcon icon="whatsapp" className="text-3xl" />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer id="global-footer" className="bg-[#111111] text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="/" className="inline-block mb-6">
              <img src="/images/service1.jpg" alt="HP Gartengestaltung / Hausmeister Logo" className="h-48" />
            </a>
            <p className="text-gray-300 mb-6">Ihr zuverlässiger Partner für Gartengestaltung, Pflasterarbeiten, Fliesenlegen und Hausmeisterservice in Leipheim und Umgebung.</p>
            <div className="flex gap-4">
              <a href="https://wa.me/491718936577" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#19A34A] rounded-full flex items-center justify-center hover:bg-[#0E6B33] transition-colors">
                <FabIcon icon="whatsapp" className="text-white" />
              </a>
              <a href="tel:+491718936577" className="w-10 h-10 bg-[#19A34A] rounded-full flex items-center justify-center hover:bg-[#0E6B33] transition-colors">
                <FaIcon icon="phone-alt" className="text-white" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#19A34A]">Leistungen</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Gartengestaltung</span></li>
              <li><span className="text-gray-300">Pflasterarbeiten</span></li>
              <li><span className="text-gray-300">Fliesenarbeiten</span></li>
              <li><span className="text-gray-300">Hausmeisterservice</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#19A34A]">Schnelllinks</h3>
            <ul className="space-y-3">
              <li><a href="#projekte" className="text-gray-300 hover:text-[#19A34A] transition-colors">Projekte</a></li>
              <li><a href="#ueber-uns" className="text-gray-300 hover:text-[#19A34A] transition-colors">Über Uns</a></li>
              <li><a href="#kontakt" className="text-gray-300 hover:text-[#19A34A] transition-colors">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#19A34A]">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaIcon icon="map-marker-alt" className="text-[#19A34A] mt-1" />
                <span className="text-gray-300">Brühlgasse 8<br />89340 Leipheim</span>
              </li>
              <li className="flex items-center gap-3">
                <FaIcon icon="phone-alt" className="text-[#19A34A]" />
                <a href="tel:+491718936577" className="text-gray-300 hover:text-[#19A34A] transition-colors">0171 8936577</a>
              </li>
              <li className="flex items-center gap-3">
                <FabIcon icon="whatsapp" className="text-[#19A34A]" />
                <a href="https://wa.me/491718936577" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#19A34A] transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-3">
                <FaIcon icon="envelope" className="text-[#19A34A]" />
                <a href="mailto:hp-hausmeister@hotmail.com" className="text-gray-300 hover:text-[#19A34A] transition-colors">hp-hausmeister@hotmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} HP Gartengestaltung / Hausmeister. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="/impressum" className="text-gray-400 text-sm hover:text-[#19A34A] transition-colors">Impressum</a>
              <a href="/datenschutz" className="text-gray-400 text-sm hover:text-[#19A34A] transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Reviews />
        <Projects />
        <Contact />
        <Map />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
