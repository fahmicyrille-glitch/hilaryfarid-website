"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import MobileSummary from "@/components/MobileSummary";
import BackToTop from "@/components/BackToTop";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";

const SECTIONS = [
  { id: "intro", label: "Introduction" },
  { id: "qui", label: "Who am I?" },
  { id: "formations", label: "Training" },
  { id: "approche", label: "My approach" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Book an appointment" },
];

export default function AProposEnPage() {
  const [activeId, setActiveId] = useState("intro");

  /* ===== Scrollspy (IntersectionObserver) ===== */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveId(id);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
      {/* ======== JSON-LD ======== */}
      <Script
        id="ld-medicalwebpage-apropos-en"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id": "https://www.hilaryfarid-osteopathe.fr/en/a-propos#page",
                url: "https://www.hilaryfarid-osteopathe.fr/en/a-propos",
                inLanguage: "en",
                name: "About – Hilary Farid, Osteopath D.O.",
                description:
                  "Introducing Hilary Farid, Osteopath D.O. practising in Sèvres and Paris 15. Training, therapeutic approach, and expertise in infants, pregnant women, adults and athletes.",
                image: "https://www.hilaryfarid-osteopathe.fr/hilary.webp",
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
                      name: "About",
                      item: "https://www.hilaryfarid-osteopathe.fr/en/a-propos",
                    },
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Is Hilary experienced with infants?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, she cares for infants with feeding and latching difficulties, breastfeeding issues, jaw tension, asymmetries and tongue-ties.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What therapeutic approach does Hilary use?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "A gentle, comprehensive and personalised approach, adapted to babies, children, adults, athletes and pregnant women.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Hilary offer Renata França lymphatic drainage?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, she has been officially trained in the Renata França method since 2023.",
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

      {/* ================= HERO (CRO Optimised) ================= */}
      <section
        id="intro"
        className="bg-primary text-offwhite py-16 md:py-20 text-center px-6 relative overflow-hidden"
      >
        {/* Decorative overlay */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />

        <div className="relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Get to know me
            </h1>
            <p className="mt-4 text-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A qualified Osteopath D.O., I support you with gentleness and attentive listening, through a practice adapted to infants, pregnant women, adults and athletes.
            </p>

            {/* ⭐ IMMEDIATE SOCIAL PROOF ⭐ */}
            <div className="mt-6 mb-8 flex flex-col items-center justify-center gap-1">
              <div className="flex text-amber-400 text-xl tracking-widest drop-shadow-md">
                ★★★★★
              </div>
              <span className="text-offwhite/90 text-sm font-medium tracking-wide">
                {GLOBAL_REVIEW_RATING}/5 on Google ({GLOBAL_REVIEW_COUNT} reviews, Sèvres & Paris 15)
              </span>
            </div>

            <button
              type="button"
              className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
            >
              Book via Doctolib
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ================= WRAPPER SUMMARY + CONTENT ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">

          {/* ==== SUMMARY (DESKTOP) ==== */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-light p-5">
              <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                Contents
              </h3>

              <nav className="space-y-2 text-sm">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => smoothScroll(e, s.id)}
                    className={`block px-3 py-2 rounded-lg transition ${
                      activeId === s.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-graywarm hover:bg-light hover:text-primary"
                    }`}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ==== CONTENT ==== */}
          <div className="flex-1 space-y-16">

            {/* MOBILE SUMMARY */}
            <MobileSummary
              sections={SECTIONS}
              activeId={activeId}
              smoothScroll={smoothScroll}
              isEn={true}
            />

            {/* ================= WHO AM I (With Photo & Larger Text) ================= */}
            <SlideUp>
              <section
                id="qui"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">

                  {/* Profile picture */}
                  <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl shadow-md overflow-hidden">
                    <Image
                      src="/hilary.webp"
                      alt="Hilary Farid, Osteopath D.O."
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  {/* Introduction text */}
                  <div>
                    <h2 className="text-3xl font-semibold text-primary">
                      Who am I?
                    </h2>
                    <div className="text-graywarm mt-6 space-y-4 text-lg leading-relaxed">
                      <p>
                        I'm <strong>Hilary Farid</strong>, Osteopath D.O. practising in Sèvres and Paris 15.
                      </p>
                      <p>
                        Passionate about people, movement and comprehensive care, I'm committed to offering a practice that is <strong>gentle, precise and safe</strong>.
                      </p>
                      <p>
                        My approach adapts to every stage of life: whether you're an adult dealing with back pain, an athlete in recovery, a pregnant woman seeking comfort, or a parent wanting a check-up for your infant.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ================= TRAINING ================= */}
            <SlideUp>
              <section
                id="formations"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <div id="formations" className="h-[1px]"></div>
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Training & Expertise
                </h2>

                <div className="mt-12 max-w-5xl mx-auto space-y-8">
                  {/* ===== Osteopathy card (FULL WIDTH) ===== */}
                  <FadeIn delay={0.1}>
                    <div className="p-6 border border-light/80 rounded-xl bg-offwhite/50 shadow-sm">
                      <h3 className="text-2xl font-semibold text-primary">
                        Osteopathy (D.O.)
                      </h3>
                      <p className="text-secondary font-medium text-sm mt-1">
                        Institut Dauphine d'Ostéopathie – Paris (IDO Paris) – 2021
                      </p>

                      <ul className="mt-5 text-graywarm text-base md:text-lg space-y-2 list-disc list-inside">
                        <li>Full-time five-year training programme</li>
                        <li>Osteopathy diploma accredited RNCP Level 7 (France)</li>
                        <li>In-depth studies in anatomy, physiology and biomechanics</li>
                        <li>Supervised clinical practice with real patients</li>
                        <li>Structural, visceral, cranial & fascial techniques</li>
                        <li>Care for infants, pregnant women, athletes & adults</li>
                      </ul>
                    </div>
                  </FadeIn>

                  {/* ===== Other training grid ===== */}
                  <div className="grid md:grid-cols-2 gap-6">

                    {/* Infants – Paediatrics */}
                    <FadeIn delay={0.2}>
                      <div className="p-6 border border-light/80 rounded-xl bg-offwhite/50 shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Infants – Paediatrics
                        </h3>
                        <p className="text-secondary font-medium text-sm mt-1">
                          Centre YGY – Catherine Rybus — 2023
                        </p>
                        <ul className="mt-4 text-graywarm text-base space-y-2 list-disc list-inside">
                          <li>Infant care (0 to 1 year)</li>
                          <li>Tension, asymmetries, reflux, colic</li>
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Feeding/latching disorders */}
                    <FadeIn delay={0.3}>
                      <div className="p-6 border border-light/80 rounded-xl bg-offwhite/50 shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Feeding & Latching Disorders
                        </h3>
                        <p className="text-secondary font-medium text-sm mt-1">
                          Centre YGY – Catherine Rybus — 2024
                        </p>
                        <ul className="mt-4 text-graywarm text-base space-y-2 list-disc list-inside">
                          <li>Breastfeeding and jaw tension</li>
                          <li>Tongue and lip ties (pre & post frenectomy)</li>
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Pregnancy & Post-partum */}
                    <FadeIn delay={0.4}>
                      <div className="p-6 border border-light/80 rounded-xl bg-offwhite/50 shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Pregnancy & Post-partum
                        </h3>
                        <p className="text-secondary font-medium text-sm mt-1">
                          CFPCO — 2025
                        </p>
                        <ul className="mt-4 text-graywarm text-base space-y-2 list-disc list-inside">
                          <li>Pelvic & lower back pain</li>
                          <li>Breathing & mobility (from discomfort to wellbeing)</li>
                        </ul>
                      </div>
                    </FadeIn>

                    {/* Renata França Drainage */}
                    <FadeIn delay={0.5}>
                      <div className="p-6 border border-light/80 rounded-xl bg-offwhite/50 shadow-sm h-full">
                        <h3 className="text-xl font-semibold text-primary">
                          Lymphatic Drainage
                        </h3>
                        <p className="text-secondary font-medium text-sm mt-1">
                          SPA Renata França — 2023
                        </p>
                        <p className="mt-4 text-graywarm text-base">
                          Official training in the Renata França drainage method.
                        </p>
                      </div>
                    </FadeIn>

                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ================= APPROACH ================= */}
            <SlideUp>
              <section
                id="approche"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  My approach
                </h2>

                <div className="mt-10 space-y-6 text-graywarm text-lg leading-relaxed max-w-3xl mx-auto">
                  <p>
                    <strong>Every patient is unique.</strong> I take the time to listen to your story, understand your pain and analyse your posture, so I can offer a precise treatment that targets the root of the problem rather than just the symptom.
                  </p>
                  <p>
                    My techniques (structural, visceral, cranial and fascial) are always applied with respect and gentleness, fully tailored to your needs at the time.
                  </p>
                  <p>
                    The ultimate goal? To give you lasting relief, restore the mobility of your tissues, and help you regain optimal bodily balance.
                  </p>
                </div>
              </section>
            </SlideUp>

            {/* ================= FAQ ================= */}
            <SlideUp>
              <section
                id="faq"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – About
                </h2>

                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-5 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer text-lg">
                      Is Hilary experienced with infants?
                    </summary>
                    <p className="mt-3 text-graywarm text-base leading-relaxed">
                      Yes, she is trained in feeding and latching difficulties, breastfeeding, jaw tension and tongue-ties.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-5 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer text-lg">
                      What type of approach does Hilary use?
                    </summary>
                    <p className="mt-3 text-graywarm text-base leading-relaxed">
                      A gentle, comprehensive and personalised osteopathic approach, adapted to every age and body type.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-5 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer text-lg">
                      Is she trained in Renata França drainage?
                    </summary>
                    <p className="mt-3 text-graywarm text-base leading-relaxed">
                      Yes, she is officially trained in the Renata França method, combining the effectiveness of the treatment with the safety of anatomical expertise.
                    </p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ================= FINAL CTA ================= */}
            <FadeIn>
              <section
                id="cta"
                className="bg-primary text-offwhite rounded-2xl shadow-sm p-10 text-center"
              >
                <h2 className="text-3xl font-semibold">Need an appointment?</h2>
                <p className="mt-4 text-offwhite/90 text-lg">
                  I welcome you in my clinics in Sèvres and Paris 15.
                </p>

                <button
                  type="button"
                  className="trigger-booking-modal mt-8 inline-block bg-doctolib text-white font-bold px-10 py-4 rounded-full hover:bg-doctolib-dark transition shadow-md"
                >
                  Book a session
                </button>
              </section>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* === Back-to-top button via the global component === */}
      <BackToTop />
    </main>
  );
}
