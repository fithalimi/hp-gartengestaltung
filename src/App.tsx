import { useState } from 'react'

const PHONE = '0171 8936577'
const PHONE_LINK = 'tel:+491718936577'
const WHATSAPP = 'https://wa.me/491718936577'
const EMAIL = 'hp-hausmeister@hotmail.com'
const ADDRESS = 'Brühlgasse 8, 89340 Leipheim'
const BUSINESS = 'HP Hausmeister & Gartengestaltung'

const reviews = [
  { initials: 'MP', name: 'Melanie Pongratz', text: 'Super Preis-Leistungsverhältnis. Pari kam direkt nach der Angebotsanfrage persönlich vorbei und es wurde ein Kostenvorschlag abgegeben. Arbeiten wurden wie besprochen und super schnell durchgeführt. Es wurde sauber gearbeitet. Team ist ebenfalls super nett. Immer wieder gerne und mehr als zu empfehlen.' },
  { initials: 'MO', name: 'Metehan Oruc', text: 'Wir haben Pari und seinem Team unsere komplette Terrasse machen lassen. Super Arbeit, höchstzufrieden. Pünktlich, er hält sein Versprechen, geht auf Wünsche ein. Preis-Leistung TOP.' },
  { initials: 'VH', name: 'Vanessa Hauf', text: 'Super Gartengestaltung mit Terrasse. Saubere Arbeit, sehr freundlich und super zuverlässig. Sehr gerne wieder.' },
  { initials: 'TC', name: 'Tom Carlo', text: 'Super tolle Arbeit. Pari und sein Team sind einfach nur klasse. Hohe fachliche Kompetenz und tolle menschliche Qualitäten.' },
  { initials: 'NM', name: 'Natascha M', text: 'Nach dem Anschreiben bekamen wir sehr schnell eine Antwort. Ein paar Tage später fingen die Jungs an zu arbeiten. Schnell, zuverlässig und sehr sauber.' },
  { initials: 'MC', name: 'Marco Cuvato', text: 'Sehr gute Arbeit und ein tolles Team. Pari geht jedem Wunsch nach und setzt alles schnell und ordentlich um.' },
  { initials: 'AS', name: 'African Sleeping', text: 'Sehr gute Kommunikation und Auftragsabwicklung. Alle Arbeiten wurden mit viel Kompetenz und Fachwissen ausgeführt.' },
  { initials: 'SL', name: 'Stefanie Lietsche', text: 'Der Service ist klasse. Sie sind pünktlich, freundlich, zuverlässig und arbeiten sauber.' },
  { initials: 'MB', name: 'Michael Bolkart', text: 'Top Arbeit, freundliche Mitarbeiter und Chef.' },
  { initials: 'VW', name: 'Viktor Wolf', text: 'Vielen Dank für Ihre perfekte Arbeit.' },
]

const services = [
  { icon: 'leaf', title: 'Gartengestaltung', items: ['Gartenplanung', 'Rasenflächen', 'Terrassenbau', 'Naturstein', 'Gartenwege'] },
  { icon: 'layer-group', title: 'Pflasterarbeiten', items: ['Einfahrten', 'Hofpflaster', 'Gehwege', 'Terrassen', 'Randsteine'] },
  { icon: 'th-large', title: 'Fliesenarbeiten', items: ['Bodenfliesen', 'Wandfliesen', 'Badezimmer', 'Großformat'] },
  { icon: 'home', title: 'Hausmeister', items: ['Objektbetreuung', 'Reparaturen', 'Pflegearbeiten', 'Winterdienst'] },
  { icon: 'tools', title: 'Rund ums Haus', items: ['Außenanlagen', 'Instandhaltung', 'Renovierungen', 'Handwerkerarbeiten'] },
]

const projects = [
  { img: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/c3bc0d45-5018-40eb-fe02-01ed77108200/publicContain', title: 'Perfekte Einfahrten & Wege', sub: 'Sauber · Präzise · Langlebig' },
  { img: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/c2db8204-ef3f-439d-ad12-b408caa69000/publicContain', title: 'Pflasterarbeiten', sub: 'Professionelle Verlegung' },
  { img: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/95d92a67-9d82-4518-e7d1-43ba72f24f00/publicContain', title: 'Gartenbau', sub: 'Rasenflächen & Bepflanzung' },
  { img: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8b21a102-9874-4788-22a9-3232c0524800/public', title: 'Baggerarbeiten', sub: 'Präzise Verlegung' },
]

function Fa({ icon, className = '' }: { icon: string; className?: string }) {
  return <i className={`fas fa-${icon} ${className}`} aria-hidden="true" />
}
function Fab({ icon, className = '' }: { icon: string; className?: string }) {
  return <i className={`fab fa-${icon} ${className}`} aria-hidden="true" />
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="bg-[#111111] text-white text-sm hidden sm:block">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          <div className="flex items-center gap-6">
            <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-[#19A34A] transition-colors">
              <Fa icon="phone-alt" className="text-xs" /><span>{PHONE}</span>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#19A34A] transition-colors">
              <Fab icon="whatsapp" className="text-xs" /><span>WhatsApp</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <Fa icon="map-marker-alt" className="text-xs text-[#19A34A]" /><span>Leipheim</span>
            </div>
          </div>
          <a href="#kontakt" className="bg-[#19A34A] text-white px-4 py-1.5 rounded-lg font-medium text-xs hover:bg-[#0E6B33] transition-all">Kostenloses Angebot</a>
        </div>
      </div>
      <nav className="bg-white shadow-md">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20 lg:h-24">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#19A34A] rounded-full flex items-center justify-center">
              <Fa icon="leaf" className="text-white text-lg" />
            </div>
            <span className="font-bold text-[#111111] text-lg hidden sm:block">{BUSINESS}</span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#leistungen" className="text-[#111111] font-medium hover:text-[#19A34A] transition-colors">Leistungen</a>
            <a href="#projekte" className="text-[#111111] font-medium hover:text-[#19A34A] transition-colors">Projekte</a>
            <a href="#ueber-uns" className="text-[#111111] font-medium hover:text-[#19A34A] transition-colors">Über Uns</a>
            <a href="#kontakt" className="bg-[#19A34A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0E6B33] transition-all">Kontakt</a>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#2C3E50]" aria-label="Menü öffnen">
            <Fa icon={open ? 'times' : 'bars'} className="text-2xl" />
          </button>
        </div>
        {open && (
          <div className="lg:hidden bg-white border-t">
            <div className="max-w-[1600px] mx-auto px-4 py-4 space-y-3">
              <a href="#leistungen" onClick={() => setOpen(false)} className="block text-[#111111] font-medium py-2 border-b border-gray-100">Leistungen</a>
              <a href="#projekte" onClick={() => setOpen(false)} className="block text-[#111111] font-medium py-2 border-b border-gray-100">Projekte</a>
              <a href="#ueber-uns" onClick={() => setOpen(false)} className="block text-[#111111] font-medium py-2 border-b border-gray-100">Über Uns</a>
              <a href="#kontakt" onClick={() => setOpen(false)} className="block bg-[#19A34A] text-white px-6 py-3 rounded-lg font-medium text-center mt-4 hover:bg-[#0E6B33]">Kontakt</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8e512ff9-877d-47fe-87b2-dbeedf396300/public" alt="Gartengestaltung Leipheim" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Professionelle <span className="text-[#19A34A]">Gartengestaltung</span> &amp; Hausmeisterservice in Leipheim
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Pflasterarbeiten, Fliesenlegen und alle Arbeiten rund ums Haus – zuverlässig, sauber und termintreu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#kontakt" className="bg-[#19A34A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0E6B33] transition-all transform hover:scale-105 shadow-lg">
            Angebot anfragen
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-3">
            <Fab icon="whatsapp" className="text-2xl" />WhatsApp Kontakt
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-white">
          <div className="flex text-[#19A34A]">
            {[...Array(5)].map((_, i) => <Fa key={i} icon="star" />)}
          </div>
          <span className="text-lg font-medium ml-2">5,0 Sterne bei Google</span>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Fa icon="chevron-down" className="text-white text-2xl" />
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="py-20 bg-[#F5F7F9]" id="leistungen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">Unsere Leistungen</h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">Alles aus einer Hand – kompetente Handwerksarbeit aus Leipheim</p>
        </div>
        <div className="text-center mb-8">
          <a href={PHONE_LINK} className="inline-flex items-center gap-3 bg-[#19A34A] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#0E6B33] transition-all shadow-lg">
            <Fa icon="phone-alt" />Jetzt anrufen
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#19A34A]">
              <div className="w-16 h-16 bg-[#19A34A]/10 rounded-xl flex items-center justify-center mb-4">
                <Fa icon={s.icon} className="text-3xl text-[#19A34A]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">{s.title}</h3>
              <ul className="space-y-2 text-[#6B7280]">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <Fa icon="check" className="text-[#19A34A] text-xs" />{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-20 bg-white" id="ueber-uns">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e7809c89-7a50-4749-14e8-ebc99deb5200/publicContain" alt="Ihr Partner für Handwerksarbeit" className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-[#19A34A] text-white p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm font-medium">Jahre Erfahrung</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">Ihr Partner für Handwerksarbeit in Leipheim</h2>
            <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
              {BUSINESS} steht für zuverlässige Handwerksarbeit, saubere Ausführung und zufriedene Kunden.
            </p>
            <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
              Mit Erfahrung im Gartenbau, Pflasterarbeiten, Fliesenlegen und Hausmeisterservice kümmern wir uns um alles rund ums Haus. Unser Anspruch ist höchste Qualität, saubere Arbeit und termingerechte Umsetzung.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: 'check-circle', label: 'Qualitätsarbeit' },
                { icon: 'clock', label: 'Termintreu' },
                { icon: 'broom', label: 'Saubere Arbeit' },
                { icon: 'user-tie', label: 'Zuverlässig' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#19A34A]/10 rounded-full flex items-center justify-center">
                    <Fa icon={f.icon} className="text-[#19A34A] text-xl" />
                  </div>
                  <span className="font-medium text-[#111111]">{f.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" className="inline-flex items-center justify-center gap-3 bg-[#19A34A] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#0E6B33] transition-all shadow-lg">
                Jetzt Angebot anfragen<Fa icon="arrow-right" />
              </a>
              <a href="#projekte" className="inline-flex items-center justify-center gap-3 bg-white text-[#19A34A] font-bold text-lg px-8 py-4 rounded-full border-2 border-[#19A34A] hover:bg-[#19A34A] hover:text-white transition-all shadow-lg">
                Unsere Projekte<Fa icon="arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { n: '1', icon: 'comments', title: 'Beratung', text: 'Kostenlose Beratung und Besichtigung vor Ort. Wir hören Ihnen zu und beraten Sie kompetent.' },
    { n: '2', icon: 'pencil-alt', title: 'Planung', text: 'Wir planen Ihr Projekt individuell nach Ihren Wünschen und erstellen ein detailliertes Angebot.' },
    { n: '3', icon: 'hard-hat', title: 'Umsetzung', text: 'Professionelle und saubere Ausführung durch unser erfahrenes Team mit modernster Ausrüstung.' },
    { n: '4', icon: 'check-circle', title: 'Fertigstellung', text: 'Ihr Projekt wird termingerecht abgeschlossen. Wir übergeben Ihnen das fertige Ergebnis.' },
  ]
  return (
    <section className="py-20 relative" style={{ background: 'linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url(https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8e512ff9-877d-47fe-87b2-dbeedf396300/public) center/cover no-repeat' }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">So läuft Ihr Projekt ab</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Professionell, transparent und kundenorientiert – von der Beratung bis zur Fertigstellung</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.n} className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-[#19A34A] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Fa icon={s.icon} className="text-4xl text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#19A34A] rounded-full flex items-center justify-center text-white font-bold">{s.n}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-300">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(reviews.length / perPage)
  const visible = reviews.slice(page * perPage, (page + 1) * perPage)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-2">Kundenbewertungen</h2>
          <p className="text-lg text-[#6B7280] mb-4">Das sagen unsere Kunden über unsere Arbeit.</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-[#19A34A] text-xl">
              {[...Array(5)].map((_, i) => <Fa key={i} icon="star" />)}
            </div>
            <span className="text-xl font-bold text-[#111111]">5,0</span>
            <span className="text-[#6B7280]">Google Bewertung</span>
          </div>
        </div>
        <div className="relative">
          <button onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#19A34A] hover:bg-[#19A34A] hover:text-white transition-all">
            <Fa icon="chevron-left" className="text-lg" />
          </button>
          <div className="overflow-hidden px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((r) => (
                <div key={r.name} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-1 text-[#19A34A] mb-3">
                    {[...Array(5)].map((_, i) => <Fa key={i} icon="star" className="text-sm" />)}
                  </div>
                  <p className="text-[#111111] mb-4 text-sm leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-[#19A34A] flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{r.initials}</span>
                    </div>
                    <p className="font-bold text-[#111111]">{r.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => setPage((p) => (p + 1) % totalPages)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#19A34A] hover:bg-[#19A34A] hover:text-white transition-all">
            <Fa icon="chevron-right" className="text-lg" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)} className={`w-3 h-3 rounded-full transition-all ${i === page ? 'bg-[#19A34A]' : 'bg-gray-300'}`} aria-label={`Seite ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="py-20 bg-[#F5F7F9]" id="projekte">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">Unsere Projekte</h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">Ein kleiner Einblick in unsere abgeschlossenen Projekte</p>
        </div>
        <div className="text-center mb-12">
          <a href="#kontakt" className="inline-flex items-center gap-3 bg-[#19A34A] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#0E6B33] transition-all shadow-lg">
            Projekt anfragen<Fa icon="arrow-right" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section className="py-20 bg-[#111111]" id="kontakt">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Kostenloses Angebot anfragen</h2>
            <p className="text-lg text-gray-300 mb-8">Rufen Sie uns an oder schreiben Sie uns eine Nachricht. Wir beraten Sie kostenlos und unverbindlich.</p>
            <div className="space-y-4">
              {[
                { icon: 'map-marker-alt', label: 'Adresse', content: <span className="text-gray-300">{ADDRESS}</span> },
                { icon: 'phone-alt', label: 'Telefon', content: <a href={PHONE_LINK} className="text-gray-300 hover:text-[#19A34A] transition-colors">{PHONE}</a> },
                { icon: 'envelope', label: 'E-Mail', content: <a href={`mailto:${EMAIL}`} className="text-gray-300 hover:text-[#19A34A] transition-colors">{EMAIL}</a> },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#19A34A] rounded-full flex items-center justify-center">
                    <Fa icon={item.icon} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.label}</p>
                    {item.content}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#19A34A] rounded-full flex items-center justify-center">
                  <Fab icon="whatsapp" className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#19A34A] transition-colors">Nachricht senden</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 lg:p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#19A34A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Fa icon="check-circle" className="text-[#19A34A] text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111] mb-2">Vielen Dank!</h3>
                <p className="text-[#6B7280]">Wir melden uns so schnell wie möglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-5">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Ihr Name' },
                  { id: 'phone', label: 'Telefon', type: 'tel', placeholder: 'Ihre Telefonnummer' },
                  { id: 'email', label: 'E-Mail', type: 'email', placeholder: 'Ihre E-Mail-Adresse' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-sm font-medium text-[#111111] mb-2">{f.label}</label>
                    <input type={f.type} id={f.id} name={f.id} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19A34A] focus:border-transparent outline-none transition-all bg-white" placeholder={f.placeholder} required />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#111111] mb-2">Nachricht</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19A34A] focus:border-transparent outline-none transition-all resize-none bg-white" placeholder="Wie können wir Ihnen helfen?" required />
                </div>
                <button type="submit" className="w-full bg-[#19A34A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0E6B33] transition-all">
                  Kostenloses Angebot anfragen
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.0!2d10.2!3d48.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47995f0f0f0f0f0f%3A0x0!2sBr%C3%BChlgasse%208%2C%2089340%20Leipheim%2C%20Germany!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" title="Standort Leipheim"
      />
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#19A34A] rounded-full flex items-center justify-center">
                <Fa icon="leaf" className="text-white text-lg" />
              </div>
              <span className="font-bold text-lg">{BUSINESS}</span>
            </div>
            <p className="text-gray-300 mb-6">Ihr zuverlässiger Partner für Gartengestaltung, Pflasterarbeiten, Fliesenlegen und Hausmeisterservice in Leipheim und Umgebung.</p>
            <div className="flex gap-4">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#19A34A] rounded-full flex items-center justify-center hover:bg-[#0E6B33] transition-colors">
                <Fab icon="whatsapp" className="text-white" />
              </a>
              <a href={PHONE_LINK} className="w-10 h-10 bg-[#19A34A] rounded-full flex items-center justify-center hover:bg-[#0E6B33] transition-colors">
                <Fa icon="phone-alt" className="text-white" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#19A34A]">Leistungen</h3>
            <ul className="space-y-3 text-gray-300">
              {['Gartengestaltung', 'Pflasterarbeiten', 'Fliesenarbeiten', 'Hausmeisterservice'].map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#19A34A]">Schnelllinks</h3>
            <ul className="space-y-3">
              {[['#projekte', 'Projekte'], ['#ueber-uns', 'Über Uns'], ['#kontakt', 'Kontakt']].map(([href, label]) => (
                <li key={label}><a href={href} className="text-gray-300 hover:text-[#19A34A] transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#19A34A]">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Fa icon="map-marker-alt" className="text-[#19A34A] mt-1" />
                <span className="text-gray-300">Brühlgasse 8<br />89340 Leipheim</span>
              </li>
              <li className="flex items-center gap-3">
                <Fa icon="phone-alt" className="text-[#19A34A]" />
                <a href={PHONE_LINK} className="text-gray-300 hover:text-[#19A34A] transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Fab icon="whatsapp" className="text-[#19A34A]" />
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#19A34A] transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-3">
                <Fa icon="envelope" className="text-[#19A34A]" />
                <a href={`mailto:${EMAIL}`} className="text-gray-300 hover:text-[#19A34A] transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {BUSINESS}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/impressum" className="text-gray-400 text-sm hover:text-[#19A34A] transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-gray-400 text-sm hover:text-[#19A34A] transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform" aria-label="WhatsApp kontaktieren">
        <Fab icon="whatsapp" className="text-3xl" />
      </a>
    </div>
  )
}

export default function App() {
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
        <MapSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
