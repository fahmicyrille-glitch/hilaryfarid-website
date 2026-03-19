"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop"; // Ajout du composant global

export default function OsteopathiePage() {
  const [activeSection, setActiveSection] = useState("a-qui-sadresse");

  // Gestion du scrollspy pour le sommaire
  useEffect(() => {
    const sectionIds = [
      "a-qui-sadresse",
      "motifs",
      "deroulement",
      "pourquoi-consulter",
      "risques",
      "faq",
    ];

    const options = {
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative">
      {/* 🔥 STICKY SIDEBAR SOMMAIRE (desktop uniquement) */}
      <aside className="hidden xl:block fixed left-6 top-40 w-64 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-light/50 rounded-2xl p-5 z-40">
        <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">
          Sommaire
        </h3>
        <ul className="space-y-4 text-base">
          {[
            ["À qui s'adresse l'ostéopathie ?", "a-qui-sadresse"],
            ["Motifs fréquents", "motifs"],
            ["Déroulement d'une séance", "deroulement"],
            ["Pourquoi me consulter ?", "pourquoi-consulter"],
            ["Risques & contre-indications", "risques"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block transition-all duration-200 font-medium border-l-2 pl-3 ${
                  activeSection === id
                    ? "border-primary text-primary"
                    : "border-transparent text-graywarm hover:text-primary hover:border-light"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* ========= SCHEMA ORG ========= */}
      <Script
        id="schema-osteopathie"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie#page",
                url: "https://www.hilaryfarid-osteopathe.fr/osteopathie",
                name: "Ostéopathie – Hilary Farid Ostéopathe DO",
                description:
                  "Ostéopathie douce et globale pour adultes, nourrissons, femmes enceintes, enfants et sportifs. Spécialisée en pédiatrie et troubles de la succion.",
                about: {
                  "@type": "MedicalSpecialty",
                  name: "Osteopathy"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie#service",
                serviceType: "Ostéopathie",
                provider: {
                  "@type": "Person",
                  "@id": "https://www.hilaryfarid-osteopathe.fr#hilary-farid"
                },
                description:
                  "Consultations d'ostéopathie pour adultes, bébés, femmes enceintes, sportifs et seniors. Approche douce et personnalisée.",
                areaServed: ["Sèvres", "Paris 15"],
                audience: ["Adult", "Infant", "PregnantWomen", "Athlete", "Child"]
              }
            ],
            null,
            2
          ),
        }}
      />

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6 xl:pl-80">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm md:text-base text-secondary mb-3 font-semibold">
                Ostéopathie douce & globale
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-[#1E293B]">
                Soulager vos douleurs,<br /> retrouver mobilité & confort.
              </h1>

              <p className="mt-6 text-lg md:text-xl text-graywarm leading-relaxed">
                L'ostéopathie est une approche manuelle douce visant à
                améliorer la mobilité, diminuer la douleur et rééquilibrer le
                corps dans sa globalité. Adaptée à tous les âges : nourrissons, enfants, adolescents, adultes, femmes
                enceintes et sportifs.
              </p>

              {/* ⭐ PREUVE SOCIALE IMMÉDIATE ⭐ */}
              <div className="mt-6 mb-2 flex items-center gap-2">
                <div className="flex text-amber-400 text-xl drop-shadow-sm">
                  ★★★★★
                </div>
                <span className="text-graywarm text-sm font-medium">
                  5/5 sur Google (+100 avis)
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <a
                  href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0596DE] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-[#047cbd] transition-all transform hover:-translate-y-1"
                >
                  Prendre rendez-vous
                </a>
                <Link
                  href="/tarifs"
                  className="inline-flex items-center text-primary text-lg font-medium underline underline-offset-4 hover:text-secondary"
                >
                  Voir les tarifs
                </Link>
              </div>

              <p className="mt-5 text-base text-graywarm">
                Cabinets à <strong>Sèvres (92310)</strong> et
                <strong> Paris 15 (75015)</strong>.
              </p>
            </div>

            <div className="relative w-full h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-light/50">
              <Image
                src="/osteopathie/man.webp"
                alt="Douleurs cervicales soulagées par l'ostéopathie"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= TABLE OF CONTENTS (MOBILE) ========= */}
      <section className="xl:hidden py-6 px-6 bg-white border-b border-light/50 shadow-sm sticky top-0 z-30">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider text-center">Sommaire rapide</p>
          <div className="flex overflow-x-auto pb-2 gap-3 snap-x scrollbar-hide">
            {[
              ["À qui s'adresse ?", "a-qui-sadresse"],
              ["Motifs", "motifs"],
              ["Déroulement", "deroulement"],
              ["Pourquoi me consulter ?", "pourquoi-consulter"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="snap-start shrink-0 px-5 py-2.5 bg-offwhite rounded-full text-sm font-medium text-graywarm hover:text-primary hover:bg-light transition whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========= À QUI S'ADRESSE (Optimisé Expertises) ========= */}
      <SlideUp>
        <section id="a-qui-sadresse" className="py-16 md:py-24 px-6 bg-light xl:pl-80">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              À qui s'adresse l'ostéopathie ?
            </h2>
            <p className="mt-5 text-center text-graywarm text-lg max-w-3xl mx-auto leading-relaxed">
              L'ostéopathie s'adapte à chaque âge et au vécu de chacun. Chaque
              technique est choisie selon votre confort, vos antécédents et vos
              besoins spécifiques.
            </p>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Nourrissons - OPTIMISÉ */}
              <FadeIn delay={0.1}>
                <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-light/60 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/osteopathie/nour.webp"
                      alt="Ostéopathie nourrisson et pédiatrique"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs uppercase tracking-wider px-3 py-1 rounded font-medium">Expertise YGY</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-primary text-xl">Nourrissons</h3>
                    <ul className="mt-4 text-base text-graywarm space-y-2 list-disc list-outside ml-5 leading-relaxed">
                      <li><strong>Troubles de la succion & allaitement</strong></li>
                      <li>Freins restrictifs (pré & post frénectomie)</li>
                      <li>Coliques, reflux, asymétries</li>
                      <li>Plagiocéphalie, torticolis</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

              {/* Femmes enceintes - OPTIMISÉ */}
              <FadeIn delay={0.2}>
                <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-light/60 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/osteopathie/FE.webp"
                      alt="Ostéopathie femme enceinte"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs uppercase tracking-wider px-3 py-1 rounded font-medium">Formation CFPCO</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-primary text-xl">Femmes enceintes</h3>
                    <ul className="mt-4 text-base text-graywarm space-y-2 list-disc list-outside ml-5 leading-relaxed">
                      <li>Lombalgies & douleurs du bassin</li>
                      <li>Gêne respiratoire & mobilité</li>
                      <li>Préparation du corps à l'accouchement</li>
                      <li>Récupération en post-partum</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

              {/* Enfants & ados */}
              <FadeIn delay={0.3}>
                <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-light/60 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/osteopathie/enfant.webp"
                      alt="Ostéopathie enfant"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-primary text-xl">Enfants & Ados</h3>
                    <ul className="mt-4 text-base text-graywarm space-y-2 list-disc list-outside ml-5 leading-relaxed">
                      <li>Suivi de croissance & posture</li>
                      <li>Accompagnement du jeune sportif</li>
                      <li>Maux de tête & fatigue liée à la scolarité</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

              {/* Adultes */}
              <FadeIn delay={0.4}>
                <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-light/60 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/osteopathie/woman.webp"
                      alt="Ostéopathie adulte"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-primary text-xl">Adultes & Seniors</h3>
                    <ul className="mt-4 text-base text-graywarm space-y-2 list-disc list-outside ml-5 leading-relaxed">
                      <li>Maux de dos, nuque, épaules</li>
                      <li>Troubles digestifs & stress</li>
                      <li>Posture & fatigue chronique</li>
                      <li>Bilan préventif annuel</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= MOTIFS ========= */}
      <SlideUp>
        <section id="motifs" className="py-16 md:py-24 px-6 xl:pl-80 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Motifs les plus fréquents
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {/* Musculo-squelettique */}
              <FadeIn delay={0.1}>
                <div className="p-8 rounded-2xl border border-light/60 bg-offwhite/50 flex flex-col items-center text-center hover:bg-offwhite transition-colors h-full">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md ring-4 ring-white mb-6">
                    <Image
                      src="/osteopathie/urgence.webp"
                      alt="Douleurs musculo-squelettiques"
                      fill
                      sizes="128px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-primary text-xl">Dos, nuque & articulations</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed">
                    Torticolis, douleurs d'épaule, de coude ou de poignet, lombalgies, douleurs de hanche, genou et cheville.
                  </p>
                </div>
              </FadeIn>

              {/* ATM */}
              <FadeIn delay={0.2}>
                <div className="p-8 rounded-2xl border border-light/60 bg-offwhite/50 flex flex-col items-center text-center hover:bg-offwhite transition-colors h-full">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md ring-4 ring-white mb-6">
                    <Image
                      src="/osteopathie/machoir.webp"
                      alt="Douleurs de mâchoire ATM"
                      fill
                      sizes="128px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-primary text-xl">Mâchoire & migraines</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed">
                    Bruxisme, serrement de dents, migraines ophtalmiques, maux de tête chroniques, gêne à la mastication.
                  </p>
                </div>
              </FadeIn>

              {/* Sport */}
              <FadeIn delay={0.3}>
                <div className="p-8 rounded-2xl border border-light/60 bg-offwhite/50 flex flex-col items-center text-center hover:bg-offwhite transition-colors h-full">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md ring-4 ring-white mb-6">
                    <Image
                      src="/osteopathie/sport.webp"
                      alt="Ostéopathie du sport"
                      fill
                      sizes="128px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-primary text-xl">Sport & performance</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed">
                    Récupération après l'effort, prévention des blessures, suivi post-traumatique (tendinites, entorses).
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= DÉROULEMENT ========= */}
      <SlideUp>
        <section id="deroulement" className="py-16 md:py-24 px-6 bg-light xl:pl-80">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Comment se déroule une séance ?
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl border border-light/50 p-8 shadow-sm hover:shadow-md transition-shadow h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[120px] font-black text-light/30 leading-none -mt-8 -mr-4 select-none">1</div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary relative z-10">Écoute</p>
                  <h3 className="font-bold text-primary text-xl mt-3 relative z-10">Anamnèse complète</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed relative z-10">
                    Discussion détaillée sur vos douleurs, vos antécédents médicaux, votre mode de vie et vos objectifs pour cette séance.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl border border-light/50 p-8 shadow-sm hover:shadow-md transition-shadow h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[120px] font-black text-light/30 leading-none -mt-8 -mr-4 select-none">2</div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary relative z-10">Bilan</p>
                  <h3 className="font-bold text-primary text-xl mt-3 relative z-10">Observations & tests</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed relative z-10">
                    Tests de mobilité actifs et passifs, palpation douce et analyse posturale pour comprendre l'origine de vos blocages.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white rounded-2xl border border-light/50 p-8 shadow-sm hover:shadow-md transition-shadow h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[120px] font-black text-light/30 leading-none -mt-8 -mr-4 select-none">3</div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary relative z-10">Traitement</p>
                  <h3 className="font-bold text-primary text-xl mt-3 relative z-10">Soins personnalisés</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed relative z-10">
                    Techniques douces (tissulaires, crâniennes, viscérales ou articulaires), spécifiquement adaptées à votre âge et votre confort.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="mt-10 bg-white/60 backdrop-blur-sm border border-light/80 rounded-xl p-5 max-w-md mx-auto text-center shadow-sm">
              <p className="text-graywarm text-base">
                ⏱ Une séance d'ostéopathie dure en moyenne <strong className="text-primary font-bold">55 minutes</strong>.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= POURQUOI CONSULTER ========= */}
      <SlideUp>
        <section id="pourquoi-consulter" className="py-16 md:py-24 px-6 bg-offwhite xl:pl-80">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Pourquoi consulter Hilary Farid ?
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-8 text-graywarm leading-relaxed">

              {/* Box 1 */}
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-light/40 hover:border-secondary/30 transition-colors">
                <div className="w-14 h-14 bg-light/50 rounded-full flex items-center justify-center mb-5 text-2xl">🤝</div>
                <h3 className="font-bold text-[#1E293B] text-xl">Une approche douce et sécurisante</h3>
                <p className="mt-4 text-base">
                  Diplômée de l'Institut Dauphine d'Ostéopathie (IDO Paris), je suis formée aux techniques structurelles, viscérales, crâniennes et tissulaires. J'adapte chaque geste à votre confort.
                </p>
              </div>

              {/* Box 2 : EXPERTISE PHARE */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-light/30 shadow-md border border-secondary/20 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-7xl opacity-10">👶</div>
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-5 text-2xl">🎓</div>
                <h3 className="font-bold text-[#1E293B] text-xl">Ultra-spécialisée Périnatalité</h3>
                <p className="mt-4 text-base text-[#1E293B]/90 leading-relaxed">
                  Formations expertes en continu : <strong>Centre YGY</strong> (Catherine Rybus) pour les nourrissons, les troubles de la succion et les freins restrictifs. <strong>CFPCO</strong> pour l'accompagnement spécifique de la femme enceinte.
                </p>
              </div>

              {/* Box 3 */}
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-light/40 hover:border-secondary/30 transition-colors">
                <div className="w-14 h-14 bg-light/50 rounded-full flex items-center justify-center mb-5 text-2xl">📋</div>
                <h3 className="font-bold text-[#1E293B] text-xl">Un suivi clair & personnalisé</h3>
                <p className="mt-4 text-base">
                  Le but n'est pas seulement de faire "craquer". Vous repartez avec une explication claire de votre schéma corporel, des conseils ciblés et un vrai plan d'accompagnement.
                </p>
              </div>

              {/* Box 4 */}
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-light/40 hover:border-secondary/30 transition-colors">
                <div className="w-14 h-14 bg-light/50 rounded-full flex items-center justify-center mb-5 text-2xl">📍</div>
                <h3 className="font-bold text-[#1E293B] text-xl">Deux cabinets accessibles</h3>
                <p className="mt-4 text-base">
                  Des cabinets récents et chaleureux à Sèvres et Paris 15, très bien desservis par les transports. L'accès avec une poussette y est grandement facilité.
                </p>
              </div>

            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= RISQUES ========= */}
      <SlideUp>
        <section id="risques" className="py-16 md:py-20 px-6 bg-light xl:pl-80">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-light/60">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">⚠️</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                Risques & contre-indications
              </h2>
            </div>

            <p className="text-graywarm text-lg leading-relaxed">
              L'ostéopathie est une pratique douce, de première intention et non invasive. Cependant, certaines situations médicales nécessitent l'avis d'un médecin avant toute manipulation :
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-5 text-graywarm text-base">
              <li className="flex items-start gap-3 bg-offwhite/50 p-4 rounded-xl border border-light/40">
                <span className="text-red-400 mt-1">•</span> Fièvre importante ou infection aiguë
              </li>
              <li className="flex items-start gap-3 bg-offwhite/50 p-4 rounded-xl border border-light/40">
                <span className="text-red-400 mt-1">•</span> Traumatisme récent (accident, chute violente)
              </li>
              <li className="flex items-start gap-3 bg-offwhite/50 p-4 rounded-xl border border-light/40">
                <span className="text-red-400 mt-1">•</span> Douleur thoracique inhabituelle
              </li>
              <li className="flex items-start gap-3 bg-offwhite/50 p-4 rounded-xl border border-light/40">
                <span className="text-red-400 mt-1">•</span> Perte de force brutale dans un membre
              </li>
              <li className="flex items-start gap-3 bg-offwhite/50 p-4 rounded-xl border border-light/40 sm:col-span-2">
                <span className="text-red-400 mt-1">•</span> Troubles neurologiques soudains
              </li>
            </ul>

            <div className="mt-10 p-5 bg-primary/5 rounded-2xl border border-primary/10 text-center">
              <p className="text-primary font-medium text-base">
                En cas de doute, n'hésitez pas à m'appeler directement. Je saurai vous orienter vers la meilleure prise en charge.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FAQ ========= */}
      <SlideUp>
        <section id="faq" className="py-16 md:py-24 px-6 bg-offwhite xl:pl-80">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Questions Fréquentes (FAQ)
            </h2>

            <div className="mt-12 space-y-5">
              <details className="group bg-white border border-light/80 rounded-2xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-[#1E293B] text-lg cursor-pointer p-6 md:p-8">
                  <span>Quand consulter un ostéopathe ?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-graywarm text-base px-6 md:px-8 pb-8 pt-0 leading-relaxed border-t border-light/30 mt-2 pt-6">
                  Il est recommandé de consulter en cas de douleurs musculo-squelettiques (dos, cervicales, articulations), de troubles digestifs, de stress, de migraines, pour le suivi de grossesse ou l'inconfort du nourrisson. Une visite annuelle préventive est également excellente pour éviter l'apparition des douleurs.
                </p>
              </details>

              <details className="group bg-white border border-light/80 rounded-2xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-[#1E293B] text-lg cursor-pointer p-6 md:p-8">
                  <span>L'ostéopathie est-elle adaptée aux nourrissons ?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-graywarm text-base px-6 md:px-8 pb-8 pt-0 leading-relaxed border-t border-light/30 mt-2 pt-6">
                  Absolument. Je suis spécifiquement formée (Centre YGY) pour utiliser des techniques extrêmement douces et non douloureuses. C'est particulièrement efficace pour les torticolis, les reflux, la plagiocéphalie (tête plate), et les problèmes de succion lors de l'allaitement (freins restrictifs).
                </p>
              </details>

              <details className="group bg-white border border-light/80 rounded-2xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-[#1E293B] text-lg cursor-pointer p-6 md:p-8">
                  <span>Est-ce que l'ostéopathie aide pendant la grossesse ?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-graywarm text-base px-6 md:px-8 pb-8 pt-0 leading-relaxed border-t border-light/30 mt-2 pt-6">
                  Oui, c'est l'un des meilleurs moments pour consulter. L'ostéopathie aide le corps à s'adapter aux changements posturaux, soulage les lombalgies, sciatiques, les tensions du bassin et améliore la fonction respiratoire. Cela aide aussi à préparer mécaniquement l'accouchement.
                </p>
              </details>

              <details className="group bg-white border border-light/80 rounded-2xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-[#1E293B] text-lg cursor-pointer p-6 md:p-8">
                  <span>Combien de séances sont nécessaires ?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-graywarm text-base px-6 md:px-8 pb-8 pt-0 leading-relaxed border-t border-light/30 mt-2 pt-6">
                  Cela dépend de l'ancienneté du problème. En général, 1 à 2 séances suffisent pour un trouble récent (aigu). Pour des douleurs chroniques, un suivi un peu plus régulier peut être proposé. Dans tous les cas, nous en discutons ensemble dès la première séance.
                </p>
              </details>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= CTA FINAL ========= */}
      <FadeIn>
        <section className="py-20 px-6 text-center xl:pl-80 bg-white">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-3xl p-10 md:p-14 border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
              Vous hésitez encore à consulter ?
            </h2>
            <p className="mt-5 text-graywarm text-lg leading-relaxed">
              Vous avez un doute sur votre motif ou souhaitez un premier avis avant de sauter le pas ? Je reste disponible pour répondre à vos questions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#0596DE] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#047cbd] transition-all transform hover:-translate-y-1 text-center"
              >
                Prendre rendez-vous
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full text-lg font-bold text-primary bg-white border border-light/80 shadow-sm hover:bg-offwhite transition-colors"
              >
                Me poser une question
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ================= BOUTONS FLOTTANTS (DOCTOLIB) ================= */}

      {/* ------ MOBILE DOCTOLIB ------ */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 xl:hidden bg-white/95 border border-primary/20 shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-full px-6 py-3 flex items-center gap-2">
        <a
          href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#0596DE] font-bold text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span>Prendre RDV</span>
        </a>
      </div>

      {/* ------ DESKTOP DOCTOLIB ------ */}
      <div className="hidden xl:flex fixed top-1/2 right-6 -translate-y-1/2 z-50">
        <a
          href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/95 border border-[#0596DE]/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-6 py-4 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1 hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#0596DE] opacity-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span className="text-[#0596DE] text-lg font-bold tracking-wide">
            Prendre RDV
          </span>
        </a>
      </div>

      {/* === Bouton retour en haut via composant === */}
      <BackToTop />

    </main>
  );
}
