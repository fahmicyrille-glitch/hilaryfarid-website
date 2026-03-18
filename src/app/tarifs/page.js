"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import MobileSummary from "@/components/MobileSummary";
import BackToTop from "@/components/BackToTop";

const SECTIONS = [
  { id: "consultations", label: "Consultations & prestations" },
  { id: "note", label: "Informations importantes" },
  { id: "faq", label: "FAQ Tarifs" },
  { id: "cta", label: "Prendre rendez-vous" },
];

const PROMO_START = new Date("2026-01-12T00:00:00");
const PROMO_END = new Date("2026-02-27T23:59:59");

const formatDateFR = (d) =>
  d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

// Prix drainage
const DRAINAGE_PROMO_PRICE = 150;
const DRAINAGE_REGULAR_PRICES = {
  "Paris 15": 160,
  "Sèvres": 180,
};

// Option 2 : avant / pendant / après
const getPromoState = () => {
  if (typeof window === "undefined") return "after"; // éviter mismatch SSR
  const now = new Date();
  if (now < PROMO_START) return "before";
  if (now > PROMO_END) return "after";
  return "active";
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
  const [promoState, setPromoState] = useState("after"); // before | active | after

  /* ================== SCROLLSPY + PROMO STATE ================== */
  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.25; // zone haute du viewport
      let current = "consultations";

      SECTIONS.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= trigger && rect.bottom > trigger) {
          current = s.id;
        }
      });

      setActiveId(current);
    };

    const updatePromo = () => {
      setPromoState(getPromoState());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();
    updatePromo();

    // Mise à jour auto (si la page reste ouverte)
    const timer = setInterval(updatePromo, 60_000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);
  /* ============================================================= */

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
    <main className="relative">
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

      {/* ================= HERO (Optimisé CRO) ================= */}
      <section className="bg-primary text-offwhite py-16 md:py-20 text-center px-6 relative overflow-hidden">
        {/* Voile décoratif discret */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />

        <div className="relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold">Tarifs & Prestations</h1>
            <p className="mt-4 text-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Des honoraires clairs et transparents. Les consultations d'ostéopathie sont prises en charge par la majorité des mutuelles.
            </p>

            {/* ⭐ PREUVE SOCIALE IMMÉDIATE ⭐ */}
            <div className="mt-6 mb-8 flex flex-col items-center justify-center gap-1">
              <div className="flex text-amber-400 text-xl tracking-widest drop-shadow-md">
                ★★★★★
              </div>
              <span className="text-offwhite/90 text-sm font-medium tracking-wide">
                5/5 sur Google (+100 avis)
              </span>
            </div>

            <a
              href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0596DE] text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-[#047cbd] transition-all transform hover:-translate-y-1"
            >
              Prendre rendez-vous sur Doctolib
            </a>
          </FadeIn>
        </div>
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
                  Consultations d'Ostéopathie
                </h2>

                <div className="space-y-6">
                  {tarifs.map((t, i) => (
                    <FadeIn key={i} delay={i * 0.05}>
                      <div className="border-b border-graywarm/30 pb-4 hover:bg-offwhite/30 transition-colors px-2 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          {/* Intitulé */}
                          <p className="text-graywarm text-base md:text-lg font-medium md:max-w-[70%]">
                            {t.label}
                          </p>

                          {/* Prix */}
                          <p className="text-primary font-bold text-xl mt-1 md:mt-0">
                            {t.price}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* ===== DRAINAGE LYMPHATIQUE (PROMO) ===== */}
                <h2 className="text-3xl font-semibold text-primary text-center mt-16 mb-10">
                  Drainage Lymphatique Renata França
                </h2>

                <div className="border border-primary/20 rounded-2xl p-6 bg-offwhite/50 shadow-sm">
                  <div className="flex flex-col gap-4">
                    <p className="text-primary font-semibold text-lg md:text-xl">
                      Séance de drainage lymphatique méthode Renata França (corps entier)
                    </p>

                    {/* AVANT LA PROMO */}
                    {promoState === "before" && (
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 md:p-5 mt-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div>
                            <p className="text-primary font-semibold text-base md:text-lg">
                              Offre à venir : {DRAINAGE_PROMO_PRICE} € (Paris 15 & Sèvres)
                            </p>
                            <p className="text-graywarm text-sm mt-1">
                              Disponible pour toute séance du{" "}
                              <span className="font-semibold">
                                {formatDateFR(PROMO_START)}
                              </span>{" "}
                              jusqu’au{" "}
                              <span className="font-semibold">
                                {formatDateFR(PROMO_END)}
                              </span>
                              .
                              <br />
                              Prix habituels : Paris 15{" "}
                              <span className="font-semibold">
                                {DRAINAGE_REGULAR_PRICES["Paris 15"]} €
                              </span>{" "}
                              • Sèvres{" "}
                              <span className="font-semibold">
                                {DRAINAGE_REGULAR_PRICES["Sèvres"]} €
                              </span>
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center rounded-full bg-primary text-offwhite px-3 py-1 text-sm font-semibold">
                              Jusqu’à -30 €
                            </span>
                            <span className="text-primary font-bold text-2xl md:text-3xl">
                              {DRAINAGE_PROMO_PRICE} €
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PENDANT LA PROMO */}
                    {promoState === "active" && (
                      <div className="bg-primary/10 border border-primary rounded-xl p-4 md:p-5 mt-2 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div>
                            <p className="text-primary font-semibold text-base md:text-lg flex items-center gap-2">
                              <span>🔥</span> Offre en cours : {DRAINAGE_PROMO_PRICE} € (Paris 15 & Sèvres)
                            </p>
                            <p className="text-graywarm text-sm mt-1">
                              Offre valable jusqu’au{" "}
                              <span className="font-semibold text-primary">
                                {formatDateFR(PROMO_END)}
                              </span>
                              .
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center rounded-full bg-secondary text-offwhite px-3 py-1 text-sm font-bold">
                              Jusqu’à -30 €
                            </span>
                            <span className="text-primary font-bold text-2xl md:text-3xl">
                              {DRAINAGE_PROMO_PRICE} €
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Prix par cabinet */}
                  <div className="mt-6 space-y-3 bg-white p-4 rounded-xl border border-light">
                    {["Paris 15", "Sèvres"].map((city) => {
                      const regular = DRAINAGE_REGULAR_PRICES[city];

                      return (
                        <div
                          key={city}
                          className="flex items-center justify-between pb-2 border-b border-light/50 last:border-0 last:pb-0"
                        >
                          <span className="text-base font-medium text-graywarm flex items-center gap-2">
                            📍 Cabinet de {city}
                          </span>

                          {promoState === "active" ? (
                            <span className="flex items-baseline gap-3">
                              <span className="text-graywarm line-through text-sm md:text-base">
                                {regular} €
                              </span>
                              <span className="text-primary font-bold text-xl">
                                {DRAINAGE_PROMO_PRICE} €
                              </span>
                            </span>
                          ) : (
                            <span className="text-primary font-bold text-xl">
                              {regular} €
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {promoState === "active" && (
                    <p className="text-graywarm text-xs mt-3 italic text-center">
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
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-1">💡</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Informations importantes</h3>
                    <p className="text-graywarm text-sm leading-relaxed">
                      Une facture vous sera systématiquement délivrée en fin de consultation pour votre mutuelle.
                    </p>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ================= FAQ ================= */}
            <SlideUp>
              <section
                id="faq"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – Tarifs & Remboursements
                </h2>

                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/70 border rounded-xl p-5 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer text-lg">
                      Les tarifs sont-ils identiques dans les deux cabinets ?
                    </summary>
                    <p className="mt-3 text-graywarm text-base leading-relaxed">
                      Oui pour l'ostéopathie ! Les tarifs des consultations d'ostéopathie sont strictement identiques à Sèvres et Paris 15. En revanche, le tarif du drainage lymphatique (hors période de promotion) varie selon le cabinet.
                    </p>
                  </details>

                  <details className="bg-offwhite/70 border rounded-xl p-5 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer text-lg">
                      Les consultations d'ostéopathie sont-elles remboursées ?
                    </summary>
                    <p className="mt-3 text-graywarm text-base leading-relaxed">
                      Oui, la grande majorité des mutuelles prennent en charge tout ou partie des séances d'ostéopathie (forfait annuel ou par séance). Une facture détaillée vous sera envoyée par e-mail après chaque consultation pour faciliter vos démarches de remboursement.
                    </p>
                  </details>

                  <details className="bg-offwhite/70 border rounded-xl p-5 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer text-lg">
                      Le drainage Renata França est-il remboursé par la mutuelle ?
                    </summary>
                    <p className="mt-3 text-graywarm text-base leading-relaxed">
                      Non, le drainage lymphatique méthode Renata França est considéré comme un soin de confort et de bien-être non médicalisé. Il n'est donc pas pris en charge par les mutuelles, contrairement aux séances d'ostéopathie pures.
                    </p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ================= CTA FINAL ================= */}
            <FadeIn>
              <section
                id="cta"
                className="bg-primary text-offwhite rounded-2xl shadow-sm p-10 text-center"
              >
                <h2 className="text-3xl font-semibold">Prendre rendez-vous</h2>
                <p className="mt-3 text-offwhite/90 text-lg">
                  Réservez directement votre consultation sur Doctolib à Sèvres ou Paris 15.
                </p>

                <a
                  href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-[#0596DE] text-white px-10 py-4 rounded-lg font-bold shadow-xl hover:bg-[#047cbd] transition-all transform hover:-translate-y-1 text-center"
                >
                  Réserver sur Doctolib
                </a>
              </section>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= BOUTONS FLOTTANTS (DOCTOLIB) ================= */}

      {/* ------ MOBILE DOCTOLIB ------ */}
      <div
        className="
          fixed bottom-5 left-1/2 -translate-x-1/2
          z-50 md:hidden
          bg-white/95 border border-primary/20
          shadow-[0_8px_30px_rgba(0,0,0,0.15)]
          rounded-full px-6 py-3 flex items-center gap-2
        "
      >
        <a
          href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary font-semibold text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-80 text-[#0596DE]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span>Prendre RDV</span>
        </a>
      </div>

      {/* ------ DESKTOP DOCTOLIB ------ */}
      <div className="hidden md:flex fixed top-1/2 right-6 -translate-y-1/2 z-50">
        <a
          href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-3
            bg-white/95 border border-[#0596DE]/20
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            px-5 py-3 rounded-2xl
            transition-all hover:shadow-xl hover:-translate-y-1 hover:bg-white
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 opacity-90 text-[#0596DE]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span className="text-[#0596DE] font-bold text-lg tracking-wide">
            Prendre RDV
          </span>
        </a>
      </div>

      {/* ==== BOUTON RETOUR EN HAUT ==== */}
      <BackToTop />
    </main>
  );
}
