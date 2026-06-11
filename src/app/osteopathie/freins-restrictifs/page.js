import Link from "next/link";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import { IconPhone } from "@/components/icons/UiIcons";

export default function FreinsRestrictifsPage() {
  const faq = [
    {
      q: "Mon bébé a un frein de langue — dois-je d'abord voir un chirurgien ou un ostéopathe ?",
      a: "Les deux approches sont complémentaires. L'idéal est de consulter l'ostéopathe dès que possible pour travailler sur les tensions, puis de planifier l'évaluation chirurgicale. Les deux peuvent se mener en parallèle.",
    },
    {
      q: "Combien de séances faut-il pour les freins restrictifs ?",
      a: "En général, 2 à 4 séances : une ou deux avant la frénectomie pour préparer les tissus, une ou deux après pour accompagner la récupération. Le protocole est adapté selon la sévérité et la progression.",
    },
    {
      q: "L'ostéopathie peut-elle remplacer la frénectomie ?",
      a: "Non. L'ostéopathie ne raccourcit pas un frein. Elle optimise la mécanique corporelle autour du frein et améliore la récupération après sa section. Le geste chirurgical ou laser reste nécessaire si le frein est fonctionnellement restrictif.",
    },
    {
      q: "Mon bébé a 3 mois — est-il trop tard pour agir ?",
      a: "Non. L'ostéopathie et la frénectomie restent efficaces jusqu'à 6-12 mois et au-delà. Les priorités évoluent (allaitement, introduction solides, phonation) mais la prise en charge reste pertinente.",
    },
    {
      q: "Peut-on s'en occuper si j'allaite au biberon ?",
      a: "Oui. Les difficultés liées aux freins restrictifs touchent aussi l'alimentation au biberon (fatigue, prise d'air, reflux). La prise en charge est identique.",
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
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.hilaryfarid-osteopathe.fr" },
                { "@type": "ListItem", position: 2, name: "Ostéopathie", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie" },
                { "@type": "ListItem", position: 3, name: "Nourrisson", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie/nourrisson" },
                { "@type": "ListItem", position: 4, name: "Freins restrictifs", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie/freins-restrictifs" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              url: "https://www.hilaryfarid-osteopathe.fr/osteopathie/freins-restrictifs",
              name: "Freins Restrictifs du Nourrisson — Ostéopathie",
              description: "Frein de langue, frein de lèvre : accompagnement ostéopathique avant et après frénectomie à Paris 15 et Sèvres.",
              about: { "@type": "MedicalCondition", name: "Ankyloglossie (frein restrictif)" },
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
      <nav aria-label="Fil d'Ariane" className="bg-offwhite border-b border-light/50 px-6 py-3">
        <div className="max-w-5xl mx-auto text-sm text-graywarm flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span className="opacity-40">/</span>
          <Link href="/osteopathie" className="hover:text-primary transition-colors">Ostéopathie</Link>
          <span className="opacity-40">/</span>
          <Link href="/osteopathie/nourrisson" className="hover:text-primary transition-colors">Nourrisson</Link>
          <span className="opacity-40">/</span>
          <span className="text-primary font-medium">Freins restrictifs</span>
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
                Freins restrictifs<br />chez le nourrisson
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Frein de langue, frein de lèvre, frein de joue — ces freins muqueux trop courts peuvent perturber l'allaitement, la succion et le confort de votre bébé. Hilary Farid vous accompagne <strong>avant et après la frénectomie</strong> pour optimiser la récupération.
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
            <div className="relative w-full h-72 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-light/50">
              <Image
                src="/osteopathie/nour.webp"
                alt="Ostéopathie nourrisson freins restrictifs – Hilary Farid"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= SIGNES ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Signes qui doivent alerter
            </h2>
            <p className="mt-5 text-center text-graywarm text-lg max-w-3xl mx-auto">
              Les freins restrictifs peuvent se manifester de nombreuses façons. Ces signes, isolés ou combinés, méritent une évaluation.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                { icon: "🤱", title: "Difficultés à l'allaitement", text: "Bébé ne maintient pas la prise, glisse du sein, doit recommencer. La tétée dure longtemps et bébé semble épuisé sans être rassasié." },
                { icon: "🔊", title: "Clics pendant la tétée", text: "Bruits de succion anormaux (clics, smacks) signalant une mauvaise étanchéité buccale et une ingestion d'air excessive." },
                { icon: "💨", title: "Gaz et ballonnements", text: "L'air ingéré par mauvais joint labial distend l'intestin et provoque coliques, gaz et inconfort digestif." },
                { icon: "⏱️", title: "Tétées épuisantes", text: "Bébé se fatigue avant d'être rassasié, s'endort au sein mais réclame à nouveau très rapidement. Prise de poids insuffisante possible." },
                { icon: "😣", title: "Douleurs maternelles", text: "Crevasses, douleurs lors de la mise au sein persistant au-delà des premiers jours. Signe d'une mauvaise mécanique de succion." },
                { icon: "🔄", title: "Reflux associé", text: "La succion inefficace crée une pression négative qui favorise les remontées gastriques. Un frein restrictif peut aggraver un RGO existant." },
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

      {/* ========= RÔLE OSTÉOPATHIE ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Le rôle de l'ostéopathie
            </h2>
            <p className="mt-5 text-center text-graywarm text-lg max-w-3xl mx-auto">
              L'ostéopathie ne traite pas le frein lui-même — c'est le rôle du chirurgien. Elle prépare et accompagne votre bébé pour des résultats optimaux.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⏮️</span>
                  <h3 className="text-xl font-bold text-primary">Avant la frénectomie</h3>
                </div>
                <ul className="space-y-3 text-graywarm">
                  {[
                    "Libération des tensions cervicales et crâniennes liées à la naissance",
                    "Amélioration de la mobilité de l'os hyoïde et de la base du crâne",
                    "Réduction des compensations posturales (torticolis, rotation préférentielle)",
                    "Préparation à une rééducation plus rapide après le geste",
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
                  <h3 className="text-xl font-bold text-primary">Après la frénectomie</h3>
                </div>
                <ul className="space-y-3 text-graywarm">
                  {[
                    "Accompagnement de la cicatrisation pour éviter les rétractations",
                    "Libération des tensions musculaires et fasciales de la région buccale",
                    "Aide à l'intégration neurologique d'une nouvelle mobilité linguale",
                    "Travail en complément des exercices de mobilisation prescrits",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-secondary mt-1 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Réseau pluridisciplinaire */}
            <div className="mt-8 bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">🔗</span>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">Un accompagnement en réseau</h3>
                  <p className="text-graywarm leading-relaxed">
                    La prise en charge optimale des freins restrictifs est pluridisciplinaire : ostéopathe, <strong>consultante en lactation (IBCLC)</strong>, praticien réalisant la frénectomie et parfois orthophoniste. Hilary travaille en lien étroit avec ces professionnels et peut vous orienter si nécessaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FORMATION ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-light">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl">🎓</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-primary">
              Une formation spécialisée
            </h2>
            <p className="mt-5 text-graywarm text-lg leading-relaxed">
              Hilary Farid a suivi une formation spécialisée au <strong>Centre YGY</strong> (Catherine Rybus, Paris) — référence nationale pour la prise en charge ostéopathique périnatale et pédiatrique. Cette formation inclut spécifiquement l'évaluation et le traitement des dysfonctions liées aux freins restrictifs, aux troubles de la succion et à la mécanique buccale du nourrisson.
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
              Questions fréquentes
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
              Votre bébé a du mal à téter ?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              Une évaluation ostéopathique permet de faire le point sur les tensions présentes et d'orienter vers les bons professionnels.
              <br />Cabinets à <strong>Paris 15 (75015)</strong> et <strong>Sèvres (92310)</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="trigger-booking-modal bg-doctolib text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
              >
                Prendre RDV
              </button>
              <Link
                href="/osteopathie/nourrisson"
                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-primary bg-white border border-light/80 shadow-sm hover:bg-offwhite transition-colors"
              >
                ← Ostéopathie nourrisson
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= PAGES SPÉCIALISÉES ========= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center">Pages spécialisées</h2>
          <p className="mt-3 text-center text-graywarm max-w-2xl mx-auto">
            Consultez les pages dédiées à chaque spécialité pour des informations détaillées.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[
              { titre: "Plagiocéphalie", href: "/osteopathie/plagiocephalie", desc: "Tête plate positionnelle : traitement ostéopathique doux et précoce.", icon: "🧠" },
              { titre: "Ostéopathie Nourrisson", href: "/osteopathie/nourrisson", desc: "Coliques, reflux, torticolis, troubles de la succion. Formation Centre YGY.", icon: "👶" },
              { titre: "Grossesse & Post-partum", href: "/osteopathie/femme-enceinte", desc: "Accompagnement périnatal, sciatique, préparation à l'accouchement.", icon: "🤰" },
            ].map(({ titre, href, desc, icon }) => (
              <Link key={href} href={href} className="block bg-offwhite rounded-2xl border border-light/60 p-6 hover:border-secondary/40 hover:shadow-md transition-all group">
                <span className="text-3xl mb-3 block">{icon}</span>
                <p className="font-bold text-primary text-lg group-hover:text-secondary transition-colors">{titre}</p>
                <p className="text-sm text-graywarm mt-2 leading-relaxed">{desc}</p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-secondary">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STICKY MOBILE CTA ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-light/60 shadow-lg px-4 py-3 flex gap-3">
        <button type="button" className="trigger-booking-modal flex-1 bg-doctolib text-white py-3 rounded-full font-bold text-sm shadow-md">
          Prendre RDV
        </button>
        <a href="tel:+33672014539" className="flex-1 flex items-center justify-center gap-2 bg-primary/10 text-primary py-3 rounded-full font-bold text-sm border border-primary/20">
          <IconPhone className="w-4 h-4" /> Appeler
        </a>
      </div>

      <BackToTop />
    </main>
  );
}
