import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";

export default function OsteopathieSportEnPage() {
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
                { "@type": "ListItem", position: 3, name: "Sports Osteopathy", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/sport" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/sport#page",
              url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/sport",
              inLanguage: "en",
              name: "Sports Osteopathy – Hilary Farid D.O.",
              description: "Sports osteopath in Paris 15 and Sèvres. Recovery, injury prevention, tendinitis, sprains. For amateur and competitive athletes.",
              about: { "@type": "MedicalSpecialty", name: "Osteopathy" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hilaryfarid-osteopathe.fr/en" },
                  { "@type": "ListItem", position: 2, name: "Osteopathy", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie" },
                  { "@type": "ListItem", position: 3, name: "Sport", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/sport" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie/sport#service",
              serviceType: "Sports osteopathy",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
              areaServed: ["Paris 15", "Sèvres"],
              description: "Osteopathy consultations for amateur and competitive athletes. Recovery, injury prevention, post-traumatic treatment.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "When should an athlete see an osteopath?",
                  acceptedAnswer: { "@type": "Answer", text: "Before a competition (preventive assessment), after an injury (sprain, fall), in case of chronic pain limiting training, or for recovery after intense exertion. An annual check-up is also recommended." },
                },
                {
                  "@type": "Question",
                  name: "Can osteopathy treat tendinitis?",
                  acceptedAnswer: { "@type": "Answer", text: "Osteopathy does not directly cure tendinitis, but it addresses the mechanical imbalances that cause or maintain it. By releasing tension upstream and downstream of the affected area, it can help speed up recovery and reduce the risk of recurrence." },
                },
                {
                  "@type": "Question",
                  name: "Can osteopathy improve sports performance?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, by supporting better overall mobility, more efficient breathing and improved neuromuscular recovery. Many elite athletes include osteopathy as part of their physical preparation." },
                },
                {
                  "@type": "Question",
                  name: "How long before a competition should I see an osteopath?",
                  acceptedAnswer: { "@type": "Answer", text: "Ideally 7 to 10 days before an important event, to give the body time to adapt to the adjustments. In the week leading up to a competition, the session is adapted so as not to disrupt your preparation." },
                },
                {
                  "@type": "Question",
                  name: "Does osteopathy help with faster recovery after exercise?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes. By improving circulation, releasing muscle tension and optimising joint mobility, osteopathy supports faster, better-quality recovery after intense exertion or competition." },
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
          <span className="text-primary font-medium">Sports Osteopathy</span>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
                Sports Osteopathy · Prevention & Performance
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Sports Osteopathy<br /> in Paris 15 & Sèvres
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Whether you&apos;re a weekend runner, a competitive swimmer or a regular gym-goer, osteopathy helps you <strong>perform pain-free</strong>, recover faster and prevent the injuries that hold back your progress.
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
                  Book an Appointment
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
                src="/osteopathie/sport.webp"
                alt="Sports osteopathy by Hilary Farid in Paris 15 and Sèvres"
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
              When should you see a sports osteopath?
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  phase: "Before",
                  titre: "Preventive Assessment",
                  icon: "🎯",
                  items: [
                    "Before a competition or a return to activity",
                    "Annual mobility and balance check-up",
                    "Detection of silent compensation patterns",
                    "Optimisation of the postural chain",
                  ],
                },
                {
                  phase: "During",
                  titre: "Injury Treatment",
                  icon: "🩹",
                  items: [
                    "Tendinitis (Achilles, patellar, shoulder)",
                    "Sprains and after-effects of injuries",
                    "Lower back and neck pain in athletes",
                    "Groin pain (pubalgia), shin splints, iliotibial band syndrome",
                  ],
                },
                {
                  phase: "After",
                  titre: "Recovery",
                  icon: "⚡",
                  items: [
                    "Post-competition recovery",
                    "Relief of residual muscle tension",
                    "Improved sleep quality and recovery",
                    "Reduced time before returning to training",
                  ],
                },
              ].map((col) => (
                <FadeIn key={col.phase}>
                  <div className="bg-white rounded-2xl border border-light/60 p-7 shadow-sm h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{col.icon}</span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-secondary">{col.phase}</p>
                        <h3 className="font-bold text-primary text-lg">{col.titre}</h3>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-graywarm">
                      {col.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-secondary mt-1 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= SPORTS & CONDITIONS ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Sports and Conditions Commonly Treated
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { icon: "🏃", sport: "Running", patho: "Iliotibial band syndrome, shin splints, runner's knee pain" },
                { icon: "🏊", sport: "Swimming", patho: "Swimmer's shoulder, neck pain, rib cage restrictions" },
                { icon: "🚴", sport: "Cycling", patho: "Cyclist's neck pain, knee issues, saddle-related back pain, wrist pain" },
                { icon: "⚽", sport: "Football / Rugby", patho: "Ankle sprains, groin pain, lower back pain, post-match aches (concussion requires medical assessment)" },
                { icon: "🎾", sport: "Tennis / Padel", patho: "Tennis elbow (epicondylitis), shoulder pain, mid-back restrictions" },
                { icon: "🏋️", sport: "CrossFit / Weight Training", patho: "Shoulder pain, lower back pain, hip and knee issues" },
                { icon: "🩰", sport: "Dance / Martial Arts", patho: "Joint mobility, sprains, chronic tension in the posterior chains" },
                { icon: "🏅", sport: "Any Competitive Sport", patho: "Six-monthly preventive check-up, integrative physical preparation" },
              ].map(({ icon, sport, patho }) => (
                <div key={sport} className="bg-white rounded-xl border border-light/60 p-5 shadow-sm flex gap-4">
                  <span className="text-2xl shrink-0">{icon}</span>
                  <div>
                    <p className="font-bold text-primary text-base">{sport}</p>
                    <p className="text-sm text-graywarm mt-1">{patho}</p>
                  </div>
                </div>
              ))}
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
                  "When should an athlete see an osteopath?",
                  "Before a competition (preventive assessment), after an injury, in case of chronic pain limiting training, or for recovery. An annual check-up is recommended for anyone who exercises regularly.",
                ],
                [
                  "Can osteopathy treat tendinitis?",
                  "Osteopathy addresses the mechanical imbalances that cause or maintain tendinitis. By releasing tension upstream and downstream of the affected area, it can help speed up recovery and reduce the risk of recurrence.",
                ],
                [
                  "Can osteopathy improve sports performance?",
                  "Yes. Better overall mobility, more efficient breathing, optimised neuromuscular recovery. Many elite athletes include osteopathy as part of their physical preparation.",
                ],
                [
                  "How long before a competition should I see an osteopath?",
                  "Ideally 7 to 10 days before an important event, to give the body time to adapt to the adjustments. In the week leading up to the competition, the session is adapted so as not to disrupt your preparation.",
                ],
                [
                  "Does osteopathy help with faster recovery after exercise?",
                  "Yes. By improving circulation, releasing muscle tension and optimising joint mobility, osteopathy supports faster recovery after intense exertion.",
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

      {/* ========= SPECIALISED PAGES ========= */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center">
            Specialised Pages
          </h2>
          <p className="mt-3 text-center text-graywarm max-w-2xl mx-auto">
            Explore the dedicated pages for each specialty for detailed information and answers to your specific questions.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              {
                titre: "Infant Osteopathy",
                href: "/en/osteopathie/nourrisson",
                desc: "Colic, reflux, plagiocephaly, restrictive oral ties. Trained at Centre YGY.",
                icon: "👶",
              },
              {
                titre: "Pregnancy & Post-partum",
                href: "/en/osteopathie/femme-enceinte",
                desc: "Lower back pain, sciatica, preparation for childbirth, postpartum recovery. Trained at CFPCO.",
                icon: "🤰",
              },
              {
                titre: "Renata França Drainage",
                href: "/en/drainage",
                desc: "Muscle recovery, a feeling of lighter legs and deep wellbeing.",
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
              Ready to perform pain-free?
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
