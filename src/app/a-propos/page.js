"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import MobileSummary from "@/components/MobileSummary";
import BackToTop from "@/components/BackToTop";

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
                  "Présentation d'Hilary Farid, ostéopathe D.O. installée à Sèvres et Paris 15. Formations, approche thérapeutique, spécialisations nourrissons, femmes enceintes, adultes et sportifs.",
                image: "https://www.hilaryfarid-osteopathe.fr/Hilary.webp",
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
                        "Oui, elle accompagne les nourrissons pour les troubles de succion, d'allaitement, les tensions mandibulaires, les asymétries et les freins restrictifs.",
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
                    name: "Hilary propose-t-elle le drainage lymphatique Renata França ?",
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

      {/* ================= HERO (Optimisé CRO) ================= */}
      <section
        id="intro"
        className="bg-primary text-offwhite py-16 md:py-20 text-center px-6 relative overflow-hidden"
      >
        {/* Voile décoratif */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />

        <div className="relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Faisons connaissance
            </h1>
            <p className="mt-4 text-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Ostéopathe D.O. diplômée, je vous accompagne avec douceur et écoute à travers une pratique adaptée aux nourrissons, femmes enceintes, adultes et sportifs.
            </p>

            {/* ⭐ PREUVE SOCIALE IMMÉDIATE ⭐ */}
            <div className="mt-6 mb-8 flex flex-col items-center justify-center gap-1">
              <div className="flex text-amber-400 text-xl tracking-widest drop-shadow-md">
                ★★★★★
              </div>
              <span className="text-offwhite/90 text-sm font-medium tracking-wide">
                5/5 sur Google (+100 avis Sèvres & Paris 15)
              </span>
            </div>

            <button
              type="button"
              className="trigger-booking-modal inline-flex items-center gap-2 bg-[#0596DE] text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-[#047cbd] transition-all transform hover:-translate-y-1"
            >
              Prendre RDV Doctolib
            </button>
          </FadeIn>
        </div>
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
            <MobileSummary
              sections={SECTIONS}
              activeId={activeId}
              smoothScroll={smoothScroll}
            />

            {/* ================= QUI SUIS-JE (Avec Photo & Texte plus grand) ================= */}
            <SlideUp>
              <section
                id="qui"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">

                  {/* Image de profil */}
                  <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl shadow-md overflow-hidden">
                    <Image
                      src="/hilary.webp"
                      alt="Hilary Farid, Ostéopathe DO"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  {/* Texte de présentation */}
                  <div>
                    <h2 className="text-3xl font-semibold text-primary">
                      Qui suis-je ?
                    </h2>
                    <div className="text-graywarm mt-6 space-y-4 text-lg leading-relaxed">
                      <p>
                        Je suis <strong>Hilary Farid</strong>, Ostéopathe D.O. installée à Sèvres et Paris 15.
                      </p>
                      <p>
                        Passionnée par l'humain, le mouvement et l'accompagnement global, j'ai à cœur de vous proposer une pratique <strong>douce, précise et sécuritaire</strong>.
                      </p>
                      <p>
                        Mon approche s'adapte à chaque étape de la vie : que vous soyez un adulte souffrant de maux de dos, un sportif en récupération, une femme enceinte cherchant du confort, ou un parent souhaitant faire un bilan pour son nourrisson.
                      </p>
                    </div>
                  </div>
                </div>
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
                  Formations & Expertises
                </h2>

                <div className="mt-12 max-w-5xl mx-auto space-y-8">
                  {/* ===== Carte Ostéopathie (PLEINE LARGEUR) ===== */}
                  <FadeIn delay={0.1}>
                    <div className="p-6 border border-light/80 rounded-xl bg-offwhite/50 shadow-sm">
                      <h3 className="text-2xl font-semibold text-primary">
                        Ostéopathie (D.O.)
                      </h3>
                      <p className="text-secondary font-medium text-sm mt-1">
                        Institut Dauphine d'Ostéopathie – Paris (IDO Paris) - 2021
                      </p>

                      <ul className="mt-5 text-graywarm text-base md:text-lg space-y-2 list-disc list-inside">
                        <li>Formation complète en 5 années à temps plein</li>
                        <li>Diplôme d'Ostéopathe agréé RNCP Niveau 7</li>
                        <li>Études approfondies en anatomie, physiologie et biomécanique</li>
                        <li>Pratique clinique encadrée en consultations réelles</li>
                        <li>Techniques structurelles, viscérales, crâniennes & tissulaires</li>
                        <li>Accompagnement de nourrissons, femmes enceintes, sportifs & adultes</li>
                      </ul>
                    </div>
                  </FadeIn>

                  {/* ===== Grille des autres formations ===== */}
                  <div className="grid md:grid-cols-2 gap-6">

                    {/* Nourrissons – Pédiatrie */}
                    <FadeIn delay={0.2}>
                      <div className="p-6 border border-light/80 rounded-xl bg-offwhite/50 shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Nourrissons – Pédiatrie
                        </h3>
                        <p className="text-secondary font-medium text-sm mt-1">
                          Centre YGY – Catherine Rybus — 2023
                        </p>
                        <ul className="mt-4 text-graywarm text-base space-y-2 list-disc list-inside">
                          <li>Prise en charge du nourrisson (0 à 1 an)</li>
                          <li>Tensions, asymétries, reflux, coliques</li>
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Troubles de la succion */}
                    <FadeIn delay={0.3}>
                      <div className="p-6 border border-light/80 rounded-xl bg-offwhite/50 shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Troubles de la succion
                        </h3>
                        <p className="text-secondary font-medium text-sm mt-1">
                          Centre YGY – Catherine Rybus — 2024
                        </p>
                        <ul className="mt-4 text-graywarm text-base space-y-2 list-disc list-inside">
                          <li>Allaitement et troubles mandibulaires</li>
                          <li>Freins restrictifs (pré & post frénectomie)</li>
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Grossesse & Post-partum */}
                    <FadeIn delay={0.4}>
                      <div className="p-6 border border-light/80 rounded-xl bg-offwhite/50 shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Grossesse & Post-partum
                        </h3>
                        <p className="text-secondary font-medium text-sm mt-1">
                          CFPCO — 2025
                        </p>
                        <ul className="mt-4 text-graywarm text-base space-y-2 list-disc list-inside">
                          <li>Douleurs du bassin & lombaires</li>
                          <li>Respiration & mobilité (De l'inconfort au bien-être)</li>
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Drainage Renata França */}
                    <FadeIn delay={0.5}>
                      <div className="p-6 border border-light/80 rounded-xl bg-offwhite/50 shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Drainage Lymphatique
                        </h3>
                        <p className="text-secondary font-medium text-sm mt-1">
                          SPA Renata França — 2023
                        </p>
                        <p className="mt-4 text-graywarm text-base">
                          Formation officielle à la méthode de drainage Renata França.
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

                <div className="mt-10 space-y-6 text-graywarm text-lg leading-relaxed max-w-3xl mx-auto">
                  <p>
                    <strong>Chaque patient est unique.</strong> Je prends le temps d'écouter votre histoire, de comprendre vos douleurs et d'analyser votre posture afin de proposer un traitement précis, ciblé sur l'origine du problème plutôt que sur le simple symptôme.
                  </p>
                  <p>
                    Mes techniques (structurelles, viscérales, crâniennes et tissulaires) sont toujours appliquées avec respect et douceur, en totale adéquation avec vos besoins du moment.
                  </p>
                  <p>
                    L'objectif final ? Vous soulager durablement, restaurer la mobilité de vos tissus et vous permettre de retrouver un équilibre corporel optimal.
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
                  <details className="bg-offwhite/80 border rounded-xl p-5 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer text-lg">
                      Hilary est-elle spécialisée pour les nourrissons ?
                    </summary>
                    <p className="mt-3 text-graywarm text-base leading-relaxed">
                      Oui, elle est formée aux troubles de succion, l'allaitement, les tensions mandibulaires et les freins restrictifs.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-5 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer text-lg">
                      Quel type d'approche utilise Hilary ?
                    </summary>
                    <p className="mt-3 text-graywarm text-base leading-relaxed">
                      Une approche ostéopathique douce, globale et personnalisée, adaptée à chaque âge et à chaque morphologie.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-5 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer text-lg">
                      Est-elle formée au drainage Renata França ?
                    </summary>
                    <p className="mt-3 text-graywarm text-base leading-relaxed">
                      Oui, elle est formée officiellement à la méthode Renata França pour allier l'efficacité du soin à la sécurité de l'expertise anatomique.
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
                <h2 className="text-3xl font-semibold">Besoin d'un rendez-vous ?</h2>
                <p className="mt-4 text-offwhite/90 text-lg">
                  Je vous reçois dans mes cabinets de Sèvres et Paris 15.
                </p>

                <button
                  type="button"
                  className="trigger-booking-modal mt-8 inline-block bg-offwhite text-[#0596DE] font-bold px-10 py-4 rounded-lg hover:bg-light transition shadow-md"
                >
                  Réserver une séance
                </button>
              </section>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* === Bouton retour en haut via le composant global === */}
      <BackToTop />
    </main>
  );
}
