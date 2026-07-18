import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";

export default function OsteopathieNourrissonEnPage() {
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
                { "@type": "ListItem", position: 3, name: "Infant & Baby", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/nourrisson" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/nourrisson#page",
              url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/nourrisson",
              inLanguage: "en",
              name: "Infant & Baby Osteopathy – Hilary Farid D.O.",
              description: "Osteopath specialising in infants in Paris 15 and Sèvres. Colic, reflux, plagiocephaly, restrictive oral ties, congenital torticollis. Trained at Centre YGY.",
              about: { "@type": "MedicalSpecialty", name: "Osteopathy" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hilaryfarid-osteopathe.fr/en" },
                  { "@type": "ListItem", position: 2, name: "Osteopathy", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie" },
                  { "@type": "ListItem", position: 3, name: "Infant", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/nourrisson" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie/nourrisson#service",
              serviceType: "Paediatric infant osteopathy",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
              areaServed: ["Paris 15", "Sèvres"],
              description: "Ultra-gentle osteopathy sessions for infants. Colic, reflux, plagiocephaly, torticollis, sucking difficulties, restrictive oral ties.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "At what age can I bring my baby to an osteopath?",
                  acceptedAnswer: { "@type": "Answer", text: "From birth. Many parents come in during the first few weeks, particularly for colic, reflux, feeding difficulties or torticollis. There is no minimum age." },
                },
                {
                  "@type": "Question",
                  name: "Is infant osteopathy painful?",
                  acceptedAnswer: { "@type": "Answer", text: "No. The techniques used are extremely gentle — light pressure, gentle cranial touches — entirely adapted to your baby's fragility. Sessions often take place while baby is asleep or calmly awake." },
                },
                {
                  "@type": "Question",
                  name: "Does osteopathy help with infant colic?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, many parents notice an improvement after 1 to 2 sessions. The osteopath releases diaphragmatic, visceral and cranial tension that may disrupt digestion and comfort." },
                },
                {
                  "@type": "Question",
                  name: "Can osteopathy correct plagiocephaly (flat head)?",
                  acceptedAnswer: { "@type": "Answer", text: "Osteopathy helps release cranial tension and improve neck mobility to encourage more varied head positioning. The earlier treatment starts, the better the results tend to be." },
                },
                {
                  "@type": "Question",
                  name: "What is a restrictive frenulum and how does the osteopath help?",
                  acceptedAnswer: { "@type": "Answer", text: "A restrictive frenulum (tongue, lip or cheek) can interfere with sucking. Hilary provides support before and after the frenectomy, working on neck, cranial and oral tension to help optimise recovery." },
                },
                {
                  "@type": "Question",
                  name: "How many sessions will my baby need?",
                  acceptedAnswer: { "@type": "Answer", text: "1 to 2 sessions are often enough for a recent issue. For more established tension, ongoing follow-up may be suggested. Your treatment plan is set out during the first session." },
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
          <Link href="/en/osteopathie" className="hover:text-primary transition-colors">Osteopathy</Link>
          <span className="text-light">/</span>
          <span className="text-primary font-medium">Infant & Baby</span>
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
                Infant Osteopathy<br /> in Paris 15 & Sèvres
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Colic, reflux, torticollis, plagiocephaly, tongue-tie… Common symptoms that often respond very well to gentle osteopathy. Hilary Farid trained at <strong>Centre YGY</strong> (Catherine Rybus), a leading national centre for infant osteopathic care.
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
            <div className="relative w-full h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-light/50">
              <Image
                src="/osteopathie/nour.webp"
                alt="Infant osteopathy session with Hilary Farid, osteopath in Paris 15 and Sèvres"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= INDICATIONS ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              When should you consult for your baby?
            </h2>
            <p className="mt-5 text-center text-graywarm text-lg max-w-3xl mx-auto">
              Many infant symptoms are linked to mechanical tension that developed during pregnancy or birth.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Colic & digestive issues",
                  icon: "🫧",
                  text: "Inconsolable crying in the evening, a tense tummy, legs drawn up. Osteopathy releases diaphragmatic and visceral tension that can disrupt the baby's digestion.",
                },
                {
                  title: "Gastro-oesophageal reflux (GORD)",
                  icon: "🔄",
                  text: "Frequent regurgitation, discomfort after feeds, irritability. Working on the diaphragm and the structures around the stomach can help improve digestive comfort.",
                },
                {
                  title: "Plagiocephaly (flat head syndrome)",
                  icon: "🧠",
                  text: "Flattening of the skull linked to a postural preference. Osteopathy releases neck and cranial tension to encourage more varied head positioning and support correction.",
                },
                {
                  title: "Congenital torticollis",
                  icon: "🔃",
                  text: "Baby always turns their head to the same side. Osteopathy releases muscular and joint tension in the neck to help restore full range of motion.",
                },
                {
                  title: "Sucking & breastfeeding difficulties",
                  icon: "🤱",
                  text: "Difficulty feeding, painful breastfeeding, poor latch. Hilary assesses oral, neck and cranial mechanics to help optimise sucking.",
                },
                {
                  title: "Tongue-tie & lip-tie (pre- & post-frenectomy)",
                  icon: "👅",
                  text: "A tongue, lip or cheek frenulum limiting oral mobility. Hilary provides support before and after the frenectomy to help optimise functional recovery.",
                },
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
            <div className="mt-10 bg-secondary/10 border border-secondary/20 rounded-2xl p-6 text-center">
              <p className="text-primary font-medium">
                Also commonly seen: fussiness, sleep difficulties, postural asymmetries, follow-up after a difficult birth (forceps, ventouse, caesarean), or a baby who can't seem to find a comfortable position.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= EXPERTISE + SESSION FLOW ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                Recognised expertise in paediatric osteopathy
              </h2>
              <p className="mt-5 text-graywarm leading-relaxed">
                Hilary Farid has completed advanced training at <strong>Centre YGY</strong> with Catherine Rybus, a leading national centre for infant osteopathic care, particularly for sucking difficulties, restrictive oral ties and cranial asymmetries.
              </p>
              <ul className="mt-6 space-y-3 text-graywarm text-base">
                {[
                  "Exclusively gentle techniques, adapted to the fragility of infants",
                  "A whole-body approach: cranial, visceral, cervical, oral",
                  "Working with parents: advice on babywearing, positioning, feeding",
                  "A multidisciplinary network: speech and language therapists, podiatrists, midwives",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-secondary mt-1 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button
                  type="button"
                  className="trigger-booking-modal bg-doctolib text-white px-7 py-3.5 rounded-full font-semibold shadow-lg hover:bg-doctolib-dark transition-all"
                >
                  Book an appointment
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-light/60 p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-secondary mb-5">What happens during a session</p>
              <ol className="space-y-5">
                {[
                  ["Full case history", "Discussion about the pregnancy, birth, feeding and symptoms. Parents are fully involved throughout the session."],
                  ["Osteopathic assessment", "Observation of posture, neck and cranial mobility. Gentle palpation, respectful of the infant's fragility."],
                  ["Gentle treatment", "Extremely gentle techniques, often carried out while baby sleeps. Total duration: 45 to 60 minutes."],
                  ["Advice & follow-up", "Personalised advice for parents to help maintain the benefits at home (babywearing, positioning, feeding)."],
                ].map(([titre, texte], i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-primary">{titre}</p>
                      <p className="text-sm text-graywarm mt-1 leading-relaxed">{texte}</p>
                    </div>
                  </li>
                ))}
              </ol>
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
                  "At what age can I bring my baby to an osteopath?",
                  "From birth. Many parents come in during the first few weeks, particularly for colic, reflux, feeding difficulties or torticollis. There is no minimum age.",
                ],
                [
                  "Is infant osteopathy painful?",
                  "No. The techniques used are extremely gentle — light pressure, gentle cranial touches — entirely adapted to your baby's fragility. Sessions often take place while baby is asleep or calmly awake.",
                ],
                [
                  "Does osteopathy help with colic?",
                  "Yes, many parents notice an improvement after 1 to 2 sessions. The osteopath releases diaphragmatic, visceral and cranial tension that may disrupt digestion and comfort.",
                ],
                [
                  "Can osteopathy correct plagiocephaly?",
                  "Osteopathy helps release cranial tension and improve neck mobility to encourage more varied head positioning. The earlier treatment starts, the better the results tend to be. It is often combined with repositioning exercises.",
                ],
                [
                  "What is a restrictive frenulum (tongue-tie) and how does the osteopath help?",
                  "A restrictive frenulum (tongue, lip or cheek) can interfere with sucking and breastfeeding. Hilary provides support before and after the frenectomy, working on neck, cranial and oral tension to help optimise functional recovery.",
                ],
                [
                  "How many sessions will my baby need?",
                  "1 to 2 sessions are often enough for a recent issue. For more established tension, ongoing follow-up may be suggested. Your treatment plan is set out during the first consultation.",
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

      {/* ========= RELATED PAGES ========= */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center">
            Related pages
          </h2>
          <p className="mt-3 text-center text-graywarm max-w-2xl mx-auto">
            Explore our dedicated pages for detailed information and answers to your specific questions.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                titre: "Tongue-Tie & Lip-Tie",
                href: "/en/osteopathie/freins-restrictifs",
                desc: "Tongue-tie, lip-tie: osteopathic support before and after frenectomy.",
                icon: "👅",
              },
              {
                titre: "Plagiocephaly",
                href: "/en/osteopathie/plagiocephalie",
                desc: "Positional flat head syndrome: gentle, early treatment, ideally before 4 months.",
                icon: "🧠",
              },
              {
                titre: "Pregnancy & Post-partum",
                href: "/en/osteopathie/femme-enceinte",
                desc: "Lower back pain, sciatica, birth preparation, post-partum recovery.",
                icon: "🤰",
              },
              {
                titre: "Renata França Drainage",
                href: "/en/drainage",
                desc: "A gentle manual technique for lighter legs, detox and deep wellbeing.",
                icon: "💧",
              },
            ].map(({ titre, href, desc, icon }) => (
              <Link
                key={href}
                href={href}
                className="block bg-offwhite rounded-2xl border border-light/60 p-6 hover:border-secondary/40 hover:shadow-md transition-all group"
              >
                <span className="text-3xl mb-3 block">{icon}</span>
                <p className="font-bold text-primary text-lg group-hover:text-secondary transition-colors">{titre}</p>
                <p className="text-sm text-graywarm mt-2 leading-relaxed">{desc}</p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-secondary">
                  Learn more →
                </span>
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
              Does your baby need a consultation?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              Clinics in <strong>Paris 15 (75015)</strong> and <strong>Sèvres (92310)</strong>. Book online via Doctolib.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="trigger-booking-modal bg-doctolib text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
              >
                Book via Doctolib
              </button>
              <Link
                href="/en/osteopathie"
                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-primary bg-white border border-light/80 shadow-sm hover:bg-offwhite transition-colors"
              >
                Back to Osteopathy
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
          Book
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
