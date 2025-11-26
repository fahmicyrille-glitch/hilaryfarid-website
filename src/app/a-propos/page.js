"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import SEO from "@/components/SEO";

const SECTIONS = [
  { id: "intro", label: "Introduction" },
  { id: "qui", label: "Qui suis-je ?" },
  { id: "formations", label: "Formations" },
  { id: "approche", label: "Mon approche" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Prendre RDV" },
];

export default function AProposPage() {
  const [activeId, setActiveId] = useState("intro");
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* ===== Scrollspy ===== */
  useEffect(() => {
    const handleScroll = () => {
      let current = "intro";
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
      <SEO
        title="Hilary Farid – Ostéopathe D.O."
        description="Diplômée en ostéopathie, spécialisée nourrissons, grossesse et périnatalité. Découvrez mon parcours."
        canonical="/a-propos"
        image="/og-image.jpg"
      />

      {/* ======== JSON-LD ======== */}
      <Script
        id="ld-medicalwebpage-apropos"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id":
                  "https://www.hilaryfarid-osteopathe.fr/a-propos#about",
                url: "https://www.hilaryfarid-osteopathe.fr/a-propos",
                name: "À propos – Hilary Farid, Ostéopathe D.O.",
                description:
                  "Présentation d’Hilary Farid, ostéopathe D.O. Formations, approches ostéopathiques, accompagnement des adultes, nourrissons, femmes enceintes et sportifs.",
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Hilary est-elle spécialisée en nourrissons ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, Hilary Farid suit régulièrement des nourrissons pour des troubles de succion, d’allaitement, des tensions mandibulaires et des freins restrictifs.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quelle approche thérapeutique utilise Hilary ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Une approche douce, précise et adaptée à chaque patient, que ce soit un adulte, un sportif, une femme enceinte ou un nouveau-né.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Hilary propose-t-elle le drainage lymphatique Renata França ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, elle est formée officiellement à la méthode Renata França depuis 2023.",
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
      <section
        id="intro"
        className="bg-primary text-offwhite py-16 text-center px-6"
      >
        <FadeIn>
          <h1 className="text-4xl font-semibold">À propos d’Hilary</h1>
          <p className="mt-4 text-light text-lg max-w-2xl mx-auto">
            Ostéopathe DO diplômée, douce et à l’écoute, spécialisée dans
            l’accompagnement des nourrissons, femmes enceintes et adultes.
          </p>
        </FadeIn>
      </section>

      {/* ================= WRAPPER SOMMAIRE + CONTENU ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">

          {/* ==== SOMMAIRE (DESKTOP) ==== */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-light p-5">
              <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
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

          {/* ==== CONTENU ==== */}
          <div className="flex-1 space-y-16">

            {/* SOMMAIRE MOBILE */}
            <div className="lg:hidden mb-4">
              <div className="bg-white border border-light rounded-2xl p-4">
                <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  Sommaire
                </h4>
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

            {/* ================= QUI SUIS-JE ================= */}
            <SlideUp>
              <section
                id="qui"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Qui suis-je ?
                </h2>

                <p className="text-graywarm mt-10 leading-relaxed text-center max-w-3xl mx-auto">
                  Hilary Farid est Ostéopathe DO installée à Sèvres et Paris 15.
                  Passionnée par l’humain, le mouvement et l’accompagnement
                  global, elle propose une pratique douce, précise et adaptée à
                  chaque âge et chaque situation : nourrissons, femmes enceintes,
                  adultes et seniors.
                </p>
              </section>
            </SlideUp>

            {/* ================= FORMATIONS ================= */}
            <SlideUp>
              <section
                id="formations"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Formations & Spécialisations
                </h2>

                <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-5xl mx-auto">

                  <FadeIn delay={0.1}>
                    <div className="p-6 border rounded-lg bg-light shadow-sm">
                      <h3 className="text-xl font-semibold text-primary">
                        Ostéopathie (D.O.)
                      </h3>
                      <p className="text-graywarm mt-2">
                        Formation complète en ostéopathie structurelle,
                        viscérale et crânienne.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <div className="p-6 border rounded-lg bg-light shadow-sm">
                      <h3 className="text-xl font-semibold text-primary">
                        Nourrissons (0 à 1 an)
                      </h3>
                      <ul className="mt-3 text-graywarm space-y-2 list-disc list-inside">
                        <li>Troubles de la succion</li>
                        <li>Allaitement</li>
                        <li>Troubles mandibulaires</li>
                        <li>Freins restrictifs (pré & post-frénectomie)</li>
                        <li>Formation Catherine Rybus – Centre YGY (2023)</li>
                      </ul>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <div className="p-6 border rounded-lg bg-light shadow-sm">
                      <h3 className="text-xl font-semibold text-primary">
                        Grossesse & Post-partum
                      </h3>
                      <ul className="mt-3 text-graywarm space-y-2 list-disc list-inside">
                        <li>Douleurs du bassin & lombaires</li>
                        <li>Respiration & mobilité</li>
                        <li>Formation 2025 – Ostéopathie de la grossesse</li>
                      </ul>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.4}>
                    <div className="p-6 border rounded-lg bg-light shadow-sm">
                      <h3 className="text-xl font-semibold text-primary">
                        Drainage lymphatique Renata França
                      </h3>
                      <p className="text-graywarm mt-2">
                        Formation officielle Renata França – 2023 (SPA Renata
                        França).
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </section>
            </SlideUp>

            {/* ================= APPROCHE ================= */}
            <SlideUp>
              <section
                id="approche"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Mon approche
                </h2>

                <div className="mt-10 space-y-6 text-graywarm leading-relaxed max-w-3xl mx-auto">
                  <p>
                    Chaque patient est unique. Hilary prend le temps d’écouter,
                    comprendre et analyser votre situation afin de proposer un
                    traitement précis, doux et ciblé sur vos besoins réels.
                  </p>
                  <p>
                    Que ce soit pour un nourrisson, une femme enceinte, un
                    sportif ou un adulte, les techniques utilisées sont adaptées
                    et respectueuses du corps.
                  </p>
                  <p>
                    L’objectif : soulager durablement, restaurer l’équilibre du
                    corps et améliorer votre qualité de vie au quotidien.
                  </p>
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
                  FAQ – À propos
                </h2>

                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Hilary est-elle spécialisée pour les nourrissons ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Oui, elle est formée aux troubles de succion,
                      l’allaitement, les tensions mandibulaires et les freins
                      restrictifs.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Quel type d’approche utilise Hilary ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Une approche douce, globale et personnalisée adaptée à
                      chaque âge.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Est-elle formée au drainage Renata França ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Oui, elle est formée officiellement à la méthode.
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
                <p className="mt-4 text-offwhite/80">
                  Hilary vous reçoit à Sèvres et Paris 15.
                </p>

                <a
                  href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block bg-offwhite text-primary px-10 py-4 rounded-lg hover:bg-light transition"
                >
                  Réserver une séance
                </a>
              </section>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==== Bouton retour en haut ==== */}
      {showBackToTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-4 md:right-6 bg-primary text-offwhite w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-lg hover:bg-secondary transition z-40"
        >
          ↑
        </button>
      )}
    </main>
  );
}

