"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { PHONE, PHONE_LINK, EMAIL } from "@/config/contact";
import ContactForm from "@/components/ContactForm";
import MobileSummary from "@/components/MobileSummary";
import BackToTop from "@/components/BackToTop";
import { FadeIn, SlideUp, HeroMotion } from "@/components/MotionWrapper";

const SECTIONS = [
  { id: "coordonnees", label: "Contact Details" },
  { id: "formulaire", label: "Contact Form" },
  { id: "infos", label: "Practical Info" },
  { id: "acces", label: "Access & Location" },
  { id: "faq", label: "Contact FAQ" },
];

export default function ContactEnPage() {
  const [activeId, setActiveId] = useState("coordonnees");

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 120,
      behavior: "smooth",
    });
  };

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
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const smoothScroll = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <main>
      <Script
        id="schema-contact-en"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/en/contact#page",
                url: "https://www.hilaryfarid-osteopathe.fr/en/contact",
                inLanguage: "en",
                name: "Contact – Hilary Farid Osteopath D.O.",
                description:
                  "Contact details and directions to Hilary Farid's clinics in Sèvres and Paris 15, Osteopath D.O. English spoken.",
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
                      name: "Home",
                      item: "https://www.hilaryfarid-osteopathe.fr/en",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Contact",
                      item: "https://www.hilaryfarid-osteopathe.fr/en/contact",
                    },
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/sevres#business",
                name: "Osteopathy Clinic – Sèvres",
                telephone: "+33 6 72 01 45 39",
                priceRange: "€60 – €90",
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
                sameAs: [
                  "https://www.doctolib.fr/osteopathe/sevres/hilary-farid",
                  "https://g.page/r/CfEVH_swFUP2EB0/review",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.hilaryfarid-osteopathe.fr/paris15#business",
                name: "Osteopathy Clinic – Paris 15",
                telephone: "+33 6 72 01 45 39",
                priceRange: "€60 – €90",
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
                sameAs: [
                  "https://www.doctolib.fr/osteopathe/paris/hilary-farid",
                  "https://share.google/fQuSNhyJKa5uEN5gK",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How can I contact Hilary?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "You can contact Hilary by phone, email, or via the contact form on this page — in English or French.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I book an appointment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Appointments are booked online via Doctolib or by phone.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Where are the clinics located?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Hilary sees patients at 104 Grande Rue in Sèvres and at 28 Rue Letellier in Paris 15.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are the clinics suitable for infants?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, both clinics are stroller-friendly and well-suited for infant consultations.",
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
            Contact & Appointments
          </h1>
          <p className="mt-4 text-light text-lg max-w-2xl mx-auto">
            A question, need some information, or unsure which treatment is right for you?
            I'll answer with care and attention — in English or French.
          </p>
          <div className="mt-8">
          <button
            type="button"
            className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
          >
            Book via Doctolib
          </button>
          </div>
        </HeroMotion>
      </section>

      {/* ============== WRAPPER SUMMARY + CONTENT ============== */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-light/70 p-5">
              <h3 className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Contents
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

          <div className="flex-1 space-y-16">

            <MobileSummary
              sections={SECTIONS}
              activeId={activeId}
              smoothScroll={smoothScroll}
              isEn
            />

            {/* ================= CONTACT DETAILS ================= */}
            <SlideUp>
              <section
                id="coordonnees"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  Contact Details
                </h2>

                <p className="text-graywarm mt-4">
                  You can reach me by phone, email or via Doctolib to book an appointment.
                </p>

                <ul className="space-y-3 text-graywarm mt-6">
                  <li>
                    <span className="font-semibold text-primary">Phone:</span>{" "}
                    <a href={`tel:${PHONE_LINK}`} className="hover:underline text-secondary font-medium">
                      +33 {PHONE}
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-primary">Email:</span>{" "}
                    <a href={`mailto:${EMAIL}`} className="hover:underline text-secondary font-medium">
                      {EMAIL}
                    </a>
                  </li>
                </ul>

              </section>
            </SlideUp>

            {/* ================= FORM ================= */}
            <SlideUp>
              <section
                id="formulaire"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  Contact Form
                </h2>

                <p className="text-graywarm mt-4 mb-6">
                  You can send me a message directly through this form.
                  I'll reply as soon as possible.
                </p>

                <ContactForm />
              </section>
            </SlideUp>

            {/* ================= PRACTICAL INFO ================= */}
            <SlideUp>
              <section
                id="infos"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary">
                  Practical Information
                </h2>

                <div className="mt-6 space-y-6 text-graywarm">
                  <p>
                    <strong className="text-primary">Sèvres Clinic</strong> <br />
                    104 Grande Rue, 92310 Sèvres, France
                  </p>
                  <p>
                    <strong className="text-primary">Paris 15 Clinic</strong> <br />
                    28 Rue Letellier, 75015 Paris, France
                  </p>
                  <p className="text-sm bg-light p-4 rounded-lg border border-primary/10">
                    Good to know: both clinics are stroller-accessible and well-suited for infant consultations.
                  </p>
                </div>
              </section>
            </SlideUp>

            {/* ================= ACCESS & LOCATION ================= */}
            <SlideUp>
              <section
                id="acces"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Access & Location
                </h2>

                <div className="mt-10 space-y-12">
                  {/* SÈVRES */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Sèvres Clinic
                    </h3>
                    <p className="text-graywarm">
                      104 Grande Rue, 92310 Sèvres <br />
                      Tram T2 • Sèvres-Ville-d'Avray station • Nearby bus stops
                    </p>

                    <div className="mt-4 rounded-lg overflow-hidden shadow-md border border-light">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.352230992681!2d2.2178991!3d48.8210789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67aa75a5a7d2b%3A0xa4bbd6f480c4e45f!2s104%20Grande%20Rue%2C%2092310%20S%C3%A8vres!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                        className="w-full h-72 border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>

                  {/* PARIS 15 */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Paris 15 Clinic
                    </h3>
                    <p className="text-graywarm">
                      28 Rue Letellier, 75015 Paris <br />
                      Metro: Commerce • Émile-Zola • La Motte-Picquet – Grenelle
                    </p>

                    <div className="mt-4 rounded-lg overflow-hidden shadow-md border border-light">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.402089969294!2d2.2935342!3d48.8474188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701a1b3b4a3b%3A0x0000000000000000!2s28%20Rue%20Letellier%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                        className="w-full h-72 border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
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
                  Contact FAQ
                </h2>

                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      How can I contact Hilary?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      By phone, email, or via the form on this page — in English or French.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Where do I book an appointment?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Directly online via Doctolib, or by phone.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Can I bring a stroller?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Yes, both clinics are set up to welcome parents and their infants.
                    </p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ================= CTA ================= */}
            <FadeIn>
              <section className="bg-primary text-offwhite rounded-2xl shadow-sm p-10 text-center">
                <h2 className="text-3xl font-semibold">
                  Need an appointment?
                </h2>
                <p className="mt-3 text-offwhite/90">
                  I welcome you in Sèvres and Paris 15, Monday to Saturday.
                </p>

                <button
                  type="button"
                  className="trigger-booking-modal mt-6 inline-block bg-doctolib text-white font-bold px-10 py-4 rounded-full hover:bg-doctolib-dark transition shadow-md"
                >
                  Book via Doctolib
                </button>
              </section>
            </FadeIn>
          </div>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
