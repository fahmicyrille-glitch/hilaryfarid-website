import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import {
  IconAlert,
  IconBone,
  IconBadgeCheck,
  IconMapPin,
  IconStar,
} from "@/components/icons/UiIcons";

export default function DrainageBienfaitsPage() {
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
                { "@type": "ListItem", position: 2, name: "Drainage Renata França", item: "https://www.hilaryfarid-osteopathe.fr/drainage" },
                { "@type": "ListItem", position: 3, name: "Bienfaits", item: "https://www.hilaryfarid-osteopathe.fr/drainage/bienfaits" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/drainage/bienfaits#page",
              url: "https://www.hilaryfarid-osteopathe.fr/drainage/bienfaits",
              name: "Bienfaits du Drainage Renata França – Hilary Farid D.O.",
              description: "Guide complet des bienfaits du drainage Renata França : jambes légères, cellulite, rétention d'eau, immunité, grossesse, récupération. Séances à Paris 15 et Sèvres.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.hilaryfarid-osteopathe.fr" },
                  { "@type": "ListItem", position: 2, name: "Drainage", item: "https://www.hilaryfarid-osteopathe.fr/drainage" },
                  { "@type": "ListItem", position: 3, name: "Bienfaits", item: "https://www.hilaryfarid-osteopathe.fr/drainage/bienfaits" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quels sont les principaux bienfaits du drainage Renata França ?",
                  acceptedAnswer: { "@type": "Answer", text: "Les bienfaits les plus recherchés sont : sensation de jambes légères, diminution de la rétention d'eau, amélioration de l'aspect de la cellulite, détente profonde, soutien de l'immunité, amélioration du confort digestif et récupération après chirurgie ou sport." },
                },
                {
                  "@type": "Question",
                  name: "Au bout de combien de séances ressent-on les bienfaits ?",
                  acceptedAnswer: { "@type": "Answer", text: "La plupart des patients ressentent une légèreté immédiate dès la première séance. Pour des effets plus durables sur la rétention d'eau ou la cellulite, une cure de 3 à 5 séances est généralement recommandée." },
                },
                {
                  "@type": "Question",
                  name: "Le drainage Renata França est-il efficace contre la cellulite ?",
                  acceptedAnswer: { "@type": "Answer", text: "Il permet une élimination de la cellulite aqueuse, qui est due à un excès d'eau, puisque le drainage désengorge l'ensemble du corps." },
                },
                {
                  "@type": "Question",
                  name: "Peut-on faire un drainage Renata França pendant la grossesse ?",
                  acceptedAnswer: { "@type": "Answer", text: "Selon le terme et votre situation, le drainage peut être envisagé pour améliorer le confort circulatoire, réduire les gonflements des jambes et apporter un effet relaxant. Un avis médical est recommandé en cas de doute." },
                },
                {
                  "@type": "Question",
                  name: "Quelle différence entre le drainage Renata França et le drainage lymphatique médical remboursé ?",
                  acceptedAnswer: { "@type": "Answer", text: "Le drainage Renata França est une pratique de bien-être, différente du drainage lymphatique médical prescrit par un médecin et remboursé par la Sécurité sociale. Il n'est pas pris en charge par les mutuelles. Il s'adresse à des personnes en bonne santé souhaitant améliorer leur confort et bien-être. C'est une méthode globale qui travaille l'ensemble du corps, à l'exception du visage : elle permet ainsi un travail complet sur l'ensemble du système lymphatique, qui a tendance à stocker et à éliminer lentement." },
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
          <Link href="/drainage" className="hover:text-primary transition-colors">Drainage Renata França</Link>
          <span className="text-light">/</span>
          <span className="text-primary font-medium">Bienfaits</span>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
                Drainage Renata França · Guide complet
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Bienfaits du Drainage<br /> Renata França
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Jambes légères, cellulite, rétention d'eau, récupération, immunité… Découvrez tous les bienfaits du drainage Renata França pratiqué par <strong>Hilary Farid</strong>, ostéopathe D.O. à Paris 15 et Sèvres.
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
                  Réserver ma séance
                </button>
                <Link href="/drainage" className="inline-flex items-center text-primary text-base font-medium underline underline-offset-4 hover:text-secondary">
                  Tout sur le drainage Renata
                </Link>
              </div>
              <p className="mt-4 text-sm text-graywarm">
                Séances à <strong>Paris 15 (75015)</strong> et <strong>Sèvres (92310)</strong>
              </p>
            </div>
            <div className="relative w-full h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-light/50">
              <Image
                src="/drainage/drainage_jambe.webp"
                alt="Séance de drainage Renata França – bienfaits jambes légères par Hilary Farid"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= BIENFAITS DETAILLÉS ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Les bienfaits les plus recherchés
            </h2>
            <p className="mt-5 text-center text-graywarm max-w-3xl mx-auto">
              Les effets varient selon chaque personne. L'objectif est de favoriser le confort, la légèreté et le bien-être global.
            </p>

            <div className="mt-12 space-y-6">
              {[
                {
                  categorie: "Confort circulatoire",
                  color: "bg-blue-50 border-blue-100",
                  bienfaits: [
                    {
                      titre: "Jambes légères",
                      texte: "Aide à réduire la sensation de lourdeur, les gonflements et la rétention d'eau dans les membres inférieurs. Effet souvent ressenti dès la première séance.",
                    },
                    {
                      titre: "Rétention d'eau",
                      texte: "En stimulant la circulation lymphatique, le drainage favorise l'élimination de l'excès de liquides.",
                    },
                    {
                      titre: "Varices & inconfort veineux",
                      texte: "Complément possible du suivi médical : améliore la sensation de lourdeur et de chaleur liée à l'insuffisance veineuse légère.",
                    },
                  ],
                },
                {
                  categorie: "Corps & silhouette",
                  color: "bg-rose-50 border-rose-100",
                  bienfaits: [
                    {
                      titre: "Cellulite & peau d'orange",
                      texte: "La stimulation lymphatique peut améliorer l'aspect de la peau d'orange, en favorisant l'élimination de certaines toxines stockées dans les tissus adipeux.",
                    },
                    {
                      titre: "Ventre gonflé & ballonnements",
                      texte: "Le travail de la région abdominale lors du drainage Renata França permet d'accélérer le système lymphatique de 3 jours à une semaine, ce qui favorise une meilleure circulation de certains nutriments et soulage ainsi les ballonnements.",
                    },
                    {
                      titre: "Silhouette affinée",
                      texte: "La diminution de l'excès de liquide et la tonification du tissu contribuent à une silhouette visuellement affinée, notamment au niveau des jambes et du ventre.",
                    },
                  ],
                },
                {
                  categorie: "Bien-être & vitalité",
                  color: "bg-green-50 border-green-100",
                  bienfaits: [
                    {
                      titre: "Relaxation & anti-stress",
                      texte: "La technique rythmée et profonde induit une réponse parasympathique : détente, lâcher-prise, amélioration de la qualité du sommeil.",
                    },
                    {
                      titre: "Immunité & détoxification",
                      texte: "Le système lymphatique étant directement lié à l'immunité, son activation peut contribuer à soutenir les défenses naturelles de l'organisme.",
                    },
                    {
                      titre: "Récupération sportive",
                      texte: "Après un effort intense, le drainage aide à l'élimination des déchets métaboliques et à la réduction des courbatures et gonflements post-effort.",
                    },
                  ],
                },
                {
                  categorie: "Moments de vie particuliers",
                  color: "bg-purple-50 border-purple-100",
                  bienfaits: [
                    {
                      titre: "Grossesse & post-partum",
                      texte: "Selon le terme, peut aider à soulager les jambes lourdes, réduire les œdèmes de grossesse et apporter un effet relaxant bénéfique.",
                    },
                    {
                      titre: "PMA & fertilité",
                      texte: "Accompagnement du bien-être global et gestion du stress en période de PMA. Aucune promesse médicale — uniquement un soutien au confort.",
                    },
                    {
                      titre: "Récupération post-opératoire",
                      texte: "Dans certains contextes (cicatrice, chirurgie esthétique, post-liposuccion), sur avis médical, peut accompagner la résorption des œdèmes.",
                    },
                  ],
                },
              ].map((section) => (
                <FadeIn key={section.categorie}>
                  <div className={`rounded-2xl border p-7 ${section.color}`}>
                    <h3 className="font-bold text-primary text-xl mb-5">{section.categorie}</h3>
                    <div className="grid md:grid-cols-3 gap-5">
                      {section.bienfaits.map(({ titre, texte }) => (
                        <div key={titre} className="bg-white rounded-xl p-5 shadow-sm">
                          <p className="font-semibold text-primary text-base mb-2">{titre}</p>
                          <p className="text-sm text-graywarm leading-relaxed">{texte}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 bg-amber-50 border border-amber-100 rounded-2xl p-6 text-center">
              <p className="text-sm text-graywarm flex items-start gap-2 text-left">
                <IconAlert className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Le drainage Renata França est une pratique de bien-être. Les effets ressentis varient selon les personnes et les situations. Ce contenu ne remplace pas un avis médical. Il est différent du drainage lymphatique médical prescrit et remboursé par la Sécurité sociale.</span>
              </p>
            </div>
          </div>
        </section>
      </SlideUp>

      {/* ========= POUR QUI / PROGRAMME ========= */}
      <SlideUp>
        <section className="py-16 md:py-20 px-6 bg-offwhite">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary">
                À partir de combien de séances ?
              </h2>
              <p className="mt-5 text-graywarm leading-relaxed">
                Les résultats dépendent de votre objectif et de votre sensibilité. Voici les recommandations générales :
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { nb: "1 séance", objectif: "Sensation de légèreté immédiate, détox légère, bien-être ponctuel" },
                  { nb: "3 séances", objectif: "Amélioration notable de la rétention d'eau et des jambes lourdes" },
                  { nb: "5 séances (cure)", objectif: "Effets plus durables sur la cellulite, silhouette affinée" },
                  { nb: "Mensuel", objectif: "Entretien du confort, immunité, bien-être régulier" },
                ].map(({ nb, objectif }) => (
                  <div key={nb} className="flex gap-4 items-start">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full shrink-0">{nb}</span>
                    <p className="text-base text-graywarm pt-1.5">{objectif}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  className="trigger-booking-modal bg-doctolib text-white px-7 py-3.5 rounded-full font-semibold shadow-lg hover:bg-doctolib-dark transition-all"
                >
                  Réserver ma séance
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-light/60 p-8 shadow-sm">
              <h3 className="font-bold text-primary text-xl mb-5">Pourquoi choisir Hilary Farid ?</h3>
              <ul className="space-y-4 text-graywarm">
                {[
                  { Icon: IconBone, titre: "Ostéopathe D.O.", texte: "La connaissance approfondie de l'anatomie et du système vasculaire permet d'adapter les pressions à votre physiologie — bien au-delà d'un institut classique." },
                  { Icon: IconBadgeCheck, titre: "Certifiée Renata França", texte: "Technique structurée et précise, avec des résultats reconnus et reproductibles." },
                  { Icon: IconMapPin, titre: "2 cabinets accessibles", texte: "Paris 15 (75015) et Sèvres (92310), proches transports, RDV rapide sur Doctolib." },
                  { Icon: IconStar, titre: "+100 avis 5/5", texte: "Patients réguliers et fidèles, résultats visibles et durables." },
                ].map(({ Icon, titre, texte }) => (
                  <li key={titre} className="flex gap-3">
                    <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-primary text-sm">{titre}</p>
                      <p className="text-sm mt-1 leading-relaxed">{texte}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
                  "Quels sont les principaux bienfaits du drainage Renata França ?",
                  "Les bienfaits les plus recherchés : jambes légères, rétention d'eau réduite, meilleur aspect de la cellulite, détente profonde, soutien de l'immunité, confort digestif, récupération post-effort ou post-chirurgie.",
                ],
                [
                  "Au bout de combien de séances ressent-on les bienfaits ?",
                  "La plupart des patients ressentent une légèreté immédiate dès la première séance. Pour des effets plus durables sur la rétention d'eau ou la cellulite, une cure de 3 à 5 séances est généralement recommandée.",
                ],
                [
                  "Le drainage Renata França est-il efficace contre la cellulite ?",
                  "Il permet une élimination de la cellulite aqueuse, qui est due à un excès d'eau, puisque le drainage désengorge l'ensemble du corps.",
                ],
                [
                  "Peut-on faire un drainage Renata França pendant la grossesse ?",
                  "Selon le terme et votre situation, le drainage peut être envisagé pour le confort circulatoire et réduire les gonflements. Un avis médical est recommandé en cas de doute.",
                ],
                [
                  "Quelle différence avec le drainage lymphatique médical remboursé ?",
                  "Le drainage Renata França est une pratique de bien-être, différente du drainage lymphatique médical prescrit par un médecin et remboursé par la Sécurité sociale. Il s'adresse à des personnes en bonne santé souhaitant améliorer leur confort et bien-être. C'est une méthode globale qui travaille l'ensemble du corps, à l'exception du visage : elle permet ainsi un travail complet sur l'ensemble du système lymphatique, qui a tendance à stocker et à éliminer lentement.",
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

      {/* ========= LIENS INTER-PAGES ========= */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-graywarm text-xs font-bold uppercase tracking-wider mb-5">À explorer aussi</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              ["Tout sur le drainage", "/drainage", "La méthode, le déroulement, avant/après."],
              ["Tarifs des séances", "/tarifs", "Tarif séance et cure drainage Renata França."],
              ["Ostéopathie du Sport", "/osteopathie/sport", "Récupération, prévention blessures sportifs."],
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
              Prêt(e) à retrouver légèreté et bien-être ?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              Séances de drainage Renata França à <strong>Paris 15 (75015)</strong> et <strong>Sèvres (92310)</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="trigger-booking-modal bg-doctolib text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
              >
                Prendre RDV Doctolib
              </button>
              <Link
                href="/tarifs"
                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-primary bg-white border border-light/80 shadow-sm hover:bg-offwhite transition-colors"
              >
                Voir les tarifs
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
