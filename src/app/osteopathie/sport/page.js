import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";

export default function OsteopathieSportPage() {
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
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.hilaryfarid-osteopathe.fr" },
                { "@type": "ListItem", position: 2, name: "Ostéopathie", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie" },
                { "@type": "ListItem", position: 3, name: "Ostéopathie du Sport", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie/sport" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie/sport#page",
              url: "https://www.hilaryfarid-osteopathe.fr/osteopathie/sport",
              name: "Ostéopathie du Sport – Hilary Farid D.O.",
              description: "Ostéopathe du sport à Paris 15 et Sèvres. Récupération, prévention des blessures, tendinites, entorses. Pour sportifs amateurs et compétiteurs.",
              about: { "@type": "MedicalSpecialty", name: "Osteopathy" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.hilaryfarid-osteopathe.fr" },
                  { "@type": "ListItem", position: 2, name: "Ostéopathie", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie" },
                  { "@type": "ListItem", position: 3, name: "Sport", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie/sport" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie/sport#service",
              serviceType: "Ostéopathie du sport",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
              areaServed: ["Paris 15", "Sèvres"],
              description: "Consultations d'ostéopathie pour sportifs amateurs et compétiteurs. Récupération, prévention des blessures, traitement post-traumatique.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quand consulter un ostéopathe en tant que sportif ?",
                  acceptedAnswer: { "@type": "Answer", text: "Avant une compétition (bilan préventif), après un traumatisme (entorse, chute), en cas de douleurs chroniques limitant l'entraînement, ou en récupération après un effort intensif. Un bilan annuel est également recommandé." },
                },
                {
                  "@type": "Question",
                  name: "L'ostéopathie peut-elle soigner une tendinite ?",
                  acceptedAnswer: { "@type": "Answer", text: "L'ostéopathie ne guérit pas directement une tendinite, mais elle traite les déséquilibres mécaniques qui la provoquent ou l'entretiennent. En libérant les tensions en amont et en aval, elle accélère la récupération et prévient les récidives." },
                },
                {
                  "@type": "Question",
                  name: "L'ostéopathie améliore-t-elle les performances sportives ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui, en permettant une meilleure mobilité globale, une respiration plus efficace et une meilleure récupération neuromusculaire. De nombreux sportifs de haut niveau intègrent l'ostéopathie à leur préparation physique." },
                },
                {
                  "@type": "Question",
                  name: "Combien de temps avant une compétition consulter ?",
                  acceptedAnswer: { "@type": "Answer", text: "Idéalement 7 à 10 jours avant une épreuve importante, pour laisser le temps au corps d'intégrer les ajustements. Dans la semaine précédant une compétition, la séance est adaptée pour ne pas perturber la préparation." },
                },
                {
                  "@type": "Question",
                  name: "L'ostéopathie aide-t-elle à récupérer plus vite après l'effort ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui. En améliorant la circulation, en libérant les tensions musculaires et en optimisant la mobilité articulaire, l'ostéopathie favorise une récupération plus rapide et de meilleure qualité après un effort intense ou une compétition." },
                },
              ],
            },
          ])
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="bg-offwhite border-b border-light/50 px-6 py-3">
        <div className="max-w-5xl mx-auto text-sm text-graywarm flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span className="text-light">/</span>
          <Link href="/osteopathie" className="hover:text-primary transition-colors">Ostéopathie</Link>
          <span className="text-light">/</span>
          <span className="text-primary font-medium">Ostéopathie du Sport</span>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
                Ostéopathie du Sport · Prévention & Performance
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Ostéopathie du Sport<br /> à Paris 15 & Sèvres
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Que vous soyez coureur du dimanche, nageur compétiteur ou pratiquant régulier, l'ostéopathie vous aide à <strong>performer sans douleur</strong>, récupérer plus vite et prévenir les blessures qui bloquent votre progression.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <div className="flex text-amber-400 text-xl">★★★★★</div>
                <span className="text-graywarm text-sm font-medium">5/5 · +100 avis Google</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="trigger-booking-modal inline-flex items-center gap-2 bg-[#0596DE] text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-[#047cbd] transition-all transform hover:-translate-y-1"
                >
                  Prendre RDV
                </button>
                <Link href="/tarifs" className="inline-flex items-center text-primary text-base font-medium underline underline-offset-4 hover:text-secondary">
                  Voir les tarifs
                </Link>
              </div>
              <p className="mt-4 text-sm text-graywarm">
                Cabinets à <strong>Paris 15 (75015)</strong> et <strong>Sèvres (92310)</strong>
              </p>
            </div>
            <div className="relative w-full h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-light/50">
              <Image
                src="/osteopathie/sport.webp"
                alt="Ostéopathie du sport par Hilary Farid à Paris 15 et Sèvres"
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
              Quand consulter un ostéopathe sportif ?
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  phase: "Avant",
                  titre: "Bilan préventif",
                  icon: "🎯",
                  items: [
                    "Avant une compétition ou reprise d'activité",
                    "Bilan annuel de mobilité et d'équilibre",
                    "Détection des zones de compensation silencieuses",
                    "Optimisation de la chaîne posturale",
                  ],
                },
                {
                  phase: "Pendant",
                  titre: "Traitement des blessures",
                  icon: "🩹",
                  items: [
                    "Tendinites (Achille, rotulienne, épaule)",
                    "Entorses et suites de traumatismes",
                    "Douleurs lombaires et cervicales du sportif",
                    "Pubalgie, périostite, syndrome de la bandelette",
                  ],
                },
                {
                  phase: "Après",
                  titre: "Récupération",
                  icon: "⚡",
                  items: [
                    "Récupération post-compétition",
                    "Soulagement des tensions musculaires résiduelles",
                    "Amélioration de la qualité du sommeil et de la récupération",
                    "Réduction du temps de retour à l'entraînement",
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

      {/* ========= SPORTS & PATHOLOGIES ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Sports et pathologies fréquemment traités
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { icon: "🏃", sport: "Course à pied", patho: "Syndrome de la bandelette ilio-tibiale, périostite tibiale, douleur de genou du coureur" },
                { icon: "🏊", sport: "Natation", patho: "Épaule du nageur, douleurs cervicales, blocages de la cage thoracique" },
                { icon: "🚴", sport: "Cyclisme", patho: "Cervicalgie du cycliste, genoux, dos de selle, douleurs de poignets" },
                { icon: "⚽", sport: "Football / Rugby", patho: "Entorses de cheville, pubalgie, douleurs lombaires, traumatismes crâniens légers" },
                { icon: "🎾", sport: "Tennis / Padel", patho: "Épicondylite (tennis elbow), douleurs d'épaule, blocages dorsaux" },
                { icon: "🏋️", sport: "CrossFit / Musculation", patho: "Douleurs d'épaule, lombalgies, hanches, genoux" },
                { icon: "🩰", sport: "Danse / Arts martiaux", patho: "Mobilité articulaire, entorses, tensions chroniques des chaînes postérieures" },
                { icon: "🏅", sport: "Tout sport de compétition", patho: "Bilan semestriel préventif, préparation physique intégrative" },
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
              Questions fréquentes
            </h2>
            <div className="mt-10 space-y-4">
              {[
                [
                  "Quand consulter un ostéopathe en tant que sportif ?",
                  "Avant une compétition (bilan préventif), après un traumatisme, en cas de douleurs chroniques limitant l'entraînement, ou en récupération. Un bilan annuel est recommandé pour tout sportif régulier.",
                ],
                [
                  "L'ostéopathie peut-elle soigner une tendinite ?",
                  "L'ostéopathie traite les déséquilibres mécaniques qui provoquent ou entretiennent la tendinite. En libérant les tensions en amont et en aval, elle accélère la récupération et prévient les récidives.",
                ],
                [
                  "L'ostéopathie améliore-t-elle les performances sportives ?",
                  "Oui. Meilleure mobilité globale, respiration plus efficace, récupération neuromusculaire optimisée. De nombreux sportifs de haut niveau intègrent l'ostéopathie à leur préparation physique.",
                ],
                [
                  "Combien de temps avant une compétition consulter ?",
                  "Idéalement 7 à 10 jours avant une épreuve importante, pour laisser le corps intégrer les ajustements. Dans la semaine précédant la compétition, la séance est adaptée pour ne pas perturber la préparation.",
                ],
                [
                  "L'ostéopathie aide-t-elle à récupérer plus vite après l'effort ?",
                  "Oui. En améliorant la circulation, libérant les tensions musculaires et optimisant la mobilité articulaire, l'ostéopathie favorise une récupération plus rapide après un effort intense.",
                ],
              ].map(([q, a]) => (
                <details
                  key={q}
                  className="group bg-white border border-light/80 rounded-2xl shadow-sm [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between font-bold text-[#1E293B] text-base cursor-pointer p-6">
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

      {/* ========= LIENS INTER-PAGES ========= */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-graywarm text-xs font-bold uppercase tracking-wider mb-5">Autres spécialités</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              ["Ostéopathie Nourrisson", "/osteopathie/nourrisson", "Coliques, reflux, plagiocéphalie, freins restrictifs."],
              ["Femme enceinte & Post-partum", "/osteopathie/femme-enceinte", "Accompagnement grossesse et récupération après accouchement."],
              ["Drainage Renata França", "/drainage", "Récupération musculaire, jambes légères et bien-être."],
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

      {/* ========= CTA FINAL ========= */}
      <FadeIn>
        <section className="py-16 px-6 text-center bg-primary/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary">
              Prêt(e) à performer sans douleur ?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              Cabinets à <strong>Paris 15 (75015)</strong> et <strong>Sèvres (92310)</strong>. Prise de RDV en ligne sur Doctolib.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="trigger-booking-modal bg-[#0596DE] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#047cbd] transition-all transform hover:-translate-y-1"
              >
                Prendre RDV Doctolib
              </button>
              <Link
                href="/osteopathie"
                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-primary bg-white border border-light/80 shadow-sm hover:bg-offwhite transition-colors"
              >
                Retour à l'ostéopathie
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-light/60 shadow-lg px-4 py-3 flex gap-3">
        <button
          type="button"
          className="trigger-booking-modal flex-1 bg-[#0596DE] text-white py-3 rounded-full font-bold text-sm shadow-md"
        >
          Prendre RDV
        </button>
        <a
          href="tel:+33672014539"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-full font-bold text-sm border border-[#0596DE] text-[#0596DE]"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          Appeler
        </a>
      </div>

      <BackToTop />
    </main>
  );
}
