// src/app/en/page.js — English homepage (Server Component)
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
import { hreflangForEn } from "@/config/i18n";
import {
  IconBone,
  IconDroplets,
  IconMapPin,
  IconBadgeCheck,
  IconBaby,
  IconHeartHands,
  IconSparkle,
} from "@/components/icons/UiIcons";

export const revalidate = 21600; // 6h — refreshes Google reviews

export const metadata = {
  title: "Osteopath D.O. in Sèvres & Paris 15 — English Spoken",
  description:
    "Hilary Farid, Osteopath D.O. near Paris (Sèvres & Paris 15). Gentle osteopathy for adults, infants, pregnant women and athletes. English spoken. Renata França lymphatic drainage.",
  alternates: hreflangForEn("/en"),
};

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

const buildHomeSchemasEn = (googleStats) => {
  const sevres = googleStats?.byCabinet?.sevres;
  const paris15 = googleStats?.byCabinet?.paris15;

  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://www.hilaryfarid-osteopathe.fr/en#webpage",
      url: "https://www.hilaryfarid-osteopathe.fr/en",
      inLanguage: "en",
      name: "Hilary Farid – Osteopath D.O. in Sèvres & Paris 15",
      description:
        "Osteopathy for adults, infants, pregnant women and athletes. Renata França lymphatic drainage. Two locations: Sèvres & Paris 15. English spoken.",
      mainEntity: {
        "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres",
      name: "Osteopathy Clinic – Sèvres",
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
      name: "Osteopathy Clinic – Paris 15",
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

// Fallback reviews shown only if the Google API is unavailable — real patient
// wording kept in French (these are genuine quotes), Google branding omitted.
const FALLBACK_REVIEWS = [
  {
    name: "Sabrina L.",
    text: "An incredible treatment! Results visible from the very first drainage session. My legs were so heavy and my stomach bloated — I left feeling light.",
    context: "Renata França Drainage",
  },
  {
    name: "Julie M.",
    text: "I came in for my 2-month-old who had reflux and colic. My baby is so much calmer and sleeps so much better ever since!",
    context: "Infant Osteopathy",
  },
  {
    name: "Mathieu D.",
    text: "Very attentive, skilled and effective. My chronic neck pain from working at a desk completely disappeared after two sessions.",
    context: "Adult Osteopathy",
  },
];

export default async function HomeEn() {
  let googleReviews = [];
  let googleStats = null;
  try {
    const { reviews, stats } = await fetchGoogleReviews();
    googleReviews = reviews;
    googleStats = stats;
  } catch {
    // No Google reviews available → silent fallback
  }

  const reviewCountLabel = googleStats?.total
    ? `${googleStats.total} reviews`
    : `${GLOBAL_REVIEW_COUNT} reviews`;
  const reviewRatingLabel = googleStats?.rating ?? GLOBAL_REVIEW_RATING;

  return (
    <main>
      <style>{fadeCss}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHomeSchemasEn(googleStats)) }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-primary text-offwhite relative overflow-hidden pb-24 md:pb-32">
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />

        <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-20 grid md:grid-cols-2 gap-10 items-center relative z-10">

          <div className="fade-hero">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-offwhite">
              Osteopath D.O.<br />
              in Sèvres &amp; Paris 15
            </h1>

            <a
              href={RENATA_OFFICIAL_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-offwhite/10 border border-offwhite/30 rounded-full px-4 py-1.5 text-xs md:text-sm text-offwhite/90 hover:bg-offwhite/20 transition-colors"
            >
              <IconBadgeCheck className="w-4 h-4 text-amber-300" />
              Certified Renata França Practitioner
            </a>

            <h2 className="mt-5 text-xl md:text-2xl font-semibold text-offwhite/90 leading-snug">
              Gentle Osteopathy &amp;<br />
              Renata França Drainage
            </h2>

            <p className="mt-5 text-base md:text-lg text-offwhite/90">
              Hilary Farid welcomes you in Sèvres and Paris 15, near Paris, for comprehensive care — English spoken throughout your visit: relieve your pain with <strong>osteopathy</strong>, and regain lightness and vitality with the <strong>Renata França</strong> method.
            </p>

            <div className="mt-6 mb-2 flex items-center gap-2">
              <div className="flex text-amber-400 text-lg drop-shadow-md">★★★★★</div>
              <span className="text-offwhite/90 text-sm font-medium">
                {reviewRatingLabel}/5 on Google ({reviewCountLabel})
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
              >
                Book an Appointment
              </button>

              <Link
                href="/en/drainage"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm md:text-base text-offwhite border border-offwhite/50 bg-white/10 hover:bg-white/20 transition-colors"
              >
                Renata França Drainage
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "IDO Paris Graduate",
                "Certified Renata França",
                "English Spoken",
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
                  alt="Hilary Farid, osteopath and Renata França practitioner in Sèvres and Paris 15"
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

      {/* ================= 2 SPECIALTIES ================= */}
      <section className="relative z-20 -mt-16 md:-mt-24 max-w-6xl mx-auto px-6 pb-16">
        <FadeInNoShift>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">

            <Link
              href="/en/osteopathie"
              className="group bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-light/50 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <IconBone className="w-7 h-7" />
              </div>
              <div className="flex items-start justify-between gap-2 mb-4">
                <h3 className="text-2xl font-bold text-primary">Osteopathy</h3>
                <span className="shrink-0 text-xs font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1">from €50</span>
              </div>
              <p className="text-graywarm mb-6 flex-grow">
                A gentle, personalised approach to relieve joint and muscle pain, and digestive or stress-related issues. Adults, infants, pregnant women and athletes welcome.
              </p>
              <span className="font-semibold text-primary underline underline-offset-4 group-hover:text-secondary flex items-center gap-2">
                Discover osteopathy <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <Link
              href="/en/drainage"
              className="group bg-cream rounded-3xl p-8 md:p-10 shadow-xl border border-cream-border flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-white text-secondary rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <IconDroplets className="w-7 h-7" />
              </div>
              <div className="flex items-start justify-between gap-2 mb-4">
                <h3 className="text-2xl font-bold text-ink">Renata França Drainage</h3>
                <span className="shrink-0 text-xs font-semibold text-secondary bg-secondary/10 rounded-full px-2.5 py-1">from €160</span>
              </div>
              <p className="text-graywarm mb-6 flex-grow">
                An invigorating, dynamic manual massage with immediate results. Ideal for water retention, lighter legs, a flatter stomach and a metabolism boost.
              </p>
              <span className="font-semibold text-ink underline underline-offset-4 group-hover:text-primary flex items-center gap-2">
                Learn about Renata França drainage <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

          </div>
        </FadeInNoShift>
      </section>

      {/* ================= KEY NUMBERS ================= */}
      <section className="py-12 md:py-16 bg-offwhite border-y border-light/60">
        <div className="max-w-5xl mx-auto px-6">
          <StatsBand />
        </div>
      </section>

      {/* ================= WHEN TO SEE AN OSTEOPATH ================= */}
      <section className="py-10 md:py-16 bg-offwhite">
        <FadeInNoShift>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
              When should you see an osteopath?
            </h2>
            <p className="mt-4 text-center text-graywarm max-w-3xl mx-auto">
              Osteopathy helps relieve a wide range of functional issues — after
              an awkward movement, during pregnancy, intense training,
              or when stress builds up.
            </p>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <IconBone className="w-6 h-6" />,
                  title: "Pain & Posture",
                  text: "Back, neck and shoulder pain, sciatica, stiffness, recurring tension, migraines…",
                  accent: "bg-primary/10 text-primary",
                  delay: 0.1,
                },
                {
                  icon: <IconBaby className="w-6 h-6" />,
                  title: "Infants & Children",
                  text: "Plagiocephaly, colic, reflux, sleep issues, unexplained crying…",
                  accent: "bg-blue-50 text-blue-600",
                  delay: 0.2,
                },
                {
                  icon: <IconHeartHands className="w-6 h-6" />,
                  title: "Pregnancy & Post-partum",
                  text: "Lower back pain, pelvic preparation, sciatica, breathing comfort…",
                  accent: "bg-rose-50 text-rose-500",
                  delay: 0.3,
                },
                {
                  icon: <IconSparkle className="w-6 h-6" />,
                  title: "Digestion & Stress",
                  text: "Digestive issues, bloating, anxiety, restless sleep, fatigue…",
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
              <Link href="/en/osteopathie"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 hover:text-secondary">
                See everything osteopathy can help with →
              </Link>
            </div>
          </div>
        </FadeInNoShift>
      </section>

      {/* ================= GOOGLE REVIEWS (2 locations) ================= */}
      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInNoShift>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                What patients say
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
                Book an Appointment
              </button>
              <Link
                href="/en/temoignages"
                className="inline-flex items-center gap-2 text-primary font-semibold underline underline-offset-4 hover:text-secondary"
              >
                All testimonials →
              </Link>
            </div>
          </FadeInNoShift>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
      <section className="py-16 md:py-20 bg-offwhite relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
            Our Practice Locations
          </h2>
          <p className="mt-4 text-center text-graywarm">
            Osteopathy and Renata França drainage sessions in Sèvres and Paris 15.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* --------- SÈVRES CARD --------- */}
            <div className="group rounded-2xl bg-white border border-light/80 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/cabinet-sevres/cabinet-sevres-1.webp"
                  fill
                  alt="Consultation room at the Sèvres osteopathy clinic – Hilary Farid"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  <IconMapPin className="w-3.5 h-3.5" /> Sèvres – 92310
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1 px-1 pt-1">
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image src="/cabinet-sevres/cabinet-sevres-2.webp" fill
                    alt="Treatment table at the Sèvres osteopathy clinic" className="object-cover" loading="lazy" sizes="25vw" />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image src="/cabinet-sevres/cabinet-sevres-3.webp" fill
                    alt="Waiting room at the Sèvres clinic" className="object-cover" loading="lazy" sizes="25vw" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">Sèvres Clinic</h3>
                <p className="mt-1.5 text-sm text-graywarm">104 Grande Rue, 92310 Sèvres, France</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/en/sevres"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-4 hover:text-secondary group-hover:text-secondary">
                    View this location →
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

            {/* --------- PARIS 15 CARD --------- */}
            <div className="group rounded-2xl bg-white border border-light/80 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/cabinet-paris15/cabinet-paris15-1.webp"
                  fill
                  alt="Consultation room at the Paris 15 osteopathy clinic – Hilary Farid"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  <IconMapPin className="w-3.5 h-3.5" /> Paris 15 – 75015
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1 px-1 pt-1">
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image src="/cabinet-paris15/cabinet-paris15-2.webp" fill
                    alt="Treatment table at the Paris 15 osteopathy clinic" className="object-cover" loading="lazy" sizes="25vw" />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image src="/cabinet-paris15/cabinet-paris15-3.webp" fill
                    alt="Waiting room at the Paris 15 clinic" className="object-cover" loading="lazy" sizes="25vw" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">Paris 15 Clinic</h3>
                <p className="mt-1.5 text-sm text-graywarm">28 Rue Letellier, 75015 Paris, France</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/en/paris15"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-4 hover:text-secondary group-hover:text-secondary">
                    View this location →
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

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 md:py-20 px-6 bg-light">
        <FadeInNoShift>
          <div className="max-w-4xl mx-auto bg-cream border border-cream-border rounded-3xl shadow-md text-center p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">
              Ready to take care of yourself?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-graywarm">
              A first session is a great way to assess your needs — whether for pain relief or Renata França drainage.
            </p>
            <button
              type="button"
              className="trigger-booking-modal mt-8 inline-block bg-doctolib text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-doctolib-dark transition-all transform hover:-translate-y-0.5"
            >
              Book an Appointment
            </button>
            <p className="mt-4 text-sm text-graywarm">
              Online via Doctolib or by phone — whichever suits you best.
            </p>
          </div>
        </FadeInNoShift>
      </section>

      <BackToTop />

    </main>
  );
}
