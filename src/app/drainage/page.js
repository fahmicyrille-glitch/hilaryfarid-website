"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import MobileSummary from "@/components/MobileSummary";
import DrainageCarousel from "@/components/DrainageCarousel";
import BackToTop from "@/components/BackToTop";

import {
  IconLegs,
  IconCellulite,
  IconDetox,
  IconRelax,
  IconImmunity,
  IconDigestion,
  IconRecovery,
  IconPregnancy,
  IconFertility,
} from "@/components/icons/BenefitIcons";

const DOCTOLIB_URL =
  "https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile";

const SECTIONS = [
  { id: "presentation", label: "La lymphe, c’est quoi ?" },
  { id: "bienfaits", label: "Bienfaits" },
  { id: "deroulement", label: "Déroulement" },
  { id: "pour-qui", label: "Pour qui ?" },
  { id: "pourquoi-moi", label: "Pourquoi me consulter ?" },
  { id: "avant-apres", label: "Avant / Après" },
  { id: "contraindications", label: "Contre-indications" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Prendre RDV" },
];

export default function DrainageLymphatiquePage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // ajuste si header fixe
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const ids = SECTIONS
      .map((s) => s.id)
      .filter((id) => id !== "cta");

    const options = {
      root: null,
      rootMargin: "-25% 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id));
    }, options);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative">
      {/* ========= SCHEMA ORG (Optimisé SEO Local avec avis) ========= */}
      <Script
        id="schema-drainage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/drainage-lymphatique#page",
                url: "https://www.hilaryfarid-osteopathe.fr/drainage-lymphatique",
                name: "Drainage lymphatique Renata França – Hilary Farid",
                description:
                  "Drainage lymphatique méthode Renata França : bien-être, sensation de légèreté, amélioration possible de la rétention d’eau. Séances à Paris 15 et Sèvres.",
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
                      name: "Drainage lymphatique",
                      item: "https://www.hilaryfarid-osteopathe.fr/drainage-lymphatique",
                    },
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://www.hilaryfarid-osteopathe.fr/drainage-lymphatique#service",
                serviceType: "Drainage lymphatique (méthode Renata França)",
                provider: {
                  "@type": "Person",
                  "@id": "https://www.hilaryfarid-osteopathe.fr#hilary-farid",
                },
                areaServed: ["Paris 15", "Sèvres"],
                description:
                  "Séance de drainage lymphatique méthode Renata França réalisée par Hilary Farid, ostéopathe DO. Objectifs : sensation de légèreté, confort circulatoire, détente.",
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/sevres#business",
                name: "Cabinet – Sèvres",
                telephone: "+33 6 72 01 45 39",
                logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
                image: "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-1.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "104 Grande Rue",
                  postalCode: "92310",
                  addressLocality: "Sèvres",
                  addressCountry: "FR",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "42"
                },
                makesOffer: {
                  "@type": "Service",
                  "@id": "https://www.hilaryfarid-osteopathe.fr/drainage-lymphatique#service",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/paris15#business",
                name: "Cabinet – Paris 15",
                telephone: "+33 6 72 01 45 39",
                logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
                image:
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "28 Rue Letellier",
                  postalCode: "75015",
                  addressLocality: "Paris",
                  addressRegion: "Île-de-France",
                  addressCountry: "FR",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "62"
                },
                makesOffer: {
                  "@type": "Service",
                  "@id": "https://www.hilaryfarid-osteopathe.fr/drainage-lymphatique#service",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "En combien de séances peut-on ressentir une différence ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Beaucoup de patients décrivent une sensation de légèreté dès la première séance. Le nombre de séances dépend de l’objectif et du ressenti.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Le drainage lymphatique Renata França est-il douloureux ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "La technique est dynamique et tonique tout en restant confortable. L’intensité est toujours adaptée à votre sensibilité.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Peut-on faire un drainage pendant la grossesse ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Selon le terme et votre situation, cela peut être envisagé pour améliorer le confort circulatoire. Un avis médical peut être recommandé en cas de doute.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quelles sont les contre-indications principales ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Fièvre/infection aiguë, phlébite/risque thrombotique, pathologies non stabilisées, chirurgie très récente selon avis médical. En cas de doute, contactez-moi avant de réserver.",
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

      {/* 🔥 STICKY SIDEBAR SOMMAIRE (desktop) */}
      <aside className="hidden lg:block fixed left-6 top-40 w-56 bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 rounded-xl p-4 z-40">
        <h3 className="text-sm font-semibold text-primary mb-2">Sommaire</h3>
        <ul className="space-y-2 text-sm">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => smoothScroll(e, s.id)}
                className={`block transition font-medium ${
                  activeSection === s.id
                    ? "text-primary underline underline-offset-4"
                    : "text-graywarm hover:text-primary"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            className="block text-center bg-[#0596DE] text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-[#047cbd] transition"
          >
            Prendre RDV sur Doctolib
          </a>
          <p className="mt-2 text-xs text-graywarm text-center">
            Paris 15 & Sèvres
          </p>
        </div>
      </aside>

      {/* 📌 Sticky CTA (mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <div className="leading-tight">
            <p className="text-sm font-semibold text-primary">Drainage Renata França</p>
            <p className="text-xs text-graywarm">Paris 15 & Sèvres</p>
          </div>
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            className="bg-[#0596DE] text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-[#047cbd] transition text-sm font-semibold"
          >
            Prendre RDV
          </a>
        </div>
      </div>

      {/* ========= HERO (Optimisé CRO) ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3">
                Drainage lymphatique • Méthode Renata França
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
                Légèreté, confort <br /> & silhouette visiblement affinée.
              </h1>

              {/* TEXTE MODIFIÉ POUR LA CONVERSION */}
              <p className="mt-6 text-lg text-graywarm leading-relaxed">
                Alliez l’efficacité spectaculaire de la méthode <strong>Renata França</strong> à l'expertise anatomique d’une <strong>ostéopathe D.O</strong>. Un drainage profond, précis et sécuritaire pour relancer votre métabolisme, soulager vos jambes lourdes et affiner votre silhouette.
              </p>

              {/* ⭐ AJOUT DU TRUST BADGE (AVIS GOOGLE) ⭐ */}
              <div className="mt-6 flex items-center gap-2">
                <div className="flex text-amber-400 text-lg drop-shadow-sm">
                  ★★★★★
                </div>
                <span className="text-graywarm text-sm font-medium">
                  5/5 sur Google (+100 avis Sèvres & Paris 15)
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={DOCTOLIB_URL}
                  target="_blank"
                  className="bg-[#0596DE] text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-[#047cbd] transition"
                >
                  Prendre RDV sur Doctolib
                </a>
                <a
                  href="#bienfaits"
                  onClick={(e) => smoothScroll(e, "bienfaits")}
                  className="inline-flex items-center text-primary font-medium underline underline-offset-4 hover:text-secondary"
                >
                  Découvrir les bienfaits
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["Sensation de légèreté", "dès la 1ʳᵉ séance"],
                  ["Méthode tonique", "adaptée à vous"],
                  ["Deux cabinets", "Paris 15 & Sèvres"],
                ].map(([t, s]) => (
                  <div key={t} className="rounded-xl border bg-white p-3 shadow-sm">
                    <p className="text-sm font-semibold text-primary">{t}</p>
                    <p className="text-xs text-graywarm mt-1">{s}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/drainage/drainage_ventre.webp"
                alt="Drainage lymphatique méthode Renata França par Hilary Farid"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              {/* Petit voile premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= SOMMAIRE MOBILE ========= */}
      <section className="lg:hidden py-6 px-6 bg-[#F7F9FB] border-y border-light/50">
        <div className="max-w-4xl mx-auto">
          <MobileSummary
            sections={SECTIONS}
            activeId={activeSection}
            smoothScroll={smoothScroll}
          />
        </div>
      </section>

      {/* ========= PRESENTATION ========= */}
      <SlideUp>
        <section id="presentation" className="py-20 px-6 bg-light">
          <div className="max-w-5xl mx-auto">

            {/* Titre */}
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-semibold text-primary">
                La lymphe, c’est quoi ?
              </h2>

              <p className="mt-4 text-base text-graywarm leading-relaxed">
                Le système lymphatique est un réseau essentiel à l’équilibre du corps.
                Il participe à l’<strong>immunité</strong>, à l’
                <strong>évacuation des liquides</strong>, à l’
                <strong>élimination de certains déchets</strong> et au
                <strong> confort digestif</strong>.
              </p>
            </div>

            {/* Contenu */}
            <div className="grid md:grid-cols-2 gap-10">

              <div className="rounded-2xl border bg-white p-7 shadow-sm">
                <p className="text-ms uppercase tracking-[0.25em] text-secondary">
                  Quand la lymphe ralentit
                </p>

                <ul className="mt-4 text-base text-graywarm space-y-3 list-disc list-inside">
                  <li>Sensation de jambes lourdes et rétention d’eau</li>
                  <li>Gonflements, inconfort, fatigue</li>
                  <li>Ballonnements et digestion plus lente</li>
                  <li>Peau d’orange plus visible (cellulite)</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-primary/5 p-7">
                <h3 className="text-xl font-semibold text-primary">
                  Une méthode manuelle dynamique
                </h3>

                <p className="mt-3 text-base text-graywarm leading-relaxed">
                  Le drainage lymphatique <strong>Renata França</strong> est une
                  technique précise et rythmée, visant à stimuler la circulation
                  lymphatique et à favoriser une <strong>sensation de légèreté</strong>
                  et une meilleure aisance corporelle.
                </p>

                <p className="mt-4 text-base text-graywarm">
                  Le travail se fait sur l’ensemble du corps :
                  <strong> jambes, ventre, bras et dos</strong>.
                </p>
              </div>

            </div>
          </div>
        </section>

      </SlideUp>

      {/* ========= BIENFAITS ========= */}
      <SlideUp>
        <section id="bienfaits" className="py-16 px-6 bg-offwhite">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-primary">
                Bienfaits les plus recherchés
              </h2>
              <p className="mt-4 text-graywarm">
                Les effets varient selon chacun. L’objectif est de favoriser le confort,
                la légèreté et le bien-être global.
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Jambes lourdes",
                  text: "Aide à diminuer la sensation de lourdeur et la rétention d’eau.",
                  icon: IconLegs,
                },
                {
                  title: "Cellulite",
                  text: "Peut contribuer à améliorer l’aspect peau d’orange et raffermir.",
                  icon: IconCellulite,
                },
                {
                  title: "Détoxification",
                  text: "Aide l’organisme à éliminer certains déchets et toxines stockés.",
                  icon: IconDetox,
                },
                {
                  title: "Stress & fatigue",
                  text: "Effet relaxant : détente, récupération, sensation de lâcher-prise.",
                  icon: IconRelax,
                },
                {
                  title: "Immunité",
                  text: "Le système lymphatique étant lié à l’immunité, l’objectif est de soutenir ses fonctions.",
                  icon: IconImmunity,
                },
                {
                  title: "Digestion",
                  text: "Peut aider à diminuer les ballonnements et améliorer le confort digestif.",
                  icon: IconDigestion,
                },
                {
                  title: "Cicatrisation / post-op",
                  text: "Dans certains contextes, peut accompagner la récupération (selon avis médical).",
                  icon: IconRecovery,
                },
                {
                  title: "Grossesse",
                  text: "Selon le terme, peut aider à soulager inconfort circulatoire et gonflements.",
                  icon: IconPregnancy,
                },
                {
                  title: "Fertilité / PMA",
                  text: "Peut contribuer au bien-être global et à la gestion du stress (accompagnement).",
                  icon: IconFertility,
                },
              ].map((b) => (
                <FadeIn key={b.title}>
                  <article className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <b.icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-semibold text-primary">
                        {b.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-base text-graywarm leading-relaxed">
                      {b.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= CARROUSEL DRAINAGE ========= */}
      <SlideUp>
        <section className="py-16 px-6 bg-light">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary">
              Le drainage en images
            </h2>

            <p className="mt-4 text-graywarm max-w-2xl mx-auto">
              Gestes précis, techniques manuelles dynamiques et approche respectueuse
              du corps, adaptées à chaque zone.
            </p>

            <div className="mt-10">
              <DrainageCarousel />
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= DEROULEMENT ========= */}
      <SlideUp>
        <section id="deroulement" className="py-16 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Comment se déroule une séance ?
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1. Échange",
                  title: "Bilan & objectifs",
                  text: "On définit ensemble vos attentes : confort, légèreté, rétention d’eau, récupération…",
                },
                {
                  step: "2. Drainage",
                  title: "Technique Renata França",
                  text: "Manœuvres dynamiques et précises, adaptées à votre sensibilité.",
                },
                {
                  step: "3. Conseils",
                  title: "Après la séance",
                  text: "Conseils simples pour optimiser votre confort et prolonger les effets de confort et de fluidité.",
                },
              ].map((c) => (
                <FadeIn key={c.step}>
                  <div className="bg-white rounded-2xl border p-6 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.25em] text-secondary">
                      {c.step}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-primary">
                      {c.title}
                    </h3>

                    <p className="mt-3 text-base text-graywarm leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-graywarm leading-relaxed">
                Beaucoup de patients décrivent une <strong>sensation de légèreté</strong> dès
                la première séance. La fréquence idéale dépend de votre objectif et de votre ressenti.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= POUR QUI ========= */}
      <SlideUp>
        <section id="pour-qui" className="py-16 px-6 bg-light">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                Pour qui est fait le drainage ?
              </h2>
              <p className="mt-4 text-graywarm leading-relaxed">
                Le drainage lymphatique est souvent choisi pour le confort, l’esthétique et le bien-être.
                Je l’adapte à votre situation et à votre sensibilité.
              </p>

              {/* MODIFICATION : On cible des profils et moments de vie pour éviter la redondance */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Grossesse & Post-partum",
                  "Récupération Sportive",
                  "Sédentarité & Télétravail",
                  "Troubles hormonaux (PMA, Ménopause)",
                  "Jambes lourdes & Rétention",
                  "Préparation & Récupération Post-Opératoire",
                ].map((t) => (
                  <div key={t} className="rounded-2xl border bg-white p-4 shadow-sm flex items-center">
                    <p className="text-sm font-medium text-primary">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/drainage/drainage_jambe.webp"
                  alt="Séance de drainage lymphatique"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-primary">Objectif : confort & régularité</h3>
                <p className="mt-2 text-sm text-graywarm leading-relaxed">
                  Certaines personnes viennent ponctuellement (période de chaleur, fatigue,
                  rétention), d’autres préfèrent un suivi régulier selon leurs besoins.
                </p>
                <div className="mt-5">
                  <a
                    href={DOCTOLIB_URL}
                    target="_blank"
                    className="inline-flex items-center justify-center bg-[#0596DE] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#047cbd] transition w-full"
                  >
                    Prendre RDV sur Doctolib
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= POURQUOI MOI ========= */}
      <SlideUp>
        <section id="pourquoi-moi" className="py-16 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Pourquoi me consulter pour un drainage Renata França ?
            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-6 text-graywarm leading-relaxed">
              {[
                {
                  /* TITRE ET TEXTE MODIFIÉS POUR LA CONVERSION */
                  title: "La sécurité d'une Ostéopathe D.O.",
                  text: "Contrairement à un institut classique, ma connaissance approfondie de l’anatomie et du système vasculaire me permet d'adapter parfaitement la pression et les manœuvres à votre physiologie.",
                },
                {
                  title: "Méthode Renata França",
                  text: "Technique structurée, dynamique et reconnue, avec un objectif de légèreté et de bien-être.",
                },
                {
                  title: "Explications claires",
                  text: "Vous repartez avec des conseils simples (hydratation, rythme, sensations attendues) pour optimiser le confort.",
                },
                {
                  title: "Deux cabinets accessibles",
                  text: "Séances à Paris 15 et Sèvres, proches transports. Prise de RDV rapide sur Doctolib.",
                },
              ].map((c) => (
                <FadeIn key={c.title}>
                  <div className="p-6 rounded-2xl bg-white shadow-sm border h-full">
                    <h3 className="font-semibold text-primary text-lg">{c.title}</h3>
                    <p className="mt-2 text-sm">{c.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= AVANT / APRÈS ========= */}
      <SlideUp>
        <section id="avant-apres" className="py-16 px-6 bg-light">
          <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-3xl font-semibold text-primary">
              Résultats Avant / Après
            </h2>

            <p className="mt-4 text-graywarm max-w-2xl mx-auto">
              Illustrations visuelles à titre indicatif. Les résultats peuvent varier
              selon les personnes, le contexte et la régularité des séances.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              {/* JAMBES */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border">
                <Image
                  src="/drainage/avant_apres_jambe.webp"
                  alt="Drainage lymphatique jambes avant après"
                  width={520}
                  height={720}
                  className="rounded-xl mx-auto"
                />
                <p className="mt-3 text-xs text-graywarm">
                  Exemple visuel – sensation de légèreté et diminution des gonflements.
                </p>
              </div>

              {/* VENTRE */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border">
                <Image
                  src="/drainage/avant_apres_ventre.webp"
                  alt="Drainage lymphatique ventre avant après"
                  width={520}
                  height={720}
                  className="rounded-xl mx-auto"
                />
                <p className="mt-3 text-xs text-graywarm">
                  Exemple visuel – amélioration possible du confort abdominal.
                </p>
              </div>
            </div>

            <div className="mt-8 max-w-3xl mx-auto rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-graywarm leading-relaxed">
                ⚠️ Ces images ne constituent pas une promesse de résultat.
                Le drainage lymphatique est une pratique de bien-être.
                Les effets ressentis dépendent de chaque personne et de sa situation.
              </p>
            </div>

          </div>
        </section>
      </SlideUp>

      {/* ========= CONTRE-INDICATIONS ========= */}
      <SlideUp>
        <section id="contraindications" className="py-16 px-6 bg-offwhite">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Contre-indications & précautions
            </h2>

            <p className="mt-6 text-graywarm text-center max-w-2xl mx-auto">
              Le drainage est généralement bien toléré, mais certaines situations nécessitent
              précaution ou avis médical préalable.
              En cas de doute, contactez-moi avant de réserver.
            </p>

            <ul className="mt-8 space-y-3 text-graywarm list-disc list-inside text-sm">
              <li>Fièvre importante, infection aiguë</li>
              <li>Phlébite / suspicion de thrombose / risque thrombotique</li>
              <li>Douleur inhabituelle, inflammation importante</li>
              <li>Pathologie non stabilisée : avis médical recommandé</li>
              <li>Post-op très récent : selon indication et avis du chirurgien</li>
            </ul>

            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-graywarm">
                📞 Si vous hésitez :{" "}
                <a className="text-primary font-medium underline underline-offset-4" href="tel:+33672014539">
                  06 72 01 45 39
                </a>
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FAQ ========= */}
      <SlideUp>
        <section id="faq" className="py-16 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              FAQ
            </h2>

            <div className="mt-10 space-y-6">
              {[
                {
                  q: "En combien de séances peut-on ressentir une différence ?",
                  a: "Beaucoup de patients décrivent une sensation de légèreté dès la première séance. La fréquence dépend de l’objectif et du ressenti.",
                },
                {
                  q: "Est-ce douloureux ?",
                  a: "La technique est dynamique et tonique tout en restant confortable. J’adapte toujours l’intensité à votre sensibilité.",
                },
                {
                  q: "Peut-on faire un drainage pendant la grossesse ?",
                  a: "Selon le terme et votre situation, cela peut être envisagé pour améliorer le confort circulatoire. En cas de doute, un avis médical peut être recommandé.",
                },
                {
                  q: "Quelle différence avec un massage classique ?",
                  a: "Le drainage Renata França suit une logique de circulation (manœuvres spécifiques) et vise surtout une sensation de légèreté et de confort, au-delà de la simple détente.",
                },
                {
                  q: "Que faire après la séance ?",
                  a: "Hydratation, marche douce si possible, et écouter vos sensations. Je vous donne des conseils adaptés à votre cas.",
                },
              ].map((item) => (
                <details key={item.q} className="bg-white border rounded-2xl p-5 shadow-sm">
                  <summary className="font-semibold text-primary cursor-pointer">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-base text-graywarm leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= CTA FINAL ========= */}
      <FadeIn>
        <section id="cta" className="py-16 px-6 text-center bg-offwhite">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary">
              Prêt(e) à retrouver une sensation de légèreté ?
            </h2>
            <p className="mt-4 text-graywarm">
              Réservez votre séance de drainage lymphatique Renata França en quelques clics. <br/>
              Cabinets à <strong>Paris 15</strong> et <strong>Sèvres</strong>.
            </p>
            <p className="mt-2 text-sm text-graywarm">
              Séance d’environ <strong>90 minutes</strong> – réservation en ligne sur Doctolib.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                className="bg-[#0596DE] text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-[#047cbd] transition"
              >
                Prendre RDV sur Doctolib
              </a>
              <a
                href="/tarifs"
                className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:text-secondary"
              >
                Voir les tarifs
              </a>
            </div>

            <p className="mt-6 text-xs text-graywarm">
              *Le drainage lymphatique est une pratique de bien-être. Les effets peuvent varier selon les personnes.
              Ce contenu ne remplace pas un avis médical.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* 🔝 Composant global pour revenir en haut */}
      <BackToTop />

    </main>
  );
}
