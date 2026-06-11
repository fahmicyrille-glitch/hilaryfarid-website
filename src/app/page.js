// src/app/page.js — Server Component (SEO + perf)
import Image from "next/image";
import Link from "next/link";
import { FadeInNoShift } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import GoogleReviewsCarousel from "@/components/GoogleReviewsCarousel";
import StatsBand from "@/components/StatsBand";
import { fetchGoogleReviews } from "@/lib/googleReviews";
import {
  OPENING_HOURS,
  GLOBAL_REVIEW_COUNT,
  RENATA_OFFICIAL_URL,
} from "@/config/siteConfig";
import {
  IconBone,
  IconDroplets,
  IconMapPin,
  IconBadgeCheck,
} from "@/components/icons/UiIcons";

export const revalidate = 21600; // 6h — rafraîchit les avis Google

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

const HOME_SCHEMAS = [
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
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid",
    name: "Hilary Farid",
    image: "https://www.hilaryfarid-osteopathe.fr/hilary.webp",
    jobTitle: "Ostéopathe D.O.",
    telephone: "+33672014539",
    logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
    email: "hilaryfarid.osteopathe@gmail.com",
    url: "https://www.hilaryfarid-osteopathe.fr/",
    medicalSpecialty: [
      "Osteopathy",
      "PregnancyCare",
      "Pediatric",
      "SportsMedicine",
    ],
    worksFor: [
      { "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres" },
      { "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: GLOBAL_REVIEW_COUNT,
      bestRating: "5",
      worstRating: "5",
    },
  },
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
    openingHoursSpecification: OPENING_HOURS,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "62",
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
    openingHoursSpecification: OPENING_HOURS,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "62",
    },
  },
];

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
    ? `+${googleStats.total} avis`
    : `+${GLOBAL_REVIEW_COUNT} avis`;

  return (
    <main>

      {/* Inject CSS SSR-safe animation */}
      <style>{fadeCss}</style>

      {/* JSON-LD inline — dans le HTML initial dès le rendu serveur */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_SCHEMAS) }}
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
                5/5 sur Google ({reviewCountLabel})
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

            <p className="mt-5 text-xs text-offwhite/90">
              Prise en charge ostéopathique possible par les mutuelles.
            </p>
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
              <h3 className="text-2xl font-bold text-primary mb-4">Ostéopathie D.O</h3>
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
              <h3 className="text-2xl font-bold text-ink mb-4">Drainage Renata França</h3>
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
              <FadeInNoShift delay={0.1}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80 h-full">
                  <h3 className="font-semibold text-primary">Douleurs &amp; posture</h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Maux de dos, nuque, épaules, sciatiques, blocages, tensions
                    récurrentes, migraines…
                  </p>
                </div>
              </FadeInNoShift>

              <FadeInNoShift delay={0.2}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80 h-full">
                  <h3 className="font-semibold text-primary">Nourrissons &amp; enfants</h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Plagiocéphalie, coliques, reflux, troubles du sommeil, pleurs inexpliqués…
                  </p>
                </div>
              </FadeInNoShift>

              <FadeInNoShift delay={0.3}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80 h-full">
                  <h3 className="font-semibold text-primary">Grossesse &amp; post-partum</h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Lombalgies, préparation du bassin, sciatique, confort respiratoire…
                  </p>
                </div>
              </FadeInNoShift>

              <FadeInNoShift delay={0.4}>
                <div className="p-5 rounded-xl bg-white shadow-sm border border-light/80 h-full">
                  <h3 className="font-semibold text-primary">Digestion &amp; stress</h3>
                  <p className="mt-2 text-sm text-graywarm">
                    Troubles digestifs, ballonnements, anxiété, sommeil agité, fatigue…
                  </p>
                </div>
              </FadeInNoShift>
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
                  {googleStats?.rating ?? "5"}/5 · {reviewCountLabel} · Sèvres &amp; Paris 15
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

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {/* --------- CARTE SÈVRES --------- */}
            <Link
              href="/sevres"
              className="group relative p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-light/80 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="grid grid-cols-3 gap-2 mb-5 rounded-xl overflow-hidden">
                <Image
                  src="/cabinet-sevres/cabinet-sevres-1.webp"
                  width={350} height={200}
                  alt="Salle de consultation du cabinet d'ostéopathie à Sèvres – Hilary Farid"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 640px) 33vw, 120px"
                />
                <Image
                  src="/cabinet-sevres/cabinet-sevres-2.webp"
                  width={350} height={200}
                  alt="Table de soin ostéopathie au cabinet de Sèvres – Hilary Farid"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 640px) 33vw, 120px"
                />
                <Image
                  src="/cabinet-sevres/cabinet-sevres-3.webp"
                  width={350} height={200}
                  alt="Salle d'attente du cabinet d'ostéopathie Sèvres – Hilary Farid"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 640px) 33vw, 120px"
                />
              </div>

              <div className="relative h-8">
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-primary text-offwhite text-xs px-3 py-1 rounded-full shadow-sm">
                  <IconMapPin className="w-3.5 h-3.5" /> Sèvres
                </span>
              </div>

              <h3 className="text-xl font-semibold text-primary">Cabinet de Sèvres</h3>
              <p className="mt-3 text-graywarm leading-relaxed">
                104 Grande Rue, 92310 Sèvres.
              </p>

              <span className="mt-5 inline-block text-secondary underline underline-offset-4 group-hover:text-primary">
                Voir le cabinet →
              </span>
            </Link>

            {/* --------- CARTE PARIS 15 --------- */}
            <Link
              href="/paris15"
              className="group relative p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-light/80 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="grid grid-cols-3 gap-2 mb-5 rounded-xl overflow-hidden">
                <Image
                  src="/cabinet-paris15/cabinet-paris15-1.webp"
                  width={350} height={200}
                  alt="Salle de consultation du cabinet d'ostéopathie Paris 15 – Hilary Farid"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 640px) 33vw, 120px"
                />
                <Image
                  src="/cabinet-paris15/cabinet-paris15-2.webp"
                  width={350} height={200}
                  alt="Table de soin ostéopathie au cabinet Paris 15 – Hilary Farid"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 640px) 33vw, 120px"
                />
                <Image
                  src="/cabinet-paris15/cabinet-paris15-3.webp"
                  width={350} height={200}
                  alt="Salle d'attente du cabinet d'ostéopathie Paris 15 – Hilary Farid"
                  className="object-cover h-28 w-full"
                  loading="lazy"
                  sizes="(max-width: 640px) 33vw, 120px"
                />
              </div>

              <div className="relative h-8">
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-primary text-offwhite text-xs px-3 py-1 rounded-full shadow-sm">
                  <IconMapPin className="w-3.5 h-3.5" /> Paris 15
                </span>
              </div>

              <h3 className="text-xl font-semibold text-primary">Cabinet Paris 15</h3>
              <p className="mt-3 text-graywarm leading-relaxed">
                28 Rue Letellier, 75015 Paris.
              </p>

              <span className="mt-5 inline-block text-secondary underline underline-offset-4 group-hover:text-primary">
                Voir le cabinet →
              </span>
            </Link>
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
            {[
              { title: "Freins restrictifs chez le nourrisson", category: "Nourrisson", slug: "freins-restrictifs-nourrisson", color: "bg-blue-50 text-blue-700 border-blue-100" },
              { title: "Plagiocéphalie : que faire ?", category: "Nourrisson", slug: "plagiocephalie-nourrisson-osteopathe", color: "bg-blue-50 text-blue-700 border-blue-100" },
              { title: "Drainage Renata França : bienfaits", category: "Drainage", slug: "drainage-renata-franca-methode", color: "bg-teal-50 text-teal-700 border-teal-100" },
            ].map(({ title, category, slug, color }) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="group block bg-white rounded-2xl border border-light/60 overflow-hidden hover:border-secondary/40 hover:shadow-md transition-all"
              >
                <div className={`${color.split(" ")[0]} border-b ${color.split(" ")[2]} px-4 py-2`}>
                  <span className={`${color.split(" ")[1]} text-xs font-bold uppercase tracking-wider`}>{category}</span>
                </div>
                <div className="p-5">
                  <p className="font-bold text-primary text-sm group-hover:text-secondary transition-colors leading-snug">{title}</p>
                  <span className="mt-3 inline-flex items-center text-xs font-semibold text-secondary">Lire →</span>
                </div>
              </Link>
            ))}
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
