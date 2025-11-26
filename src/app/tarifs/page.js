"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import SEO from "@/components/SEO";

const SECTIONS = [
  { id: "consultations", label: "Consultations & prestations" },
  { id: "note", label: "Informations importantes" },
  { id: "faq", label: "FAQ Tarifs" },
  { id: "cta", label: "Prendre rendez-vous" },
];

export default function TarifsPage() {
  const tarifs = [
    { label: "Adulte - Consultation d’ostéopathie", price: "70 €" },
    {
      label:
        "Nourrisson et enfant (jusqu’à 12 ans) - Consultation d’ostéopathie",
      price: "50 €",
    },
    {
      label:
        "Séance de drainage lymphatique méthode Renata França (corps entier)",
      price: "180 €",
    },
    {
      label:
        "Cure de 5 séances de drainage lymphatique méthode Renata França (corps entier)",
      price: "800 €",
    },
    {
      label: "Jours fériés et Dimanches - Consultation d’ostéopathie",
      price: "90 €",
    },
    { label: "Offre post-accouchement Maman + Bébé", price: "100 €" },
  ];

  const [activeId, setActiveId] = useState("consultations");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "consultations";
      const scrollY = window.scrollY;

      SECTIONS.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) {
          const offset = el.offsetTop - 140;
          if (scrollY >= offset) current = s.id;
        }
      });

      setActiveId(current);
      setShowBackToTop(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* ===== SEO ===== */}
      <SEO
        title="Tarifs des séances"
        description="Tarifs des séances d’ostéopathie et drainage lymphatique Renata França : Sèvres & Paris 15."
        canonical="/tarifs"
        image="/og-image.jpg"
      />

      {/* ===== JSON-LD ===== */}
      <Script
        id="schema-tarifs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/tarifs#page",
                url: "https://www.hilaryfarid-osteopathe.fr/tarifs",
                name: "Tarifs ostéopathie & drainage – Hilary Farid",
                description:
                  "Tarifs des séances d’ostéopathie et drainage lymphatique Renata França à Sèvres et Paris 15.",
              },
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
                        "Oui, les tarifs sont identiques dans les deux cabinets afin d’assurer une cohérence et une transparence totale.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "La séance de drainage est-elle remboursée ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Non, le drainage lymphatique Renata França n’est pas remboursé. Certaines mutuelles remboursent cependant l’ostéopathie.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Acceptez-vous les mutuelles ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, une facture est fournie après chaque séance d’ostéopathie pour un éventuel remboursement.",
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
            <div className="lg:hidden mb-4">
              <div className="bg-white rounded-2xl border border-light p-4">
                <h3 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  Sommaire
                </h3>

                <div className="flex flex-wrap gap-2 text-xs">
                  {SECTIONS.map((s) => (
                    <button
                      key={s.id}
                      onClick={(e) => smoothScroll(e, s.id)}
                      className={`px-3 py-1 rounded-full border text-[11px] transition ${
                        activeId === s.id
                          ? "bg-primary text-offwhite border-primary"
                          : "border-light text-graywarm hover:border-primary"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

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
                      <div className="flex justify-between items-center border-b border-graywarm/40 pb-3">
                        <span className="text-graywarm text-lg">{t.label}</span>
                        <span className="text-primary font-semibold text-lg">
                          {t.price}
                        </span>
                      </div>
                    </FadeIn>
                  ))}
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
                  soignant. Ils peuvent varier selon le type de soins réalisés
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
                      De nombreuses mutuelles remboursent l’ostéopathie. Une
                      facture vous est remise après la séance.
                    </p>
                  </details>

                  <details className="bg-offwhite/70 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Le drainage Renata França est-il remboursé ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Non, ce soin n’est pas remboursé. Il s’agit d’un soin
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
