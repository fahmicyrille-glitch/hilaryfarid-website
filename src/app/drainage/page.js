import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import DrainageCarousel from "@/components/DrainageCarousel";
import BackToTop from "@/components/BackToTop";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Faq from "@/components/Faq";
import DrainageNav from "@/components/DrainageNav";
import { IconPhone, IconAlert } from "@/components/icons/UiIcons";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING, SEVRES_RATING, PARIS15_RATING } from "@/config/siteConfig";

import {
  IconLegs,
  IconCellulite,
  IconDetox,
  IconRelax,
  IconImmunity,
  IconDigestion,
  IconRecovery,
  IconPregnancy,
  IconFertility,
} from "@/components/icons/BenefitIcons";

export default function DrainageLymphatiquePage() {

  return (
    <main className="relative">
      {/* JSON-LD inline — dans le HTML initial */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/drainage#page",
              url: "https://www.hilaryfarid-osteopathe.fr/drainage",
              name: "Drainage Renata França – Hilary Farid Ostéopathe DO",
              description:
                "Drainage Renata França : bien-être, sensation de légèreté, amélioration possible de la rétention d’eau. Séances à Paris 15 et Sèvres. Technique manuelle différente du drainage lymphatique médical remboursé.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.hilaryfarid-osteopathe.fr" },
                  { "@type": "ListItem", position: 2, name: "Drainage Renata França", item: "https://www.hilaryfarid-osteopathe.fr/drainage" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/drainage#service",
              serviceType: "Drainage Renata França (méthode Renata França)",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
              areaServed: ["Paris 15", "Sèvres"],
              description:
                "Séance de drainage Renata França réalisée par Hilary Farid, ostéopathe DO. Technique manuelle spécifique, différente du drainage lymphatique médical. Objectifs : sensation de légèreté, confort circulatoire, détente.",
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres",
              name: "Cabinet – Sèvres",
              telephone: "+33672014539",
              logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
              image: "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-1.webp",
              address: { "@type": "PostalAddress", streetAddress: "104 Grande Rue", postalCode: "92310", addressLocality: "Sèvres", addressCountry: "FR" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: SEVRES_RATING.ratingValue, reviewCount: SEVRES_RATING.reviewCount },
              makesOffer: { "@type": "Service", "@id": "https://www.hilaryfarid-osteopathe.fr/drainage#service" },
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15",
              name: "Cabinet – Paris 15",
              telephone: "+33672014539",
              logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
              image: "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
              address: { "@type": "PostalAddress", streetAddress: "28 Rue Letellier", postalCode: "75015", addressLocality: "Paris", addressRegion: "Île-de-France", addressCountry: "FR" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: PARIS15_RATING.ratingValue, reviewCount: PARIS15_RATING.reviewCount },
              makesOffer: { "@type": "Service", "@id": "https://www.hilaryfarid-osteopathe.fr/drainage#service" },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "En combien de séances peut-on ressentir une différence avec le drainage Renata França ?",
                  acceptedAnswer: { "@type": "Answer", text: "Beaucoup de patients décrivent une sensation de légèreté dès la première séance. Le nombre de séances dépend de l’objectif et du ressenti." },
                },
                {
                  "@type": "Question",
                  name: "Le drainage Renata França est-il douloureux ?",
                  acceptedAnswer: { "@type": "Answer", text: "La technique est dynamique et tonique tout en restant confortable. L’intensité est toujours adaptée à votre sensibilité." },
                },
                {
                  "@type": "Question",
                  name: "Le drainage Renata França est-il remboursé par la Sécurité sociale ?",
                  acceptedAnswer: { "@type": "Answer", text: "Non. Le drainage Renata França est une pratique de bien-être, différente du drainage lymphatique médical prescrit par un médecin et remboursé par la Sécurité sociale. Il n’est pas remboursé." },
                },
                {
                  "@type": "Question",
                  name: "Peut-on faire un drainage Renata França pendant la grossesse ?",
                  acceptedAnswer: { "@type": "Answer", text: "Selon le terme et votre situation, cela peut être envisagé pour améliorer le confort circulatoire. Un avis médical peut être recommandé en cas de doute." },
                },
                {
                  "@type": "Question",
                  name: "Quelles sont les contre-indications principales ?",
                  acceptedAnswer: { "@type": "Answer", text: "Fièvre/infection aiguë, phlébite/risque thrombotique, pathologies non stabilisées, chirurgie très récente selon avis médical. En cas de doute, contactez-moi avant de réserver." },
                },
              ],
            },
          ])
        }}
      />

      {/* Sidebar scrollspy + mobile CTA — composant client isolé */}
      <DrainageNav />

      {/* ========= HERO (Optimisé CRO) ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 px-6 xl:pl-72">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3">
                Drainage lymphatique • Méthode Renata França
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">
                Légèreté, confort <br /> & silhouette visiblement affinée.
              </h1>

              {/* TEXTE MODIFIÉ POUR LA CONVERSION */}
              <p className="mt-6 text-lg text-graywarm leading-relaxed">
                Alliez l’efficacité spectaculaire de la méthode <strong>Renata França</strong> à l'expertise anatomique d’une <strong>ostéopathe D.O</strong>. Un drainage profond, précis et sécuritaire pour relancer votre métabolisme, soulager vos jambes lourdes et affiner votre silhouette.
              </p>

              {/* ⭐ AJOUT DU TRUST BADGE (AVIS GOOGLE) ⭐ */}
              <div className="mt-6 flex items-center gap-2">
                <div className="flex text-amber-400 text-lg drop-shadow-sm">
                  ★★★★★
                </div>
                <span className="text-graywarm text-sm font-medium">
                  {GLOBAL_REVIEW_RATING}/5 sur Google ({GLOBAL_REVIEW_COUNT} avis Sèvres & Paris 15)
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="trigger-booking-modal bg-doctolib text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-doctolib-dark transition"
                >
                  Prendre RDV sur Doctolib
                </button>
                <a
                  href="#bienfaits"
                  className="inline-flex items-center text-primary font-medium underline underline-offset-4 hover:text-secondary"
                >
                  Découvrir les bienfaits
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["Sensation de légèreté", "dès la 1ʳᵉ séance"],
                  ["Méthode tonique", "adaptée à vous"],
                  ["Deux cabinets", "Paris 15 & Sèvres"],
                ].map(([t, s]) => (
                  <div key={t} className="rounded-xl border bg-white p-3 shadow-sm">
                    <p className="text-sm font-semibold text-primary">{t}</p>
                    <p className="text-xs text-graywarm mt-1">{s}</p>
                  </div>
                ))}
              </div>

              {/* Tarifs visibles */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 bg-white border border-light/60 rounded-xl px-4 py-2.5 shadow-sm">
                  <span className="text-xl font-bold text-primary">160 €</span>
                  <span className="text-xs text-graywarm leading-tight">Paris 15<br/>(corps entier)</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-light/60 rounded-xl px-4 py-2.5 shadow-sm">
                  <span className="text-xl font-bold text-primary">180 €</span>
                  <span className="text-xs text-graywarm leading-tight">Sèvres<br/>(corps entier)</span>
                </div>
                <a href="/tarifs" className="text-xs text-secondary font-semibold underline underline-offset-4 hover:text-primary">
                  Voir tous les tarifs →
                </a>
              </div>
            </div>

            <div className="relative w-full h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/drainage/drainage_ventre.webp"
                alt="Drainage Renata França par Hilary Farid ostéopathe à Sèvres et Paris 15"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              {/* Petit voile premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= PRESENTATION ========= */}
      <SlideUp>
        <section id="presentation" className="py-20 px-6 xl:pl-72 bg-light">
          <div className="max-w-5xl mx-auto">

            {/* Titre */}
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-semibold text-primary">
                La lymphe, c’est quoi ?
              </h2>

              <p className="mt-4 text-base text-graywarm leading-relaxed">
                Le système lymphatique est un réseau essentiel à l’équilibre du corps.
                Il participe à l’<strong>immunité</strong>, à l’
                <strong>évacuation des liquides</strong>, à l’
                <strong>élimination de certains déchets</strong> et au
                <strong> confort digestif</strong>.
              </p>
            </div>

            {/* Contenu */}
            <div className="grid md:grid-cols-2 gap-10">

              <div className="rounded-2xl border bg-white p-7 shadow-sm">
                <p className="text-ms uppercase tracking-[0.25em] text-secondary">
                  Quand la lymphe ralentit
                </p>

                <ul className="mt-4 text-base text-graywarm space-y-3 list-disc list-inside">
                  <li>Sensation de jambes lourdes et rétention d’eau</li>
                  <li>Gonflements, inconfort, fatigue</li>
                  <li>Ballonnements et digestion plus lente</li>
                  <li>Peau d’orange plus visible (cellulite)</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-primary/5 p-7">
                <h3 className="text-xl font-semibold text-primary">
                  Une méthode manuelle dynamique
                </h3>

                <p className="mt-3 text-base text-graywarm leading-relaxed">
                  Le drainage <strong>Renata França</strong> est une
                  technique précise et rythmée, visant à stimuler la circulation
                  lymphatique et à favoriser une <strong>sensation de légèreté</strong>
                  et une meilleure aisance corporelle.
                </p>

                <p className="mt-4 text-base text-graywarm">
                  Le travail se fait sur l’ensemble du corps :
                  <strong> jambes, ventre, bras et dos</strong>.
                </p>
              </div>

            </div>
          </div>
        </section>

      </SlideUp>

      {/* ========= BIENFAITS ========= */}
      <SlideUp>
        <section id="bienfaits" className="py-16 px-6 xl:pl-72 bg-offwhite">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-primary">
                Bienfaits les plus recherchés
              </h2>
              <p className="mt-4 text-graywarm">
                Les effets varient selon chacun. L’objectif est de favoriser le confort,
                la légèreté et le bien-être global.
              </p>
            </div>

            <div className="mt-6 text-center">
              <a
                href="/drainage/bienfaits"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary underline underline-offset-4 hover:text-primary transition-colors"
              >
                Guide complet des bienfaits →
              </a>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Jambes lourdes",
                  text: "Aide à diminuer la sensation de lourdeur et la rétention d’eau.",
                  icon: IconLegs,
                },
                {
                  title: "Cellulite",
                  text: "Peut contribuer à améliorer l’aspect peau d’orange et raffermir.",
                  icon: IconCellulite,
                },
                {
                  title: "Détoxification",
                  text: "Aide l’organisme à éliminer certains déchets et toxines stockés.",
                  icon: IconDetox,
                },
                {
                  title: "Stress & fatigue",
                  text: "Effet relaxant : détente, récupération, sensation de lâcher-prise.",
                  icon: IconRelax,
                },
                {
                  title: "Immunité",
                  text: "Le système lymphatique étant lié à l’immunité, l’objectif est de soutenir ses fonctions.",
                  icon: IconImmunity,
                },
                {
                  title: "Digestion",
                  text: "Peut aider à diminuer les ballonnements et améliorer le confort digestif.",
                  icon: IconDigestion,
                },
                {
                  title: "Cicatrisation / post-op",
                  text: "Dans certains contextes, peut accompagner la récupération (selon avis médical).",
                  icon: IconRecovery,
                },
                {
                  title: "Grossesse",
                  text: "Selon le terme, peut aider à soulager inconfort circulatoire et gonflements.",
                  icon: IconPregnancy,
                },
                {
                  title: "Fertilité / PMA",
                  text: "Peut contribuer au bien-être global et à la gestion du stress (accompagnement).",
                  icon: IconFertility,
                },
              ].map((b) => (
                <FadeIn key={b.title}>
                  <article className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <b.icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-semibold text-primary">
                        {b.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-base text-graywarm leading-relaxed">
                      {b.text}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= CARROUSEL DRAINAGE ========= */}
      <SlideUp>
        <section className="py-16 px-6 xl:pl-72 bg-light">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary">
              Le drainage en images
            </h2>

            <p className="mt-4 text-graywarm max-w-2xl mx-auto">
              Gestes précis, techniques manuelles dynamiques et approche respectueuse
              du corps, adaptées à chaque zone.
            </p>

            <div className="mt-10">
              <DrainageCarousel />
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= DEROULEMENT ========= */}
      <SlideUp>
        <section id="deroulement" className="py-16 px-6 xl:pl-72 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Comment se déroule une séance ?
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1. Échange",
                  title: "Bilan & objectifs",
                  text: "On définit ensemble vos attentes : confort, légèreté, rétention d’eau, récupération…",
                },
                {
                  step: "2. Drainage",
                  title: "Technique Renata França",
                  text: "Manœuvres dynamiques et précises, adaptées à votre sensibilité.",
                },
                {
                  step: "3. Conseils",
                  title: "Après la séance",
                  text: "Conseils simples pour optimiser votre confort et prolonger les effets de confort et de fluidité.",
                },
              ].map((c) => (
                <FadeIn key={c.step}>
                  <div className="bg-white rounded-2xl border p-6 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.25em] text-secondary">
                      {c.step}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-primary">
                      {c.title}
                    </h3>

                    <p className="mt-3 text-base text-graywarm leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-graywarm leading-relaxed">
                Beaucoup de patients décrivent une <strong>sensation de légèreté</strong> dès
                la première séance. La fréquence idéale dépend de votre objectif et de votre ressenti.
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= POUR QUI ========= */}
      <SlideUp>
        <section id="pour-qui" className="py-16 px-6 xl:pl-72 bg-light">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                Pour qui est fait le drainage ?
              </h2>
              <p className="mt-4 text-graywarm leading-relaxed">
                Le drainage Renata França est souvent choisi pour le confort, l’esthétique et le bien-être.
                Je l’adapte à votre situation et à votre sensibilité.
              </p>

              {/* MODIFICATION : On cible des profils et moments de vie pour éviter la redondance */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Grossesse & Post-partum",
                  "Récupération Sportive",
                  "Sédentarité & Télétravail",
                  "Troubles hormonaux (PMA, Ménopause)",
                  "Jambes lourdes & Rétention",
                  "Préparation & Récupération Post-Opératoire",
                ].map((t) => (
                  <div key={t} className="rounded-2xl border bg-white p-4 shadow-sm flex items-center">
                    <p className="text-sm font-medium text-primary">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/drainage/drainage_jambe.webp"
                  alt="Séance de drainage Renata França sur les jambes – cabinet Hilary Farid"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-primary">Objectif : confort & régularité</h3>
                <p className="mt-2 text-sm text-graywarm leading-relaxed">
                  Certaines personnes viennent ponctuellement (période de chaleur, fatigue,
                  rétention), d’autres préfèrent un suivi régulier selon leurs besoins.
                </p>
                <div className="mt-5">
                  <button
                    type="button"
                    className="trigger-booking-modal inline-flex items-center justify-center bg-doctolib text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-doctolib-dark transition w-full"
                  >
                    Prendre RDV sur Doctolib
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= POURQUOI MOI ========= */}
      <SlideUp>
        <section id="pourquoi-moi" className="py-16 px-6 xl:pl-72 bg-offwhite">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Pourquoi me consulter pour un drainage Renata França ?
            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-6 text-graywarm leading-relaxed">
              {[
                {
                  /* TITRE ET TEXTE MODIFIÉS POUR LA CONVERSION */
                  title: "La sécurité d'une Ostéopathe D.O.",
                  text: "Contrairement à un institut classique, ma connaissance approfondie de l’anatomie et du système vasculaire me permet d'adapter parfaitement la pression et les manœuvres à votre physiologie.",
                },
                {
                  title: "Méthode Renata França",
                  text: "Technique structurée, dynamique et reconnue, avec un objectif de légèreté et de bien-être.",
                },
                {
                  title: "Explications claires",
                  text: "Vous repartez avec des conseils simples (hydratation, rythme, sensations attendues) pour optimiser le confort.",
                },
                {
                  title: "Deux cabinets accessibles",
                  text: "Séances à Paris 15 et Sèvres, proches transports. Prise de RDV rapide sur Doctolib.",
                },
              ].map((c) => (
                <FadeIn key={c.title}>
                  <div className="p-6 rounded-2xl bg-white shadow-sm border h-full">
                    <h3 className="font-semibold text-primary text-lg">{c.title}</h3>
                    <p className="mt-2 text-sm">{c.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= AVANT / APRÈS ========= */}
      <SlideUp>
        <section id="avant-apres" className="py-16 px-6 xl:pl-72 bg-light">
          <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-3xl font-semibold text-primary">
              Résultats Avant / Après
            </h2>

            <p className="mt-4 text-graywarm max-w-2xl mx-auto">
              Illustrations visuelles à titre indicatif. Les résultats peuvent varier
              selon les personnes, le contexte et la régularité des séances.
            </p>

            <p className="mt-2 text-sm font-medium text-secondary">
              Faites glisser le curseur pour comparer ✦
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
              {/* JAMBES */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border">
                <div className="max-w-[340px] mx-auto">
                  <BeforeAfterSlider
                    before="/drainage/ba_jambe_avant.png"
                    after="/drainage/ba_jambe_apres.png"
                    alt="Drainage Renata França jambes – résultats Hilary Farid"
                    aspect={432 / 1060}
                  />
                </div>
                <p className="mt-3 text-xs text-graywarm">
                  Exemple visuel – sensation de légèreté et diminution des gonflements.
                </p>
              </div>

              {/* VENTRE */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border">
                <div className="max-w-[420px] mx-auto">
                  <BeforeAfterSlider
                    before="/drainage/ba_ventre_avant.png"
                    after="/drainage/ba_ventre_apres.png"
                    alt="Drainage Renata França ventre – résultats Hilary Farid"
                    aspect={432 / 648}
                  />
                </div>
                <p className="mt-3 text-xs text-graywarm">
                  Exemple visuel – amélioration possible du confort abdominal.
                </p>
              </div>
            </div>

            <div className="mt-8 max-w-3xl mx-auto rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-graywarm leading-relaxed flex items-start gap-2 text-left">
                <IconAlert className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Ces images ne constituent pas une promesse de résultat.
                Le drainage Renata França est une pratique de bien-être.
                Les effets ressentis dépendent de chaque personne et de sa situation.</span>
              </p>
            </div>

          </div>
        </section>
      </SlideUp>

      {/* ========= CONTRE-INDICATIONS ========= */}
      <SlideUp>
        <section id="contraindications" className="py-16 px-6 xl:pl-72 bg-offwhite">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Contre-indications & précautions
            </h2>

            <p className="mt-6 text-graywarm text-center max-w-2xl mx-auto">
              Le drainage est généralement bien toléré, mais certaines situations nécessitent
              précaution ou avis médical préalable.
              En cas de doute, contactez-moi avant de réserver.
            </p>

            <ul className="mt-8 space-y-3 text-graywarm list-disc list-inside text-sm">
              <li>Fièvre importante, infection aiguë</li>
              <li>Phlébite / suspicion de thrombose / risque thrombotique</li>
              <li>Douleur inhabituelle, inflammation importante</li>
              <li>Pathologie non stabilisée : avis médical recommandé</li>
              <li>Post-op très récent : selon indication et avis du chirurgien</li>
            </ul>

            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-graywarm flex items-center gap-2">
                <IconPhone className="w-4 h-4 text-primary shrink-0" />
                Si vous hésitez :{" "}
                <a className="text-primary font-medium underline underline-offset-4" href="tel:+33672014539">
                  06 72 01 45 39
                </a>
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= FAQ ========= */}
      <SlideUp>
        <section id="faq" className="py-16 px-6 xl:pl-72 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              FAQ
            </h2>

            <div className="mt-10">
              <Faq
                items={[
                  {
                    q: "En combien de séances peut-on ressentir une différence ?",
                    a: "Beaucoup de patients décrivent une sensation de légèreté dès la première séance. La fréquence dépend de l’objectif et du ressenti.",
                  },
                  {
                    q: "Est-ce douloureux ?",
                    a: "La technique est dynamique et tonique tout en restant confortable. J’adapte toujours l’intensité à votre sensibilité.",
                  },
                  {
                    q: "Peut-on faire un drainage pendant la grossesse ?",
                    a: "Selon le terme et votre situation, cela peut être envisagé pour améliorer le confort circulatoire. En cas de doute, un avis médical peut être recommandé.",
                  },
                  {
                    q: "Quelle différence avec un massage classique ?",
                    a: "Le drainage Renata França suit une logique de circulation (manœuvres spécifiques) et vise surtout une sensation de légèreté et de confort, au-delà de la simple détente.",
                  },
                  {
                    q: "Que faire après la séance ?",
                    a: "Hydratation, marche douce si possible, et écouter vos sensations. Je vous donne des conseils adaptés à votre cas.",
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= CTA FINAL ========= */}
      <FadeIn>
        <section id="cta" className="py-16 px-6 xl:pl-72 text-center bg-offwhite">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary">
              Prêt(e) à retrouver une sensation de légèreté ?
            </h2>
            <p className="mt-4 text-graywarm">
              Réservez votre séance de drainage lymphatique Renata França en quelques clics. <br/>
              Cabinets à <strong>Paris 15</strong> et <strong>Sèvres</strong>.
            </p>
            <p className="mt-2 text-sm text-graywarm">
              Séance d’environ <strong>90 minutes</strong> – réservation en ligne sur Doctolib.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="trigger-booking-modal bg-doctolib text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-doctolib-dark transition"
              >
                Prendre RDV sur Doctolib
              </button>
              <a
                href="/tarifs"
                className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:text-secondary"
              >
                Voir les tarifs
              </a>
            </div>

            <p className="mt-6 text-xs text-graywarm">
              *Le drainage Renata França est une pratique de bien-être. Les effets peuvent varier selon les personnes.
              Ce contenu ne remplace pas un avis médical.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* 🔝 Composant global pour revenir en haut */}
      <BackToTop />

    </main>
  );
}
