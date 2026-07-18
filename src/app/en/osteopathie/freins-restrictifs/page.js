import Link from "next/link";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import { IconPhone } from "@/components/icons/UiIcons";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";

export default function FreinsRestrictifsEnPage() {
  const faq = [
    {
      q: "My baby has a tongue-tie — should I see a surgeon or an osteopath first?",
      a: "The two approaches are complementary. Ideally, see the osteopath as soon as possible to work on any tension present, then arrange the surgical assessment. Both can be organised in parallel.",
    },
    {
      q: "How many sessions are needed for restrictive oral ties?",
      a: "Generally 2 to 4 sessions: one or two before the frenectomy to prepare the tissues, and one or two afterwards to support recovery. The protocol is adapted according to severity and progress.",
    },
    {
      q: "Can osteopathy replace a frenectomy?",
      a: "No. Osteopathy does not lengthen a frenulum. It optimises the body's mechanics around the frenulum and improves recovery after it is released. Surgical or laser treatment remains necessary if the frenulum is functionally restrictive.",
    },
    {
      q: "My baby is 3 months old — is it too late to act?",
      a: "No. Osteopathy and frenectomy remain effective up to 6–12 months and beyond. Priorities shift over time (breastfeeding, introducing solids, speech development), but treatment remains relevant.",
    },
    {
      q: "Can this help if I bottle-feed?",
      a: "Yes. Difficulties linked to restrictive oral ties also affect bottle-feeding (fatigue, swallowing air, reflux). The approach is the same.",
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
                { "@type": "ListItem", position: 4, name: "Tongue-Tie & Lip-Tie", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/freins-restrictifs" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/freins-restrictifs#page",
              url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/freins-restrictifs",
              inLanguage: "en",
              name: "Tongue-Tie & Lip-Tie in Infants — Osteopathy",
              description: "Tongue-tie, lip-tie: osteopathic support before and after frenectomy in Paris 15 and Sèvres.",
              about: { "@type": "MedicalCondition", name: "Ankyloglossia (restrictive frenulum)" },
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
          <span className="text-primary font-medium">Tongue-Tie & Lip-Tie</span>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
                Paediatric Osteopathy · Trained at Centre YGY
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Tongue-Tie & Lip-Tie<br />in Infants
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Tongue-tie, lip-tie, cheek-tie — these overly tight oral frenula can disrupt breastfeeding, sucking and your baby's comfort. Hilary Farid supports you <strong>before and after the frenectomy</strong> to help optimise recovery.
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
                  Book an appointment for my baby
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
                alt="Infant osteopathy for tongue-tie and lip-tie – Hilary Farid"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= SIGNS ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Signs to watch for
            </h2>
            <p className="mt-5 text-center text-graywarm text-lg max-w-3xl mx-auto">
              Restrictive frenula can show up in many different ways. These signs, whether on their own or combined, are worth having assessed.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                { icon: "🤱", title: "Breastfeeding difficulties", text: "Baby loses the latch, slips off the breast, has to restart. Feeds take a long time and baby seems exhausted without being satisfied." },
                { icon: "🔊", title: "Clicking sounds while feeding", text: "Abnormal sucking sounds (clicks, smacking) signalling a poor oral seal and excessive air intake." },
                { icon: "💨", title: "Gas and bloating", text: "Air swallowed due to a poor lip seal distends the bowel and causes colic, gas and digestive discomfort." },
                { icon: "⏱️", title: "Exhausting feeds", text: "Baby tires before being full, falls asleep at the breast but wants to feed again very soon after. Insufficient weight gain is possible." },
                { icon: "😣", title: "Maternal pain", text: "Cracked nipples, pain when latching that persists beyond the first few days — a sign of poor sucking mechanics." },
                { icon: "🔄", title: "Associated reflux", text: "Inefficient sucking creates negative pressure that promotes gastric reflux. A restrictive frenulum can worsen existing reflux (GORD)." },
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

      {/* ========= ROLE OF OSTEOPATHY ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              The role of osteopathy
            </h2>
            <p className="mt-5 text-center text-graywarm text-lg max-w-3xl mx-auto">
              Osteopathy does not treat the frenulum itself — that is the surgeon's role. It prepares and supports your baby to help achieve the best possible outcome.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⏮️</span>
                  <h3 className="text-xl font-bold text-primary">Before the frenectomy</h3>
                </div>
                <ul className="space-y-3 text-graywarm">
                  {[
                    "Releasing neck and cranial tension related to birth",
                    "Improving mobility of the hyoid bone and skull base",
                    "Reducing postural compensations (torticollis, preferred head rotation)",
                    "Preparing for faster recovery after the procedure",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-secondary mt-1 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⏭️</span>
                  <h3 className="text-xl font-bold text-primary">After the frenectomy</h3>
                </div>
                <ul className="space-y-3 text-graywarm">
                  {[
                    "Supporting healing to help reduce the risk of the wound site reattaching",
                    "Releasing muscular and fascial tension in the oral region",
                    "Helping the neurological integration of the tongue's new range of motion",
                    "Working alongside the mobilisation exercises prescribed",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-secondary mt-1 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Multidisciplinary network */}
            <div className="mt-8 bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">🔗</span>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">A collaborative, multidisciplinary approach</h3>
                  <p className="text-graywarm leading-relaxed">
                    Optimal care for restrictive oral ties is multidisciplinary: osteopath, <strong>lactation consultant (IBCLC)</strong>, the practitioner performing the frenectomy, and sometimes a speech and language therapist. Hilary works closely with these professionals and can refer you if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= TRAINING ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-light">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl">🎓</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-primary">
              Specialist training
            </h2>
            <p className="mt-5 text-graywarm text-lg leading-relaxed">
              Hilary Farid has completed specialist training at <strong>Centre YGY</strong> (Catherine Rybus, Paris) — a leading national centre for perinatal and paediatric osteopathic care. This training specifically covers the assessment and treatment of dysfunctions related to restrictive oral ties, sucking difficulties and infant oral mechanics.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Centre YGY – Catherine Rybus", "CFPCO", "IDO Paris", "SPA Renata França"].map((f) => (
                <span key={f} className="bg-white border border-light/80 rounded-full px-4 py-2 text-sm font-medium text-secondary shadow-sm">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FAQ ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faq.map(({ q, a }, i) => (
                <details key={i} className="group bg-offwhite rounded-2xl border border-light/60 overflow-hidden">
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
              Is your baby struggling to feed?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              An osteopathic assessment helps identify any tension present and points you towards the right professionals.
              <br />Clinics in <strong>Paris 15 (75015)</strong> and <strong>Sèvres (92310)</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="trigger-booking-modal bg-doctolib text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
              >
                Book an appointment
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

      {/* ========= RELATED PAGES ========= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center">Related pages</h2>
          <p className="mt-3 text-center text-graywarm max-w-2xl mx-auto">
            Explore our dedicated pages for detailed information on each specialty.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              { titre: "Plagiocephaly", href: "/en/osteopathie/plagiocephalie", desc: "Positional flat head syndrome: gentle, early osteopathic treatment.", icon: "🧠" },
              { titre: "Infant Osteopathy", href: "/en/osteopathie/nourrisson", desc: "Colic, reflux, torticollis, sucking difficulties. Trained at Centre YGY.", icon: "👶" },
              { titre: "Pregnancy & Post-partum", href: "/en/osteopathie/femme-enceinte", desc: "Perinatal care, sciatica, birth preparation.", icon: "🤰" },
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
          Book
        </button>
        <a href="tel:+33672014539" className="flex-1 flex items-center justify-center gap-2 bg-primary/10 text-primary py-3 rounded-full font-bold text-sm border border-primary/20">
          <IconPhone className="w-4 h-4" /> Call
        </a>
      </div>

      <BackToTop />
    </main>
  );
}
