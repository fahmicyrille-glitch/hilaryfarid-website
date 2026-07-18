import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import {
  IconAlert,
  IconBone,
  IconBadgeCheck,
  IconMapPin,
  IconStar,
} from "@/components/icons/UiIcons";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";
import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Benefits of Renata França Drainage",
  description:
    "Full guide to the benefits of Renata França drainage: lighter legs, cellulite, water retention, immunity, pregnancy, recovery. Sessions in Paris 15 and Sèvres. English spoken.",
  alternates: hreflangForEn("/en/drainage/bienfaits"),
};

export default function DrainageBienfaitsEnPage() {
  return (
    <main className="pb-16 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hilaryfarid-osteopathe.fr/en" },
                { "@type": "ListItem", position: 2, name: "Renata França Drainage", item: "https://www.hilaryfarid-osteopathe.fr/en/drainage" },
                { "@type": "ListItem", position: 3, name: "Benefits", item: "https://www.hilaryfarid-osteopathe.fr/en/drainage/bienfaits" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/drainage/bienfaits#page",
              url: "https://www.hilaryfarid-osteopathe.fr/en/drainage/bienfaits",
              inLanguage: "en",
              name: "Benefits of Renata França Drainage – Hilary Farid D.O.",
              description: "Full guide to the benefits of Renata França drainage: light legs, cellulite, water retention, immunity, pregnancy, recovery. Sessions in Paris 15 and Sèvres.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What are the main benefits of Renata França drainage?",
                  acceptedAnswer: { "@type": "Answer", text: "The most sought-after benefits are: a feeling of lighter legs, reduced water retention, an improved appearance of cellulite, deep relaxation, immune support, better digestive comfort, and recovery after surgery or sport." },
                },
                {
                  "@type": "Question",
                  name: "After how many sessions do you feel the benefits?",
                  acceptedAnswer: { "@type": "Answer", text: "Most patients feel immediate lightness from the very first session. For longer-lasting effects on water retention or cellulite, a course of 3 to 5 sessions is generally recommended." },
                },
                {
                  "@type": "Question",
                  name: "Is Renata França drainage effective against cellulite?",
                  acceptedAnswer: { "@type": "Answer", text: "It helps eliminate water-related cellulite, caused by excess fluid, since drainage helps decongest the whole body." },
                },
                {
                  "@type": "Question",
                  name: "Can I have Renata França drainage during pregnancy?",
                  acceptedAnswer: { "@type": "Answer", text: "Depending on your stage of pregnancy and situation, drainage may be considered to improve circulatory comfort, reduce pregnancy-related swelling, and provide a relaxing effect. Medical advice is recommended if in doubt." },
                },
                {
                  "@type": "Question",
                  name: "What's the difference between Renata França drainage and medically reimbursed lymphatic drainage?",
                  acceptedAnswer: { "@type": "Answer", text: "Renata França drainage is a wellness practice, different from medical lymphatic drainage prescribed by a doctor and reimbursed by French Social Security. It is not covered by health insurance. It is intended for healthy individuals wishing to improve their comfort and wellbeing. It is a comprehensive method covering the whole body except the face, working thoroughly on the lymphatic system — a system that naturally tends to store fluid and eliminate it slowly." },
                },
              ],
            },
          ])
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-offwhite border-b border-light/50 px-6 py-3">
        <div className="max-w-5xl mx-auto text-sm text-graywarm flex items-center gap-2 flex-wrap">
          <Link href="/en" className="hover:text-primary transition-colors">Home</Link>
          <span className="text-light">/</span>
          <Link href="/en/drainage" className="hover:text-primary transition-colors">Renata França Drainage</Link>
          <span className="text-light">/</span>
          <span className="text-primary font-medium">Benefits</span>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
                Renata França Drainage · Full Guide
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Benefits of Renata França<br /> Drainage
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Light legs, cellulite, water retention, recovery, immunity… Discover all the benefits of Renata França drainage practised by <strong>Hilary Farid</strong>, Osteopath D.O. in Paris 15 and Sèvres. English spoken.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <div className="flex text-amber-400 text-xl">★★★★★</div>
                <span className="text-graywarm text-sm font-medium">{GLOBAL_REVIEW_RATING}/5 · {GLOBAL_REVIEW_COUNT} Google reviews</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
                >
                  Book My Session
                </button>
                <Link href="/en/drainage" className="inline-flex items-center text-primary text-base font-medium underline underline-offset-4 hover:text-secondary">
                  Everything about Renata França drainage
                </Link>
              </div>
              <p className="mt-4 text-sm text-graywarm">
                Sessions in <strong>Paris 15 (75015)</strong> and <strong>Sèvres (92310)</strong>
              </p>
            </div>
            <div className="relative w-full h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-light/50">
              <Image
                src="/drainage/drainage_jambe.webp"
                alt="Renata França drainage session – light legs benefits by Hilary Farid"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= DETAILED BENEFITS ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              The most sought-after benefits
            </h2>
            <p className="mt-5 text-center text-graywarm max-w-3xl mx-auto">
              Effects vary from person to person. The goal is to promote comfort, lightness and overall wellbeing.
            </p>

            <div className="mt-12 space-y-6">
              {[
                {
                  categorie: "Circulatory Comfort",
                  color: "bg-blue-50 border-blue-100",
                  bienfaits: [
                    {
                      titre: "Light Legs",
                      texte: "Helps reduce the feeling of heaviness, swelling and water retention in the lower limbs. Often felt from the first session.",
                    },
                    {
                      titre: "Water Retention",
                      texte: "By stimulating lymphatic circulation, drainage helps eliminate excess fluid.",
                    },
                    {
                      titre: "Varicose Veins & Venous Discomfort",
                      texte: "A possible complement to medical follow-up: improves the feeling of heaviness and warmth linked to mild venous insufficiency.",
                    },
                  ],
                },
                {
                  categorie: "Body & Silhouette",
                  color: "bg-rose-50 border-rose-100",
                  bienfaits: [
                    {
                      titre: "Cellulite",
                      texte: "Lymphatic stimulation can improve the appearance of cellulite by helping eliminate certain toxins stored in fatty tissue.",
                    },
                    {
                      titre: "Bloating & Swollen Stomach",
                      texte: "Working the abdominal area during Renata França drainage stimulates the lymphatic system — the effects typically last from 3 days to a week — helping circulation and relieving bloating.",
                    },
                    {
                      titre: "Slimmer, More Sculpted Figure",
                      texte: "Reducing excess fluid and toning the tissue contribute to a visibly slimmer, more sculpted figure, particularly around the legs and stomach.",
                    },
                  ],
                },
                {
                  categorie: "Wellbeing & Vitality",
                  color: "bg-green-50 border-green-100",
                  bienfaits: [
                    {
                      titre: "Relaxation & Stress Relief",
                      texte: "The rhythmic, deep technique triggers a parasympathetic response: relaxation, letting go, improved sleep quality.",
                    },
                    {
                      titre: "Immunity & Detoxification",
                      texte: "As the lymphatic system is directly linked to immunity, activating it can help support the body's natural defences.",
                    },
                    {
                      titre: "Sports Recovery",
                      texte: "After intense effort, drainage helps eliminate metabolic waste and reduce post-exercise soreness and swelling.",
                    },
                  ],
                },
                {
                  categorie: "Life Milestones",
                  color: "bg-purple-50 border-purple-100",
                  bienfaits: [
                    {
                      titre: "Pregnancy & Post-partum",
                      texte: "Depending on the stage, may help relieve heavy legs, reduce pregnancy swelling and provide a beneficial relaxing effect.",
                    },
                    {
                      titre: "IVF & Fertility",
                      texte: "Supports overall wellbeing and stress management during fertility treatment — purely for comfort and wellbeing, not a medical treatment.",
                    },
                    {
                      titre: "Post-Surgery Recovery",
                      texte: "In certain contexts (scarring, cosmetic surgery, post-liposuction), subject to medical advice, can support the reduction of swelling.",
                    },
                  ],
                },
              ].map((section) => (
                <FadeIn key={section.categorie}>
                  <div className={`rounded-2xl border p-7 ${section.color}`}>
                    <h3 className="font-bold text-primary text-xl mb-5">{section.categorie}</h3>
                    <div className="grid md:grid-cols-3 gap-5">
                      {section.bienfaits.map(({ titre, texte }) => (
                        <div key={titre} className="bg-white rounded-xl p-5 shadow-sm">
                          <p className="font-semibold text-primary text-base mb-2">{titre}</p>
                          <p className="text-sm text-graywarm leading-relaxed">{texte}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 bg-amber-50 border border-amber-100 rounded-2xl p-6 text-center">
              <p className="text-sm text-graywarm flex items-start gap-2 text-left">
                <IconAlert className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Renata França drainage is a wellness practice. Effects felt vary between individuals and situations. This content does not replace medical advice. It is different from medical lymphatic drainage prescribed and reimbursed by French Social Security.</span>
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= WHO / PROGRAMME ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                How many sessions should you start with?
              </h2>
              <p className="mt-5 text-graywarm leading-relaxed">
                Results depend on your goal and sensitivity. Here are general recommendations:
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { nb: "1 session", objectif: "Immediate feeling of lightness, light detox, one-off wellbeing boost" },
                  { nb: "3 sessions", objectif: "Noticeable improvement in water retention and heavy legs" },
                  { nb: "5 sessions (course)", objectif: "Longer-lasting effects on cellulite, a slimmer figure" },
                  { nb: "Monthly", objectif: "Ongoing comfort, immunity and wellbeing maintenance" },
                ].map(({ nb, objectif }) => (
                  <div key={nb} className="flex gap-4 items-start">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full shrink-0">{nb}</span>
                    <p className="text-base text-graywarm pt-1.5">{objectif}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  className="trigger-booking-modal bg-doctolib text-white px-7 py-3.5 rounded-full font-semibold shadow-lg hover:bg-doctolib-dark transition-all"
                >
                  Book My Session
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-light/60 p-8 shadow-sm">
              <h3 className="font-bold text-primary text-xl mb-5">Why choose Hilary Farid?</h3>
              <ul className="space-y-4 text-graywarm">
                {[
                  { Icon: IconBone, titre: "Osteopath D.O.", texte: "In-depth knowledge of anatomy and the vascular system allows pressure to be adapted to your physiology — well beyond a standard spa or beauty salon." },
                  { Icon: IconBadgeCheck, titre: "Certified Renata França", texte: "A structured, precise technique, with recognised and reproducible results." },
                  { Icon: IconMapPin, titre: "2 Convenient Locations", texte: "Paris 15 (75015) and Sèvres (92310), near public transport, quick booking via Doctolib." },
                  { Icon: IconStar, titre: `${GLOBAL_REVIEW_COUNT} reviews, ${GLOBAL_REVIEW_RATING}/5`, texte: "Loyal, returning patients, visible and lasting results." },
                ].map(({ Icon, titre, texte }) => (
                  <li key={titre} className="flex gap-3">
                    <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-primary text-sm">{titre}</p>
                      <p className="text-sm mt-1 leading-relaxed">{texte}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FAQ ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 space-y-4">
              {[
                [
                  "What are the main benefits of Renata França drainage?",
                  "The most sought-after benefits: light legs, reduced water retention, improved appearance of cellulite, deep relaxation, immune support, digestive comfort, recovery after exercise or surgery.",
                ],
                [
                  "After how many sessions do you feel the benefits?",
                  "Most patients feel immediate lightness from the very first session. For longer-lasting effects on water retention or cellulite, a course of 3 to 5 sessions is generally recommended.",
                ],
                [
                  "Is Renata França drainage effective against cellulite?",
                  "It helps eliminate water-related cellulite, caused by excess fluid, since drainage helps decongest the whole body.",
                ],
                [
                  "Can I have Renata França drainage during pregnancy?",
                  "Depending on your stage and situation, drainage may be considered for circulatory comfort and to reduce swelling. Medical advice is recommended if in doubt.",
                ],
                [
                  "How is it different from medically reimbursed lymphatic drainage?",
                  "Renata França drainage is a wellness practice, different from medical lymphatic drainage prescribed by a doctor and reimbursed by French Social Security. It is intended for healthy individuals wishing to improve their comfort and wellbeing. It is a comprehensive method covering the whole body except the face, working thoroughly on the lymphatic system — a system that naturally tends to store fluid and eliminate it slowly.",
                ],
              ].map(([q, a]) => (
                <details
                  key={q}
                  className="group bg-white border border-light/80 rounded-2xl shadow-sm [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between font-bold text-ink text-base cursor-pointer p-6">
                    <span>{q}</span>
                    <span className="transition group-open:rotate-180 shrink-0 ml-4">
                      <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-graywarm text-base px-6 pb-6 leading-relaxed border-t border-light/30 pt-4">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= RELATED LINKS ========= */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-graywarm text-xs font-bold uppercase tracking-wider mb-5">Also explore</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              ["Everything about drainage", "/en/drainage", "The method, how it works, before/after."],
              ["Session pricing", "/en/tarifs", "Prices for single sessions and drainage courses."],
              ["Sports Osteopathy", "/en/osteopathie/sport", "Recovery, injury prevention for athletes."],
            ].map(([titre, href, texte]) => (
              <Link
                key={href}
                href={href}
                className="block bg-offwhite rounded-2xl border border-light/60 p-5 hover:border-secondary/40 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-primary text-base">{titre}</p>
                <p className="text-sm text-graywarm mt-1">{texte}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========= FINAL CTA ========= */}
      <FadeIn>
        <section className="py-16 px-6 text-center bg-primary/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary">
              Ready to feel light and well again?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              Renata França drainage sessions in <strong>Paris 15 (75015)</strong> and <strong>Sèvres (92310)</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="trigger-booking-modal bg-doctolib text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
              >
                Book via Doctolib
              </button>
              <Link
                href="/en/tarifs"
                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-primary bg-white border border-light/80 shadow-sm hover:bg-offwhite transition-colors"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-light/60 shadow-lg px-4 py-3 flex gap-3">
        <button
          type="button"
          className="trigger-booking-modal flex-1 bg-doctolib text-white py-3 rounded-full font-bold text-sm shadow-md"
        >
          Book Now
        </button>
        <a
          href="tel:+33672014539"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-full font-bold text-sm border border-[#0596DE] text-doctolib"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          Call
        </a>
      </div>

      <BackToTop />
    </main>
  );
}
