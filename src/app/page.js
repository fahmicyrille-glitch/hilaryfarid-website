// src/app/page.js — Server Component (SEO + perf)
import Image from "next/image";
import Link from "next/link";
import { FadeInNoShift } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import StatsBand from "@/components/StatsBand";
import { fetchGoogleReviews } from "@/lib/googleReviews";
import {
  GLOBAL_REVIEW_COUNT,
  GLOBAL_REVIEW_RATING,
  SEVRES_RATING,
  PARIS15_RATING,
  RENATA_OFFICIAL_URL,
  OPENING_HOURS_SEVRES,
  OPENING_HOURS_PARIS15,
} from "@/config/siteConfig";
import { articles } from "@/data/articles";
import { hreflangFor } from "@/config/i18n";
import {
  IconBone,
  IconDroplets,
  IconMapPin,
  IconBadgeCheck,
  IconBaby,
  IconHeartHands,
  IconSparkle,
} from "@/components/icons/UiIcons";

export const revalidate = 21600; // 6h — rafraîchit les avis Google

export const metadata = {
  alternates: hreflangFor("/"),
};

/* 🚀 ANIMATION CSS SSR-SAFE (ZÉRO CLS) */
const fadeCss = `
@keyframes fadeInHero {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.fade-hero {
  opacity: 0;
  animation: fadeInHero .8s ease-out .1s forwards;
}
`;

// Construit les schémas avec les vraies notes/avis quand l'API Google répond,
// sinon retombe sur les constantes de siteConfig.js (à tenir à jour manuellement).
const buildHomeSchemas = (googleStats) => {
  const sevres = googleStats?.byCabinet?.sevres;
  const paris15 = googleStats?.byCabinet?.paris15;

  return [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": "https://www.hilaryfarid-osteopathe.fr/#webpage",
    url: "https://www.hilaryfarid-osteopathe.fr/",
    name: "Hilary Farid – Ostéopathe DO à Sèvres & Paris 15",
    description:
      "Ostéopathie adulte, nourrisson, femme enceinte et sportif. Drainage Renata França. Deux cabinets : Sèvres & Paris 15.",
    mainEntity: {
      "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid",
    },
  },
  // Physician entité définie exhaustivement dans layout.js (apparaît sur toutes les pages)
  // → on évite le doublon @id sur la home en ne la redéclarant pas ici
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres",
    name: "Cabinet d'ostéopathie – Sèvres",
    image: [
      "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-1.webp",
      "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-2.webp",
      "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/cabinet-sevres-3.webp",
    ],
    telephone: "+33672014539",
    logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "104 Grande Rue",
      addressLocality: "Sèvres",
      postalCode: "92310",
      addressCountry: "FR",
    },
    identifier: { "@type": "PropertyValue", name: "SIRET", value: "90179515300013" },
    legalName: "SIREN 901795153",
    openingHoursSpecification: OPENING_HOURS_SEVRES,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(sevres?.rating ?? SEVRES_RATING.ratingValue),
      reviewCount: String(sevres?.total ?? SEVRES_RATING.reviewCount),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15",
    name: "Cabinet d'ostéopathie – Paris 15",
    image: [
      "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
      "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-2.webp",
      "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-3.webp",
    ],
    telephone: "+33672014539",
    logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "28 Rue Letellier",
      addressLocality: "Paris",
      postalCode: "75015",
      addressCountry: "FR",
    },
    identifier: { "@type": "PropertyValue", name: "SIRET", value: "90179515300021" },
    legalName: "SIREN 901795153",
    openingHoursSpecification: OPENING_HOURS_PARIS15,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(paris15?.rating ?? PARIS15_RATING.ratingValue),
      reviewCount: String(paris15?.total ?? PARIS15_RATING.reviewCount),
    },
  },
  ];
};

// Avis de secours (affichés uniquement si l'API Google n'est pas configurée,
// sans aucun branding Google)
const FALLBACK_REVIEWS = [
  {
    name: "Sabrina L.",
    text: "Un soin incroyable ! Résultats visibles dès la première séance de drainage. J'avais les jambes très lourdes et le ventre gonflé, je suis ressortie légère.",
    context: "Drainage Renata França",
  },
  {
    name: "Julie M.",
    text: "J'ai consulté pour mon nourrisson de 2 mois qui souffrait de reflux et de coliques. Mon bébé est beaucoup plus apaisé et dort tellement mieux depuis !",
    context: "Ostéopathie nourrisson",
  },
  {
    name: "Mathieu D.",
    text: "Très à l'écoute, technique et efficace. Mes douleurs cervicales chroniques liées au télétravail ont totalement disparu en deux séances.",
    context: "Ostéopathie adulte",
  },
];

export default async function Home() {
  let googleReviews = [];
  let googleStats = null;
  try {
    const { reviews, stats } = await fetchGoogleReviews();
    googleReviews = reviews;
    googleStats = stats;
  } catch {
    // Pas d'avis Google disponibles → fallback silencieux
  }

  const reviewCountLabel = googleStats?.total
    ? `${googleStats.total} avis`
    : `${GLOBAL_REVIEW_COUNT} avis`;
  const reviewRatingLabel = googleStats?.rating ?? GLOBAL_REVIEW_RATING;

  return (
    <main>

      {/* Inject CSS SSR-safe animation */}
      <style>{fadeCss}</style>

      {/* JSON-LD inline — dans le HTML initial dès le rendu serveur */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHomeSchemas(googleStats)) }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-primary text-offwhite relative overflow-hidden pb-24 md:pb-32">
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />

        <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-20 grid md:grid-cols-2 gap-10 items-center relative z-10">

          <div className="fade-hero">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-offwhite">
              Ostéopathe D.O.<br />
              à Sèvres &amp; Paris 15
            </h1>

            {/* Badge certification vérifiable */}
            <a
              href={RENATA_OFFICIAL_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-offwhite/10 border border-offwhite/30 rounded-full px-4 py-1.5 text-xs md:text-sm text-offwhite/90 hover:bg-offwhite/20 transition-colors"
            >
              <IconBadgeCheck className="w-4 h-4 text-amber-300" />
              Praticienne certifiée Renata França
            </a>

            <h2 className="mt-5 text-xl md:text-2xl font-semibold text-offwhite/90 leading-snug">
              Ostéopathie douce &amp;<br />
              Drainage Renata França
            </h2>

            <p className="mt-5 text-base md:text-lg text-offwhite/90">
              Hilary Farid vous accompagne à Sèvres et Paris 15 avec une prise en charge globale : soulagez vos douleurs grâce à <strong>l'ostéopathie</strong>, et retrouvez légèreté et vitalité avec la méthode <strong>Renata França</strong>.
            </p>

            {/* ⭐ PREUVE SOCIALE ⭐ */}
            <div className="mt-6 mb-2 flex items-center gap-2">
              <div className="flex text-amber-400 text-lg drop-shadow-md">★★★★★</div>
              <span className="text-offwhite/90 text-sm font-medium">
                {reviewRatingLabel}/5 sur Google ({reviewCountLabel})
              </span>
            </div>

            {/* BOUTONS D'ACTION */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
              >
                Prendre rendez-vous
              </button>

              <Link
                href="/drainage"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm md:text-base text-offwhite border border-offwhite/50 bg-white/10 hover:bg-white/20 transition-colors"
              >
                Le Drainage Renata França
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Diplômée IDO Paris",
                "Certifiée Renata França",
                "Mutuelles acceptées",
              ].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 text-xs text-offwhite/80 bg-white/10 border border-offwhite/20 rounded-full px-3 py-1">
                  <IconBadgeCheck className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-hero md:fade-hero">
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-4 bg-offwhite/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-offwhite/30 aspect-square">
                <Image
                  src="/noResize_hilary.webp"
                  alt="Hilary Farid, ostéopathe et praticienne Renata França à Sèvres et Paris 15"
                  fill
                  priority
                  fetchPriority="high"
                  decoding="async"
                  quality={85}
                  sizes="(max-width: 768px) 90vw, 600px"
                  className="object-cover object-top w-full h-full hero-zoom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LES 2 EXPERTISES ================= */}
      <section className="relative z-20 -mt-16 md:-mt-24 max-w-6xl mx-auto px-6 pb-16">
        <FadeInNoShift>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">

            {/* Carte Ostéopathie */}
            <Link
              href="/osteopathie"
              className="group bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-light/50 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <IconBone className="w-7 h-7" />
              </div>
              <div className="flex items-start justify-between gap-2 mb-4">
                <h3 className="text-2xl font-bold text-primary">Ostéopathie D.O</h3>
                <span className="shrink-0 text-xs font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1">à partir de 50€</span>
              </div>
              <p className="text-graywarm mb-6 flex-grow">
                Une approche douce et personnalisée pour soulager vos douleurs articulaires, musculaires, et vos troubles digestifs ou liés au stress. Prise en charge des adultes, nourrissons, femmes enceintes et sportifs.
              </p>
              <span className="font-semibold text-primary underline underline-offset-4 group-hover:text-secondary flex items-center gap-2">
                Découvrir l'ostéopathie <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

            {/* Carte Drainage Renata França */}
            <Link
              href="/drainage"
              className="group bg-cream rounded-3xl p-8 md:p-10 shadow-xl border border-cream-border flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-white text-secondary rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <IconDroplets className="w-7 h-7" />
              </div>
              <div className="flex items-start justify-between gap-2 mb-4">
                <h3 className="text-2xl font-bold text-ink">Drainage Renata França</h3>
                <span className="shrink-0 text-xs font-semibold text-secondary bg-secondary/10 rounded-full px-2.5 py-1">à partir de 160€</span>
              </div>
              <p className="text-graywarm mb-6 flex-grow">
                Un massage manuel tonique et exclusif aux résultats immédiats. Idéal pour lutter contre la rétention d'eau, obtenir des jambes légères, un ventre dégonflé et relancer le métabolisme.
              </p>
              <span className="font-semibold text-ink underline underline-offset-4 group-hover:text-primary flex items-center gap-2">
                Tout savoir sur le drainage Renata <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

          </div>
        </FadeInNoShift>
      </section>

      {/* ================= CHIFFRES CLÉS (count-up au scroll) ================= */}
      <section className="py-12 md:py-16 bg-offwhite border-y border-light/60">
        <div className="max-w-5xl mx-auto px-6">
          <StatsBand />
        </div>
      </section>

      {/* ================= SECTION : Pourquoi consulter ? ================= */}
      <section className="py-10 md:py-16 bg-offwhite">
        <FadeInNoShift>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              Quand consulter en ostéopathie ?
            </h2>
            <p className="mt-4 text-center text-graywarm max-w-3xl mx-auto">
              L'ostéopathie aide à soulager de nombreux troubles fonctionnels,
              que ce soit après un faux mouvement, une grossesse,
              une pratique sportive intensive, ou un trop-plein de stress.
            </p>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <IconBone className="w-6 h-6" />,
                  title: "Douleurs & posture",
                  text: "Maux de dos, nuque, épaules, sciatiques, blocages, tensions récurrentes, migraines…",
                  accent: "bg-primary/10 text-primary",
                  delay: 0.1,
                },
                {
                  icon: <IconBaby className="w-6 h-6" />,
                  title: "Nourrissons & enfants",
                  text: "Plagiocéphalie, coliques, reflux, troubles du sommeil, pleurs inexpliqués…",
                  accent: "bg-blue-50 text-blue-600",
                  delay: 0.2,
                },
                {
                  icon: <IconHeartHands className="w-6 h-6" />,
                  title: "Grossesse & post-partum",
                  text: "Lombalgies, préparation du bassin, sciatique, confort respiratoire…",
                  accent: "bg-rose-50 text-rose-500",
                  delay: 0.3,
                },
                {
                  icon: <IconSparkle className="w-6 h-6" />,
                  title: "Digestion & stress",
                  text: "Troubles digestifs, ballonnements, anxiété, sommeil agité, fatigue…",
                  accent: "bg-amber-50 text-amber-600",
                  delay: 0.4,
                },
              ].map(({ icon, title, text, accent, delay }) => (
                <FadeInNoShift key={title} delay={delay}>
                  <div className="p-6 rounded-2xl bg-white shadow-sm border border-light/80 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${accent}`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{title}</h3>
                      <p className="mt-2 text-sm text-graywarm">{text}</p>
                    </div>
                  </div>
                </FadeInNoShift>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/osteopathie"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 hover:text-secondary">
                Toutes les indications de l'ostéopathie →
              </Link>
            </div>
          </div>
        </FadeInNoShift>
      </section>

      {/* ================= AVIS GOOGLE (2 cabinets) ================= */}
      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInNoShift>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                Ce que disent les patients
              </h2>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="flex text-amber-400 text-xl">★★★★★</span>
                <span className="text-graywarm font-medium">
                  {reviewRatingLabel}/5 · {reviewCountLabel} · Sèvres &amp; Paris 15
                </span>
              </div>
            </div>

            <GoogleReviewsCarousel reviews={googleReviews} fallback={FALLBACK_REVIEWS} />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-doctolib-dark transition-all transform hover:-translate-y-0.5"
              >
                Prendre rendez-vous
              </button>
              <Link
                href="/temoignages"
                className="inline-flex items-center gap-2 text-primary font-semibold underline underline-offset-4 hover:text-secondary"
              >
                Tous les témoignages →
              </Link>
            </div>
          </FadeInNoShift>
        </div>
      </section>

      {/* ================= SECTION : Cabinets ================= */}
      <section className="py-16 md:py-20 bg-offwhite relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
            Nos cabinets de consultation
          </h2>
          <p className="mt-4 text-center text-graywarm">
            Séances d'ostéopathie et de drainage Renata França à Sèvres et Paris 15.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* --------- CARTE SÈVRES --------- */}
            <div className="group rounded-2xl bg-white border border-light/80 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              {/* Grande image principale */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/cabinet-sevres/cabinet-sevres-1.webp"
                  fill
                  alt="Salle de consultation du cabinet d'ostéopathie à Sèvres – Hilary Farid"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  <IconMapPin className="w-3.5 h-3.5" /> Sèvres – 92310
                </span>
              </div>
              {/* Miniatures */}
              <div className="grid grid-cols-2 gap-1 px-1 pt-1">
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image src="/cabinet-sevres/cabinet-sevres-2.webp" fill
                    alt="Table de soin ostéopathie cabinet Sèvres" className="object-cover" loading="lazy" sizes="25vw" />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image src="/cabinet-sevres/cabinet-sevres-3.webp" fill
                    alt="Salle d'attente cabinet Sèvres" className="object-cover" loading="lazy" sizes="25vw" />
                </div>
              </div>
              {/* Infos */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">Cabinet de Sèvres</h3>
                <p className="mt-1.5 text-sm text-graywarm">104 Grande Rue, 92310 Sèvres</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/sevres"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-4 hover:text-secondary group-hover:text-secondary">
                    Voir le cabinet →
                  </Link>
                  <a
                    href="https://share.google/vyqDUNKOo1q0HmayO"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-graywarm hover:text-primary border border-light rounded-full px-3 py-1"
                  >
                    <IconMapPin className="w-3 h-3" /> Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* --------- CARTE PARIS 15 --------- */}
            <div className="group rounded-2xl bg-white border border-light/80 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              {/* Grande image principale */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/cabinet-paris15/cabinet-paris15-1.webp"
                  fill
                  alt="Salle de consultation du cabinet d'ostéopathie Paris 15 – Hilary Farid"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  <IconMapPin className="w-3.5 h-3.5" /> Paris 15 – 75015
                </span>
              </div>
              {/* Miniatures */}
              <div className="grid grid-cols-2 gap-1 px-1 pt-1">
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image src="/cabinet-paris15/cabinet-paris15-2.webp" fill
                    alt="Table de soin ostéopathie cabinet Paris 15" className="object-cover" loading="lazy" sizes="25vw" />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image src="/cabinet-paris15/cabinet-paris15-3.webp" fill
                    alt="Salle d'attente cabinet Paris 15" className="object-cover" loading="lazy" sizes="25vw" />
                </div>
              </div>
              {/* Infos */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">Cabinet Paris 15</h3>
                <p className="mt-1.5 text-sm text-graywarm">28 Rue Letellier, 75015 Paris</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/paris15"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-4 hover:text-secondary group-hover:text-secondary">
                    Voir le cabinet →
                  </Link>
                  <a
                    href="https://share.google/fQuSNhyJKa5uEN5gK"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-graywarm hover:text-primary border border-light rounded-full px-3 py-1"
                  >
                    <IconMapPin className="w-3 h-3" /> Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG TEASER ================= */}
      <section className="py-16 md:py-20 px-6 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Articles & conseils santé
            </h2>
            <p className="mt-3 text-graywarm max-w-2xl mx-auto">
              Nourrisson, grossesse, freins restrictifs, drainage Renata França — des ressources pour mieux comprendre votre santé.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[...articles]
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 3)
              .map((article) => {
                const colorMap = {
                  blue:  { bg: "bg-blue-50",  text: "text-blue-700",  border: "border-blue-100" },
                  teal:  { bg: "bg-teal-50",  text: "text-teal-700",  border: "border-teal-100" },
                  green: { bg: "bg-green-50", text: "text-green-700", border: "border-green-100" },
                  amber: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100" },
                };
                const c = colorMap[article.categoryColor] || colorMap.blue;
                return (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group block bg-white rounded-2xl border border-light/60 overflow-hidden hover:border-secondary/40 hover:shadow-md transition-all"
                  >
                    <div className={`${c.bg} border-b ${c.border} px-4 py-2 flex items-center justify-between`}>
                      <span className={`${c.text} text-xs font-bold uppercase tracking-wider`}>{article.category}</span>
                      <span className="text-xs text-graywarm">{article.readTime}</span>
                    </div>
                    <div className="p-5">
                      <p className="font-bold text-primary text-sm group-hover:text-secondary transition-colors leading-snug">{article.title}</p>
                      <p className="mt-2 text-xs text-graywarm line-clamp-2">{article.excerpt}</p>
                      <span className="mt-3 inline-flex items-center text-xs font-semibold text-secondary">Lire l'article →</span>
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-colors">
              Voir tous les articles →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA finale ================= */}
      <section className="py-16 md:py-20 px-6 bg-light">
        <FadeInNoShift>
          <div className="max-w-4xl mx-auto bg-cream border border-cream-border rounded-3xl shadow-md text-center p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">
              Prêt(e) à prendre soin de vous ?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-graywarm">
              Une première séance permet déjà de faire le point, que ce soit pour des douleurs ou pour un drainage Renata França.
            </p>
            <button
              type="button"
              className="trigger-booking-modal mt-8 inline-block bg-doctolib text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-doctolib-dark transition-all transform hover:-translate-y-0.5"
            >
              Prendre rendez-vous
            </button>
            <p className="mt-4 text-sm text-graywarm">
              En ligne sur Doctolib ou par téléphone — c'est vous qui choisissez.
            </p>
          </div>
        </FadeInNoShift>
      </section>

      <BackToTop />

    </main>
  );
}
