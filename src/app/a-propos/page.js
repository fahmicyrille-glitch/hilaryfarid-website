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
  /* ===== Scrollspy (IntersectionObserver) ===== */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveId(id);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
                "@id": "https://www.hilaryfarid-osteopathe.fr/a-propos#page",
                url: "https://www.hilaryfarid-osteopathe.fr/a-propos",
                name: "À propos – Hilary Farid, Ostéopathe D.O.",
                description:
                  "Présentation d’Hilary Farid, ostéopathe D.O. installée à Sèvres et Paris 15. Formations, approche thérapeutique, spécialisations nourrissons, femmes enceintes, adultes et sportifs.",
                image: "https://www.hilaryfarid-osteopathe.fr/Hilary.webp",

                // Relation avec le schéma global Person
                about: {
                  "@type": "Person",
                  "@id": "https://www.hilaryfarid-osteopathe.fr#hilary-farid",
                },

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
                      name: "À propos",
                      item: "https://www.hilaryfarid-osteopathe.fr/a-propos",
                    },
                  ],
                },
              },

              // ==== FAQ ====
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Hilary est-elle spécialisée pour les nourrissons ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, elle accompagne les nourrissons pour les troubles de succion, d’allaitement, les tensions mandibulaires, les asymétries et les freins restrictifs.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quelle approche thérapeutique utilise Hilary ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Une approche douce, globale et personnalisée, adaptée aux bébés, enfants, adultes, sportifs et femmes enceintes.",
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
                <div id="formations" className="h-[1px]"></div>
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Formations & Spécialisations
                </h2>

                <div className="mt-12 max-w-5xl mx-auto space-y-10">
                  {/* ===== Carte Ostéopathie (PLEINE LARGEUR) ===== */}
                  <FadeIn delay={0.1}>
                    <div className="p-6 border rounded-lg bg-light shadow-sm">
                      <h3 className="text-xl font-semibold text-primary">
                        Ostéopathie (D.O.)
                      </h3>
                      <p className="text-graywarm italic text-sm mt-1">
                        Institut Dauphine d’Ostéopathie – Paris (IDO Paris) - 2021
                      </p>

                      <ul className="mt-4 text-graywarm space-y-2 list-disc list-inside">
                        <li>Formation complète en 5 années à temps plein</li>
                        <li>Diplôme d’Ostéopathe agréé RNCP Niveau 7</li>
                        <li>Études approfondies en anatomie, physiologie et biomécanique</li>
                        <li>Pratique clinique encadrée en consultations réelles</li>
                        <li>Techniques structurelles, viscérales, crâniennes & tissulaires</li>
                        <li>Accompagnement de nourrissons, femmes enceintes, sportifs & adultes</li>
                      </ul>
                    </div>
                  </FadeIn>

                  {/* ===== Grille des autres formations ===== */}
                  <div className="grid md:grid-cols-2 gap-10">

                    {/* Nourrissons – Pédiatrie */}
                    <FadeIn delay={0.2}>
                      <div className="p-6 border rounded-lg bg-light shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Nourrissons – Pédiatrie
                        </h3>
                        <p className="text-graywarm italic text-sm mt-1">
                          Centre YGY – Catherine Rybus — 2023
                        </p>
                        <ul className="mt-4 text-graywarm space-y-2 list-disc list-inside">
                          <li>Prise en charge du nourrisson (0 à 1 an)</li>
                          <li>Tensions, asymétries, reflux, coliques</li>
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Troubles de la succion */}
                    <FadeIn delay={0.3}>
                      <div className="p-6 border rounded-lg bg-light shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Nourrissons – Troubles de la succion
                        </h3>
                        <p className="text-graywarm italic text-sm mt-1">
                          Centre YGY – Catherine Rybus — 2024
                        </p>
                        <ul className="mt-4 text-graywarm space-y-2 list-disc list-inside">
                          <li>Allaitement</li>
                          <li>Troubles mandibulaires</li>
                          <li>Freins restrictifs (pré & préparation à la frénectomie)</li>
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Grossesse & Post-partum */}
                    <FadeIn delay={0.4}>
                      <div className="p-6 border rounded-lg bg-light shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Ostéopathie pendant la grossesse : de l’inconfort au bien-être
                        </h3>
                        <p className="text-graywarm italic text-sm mt-1">
                          CFPCO — 2025
                        </p>
                        <ul className="mt-4 text-graywarm space-y-2 list-disc list-inside">
                          <li>Douleurs du bassin & lombaires</li>
                          <li>Respiration & mobilité</li>
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Drainage Renata França */}
                    <FadeIn delay={0.5}>
                      <div className="p-6 border rounded-lg bg-light shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Drainage lymphatique Renata França
                        </h3>
                        <p className="text-graywarm italic text-sm mt-1">
                          SPA Renata França — 2023
                        </p>
                        <p className="mt-4 text-graywarm">
                          Formation officielle à la méthode Renata França.
                        </p>
                      </div>
                    </FadeIn>

                  </div>
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
