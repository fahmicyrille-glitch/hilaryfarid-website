"use client"

// src/app/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FadeInNoShift } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";

/* 🚀 ANIMATION CSS SSR-SAFE (ZÉRO CLS) */
const fadeCss = `
@keyframes fadeInHero {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.fade-hero {
  opacity: 0;
  animation: fadeInHero .8s ease-out .1s forwards;
}
`;

export default function Home() {
  return (
    <main>

      {/* Inject CSS SSR-safe animation */}
      <style>{fadeCss}</style>

      {/* ======== MedicalWebPage + Physician + LocalBusiness ======== */}
      <Script
        id="ld-home-medicalwebpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/#webpage",
                url: "https://www.hilaryfarid-osteopathe.fr/",
                name: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
                description:
                  "Ostéopathie adulte, nourrisson, femme enceinte et sportif. Drainage lymphatique Renata França. Deux cabinets : Sèvres & Paris 15.",
                mainEntity: {
                  "@id": "https://www.hilaryfarid-osteopathe.fr/#physician",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Physician",
                "@id": "https://www.hilaryfarid-osteopathe.fr/#physician",
                name: "Hilary Farid",
                image: "https://www.hilaryfarid-osteopathe.fr/Hilary.webp",
                jobTitle: "Ostéopathe D.O.",
                telephone: "+33 6 72 01 45 39",
                logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
                email: "contact@hilaryfarid-osteopathe.fr",
                url: "https://www.hilaryfarid-osteopathe.fr/",
                medicalSpecialty: [
                  "Osteopathy",
                  "PregnancyCare",
                  "Pediatric",
                  "SportsMedicine",
                ],
                worksFor: [
                  { "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres" },
                  { "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15" },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  ratingCount: "42",
                  bestRating: "5",
                  worstRating: "5",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres",
                name: "Cabinet d'ostéopathie – Sèvres",
                image: [
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-1.webp",
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-2.webp",
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-3.webp",
                ],
                telephone: "+33 6 72 01 45 39",
                logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
                priceRange: "€€",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "104 Grande Rue",
                  addressLocality: "Sèvres",
                  postalCode: "92310",
                  addressCountry: "FR",
                },
                identifier: {
                  "@type": "PropertyValue",
                  name: "SIRET",
                  value: "90179515300013",
                },
                legalName: "SIREN 901795153",
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Friday",
                    opens: "09:00",
                    closes: "20:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Saturday",
                    opens: "10:00",
                    closes: "13:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Monday",
                    opens: "12:00",
                    closes: "20:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Wednesday",
                    opens: "15:00",
                    closes: "20:00",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15",
                name: "Cabinet d'ostéopathie – Paris 15",
                image: [
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-2.webp",
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-3.webp",
                ],
                telephone: "+33 6 72 01 45 39",
                logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
                priceRange: "€€",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "28 Rue Letellier",
                  addressLocality: "Paris",
                  postalCode: "75015",
                  addressCountry: "FR",
                },
                identifier: {
                  "@type": "PropertyValue",
                  name: "SIRET",
                  value: "90179515300021",
                },
                legalName: "SIREN 901795153",
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Friday",
                    opens: "09:00",
                    closes: "20:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Saturday",
                    opens: "10:00",
                    closes: "13:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Monday",
                    opens: "12:00",
                    closes: "20:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Wednesday",
                    opens: "15:00",
                    closes: "20:00",
                  },
                ],
              },
            ],
            null,
            2
          ),
        }}
      />

      {/* ================= HERO SECTION (OPTIMISÉE EXPERTISES DUALES) ================= */}
      <section className="bg-primary text-offwhite relative overflow-hidden pb-24 md:pb-32">
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />

        <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-20 grid md:grid-cols-2 gap-10 items-center relative z-10">

          <div className="fade-hero">
            <h1 className="uppercase tracking-[0.2em] text-xs md:text-sm text-light">
              Ostéopathe D.O & Praticienne Renata França
            </h1>

            {/* Le H2 avec le magnifique contraste foncé */}
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1E293B]">
              Ostéopathie douce &<br />
              Drainage Lymphatique
            </h2>

            <p className="mt-5 text-base md:text-lg text-offwhite/90">
              Hilary Farid vous accompagne à Sèvres et Paris 15 avec une prise en charge globale : soulagez vos douleurs grâce à <strong>l'ostéopathie</strong>, et retrouvez légèreté et vitalité avec la méthode <strong>Renata França</strong>.
            </p>

            {/* ⭐ PREUVE SOCIALE ⭐ */}
            <div className="mt-6 mb-2 flex items-center gap-2">
              <div className="flex text-amber-400 text-lg drop-shadow-md">★★★★★</div>
              <span className="text-offwhite/90 text-sm font-medium">
                5/5 sur Google (+100 avis)
              </span>
            </div>

            {/* BOUTONS D'ACTION */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="trigger-booking-modal inline-flex items-center gap-2 bg-[#0596DE] text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-[#047cbd] transition-all transform hover:-translate-y-1"
              >
                Prendre RDV Doctolib
              </button>

              <Link
                href="/drainage"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm md:text-base text-offwhite border border-offwhite/50 bg-white/10 hover:bg-white/20 transition-colors"
              >
                Le Drainage Renata
              </Link>
            </div>

            <p className="mt-5 text-xs text-offwhite/70">
              Prise en charge ostéopathique possible par les mutuelles.
            </p>
          </div>

          <div className="fade-hero md:fade-hero">
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-4 bg-offwhite/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-offwhite/30 aspect-square">
                <Image
                  src="/hilary.webp"
                  alt="Hilary Farid, ostéopathe et praticienne Renata França à Sèvres et Paris 15"
                  fill
                  priority
                  fetchPriority="high"
                  decoding="async"
                  sizes="(max-width: 768px) 90vw, 600px"
                  className="object-cover object-top w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NOUVELLE SECTION : LES 2 EXPERTISES (Cartes 100% Cliquables) ================= */}
      <section className="relative z-20 -mt-16 md:-mt-24 max-w-6xl mx-auto px-6 pb-16">
        <FadeInNoShift>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">

            {/* Carte Ostéopathie - Maintenant un gros lien cliquable avec hover effect (group) */}
            <Link
              href="/osteopathie"
              className="group bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-light/50 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🦴</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Ostéopathie D.O</h3>
              <p className="text-graywarm mb-6 flex-grow">
                Une approche douce et personnalisée pour soulager vos douleurs articulaires, musculaires, et vos troubles digestifs ou liés au stress. Prise en charge des adultes, nourrissons, femmes enceintes et sportifs.
              </p>
              <span className="font-semibold text-primary underline underline-offset-4 group-hover:text-secondary flex items-center gap-2">
                Découvrir l'ostéopathie <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

            {/* Carte Drainage Renata França - Maintenant un gros lien cliquable */}
            <Link
              href="/drainage"
              className="group bg-[#FAF6F3] rounded-3xl p-8 md:p-10 shadow-xl border border-[#E8D8CE] flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Drainage lymphatique Renata França</h3>
              <p className="text-graywarm mb-6 flex-grow">
                Un massage manuel tonique et exclusif aux résultats immédiats. Idéal pour lutter contre la rétention d'eau, obtenir des jambes légères, un ventre dégonflé et relancer le métabolisme.
              </p>
              <span className="font-semibold text-[#1E293B] underline underline-offset-4 group-hover:text-primary flex items-center gap-2">
                Tout savoir sur le drainage <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

          </div>
        </FadeInNoShift>
      </section>

      {/* ================= SECTION : Pourquoi consulter ? ================= */}
      <section className="py-10 md:py-16 bg-offwhite">
        <FadeInNoShift>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Quand consulter en ostéopathie ?
            </h2>
            <p className="mt-4 text-center text-graywarm max-w-3xl mx-auto">
              L'ostéopathie aide à soulager de nombreux troubles fonctionnels,
              que ce soit après un faux mouvement, une grossesse,
              une pratique sportive intensive, ou un trop-plein de stress.
            </p>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FadeInNoShift delay={0.1}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80 h-full">
                  <h3 className="font-semibold text-primary">Douleurs & posture</h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Maux de dos, nuque, épaules, sciatiques, blocages, tensions
                    récurrentes, migraines…
                  </p>
                </div>
              </FadeInNoShift>

              <FadeInNoShift delay={0.2}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80 h-full">
                  <h3 className="font-semibold text-primary">Nourrissons & enfants</h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Plagiocéphalie, coliques, reflux, troubles du sommeil, pleurs inexpliqués…
                  </p>
                </div>
              </FadeInNoShift>

              <FadeInNoShift delay={0.3}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80 h-full">
                  <h3 className="font-semibold text-primary">Grossesse & post-partum</h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Lombalgies, préparation du bassin, sciatique, confort respiratoire…
                  </p>
                </div>
              </FadeInNoShift>

              <FadeInNoShift delay={0.4}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80 h-full">
                  <h3 className="font-semibold text-primary">Digestion & stress</h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Troubles digestifs, ballonnements, anxiété, sommeil agité, fatigue…
                  </p>
                </div>
              </FadeInNoShift>
            </div>
          </div>
        </FadeInNoShift>
      </section>

      {/* ================= SECTION : Cabinets ================= */}
      <section className="py-16 md:py-20 bg-light relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
            Nos cabinets de consultation
          </h2>
          <p className="mt-4 text-center text-graywarm">
            Séances d'ostéopathie et de drainage lymphatique à Sèvres et Paris 15.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {/* --------- CARTE SÈVRES --------- */}
            <Link
              href="/sevres"
              className="group relative p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-light/80 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="grid grid-cols-3 gap-2 mb-5 rounded-xl overflow-hidden">
                <Image
                  src="/cabinet-sevres/cabinet-sevres-1.webp"
                  width={350} height={200}
                  alt="Cabinet d'ostéopathie à Sèvres – salle de consultation"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <Image
                  src="/cabinet-sevres/cabinet-sevres-2.webp"
                  width={350} height={200}
                  alt="Cabinet d'ostéopathie à Sèvres – table de soin"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <Image
                  src="/cabinet-sevres/cabinet-sevres-3.webp"
                  width={350} height={200}
                  alt="Cabinet d'ostéopathie à Sèvres – salle d'attente"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="relative h-8">
                <span className="absolute top-4 right-4 bg-primary text-offwhite text-xs px-3 py-1 rounded-full shadow-sm">
                  📍 Sèvres
                </span>
              </div>

              <h3 className="text-xl font-semibold text-primary">Cabinet de Sèvres</h3>
              <p className="mt-3 text-graywarm leading-relaxed">
                104 Grande Rue, 92310 Sèvres.
              </p>

              <span className="mt-5 inline-block text-secondary underline underline-offset-4 group-hover:text-primary">
                Voir le cabinet →
              </span>
            </Link>

            {/* --------- CARTE PARIS 15 --------- */}
            <Link
              href="/paris15"
              className="group relative p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-light/80 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="grid grid-cols-3 gap-2 mb-5 rounded-xl overflow-hidden">
                <Image
                  src="/cabinet-paris15/cabinet-paris15-1.webp"
                  width={350} height={200}
                  alt="Cabinet d'ostéopathie à Paris 15 – salle de consultation"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <Image
                  src="/cabinet-paris15/cabinet-paris15-2.webp"
                  width={350} height={200}
                  alt="Cabinet d'ostéopathie à Paris 15 – table de soin"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <Image
                  src="/cabinet-paris15/cabinet-paris15-3.webp"
                  width={350} height={200}
                  alt="Cabinet d'ostéopathie à Paris 15 – salle d'attente"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="relative h-8">
                <span className="absolute top-4 right-4 bg-primary text-offwhite text-xs px-3 py-1 rounded-full shadow-sm">
                  📍 Paris 15
                </span>
              </div>

              <h3 className="text-xl font-semibold text-primary">Cabinet Paris 15</h3>
              <p className="mt-3 text-graywarm leading-relaxed">
                28 Rue Letellier, 75015 Paris.
              </p>

              <span className="mt-5 inline-block text-secondary underline underline-offset-4 group-hover:text-primary">
                Voir le cabinet →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA finale ================= */}
      <section className="py-16 md:py-20 bg-primary text-offwhite text-center">
        <FadeInNoShift>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Prêt(e) à prendre soin de vous ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-offwhite/90">
            Une première séance permet déjà de faire le point, que ce soit pour des douleurs ou pour un drainage.
          </p>
          <button
            type="button"
            className="trigger-booking-modal mt-8 inline-block bg-offwhite text-[#0596DE] font-bold px-10 py-4 rounded-full shadow-md hover:bg-light transition"
          >
            Réserver sur Doctolib
          </button>
        </FadeInNoShift>
      </section>

      <BackToTop />

    </main>
  );
}
