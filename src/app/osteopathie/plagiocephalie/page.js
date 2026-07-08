import Link from "next/link";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";

export default function PlagiocephaliePage() {
  const faq = [
    {
      q: "La plagiocéphalie peut-elle se corriger toute seule ?",
      a: "Les formes légères peuvent s'améliorer spontanément avec la diversification des positions. Pour les formes modérées à sévères, une prise en charge active (ostéopathie + positionnement) est nécessaire pour éviter une déformation persistante.",
    },
    {
      q: "Faut-il choisir entre ostéopathie et kinésithérapie ?",
      a: "Ces deux approches sont complémentaires. La kinésithérapie est indiquée s'il y a un vrai torticolis musculaire (rétraction du SCM). L'ostéopathie traite les tensions crâniennes, articulaires et myofasciales globales. Les deux peuvent être menées en même temps.",
    },
    {
      q: "Mon bébé a 6 mois et j'ai découvert la plagiocéphalie — trop tard ?",
      a: "Non. Même après 4 mois, l'ostéopathie reste utile pour améliorer la mobilité cervicale et crânienne. La correction est plus lente mais possible. Un bilan spécialisé peut être utile si la déformation est marquée.",
    },
    {
      q: "Combien de séances pour une plagiocéphalie ?",
      a: "En moyenne, 3 à 5 séances pour les cas pris en charge avant 4 mois. Un suivi de contrôle à 3 mois est souvent conseillé. Pour les cas plus tardifs, le protocole est adapté individuellement.",
    },
    {
      q: "Comment distinguer une plagiocéphalie positionnelle d'une craniosynostose ?",
      a: "La craniosynostose présente des signes spécifiques (crête osseuse sur la suture, forme très particulière) et nécessite un diagnostic médical. En cas de doute, votre pédiatre peut vous orienter vers un neurochirurgien pédiatrique. L'ostéopathie n'est PAS indiquée en cas de craniosynostose sans avis médical.",
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
                { "@type": "ListItem", position: 4, name: "Plagiocéphalie", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie/plagiocephalie" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              url: "https://www.hilaryfarid-osteopathe.fr/osteopathie/plagiocephalie",
              name: "Plagiocéphalie Positionnelle — Ostéopathie Nourrisson",
              description: "Tête plate positionnelle du nourrisson : traitement ostéopathique doux avant 4 mois. Paris 15 et Sèvres.",
              about: { "@type": "MedicalCondition", name: "Plagiocéphalie positionnelle" },
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
          <span className="text-primary font-medium">Plagiocéphalie</span>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
                Ostéopathie pédiatrique · Tête plate positionnelle
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Plagiocéphalie :<br />agir tôt, agir bien
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                La plagiocéphalie positionnelle est l'aplatissement du crâne de votre bébé lié à une position récurrente. <strong>Avant 4 mois</strong>, l'ostéopathie offre des résultats remarquables grâce à la plasticité naturelle des os crâniens.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <div className="flex text-amber-400 text-xl">★★★★★</div>
                <span className="text-graywarm text-sm font-medium">{GLOBAL_REVIEW_RATING}/5 · {GLOBAL_REVIEW_COUNT} avis Google</span>
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
                alt="Ostéopathie plagiocéphalie nourrisson – Hilary Farid"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= TIMING CRITIQUE ========= */}
      <SlideUp>
        <section className="py-10 px-6 bg-amber-50 border-y border-amber-100">
          <div className="max-w-4xl mx-auto flex items-start gap-4">
            <span className="text-4xl shrink-0">⏰</span>
            <div>
              <h2 className="text-xl font-bold text-amber-800 mb-2">Le timing est crucial : avant 4 mois</h2>
              <p className="text-amber-700 leading-relaxed">
                Entre 0 et 4 mois, la plasticité crânienne est maximale. C'est la fenêtre idéale pour l'ostéopathie. Après 6 mois, les os se rigidifient et la correction devient plus longue. <strong>N'attendez pas</strong> — consulter tôt évite souvent le port d'un casque de remodelage.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= SIGNES ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Signes à surveiller
            </h2>
            <p className="mt-5 text-center text-graywarm text-lg max-w-3xl mx-auto">
              Ces signes apparaissent souvent dans les premières semaines. Plus le diagnostic est précoce, meilleurs les résultats.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                { icon: "🔄", title: "Rotation préférentielle", text: "Bébé tourne toujours la tête du même côté — même pendant le sommeil. C'est souvent le premier signe d'un torticolis fonctionnel ou d'une tension cervicale asymétrique." },
                { icon: "🧠", title: "Aplatissement crânien visible", text: "Zone aplatie à l'arrière ou sur le côté du crâne. L'oreille du côté aplati peut sembler avancée vers l'avant par rapport à l'autre." },
                { icon: "↔️", title: "Asymétrie du visage", text: "Légère proéminence frontale du même côté que l'aplatissement occipital. Le front peut être légèrement bombé d'un côté." },
                { icon: "💪", title: "Tension musculaire cervicale", text: "Résistance à la rotation de tête d'un côté, muscle sterno-cléido-mastoïdien (SCM) tendu ou épaissi d'un côté." },
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

      {/* ========= CE QUE FAIT L'OSTÉOPATHE ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                Ce que fait l'ostéopathe
              </h2>
              <p className="mt-4 text-graywarm leading-relaxed">
                La séance se passe entièrement sur la table, avec des techniques extrêmement douces. Votre bébé peut dormir ou être éveillé. Aucune manipulation brusque n'est pratiquée.
              </p>
              <ul className="mt-6 space-y-3 text-graywarm">
                {[
                  "Évaluation des mobilités crâniennes (sutures occipitale, temporale, pariétale)",
                  "Libération des tensions musculaires cervicales (muscle SCM, sous-occipitaux)",
                  "Travail sur la mobilité sacrale et la connexion crâne-sacrum",
                  "Conseils de positionnement et de portage pour diversifier les appuis au quotidien",
                  "Évaluation globale : rotation, tensions, tonus",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-secondary mt-1 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-light rounded-2xl p-8">
              <h3 className="text-lg font-bold text-primary mb-4">Résultats et nombre de séances</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">📅</span>
                  <div>
                    <p className="font-semibold text-primary">Avant 4 mois</p>
                    <p className="text-sm text-graywarm mt-1">3 à 5 séances espacées de 3-4 semaines. Amélioration visible dès la 1ère séance sur la rotation de tête. Correction crânienne sur plusieurs semaines.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">📅</span>
                  <div>
                    <p className="font-semibold text-primary">Entre 4 et 8 mois</p>
                    <p className="text-sm text-graywarm mt-1">4 à 6 séances. Résultats toujours satisfaisants mais la progression est plus lente. Suivi plus rapproché.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">📅</span>
                  <div>
                    <p className="font-semibold text-primary">Au-delà de 8 mois</p>
                    <p className="text-sm text-graywarm mt-1">Avis spécialisé recommandé pour les cas sévères. Un casque de remodelage peut être envisagé. L'ostéopathie reste complémentaire.</p>
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
              Questions fréquentes
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
              Votre bébé a la tête plate ?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              Plus tôt on commence, plus les résultats sont rapides. N'attendez pas.
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
              { titre: "Freins restrictifs", href: "/osteopathie/freins-restrictifs", desc: "Frein de langue, frein de lèvre : accompagnement avant et après frénectomie.", icon: "👅" },
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
          📞 Appeler
        </a>
      </div>

      <BackToTop />
    </main>
  );
}
