import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import SevresNav from "@/components/SevresNav";
import { IconCheck, IconMapPin } from "@/components/icons/UiIcons";
import { SEVRES_RATING } from "@/config/siteConfig";
import { hreflangForEn } from "@/config/i18n";

export const metadata = {
  title: "Osteopathy Clinic in Sèvres — English Spoken",
  description:
    "Hilary Farid's osteopathy clinic in Sèvres (92310), near Paris. Consultations for adults, infants, pregnant women, athletes and seniors. English spoken.",
  alternates: hreflangForEn("/en/sevres"),
};

const SEVRES_SCHEMAS_EN = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres",
    name: "Osteopathy Clinic – Sèvres",
    description:
      "Hilary Farid's osteopathy clinic in Sèvres. Consultations for adults, infants, pregnant women, athletes and seniors. English spoken.",
    image: "https://www.hilaryfarid-osteopathe.fr/cabinet-sevres/hilary-sevres.webp",
    url: "https://www.hilaryfarid-osteopathe.fr/en/sevres",
    telephone: "+33672014539",
    logo: "https://www.hilaryfarid-osteopathe.fr/hilary-logo.svg",
    priceRange: "€60 – €90",
    legalName: "Hilary Farid – Osteopath D.O.",
    taxID: "90179515300013",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday",    opens: "12:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "15:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday",    opens: "09:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday",  opens: "10:00", closes: "13:00" },
    ],
    sameAs: [
      "https://www.doctolib.fr/osteopathe/sevres/hilary-farid",
      "https://share.google/vyqDUNKOo1q0HmayO",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "104 Grande Rue",
      addressLocality: "Sèvres",
      postalCode: "92310",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 48.822013, longitude: 2.2179 },
    aggregateRating: { "@type": "AggregateRating", ratingValue: SEVRES_RATING.ratingValue, reviewCount: SEVRES_RATING.reviewCount },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What conditions are treated at the Sèvres osteopathy clinic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The clinic welcomes adults, infants, pregnant women, athletes and seniors for musculoskeletal pain, functional issues, pregnancy follow-up or post-partum care.",
        },
      },
      {
        "@type": "Question",
        name: "Is the clinic accessible by public transport from Sèvres?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, located at 104 Grande Rue, the clinic is close to Sèvres train station, the T2 tramway and several bus lines.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment at the Sèvres clinic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appointments are booked via Doctolib or by phone. Consultations are open Monday to Saturday. English spoken.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer Renata França drainage in Sèvres?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Hilary Farid offers Renata França drainage sessions at the Sèvres clinic and in Paris 15. It is a specific manual technique, distinct from medical lymphatic drainage reimbursed by French Social Security.",
        },
      },
    ],
  },
];

export default function SevresEnPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SEVRES_SCHEMAS_EN) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <Image
          src="/cabinet-sevres/hilary-sevres.webp"
          alt="Osteopathy clinic in Sèvres – Hilary Farid, 104 Grande Rue"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold text-offwhite drop-shadow-lg">
              Osteopathy Clinic – Sèvres
            </h1>
            <p className="mt-4 text-offwhite text-lg md:text-xl max-w-2xl mx-auto">
              A modern, calm and bright space designed for your wellbeing. English spoken.
            </p>
            <div className="mt-6 mb-8 flex flex-col items-center justify-center gap-1">
              <div className="flex text-amber-400 text-xl tracking-widest drop-shadow-md">★★★★★</div>
              <span className="text-offwhite/90 text-sm font-medium tracking-wide">
                {SEVRES_RATING.ratingValue}/5 on Google ({SEVRES_RATING.reviewCount} reviews)
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

      {/* ================= WRAPPER : SUMMARY + CONTENT ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">
          <SevresNav>
            {/* ======= THE CLINIC + GALLERY ======= */}
            <SlideUp>
              <section id="cabinet" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">A soothing setting for quality care</h2>
                <p className="text-graywarm text-base md:text-lg leading-relaxed mt-6 mb-10 text-center max-w-3xl mx-auto">
                  The Sèvres osteopathy clinic was designed to offer a
                  <strong> bright, warm space conducive to relaxation.</strong> Every detail has been thought through to welcome you in the best conditions.
                </p>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { file: "cabinet-sevres-1.webp", label: "Consultation room at the Sèvres osteopathy clinic – Hilary Farid" },
                    { file: "cabinet-sevres-2.webp", label: "Treatment table at the Sèvres clinic – Hilary Farid" },
                    { file: "cabinet-sevres-3.webp", label: "Waiting room at the Sèvres osteopathy clinic – 104 Grande Rue" },
                  ].map((img, i) => (
                    <div key={i} className="relative w-full h-[200px] md:h-[240px] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <Image
                        src={`/cabinet-sevres/${img.file}`}
                        alt={img.label}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </SlideUp>

            {/* ======= YOUR OSTEOPATH ======= */}
            <SlideUp>
              <section id="osteopathe" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-semibold text-primary">Your Osteopath – Hilary Farid</h2>
                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-6">
                      A qualified Osteopath D.O., I welcome you at the Sèvres clinic with a comprehensive, gentle and personalised approach — in English or French.
                      My goal is to understand the root cause of your pain to provide lasting relief, while respecting your history and your body.
                    </p>
                    <p className="text-graywarm text-base md:text-lg leading-relaxed mt-4">
                      Trained in structural, visceral, cranial and fascial techniques, I also support pregnant women, infants and athletes in their physical recovery.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-sm h-[450px] rounded-xl shadow-xl overflow-hidden">
                      <Image
                        src="/hilary.webp"
                        alt="Hilary Farid, Osteopath D.O. at the Sèvres clinic"
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 90vw, 400px"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ======= PATIENT REVIEWS ======= */}
            <SlideUp>
              <section id="avis" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8 text-center">
                <h2 className="text-3xl font-semibold text-primary">What patients say</h2>
                <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
                  <article className="p-6 rounded-xl bg-offwhite/50 border border-light/80 shadow-sm">
                    <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                    <p className="text-graywarm italic text-sm md:text-base leading-relaxed">
                      "I've been seeing Hilary at the Sèvres clinic for several months for chronic lower back pain. The results are excellent, the approach is gentle and truly personalised."
                    </p>
                    <p className="mt-4 font-semibold text-primary text-sm">— Thomas L. (Osteopathy, Sèvres)</p>
                  </article>
                  <article className="p-6 rounded-xl bg-offwhite/50 border border-light/80 shadow-sm">
                    <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                    <p className="text-graywarm italic text-sm md:text-base leading-relaxed">
                      "I discovered Renata França drainage at the Sèvres clinic. Visible results from the first session! Hilary explains very clearly how it differs from classic drainage. I come back regularly."
                    </p>
                    <p className="mt-4 font-semibold text-primary text-sm">— Nadia B. (Renata França Drainage, Sèvres)</p>
                  </article>
                </div>
                <div className="mt-8">
                  <Link href="/en/temoignages" className="inline-block text-secondary font-medium underline underline-offset-4 hover:text-primary transition">
                    Read all reviews ({SEVRES_RATING.reviewCount}+)
                  </Link>
                </div>
              </section>
            </SlideUp>

            {/* ======= WHY CONSULT HERE ======= */}
            <SlideUp>
              <section id="pourquoi" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">Why choose the Sèvres clinic?</h2>
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12 items-center">
                  <ul className="space-y-4 text-graywarm text-base md:text-lg">
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Bright, modern and calming clinic</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Care adapted to adults, infants &amp; pregnant women</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Located right in the heart of Sèvres' Grande Rue</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Professional equipment and a premium treatment room</li>
                    <li className="flex items-start gap-2"><IconCheck className="w-5 h-5 text-secondary shrink-0 mt-1" />Warm welcome, attentive listening, English spoken</li>
                  </ul>
                  <div className="relative w-full h-[260px] md:h-[300px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/cabinet-sevres/cabinet-sevres-2.webp"
                      alt="Treatment room at the Sèvres osteopathy clinic – Grande Rue"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 90vw, 400px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ======= ADDRESS & ACCESS ======= */}
            <SlideUp>
              <section id="acces" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">Address &amp; Access</h2>
                <p className="text-center text-graywarm mt-4 text-base md:text-lg">
                  <IconMapPin className="w-5 h-5 text-primary inline-block align-text-bottom mr-1" /><strong>104 Grande Rue, 92310 Sèvres, France</strong>
                  <br />
                  A short walk from the train station, the T2 tramway and several bus lines.
                </p>
                <div className="mt-10 rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.352230992681!2d2.2178991!3d48.8210789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67aa75a5a7d2b%3A0xa4bbd6f480c4e45f!2s104%20Grande%20Rue%2C%2092310%20S%C3%A8vres!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    className="w-full h-80 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sèvres osteopathy clinic location – 104 Grande Rue"
                  />
                </div>
              </section>
            </SlideUp>

            {/* ======= FAQ ======= */}
            <SlideUp>
              <section id="faq" className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8">
                <h2 className="text-3xl font-semibold text-primary text-center">FAQ – Sèvres Osteopathy Clinic</h2>
                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">What kind of patients does the Sèvres clinic see?</summary>
                    <p className="mt-2 text-graywarm text-sm">The clinic welcomes adults, infants, pregnant women, athletes and seniors for musculoskeletal pain, functional issues or preventive follow-up.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">How do I get to the clinic by public transport?</summary>
                    <p className="mt-2 text-graywarm text-sm">The clinic is on Sèvres' Grande Rue, close to the train station, the T2 tramway and several bus lines. The exact address is: 104 Grande Rue, 92310 Sèvres.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">Can I bring a stroller or my infant?</summary>
                    <p className="mt-2 text-graywarm text-sm">Yes, the clinic is perfectly set up to welcome infants and parents with strollers.</p>
                  </details>
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">Do you offer Renata França drainage in Sèvres?</summary>
                    <p className="mt-2 text-graywarm text-sm">Yes. Renata França drainage is a specific manual technique, different from medical lymphatic drainage reimbursed by French Social Security. Sessions take place at the Sèvres clinic and in Paris 15.</p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ======= FINAL CTA ======= */}
            <FadeIn>
              <section className="bg-offwhite border border-light rounded-2xl shadow-sm p-8 md:p-10 text-center">
                <h2 className="text-3xl font-semibold text-primary">Book an Appointment in Sèvres</h2>
                <p className="mt-3 text-graywarm">Consultations available Monday to Saturday.</p>
                <button
                  type="button"
                  className="trigger-booking-modal mt-6 inline-block bg-doctolib text-white font-bold px-10 py-4 rounded-full hover:bg-doctolib-dark transition shadow-md"
                >
                  Book via Doctolib
                </button>
              </section>
            </FadeIn>
          </SevresNav>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
