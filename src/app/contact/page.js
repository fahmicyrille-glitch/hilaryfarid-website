"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";
import { PHONE, PHONE_LINK, EMAIL } from "@/config/contact";
import ContactForm from "@/components/ContactForm";
import MobileSummary from "@/components/MobileSummary";

// Framer Motion wrappers chargés dynamiquement (perf ++)
const FadeIn = dynamic(
  () => import("@/components/MotionWrapper").then((m) => m.FadeIn),
  { ssr: false }
);

const SlideUp = dynamic(
  () => import("@/components/MotionWrapper").then((m) => m.SlideUp),
  { ssr: false }
);

const HeroMotion = dynamic(
  () => import("@/components/MotionWrapper").then((m) => m.HeroMotion),
  { ssr: false }
);

const SECTIONS = [
  { id: "coordonnees", label: "Coordonnées" },
  { id: "formulaire", label: "Formulaire de contact" },
  { id: "infos", label: "Infos pratiques" },
  { id: "acces", label: "Accès & Localisation" },
  { id: "faq", label: "FAQ Contact" },
];

export default function ContactPage() {
  const [activeId, setActiveId] = useState("coordonnees");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Fonction générique de scroll
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 120,
      behavior: "smooth",
    });
  };

  // Scrollspy optimisé (requestAnimationFrame)
  useEffect(() => {
    const sectionIds = SECTIONS.map((s) => s.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -50% 0px", // 🔥 BEST SETTING pour ton layout
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const smoothScroll = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <main>
      {/* == JSON-LD : ContactPage + LocalBusiness + Physician + FAQ == */}
      <Script
        id="schema-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              /* === Contact Page === */
              {
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/contact#page",
                url: "https://www.hilaryfarid-osteopathe.fr/contact",
                name: "Contact – Hilary Farid Ostéopathe DO",
                description:
                  "Coordonnées, informations de contact et accès aux cabinets de Sèvres et Paris 15 pour Hilary Farid, ostéopathe DO.",
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
                      name: "Contact",
                      item: "https://www.hilaryfarid-osteopathe.fr/contact",
                    },
                  ],
                },
              },

              /* === LocalBusiness SÈVRES === */
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/sevres#business",
                name: "Cabinet d'Ostéopathie – Sèvres",
                telephone: "+33 6 72 01 45 39",
                priceRange: "60€ – 90€",
                image:
                  "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-1.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "104 Grande Rue",
                  postalCode: "92310",
                  addressLocality: "Sèvres",
                  addressCountry: "FR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 48.822013,
                  longitude: 2.2179,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Monday",
                    opens: "12:00",
                    closes: "20:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Tuesday",
                    opens: "00:00",
                    closes: "00:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Wednesday",
                    opens: "15:00",
                    closes: "20:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Thursday",
                    opens: "00:00",
                    closes: "00:00",
                  },
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
                    dayOfWeek: "Sunday",
                    opens: "00:00",
                    closes: "00:00",
                  },
                ],
                sameAs: [
                  "https://www.doctolib.fr/osteopathe/sevres/hilary-farid",
                  "https://g.page/r/CfEVH_swFUP2EB0/review",
                ],
              },

              /* === LocalBusiness PARIS 15 === */
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/paris15#business",
                name: "Cabinet d'Ostéopathie – Paris 15",
                telephone: "+33 6 72 01 45 39",
                priceRange: "60€ – 90€",
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
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 48.847151,
                  longitude: 2.293107,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Monday",
                    opens: "12:00",
                    closes: "20:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Tuesday",
                    opens: "00:00",
                    closes: "00:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Wednesday",
                    opens: "15:00",
                    closes: "20:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Thursday",
                    opens: "00:00",
                    closes: "00:00",
                  },
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
                    dayOfWeek: "Sunday",
                    opens: "00:00",
                    closes: "00:00",
                  },
                ],
                sameAs: [
                  "https://www.doctolib.fr/osteopathe/paris/hilary-farid",
                  "https://www.google.com/maps/place/28+Rue+Letellier,+75015+Paris",
                ],
              },

              /* === FAQ === */
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Comment puis-je contacter Hilary ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Vous pouvez contacter Hilary par téléphone, par e-mail ou via le formulaire de contact disponible sur cette page.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Comment prendre rendez-vous ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Les rendez-vous se prennent en ligne via Doctolib ou par téléphone.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Où se trouvent les cabinets ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Hilary consulte au 104 Grande Rue à Sèvres et au 28 Rue Letellier à Paris 15.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Les cabinets sont-ils adaptés aux nourrissons ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, les deux cabinets sont adaptés aux parents avec poussette et aux consultations nourrissons.",
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
      <section className="bg-primary text-offwhite py-16 text-center px-6 overflow-hidden">
        <HeroMotion>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Contact & Rendez-vous
          </h1>
          <p className="mt-4 text-light text-lg max-w-2xl mx-auto">
            Une question, un besoin d'information ou un doute sur votre motif ?
            Je vous réponds avec écoute et bienveillance.
          </p>
        </HeroMotion>
      </section>

      {/* ============== WRAPPER SOMMAIRE + CONTENU ============== */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">
          {/* === SOMMAIRE DESKTOP === */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-light/70 p-5">
              <h3 className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Sommaire
              </h3>
              <nav className="space-y-2 text-sm">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => smoothScroll(e, s.id)}
                    className={`block rounded-lg px-3 py-2 transition ${
                      activeId === s.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-graywarm hover:text-primary hover:bg-light"
                    }`}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* === CONTENU PRINCIPAL === */}
          <div className="flex-1 space-y-16">

            {/* === SOMMAIRE MOBILE === */}
            <MobileSummary
              sections={SECTIONS}
              activeId={activeId}
              smoothScroll={smoothScroll}
            />

            {/* ================= COORDONNÉES ================= */}
            <SlideUp>
              <section
                id="coordonnees"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  Coordonnées
                </h2>

                <p className="text-graywarm mt-4">
                  Vous pouvez me contacter par téléphone, par e-mail ou via
                  Doctolib pour prendre rendez-vous.
                </p>

                <ul className="space-y-3 text-graywarm mt-4">
                  <li>
                    <span className="font-semibold text-primary">Téléphone :</span>{" "}
                    <a href={`tel:${PHONE_LINK}`} className="hover:underline">
                      {PHONE}
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-primary">E-mail :</span>{" "}
                    <a href={`mailto:${EMAIL}`} className="hover:underline">
                      {EMAIL}
                    </a>
                  </li>
                </ul>

                <a
                  href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid"
                  target="_blank"
                  className="mt-6 inline-block bg-primary text-offwhite px-8 py-3 rounded-lg hover:bg-secondary transition"
                >
                  Prendre rendez-vous sur Doctolib
                </a>
              </section>
            </SlideUp>

            {/* ================= FORMULAIRE ================= */}
            <SlideUp>
              <section
                id="formulaire"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  Formulaire de contact
                </h2>

                <p className="text-graywarm mt-4 mb-6">
                  Vous pouvez envoyer un message directement depuis ce formulaire.
                  Je vous répondrai dès que possible.
                </p>

                <ContactForm />
              </section>
            </SlideUp>

            {/* ================= INFOS PRATIQUES ================= */}
            <SlideUp>
              <section
                id="infos"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  Informations pratiques
                </h2>

                <div className="mt-6 space-y-6 text-graywarm">
                  <p>
                    <strong>Cabinet de Sèvres</strong> <br />
                    104 Grande Rue, 92310 Sèvres
                  </p>
                  <p>
                    <strong>Cabinet de Paris 15</strong> <br />
                    28 Rue Letellier, 75015 Paris
                  </p>
                  <p className="text-sm">
                    Les cabinets sont accessibles aux poussettes et adaptés aux
                    consultations nourrissons.
                  </p>
                </div>
              </section>
            </SlideUp>

            {/* ================= ADRESSE & ACCÈS ================= */}
            <SlideUp>
              <section
                id="acces"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Accès & Localisation
                </h2>

                <div className="mt-10 space-y-12">
                  {/* SÈVRES */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Cabinet de Sèvres
                    </h3>
                    <p className="text-graywarm">
                      104 Grande Rue, 92310 Sèvres <br />
                      Tram T2 • Gare Sèvres-Ville-d'Avray • Arrêts de bus à
                      proximité
                    </p>

                    <div className="mt-4 rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.352230992681!2d2.2178991!3d48.8210789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67aa75a5a7d2b%3A0xa4bbd6f480c4e45f!2s104%20Grande%20Rue%2C%2092310%20S%C3%A8vres!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                        className="w-full h-72 border-0"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>

                  {/* PARIS 15 */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Cabinet de Paris 15
                    </h3>
                    <p className="text-graywarm">
                      28 Rue Letellier, 75015 Paris <br />
                      Métro Commerce • Émile-Zola • La Motte-Picquet – Grenelle
                    </p>

                    <div className="mt-4 rounded-lg overflow-hidden shadow-xl">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.402089969294!2d2.2935342!3d48.8474188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701a1b3b4a3b%3A0x0000000000000000!2s28%20Rue%20Letellier%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                        className="w-full h-72 border-0"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ================= FAQ ================= */}
            <SlideUp>
              <section
                id="faq"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – Contact
                </h2>

                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Comment contacter Hilary ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Par téléphone, e-mail ou via le formulaire présent sur
                      cette page.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Où prendre rendez-vous ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Directement en ligne via Doctolib ou par téléphone.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Puis-je venir avec une poussette ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Oui, les deux cabinets sont adaptés pour accueillir les
                      parents et leur nourrisson.
                    </p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ================= CTA ================= */}
            <FadeIn>
              <section className="bg-primary text-offwhite rounded-2xl shadow-sm p-10 text-center">
                <h2 className="text-3xl font-semibold">
                  Besoin d'un rendez-vous ?
                </h2>
                <p className="mt-3 text-offwhite/80">
                  Je vous accueille à Sèvres et Paris 15 du lundi au samedi.
                </p>

                <a
                  href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid"
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

      {/* === Bouton retour en haut === */}
      {showBackToTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-4 md:right-6 z-40 bg-primary text-offwhite w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-lg hover:bg-secondary transition"
          aria-label="Revenir en haut"
        >
          ↑
        </button>
      )}
    </main>
  );
}
