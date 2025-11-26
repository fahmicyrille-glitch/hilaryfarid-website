"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import { FadeIn, SlideUp, HeroMotion } from "@/components/MotionWrapper";
import { PHONE, PHONE_LINK, EMAIL } from "@/config/contact";
import SEO from "@/components/SEO";

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

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "coordonnees";

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const offset = el.offsetTop - 140;
          if (scrollY >= offset) current = section.id;
        }
      }

      setActiveId(current);
      setShowBackToTop(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
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
      <SEO
        title="Contact & prise de rendez-vous – Ostéopathe Sèvres & Paris 15"
        description="Contact, informations et prise de rendez-vous pour les cabinets d’ostéopathie à Sèvres et Paris 15."
        canonical="/contact"
        image="/og-image.jpg"
      />

      {/* == JSON-LD : ContactPage + Physician + FAQ == */}
      <Script
        id="schema-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/contact#page",
                name: "Contact – Hilary Farid Ostéopathe DO",
                url: "https://www.hilaryfarid-osteopathe.fr/contact",
                description:
                  "Coordonnées, informations et formulaire de contact pour Hilary Farid, Ostéopathe DO à Sèvres et Paris 15.",
                mainEntity: {
                  "@type": "Physician",
                  name: "Hilary Farid",
                  telephone: "+33 6 72 01 45 39",
                  email: "contact@hilaryfarid-osteopathe.fr",
                  image: "https://www.hilaryfarid-osteopathe.fr/Hilary.png",
                  medicalSpecialty: [
                    "Osteopathy",
                    "PregnancyCare",
                    "Pediatric",
                    "SportsMedicine",
                  ],
                },
              },
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
                        "Les rendez-vous se prennent en ligne via Doctolib, ou par téléphone si vous préférez un contact direct.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Où se trouvent les cabinets ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Hilary consulte au 104 Grande Rue à Sèvres (92310) et au 28 Rue Letellier à Paris 15 (75015).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Est-ce possible de venir avec une poussette ou un nourrisson ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Oui, les deux cabinets sont adaptés aux nourrissons et aux parents avec poussette.",
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
            Une question, un besoin d’information ou un doute sur votre motif ?
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
            <div className="lg:hidden mb-4">
              <div className="bg-white rounded-2xl border border-light/70 p-4">
                <h2 className="text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
                  Sommaire
                </h2>
                <div className="flex flex-wrap gap-2 text-xs">
                  {SECTIONS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => smoothScroll({ preventDefault: () => {} }, s.id)}
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

            {/* ================= FORMULAIRE DE CONTACT ================= */}
            <SlideUp>
              <section
                id="formulaire"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  Formulaire de contact
                </h2>

                <p className="text-graywarm mt-4 mb-6">
                  Vous pouvez envoyer un message directement depuis ce
                  formulaire. Je vous répondrai dès que possible.
                </p>

                <form
                  action="https://formsubmit.co/hilaryfarid.osteopathe@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nouveau message depuis le site Hilary Farid"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    required
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre e-mail"
                    required
                    className="w-full p-3 border rounded-lg"
                  />
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    rows={5}
                    required
                    className="w-full p-3 border rounded-lg"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-primary text-offwhite py-3 rounded-lg hover:bg-secondary transition"
                  >
                    Envoyer le message
                  </button>
                </form>
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
                      Tram T2 • Gare Sèvres-Ville-d’Avray • Arrêts de bus à
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
                  Besoin d’un rendez-vous ?
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


