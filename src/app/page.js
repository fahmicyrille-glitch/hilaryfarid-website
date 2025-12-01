// src/app/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FadeInNoShift, HeroMotion } from "@/components/MotionWrapper";

export const metadata = {
  title:
    "Ostéopathe Sèvres & Paris 15 – Hilary Farid Ostéopathe DO | Ostéopathie & Drainage lymphatique Renata França",
  description:
    "Ostéopathe DO à Sèvres (92310) et Paris 15 (75015), Hilary Farid prend en charge adultes, nourrissons, femmes enceintes et sportifs. Ostéopathie douce, précise et drainage lymphatique Renata França. Rendez-vous rapides sur Doctolib.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Ostéopathe Sèvres & Paris 15 – Hilary Farid Ostéopathe DO",
    description:
      "Consultations d’ostéopathie et drainage lymphatique Renata França à Sèvres & Paris 15. Adultes, nourrissons, femmes enceintes et sportifs.",
    url: "https://www.hilaryfarid-osteopathe.fr",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <main>

      {/* ======== MedicalWebPage + Physician + LocalBusiness ======== */}
      <Script
        id="ld-home-medicalwebpage"
        type="application/ld+json"
        strategy="afterInteractive"  /* FIX SEO + Perf */
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/#webpage",
                url: "https://www.hilaryfarid-osteopathe.fr",
                name: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
                description:
                  "Ostéopathie adulte, nourrisson, femme enceinte et sportif. Drainage lymphatique Renata França. Deux cabinets : Sèvres & Paris 15.",
                mainEntity: { "@id": "https://www.hilaryfarid-osteopathe.fr/#physician" }
              },
              {
                "@context": "https://schema.org",
                "@type": "Physician",
                "@id": "https://www.hilaryfarid-osteopathe.fr/#physician",
                name: "Hilary Farid",
                image: "https://www.hilaryfarid-osteopathe.fr/Hilary.webp",
                jobTitle: "Ostéopathe D.O.",
                telephone: "+33 6 72 01 45 39",
                email: "contact@hilaryfarid-osteopathe.fr",
                url: "https://www.hilaryfarid-osteopathe.fr",
                medicalSpecialty: [
                  "Osteopathy",
                  "PregnancyCare",
                  "Pediatric",
                  "SportsMedicine"
                ],
                worksFor: [
                  { "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres" },
                  { "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15" }
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  ratingCount: "42",
                  bestRating: "5",
                  worstRating: "5"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres",
                name: "Cabinet d’ostéopathie – Sèvres",
                image: [
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-1.webp",
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-2.webp",
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-3.webp"
                ],
                telephone: "+33 6 72 01 45 39",
                priceRange: "€€",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "104 Grande Rue",
                  addressLocality: "Sèvres",
                  postalCode: "92310",
                  addressCountry: "FR"
                },
                identifier: {
                  "@type": "PropertyValue",
                  name: "SIRET",
                  value: "90179515300013"
                },
                legalName: "SIREN 901795153",
                openingHoursSpecification: [
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "20:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "13:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "12:00", closes: "20:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:00", closes: "20:00" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15",
                name: "Cabinet d’ostéopathie – Paris 15",
                image: [
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-2.webp",
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-3.webp"
                ],
                telephone: "+33 6 72 01 45 39",
                priceRange: "€€",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "28 Rue Letellier",
                  addressLocality: "Paris",
                  postalCode: "75015",
                  addressCountry: "FR"
                },
                identifier: {
                  "@type": "PropertyValue",
                  name: "SIRET",
                  value: "90179515300021"
                },
                legalName: "SIREN 901795153",
                openingHoursSpecification: [
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "20:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "13:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "12:00", closes: "20:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:00", closes: "20:00" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Ostéopathie",
                provider: { "@id": "https://www.hilaryfarid-osteopathe.fr/#physician" }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Drainage lymphatique – Méthode Renata França",
                provider: { "@id": "https://www.hilaryfarid-osteopathe.fr/#physician" }
              }
            ],
            null,
            2
          ),
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-primary text-offwhite relative overflow-hidden">

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">

          <HeroMotion>
            <div>
              <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-light">
                Ostéopathe D.O – Sèvres & Paris 15
              </p>

              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Soulager vos douleurs,
                <br />
                retrouver de la mobilité,
                <br />
                respirer enfin mieux.
              </h1>

              <p className="mt-5 text-base md:text-lg text-offwhite/90">
                Hilary Farid, <strong>ostéopathe à Sèvres et Paris 15</strong>, accompagne les{" "}
                <strong>adultes, nourrissons, femmes enceintes</strong> et sportifs avec une approche douce et personnalisée.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-[11px] md:text-xs text-primary">
                <span className="bg-offwhite/90 rounded-full px-3 py-1">
                  Spécialisée nourrissons & grossesse
                </span>
                <span className="bg-offwhite/80 rounded-full px-3 py-1">
                  Drainage lymphatique Renata França
                </span>
                <span className="bg-offwhite/70 rounded-full px-3 py-1">
                  Deux cabinets : Sèvres & Paris 15
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-offwhite text-primary px-7 py-3 rounded-full font-semibold text-sm md:text-base shadow-md hover:bg-light hover:text-primary transition"
                >
                  Prendre rendez-vous sur Doctolib
                </a>

                <Link
                  href="/osteopathie"
                  className="border border-offwhite/70 text-offwhite px-6 py-3 rounded-full text-sm md:text-base hover:bg-offwhite/10 transition"
                >
                  Comprendre l’ostéopathie
                </Link>
              </div>

              <p className="mt-4 text-xs md:text-sm text-offwhite/80">
                Séances sur rendez-vous à Sèvres et Paris 15 – prise en charge par de nombreuses mutuelles.
              </p>
            </div>
          </HeroMotion>

          <FadeInNoShift>
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-4 bg-offwhite/10 rounded-3xl blur-xl" />

              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-offwhite/30 aspect-square"
              >
                <Image
                  src="/hilary.webp"
                  alt="Hilary Farid, ostéopathe à Sèvres et Paris 15"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 90vw,
                         (max-width: 1200px) 50vw,
                         600px"
                />
              </div>
            </div>
          </FadeInNoShift>

        </div>
      </section>

      {/* ================= SECTION : Pourquoi consulter ? ================= */}
      <section className="py-16 md:py-20 bg-offwhite">
        <FadeInNoShift>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Quand consulter en ostéopathie ?
            </h2>
            <p className="mt-4 text-center text-graywarm max-w-3xl mx-auto">
              L’ostéopathie aide à soulager de nombreux troubles fonctionnels,
              que ce soit après un faux mouvement, une grossesse, une pratique
              sportive intensive ou simplement un trop-plein de stress.
            </p>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FadeInNoShift delay={0.1}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80">
                  <h3 className="font-semibold text-primary">
                    Douleurs & posture
                  </h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Maux de dos, nuque, épaules, sciatiques, blocages, tensions
                    récurrentes, migraines…
                  </p>
                </div>
              </FadeInNoShift>

              <FadeInNoShift delay={0.2}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80">
                  <h3 className="font-semibold text-primary">
                    Nourrissons & enfants
                  </h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Plagiocéphalie, coliques, reflux, troubles du sommeil…
                  </p>
                </div>
              </FadeInNoShift>

              <FadeInNoShift delay={0.3}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80">
                  <h3 className="font-semibold text-primary">
                    Grossesse & post-partum
                  </h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Lombalgies, bassin, sciatique, confort respiratoire…
                  </p>
                </div>
              </FadeInNoShift>

              <FadeInNoShift delay={0.4}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80">
                  <h3 className="font-semibold text-primary">
                    Digestion, stress & sommeil
                  </h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Troubles digestifs, anxiété, sommeil agité…
                  </p>
                </div>
              </FadeInNoShift>
            </div>

            <p className="mt-8 text-center text-sm text-graywarm">
              Pour plus de détails, consultez{" "}
              <Link href="/osteopathie" className="text-primary underline underline-offset-4 hover:text-secondary">
                l’ostéopathie
              </Link>{" "}
              ou les{" "}
              <Link href="/tarifs" className="text-primary underline underline-offset-4 hover:text-secondary">
                tarifs
              </Link>.
            </p>
          </div>
        </FadeInNoShift>
      </section>

      {/* ================= SECTION : Ostéo + Drainage ================= */}
      <section className="py-16 md:py-20 bg-light">
        <FadeInNoShift>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                Une prise en charge globale du corps
              </h2>
              <p className="mt-4 text-graywarm">
                Chaque séance commence par un temps d’écoute afin de comprendre
                l’origine du déséquilibre.
              </p>
              <p className="mt-3 text-graywarm">
                En complément, Hilary propose le{" "}
                <strong>drainage lymphatique Renata França</strong>.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/osteopathie"
                  className="text-secondary underline underline-offset-4 hover:text-primary"
                >
                  Découvrir l’ostéopathie
                </Link>

                <Link
                  href="/drainage"
                  className="text-secondary underline underline-offset-4 hover:text-primary"
                >
                  En savoir plus sur le drainage
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <FadeInNoShift delay={0.1}>
                <div className="p-4 rounded-xl bg-white shadow-sm border border-light/80">
                  <p className="text-sm text-graywarm">
                    « Mon objectif : que vous repartiez avec moins de douleurs,
                    plus de mobilité et la sensation d’être écouté(e). »
                  </p>
                  <p className="mt-2 text-xs text-primary font-semibold">
                    — Hilary Farid, Ostéopathe DO
                  </p>
                </div>
              </FadeInNoShift>

              <FadeInNoShift delay={0.2}>
                <div className="p-4 rounded-xl bg-white shadow-sm border border-light/80 text-sm text-graywarm">
                  <p>⏱ Séance : ~45 minutes</p>
                  <p>📍 Cabinets à Sèvres & Paris 15</p>
                  <p>👶 Dès la naissance</p>
                </div>
              </FadeInNoShift>
            </div>

          </div>
        </FadeInNoShift>
      </section>

      {/* ================= SECTION : Cabinets ================= */}
      <section className="py-16 md:py-20 bg-offwhite relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
            Cabinets d’ostéopathie à Sèvres et Paris 15
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-10">

            {/* --------- CARTE SÈVRES --------- */}
            <Link
              href="/sevres"
              className="group relative p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-light/80 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="grid grid-cols-3 gap-2 mb-5 rounded-xl overflow-hidden">
                <Image
                  src="/cabinet-sevres/cabinet-sevres-1.webp"
                  width={350}
                  height={200}
                  alt="Cabinet d’ostéopathie à Sèvres – salle de consultation"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
                <Image
                  src="/cabinet-sevres/cabinet-sevres-2.webp"
                  width={350}
                  height={200}
                  alt="Cabinet d’ostéopathie à Sèvres – table de soin"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
                <Image
                  src="/cabinet-sevres/cabinet-sevres-3.webp"
                  width={350}
                  height={200}
                  alt="Cabinet d’ostéopathie à Sèvres – salle d’attente"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
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
                  width={350}
                  height={200}
                  alt="Cabinet d’ostéopathie à Paris 15 – salle de consultation"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
                <Image
                  src="/cabinet-paris15/cabinet-paris15-2.webp"
                  width={350}
                  height={200}
                  alt="Cabinet d’ostéopathie à Paris 15 – table de soin"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
                <Image
                  src="/cabinet-paris15/cabinet-paris15-3.webp"
                  width={350}
                  height={200}
                  alt="Cabinet d’ostéopathie à Paris 15 – salle d’attente"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
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
            Prêt(e) à soulager vos douleurs ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-offwhite/90">
            Une première séance permet déjà de faire le point.
          </p>
          <a
            href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block bg-offwhite text-primary px-10 py-4 rounded-full font-semibold shadow-md hover:bg-light hover:text-primary transition"
          >
            Réserver votre séance sur Doctolib
          </a>
        </FadeInNoShift>
      </section>

      {/* ===== FIX CLS DESKTOP */}
      <div className="hidden md:block w-[90px] h-[200px] shrink-0 min-h-[200px]"></div>

      {/* ------ MOBILE DOCTOLIB (no blur = FIX PERF) ------ */}
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
            className="w-5 h-5 opacity-80"
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

      {/* ------ DESKTOP DOCTOLIB (no blur = FIX PERF) ------ */}
      <div
        className="
          hidden md:flex
          fixed top-1/2 right-6 -translate-y-1/2
          z-50
        "
      >
        <a
          href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-3
            bg-white/95
            border border-primary/20
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            px-5 py-3 rounded-2xl
            transition-all
            hover:shadow-xl hover:-translate-y-1
            hover:bg-white
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-primary opacity-90"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>

          <span className="text-primary font-semibold text-sm tracking-wide">
            Prendre RDV
          </span>
        </a>
      </div>

    </main>
  );
}
