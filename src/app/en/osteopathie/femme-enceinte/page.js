import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";

export default function OsteopathieFemmeEnceinteEnPage() {
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
                { "@type": "ListItem", position: 3, name: "Pregnancy & Post-partum", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/femme-enceinte" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/femme-enceinte#page",
              url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/femme-enceinte",
              inLanguage: "en",
              name: "Osteopathy for Pregnancy & Post-partum – Hilary Farid D.O.",
              description: "Osteopath specialised in pregnancy in Paris 15 and Sèvres. Lower back pain, sciatica, pelvic pain, birth preparation, post-partum follow-up. CFPCO trained.",
              about: { "@type": "MedicalSpecialty", name: "Osteopathy" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hilaryfarid-osteopathe.fr/en" },
                  { "@type": "ListItem", position: 2, name: "Osteopathy", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie" },
                  { "@type": "ListItem", position: 3, name: "Pregnancy", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/femme-enceinte" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/osteopathie/femme-enceinte#service",
              serviceType: "Osteopathy for pregnancy and post-partum",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
              areaServed: ["Paris 15", "Sèvres"],
              description: "Osteopathy consultations for pregnant women and post-partum. Lower back pain, sciatica, pelvis, birth preparation, post-natal recovery.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is osteopathy safe during pregnancy?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes. The techniques used during pregnancy are specifically adapted: no high-velocity cervical manipulation, a gentle tissue and visceral approach. Hilary is trained (CFPCO) to adapt every movement to each trimester." },
                },
                {
                  "@type": "Question",
                  name: "In which trimester can I see an osteopath while pregnant?",
                  acceptedAnswer: { "@type": "Answer", text: "In any trimester. The first trimester requires more caution but is still possible. The second and third trimesters are when support is most frequently sought, particularly for pelvic and lower back pain." },
                },
                {
                  "@type": "Question",
                  name: "Does osteopathy help prepare for labour?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes. By working on the mobility of the pelvis, sacrum and diaphragm, osteopathy helps mechanically prepare the body for labour, and may improve the baby's descent." },
                },
                {
                  "@type": "Question",
                  name: "When should I book a post-partum session?",
                  acceptedAnswer: { "@type": "Answer", text: "Ideally within 4 to 8 weeks after giving birth (with medical clearance). This helps rebalance the pelvis, treat residual pain, support a caesarean or episiotomy scar, and address post-partum fatigue." },
                },
                {
                  "@type": "Question",
                  name: "Does osteopathy relieve pregnancy-related sciatica?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, this is one of the most common reasons patients come in. Pregnancy-related sciatica is often linked to sacroiliac or piriformis tension. Osteopathy safely releases these structures." },
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
          <span className="text-primary font-medium">Pregnancy & Post-partum</span>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
                Perinatal care · CFPCO trained
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Osteopathy for Pregnancy<br /> & Post-partum in Paris 15 & Sèvres
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Lower back pain, sciatica, pelvic pain, nausea, birth preparation… Pregnancy transforms the body in profound ways. Hilary Farid, trained at the <strong>CFPCO</strong>, adapts every session to your trimester and to each mother-to-be's specific needs.
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
                  Book an appointment
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
                src="/osteopathie/FE.webp"
                alt="Osteopathy session for a pregnant woman by Hilary Farid in Paris 15 and Sèvres"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= PREGNANCY ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              What osteopathy can relieve during pregnancy
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Lower back pain & pregnancy-related sciatica",
                  icon: "🦴",
                  text: "Lower back pain, sciatica, crural neuralgia… linked to sacroiliac tension and the shift in your centre of gravity. Osteopathy safely releases these structures.",
                },
                {
                  title: "Pelvic & pubic pain",
                  icon: "🔺",
                  text: "Painful pubic symphysis, symphysis diastasis, pelvic instability. Targeted work on the ligaments and pelvic balance.",
                },
                {
                  title: "Nausea & digestive discomfort",
                  icon: "🤢",
                  text: "In the 1st trimester, diaphragmatic and visceral tension can worsen nausea. Gentle visceral osteopathy may significantly improve comfort.",
                },
                {
                  title: "Breathing discomfort",
                  icon: "🫁",
                  text: "In the 3rd trimester, the uterus compresses the diaphragm. Diaphragmatic release techniques improve breathing capacity and comfort.",
                },
                {
                  title: "Preparing for labour",
                  icon: "🌸",
                  text: "Optimising the mobility of the pelvis, sacrum and diaphragm to help the baby descend and ease labour. Ideally towards the end of the 3rd trimester.",
                },
                {
                  title: "Heavy legs & swelling",
                  icon: "🦵",
                  text: "Pregnancy slows circulation. Osteopathy improves mobility in the lower limbs and may contribute to circulatory comfort.",
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
          </div>
        </section>
      </SlideUp>

      {/* ========= POST-PARTUM ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                Post-partum: a gentle recovery
              </h2>
              <p className="mt-5 text-graywarm leading-relaxed">
                After giving birth, the body needs to recover from the mechanical strain of pregnancy and labour. One or two post-partum osteopathy sessions can make a real difference to your recovery.
              </p>
              <ul className="mt-6 space-y-3 text-graywarm text-base">
                {[
                  "Rebalancing the pelvis after birth (vaginal delivery or caesarean)",
                  "Treating residual pain: coccyx, perineum, lower back",
                  "Supporting a caesarean or episiotomy scar",
                  "Addressing post-partum fatigue and emotional wellbeing",
                  "Optimising posture for breastfeeding and babywearing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-secondary mt-1 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-graywarm italic">
                Ideally 4 to 8 weeks after giving birth, with medical clearance.
              </p>
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
              <p className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Typical programme</p>
              <div className="space-y-4">
                {[
                  { trimestre: "1st trimester", contenu: "Nausea, fatigue, neck tension. Very gentle techniques, mainly a visceral approach." },
                  { trimestre: "2nd trimester", contenu: "Lower back pain, pelvis, early sciatica. An ideal period for 1 or 2 supportive sessions." },
                  { trimestre: "3rd trimester", contenu: "Birth preparation, pelvic pain, breathing discomfort, heavy legs." },
                  { trimestre: "Post-partum", contenu: "Rebalancing the pelvis, residual pain, scar support, body recovery." },
                ].map(({ trimestre, contenu }) => (
                  <div key={trimestre} className="flex gap-4 p-4 rounded-xl bg-offwhite/60 border border-light/50">
                    <div className="shrink-0">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">{trimestre}</span>
                    </div>
                    <p className="text-sm text-graywarm leading-relaxed">{contenu}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FAQ ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Frequently asked questions
            </h2>
            <div className="mt-10 space-y-4">
              {[
                [
                  "Is osteopathy safe during pregnancy?",
                  "Yes. The techniques used are adapted to each trimester: a gentle tissue and visceral approach, without high-velocity cervical manipulation. Hilary is trained (CFPCO) to adapt every movement.",
                ],
                [
                  "In which trimester can I book a session while pregnant?",
                  "In any trimester. The first trimester requires a little more caution, but remains possible. The 2nd and 3rd trimesters are when most patients come in.",
                ],
                [
                  "Does osteopathy help prepare for labour?",
                  "Yes. By working on the mobility of the pelvis, sacrum and diaphragm, osteopathy helps mechanically prepare the body for labour and may improve the baby's descent.",
                ],
                [
                  "When should I book a post-partum session?",
                  "Ideally within 4 to 8 weeks after giving birth (with medical clearance). This helps rebalance the pelvis, treat residual pain, and support a caesarean or episiotomy scar.",
                ],
                [
                  "Does osteopathy relieve pregnancy-related sciatica?",
                  "Yes, this is one of the most common reasons patients come in. Pregnancy-related sciatica is often linked to sacroiliac or piriformis tension. Osteopathy safely releases these structures.",
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
            Specialised pages
          </h2>
          <p className="mt-3 text-center text-graywarm max-w-2xl mx-auto">
            Browse the pages dedicated to each specialty for detailed information and answers to your specific questions.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              {
                titre: "Infant Osteopathy",
                href: "/en/osteopathie/nourrisson",
                desc: "Colic, reflux, plagiocephaly, restrictive ties. Centre YGY trained.",
                icon: "👶",
              },
              {
                titre: "Sports Osteopathy",
                href: "/en/osteopathie/sport",
                desc: "Prevention, recovery, tendinitis, sprains. For amateurs and competitors.",
                icon: "🏃",
              },
              {
                titre: "Renata França Drainage",
                href: "/en/drainage",
                desc: "Relieve heavy legs and pregnancy swelling. Detox and wellbeing.",
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
              Are you pregnant, or have you just given birth?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              Take care of yourself and your baby right now.<br />
              Clinics in <strong>Paris 15 (75015)</strong> and <strong>Sèvres (92310)</strong>.
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
          Book an appointment
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
