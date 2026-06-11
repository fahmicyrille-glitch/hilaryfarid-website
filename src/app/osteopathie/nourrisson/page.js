import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";

export default function OsteopathieNourrissonPage() {
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
                { "@type": "ListItem", position: 3, name: "Nourrisson & Bébé", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie/nourrisson" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie/nourrisson#page",
              url: "https://www.hilaryfarid-osteopathe.fr/osteopathie/nourrisson",
              name: "Ostéopathie Nourrisson & Bébé – Hilary Farid D.O.",
              description: "Ostéopathe spécialisée nourrisson à Paris 15 et Sèvres. Coliques, reflux, plagiocéphalie, frein restrictif, torticolis congénital. Formation Centre YGY.",
              about: { "@type": "MedicalSpecialty", name: "Osteopathy" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.hilaryfarid-osteopathe.fr" },
                  { "@type": "ListItem", position: 2, name: "Ostéopathie", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie" },
                  { "@type": "ListItem", position: 3, name: "Nourrisson", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie/nourrisson" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie/nourrisson#service",
              serviceType: "Ostéopathie pédiatrique nourrisson",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
              areaServed: ["Paris 15", "Sèvres"],
              description: "Séances d'ostéopathie ultra-douces pour nourrissons. Coliques, reflux, plagiocéphalie, torticolis, troubles de la succion, freins restrictifs.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "À quel âge peut-on amener un nourrisson chez l'ostéopathe ?",
                  acceptedAnswer: { "@type": "Answer", text: "Dès la naissance. De nombreux parents consultent dans les premières semaines, notamment pour coliques, reflux, difficultés à téter ou torticolis. Il n'y a pas d'âge minimum." },
                },
                {
                  "@type": "Question",
                  name: "L'ostéopathie pour nourrisson est-elle douloureuse ?",
                  acceptedAnswer: { "@type": "Answer", text: "Non. Les techniques utilisées sont extrêmement douces — pressions légères, effleurages crâniens — entièrement adaptées à la fragilité du bébé. La séance se passe souvent pendant que bébé dort ou est éveillé tranquillement." },
                },
                {
                  "@type": "Question",
                  name: "L'ostéopathie aide-t-elle contre les coliques du nourrisson ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui, de nombreux parents constatent une amélioration après 1 à 2 séances. L'ostéopathe libère les tensions diaphragmatiques, viscérales et crâniennes susceptibles de perturber le transit et le confort digestif." },
                },
                {
                  "@type": "Question",
                  name: "L'ostéopathie peut-elle corriger une plagiocéphalie (tête plate) ?",
                  acceptedAnswer: { "@type": "Answer", text: "L'ostéopathie aide à relâcher les tensions crâniennes et améliorer la mobilité cervicale pour diversifier les appuis. Plus la prise en charge est précoce, meilleurs sont les résultats." },
                },
                {
                  "@type": "Question",
                  name: "Qu'est-ce qu'un frein restrictif et comment l'ostéopathe intervient-il ?",
                  acceptedAnswer: { "@type": "Answer", text: "Un frein restrictif (lingual, labial ou buccal) peut gêner la succion. Hilary accompagne avant et après la frénectomie, en travaillant les tensions cervicales, crâniennes et buccales pour optimiser la récupération." },
                },
                {
                  "@type": "Question",
                  name: "Combien de séances faut-il pour mon bébé ?",
                  acceptedAnswer: { "@type": "Answer", text: "1 à 2 séances suffisent souvent pour un trouble récent. Pour des tensions plus installées, un suivi est proposé. Le plan de soin est défini dès la première séance." },
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
          <span className="text-primary font-medium">Nourrisson & Bébé</span>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
                Ostéopathie pédiatrique · Formation Centre YGY
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Ostéopathie Nourrisson<br /> à Paris 15 & Sèvres
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Coliques, reflux, torticolis, plagiocéphalie, frein restrictif… Des symptômes fréquents qui répondent souvent très bien à l'ostéopathie douce. Hilary Farid est formée au <strong>Centre YGY</strong> (Catherine Rybus), référence nationale pour la prise en charge ostéopathique du nourrisson.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <div className="flex text-amber-400 text-xl">★★★★★</div>
                <span className="text-graywarm text-sm font-medium">5/5 · +100 avis Google</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
                >
                  Prendre RDV pour mon bébé
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
                src="/osteopathie/nour.webp"
                alt="Séance d'ostéopathie nourrisson par Hilary Farid ostéopathe à Paris 15 et Sèvres"
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
              Quand consulter pour votre bébé ?
            </h2>
            <p className="mt-5 text-center text-graywarm text-lg max-w-3xl mx-auto">
              De nombreux symptômes du nourrisson sont liés à des tensions mécaniques survenues durant la grossesse ou l'accouchement.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Coliques & troubles digestifs",
                  icon: "🫧",
                  text: "Pleurs inconsolables en soirée, ventre tendu, jambes ramenées. L'ostéopathie libère les tensions diaphragmatiques et viscérales qui perturbent le transit du nourrisson.",
                },
                {
                  title: "Reflux gastro-œsophagien (RGO)",
                  icon: "🔄",
                  text: "Régurgitations fréquentes, inconfort après la tétée, irritabilité. En travaillant sur le diaphragme et les structures autour de l'estomac, on améliore le confort digestif.",
                },
                {
                  title: "Plagiocéphalie (tête plate)",
                  icon: "🧠",
                  text: "Aplatissement du crâne lié à une préférence posturale. L'ostéopathie libère les tensions cervicales et crâniennes pour diversifier les appuis et favoriser la correction.",
                },
                {
                  title: "Torticolis congénital",
                  icon: "🔃",
                  text: "Bébé tourne toujours la tête du même côté. L'ostéopathie libère les tensions musculaires et articulaires cervicales pour retrouver la mobilité complète.",
                },
                {
                  title: "Troubles de la succion & allaitement",
                  icon: "🤱",
                  text: "Difficultés à téter, allaitement douloureux, mauvaise prise du sein. Hilary évalue la mécanique buccale, cervicale et crânienne pour optimiser la succion.",
                },
                {
                  title: "Freins restrictifs (pré & post frénectomie)",
                  icon: "👅",
                  text: "Frein lingual, labial ou buccal limitant la mobilité buccale. Hilary accompagne avant et après la frénectomie pour optimiser la récupération fonctionnelle.",
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
                Et aussi : nervosité, troubles du sommeil, asymétries posturales, suivi après accouchement difficile (forceps, ventouse, césarienne), bébé ne trouvant pas de position confortable.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= EXPERTISE + DÉROULEMENT ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                Une expertise reconnue en ostéopathie pédiatrique
              </h2>
              <p className="mt-5 text-graywarm leading-relaxed">
                Hilary Farid a suivi des formations avancées au <strong>Centre YGY</strong> avec Catherine Rybus, référence nationale pour la prise en charge ostéopathique des nourrissons, notamment pour les troubles de la succion, les freins restrictifs et les asymétries crâniennes.
              </p>
              <ul className="mt-6 space-y-3 text-graywarm text-base">
                {[
                  "Techniques exclusivement douces, adaptées à la fragilité du nourrisson",
                  "Approche globale : crânien, viscéral, cervical, buccal",
                  "Travail avec les parents : conseils portage, positionnement, tétée",
                  "Réseau pluri-disciplinaire : orthophonistes, podologues, sages-femmes",
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
                  Prendre RDV
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-light/60 p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-secondary mb-5">Déroulement d'une séance</p>
              <ol className="space-y-5">
                {[
                  ["Anamnèse complète", "Discussion sur la grossesse, l'accouchement, l'allaitement et les symptômes. Les parents sont pleinement intégrés à la séance."],
                  ["Bilan ostéopathique", "Observation de la posture, mobilité cervicale et crânienne. Palpation douce et respectueuse de la fragilité du nourrisson."],
                  ["Traitement doux", "Manœuvres ultra-douces souvent réalisées pendant que bébé dort. Durée totale : 45 à 60 min."],
                  ["Conseils & suivi", "Conseils personnalisés aux parents pour prolonger les effets à la maison (portage, positionnement, allaitement)."],
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
              Questions fréquentes
            </h2>
            <div className="mt-10 space-y-4">
              {[
                [
                  "À quel âge peut-on amener un nourrisson chez l'ostéopathe ?",
                  "Dès la naissance. De nombreux parents consultent dans les premières semaines, notamment pour coliques, reflux, difficultés à téter ou torticolis. Il n'y a pas d'âge minimum.",
                ],
                [
                  "L'ostéopathie pour nourrisson est-elle douloureuse ?",
                  "Non. Les techniques utilisées sont extrêmement douces — pressions légères, effleurages crâniens — entièrement adaptées à la fragilité du bébé. La séance se passe souvent pendant que bébé dort ou est éveillé tranquillement.",
                ],
                [
                  "L'ostéopathie aide-t-elle contre les coliques ?",
                  "Oui, de nombreux parents constatent une amélioration après 1 à 2 séances. L'ostéopathe libère les tensions diaphragmatiques, viscérales et crâniennes susceptibles de perturber le transit et le confort digestif.",
                ],
                [
                  "L'ostéopathie peut-elle corriger une plagiocéphalie ?",
                  "L'ostéopathie aide à relâcher les tensions crâniennes et améliorer la mobilité cervicale pour diversifier les appuis. Plus la prise en charge est précoce, meilleurs sont les résultats. Elle se combine souvent avec des exercices de repositionnement.",
                ],
                [
                  "Qu'est-ce qu'un frein restrictif et comment l'ostéopathe intervient-il ?",
                  "Un frein restrictif (lingual, labial ou buccal) peut gêner la succion et l'allaitement. Hilary accompagne avant et après la frénectomie, en travaillant sur les tensions cervicales, crâniennes et buccales pour optimiser la récupération fonctionnelle.",
                ],
                [
                  "Combien de séances faut-il pour mon bébé ?",
                  "1 à 2 séances suffisent souvent pour un trouble récent. Pour des tensions plus installées, un suivi est proposé. Le plan de soin est défini lors de la première consultation.",
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

      {/* ========= PAGES SPÉCIALISÉES ========= */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center">
            Pages spécialisées
          </h2>
          <p className="mt-3 text-center text-graywarm max-w-2xl mx-auto">
            Consultez les pages dédiées à chaque spécialité pour des informations détaillées et des réponses à vos questions spécifiques.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                titre: "Freins restrictifs",
                href: "/osteopathie/freins-restrictifs",
                desc: "Frein de langue, frein de lèvre : accompagnement ostéopathique avant et après frénectomie.",
                icon: "👅",
              },
              {
                titre: "Plagiocéphalie",
                href: "/osteopathie/plagiocephalie",
                desc: "Tête plate positionnelle : traitement doux et précoce, idéalement avant 4 mois.",
                icon: "🧠",
              },
              {
                titre: "Grossesse & Post-partum",
                href: "/osteopathie/femme-enceinte",
                desc: "Lombalgies, sciatique, préparation à l'accouchement, récupération post-partum.",
                icon: "🤰",
              },
              {
                titre: "Drainage Renata França",
                href: "/drainage",
                desc: "Technique manuelle douce pour jambes légères, détox et bien-être profond.",
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
                  En savoir plus →
                </span>
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
              Votre bébé a besoin d'une consultation ?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              Cabinets à <strong>Paris 15 (75015)</strong> et <strong>Sèvres (92310)</strong>. Prise de RDV en ligne sur Doctolib.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="trigger-booking-modal bg-doctolib text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
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
          className="trigger-booking-modal flex-1 bg-doctolib text-white py-3 rounded-full font-bold text-sm shadow-md"
        >
          Prendre RDV
        </button>
        <a
          href="tel:+33672014539"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-full font-bold text-sm border border-[#0596DE] text-doctolib"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
          Appeler
        </a>
      </div>

      <BackToTop />
    </main>
  );
}
