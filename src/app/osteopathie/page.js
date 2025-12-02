"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import SEO from "@/components/SEO";

export default function OsteopathiePage() {
  const [activeSection, setActiveSection] = useState("a-qui-sadresse");
  const [showBackTop, setShowBackTop] = useState(false);

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

    const onScroll = () => setShowBackTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  return (
    <main className="relative">

      {/* 🔥 STICKY SIDEBAR SOMMAIRE (desktop uniquement) */}
      <aside
        className="hidden lg:block fixed left-6 top-40 w-56 bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 rounded-xl p-4 z-40"
      >
        <h3 className="text-sm font-semibold text-primary mb-2">
          Sommaire
        </h3>
        <ul className="space-y-2 text-sm">
          {[
            ["À qui s’adresse l’ostéopathie ?", "a-qui-sadresse"],
            ["Motifs fréquents", "motifs"],
            ["Déroulement d’une séance", "deroulement"],
            ["Pourquoi me consulter ?", "pourquoi-consulter"],
            ["Risques & contre-indications", "risques"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block transition font-medium ${
                  activeSection === id
                    ? "text-primary underline underline-offset-4"
                    : "text-graywarm hover:text-primary"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* 🔝 Bouton retour en haut */}
      {showBackTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-primary text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-xl hover:bg-secondary transition"
        >
          ↑
        </button>
      )}

      {/* ========= SCHEMA ORG ========= */}
      <Script
        id="schema-osteopathie"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              /* ==================== MEDICAL WEB PAGE ==================== */
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie#page",
                url: "https://www.hilaryfarid-osteopathe.fr/osteopathie",
                name: "Ostéopathie – Hilary Farid Ostéopathe DO",
                description:
                  "Ostéopathie douce et globale pour adultes, nourrissons, femmes enceintes, enfants et sportifs. Soulagement des douleurs, amélioration de la mobilité, prévention et suivi personnalisé.",
                about: {
                  "@type": "MedicalSpecialty",
                  name: "Osteopathy"
                },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Accueil",
                      item: "https://www.hilaryfarid-osteopathe.fr"
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Ostéopathie",
                      item: "https://www.hilaryfarid-osteopathe.fr/osteopathie"
                    }
                  ]
                }
              },

              /* ==================== SERVICE : OSTÉOPATHIE ==================== */
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
                audience: [
                  "Adult",
                  "Infant",
                  "PregnantWomen",
                  "Athlete",
                  "Child"
                ]
              },

              /* ==================== LOCAL BUSINESS (SÈVRES) ==================== */
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/sevres#business",
                name: "Cabinet d’Ostéopathie – Sèvres",
                telephone: "+33 6 72 01 45 39",
                image:
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-1.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "104 Grande Rue",
                  postalCode: "92310",
                  addressLocality: "Sèvres",
                  addressCountry: "FR"
                },
                makesOffer: {
                  "@type": "Service",
                  "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie#service"
                }
              },

              /* ==================== LOCAL BUSINESS (PARIS 15) ==================== */
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/paris15#business",
                name: "Cabinet d’Ostéopathie – Paris 15",
                telephone: "+33 6 72 01 45 39",
                image:
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "28 Rue Letellier",
                  postalCode: "75015",
                  addressLocality: "Paris",
                  addressRegion: "Île-de-France",
                  addressCountry: "FR"
                },
                makesOffer: {
                  "@type": "Service",
                  "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie#service"
                }
              },

              /* ==================== FAQ STRUCTURÉE ==================== */
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Quand consulter un ostéopathe ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "En cas de douleurs musculo-squelettiques, troubles digestifs, migraines, stress, problèmes de posture, gêne durant la grossesse ou inconfort du nourrisson."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "L’ostéopathie est-elle adaptée aux nourrissons ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui. Techniques très douces adaptées aux bébés : torticolis, reflux, plagiocéphalie, troubles de succion."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Est-ce que l’ostéopathie aide pendant la grossesse ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, l’ostéopathie soulage les lombalgies, sciatiques, tensions du bassin, troubles respiratoires et prépare au post-partum."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Combien de séances sont nécessaires ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Entre 1 et 3 séances en général pour un trouble récent. Un bilan annuel est conseillé en prévention."
                    }
                  }
                ]
              }
            ],
            null,
            2
          ),
        }}
      />


      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3">
                Ostéopathie douce & globale
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
                Soulager vos douleurs, retrouver <br /> mobilité & confort.
              </h1>

              <p className="mt-6 text-lg text-graywarm leading-relaxed">
                L’ostéopathie est une approche manuelle douce visant à
                améliorer la mobilité, diminuer la douleur et rééquilibrer le
                corps. Adaptée à tous les âges : adultes, nourrissons, femmes
                enceintes, enfants, adolescents et sportifs.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
                  target="_blank"
                  className="bg-primary text-offwhite px-7 py-3 rounded-lg hover:bg-secondary transition"
                >
                  Prendre rendez-vous
                </a>
                <a
                  href="/tarifs"
                  className="inline-flex items-center text-primary underline underline-offset-4 hover:text-secondary"
                >
                  Voir les tarifs
                </a>
              </div>

              <p className="mt-4 text-sm text-graywarm">
                Cabinets à <strong>Sèvres (92310)</strong> et
                <strong> Paris 15 (75015)</strong>.
              </p>
            </div>

            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/osteopathie/man.webp"
                alt="Douleurs cervicales soulagées par l’ostéopathie"
                fill
                priority
                sizes="100vw"         // ⭐ essentiel pour un bon LCP
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= TABLE OF CONTENTS (MOBILE) ========= */}
      <section className="lg:hidden py-6 px-6 bg-[#F7F9FB] border-y border-light/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg font-semibold text-primary mb-4">Sommaire</h2>

          <ul className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm text-graywarm">
            {[
              ["À qui s’adresse l’ostéopathie ?", "a-qui-sadresse"],
              ["Motifs fréquents", "motifs"],
              ["Déroulement d’une séance", "deroulement"],
              ["Pourquoi me consulter ?", "pourquoi-consulter"],
              ["Risques & contre-indications", "risques"],
              ["FAQ", "faq"],
            ].map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-primary transition">
                  • {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========= À QUI S’ADRESSE ========= */}
      <SlideUp>
        <section id="a-qui-sadresse" className="py-16 px-6 bg-light">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              À qui s’adresse l’ostéopathie ?
            </h2>
            <p className="mt-4 text-center text-graywarm max-w-3xl mx-auto">
              L’ostéopathie s’adapte à chaque âge et au vécu de chacun. Chaque
              technique est choisie selon votre confort, vos antécédents et vos
              besoins.
            </p>

            <div className="mt-10 grid md:grid-cols-4 gap-8">
              {/* Adultes */}
              <FadeIn delay={0.1}>
                <article className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <div className="relative h-32">
                    <Image
                      src="/osteopathie/woman.webp"
                      alt="Ostéopathie adulte"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"    // ⭐⭐ inutile de charger 2000px !
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary">Adultes</h3>
                    <ul className="mt-2 text-sm text-graywarm space-y-1 list-disc list-inside">
                      <li>Maux de dos, nuque, épaules</li>
                      <li>Migraines, digestion, stress</li>
                      <li>Posture & fatigue chronique</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

              {/* Femmes enceintes */}
              <FadeIn delay={0.2}>
                <article className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <div className="relative h-32">
                    <Image
                      src="/osteopathie/FE.webp"
                      alt="Ostéopathie femme enceinte"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"    // ⭐⭐ inutile de charger 2000px !
                      className="object-cover"
                      loading="lazy"
                    />

                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary">
                      Femmes enceintes
                    </h3>
                    <ul className="mt-2 text-sm text-graywarm space-y-1 list-disc list-inside">
                      <li>Lombalgies & sciatique</li>
                      <li>Confort du bassin et des côtes</li>
                      <li>Préparation post-accouchement</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

              {/* Enfants & ados */}
              <FadeIn delay={0.4}>
                <article className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <div className="relative h-32">
                    <Image
                      src="/osteopathie/enfant.webp"
                      alt="Ostéopathie enfant"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"    // ⭐⭐ inutile de charger 2000px !
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary">
                      Enfants & ados
                    </h3>
                    <ul className="mt-2 text-sm text-graywarm space-y-1 list-disc list-inside">
                      <li>Croissance & posture</li>
                      <li>Jeune sportif</li>
                      <li>Maux de tête & fatigue</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

              {/* Nourrissons */}
              <FadeIn delay={0.3}>
                <article className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <div className="relative h-32">
                    <Image
                      src="/osteopathie/nour.webp"
                      alt="Ostéopathie nourrisson"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"    // ⭐⭐ inutile de charger 2000px !
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary">Nourrissons</h3>
                    <ul className="mt-2 text-sm text-graywarm space-y-1 list-disc list-inside">
                      <li>Troubles de la succion</li>
                      <li>Coliques, reflux</li>
                      <li>Plagiocéphalie, torticolis</li>
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
        <section id="motifs" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Motifs les plus fréquents
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-8">

              {/* Musculo-squelettique */}
              <FadeIn delay={0.1}>
                <div className="p-6 rounded-xl border bg-offwhite/60 flex gap-4">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg ring-2 ring-light flex-shrink-0">
                    <Image
                      src="/osteopathie/urgence.webp"
                      alt="Douleurs musculo-squelettiques"
                      fill
                      sizes="112px"        // ⭐ taille réelle du rond → PERF MAX !
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">
                      Dos, nuque & articulations
                    </h3>
                    <p className="text-sm text-graywarm mt-2">
                      Lumbago, torticolis, douleurs d’épaule, hanche, genou,
                      blocages après un faux mouvement.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* ATM */}
              <FadeIn delay={0.2}>
                <div className="p-6 rounded-xl border bg-offwhite/60 flex gap-4">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg ring-2 ring-light flex-shrink-0">
                    <Image
                      src="/osteopathie/machoir.webp"
                      alt="Douleurs de mâchoire ATM"
                      fill
                      sizes="112px"        // ⭐ taille réelle du rond → PERF MAX !
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">
                      Mâchoire & migraines
                    </h3>
                    <p className="text-sm text-graywarm mt-2">
                      Bruxisme, serrement, migraines, gêne à la mastication.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Sport */}
              <FadeIn delay={0.3}>
                <div className="p-6 rounded-xl border bg-offwhite/60 flex gap-4">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg ring-2 ring-light flex-shrink-0">
                    <Image
                      src="/osteopathie/sport.webp"
                      alt="Ostéopathie du sport"
                      fill
                      sizes="112px"        // ⭐ taille réelle du rond → PERF MAX !
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">
                      Sport & performance
                    </h3>
                    <p className="text-sm text-graywarm mt-2">
                      Récupération, prévention, tendinites, entorses, travail
                      post-blessure.
                    </p>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= DÉROULEMENT ========= */}
      <SlideUp>
        <section id="deroulement" className="py-16 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Comment se déroule une séance ?
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-8">

              <FadeIn delay={0.1}>
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary">
                    1. Écoute
                  </p>
                  <h3 className="font-semibold text-primary mt-2">
                    Anamnèse complète
                  </h3>
                  <p className="text-sm text-graywarm mt-3">
                    Discussion détaillée sur vos douleurs, antécédents et
                    objectifs.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary">
                    2. Bilan
                  </p>
                  <h3 className="font-semibold text-primary mt-2">
                    Tests & observations
                  </h3>
                  <p className="text-sm text-graywarm mt-3">
                    Tests de mobilité, palpation douce et analyse posturale.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary">
                    3. Traitement
                  </p>
                  <h3 className="font-semibold text-primary mt-2">
                    Techniques personnalisées
                  </h3>
                  <p className="text-sm text-graywarm mt-3">
                    Techniques douces, adaptées à votre âge et vos besoins.
                  </p>
                </div>
              </FadeIn>

            </div>

            <p className="mt-8 text-center text-graywarm text-sm">
              Une séance dure en moyenne <strong>45 minutes</strong>.
            </p>
          </div>
        </section>
      </SlideUp>

      {/* ========= POURQUOI CONSULTER ========= */}
      <SlideUp>
        <section id="pourquoi-consulter" className="py-16 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Pourquoi consulter Hilary Farid ?
            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-8 text-graywarm leading-relaxed">

              <div className="p-6 rounded-xl bg-white shadow-sm border">
                <h3 className="font-semibold text-primary text-lg">
                  Une approche douce et sécurisante
                </h3>
                <p className="mt-2 text-sm">
                  Formée aux techniques structurelles, viscérales, crâniennes et
                  tissulaires, j’adapte chaque geste à votre confort et votre
                  physiologie.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white shadow-sm border">
                <h3 className="font-semibold text-primary text-lg">
                  Spécialisation nourrissons & grossesse
                </h3>
                <p className="mt-2 text-sm">
                  Accompagnement précis des bébés (torticolis, plagiocéphalie,
                  succion) et des femmes enceintes (bassin, lombaires,
                  respiration).
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white shadow-sm border">
                <h3 className="font-semibold text-primary text-lg">
                  Un suivi clair & personnalisé
                </h3>
                <p className="mt-2 text-sm">
                  Vous repartez avec une explication simple, des conseils
                  ciblés et un plan d’accompagnement si nécessaire.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white shadow-sm border">
                <h3 className="font-semibold text-primary text-lg">
                  Deux cabinets accessibles
                </h3>
                <p className="mt-2 text-sm">
                  Sèvres et Paris 15, proches transports. Possibilité de venir
                  avec poussette ou nourrisson.
                </p>
              </div>

            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= RISQUES ========= */}
      <SlideUp>
        <section id="risques" className="py-16 px-6 bg-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Risques & contre-indications
            </h2>

            <p className="mt-6 text-graywarm text-center max-w-2xl mx-auto">
              L’ostéopathie est une pratique douce et non invasive.
              Certaines situations nécessitent toutefois l’avis d’un médecin au préalable :
            </p>

            <ul className="mt-6 space-y-3 text-graywarm list-disc list-inside text-sm">
              <li>Fièvre importante ou infection aiguë</li>
              <li>Traumatisme récent (accident, chute violente)</li>
              <li>Douleur thoracique inhabituelle</li>
              <li>Perte de force brutale dans un membre</li>
              <li>Troubles neurologiques soudains</li>
            </ul>

            <p className="mt-6 text-graywarm text-sm text-center">
              En cas de doute, vous pouvez m’appeler — je vous orienterai vers
              la bonne prise en charge.
            </p>
          </div>
        </section>
      </SlideUp>

      {/* ========= FAQ ========= */}
      <SlideUp>
        <section id="faq" className="py-16 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              FAQ
            </h2>

            <div className="mt-10 space-y-6">

              <details className="bg-white border rounded-xl p-4 shadow-sm">
                <summary className="font-semibold text-primary cursor-pointer">
                  Quand consulter un ostéopathe ?
                </summary>
                <p className="mt-2 text-graywarm text-sm">
                  Douleurs musculo-squelettiques, troubles digestifs, stress,
                  migraines, suivi de grossesse, inconfort du nourrisson…
                </p>
              </details>

              <details className="bg-white border rounded-xl p-4 shadow-sm">
                <summary className="font-semibold text-primary cursor-pointer">
                  L’ostéopathie est-elle adaptée aux nourrissons ?
                </summary>
                <p className="mt-2 text-graywarm text-sm">
                  Oui, avec des techniques très douces : torticolis, reflux,
                  plagiocéphalie, troubles de succion.
                </p>
              </details>

              <details className="bg-white border rounded-xl p-4 shadow-sm">
                <summary className="font-semibold text-primary cursor-pointer">
                  Est-ce que l’ostéopathie aide pendant la grossesse ?
                </summary>
                <p className="mt-2 text-graywarm text-sm">
                  Oui : lombalgies, sciatique, respiration, confort du bassin.
                </p>
              </details>

              <details className="bg-white border rounded-xl p-4 shadow-sm">
                <summary className="font-semibold text-primary cursor-pointer">
                  Combien de séances sont nécessaires ?
                </summary>
                <p className="mt-2 text-graywarm text-sm">
                  En général 1 à 3 séances suffisent pour un trouble récent.
                </p>
              </details>

            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= CTA FINAL ========= */}
      <FadeIn>
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold text-primary">
            Vous hésitez encore à consulter ?
          </h2>
          <p className="mt-4 text-graywarm max-w-2xl mx-auto">
            Vous avez un doute sur votre motif ou souhaitez un premier avis ?
            Je reste disponible pour répondre à vos questions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
              target="_blank"
              className="bg-primary text-offwhite px-7 py-3 rounded-lg hover:bg-secondary transition"
            >
              Prendre rendez-vous
            </a>
            <a
              href="/contact"
              className="inline-flex items-center text-primary underline underline-offset-4 hover:text-secondary"
            >
              Poser une question
            </a>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
