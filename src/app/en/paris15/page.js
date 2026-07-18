import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import Paris15Nav from "@/components/Paris15Nav";
import { IconCheck, IconMapPin } from "@/components/icons/UiIcons";
import { PARIS15_RATING } from "@/config/siteConfig";
import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Osteopathy Clinic in Paris 15 — English Spoken",
  description:
    "Hilary Farid's osteopathy clinic in Paris 15, near La Motte-Picquet – Grenelle. Consultations for adults, infants, pregnant women and athletes. English spoken.",
  alternates: hreflangForEn("/en/paris15"),
};

const PARIS15_SCHEMAS_EN = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-paris15",
    name: "Osteopathy Clinic – Paris 15",
    description:
      "Hilary Farid's osteopathy clinic in Paris 15. Consultations for adults, infants, pregnant women and athletes. English spoken.",
    image: "https://www.hilaryfarid-osteopathe.fr/cabinet-paris15/cabinet-paris15-1.webp",
    url: "https://www.hilaryfarid-osteopathe.fr/en/paris15",
    telephone: "+33672014539",
    logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
    priceRange: "€60 – €90",
    legalName: "Hilary Farid – Osteopath D.O.",
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
        name: "Which patients are seen at the Paris 15 osteopathy clinic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consultations cover adults, infants, children, pregnant women and athletes. Techniques are adapted to each person and each need.",
        },
      },
      {
        "@type": "Question",
        name: "Is the clinic close to metro stations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the clinic is 3 minutes from Commerce, Émile Zola and La Motte-Picquet – Grenelle stations.",
        },
      },
      {
        "@type": "Question",
        name: "Is the clinic stroller-accessible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, infants and parents with strollers are easily accommodated.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appointments are booked online via Doctolib or by phone. The clinic is open Monday to Saturday. English spoken.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer Renata França drainage in Paris 15?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Hilary Farid offers Renata França drainage sessions at the Paris 15 clinic and in Sèvres. It is a specific manual technique, different from medical lymphatic drainage reimbursed by French Social Security.",
        },
      },
    ],
  },
];

export default function Paris15EnPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PARIS15_SCHEMAS_EN) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <Image
          src="/cabinet-paris15/cabinet-paris15-1.webp"
          alt="Osteopathy clinic in Paris 15 – Hilary Farid, 28 rue Letellier"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold text-offwhite drop-shadow-lg">
              Osteopathy Clinic – Paris 15
            </h1>
            <p className="mt-4 text-offwhite text-lg md:text-xl max-w-2xl mx-auto">
              A modern, calm and bright space designed for your wellbeing in the heart of the 15th. English spoken.
            </p>
            <div className="mt-6 mb-8 flex flex-col items-center justify-center gap-1">
              <div className="flex text-amber-400 text-xl tracking-widest drop-shadow-md">★★★★★</div>
              <span className="text-offwhite/90 text-sm font-medium tracking-wide">
                {PARIS15_RATING.ratingValue}/5 on Google ({PARIS15_RATING.reviewCount} reviews)
              </span>
            </div>
            <button
              type="button"
              className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
            >
              Book via Doctolib
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ================= WRAPPER SUMMARY + CONTENT ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">
          <Paris15Nav>
            {/* ===== THE CLINIC + GALLERY ===== */}
            <SlideUp>
              <section id="cabinet" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">
                  A clinic in the heart of the 15th arrondissement
                </h2>
                <p className="text-graywarm text-base md:text-lg leading-relaxed mt-6 mb-10 text-center max-w-3xl mx-auto">
                  The Paris 15 osteopathy clinic welcomes you in a{" "}
                  <strong>calm, bright and soothing space</strong>, designed to promote relaxation and
                  allow for precise osteopathic work in the best conditions.
                </p>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { file: "cabinet-paris15-1.webp", label: "Consultation room at the Paris 15 clinic – Hilary Farid osteopath" },
                    { file: "cabinet-paris15-2.webp", label: "Treatment table at the Paris 15 clinic – Hilary Farid" },
                    { file: "cabinet-paris15-3.webp", label: "Waiting room at the Paris 15 osteopathy clinic, rue Letellier" },
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

            {/* ===== YOUR OSTEOPATH ===== */}
            <SlideUp>
              <section id="osteopathe" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-semibold text-primary">Your Osteopath – Hilary Farid</h2>
                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-6">
                      A qualified Osteopath D.O., I support patients in the 15th arrondissement with a
                      personalised, caring approach focused on the root cause of your pain — in English or French.
                    </p>
                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-4">
                      Consultations cover adults, infants, pregnant women, children
                      and athletes, with techniques adapted to every age and body type.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-sm h-[450px] rounded-xl shadow-xl overflow-hidden">
                      <Image
                        src="/cabinet-paris15/hilary-paris15.webp"
                        alt="Hilary Farid, Osteopath D.O. at the Paris 15 clinic"
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

            {/* ===== PATIENT REVIEWS ===== */}
            <SlideUp>
              <section id="avis" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8 text-center">
                <h2 className="text-3xl font-semibold text-primary">What patients say</h2>
                <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
                  <article className="p-6 rounded-xl bg-offwhite/50 border border-light/80 shadow-sm">
                    <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                    <p className="text-graywarm italic text-sm md:text-base leading-relaxed">
                      "Consultation at the Paris 15 clinic, rue Letellier. Hilary is very professional, attentive and effective. My neck pain disappeared after the 2nd session. I highly recommend."
                    </p>
                    <p className="mt-4 font-semibold text-primary text-sm">— Claire M. (Osteopathy, Paris 15)</p>
                  </article>
                  <article className="p-6 rounded-xl bg-offwhite/50 border border-light/80 shadow-sm">
                    <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                    <p className="text-graywarm italic text-sm md:text-base leading-relaxed">
                      "I brought my infant daughter in for reflux and plagiocephaly. Hilary is wonderful with babies, very gentle and reassuring. The clinic in the 15th is calm and well located near the metro."
                    </p>
                    <p className="mt-4 font-semibold text-primary text-sm">— Amandine R. (Infant Osteopathy, Paris 15)</p>
                  </article>
                </div>
                <div className="mt-8">
                  <Link href="/en/temoignages" className="inline-block text-secondary font-medium underline underline-offset-4 hover:text-primary transition">
                    Read all reviews ({PARIS15_RATING.reviewCount}+)
                  </Link>
                </div>
              </section>
            </SlideUp>

            {/* ===== WHY CONSULT HERE ===== */}
            <SlideUp>
              <section id="pourquoi" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">Why choose the Paris 15 clinic?</h2>
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12 items-center">
                  <ul className="space-y-4 text-graywarm text-base md:text-lg">
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Modern, bright and recently renovated clinic</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Adults, infants, pregnant women &amp; athletes</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Located in a lively, accessible and safe neighbourhood</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Calm atmosphere conducive to relaxation</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Personalised care centred on your history, English spoken</li>
                  </ul>
                  <div className="relative w-full h-[260px] md:h-[300px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/cabinet-paris15/cabinet-paris15-2.webp"
                      alt="Treatment room at the Paris 15 osteopathy clinic – bright and calm"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ===== ADDRESS & ACCESS ===== */}
            <SlideUp>
              <section id="acces" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">Address &amp; Access</h2>
                <p className="text-center text-graywarm mt-4 text-base md:text-lg">
                  <IconMapPin className="w-5 h-5 text-primary inline-block align-text-bottom mr-1" /><strong>28 Rue Letellier, 75015 Paris, France</strong>
                  <br />
                  Near Commerce, Émile-Zola and La Motte-Picquet – Grenelle metro stations.
                </p>
                <div className="mt-10 rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.402089969294!2d2.2935342!3d48.8474188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701a1b3b4a3b%3A0x0000000000000000!2s28%20Rue%20Letellier%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    className="w-full h-80 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Paris 15 osteopathy clinic location – 28 rue Letellier"
                  />
                </div>
              </section>
            </SlideUp>

            {/* ===== FAQ ===== */}
            <SlideUp>
              <section id="faq" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – Paris 15 Osteopathy Clinic
                </h2>
                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">What kind of patients are seen in Paris 15?</summary>
                    <p className="mt-2 text-graywarm text-sm">The clinic sees adults, pregnant women, infants, children and athletes. Techniques are adapted to every age and body type.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">Is the clinic close to metro stations?</summary>
                    <p className="mt-2 text-graywarm text-sm">Yes, it's 3 minutes from Commerce, Émile-Zola and La Motte-Picquet – Grenelle stations.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">Is the clinic stroller-friendly?</summary>
                    <p className="mt-2 text-graywarm text-sm">Yes, babies and their parents are easily accommodated. The clinic is fully set up for this.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">How do I book an appointment?</summary>
                    <p className="mt-2 text-graywarm text-sm">Appointments are booked via Doctolib or by phone, Monday to Saturday.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">Do you offer Renata França drainage in Paris 15?</summary>
                    <p className="mt-2 text-graywarm text-sm">Yes. Renata França drainage is a specific manual technique practised by Hilary Farid, different from medical lymphatic drainage reimbursed by French Social Security. Sessions take place at the Paris 15 clinic and in Sèvres.</p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ===== FINAL CTA ===== */}
            <FadeIn>
              <section className="bg-offwhite border border-light rounded-2xl shadow-sm p-8 md:p-10 text-center">
                <h2 className="text-3xl font-semibold text-primary">Book an Appointment in Paris 15</h2>
                <p className="mt-3 text-graywarm">Consultations by appointment, Monday to Saturday.</p>
                <button
                  type="button"
                  className="trigger-booking-modal mt-6 inline-block bg-doctolib text-white font-bold px-10 py-4 rounded-full hover:bg-doctolib-dark transition shadow-md"
                >
                  Book via Doctolib
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
