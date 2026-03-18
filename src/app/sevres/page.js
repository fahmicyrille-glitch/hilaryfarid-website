"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import MobileSummary from "@/components/MobileSummary";
import BackToTop from "@/components/BackToTop";

// Sommaire optimisé et raccourci
const SECTIONS = [
  { id: "cabinet", label: "Le cabinet & Galerie" },
  { id: "osteopathe", label: "Votre ostéopathe" },
  { id: "avis", label: "Avis patients" },
  { id: "pourquoi", label: "Pourquoi à Sèvres ?" },
  { id: "acces", label: "Adresse & accès" },
  { id: "faq", label: "FAQ" },
];

export default function SevresPage() {
  const [activeId, setActiveId] = useState("cabinet");

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.25;

      let current = "cabinet";

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

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
      {/* === LOCAL BUSINESS + FAQ SCHEMA – SÈVRES === */}
      <Script
        id="ld-localbusiness-sevres"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/sevres#business",
                name: "Cabinet d'Ostéopathie – Sèvres",
                description:
                  "Cabinet d'ostéopathie d'Hilary Farid à Sèvres. Consultations pour adultes, nourrissons, femmes enceintes, sportifs et seniors.",
                image:
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/hilary-sevres.webp",
                url: "https://www.hilaryfarid-osteopathe.fr/sevres",
                telephone: "+33 6 72 01 45 39",
                logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
                priceRange: "60€ – 90€",
                legalName: "Hilary Farid – Ostéopathe DO",
                taxID: "90179515300013",
                openingHoursSpecification: [
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "12:00", closes: "20:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "00:00", closes: "00:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:00", closes: "20:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "00:00", closes: "00:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "20:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "13:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "00:00" }
                ],
                sameAs: [
                  "https://www.doctolib.fr/osteopathe/sevres/hilary-farid",
                  "https://maps.google.com/?q=104+Grande+Rue,+92310+Sèvres"
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "104 Grande Rue",
                  addressLocality: "Sèvres",
                  postalCode: "92310",
                  addressRegion: "Île-de-France",
                  addressCountry: "FR"
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 48.822013,
                  longitude: 2.2179
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "42"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Quels motifs sont pris en charge au cabinet d'ostéopathie de Sèvres ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Le cabinet accueille adultes, nourrissons, femmes enceintes, sportifs et seniors pour douleurs musculo-squelettiques, troubles fonctionnels, suivi de grossesse ou post-partum.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Le cabinet est-il accessible en transports depuis Sèvres ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Oui, situé au 104 Grande Rue, le cabinet est proche de la gare de Sèvres, du tramway T2 et de plusieurs lignes de bus.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Comment prendre rendez-vous au cabinet d'ostéopathie de Sèvres ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Les rendez-vous se prennent via Doctolib ou par téléphone. Les consultations sont ouvertes du lundi au samedi.",
                    },
                  }
                ]
              }
            ],
            null,
            2
          ),
        }}
      />

      {/* ================= HERO (AVEC TRUST BADGE + BOUTON) ================= */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <Image
          src="/cabinet-sevres/hilary-sevres.webp"
          alt="Cabinet d'ostéopathie à Sèvres"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold text-offwhite drop-shadow-lg">
              Cabinet d'Ostéopathie – Sèvres
            </h1>
            <p className="mt-4 text-offwhite text-lg md:text-xl max-w-2xl mx-auto">
              Un espace moderne, calme et lumineux pensé pour votre bien-être.
            </p>

            {/* NOUVEAU : Preuve sociale immédiate */}
            <div className="mt-6 mb-8 flex flex-col items-center justify-center gap-1">
              <div className="flex text-amber-400 text-xl tracking-widest drop-shadow-md">
                ★★★★★
              </div>
              <span className="text-offwhite/90 text-sm font-medium tracking-wide">
                5/5 sur Google (62 avis)
              </span>
            </div>

            {/* BOUTON D'ACTION IMMÉDIATE */}
            <a
              href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0596DE] text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-[#047cbd] transition-all transform hover:-translate-y-1"
            >
              Prendre rendez-vous sur Doctolib
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ================= WRAPPER : SOMMAIRE + CONTENU ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">

          {/* ===== SOMMAIRE STICKY (DESKTOP) ===== */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-light/70 p-5">
              <h2 className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Sommaire
              </h2>
              <nav className="space-y-2 text-sm">
                {SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => handleSmoothScroll(e, section.id)}
                    className={`block rounded-lg px-3 py-2 transition-colors ${
                      activeId === section.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-graywarm hover:text-primary hover:bg-light/70"
                    }`}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ===== CONTENU PRINCIPAL ===== */}
          <div className="flex-1 space-y-16">
            {/* Sommaire mobile */}
            <MobileSummary
              sections={SECTIONS}
              activeId={activeId}
              smoothScroll={smoothScroll}
            />

            {/* ======= LE CABINET + GALERIE FUSIONNÉS ======= */}
            <SlideUp>
              <section
                id="cabinet"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Un cadre apaisant pour des soins de qualité
                </h2>
                <p className="text-graywarm text-base md:text-lg leading-relaxed mt-6 mb-10 text-center max-w-3xl mx-auto">
                  Le cabinet d'ostéopathie de Sèvres a été conçu pour offrir un lieu
                  <strong> lumineux, chaleureux et propice au relâchement.</strong> Chaque détail a été pensé pour vous accueillir dans les meilleures conditions.
                </p>

                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    "cabinet-sevres-1.webp",
                    "cabinet-sevres-2.webp",
                    "cabinet-sevres-3.webp",
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="relative w-full h-[200px] md:h-[240px] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <Image
                        src={`/cabinet-sevres/${img}`}
                        alt={`Cabinet Sèvres image ${i + 1}`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </SlideUp>

            {/* ======= VOTRE OSTEOPATHE ======= */}
            <SlideUp>
              <section
                id="osteopathe"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-semibold text-primary">
                      Votre ostéopathe – Hilary Farid
                    </h2>
                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-6">
                      Ostéopathe DO diplômée, je vous accueille au cabinet de
                      Sèvres dans une approche globale, douce et personnalisée.
                      Mon objectif est de comprendre l'origine de vos douleurs
                      pour agir de manière durable, tout en respectant votre
                      histoire et votre corps.
                    </p>
                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-4">
                      Formée aux techniques structurelles, viscérales,
                      crâniennes et tissulaires, j'accompagne également les
                      femmes enceintes, les nourrissons ainsi que les sportifs
                      dans leur récupération physique.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-sm h-[450px] rounded-xl shadow-xl overflow-hidden">
                      <Image
                        src="/hilary.webp"
                        alt="Hilary Farid Ostéopathe à Sèvres"
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 90vw, 400px"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ======= AVIS PATIENTS (NOUVEAU - EXTRAIT) ======= */}
            <SlideUp>
              <section
                id="avis"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8 text-center"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  Ce que disent les patients
                </h2>

                <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
                  {/* Avis 1 (Ostéo) */}
                  <article className="p-6 rounded-xl bg-offwhite/50 border border-light/80 shadow-sm">
                    <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                    <p className="text-graywarm italic text-sm md:text-base leading-relaxed">
                      "Ostéo exceptionnelle. Très à l'écoute, technique et efficace. Mes douleurs cervicales ont disparu en deux séances."
                    </p>
                    <p className="mt-4 font-semibold text-primary text-sm">— Mathieu (Ostéopathie)</p>
                  </article>

                  {/* Avis 2 (Drainage/Grossesse) */}
                  <article className="p-6 rounded-xl bg-offwhite/50 border border-light/80 shadow-sm">
                    <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                    <p className="text-graywarm italic text-sm md:text-base leading-relaxed">
                      "Un soin incroyable ! Résultats visibles dès la première séance de drainage. Hilary est douce et professionnelle. Je recommande les yeux fermés."
                    </p>
                    <p className="mt-4 font-semibold text-primary text-sm">— Sabrina (Drainage Renata França)</p>
                  </article>
                </div>

                <div className="mt-8">
                  <Link
                    href="/temoignages"
                    className="inline-block text-secondary font-medium underline underline-offset-4 hover:text-primary transition"
                  >
                    Lire tous les avis (42+)
                  </Link>
                </div>
              </section>
            </SlideUp>

            {/* ======= POURQUOI CONSULTER ======= */}
            <SlideUp>
              <section
                id="pourquoi"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Pourquoi consulter à Sèvres ?
                </h2>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12 items-center">
                  <ul className="space-y-4 text-graywarm text-base md:text-lg">
                    <li>✔️ Cabinet lumineux, moderne et apaisant</li>
                    <li>✔️ Soins adaptés aux adultes, nourrissons & femmes enceintes</li>
                    <li>✔️ Situé en plein cœur de la Grande Rue de Sèvres</li>
                    <li>✔️ Matériel professionnel et salle de soin premium</li>
                    <li>✔️ Accueil chaleureux, écoute et accompagnement personnalisé</li>
                  </ul>

                  <div className="relative w-full h-[260px] md:h-[300px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/cabinet-sevres/cabinet-sevres-2.webp"
                      alt="Salle de soin du cabinet"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 90vw, 400px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ======= ADRESSE & ACCES ======= */}
            <SlideUp>
              <section
                id="acces"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Adresse & accès
                </h2>

                <p className="text-center text-graywarm mt-4 text-base md:text-lg">
                  📍 <strong>104 Grande Rue, 92310 Sèvres</strong>
                  <br />
                  À proximité immédiate de la gare, du tramway T2 et de plusieurs lignes de bus.
                </p>

                <div className="mt-10 rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.352230992681!2d2.2178991!3d48.8210789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67aa75a5a7d2b%3A0xa4bbd6f480c4e45f!2s104%20Grande%20Rue%2C%2092310%20S%C3%A8vres!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    className="w-full h-80 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </section>
            </SlideUp>

            {/* ======= FAQ ======= */}
            <SlideUp>
              <section
                id="faq"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – Cabinet d'ostéopathie à Sèvres
                </h2>

                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Quels types de patients sont accueillis au cabinet de Sèvres ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Le cabinet accueille les adultes, les nourrissons, les femmes enceintes, les sportifs et les seniors pour des douleurs musculo-squelettiques, troubles fonctionnels ou un suivi de prévention.
                    </p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Comment accéder au cabinet en transports en commun ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Le cabinet est situé sur la Grande Rue de Sèvres, à proximité de la gare, du tramway T2 et de plusieurs lignes de bus. L'adresse exacte est : 104 Grande Rue, 92310 Sèvres.
                    </p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Puis-je venir avec une poussette ou mon nourrisson ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Oui, le cabinet est parfaitement adapté à l'accueil des nourrissons et des parents avec poussette.
                    </p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ======= CTA FINALE ======= */}
            <FadeIn>
              <section className="bg-primary text-offwhite rounded-2xl shadow-sm p-8 md:p-10 text-center">
                <h2 className="text-3xl font-semibold">
                  Prendre rendez-vous à Sèvres
                </h2>
                <p className="mt-3 text-offwhite/90">
                  Consultations disponibles du lundi au samedi.
                </p>

                <a
                  href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10"
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

      {/* ===== FIX CLS DESKTOP ===== */}
      <div className="hidden md:block w-[90px] h-[200px] shrink-0 min-h-[200px]"></div>

      {/* ========================================================= */}
      {/* BOUTONS FLOTTANTS (PRENDRE RDV + RETOUR EN HAUT)          */}
      {/* ========================================================= */}

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
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
            bg-white/95 border border-primary/20
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            px-5 py-3 rounded-2xl
            transition-all hover:shadow-xl hover:-translate-y-1 hover:bg-white
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary opacity-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span className="text-primary font-semibold text-sm tracking-wide">
            Prendre RDV
          </span>
        </a>
      </div>

      <BackToTop />

    </main>
  );
}
