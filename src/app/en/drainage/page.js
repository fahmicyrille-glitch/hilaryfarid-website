import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import DrainageCarousel from "@/components/DrainageCarousel";
import BackToTop from "@/components/BackToTop";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Faq from "@/components/Faq";
import DrainageNav from "@/components/DrainageNav";
import { IconPhone, IconAlert } from "@/components/icons/UiIcons";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING, SEVRES_RATING, PARIS15_RATING } from "@/config/siteConfig";
import { hreflangForEn } from "@/config/i18n";

import {
  IconLegs,
  IconCellulite,
  IconDetox,
  IconRelax,
  IconImmunity,
  IconDigestion,
  IconRecovery,
  IconPregnancy,
  IconFertility,
} from "@/components/icons/BenefitIcons";

export const metadata = {
  title: "Renata França Lymphatic Drainage in Paris (Sèvres & Paris 15)",
  description:
    "Renata França lymphatic drainage: lightness, comfort, possible improvement of water retention. Sessions in Paris 15 and Sèvres. A manual technique different from medically reimbursed lymphatic drainage. English spoken.",
  alternates: hreflangForEn("/en/drainage"),
};

export default function DrainageEnPage() {

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/drainage#page",
              url: "https://www.hilaryfarid-osteopathe.fr/en/drainage",
              inLanguage: "en",
              name: "Renata França Lymphatic Drainage – Hilary Farid Osteopath D.O.",
              description:
                "Renata França lymphatic drainage: wellness, a feeling of lightness, possible improvement of water retention. Sessions in Paris 15 and Sèvres. A manual technique different from medically reimbursed lymphatic drainage.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hilaryfarid-osteopathe.fr/en" },
                  { "@type": "ListItem", position: 2, name: "Renata França Drainage", item: "https://www.hilaryfarid-osteopathe.fr/en/drainage" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/drainage#service",
              serviceType: "Renata França Drainage (Renata França method)",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
              areaServed: ["Paris 15", "Sèvres"],
              description:
                "A Renata França drainage session performed by Hilary Farid, Osteopath D.O. A specific manual technique, different from medical lymphatic drainage. Goals: a feeling of lightness, circulatory comfort, relaxation.",
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres",
              name: "Osteopathy Clinic – Sèvres",
              telephone: "+33672014539",
              logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
              image: "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-1.webp",
              address: { "@type": "PostalAddress", streetAddress: "104 Grande Rue", postalCode: "92310", addressLocality: "Sèvres", addressCountry: "FR" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: SEVRES_RATING.ratingValue, reviewCount: SEVRES_RATING.reviewCount },
              makesOffer: { "@type": "Service", "@id": "https://www.hilaryfarid-osteopathe.fr/drainage#service" },
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15",
              name: "Osteopathy Clinic – Paris 15",
              telephone: "+33672014539",
              logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
              image: "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
              address: { "@type": "PostalAddress", streetAddress: "28 Rue Letellier", postalCode: "75015", addressLocality: "Paris", addressRegion: "Île-de-France", addressCountry: "FR" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: PARIS15_RATING.ratingValue, reviewCount: PARIS15_RATING.reviewCount },
              makesOffer: { "@type": "Service", "@id": "https://www.hilaryfarid-osteopathe.fr/drainage#service" },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How many sessions before feeling a difference with Renata França drainage?",
                  acceptedAnswer: { "@type": "Answer", text: "Many patients describe a feeling of lightness from the very first session. The number of sessions needed depends on your goal and how you respond." },
                },
                {
                  "@type": "Question",
                  name: "Is Renata França drainage painful?",
                  acceptedAnswer: { "@type": "Answer", text: "The technique is dynamic and firm while remaining comfortable. The intensity is always adapted to your sensitivity." },
                },
                {
                  "@type": "Question",
                  name: "Is Renata França drainage reimbursed by French health insurance?",
                  acceptedAnswer: { "@type": "Answer", text: "No. Renata França drainage is a wellness practice, different from medical lymphatic drainage prescribed by a doctor and reimbursed by French Social Security. It is not reimbursed, in France or abroad." },
                },
                {
                  "@type": "Question",
                  name: "Can I have Renata França drainage during pregnancy?",
                  acceptedAnswer: { "@type": "Answer", text: "Depending on your stage of pregnancy and situation, it may be considered to improve circulatory comfort. Medical advice is recommended if in doubt." },
                },
                {
                  "@type": "Question",
                  name: "What are the main contraindications?",
                  acceptedAnswer: { "@type": "Answer", text: "Fever/acute infection, phlebitis/thrombotic risk, unstable (uncontrolled) medical conditions, very recent surgery depending on medical advice. If in doubt, contact me before booking." },
                },
              ],
            },
          ])
        }}
      />

      <DrainageNav />

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 px-6 xl:pl-72">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3">
                Lymphatic Drainage • Renata França Method
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
                Lightness, comfort <br /> & a visibly slimmer figure.
              </h1>

              <p className="mt-6 text-lg text-graywarm leading-relaxed">
                Combining the striking effectiveness of the <strong>Renata França</strong> method with the anatomical expertise of an <strong>Osteopath D.O.</strong> Deep, precise, safe drainage to boost your metabolism, relieve heavy legs and sculpt your figure. English spoken throughout.
              </p>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex text-amber-400 text-lg drop-shadow-sm">
                  ★★★★★
                </div>
                <span className="text-graywarm text-sm font-medium">
                  {GLOBAL_REVIEW_RATING}/5 on Google ({GLOBAL_REVIEW_COUNT} reviews, Sèvres & Paris 15)
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="trigger-booking-modal bg-doctolib text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-doctolib-dark transition"
                >
                  Book via Doctolib
                </button>
                <a
                  href="#bienfaits"
                  className="inline-flex items-center text-primary font-medium underline underline-offset-4 hover:text-secondary"
                >
                  Discover the benefits
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["A feeling of lightness", "from session 1"],
                  ["A dynamic method", "adapted to you"],
                  ["Two locations", "Paris 15 & Sèvres"],
                ].map(([t, s]) => (
                  <div key={t} className="rounded-xl border bg-white p-3 shadow-sm">
                    <p className="text-sm font-semibold text-primary">{t}</p>
                    <p className="text-xs text-graywarm mt-1">{s}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 bg-white border border-light/60 rounded-xl px-4 py-2.5 shadow-sm">
                  <span className="text-xl font-bold text-primary">€160</span>
                  <span className="text-xs text-graywarm leading-tight">Paris 15<br/>(full body)</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-light/60 rounded-xl px-4 py-2.5 shadow-sm">
                  <span className="text-xl font-bold text-primary">€180</span>
                  <span className="text-xs text-graywarm leading-tight">Sèvres<br/>(full body)</span>
                </div>
                <a href="/en/tarifs" className="text-xs text-secondary font-semibold underline underline-offset-4 hover:text-primary">
                  See all pricing →
                </a>
              </div>
            </div>

            <div className="relative w-full h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/drainage/drainage_ventre.webp"
                alt="Renata França drainage by Hilary Farid, osteopath in Sèvres and Paris 15"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= WHAT IS LYMPH ========= */}
      <SlideUp>
        <section id="presentation" className="py-20 px-6 xl:pl-72 bg-light">
          <div className="max-w-5xl mx-auto">

            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-semibold text-primary">
                What is lymph, exactly?
              </h2>

              <p className="mt-4 text-base text-graywarm leading-relaxed">
                The lymphatic system is a network essential to the body's balance.
                It plays a role in <strong>immunity</strong>, <strong>fluid drainage</strong>,
                the <strong>elimination of certain waste products</strong>, and
                <strong> digestive comfort</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">

              <div className="rounded-2xl border bg-white p-7 shadow-sm">
                <p className="text-ms uppercase tracking-[0.25em] text-secondary">
                  When lymph flow slows down
                </p>

                <ul className="mt-4 text-base text-graywarm space-y-3 list-disc list-inside">
                  <li>A feeling of heavy legs and water retention</li>
                  <li>Swelling, discomfort, fatigue</li>
                  <li>Bloating and slower digestion</li>
                  <li>More visible cellulite</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-primary/5 p-7">
                <h3 className="text-xl font-semibold text-primary">
                  A dynamic manual method
                </h3>

                <p className="mt-3 text-base text-graywarm leading-relaxed">
                  <strong>Renata França</strong> drainage is a precise, rhythmic
                  technique designed to stimulate lymphatic circulation and
                  promote a <strong>feeling of lightness</strong> and greater
                  bodily ease.
                </p>

                <p className="mt-4 text-base text-graywarm">
                  The treatment covers the whole body:
                  <strong> legs, stomach, arms and back</strong>.
                </p>
              </div>

            </div>
          </div>
        </section>

      </SlideUp>

      {/* ========= BENEFITS ========= */}
      <SlideUp>
        <section id="bienfaits" className="py-16 px-6 xl:pl-72 bg-offwhite">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-primary">
                Most sought-after benefits
              </h2>
              <p className="mt-4 text-graywarm">
                Effects vary from person to person. The goal is to promote comfort,
                lightness and overall wellbeing.
              </p>
            </div>

            <div className="mt-6 text-center">
              <a
                href="/en/drainage/bienfaits"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary underline underline-offset-4 hover:text-primary transition-colors"
              >
                Full guide to the benefits →
              </a>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Heavy Legs",
                  text: "Helps reduce the feeling of heaviness and water retention.",
                  icon: IconLegs,
                },
                {
                  title: "Cellulite",
                  text: "May help improve the appearance of cellulite and firm the skin.",
                  icon: IconCellulite,
                },
                {
                  title: "Detoxification",
                  text: "Helps the body eliminate certain stored waste and toxins.",
                  icon: IconDetox,
                },
                {
                  title: "Stress & Fatigue",
                  text: "A relaxing effect: relief, recovery, a feeling of letting go.",
                  icon: IconRelax,
                },
                {
                  title: "Immunity",
                  text: "As the lymphatic system is linked to immunity, the goal is to support its function.",
                  icon: IconImmunity,
                },
                {
                  title: "Digestion",
                  text: "May help reduce bloating and improve digestive comfort.",
                  icon: IconDigestion,
                },
                {
                  title: "Healing / Post-Surgery",
                  text: "In some contexts, may support recovery (subject to medical advice).",
                  icon: IconRecovery,
                },
                {
                  title: "Pregnancy",
                  text: "Depending on the stage, may help relieve circulatory discomfort and swelling.",
                  icon: IconPregnancy,
                },
                {
                  title: "Fertility / IVF",
                  text: "May contribute to overall wellbeing and stress management (supportive care).",
                  icon: IconFertility,
                },
              ].map((b) => (
                <FadeIn key={b.title}>
                  <article className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <b.icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-semibold text-primary">
                        {b.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-base text-graywarm leading-relaxed">
                      {b.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= CAROUSEL ========= */}
      <SlideUp>
        <section className="py-16 px-6 xl:pl-72 bg-light">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary">
              Drainage in pictures
            </h2>

            <p className="mt-4 text-graywarm max-w-2xl mx-auto">
              Precise movements, dynamic manual techniques and a respectful
              approach to the body, adapted to each area.
            </p>

            <div className="mt-10">
              <DrainageCarousel />
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= HOW A SESSION WORKS ========= */}
      <SlideUp>
        <section id="deroulement" className="py-16 px-6 xl:pl-72 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              How does a session work?
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1. Discussion",
                  title: "Assessment & goals",
                  text: "Together we define your expectations: comfort, lightness, water retention, recovery…",
                },
                {
                  step: "2. Drainage",
                  title: "Renata França Technique",
                  text: "Dynamic, precise movements, adapted to your sensitivity.",
                },
                {
                  step: "3. Advice",
                  title: "After the session",
                  text: "Simple tips to optimise your comfort and prolong the feeling of lightness and fluidity.",
                },
              ].map((c) => (
                <FadeIn key={c.step}>
                  <div className="bg-white rounded-2xl border p-6 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.25em] text-secondary">
                      {c.step}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-primary">
                      {c.title}
                    </h3>

                    <p className="mt-3 text-base text-graywarm leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-graywarm leading-relaxed">
                Many patients describe a <strong>feeling of lightness</strong> from
                the very first session. The ideal frequency depends on your goal and how you respond.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= WHO IS IT FOR ========= */}
      <SlideUp>
        <section id="pour-qui" className="py-16 px-6 xl:pl-72 bg-light">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                Who is Renata França drainage for?
              </h2>
              <p className="mt-4 text-graywarm leading-relaxed">
                Renata França drainage is often chosen for comfort, aesthetics and wellbeing.
                I adapt it to your situation and sensitivity.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Pregnancy & Post-partum",
                  "Sports Recovery",
                  "Sedentary Lifestyle & Remote Work",
                  "Hormonal Changes (IVF, Menopause)",
                  "Heavy Legs & Retention",
                  "Pre/Post-Surgery Recovery",
                ].map((t) => (
                  <div key={t} className="rounded-2xl border bg-white p-4 shadow-sm flex items-center">
                    <p className="text-sm font-medium text-primary">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/drainage/drainage_jambe.webp"
                  alt="Renata França drainage session on the legs – Hilary Farid's clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-primary">Goal: comfort & consistency</h3>
                <p className="mt-2 text-sm text-graywarm leading-relaxed">
                  Some people come occasionally (hot weather, fatigue, water
                  retention), others prefer regular sessions based on their needs.
                </p>
                <div className="mt-5">
                  <button
                    type="button"
                    className="trigger-booking-modal inline-flex items-center justify-center bg-doctolib text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-doctolib-dark transition w-full"
                  >
                    Book via Doctolib
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= WHY CHOOSE ME ========= */}
      <SlideUp>
        <section id="pourquoi-moi" className="py-16 px-6 xl:pl-72 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Why book Renata França drainage with me?
            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-6 text-graywarm leading-relaxed">
              {[
                {
                  title: "The safety of an Osteopath D.O.",
                  text: "Unlike a standard spa or beauty salon, my in-depth knowledge of anatomy and the vascular system lets me perfectly adapt pressure and movements to your physiology.",
                },
                {
                  title: "The Renata França Method",
                  text: "A structured, dynamic and recognised technique, aiming for lightness and wellbeing.",
                },
                {
                  title: "Clear Explanations",
                  text: "You'll leave with simple advice (hydration, pace, expected sensations) to optimise your comfort. Explanations available in English.",
                },
                {
                  title: "Two Convenient Locations",
                  text: "Sessions in Paris 15 and Sèvres, near public transport. Quick booking via Doctolib.",
                },
              ].map((c) => (
                <FadeIn key={c.title}>
                  <div className="p-6 rounded-2xl bg-white shadow-sm border h-full">
                    <h3 className="font-semibold text-primary text-lg">{c.title}</h3>
                    <p className="mt-2 text-sm">{c.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= BEFORE / AFTER ========= */}
      <SlideUp>
        <section id="avant-apres" className="py-16 px-6 xl:pl-72 bg-light">
          <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-3xl font-semibold text-primary">
              Before / After Results
            </h2>

            <p className="mt-4 text-graywarm max-w-2xl mx-auto">
              Visual illustrations for reference only. Results may vary
              depending on the individual, context and session frequency.
            </p>

            <p className="mt-2 text-sm font-medium text-secondary">
              Drag the slider to compare ✦
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
              <div className="rounded-2xl bg-white p-6 shadow-sm border">
                <div className="max-w-[340px] mx-auto">
                  <BeforeAfterSlider
                    before="/drainage/ba_jambe_avant.png"
                    after="/drainage/ba_jambe_apres.png"
                    alt="Renata França leg drainage – results by Hilary Farid"
                    aspect={432 / 1060}
                  />
                </div>
                <p className="mt-3 text-xs text-graywarm">
                  Visual example – a feeling of lightness and reduced swelling.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border">
                <div className="max-w-[420px] mx-auto">
                  <BeforeAfterSlider
                    before="/drainage/ba_ventre_avant.png"
                    after="/drainage/ba_ventre_apres.png"
                    alt="Renata França stomach drainage – results by Hilary Farid"
                    aspect={432 / 648}
                  />
                </div>
                <p className="mt-3 text-xs text-graywarm">
                  Visual example – possible improvement in abdominal comfort.
                </p>
              </div>
            </div>

            <div className="mt-8 max-w-3xl mx-auto rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-graywarm leading-relaxed flex items-start gap-2 text-left">
                <IconAlert className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>These images are not a promise of results.
                Renata França drainage is a wellness practice.
                Effects felt depend on each individual and their situation.</span>
              </p>
            </div>

          </div>
        </section>
      </SlideUp>

      {/* ========= CONTRAINDICATIONS ========= */}
      <SlideUp>
        <section id="contraindications" className="py-16 px-6 xl:pl-72 bg-offwhite">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Contraindications & Precautions
            </h2>

            <p className="mt-6 text-graywarm text-center max-w-2xl mx-auto">
              Drainage is generally well tolerated, but some situations require
              caution or prior medical advice.
              If in doubt, contact me before booking.
            </p>

            <ul className="mt-8 space-y-3 text-graywarm list-disc list-inside text-sm">
              <li>High fever, acute infection</li>
              <li>Phlebitis / suspected thrombosis / thrombotic risk</li>
              <li>Unusual pain, significant inflammation</li>
              <li>Unstable (uncontrolled) medical condition: medical advice recommended</li>
              <li>Very recent surgery: subject to your surgeon's advice</li>
            </ul>

            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-graywarm flex items-center gap-2">
                <IconPhone className="w-4 h-4 text-primary shrink-0" />
                If you're unsure:{" "}
                <a className="text-primary font-medium underline underline-offset-4" href="tel:+33672014539">
                  +33 6 72 01 45 39
                </a>
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FAQ ========= */}
      <SlideUp>
        <section id="faq" className="py-16 px-6 xl:pl-72 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              FAQ
            </h2>

            <div className="mt-10">
              <Faq
                items={[
                  {
                    q: "How many sessions before I feel a difference?",
                    a: "Many patients describe a feeling of lightness from the very first session. Frequency depends on your goal and how you respond.",
                  },
                  {
                    q: "Is it painful?",
                    a: "The technique is dynamic and firm while remaining comfortable. I always adapt the intensity to your sensitivity.",
                  },
                  {
                    q: "Can I have drainage during pregnancy?",
                    a: "Depending on your stage and situation, it may be considered to improve circulatory comfort. If in doubt, medical advice may be recommended.",
                  },
                  {
                    q: "How is it different from a regular massage?",
                    a: "Renata França drainage follows a circulatory logic (specific movements) and mainly targets a feeling of lightness and comfort, beyond simple relaxation.",
                  },
                  {
                    q: "What should I do after the session?",
                    a: "Stay hydrated, take a gentle walk if possible, and listen to your body. I'll give you advice tailored to your situation.",
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FINAL CTA ========= */}
      <FadeIn>
        <section id="cta" className="py-16 px-6 xl:pl-72 text-center bg-offwhite">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary">
              Ready to feel light again?
            </h2>
            <p className="mt-4 text-graywarm">
              Book your Renata França lymphatic drainage session in a few clicks. <br/>
              Locations in <strong>Paris 15</strong> and <strong>Sèvres</strong>.
            </p>
            <p className="mt-2 text-sm text-graywarm">
              A session lasts about <strong>90 minutes</strong> – book online via Doctolib.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="trigger-booking-modal bg-doctolib text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-doctolib-dark transition"
              >
                Book via Doctolib
              </button>
              <a
                href="/en/tarifs"
                className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:text-secondary"
              >
                See pricing
              </a>
            </div>

            <p className="mt-6 text-xs text-graywarm">
              *Renata França drainage is a wellness practice. Effects may vary between individuals.
              This content does not replace medical advice.
            </p>
          </div>
        </section>
      </FadeIn>

      <BackToTop />

    </main>
  );
}
