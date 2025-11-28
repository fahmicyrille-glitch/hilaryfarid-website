"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import SEO from "@/components/SEO";

const SECTIONS = [
  { id: "cabinet", label: "Le cabinet" },
  { id: "osteopathe", label: "Votre ostéopathe" },
  { id: "galerie", label: "Galerie du cabinet" },
  { id: "pourquoi", label: "Pourquoi consulter à Sèvres ?" },
  { id: "acces", label: "Adresse & accès" },
  { id: "faq", label: "FAQ – Cabinet de Sèvres" },
];

export default function SevresPage() {
  const [activeId, setActiveId] = useState("cabinet");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scrollspy + bouton retour en haut
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "cabinet";

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop - 140; // marge pour le header
          if (scrollY >= offsetTop) {
            current = section.id;
          }
        }
      }

      setActiveId(current);
      setShowBackToTop(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleSmoothScrollFromButton = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      {/* === LOCAL BUSINESS + FAQ SCHEMA – SÈVRES === */}
      <Script
        id="ld-localbusiness-sevres"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id":
                  "https://www.hilaryfarid-osteopathe.fr/sevres#business",
                name: "Cabinet d’Ostéopathie – Sèvres",
                description:
                  "Cabinet d’ostéopathie d’Hilary Farid à Sèvres. Consultations pour adultes, nourrissons, femmes enceintes et sportifs.",
                image:
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-1.jpeg",
                url: "https://www.hilaryfarid-osteopathe.fr/sevres",
                telephone: "+33 6 72 01 45 39",
                priceRange: "60€ – 90€",
                openingHours: ["Mo-Sa 08:00-20:00"],
                sameAs: [
                  "https://www.doctolib.fr/osteopathe/sevres/hilary-farid",
                  "https://g.page/r/CfEVH_swFUP2EB0/review",
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "104 Grande Rue",
                  addressLocality: "Sèvres",
                  postalCode: "92310",
                  addressCountry: "FR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 48.822013,
                  longitude: 2.2179,
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name:
                      "Quels motifs sont pris en charge au cabinet de Sèvres ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Le cabinet de Sèvres accueille les adultes, nourrissons, femmes enceintes, sportifs et seniors pour des douleurs musculo-squelettiques, troubles fonctionnels, suivi de grossesse ou après un accouchement.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Le cabinet de Sèvres est-il facilement accessible en transports ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, le cabinet est situé au 104 Grande Rue, à proximité de la gare de Sèvres, du tramway T2 et de plusieurs lignes de bus, ce qui en facilite l’accès en transports en commun.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Puis-je venir avec mon nourrisson ou une poussette au cabinet de Sèvres ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, le cabinet est adapté à l’accueil des nourrissons et des parents avec poussette. Les consultations pédiatriques font partie des prises en charge habituelles.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Y a-t-il un parking à proximité du cabinet d’ostéopathie ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, plusieurs places de stationnement sont disponibles dans la Grande Rue de Sèvres et dans les rues adjacentes, ce qui permet un accès pratique en voiture.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Comment prendre rendez-vous au cabinet d’ostéopathie de Sèvres ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Les rendez-vous se prennent directement en ligne via Doctolib ou par téléphone. Les créneaux sont disponibles du lundi au samedi, en journée et en fin de journée.",
                    },
                  },
                ],
              },
            ],
            null,
            2
          ),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/cabinet-sevres/cabinet-sevres-1.jpeg"
          alt="Cabinet d'ostéopathie à Sèvres"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center text-center px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold text-offwhite drop-shadow-lg">
              Cabinet d’Ostéopathie – Sèvres
            </h1>
            <p className="mt-4 text-offwhite text-lg md:text-xl max-w-2xl mx-auto">
              Un espace moderne, calme et lumineux pensé pour votre bien-être.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= WRAPPER : SOMMAIRE + CONTENU ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">
          {/* ===== SOMMAIRE STICKY (DESKTOP) ===== */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-light/70 p-5">
              <h2 className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Sommaire
              </h2>
              <nav className="space-y-2 text-sm">
                {SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => handleSmoothScroll(e, section.id)}
                    className={`block rounded-lg px-3 py-2 transition-colors ${
                      activeId === section.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-graywarm hover:text-primary hover:bg-light/70"
                    }`}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ===== CONTENU PRINCIPAL ===== */}
          <div className="flex-1 space-y-16">
            {/* Sommaire mobile */}
            <div className="lg:hidden mb-4">
              <div className="bg-white rounded-2xl shadow-sm border border-light/70 p-4">
                <h2 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  Sommaire
                </h2>
                <div className="flex flex-wrap gap-2 text-xs">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSmoothScrollFromButton(section.id)}
                      className={`px-3 py-1 rounded-full border text-[11px] transition-colors ${
                        activeId === section.id
                          ? "bg-primary text-offwhite border-primary"
                          : "border-light text-graywarm hover:border-primary hover:text-primary"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ======= LE CABINET ======= */}
            <SlideUp>
              <section
                id="cabinet"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Un cadre apaisant pour des soins de qualité
                </h2>

                <p className="text-graywarm text-base md:text-lg leading-relaxed mt-8 text-center">
                  Le cabinet d’ostéopathie de Sèvres a été conçu pour offrir un
                  lieu
                  <strong> lumineux, chaleureux et propice au relâchement.</strong>{" "}
                  Chaque détail a été pensé pour vous accueillir dans les
                  meilleures conditions : consultations adultes, nourrissons,
                  femmes enceintes, sportifs et seniors.
                </p>
              </section>
            </SlideUp>

            {/* ======= VOTRE OSTEOPATHE ======= */}
            <SlideUp>
              <section
                id="osteopathe"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-semibold text-primary">
                      Votre ostéopathe – Hilary Farid
                    </h2>

                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-6">
                      Ostéopathe DO diplômée, je vous accueille au cabinet de
                      Sèvres dans une approche globale, douce et personnalisée.
                      Mon objectif est de comprendre l’origine de vos douleurs
                      pour agir de manière durable, tout en respectant votre
                      histoire et votre corps.
                    </p>

                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-4">
                      Formée aux techniques structurelles, viscérales,
                      crâniennes et tissulaires, j’accompagne également les
                      femmes enceintes, les nourrissons ainsi que les sportifs
                      dans leur récupération physique.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative w-full max-w-sm h-[450px] rounded-xl shadow-xl overflow-hidden">
                      <Image
                        src="/hilary.png"
                        alt="Hilary Farid Ostéopathe à Sèvres"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ======= GALERIE ======= */}
            <SlideUp>
              <section
                id="galerie"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center mb-10">
                  Découvrez le cabinet en images
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    "cabinet-sevres-1.jpeg",
                    "cabinet-sevres-2.jpeg",
                    "cabinet-sevres-3.jpeg",
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="relative w-full h-[280px] md:h-[320px] rounded-lg shadow-lg overflow-hidden"
                    >
                      <Image
                        src={`/cabinet-sevres/${img}`}
                        alt={`Cabinet Sèvres image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </SlideUp>

            {/* ======= POURQUOI CONSULTER ======= */}
            <SlideUp>
              <section
                id="pourquoi"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Pourquoi consulter à Sèvres ?
                </h2>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12 items-center">
                  <ul className="space-y-4 text-graywarm text-base md:text-lg">
                    <li>✔️ Cabinet lumineux, moderne et apaisant</li>
                    <li>
                      ✔️ Soins adaptés aux adultes, nourrissons & femmes
                      enceintes
                    </li>
                    <li>✔️ Situé en plein cœur de la Grande Rue de Sèvres</li>
                    <li>✔️ Matériel professionnel et salle de soin premium</li>
                    <li>
                      ✔️ Accueil chaleureux, écoute et accompagnement
                      personnalisé
                    </li>
                  </ul>

                  <div className="relative w-full h-[260px] md:h-[300px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/cabinet-sevres/cabinet-sevres-2.jpeg"
                      alt="Salle d'attente du cabinet"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ======= ADRESSE & ACCES ======= */}
            <SlideUp>
              <section
                id="acces"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Adresse & accès
                </h2>

                <p className="text-center text-graywarm mt-4 text-base md:text-lg">
                  📍 <strong>104 Grande Rue, 92310 Sèvres</strong>
                  <br />
                  À proximité immédiate de la gare, du tramway T2 et de
                  plusieurs lignes de bus.
                </p>

                <div className="mt-10 rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.352230992681!2d2.2178991!3d48.8210789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67aa75a5a7d2b%3A0xa4bbd6f480c4e45f!2s104%20Grande%20Rue%2C%2092310%20S%C3%A8vres!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    className="w-full h-80 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </section>
            </SlideUp>

            {/* ======= FAQ ======= */}
            <SlideUp>
              <section
                id="faq"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – Cabinet d’ostéopathie à Sèvres
                </h2>

                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Quels types de patients sont accueillis au cabinet de
                      Sèvres ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Le cabinet accueille les adultes, les nourrissons, les
                      femmes enceintes, les sportifs et les seniors pour des
                      douleurs musculo-squelettiques, troubles fonctionnels ou
                      un suivi de prévention.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Comment accéder au cabinet en transports en commun ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Le cabinet est situé sur la Grande Rue de Sèvres, à
                      proximité de la gare, du tramway T2 et de plusieurs lignes
                      de bus. L’adresse exacte est : 104 Grande Rue, 92310
                      Sèvres.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Puis-je venir avec une poussette ou mon nourrisson ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Oui, le cabinet est adapté à l’accueil des nourrissons et
                      des parents avec poussette. Les consultations pour bébés
                      font partie intégrante de la pratique.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Y a-t-il des places de stationnement à proximité ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Il existe plusieurs possibilités de stationnement dans la
                      Grande Rue et les rues adjacentes, ce qui permet de venir
                      facilement en voiture.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Comment prendre rendez-vous à Sèvres ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Les rendez-vous peuvent être pris directement en ligne via
                      Doctolib ou par téléphone. Les consultations sont
                      généralement proposées du lundi au samedi.
                    </p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ======= CTA FINALE ======= */}
            <FadeIn>
              <section className="bg-primary text-offwhite rounded-2xl shadow-sm p-8 md:p-10 text-center">
                <h2 className="text-3xl font-semibold">
                  Prendre rendez-vous à Sèvres
                </h2>
                <p className="mt-3 text-offwhite/90">
                  Consultations disponibles du lundi au samedi.
                </p>

                <a
                  href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid"
                  target="_blank"
                  className="mt-6 inline-block bg-offwhite text-primary px-10 py-4 rounded-lg hover:bg-light transition"
                >
                  Réserver sur Doctolib
                </a>
              </section>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== Bouton retour en haut ===== */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-6 right-4 md:right-6 z-40 bg-primary text-offwhite w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-lg hover:bg-secondary transition"
          aria-label="Revenir en haut de la page"
        >
          ↑
        </button>
      )}
    </main>
  );
}
