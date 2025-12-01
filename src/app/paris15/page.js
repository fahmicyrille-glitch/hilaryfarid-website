"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import SEO from "@/components/SEO";

const SECTIONS = [
  { id: "cabinet", label: "Le cabinet" },
  { id: "osteopathe", label: "Votre ostéopathe" },
  { id: "galerie", label: "Galerie du cabinet" },
  { id: "pourquoi", label: "Pourquoi consulter ?" },
  { id: "acces", label: "Adresse & accès" },
  { id: "faq", label: "FAQ – Paris 15" },
];

export default function Paris15Page() {
  const [activeId, setActiveId] = useState("cabinet");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scrollspy + bouton retour en haut
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const triggerLine = viewportHeight * 0.3; // zone haute du viewport
      let current = SECTIONS[0].id;

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // La section est active si la trigger-line est dans sa zone
        if (rect.top <= triggerLine && rect.bottom > triggerLine) {
          current = section.id;
        }
      }

      setActiveId(current);
      setShowBackToTop(window.scrollY > 600);
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

  const handleSmoothScrollMobile = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      {/* === SCHEMA LOCAL BUSINESS + FAQ === */}
      <Script
        id="ld-localbusiness-paris15"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/paris15#business",
                name: "Cabinet d’Ostéopathie – Paris 15",
                description:
                  "Cabinet d’ostéopathie d’Hilary Farid à Paris 15. Consultations pour adultes, nourrissons, femmes enceintes et sportifs.",
                image:
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
                url: "https://www.hilaryfarid-osteopathe.fr/paris15",
                telephone: "+33 6 72 01 45 39",
                priceRange: "60€ – 90€",

                // ⭐⭐ AJOUT SIRET ⭐⭐
                legalName: "Hilary Farid – Ostéopathe DO",
                taxID: "90179515300021",

                // ⭐⭐ HORAIRES RÉELS ⭐⭐
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
                  "https://www.doctolib.fr/osteopathe/paris/hilary-farid",
                  "https://www.google.com/maps/place/28+Rue+Letellier,+75015+Paris"
                ],

                address: {
                  "@type": "PostalAddress",
                  streetAddress: "28 Rue Letellier",
                  addressLocality: "Paris",
                  postalCode: "75015",
                  addressRegion: "Île-de-France",
                  addressCountry: "FR",
                },

                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 48.847151,
                  longitude: 2.293107,
                }
              },

              // ---- FAQ STRUCTURÉE ----
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name:
                      "Quels patients sont reçus au cabinet d’ostéopathie de Paris 15 ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Les consultations concernent les adultes, nourrissons, enfants, femmes enceintes et sportifs. Les techniques sont adaptées à chaque personne et à chaque motif.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Le cabinet est-il proche des métros ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, le cabinet est situé à 3 minutes des stations Commerce, Émile Zola et La Motte-Picquet – Grenelle.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Le cabinet est-il accessible avec une poussette ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, l’accueil des nourrissons et des parents avec poussette est facilité.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Comment prendre rendez-vous ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Les rendez-vous se prennent en ligne via Doctolib ou par téléphone. Le cabinet est ouvert du lundi au samedi.",
                    },
                  },
                ],
              }
            ],
            null,
            2
          ),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/cabinet-paris15/cabinet-paris15-1.webp"
          alt="Cabinet d'ostéopathie à Paris 15"
          fill
          priority      // ⭐ accélère le LCP
          sizes="100vw" // ⭐ essentiel pour le mobile
          className="absolute inset-0 object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center text-center px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold text-offwhite drop-shadow-lg">
              Cabinet d’Ostéopathie – Paris 15
            </h1>
            <p className="mt-4 text-offwhite text-lg md:text-xl max-w-2xl mx-auto">
              Un cabinet moderne, lumineux et chaleureux au cœur du 15e
              arrondissement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= WRAPPER SOMMAIRE + CONTENU ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">

          {/* ===== SOMMAIRE DESKTOP ===== */}
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
            <div className="lg:hidden mb-4">
              <div className="bg-white rounded-2xl shadow-sm border border-light/70 p-4">
                <h2 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  Sommaire
                </h2>
                <div className="flex flex-wrap gap-2 text-xs">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSmoothScrollMobile(section.id)}
                      className={`px-3 py-1 rounded-full border text-[11px] transition-colors ${
                        activeId === section.id
                          ? "bg-primary text-offwhite border-primary"
                          : "border-light text-graywarm hover:border-primary hover:text-primary"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== LE CABINET ===== */}
            <SlideUp>
              <section
                id="cabinet"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Un cabinet au cœur du 15e arrondissement
                </h2>

                <p className="text-graywarm text-base md:text-lg leading-relaxed mt-8 text-center">
                  Le cabinet d’ostéopathie de Paris 15 vous accueille dans un
                  espace <strong>calme, lumineux et apaisant</strong>, pensé
                  pour favoriser la détente et permettre un travail
                  ostéopathique précis dans les meilleures conditions.
                </p>
              </section>
            </SlideUp>

            {/* ===== VOTRE OSTÉOPATHE ===== */}
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
                      Ostéopathe DO diplômée, j’accompagne les patients du 15e
                      arrondissement dans une approche personnalisée,
                      bienveillante et orientée sur l’origine des douleurs.
                    </p>

                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-4">
                      Les consultations concernent les adultes, nourrissons,
                      femmes enceintes, enfants et sportifs, avec des techniques
                      adaptées à chaque âge et chaque morphologie.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative w-full max-w-sm h-[450px] rounded-xl shadow-xl overflow-hidden">
                      <Image
                        src="/hilary.webp"
                        alt="Hilary Farid Ostéopathe Paris 15"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ===== GALERIE ===== */}
            <SlideUp>
              <section
                id="galerie"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center mb-10">
                  Découvrez le cabinet en images
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    "cabinet-paris15-1.webp",
                    "cabinet-paris15-2.webp",
                    "cabinet-paris15-3.webp",
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="relative w-full h-[280px] md:h-[320px] rounded-lg shadow-lg overflow-hidden"
                    >
                    <Image
                      src={`/cabinet-paris15/${img}`}
                      alt={`Cabinet Paris 15 image ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"   // ⭐ essentiel
                      className="object-cover"
                      loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </SlideUp>

            {/* ===== POURQUOI CONSULTER ===== */}
            <SlideUp>
              <section
                id="pourquoi"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Pourquoi consulter à Paris 15 ?
                </h2>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12 items-center">
                  <ul className="space-y-4 text-graywarm text-base md:text-lg">
                    <li>✔️ Cabinet moderne, lumineux et récemment rénové</li>
                    <li>✔️ Adultes, nourrissons, femmes enceintes & sportifs</li>
                    <li>
                      ✔️ Situé dans un quartier vivant, accessible et sécurisé
                    </li>
                    <li>✔️ Atmosphère calme favorisant la détente</li>
                    <li>
                      ✔️ Prise en charge personnalisée & centrée sur votre
                      histoire
                    </li>
                  </ul>

                  <div className="relative w-full h-[260px] md:h-[300px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/cabinet-paris15/cabinet-paris15-2.webp"
                      alt="Salle du cabinet d’ostéopathie Paris 15"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ===== ADRESSE & ACCÈS ===== */}
            <SlideUp>
              <section
                id="acces"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Adresse & accès
                </h2>

                <p className="text-center text-graywarm mt-4 text-base md:text-lg">
                  📍 <strong>28 Rue Letellier, 75015 Paris</strong>
                  <br />
                  À proximité des métros Commerce, Émile-Zola et La
                  Motte-Picquet – Grenelle.
                </p>

                <div className="mt-10 rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.402089969294!2d2.2935342!3d48.8474188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701a1b3b4a3b%3A0x0000000000000000!2s28%20Rue%20Letellier%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    className="w-full h-80 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </section>
            </SlideUp>

            {/* ===== FAQ PARIS 15 ===== */}
            <SlideUp>
              <section
                id="faq"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – Cabinet d’ostéopathie Paris 15
                </h2>

                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Quels types de patients sont reçus à Paris 15 ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Le cabinet reçoit les adultes, femmes enceintes,
                      nourrissons, enfants et sportifs. Les techniques sont
                      adaptées à chaque âge et morphologie.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Le cabinet est-il proche des métros ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Oui, il se situe à 3 minutes des stations Commerce,
                      Émile-Zola et La Motte-Picquet – Grenelle.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Le cabinet est-il adapté aux poussettes ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Oui, les bébés et leurs parents peuvent être accueillis
                      facilement. Le cabinet est totalement adapté.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Comment prendre rendez-vous ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Les rendez-vous se prennent via Doctolib ou par téléphone,
                      du lundi au samedi.
                    </p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ===== CTA FINALE ===== */}
            <FadeIn>
              <section className="bg-primary text-offwhite rounded-2xl shadow-sm p-8 md:p-10 text-center">
                <h2 className="text-3xl font-semibold">
                  Prendre rendez-vous à Paris 15
                </h2>
                <p className="mt-3 text-offwhite/90">
                  Consultations sur rendez-vous du lundi au samedi.
                </p>

                <a
                  href="https://www.doctolib.fr/osteopathe/paris/hilary-farid"
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

      {/* &&&& Bouton retour en haut &&&& */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-6 right-4 md:right-6 z-40 bg-primary text-offwhite w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-lg hover:bg-secondary transition"
          aria-label="Revenir en haut de la page"
        >
          ↑
        </button>
      )}
    </main>
  );
}
