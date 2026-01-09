"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import SEO from "@/components/SEO";
import MobileSummary from "@/components/MobileSummary";


const SECTIONS = [
  { id: "consultations", label: "Consultations & prestations" },
  { id: "note", label: "Informations importantes" },
  { id: "faq", label: "FAQ Tarifs" },
  { id: "cta", label: "Prendre rendez-vous" },
];

const PROMO_START = new Date("2026-01-12T00:00:00");
const PROMO_END = new Date("2026-02-28T23:59:59");

const formatDateFR = (d) =>
  d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });

const isPromoPriceActive = () => {
  if (typeof window === "undefined") return false; // éviter mismatch SSR
  const now = new Date();
  return now >= PROMO_START && now <= PROMO_END;
};


export default function TarifsPage() {
  const tarifs = [
    { label: "Adulte - Consultation d'ostéopathie", price: "70 €" },
    {
      label:
        "Nourrisson et enfant (jusqu'à 12 ans) - Consultation d'ostéopathie",
      price: "50 €",
    },
    {
      label: "Jours fériés et Dimanches - Consultation d'ostéopathie",
      price: "90 €",
    },
    { label: "Offre post-accouchement Maman + Bébé", price: "100 €" },
    {
      label:
        "Cure de 5 séances de drainage lymphatique méthode Renata França (corps entier)",
      price: "800 €",
    },
  ];

  const [activeId, setActiveId] = useState("consultations");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [promoPriceActive, setPromoPriceActive] = useState(false);

  /* ================== SCROLLSPY CORRIGÉ ================== */
  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.25; // zone haute du viewport

      let current = "consultations";

      SECTIONS.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        // La section est considérée "active" si son top est au-dessus
        // d'un quart de la hauteur de l'écran, et son bottom en-dessous.
        if (rect.top <= trigger && rect.bottom > trigger) {
          current = s.id;
        }
      });

      setActiveId(current);
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    setPromoPriceActive(isPromoPriceActive());

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ======================================================= */

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 120,
      behavior: "smooth",
    });
  };

  return (
    <main>
      {/* ===== JSON-LD ===== */}
      <Script
        id="schema-tarifs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              /* ========================================================= */
              /* =============== MEDICAL WEB PAGE ======================== */
              /* ========================================================= */
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/tarifs#page",
                url: "https://www.hilaryfarid-osteopathe.fr/tarifs",
                name: "Tarifs Ostéopathie & Drainage – Hilary Farid",
                description:
                  "Tarifs des consultations d'ostéopathie et du drainage lymphatique Renata França dans les cabinets de Sèvres et Paris 15.",
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Accueil",
                      item: "https://www.hilaryfarid-osteopathe.fr",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Tarifs",
                      item: "https://www.hilaryfarid-osteopathe.fr/tarifs",
                    },
                  ],
                },
              },

              /* ========================================================= */
              /* ===================== SERVICE OSTÉO ====================== */
              /* ========================================================= */
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie#service",
                serviceType: "Consultation d'ostéopathie",
                provider: {
                  "@type": "Person",
                  "@id": "https://www.hilaryfarid-osteopathe.fr#hilary-farid",
                },
                areaServed: ["Sèvres", "Paris 15"],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Tarifs des consultations d'ostéopathie",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      name: "Consultation ostéopathie adulte",
                      price: "70",
                      priceCurrency: "EUR",
                    },
                    {
                      "@type": "Offer",
                      name: "Consultation nourrisson / enfant",
                      price: "50",
                      priceCurrency: "EUR",
                    },
                    {
                      "@type": "Offer",
                      name: "Consultation ostéopathie jours fériés / dimanche",
                      price: "90",
                      priceCurrency: "EUR",
                    },
                    {
                      "@type": "Offer",
                      name: "Offre post-accouchement : Maman + Bébé",
                      price: "100",
                      priceCurrency: "EUR",
                    },
                  ],
                },
              },

              /* ========================================================= */
              /* =============== SERVICE DRAINAGE RENATA ================= */
              /* ========================================================= */
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://www.hilaryfarid-osteopathe.fr/drainage#service",
                serviceType: "Drainage lymphatique – Méthode Renata França",
                provider: {
                  "@type": "Person",
                  "@id": "https://www.hilaryfarid-osteopathe.fr#hilary-farid",
                },
                areaServed: ["Sèvres", "Paris 15"],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Tarifs drainage lymphatique Renata França",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      name: "Séance drainage lymphatique corps entier",
                      price: "150",
                      priceCurrency: "EUR",
                    },
                    {
                      "@type": "Offer",
                      name: "Cure 5 séances drainage lymphatique",
                      price: "800",
                      priceCurrency: "EUR",
                    },
                  ],
                },
              },

              /* ========================================================= */
              /* ======================== FAQ ============================ */
              /* ========================================================= */
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Les tarifs sont-ils les mêmes à Sèvres et Paris 15 ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, le tarif du drainage lymphatique peut différer entre les cabinets de Paris 15 et de Sèvres. Les tarifs d’ostéopathie sont identiques dans les deux cabinets.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Les séances d'ostéopathie sont-elles remboursées ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, la majorité des mutuelles remboursent les séances. Une facture est remise après chaque consultation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Le drainage lymphatique Renata França est-il remboursé ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Non, il s'agit d'un soin bien-être non remboursé. Seules les séances d'ostéopathie peuvent être prises en charge selon votre mutuelle.",
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
      <section className="bg-primary text-offwhite py-16 text-center px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-semibold">Tarifs</h1>
          <p className="mt-4 text-light text-lg max-w-2xl mx-auto">
            Découvrez les tarifs des consultations proposées par Hilary Farid.
          </p>
        </FadeIn>
      </section>

      {/* ================= WRAPPER CONTENT + SOMMAIRE ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">
          {/* ==== SOMMAIRE STICKY (desktop) ==== */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-light p-5">
              <h3 className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Sommaire
              </h3>
              <nav className="space-y-2 text-sm">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => smoothScroll(e, s.id)}
                    className={`block px-3 py-2 rounded-lg transition ${
                      activeId === s.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-graywarm hover:bg-light hover:text-primary"
                    }`}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ==== CONTENU PRINCIPAL ==== */}
          <div className="flex-1 space-y-16">
            {/* ===== SOMMAIRE MOBILE ===== */}
            <MobileSummary
              sections={SECTIONS}
              activeId={activeId}
              smoothScroll={smoothScroll}
            />


            {/* ================= SECTION : TARIFS ================= */}
            <SlideUp>
              <section
                id="consultations"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center mb-10">
                  Consultations & prestations
                </h2>

                <div className="space-y-6">
                  {tarifs.map((t, i) => (
                    <FadeIn key={i} delay={i * 0.05}>
                      <div className="border-b border-graywarm/30 pb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                          {/* Intitulé */}
                          <p className="text-graywarm text-base md:text-lg font-medium md:max-w-[70%]">
                            {t.label}
                          </p>

                          {/* Prix */}
                          <p className="text-primary font-semibold text-lg mt-1 md:mt-0">
                            {t.price}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                {/* ===== DRAINAGE LYMPHATIQUE (PROMO) ===== */}
                <div className="border-b border-graywarm/30 pb-4 mt-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-graywarm text-base md:text-lg font-medium md:max-w-[80%]">
                      Séance de drainage lymphatique méthode Renata França (corps entier)
                    </p>

                    {/* Encadré promo */}
                    {(
                      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 md:p-5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div>
                            <p className="text-primary font-semibold text-base md:text-lg">
                              Offre à venir : 150 € au lieu de <span className="line-through opacity-60">180 €</span>
                            </p>
                            <p className="text-graywarm text-sm mt-1">
                              Disponible pour toute séance du <span className="font-semibold">{formatDateFR(PROMO_START)}</span> jusqu’au{" "}
                              <span className="font-semibold">{formatDateFR(PROMO_END)}</span> (Paris 15 & Sèvres)
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center rounded-full bg-primary text-offwhite px-3 py-1 text-sm font-semibold">
                              -30 €
                            </span>
                            <span className="text-primary font-semibold text-2xl md:text-3xl">
                              150 €
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Prix par cabinet */}
                  <div className="mt-3 space-y-2">
                    {[
                      { city: "Paris 15" },
                      { city: "Sèvres" },
                    ].map((c) => (
                      <div key={c.city} className="flex items-center justify-between">
                        <span className="text-base font-medium text-graywarm">{c.city}</span>

                        {promoPriceActive ? (
                          <span className="flex items-baseline gap-3">
                            <span className="text-graywarm line-through text-sm md:text-base">180 €</span>
                            <span className="text-primary font-semibold text-lg">150 €</span>
                          </span>
                        ) : (
                          <span className="text-primary font-semibold text-lg">180 €</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {promoPriceActive && (
                    <p className="text-graywarm text-xs mt-3">
                      * Offre non valable sur la cure de 5 séances.
                    </p>
                  )}
                </div>
              </section>
            </SlideUp>

            {/* ================= NOTE IMPORTANTE ================= */}
            <SlideUp>
              <section
                id="note"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <p className="text-graywarm text-sm leading-relaxed">
                  Ces honoraires vous sont communiqués à titre indicatif par le
                  praticien. Ils peuvent varier selon le type de soins réalisés
                  en cabinet, le nombre de consultations et les actes
                  additionnels nécessaires. En cas de dépassement, le praticien
                  doit vous en informer avant la séance.
                </p>
              </section>
            </SlideUp>

            {/* ================= FAQ ================= */}
            <SlideUp>
              <section
                id="faq"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – Tarifs
                </h2>

                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/70 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Les tarifs sont-ils identiques dans les deux cabinets ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Oui, les tarifs sont les mêmes à Sèvres et Paris 15.
                    </p>
                  </details>

                  <details className="bg-offwhite/70 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Les consultations sont-elles remboursées ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      De nombreuses mutuelles remboursent l'ostéopathie. Une
                      facture vous est remise après la séance.
                    </p>
                  </details>

                  <details className="bg-offwhite/70 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Le drainage Renata França est-il remboursé ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Non, ce soin n'est pas remboursé. Il s'agit d'un soin
                      bien-être non médical.
                    </p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ================= CTA ================= */}
            <FadeIn>
              <section
                id="cta"
                className="bg-primary text-offwhite rounded-2xl shadow-sm p-10 text-center"
              >
                <h2 className="text-3xl font-semibold">
                  Prendre rendez-vous
                </h2>
                <p className="mt-3 text-offwhite/80">
                  Réservez directement votre consultation sur Doctolib.
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

      {/* ==== BOUTON RETOUR EN HAUT ==== */}
      {showBackToTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-4 md:right-6 z-40 bg-primary text-offwhite w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-lg hover:bg-secondary transition"
        >
          ↑
        </button>
      )}
    </main>
  );
}
