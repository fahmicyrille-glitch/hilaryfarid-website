import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import Paris15Nav from "@/components/Paris15Nav";
import { IconCheck, IconMapPin } from "@/components/icons/UiIcons";
import { PARIS15_RATING } from "@/config/siteConfig";
import { hreflangFor } from "@/config/i18n";

export const metadata = {
  alternates: hreflangFor("/paris15"),
};

const PARIS15_SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15",
    name: "Cabinet d'Ostéopathie – Paris 15",
    description:
      "Cabinet d'ostéopathie d'Hilary Farid à Paris 15. Consultations pour adultes, nourrissons, femmes enceintes et sportifs.",
    image: "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
    url: "https://www.hilaryfarid-osteopathe.fr/paris15",
    telephone: "+33672014539",
    logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
    priceRange: "60€ – 90€",
    legalName: "Hilary Farid – Ostéopathe DO",
    taxID: "90179515300021",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday",   opens: "12:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday",  opens: "12:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "14:45", closes: "19:45" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday",   opens: "09:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "13:00" },
    ],
    sameAs: [
      "https://www.doctolib.fr/osteopathe/paris/hilary-farid",
      "https://share.google/fQuSNhyJKa5uEN5gK",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "28 Rue Letellier",
      addressLocality: "Paris",
      postalCode: "75015",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 48.847151, longitude: 2.293107 },
    aggregateRating: { "@type": "AggregateRating", ratingValue: PARIS15_RATING.ratingValue, reviewCount: PARIS15_RATING.reviewCount },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels patients sont reçus au cabinet d'ostéopathie de Paris 15 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les consultations concernent les adultes, nourrissons, enfants, femmes enceintes et sportifs. Les techniques sont adaptées à chaque personne et à chaque motif.",
        },
      },
      {
        "@type": "Question",
        name: "Le cabinet est-il proche des métros ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, le cabinet est situé à 3 minutes des stations Commerce, Émile Zola et La Motte-Picquet – Grenelle.",
        },
      },
      {
        "@type": "Question",
        name: "Le cabinet est-il accessible avec une poussette ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, l'accueil des nourrissons et des parents avec poussette est facilité.",
        },
      },
      {
        "@type": "Question",
        name: "Comment prendre rendez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les rendez-vous se prennent en ligne via Doctolib ou par téléphone. Le cabinet est ouvert du lundi au samedi.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous le drainage Renata França à Paris 15 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, Hilary Farid propose des séances de drainage Renata França au cabinet de Paris 15 et à Sèvres. Il s'agit d'une technique manuelle spécifique, différente du drainage lymphatique médical remboursé par la Sécurité sociale.",
        },
      },
    ],
  },
];

export default function Paris15Page() {
  return (
    <main>
      {/* JSON-LD inline — dans le HTML initial */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PARIS15_SCHEMAS) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <Image
          src="/cabinet-paris15/cabinet-paris15-1.webp"
          alt="Cabinet d'ostéopathie Paris 15 – Hilary Farid, 28 rue Letellier"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold text-offwhite drop-shadow-lg">
              Cabinet d'Ostéopathie – Paris 15
            </h1>
            <p className="mt-4 text-offwhite text-lg md:text-xl max-w-2xl mx-auto">
              Un espace moderne, calme et lumineux pensé pour votre bien-être au cœur du 15e.
            </p>
            <div className="mt-6 mb-8 flex flex-col items-center justify-center gap-1">
              <div className="flex text-amber-400 text-xl tracking-widest drop-shadow-md">★★★★★</div>
              <span className="text-offwhite/90 text-sm font-medium tracking-wide">
                {PARIS15_RATING.ratingValue}/5 sur Google ({PARIS15_RATING.reviewCount} avis)
              </span>
            </div>
            <button
              type="button"
              className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
            >
              Prendre RDV Doctolib
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ================= WRAPPER SOMMAIRE + CONTENU ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">
          <Paris15Nav>
            {/* ===== LE CABINET + GALERIE ===== */}
            <SlideUp>
              <section id="cabinet" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Un cabinet au cœur du 15e arrondissement
                </h2>
                <p className="text-graywarm text-base md:text-lg leading-relaxed mt-6 mb-10 text-center max-w-3xl mx-auto">
                  Le cabinet d'ostéopathie de Paris 15 vous accueille dans un espace{" "}
                  <strong>calme, lumineux et apaisant</strong>, pensé pour favoriser la détente et
                  permettre un travail ostéopathique précis dans les meilleures conditions.
                </p>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { file: "cabinet-paris15-1.webp", label: "Salle de consultation du cabinet Paris 15 – Hilary Farid ostéopathe" },
                    { file: "cabinet-paris15-2.webp", label: "Table de soin ostéopathie Paris 15 – cabinet Hilary Farid" },
                    { file: "cabinet-paris15-3.webp", label: "Salle d'attente du cabinet d'ostéopathie Paris 15 rue Letellier" },
                  ].map((img, i) => (
                    <div key={i} className="relative w-full h-[200px] md:h-[240px] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <Image
                        src={`/cabinet-paris15/${img.file}`}
                        alt={img.label}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </SlideUp>

            {/* ===== VOTRE OSTÉOPATHE ===== */}
            <SlideUp>
              <section id="osteopathe" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-semibold text-primary">Votre ostéopathe – Hilary Farid</h2>
                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-6">
                      Ostéopathe DO diplômée, j'accompagne les patients du 15e arrondissement dans une
                      approche personnalisée, bienveillante et orientée sur l'origine des douleurs.
                    </p>
                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-4">
                      Les consultations concernent les adultes, nourrissons, femmes enceintes, enfants
                      et sportifs, avec des techniques adaptées à chaque âge et chaque morphologie.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-sm h-[450px] rounded-xl shadow-xl overflow-hidden">
                      <Image
                        src="/cabinet-paris15/hilary-paris15.webp"
                        alt="Hilary Farid, ostéopathe D.O. au cabinet de Paris 15"
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 90vw, 400px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ===== AVIS PATIENTS ===== */}
            <SlideUp>
              <section id="avis" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8 text-center">
                <h2 className="text-3xl font-semibold text-primary">Ce que disent les patients</h2>
                <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
                  <article className="p-6 rounded-xl bg-offwhite/50 border border-light/80 shadow-sm">
                    <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                    <p className="text-graywarm italic text-sm md:text-base leading-relaxed">
                      "Consultation au cabinet de Paris 15, rue Letellier. Hilary est très professionnelle, à l'écoute et efficace. Mes douleurs cervicales ont disparu dès la 2e séance. Je recommande vivement."
                    </p>
                    <p className="mt-4 font-semibold text-primary text-sm">— Claire M. (Ostéopathie, Paris 15)</p>
                  </article>
                  <article className="p-6 rounded-xl bg-offwhite/50 border border-light/80 shadow-sm">
                    <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                    <p className="text-graywarm italic text-sm md:text-base leading-relaxed">
                      "J'ai consulté pour ma fille nourrisson (reflux et plagiocéphalie). Hilary est formidable avec les bébés, très douce et rassurante. Le cabinet du 15e est calme et bien situé près du métro."
                    </p>
                    <p className="mt-4 font-semibold text-primary text-sm">— Amandine R. (Ostéo nourrisson, Paris 15)</p>
                  </article>
                </div>
                <div className="mt-8">
                  <Link href="/temoignages" className="inline-block text-secondary font-medium underline underline-offset-4 hover:text-primary transition">
                    Lire tous les avis ({PARIS15_RATING.reviewCount}+)
                  </Link>
                </div>
              </section>
            </SlideUp>

            {/* ===== POURQUOI CONSULTER ===== */}
            <SlideUp>
              <section id="pourquoi" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">Pourquoi consulter à Paris 15 ?</h2>
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12 items-center">
                  <ul className="space-y-4 text-graywarm text-base md:text-lg">
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Cabinet moderne, lumineux et récemment rénové</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Adultes, nourrissons, femmes enceintes &amp; sportifs</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Situé dans un quartier vivant, accessible et sécurisé</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Atmosphère calme favorisant la détente</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Prise en charge personnalisée &amp; centrée sur votre histoire</li>
                  </ul>
                  <div className="relative w-full h-[260px] md:h-[300px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/cabinet-paris15/cabinet-paris15-2.webp"
                      alt="Salle du cabinet d'ostéopathie Paris 15 – lumineux et apaisant"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ===== ADRESSE & ACCÈS ===== */}
            <SlideUp>
              <section id="acces" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">Adresse &amp; accès</h2>
                <p className="text-center text-graywarm mt-4 text-base md:text-lg">
                  <IconMapPin className="w-5 h-5 text-primary inline-block align-text-bottom mr-1" /><strong>28 Rue Letellier, 75015 Paris</strong>
                  <br />
                  À proximité des métros Commerce, Émile-Zola et La Motte-Picquet – Grenelle.
                </p>
                <div className="mt-10 rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.402089969294!2d2.2935342!3d48.8474188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701a1b3b4a3b%3A0x0000000000000000!2s28%20Rue%20Letellier%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    className="w-full h-80 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation cabinet ostéopathie Paris 15 – 28 rue Letellier"
                  />
                </div>
              </section>
            </SlideUp>

            {/* ===== FAQ ===== */}
            <SlideUp>
              <section id="faq" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – Cabinet d'ostéopathie Paris 15
                </h2>
                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">Quels types de patients sont reçus à Paris 15 ?</summary>
                    <p className="mt-2 text-graywarm text-sm">Le cabinet reçoit les adultes, femmes enceintes, nourrissons, enfants et sportifs. Les techniques sont adaptées à chaque âge et morphologie.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">Le cabinet est-il proche des métros ?</summary>
                    <p className="mt-2 text-graywarm text-sm">Oui, il se situe à 3 minutes des stations Commerce, Émile-Zola et La Motte-Picquet – Grenelle.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">Le cabinet est-il adapté aux poussettes ?</summary>
                    <p className="mt-2 text-graywarm text-sm">Oui, les bébés et leurs parents peuvent être accueillis facilement. Le cabinet est totalement adapté.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">Comment prendre rendez-vous ?</summary>
                    <p className="mt-2 text-graywarm text-sm">Les rendez-vous se prennent via Doctolib ou par téléphone, du lundi au samedi.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">Proposez-vous le drainage Renata França à Paris 15 ?</summary>
                    <p className="mt-2 text-graywarm text-sm">Oui. Le drainage Renata França est une technique manuelle spécifique pratiquée par Hilary Farid, différente du drainage lymphatique médical remboursé par la Sécurité sociale. Les séances se déroulent au cabinet de Paris 15 et à Sèvres.</p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ===== CTA FINALE ===== */}
            <FadeIn>
              <section className="bg-offwhite border border-light rounded-2xl shadow-sm p-8 md:p-10 text-center">
                <h2 className="text-3xl font-semibold text-primary">Prendre rendez-vous à Paris 15</h2>
                <p className="mt-3 text-graywarm">Consultations sur rendez-vous du lundi au samedi.</p>
                <button
                  type="button"
                  className="trigger-booking-modal mt-6 inline-block bg-doctolib text-white font-bold px-10 py-4 rounded-full hover:bg-doctolib-dark transition shadow-md"
                >
                  Réserver sur Doctolib
                </button>
              </section>
            </FadeIn>
          </Paris15Nav>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
