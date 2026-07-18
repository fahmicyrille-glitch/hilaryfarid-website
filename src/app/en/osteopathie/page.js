import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import OsteopathieNav from "@/components/OsteopathieNav";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";

export default function OsteopathieEnPage() {
  return (
    <main className="relative">
      <OsteopathieNav />

      {/* JSON-LD inline — in the initial HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/osteopathie#page",
              url: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie",
              inLanguage: "en",
              name: "Osteopathy – Hilary Farid Osteopath D.O.",
              description:
                "Gentle, whole-body osteopathy for adults, infants, pregnant women, children and athletes. Specialised in perinatal care and infant feeding/sucking difficulties.",
              about: { "@type": "MedicalSpecialty", name: "Osteopathy" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hilaryfarid-osteopathe.fr/en" },
                  { "@type": "ListItem", position: 2, name: "Osteopathy", item: "https://www.hilaryfarid-osteopathe.fr/en/osteopathie" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/osteopathie#service",
              serviceType: "Osteopathy",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
              description:
                "Osteopathy consultations for adults, infants, pregnant women, athletes and seniors. A gentle, personalised approach. English spoken.",
              areaServed: ["Sèvres", "Paris 15"],
              audience: ["Adult", "Infant", "PregnantWomen", "Athlete", "Child"],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/osteopathie#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "When should I see an osteopath?",
                  acceptedAnswer: { "@type": "Answer", text: "It is recommended to consult in case of musculoskeletal pain (back, neck, joints), digestive discomfort, stress, migraines, for pregnancy follow-up or infant discomfort. An annual preventive check-up is also an excellent way to prevent pain from developing." },
                },
                {
                  "@type": "Question",
                  name: "Is osteopathy suitable for infants?",
                  acceptedAnswer: { "@type": "Answer", text: "Absolutely. Extremely gentle techniques are used, particularly effective for torticollis, reflux, plagiocephaly (flat head) and breastfeeding/sucking difficulties (restrictive tongue or lip ties)." },
                },
                {
                  "@type": "Question",
                  name: "Does osteopathy help during pregnancy?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, osteopathy helps the body adapt to postural changes, relieves lower back pain, sciatica and pelvic tension, and improves breathing function. It can also help mechanically prepare the body for labour." },
                },
                {
                  "@type": "Question",
                  name: "How many sessions are needed?",
                  acceptedAnswer: { "@type": "Answer", text: "In general, 1 to 2 sessions are enough for a recent issue. For chronic pain, more regular follow-up may be suggested. This depends on how long the problem has been present and is discussed at the very first session." },
                },
              ],
            },
          ])
        }}
      />

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6 xl:pl-80">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm md:text-base text-secondary mb-3 font-semibold">
                Gentle & whole-body osteopathy
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-ink">
                Relieving your pain,<br /> restoring mobility & comfort.
              </h1>

              <p className="mt-6 text-lg md:text-xl text-graywarm leading-relaxed">
                Osteopathy is a gentle, hands-on approach aimed at
                improving mobility, reducing pain and rebalancing the
                body as a whole. Suitable for all ages: infants, children, teenagers, adults, pregnant
                women and athletes.
              </p>

              {/* ⭐ IMMEDIATE SOCIAL PROOF ⭐ */}
              <div className="mt-6 mb-2 flex items-center gap-2">
                <div className="flex text-amber-400 text-xl drop-shadow-sm">
                  ★★★★★
                </div>
                <span className="text-graywarm text-sm font-medium">
                  {GLOBAL_REVIEW_RATING}/5 on Google ({GLOBAL_REVIEW_COUNT} reviews)
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <button
                  type="button"
                  className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
                >
                  Book via Doctolib
                </button>
                <Link
                  href="/en/tarifs"
                  className="inline-flex items-center text-primary text-lg font-medium underline underline-offset-4 hover:text-secondary"
                >
                  See pricing
                </Link>
              </div>

              {/* Quick pricing */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Adult", price: "€70" },
                  { label: "Infant / Child", price: "€50" },
                  { label: "Mother + Baby", price: "€100" },
                  { label: "Sunday / Bank Holiday", price: "€90" },
                ].map(({ label, price }) => (
                  <div key={label} className="bg-white/80 border border-light/60 rounded-xl p-3 text-center shadow-sm">
                    <p className="text-lg font-bold text-primary">{price}</p>
                    <p className="text-xs text-graywarm mt-0.5 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-graywarm">
                Reimbursement possible via French health insurance (mutuelle) · Sèvres & Paris 15
              </p>
            </div>

            <div className="relative w-full h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-light/50">
              <Image
                src="/osteopathie/man.webp"
                alt="Neck pain relieved by osteopathy"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= TABLE OF CONTENTS (MOBILE) ========= */}
      <section className="xl:hidden py-6 px-6 bg-white border-b border-light/50 shadow-sm sticky top-0 z-30">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-primary mb-3 uppercase tracking-wider text-center">Quick contents</p>
          <div className="flex overflow-x-auto pb-2 gap-3 snap-x scrollbar-hide">
            {[
              ["Who is it for?", "a-qui-sadresse"],
              ["Reasons", "motifs"],
              ["How it works", "deroulement"],
              ["Why consult me?", "pourquoi-consulter"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="snap-start shrink-0 px-5 py-2.5 bg-offwhite rounded-full text-sm font-medium text-graywarm hover:text-primary hover:bg-light transition whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========= WHO IS IT FOR (Expertise-optimised) ========= */}
      <SlideUp>
        <section id="a-qui-sadresse" className="py-16 md:py-24 px-6 bg-light xl:pl-80">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Who is osteopathy for?
            </h2>
            <p className="mt-5 text-center text-graywarm text-lg max-w-3xl mx-auto leading-relaxed">
              Osteopathy adapts to every age and to each person's history. Every
              technique is chosen based on your comfort, your medical history and your
              specific needs.
            </p>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Infants - OPTIMISED */}
              <FadeIn delay={0.1}>
                <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-light/60 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/osteopathie/nour.webp"
                      alt="Infant and paediatric osteopathy"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs uppercase tracking-wider px-3 py-1 rounded font-medium">YGY Expertise</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-primary text-xl">Infants</h3>
                    <ul className="mt-4 text-base text-graywarm space-y-2 list-disc list-outside ml-5 leading-relaxed">
                      <li><strong>Suckling & breastfeeding difficulties</strong></li>
                      <li>Restrictive tongue/lip ties (pre & post frenectomy)</li>
                      <li>Colic, reflux, asymmetries</li>
                      <li>Plagiocephaly, torticollis</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

              {/* Pregnant women - OPTIMISED */}
              <FadeIn delay={0.2}>
                <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-light/60 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/osteopathie/FE.webp"
                      alt="Osteopathy for pregnant women"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs uppercase tracking-wider px-3 py-1 rounded font-medium">CFPCO Trained</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-primary text-xl">Pregnant women</h3>
                    <ul className="mt-4 text-base text-graywarm space-y-2 list-disc list-outside ml-5 leading-relaxed">
                      <li>Lower back pain & pelvic pain</li>
                      <li>Breathing discomfort & mobility</li>
                      <li>Preparing the body for labour</li>
                      <li>Post-partum recovery</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

              {/* Children & teenagers */}
              <FadeIn delay={0.3}>
                <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-light/60 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/osteopathie/enfant.webp"
                      alt="Osteopathy for children"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-primary text-xl">Children & Teenagers</h3>
                    <ul className="mt-4 text-base text-graywarm space-y-2 list-disc list-outside ml-5 leading-relaxed">
                      <li>Growth & posture follow-up</li>
                      <li>Support for young athletes</li>
                      <li>Headaches & school-related fatigue</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

              {/* Adults */}
              <FadeIn delay={0.4}>
                <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-light/60 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/osteopathie/woman.webp"
                      alt="Osteopathy for adults"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-primary text-xl">Adults & Seniors</h3>
                    <ul className="mt-4 text-base text-graywarm space-y-2 list-disc list-outside ml-5 leading-relaxed">
                      <li>Back, neck and shoulder pain</li>
                      <li>Digestive discomfort & stress</li>
                      <li>Posture & chronic fatigue</li>
                      <li>Annual preventive check-up</li>
                    </ul>
                  </div>
                </article>
              </FadeIn>

            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= REASONS ========= */}
      <SlideUp>
        <section id="motifs" className="py-16 md:py-24 px-6 xl:pl-80 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Common reasons to book a session
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {/* Musculoskeletal */}
              <FadeIn delay={0.1}>
                <div className="p-8 rounded-2xl border border-light/60 bg-offwhite/50 flex flex-col items-center text-center hover:bg-offwhite transition-colors h-full">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md ring-4 ring-white mb-6">
                    <Image
                      src="/osteopathie/urgence.webp"
                      alt="Musculoskeletal pain"
                      fill
                      sizes="128px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-primary text-xl">Back, neck & joints</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed">
                    Torticollis, shoulder, elbow or wrist pain, lower back pain, hip, knee and ankle pain.
                  </p>
                </div>
              </FadeIn>

              {/* TMJ */}
              <FadeIn delay={0.2}>
                <div className="p-8 rounded-2xl border border-light/60 bg-offwhite/50 flex flex-col items-center text-center hover:bg-offwhite transition-colors h-full">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md ring-4 ring-white mb-6">
                    <Image
                      src="/osteopathie/machoir.webp"
                      alt="Jaw (TMJ) pain"
                      fill
                      sizes="128px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-primary text-xl">Jaw & migraines</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed">
                    Bruxism, teeth clenching, ophthalmic migraines, chronic headaches, discomfort when chewing.
                  </p>
                </div>
              </FadeIn>

              {/* Sport */}
              <FadeIn delay={0.3}>
                <div className="p-8 rounded-2xl border border-light/60 bg-offwhite/50 flex flex-col items-center text-center hover:bg-offwhite transition-colors h-full">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md ring-4 ring-white mb-6">
                    <Image
                      src="/osteopathie/sport.webp"
                      alt="Sports osteopathy"
                      fill
                      sizes="128px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-primary text-xl">Sport & performance</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed">
                    Recovery after exercise, injury prevention, post-injury follow-up (tendinitis, sprains).
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= HOW A SESSION WORKS ========= */}
      <SlideUp>
        <section id="deroulement" className="py-16 md:py-24 px-6 bg-light xl:pl-80">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              How does a session work?
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl border border-light/50 p-8 shadow-sm hover:shadow-md transition-shadow h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[120px] font-black text-light/30 leading-none -mt-8 -mr-4 select-none">1</div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary relative z-10">Listening</p>
                  <h3 className="font-bold text-primary text-xl mt-3 relative z-10">Full case history</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed relative z-10">
                    A detailed discussion about your pain, your medical history, your lifestyle and your goals for this session.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl border border-light/50 p-8 shadow-sm hover:shadow-md transition-shadow h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[120px] font-black text-light/30 leading-none -mt-8 -mr-4 select-none">2</div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary relative z-10">Assessment</p>
                  <h3 className="font-bold text-primary text-xl mt-3 relative z-10">Observation & tests</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed relative z-10">
                    Active and passive mobility tests, gentle palpation and postural analysis to understand the origin of your restrictions.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white rounded-2xl border border-light/50 p-8 shadow-sm hover:shadow-md transition-shadow h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[120px] font-black text-light/30 leading-none -mt-8 -mr-4 select-none">3</div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary relative z-10">Treatment</p>
                  <h3 className="font-bold text-primary text-xl mt-3 relative z-10">Personalised care</h3>
                  <p className="text-base text-graywarm mt-4 leading-relaxed relative z-10">
                    Gentle techniques (soft-tissue, cranial, visceral or joint-based), specifically adapted to your age and comfort.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="mt-10 bg-white/60 backdrop-blur-sm border border-light/80 rounded-xl p-5 max-w-md mx-auto text-center shadow-sm">
              <p className="text-graywarm text-base">
                ⏱ An osteopathy session lasts on average <strong className="text-primary font-bold">55 minutes</strong>.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= WHY CONSULT ME ========= */}
      <SlideUp>
        <section id="pourquoi-consulter" className="py-16 md:py-24 px-6 bg-offwhite xl:pl-80">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Why consult Hilary Farid?
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-8 text-graywarm leading-relaxed">

              {/* Box 1 */}
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-light/40 hover:border-secondary/30 transition-colors">
                <div className="w-14 h-14 bg-light/50 rounded-full flex items-center justify-center mb-5 text-2xl">🤝</div>
                <h3 className="font-bold text-ink text-xl">A gentle, reassuring approach</h3>
                <p className="mt-4 text-base">
                  A graduate of the Institut Dauphine d'Ostéopathie (IDO Paris), I am trained in structural, visceral, cranial and soft-tissue techniques. I adapt every movement to your comfort.
                </p>
              </div>

              {/* Box 2 : FLAGSHIP EXPERTISE */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-light/30 shadow-md border border-secondary/20 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-7xl opacity-10">👶</div>
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-5 text-2xl">🎓</div>
                <h3 className="font-bold text-ink text-xl">Highly specialised in perinatal care</h3>
                <p className="mt-4 text-base text-ink/90 leading-relaxed">
                  Ongoing expert training: <strong>Centre YGY</strong> (Catherine Rybus) for infants, sucking difficulties and restrictive tongue/lip ties. <strong>CFPCO</strong> for specialised care of pregnant women.
                </p>
              </div>

              {/* Box 3 */}
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-light/40 hover:border-secondary/30 transition-colors">
                <div className="w-14 h-14 bg-light/50 rounded-full flex items-center justify-center mb-5 text-2xl">📋</div>
                <h3 className="font-bold text-ink text-xl">Clear & personalised follow-up</h3>
                <p className="mt-4 text-base">
                  The goal isn't just to make joints "click". You'll leave with a clear explanation of your body's patterns, targeted advice and a genuine care plan.
                </p>
              </div>

              {/* Box 4 */}
              <div className="p-8 rounded-2xl bg-white shadow-sm border border-light/40 hover:border-secondary/30 transition-colors">
                <div className="w-14 h-14 bg-light/50 rounded-full flex items-center justify-center mb-5 text-2xl">📍</div>
                <h3 className="font-bold text-ink text-xl">Two easily accessible clinics</h3>
                <p className="mt-4 text-base">
                  Recently renovated, welcoming clinics in Sèvres and Paris 15, both very well served by public transport. Easy stroller access.
                </p>
              </div>

            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= DETAILED SPECIALTIES ========= */}
      <SlideUp>
        <section id="specialites" className="py-14 px-6 bg-white xl:pl-80">
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
                  desc: "Colic, reflux, torticollis, sucking difficulties. Centre YGY trained.",
                  icon: "👶",
                },
                {
                  titre: "Restrictive Ties",
                  href: "/en/osteopathie/freins-restrictifs",
                  desc: "Tongue-tie, lip-tie: support before and after frenectomy.",
                  icon: "👅",
                },
                {
                  titre: "Plagiocephaly",
                  href: "/en/osteopathie/plagiocephalie",
                  desc: "Positional flat head: gentle, early osteopathic treatment before 4 months.",
                  icon: "🧠",
                },
                {
                  titre: "Pregnancy & Post-partum",
                  href: "/en/osteopathie/femme-enceinte",
                  desc: "Lower back pain, sciatica, birth preparation, post-partum recovery.",
                  icon: "🤰",
                },
                {
                  titre: "Sports Osteopathy",
                  href: "/en/osteopathie/sport",
                  desc: "Prevention, recovery, tendinitis, sprains. For amateurs and competitors.",
                  icon: "🏃",
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
      </SlideUp>

      {/* ========= RISKS ========= */}
      <SlideUp>
        <section id="risques" className="py-16 md:py-20 px-6 bg-light xl:pl-80">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-light/60">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">⚠️</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                Risks & contraindications
              </h2>
            </div>

            <p className="text-graywarm text-lg leading-relaxed">
              Osteopathy is a gentle, complementary, non-invasive practice. However, certain medical situations require a doctor's advice before any manipulation:
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-5 text-graywarm text-base">
              <li className="flex items-start gap-3 bg-offwhite/50 p-4 rounded-xl border border-light/40">
                <span className="text-red-400 mt-1">•</span> High fever or acute infection
              </li>
              <li className="flex items-start gap-3 bg-offwhite/50 p-4 rounded-xl border border-light/40">
                <span className="text-red-400 mt-1">•</span> Recent trauma (accident, severe fall)
              </li>
              <li className="flex items-start gap-3 bg-offwhite/50 p-4 rounded-xl border border-light/40">
                <span className="text-red-400 mt-1">•</span> Unusual chest pain
              </li>
              <li className="flex items-start gap-3 bg-offwhite/50 p-4 rounded-xl border border-light/40">
                <span className="text-red-400 mt-1">•</span> Sudden loss of strength in a limb
              </li>
              <li className="flex items-start gap-3 bg-offwhite/50 p-4 rounded-xl border border-light/40 sm:col-span-2">
                <span className="text-red-400 mt-1">•</span> Sudden neurological symptoms
              </li>
            </ul>

            <div className="mt-10 p-5 bg-primary/5 rounded-2xl border border-primary/10 text-center">
              <p className="text-primary font-medium text-base">
                If in doubt, don't hesitate to call me directly. I will help guide you towards the right care.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FAQ ========= */}
      <SlideUp>
        <section id="faq" className="py-16 md:py-24 px-6 bg-offwhite xl:pl-80">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Frequently Asked Questions (FAQ)
            </h2>

            <div className="mt-12 space-y-5">
              <details className="group bg-white border border-light/80 rounded-2xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-ink text-lg cursor-pointer p-6 md:p-8">
                  <span>When should I see an osteopath?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-graywarm text-base px-6 md:px-8 pb-8 pt-0 leading-relaxed border-t border-light/30 mt-2 pt-6">
                  It is recommended to consult in case of musculoskeletal pain (back, neck, joints), digestive discomfort, stress, migraines, for pregnancy follow-up or infant discomfort. An annual preventive check-up is also an excellent way to prevent pain from developing.
                </p>
              </details>

              <details className="group bg-white border border-light/80 rounded-2xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-ink text-lg cursor-pointer p-6 md:p-8">
                  <span>Is osteopathy suitable for infants?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-graywarm text-base px-6 md:px-8 pb-8 pt-0 leading-relaxed border-t border-light/30 mt-2 pt-6">
                  Absolutely. I am specifically trained (Centre YGY) to use extremely gentle, pain-free techniques. This is particularly effective for torticollis, reflux, plagiocephaly (flat head), and breastfeeding/sucking difficulties (restrictive tongue or lip ties).
                </p>
              </details>

              <details className="group bg-white border border-light/80 rounded-2xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-ink text-lg cursor-pointer p-6 md:p-8">
                  <span>Does osteopathy help during pregnancy?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-graywarm text-base px-6 md:px-8 pb-8 pt-0 leading-relaxed border-t border-light/30 mt-2 pt-6">
                  Yes, this is one of the best times to consult. Osteopathy helps the body adapt to postural changes, relieves lower back pain, sciatica and pelvic tension, and improves breathing function. It can also help mechanically prepare the body for labour.
                </p>
              </details>

              <details className="group bg-white border border-light/80 rounded-2xl shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-ink text-lg cursor-pointer p-6 md:p-8">
                  <span>How many sessions are needed?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-graywarm text-base px-6 md:px-8 pb-8 pt-0 leading-relaxed border-t border-light/30 mt-2 pt-6">
                  It depends on how long the problem has been present. In general, 1 to 2 sessions are enough for a recent (acute) issue. For chronic pain, slightly more regular follow-up may be suggested. In every case, we discuss this together from the very first session.
                </p>
              </details>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FINAL CTA ========= */}
      <FadeIn>
        <section className="py-20 px-6 text-center xl:pl-80 bg-white">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-3xl p-10 md:p-14 border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              Still unsure whether to consult?
            </h2>
            <p className="mt-5 text-graywarm text-lg leading-relaxed">
              Not sure whether osteopathy can help with your issue, or would you like a first opinion before taking the plunge? I'm happy to answer your questions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button
                type="button"
                className="trigger-booking-modal w-full sm:w-auto bg-doctolib text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1 text-center"
              >
                Book an appointment
              </button>
              <Link
                href="/en/contact"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full text-lg font-bold text-primary bg-white border border-light/80 shadow-sm hover:bg-offwhite transition-colors"
              >
                Ask a question
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* === Back to top button via component === */}
      <BackToTop />

    </main>
  );
}
