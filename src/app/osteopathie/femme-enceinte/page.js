import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";

export default function OsteopathieFemmeEnceintePage() {
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
                { "@type": "ListItem", position: 3, name: "Femme enceinte & Post-partum", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie/femme-enceinte" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie/femme-enceinte#page",
              url: "https://www.hilaryfarid-osteopathe.fr/osteopathie/femme-enceinte",
              name: "Ostéopathie Femme Enceinte & Post-partum – Hilary Farid D.O.",
              description: "Ostéopathe spécialisée grossesse à Paris 15 et Sèvres. Lombalgies, sciatique, douleurs du bassin, préparation à l'accouchement, suivi post-partum. Formation CFPCO.",
              about: { "@type": "MedicalSpecialty", name: "Osteopathy" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.hilaryfarid-osteopathe.fr" },
                  { "@type": "ListItem", position: 2, name: "Ostéopathie", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie" },
                  { "@type": "ListItem", position: 3, name: "Femme enceinte", item: "https://www.hilaryfarid-osteopathe.fr/osteopathie/femme-enceinte" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie/femme-enceinte#service",
              serviceType: "Ostéopathie femme enceinte et post-partum",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
              areaServed: ["Paris 15", "Sèvres"],
              description: "Consultations d'ostéopathie pour femmes enceintes et post-partum. Lombalgies, sciatique, bassin, préparation à l'accouchement, récupération après l'accouchement.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "L'ostéopathie est-elle sans danger pendant la grossesse ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui. Les techniques utilisées pendant la grossesse sont spécifiquement adaptées : pas de manipulation cervicales à haute vélocité, approche tissulaire et viscérale douce. Hilary est formée (CFPCO) pour adapter chaque geste à chaque trimestre." },
                },
                {
                  "@type": "Question",
                  name: "À quel trimestre peut-on consulter un ostéopathe enceinte ?",
                  acceptedAnswer: { "@type": "Answer", text: "À tous les trimestres. Le premier trimestre est plus délicat mais possible. Le deuxième et le troisième trimestres sont les périodes où l'accompagnement est le plus fréquent, notamment pour les douleurs du bassin et lombaires." },
                },
                {
                  "@type": "Question",
                  name: "L'ostéopathie aide-t-elle à préparer l'accouchement ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui. En travaillant sur la mobilité du bassin, du sacrum et du diaphragme, l'ostéopathie contribue à préparer mécaniquement le corps à l'accouchement, et peut améliorer la descente du bébé." },
                },
                {
                  "@type": "Question",
                  name: "Quand consulter en post-partum ?",
                  acceptedAnswer: { "@type": "Answer", text: "Idéalement dans les 4 à 8 semaines après l'accouchement (après accord médical). Cela permet de rééquilibrer le bassin, traiter les douleurs résiduelles, soutenir la cicatrice de césarienne ou d'épisiotomie, et accompagner la fatigue post-accouchement." },
                },
                {
                  "@type": "Question",
                  name: "L'ostéopathie soulage-t-elle la sciatique de grossesse ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui, c'est l'une des indications les plus fréquentes. La sciatique gravidique est souvent liée à une tension sacro-iliaque ou piriforme. L'ostéopathie libère ces structures sans risque pour le bébé." },
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
          <span className="text-primary font-medium">Femme enceinte & Post-partum</span>
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <FadeIn>
        <section className="bg-offwhite py-16 lg:py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
                Périnatalité · Formation CFPCO
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Ostéopathie Grossesse<br /> & Post-partum à Paris 15 & Sèvres
              </h1>
              <p className="mt-5 text-lg text-graywarm leading-relaxed">
                Lombalgies, sciatique, douleurs du bassin, nausées, préparation à l'accouchement… La grossesse transforme le corps en profondeur. Hilary Farid, formée au <strong>CFPCO</strong>, adapte chaque séance au trimestre et aux besoins spécifiques de chaque future maman.
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
                src="/osteopathie/FE.webp"
                alt="Séance d'ostéopathie femme enceinte par Hilary Farid à Paris 15 et Sèvres"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ========= GROSSESSE ========= */}
      <SlideUp>
        <section className="py-16 md:py-24 px-6 bg-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Ce que l'ostéopathie soulage pendant la grossesse
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Lombalgies & sciatique gravidique",
                  icon: "🦴",
                  text: "Douleurs lombaires, sciatique, névralgie crurales… liées aux tensions sacro-iliaques et au déplacement du centre de gravité. L'ostéopathie libère ces structures en toute sécurité.",
                },
                {
                  title: "Douleurs du bassin & pubis",
                  icon: "🔺",
                  text: "Symphyse pubienne douloureuse, diastasis de la symphyse, instabilité pelvienne. Travail spécifique sur les ligaments et l'équilibre du bassin.",
                },
                {
                  title: "Nausées & inconfort digestif",
                  icon: "🤢",
                  text: "Au 1er trimestre, les tensions diaphragmatiques et viscérales peuvent aggraver les nausées. L'ostéopathie viscérale douce peut améliorer significativement le confort.",
                },
                {
                  title: "Gêne respiratoire",
                  icon: "🫁",
                  text: "Au 3ème trimestre, l'utérus comprime le diaphragme. Des techniques de libération diaphragmatique améliorent l'amplitude respiratoire et le confort.",
                },
                {
                  title: "Préparation à l'accouchement",
                  icon: "🌸",
                  text: "Optimisation de la mobilité du bassin, du sacrum et du diaphragme pour favoriser la descente du bébé et faciliter le travail. Idéalement en fin de 3ème trimestre.",
                },
                {
                  title: "Jambes lourdes & œdèmes",
                  icon: "🦵",
                  text: "La grossesse ralentit la circulation. L'ostéopathie améliore la mobilité des membres inférieurs et peut contribuer au confort circulatoire.",
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
                Le post-partum : récupérer en douceur
              </h2>
              <p className="mt-5 text-graywarm leading-relaxed">
                Après l'accouchement, le corps doit récupérer des contraintes mécaniques de la grossesse et du travail. Une ou deux séances d'ostéopathie en post-partum peuvent transformer la récupération.
              </p>
              <ul className="mt-6 space-y-3 text-graywarm text-base">
                {[
                  "Rééquilibrage du bassin après l'accouchement (voie basse ou césarienne)",
                  "Traitement des douleurs résiduelles : coccyx, périnée, lombaires",
                  "Accompagnement de la cicatrice de césarienne ou d'épisiotomie",
                  "Soutien de la fatigue et du vécu émotionnel du post-partum",
                  "Optimisation de la posture pour l'allaitement et le portage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-secondary mt-1 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-graywarm italic">
                Idéalement 4 à 8 semaines après l'accouchement, sur accord médical.
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  className="trigger-booking-modal bg-[#0596DE] text-white px-7 py-3.5 rounded-full font-semibold shadow-lg hover:bg-[#047cbd] transition-all"
                >
                  Prendre RDV
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-light/60 p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Programme type</p>
              <div className="space-y-4">
                {[
                  { trimestre: "1ᵉʳ trimestre", contenu: "Nausées, fatigue, tensions cervicales. Techniques très douces, approche viscérale principalement." },
                  { trimestre: "2ᵉ trimestre", contenu: "Lombalgies, bassin, début des sciatiques. Période idéale pour 1 ou 2 séances de soutien." },
                  { trimestre: "3ᵉ trimestre", contenu: "Préparation à l'accouchement, douleurs pelviennes, gêne respiratoire, jambes lourdes." },
                  { trimestre: "Post-partum", contenu: "Rééquilibrage du bassin, douleurs résiduelles, soutien de la cicatrice, reprise corporelle." },
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
              Questions fréquentes
            </h2>
            <div className="mt-10 space-y-4">
              {[
                [
                  "L'ostéopathie est-elle sans danger pendant la grossesse ?",
                  "Oui. Les techniques utilisées sont adaptées à chaque trimestre : approche tissulaire et viscérale douce, sans manipulation cervicales à haute vélocité. Hilary est formée (CFPCO) pour adapter chaque geste.",
                ],
                [
                  "À quel trimestre peut-on consulter enceinte ?",
                  "À tous les trimestres. Le premier trimestre nécessite plus de précaution, mais reste possible. Les 2ème et 3ème trimestres sont les périodes les plus fréquentes de consultation.",
                ],
                [
                  "L'ostéopathie aide-t-elle à préparer l'accouchement ?",
                  "Oui. En travaillant la mobilité du bassin, du sacrum et du diaphragme, l'ostéopathie contribue à préparer mécaniquement le corps à l'accouchement et peut améliorer la descente du bébé.",
                ],
                [
                  "Quand consulter en post-partum ?",
                  "Idéalement dans les 4 à 8 semaines après l'accouchement (après accord médical). Cela permet de rééquilibrer le bassin, traiter les douleurs résiduelles, soutenir la cicatrice de césarienne ou d'épisiotomie.",
                ],
                [
                  "L'ostéopathie soulage-t-elle la sciatique de grossesse ?",
                  "Oui, c'est l'une des indications les plus fréquentes. La sciatique gravidique est souvent liée à des tensions sacro-iliaques ou du piriforme. L'ostéopathie libère ces structures en toute sécurité.",
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
              ["Ostéopathie du Sport", "/osteopathie/sport", "Prévention, récupération et performance sportive."],
              ["Drainage Renata França", "/drainage", "Soulager les jambes lourdes et œdèmes de grossesse."],
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
              Vous êtes enceinte ou venez d'accoucher ?
            </h2>
            <p className="mt-4 text-graywarm text-lg">
              Prenez soin de vous et de votre bébé dès maintenant.<br />
              Cabinets à <strong>Paris 15 (75015)</strong> et <strong>Sèvres (92310)</strong>.
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
