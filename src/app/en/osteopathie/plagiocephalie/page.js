import Link from "next/link";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";

export default function PlagiocephalieEnPage() {
  const faq = [
    {
      q: "Can plagiocephaly correct itself on its own?",
      a: "Mild forms can improve spontaneously as your baby's positions become more varied. For moderate to severe forms, active management (osteopathy + repositioning) is needed to prevent a persistent deformation.",
    },
    {
      q: "Do I have to choose between osteopathy and physiotherapy?",
      a: "These two approaches are complementary. Physiotherapy is indicated when there is a genuine muscular torticollis (tightening of the SCM muscle). Osteopathy treats overall cranial, joint and myofascial tension. Both can be carried out at the same time.",
    },
    {
      q: "My baby is 6 months old and I have only just noticed plagiocephaly — is it too late?",
      a: "No. Even after 4 months, osteopathy remains useful for improving cervical and cranial mobility. Correction is slower but still possible. A specialist assessment can be helpful if the deformation is pronounced.",
    },
    {
      q: "How many sessions are needed for plagiocephaly?",
      a: "On average, 3 to 5 sessions for cases managed before 4 months. A follow-up check at 3 months is often recommended. For later cases, the protocol is adapted individually.",
    },
    {
      q: "How can I tell positional plagiocephaly apart from craniosynostosis?",
      a: "Craniosynostosis presents specific signs (a bony ridge along the suture, a very particular head shape) and requires a medical diagnosis. If in doubt, your paediatrician can refer you to a paediatric neurosurgeon. Osteopathy is NOT indicated in cases of craniosynostosis without prior medical advice.",
    },
  ];

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
                { "@type": "ListItem", position: 2, name: "Osteopathy", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie" },
                { "@type": "ListItem", position: 3, name: "Infant", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/nourrisson" },
                { "@type": "ListItem", position: 4, name: "Plagiocephaly", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/plagiocephalie" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/plagiocephalie#page",
              url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/plagiocephalie",
              inLanguage: "en",
              name: "Positional Plagiocephaly (Flat Head Syndrome) — Infant Osteopathy",
              description: "Positional flat head syndrome in infants: gentle osteopathic treatment, with the best results before 4 months. Paris 15 and Sèvres.",
              about: { "@type": "MedicalCondition", name: "Positional plagiocephaly" },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ])
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-offwhite border-b border-light/50 px-6 py-3">
        <div className="max-w-5xl mx-auto text-sm text-graywarm flex items-center gap-2 flex-wrap">
          <Link href="/en" className="hover:text-primary transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <Link href="/en/osteopathie" className="hover:text-primary transition-colors">Osteopathy</Link>
          <span className="opacity-40">/</span>
          <Link href="/en/osteopathie/nourrisson" className="hover:text-primary transition-colors">Infant</Link>
          <span className="opacity-40">/</span>
          <span className="text-primary font-medium">Plagiocephaly</span>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
                Paediatric Osteopathy · Positional Flat Head Syndrome
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Plagiocephaly:<br />Act Early — It Matters
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Positional plagiocephaly is the flattening of your baby's skull caused by a recurring position. <strong>Before 4 months</strong>, osteopathy can achieve remarkable results thanks to the natural plasticity of the cranial bones.
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
                  Book an Appointment for My Baby
                </button>
                <Link href="/en/tarifs" className="inline-flex items-center text-primary text-base font-medium underline underline-offset-4 hover:text-secondary">
                  See pricing
                </Link>
              </div>
              <p className="mt-4 text-sm text-graywarm">
                Clinics in <strong>Paris 15 (75015)</strong> and <strong>Sèvres (92310)</strong>
              </p>
            </div>
            <div className="relative w-full h-72 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-light/50">
              <Image
                src="/osteopathie/nour.webp"
                alt="Osteopathy for infant plagiocephaly – Hilary Farid"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= CRITICAL TIMING ========= */}
      <SlideUp>
        <section className="py-10 px-6 bg-amber-50 border-y border-amber-100">
          <div className="max-w-4xl mx-auto flex items-start gap-4">
            <span className="text-4xl shrink-0">⏰</span>
            <div>
              <h2 className="text-xl font-bold text-amber-800 mb-2">Timing is crucial: before 4 months</h2>
              <p className="text-amber-700 leading-relaxed">
                Between 0 and 4 months, cranial plasticity is at its highest. This is the ideal window for osteopathy. After 6 months, the bones become more rigid and correction takes longer. <strong>Don't wait</strong> — seeking help early often avoids the need for a remodelling helmet.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= SIGNS ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Signs to watch for
            </h2>
            <p className="mt-5 text-center text-graywarm text-lg max-w-3xl mx-auto">
              These signs often appear in the first few weeks. The earlier the diagnosis, the better the results.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                { icon: "🔄", title: "Preferential head rotation", text: "Baby always turns their head to the same side — even during sleep. This is often the first sign of functional torticollis or asymmetric neck tension." },
                { icon: "🧠", title: "Visible skull flattening", text: "A flattened area at the back or side of the skull. The ear on the flattened side may appear pushed forward compared to the other one." },
                { icon: "↔️", title: "Facial asymmetry", text: "A slight forehead bulge on the same side as the flattened area at the back of the head. The forehead can appear slightly more rounded on one side." },
                { icon: "💪", title: "Neck muscle tension", text: "Resistance when turning the head to one side, with the sternocleidomastoid (SCM) muscle feeling tight or thickened on one side." },
              ].map((item) => (
                <FadeIn key={item.title}>
                  <article className="bg-white rounded-2xl border border-light/60 p-7 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.icon}</span>
                      <h3 className="font-bold text-primary text-lg">{item.title}</h3>
                    </div>
                    <p className="text-base text-graywarm leading-relaxed">{item.text}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= WHAT THE OSTEOPATH DOES ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                What the osteopath does
              </h2>
              <p className="mt-4 text-graywarm leading-relaxed">
                The session takes place entirely on the table, using extremely gentle techniques. Your baby can be asleep or awake. No abrupt manipulation is ever used.
              </p>
              <ul className="mt-6 space-y-3 text-graywarm">
                {[
                  "Assessment of cranial mobility (occipital, temporal and parietal sutures)",
                  "Release of cervical muscle tension (SCM muscle, sub-occipital muscles)",
                  "Work on sacral mobility and the cranio-sacral connection",
                  "Positioning and babywearing advice to vary your baby's everyday support points",
                  "Overall assessment: rotation, tension, muscle tone",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-secondary mt-1 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-light rounded-2xl p-8">
              <h3 className="text-lg font-bold text-primary mb-4">Results and number of sessions</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">📅</span>
                  <div>
                    <p className="font-semibold text-primary">Before 4 months</p>
                    <p className="text-sm text-graywarm mt-1">3 to 5 sessions spaced 3–4 weeks apart. Visible improvement in head rotation from the first session. Cranial correction takes place over several weeks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">📅</span>
                  <div>
                    <p className="font-semibold text-primary">Between 4 and 8 months</p>
                    <p className="text-sm text-graywarm mt-1">4 to 6 sessions. Results are still satisfactory, but progress is slower. Closer follow-up is needed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">📅</span>
                  <div>
                    <p className="font-semibold text-primary">Beyond 8 months</p>
                    <p className="text-sm text-graywarm mt-1">A specialist opinion is recommended for severe cases. A remodelling helmet may be considered. Osteopathy remains a complementary approach.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FAQ ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faq.map(({ q, a }, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-light/60 overflow-hidden">
                  <summary className="cursor-pointer px-6 py-4 font-semibold text-primary flex justify-between items-center gap-4 list-none">
                    <span>{q}</span>
                    <span className="shrink-0 text-secondary text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-graywarm leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= CTA ========= */}
      <FadeIn>
        <section className="py-16 px-6 text-center bg-primary/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary">
              Does your baby have a flat head?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              The earlier we start, the faster the results. Don&apos;t wait.
              <br />Clinics in <strong>Paris 15 (75015)</strong> and <strong>Sèvres (92310)</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="trigger-booking-modal bg-doctolib text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
              >
                Book an Appointment
              </button>
              <Link
                href="/en/osteopathie/nourrisson"
                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-primary bg-white border border-light/80 shadow-sm hover:bg-offwhite transition-colors"
              >
                ← Infant Osteopathy
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= SPECIALISED PAGES ========= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center">Specialised Pages</h2>
          <p className="mt-3 text-center text-graywarm max-w-2xl mx-auto">
            Explore the dedicated pages for each specialty for more detailed information.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              { titre: "Restrictive Frenula (Tongue-Tie)", href: "/en/osteopathie/freins-restrictifs", desc: "Tongue-tie, lip-tie: support before and after a frenectomy.", icon: "👅" },
              { titre: "Infant Osteopathy", href: "/en/osteopathie/nourrisson", desc: "Colic, reflux, torticollis, feeding difficulties. Trained at Centre YGY.", icon: "👶" },
              { titre: "Pregnancy & Post-partum", href: "/en/osteopathie/femme-enceinte", desc: "Perinatal care, sciatica, preparation for childbirth.", icon: "🤰" },
            ].map(({ titre, href, desc, icon }) => (
              <Link key={href} href={href} className="block bg-offwhite rounded-2xl border border-light/60 p-6 hover:border-secondary/40 hover:shadow-md transition-all group">
                <span className="text-3xl mb-3 block">{icon}</span>
                <p className="font-bold text-primary text-lg group-hover:text-secondary transition-colors">{titre}</p>
                <p className="text-sm text-graywarm mt-2 leading-relaxed">{desc}</p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-secondary">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-light/60 shadow-lg px-4 py-3 flex gap-3">
        <button type="button" className="trigger-booking-modal flex-1 bg-doctolib text-white py-3 rounded-full font-bold text-sm shadow-md">
          Book Now
        </button>
        <a href="tel:+33672014539" className="flex-1 flex items-center justify-center gap-2 bg-primary/10 text-primary py-3 rounded-full font-bold text-sm border border-primary/20">
          📞 Call
        </a>
      </div>

      <BackToTop />
    </main>
  );
}
