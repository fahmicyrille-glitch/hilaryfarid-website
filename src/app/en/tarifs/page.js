import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import Faq from "@/components/Faq";
import TarifsNav from "@/components/TarifsNav";
import { IconInfo, IconMapPin, IconGift } from "@/components/icons/UiIcons";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";
import { hreflangForEn } from "@/config/i18n";

const DRAINAGE_REGULAR_PRICES = {
  "Paris 15": 160,
  "Sèvres": 180,
};

export const metadata = {
  title: "Pricing — Osteopathy & Renata França Drainage",
  description:
    "Pricing for osteopathy consultations and Renata França lymphatic drainage in Sèvres and Paris 15. Clear, transparent fees. English spoken.",
  alternates: hreflangForEn("/en/tarifs"),
};

export default function TarifsEnPage() {
  const tarifs = [
    { label: "Adult — Osteopathy Consultation", price: "€70" },
    { label: "Infant & Child (up to 12) — Osteopathy Consultation", price: "€50" },
    { label: "Public Holidays & Sundays — Osteopathy Consultation", price: "€90" },
    { label: "Post-Birth Package: Mother + Baby", price: "€100" },
  ];

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/tarifs#page",
              url: "https://www.hilaryfarid-osteopathe.fr/en/tarifs",
              inLanguage: "en",
              name: "Pricing — Osteopathy & Drainage – Hilary Farid",
              description:
                "Pricing for osteopathy consultations and Renata França lymphatic drainage in the Sèvres and Paris 15 clinics.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hilaryfarid-osteopathe.fr/en" },
                  { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.hilaryfarid-osteopathe.fr/en/tarifs" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie#service",
              serviceType: "Osteopathy Consultation",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr#hilary-farid" },
              areaServed: ["Sèvres", "Paris 15"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Osteopathy Consultation Pricing",
                itemListElement: [
                  { "@type": "Offer", name: "Adult osteopathy consultation", price: "70", priceCurrency: "EUR" },
                  { "@type": "Offer", name: "Infant / child consultation", price: "50", priceCurrency: "EUR" },
                  { "@type": "Offer", name: "Public holiday / Sunday osteopathy consultation", price: "90", priceCurrency: "EUR" },
                  { "@type": "Offer", name: "Post-birth package: Mother + Baby", price: "100", priceCurrency: "EUR" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/drainage#service",
              serviceType: "Renata França Lymphatic Drainage",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr#hilary-farid" },
              areaServed: ["Sèvres", "Paris 15"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Renata França Lymphatic Drainage Pricing",
                itemListElement: [
                  { "@type": "Offer", name: "Full-body Renata França drainage session – Paris 15", price: "160", priceCurrency: "EUR" },
                  { "@type": "Offer", name: "Full-body Renata França drainage session – Sèvres", price: "180", priceCurrency: "EUR" },
                  { "@type": "Offer", name: "5-session Renata França drainage course", price: "800", priceCurrency: "EUR" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/en/tarifs#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is pricing the same in Sèvres and Paris 15?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes for osteopathy. The Renata França drainage price differs between locations: €160 in Paris 15, €180 in Sèvres." },
                },
                {
                  "@type": "Question",
                  name: "Is osteopathy reimbursed by insurance?",
                  acceptedAnswer: { "@type": "Answer", text: "If you have French health insurance (mutuelle), most plans reimburse osteopathy sessions and an invoice is provided after each consultation. If you're visiting from abroad, check whether your own health or travel insurance covers osteopathy — French Social Security reimbursement does not apply to non-residents." },
                },
                {
                  "@type": "Question",
                  name: "Is Renata França lymphatic drainage reimbursed?",
                  acceptedAnswer: { "@type": "Answer", text: "No, it is a wellness treatment and is not reimbursed by any insurance, French or foreign. Only osteopathy consultations may be covered, depending on your own insurance." },
                },
              ],
            },
          ])
        }}
      />

      {/* ================= HERO ================= */}
      <section className="bg-primary text-offwhite py-16 md:py-20 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />
        <div className="relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold">Pricing & Services</h1>
            <p className="mt-4 text-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Clear, transparent fees. English spoken throughout your visit.
            </p>
            <div className="mt-6 mb-8 flex flex-col items-center justify-center gap-1">
              <div className="flex text-amber-400 text-xl tracking-widest drop-shadow-md">★★★★★</div>
              <span className="text-offwhite/90 text-sm font-medium tracking-wide">{GLOBAL_REVIEW_RATING}/5 on Google ({GLOBAL_REVIEW_COUNT} reviews)</span>
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

      {/* ================= WRAPPER CONTENT + SUMMARY ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">
          <TarifsNav>
            {/* ================= OSTEOPATHY PRICING ================= */}
            <SlideUp>
              <section
                id="consultations"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center mb-10">
                  Osteopathy Consultations
                </h2>

                <div className="space-y-6">
                  {tarifs.map((t, i) => (
                    <FadeIn key={i} delay={i * 0.05}>
                      <div className="border-b border-graywarm/30 pb-4 hover:bg-offwhite/30 transition-colors px-2 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <p className="text-graywarm text-base md:text-lg font-medium md:max-w-[70%]">
                            {t.label}
                          </p>
                          <p className="text-primary font-bold text-xl mt-1 md:mt-0">
                            {t.price}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* ===== RENATA FRANÇA DRAINAGE ===== */}
                <h2 className="text-3xl font-semibold text-primary text-center mt-16 mb-10">
                  Renata França Lymphatic Drainage
                </h2>

                <div className="border border-primary/20 rounded-2xl p-6 bg-offwhite/50 shadow-sm">
                  <div className="flex flex-col gap-4">
                    <p className="text-primary font-semibold text-lg md:text-xl">
                      Full-body Renata França drainage session (90 min)
                    </p>
                  </div>

                  <div className="mt-6 space-y-3 bg-white p-4 rounded-xl border border-light">
                    {["Paris 15", "Sèvres"].map((city) => (
                      <div
                        key={city}
                        className="flex items-center justify-between pb-2 border-b border-light/50 last:border-0 last:pb-0"
                      >
                        <span className="text-base font-medium text-graywarm flex items-center gap-2">
                          <IconMapPin className="w-4 h-4 text-primary" /> {city} Clinic
                        </span>
                        <span className="text-primary font-bold text-xl">
                          €{DRAINAGE_REGULAR_PRICES[city]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ===== 5-SESSION COURSE ===== */}
                  <div className="mt-8 pt-8 border-t border-graywarm/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between px-2">
                      <div>
                        <p className="text-primary font-bold text-lg md:text-xl">
                          5-Session Course (full body)
                        </p>
                        <p className="text-graywarm text-sm mt-1">
                          Recommended for lasting results over consecutive sessions.
                        </p>
                      </div>
                      <p className="text-primary font-bold text-2xl md:text-3xl mt-2 md:mt-0">
                        €800
                      </p>
                    </div>
                    <div className="mt-4 bg-primary/5 rounded-xl p-3 text-center">
                      <p className="text-xs text-graywarm italic">
                        * Course valid for 12 months. Instalment payment available at the clinic.
                      </p>
                    </div>
                  </div>

                  {/* ===== GIFT CARD ===== */}
                  <div className="mt-8 pt-8 border-t border-graywarm/20">
                    <Link
                      href="/en/carte-cadeau"
                      className="group flex items-center justify-between gap-4 rounded-xl bg-cream border border-cream-border p-4 hover:shadow-md transition-all"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-white text-secondary flex items-center justify-center shadow-sm shrink-0">
                          <IconGift className="w-5 h-5" />
                        </span>
                        <span>
                          <span className="block font-semibold text-ink">Gift a Session</span>
                          <span className="block text-sm text-graywarm">Renata França drainage gift card</span>
                        </span>
                      </span>
                      <span className="text-secondary font-semibold group-hover:translate-x-1 transition-transform shrink-0">→</span>
                    </Link>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ================= IMPORTANT NOTE ================= */}
            <SlideUp>
              <section
                id="note"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                    <IconInfo className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Important Information</h3>
                    <p className="text-graywarm text-sm leading-relaxed">
                      An invoice is always provided at the end of your consultation for your insurance. Payment is made at the clinic at the end of each session (card or cash).
                    </p>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ================= FAQ ================= */}
            <SlideUp>
              <section
                id="faq"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – Pricing & Insurance
                </h2>
                <div className="mt-10">
                  <Faq
                    tone="offwhite"
                    items={[
                      {
                        q: "Is pricing the same at both clinics?",
                        a: "Yes for osteopathy! Osteopathy consultation fees are exactly the same in Sèvres and Paris 15. However, Renata França drainage pricing varies by location: €160 in Paris 15 and €180 in Sèvres.",
                      },
                      {
                        q: "Are osteopathy consultations reimbursed?",
                        a: "If you hold French health insurance (mutuelle), most plans cover all or part of osteopathy sessions (annual allowance or per-session). A detailed invoice is sent by email after each consultation. If you're a tourist or expat without French insurance, please check with your own health or travel insurance provider — French Social Security reimbursement only applies to French residents.",
                      },
                      {
                        q: "Is Renata França drainage reimbursed by insurance?",
                        a: "No, Renata França drainage is a wellness treatment, different from medical lymphatic drainage prescribed by a doctor and reimbursed by French Social Security. It is not covered by any health insurance, French or foreign — unlike osteopathy consultations.",
                      },
                    ]}
                  />
                </div>
              </section>
            </SlideUp>

            {/* ================= FINAL CTA ================= */}
            <FadeIn>
              <section
                id="cta"
                className="bg-offwhite border border-light rounded-2xl shadow-sm p-10 text-center"
              >
                <h2 className="text-3xl font-semibold text-primary">Book an Appointment</h2>
                <p className="mt-3 text-graywarm text-lg">
                  Book your consultation directly on Doctolib in Sèvres or Paris 15.
                </p>
                <button
                  type="button"
                  className="trigger-booking-modal mt-8 inline-flex items-center justify-center gap-2 bg-doctolib text-white font-bold px-10 py-4 rounded-full hover:bg-doctolib-dark transition shadow-md text-center"
                >
                  Book via Doctolib
                </button>
              </section>
            </FadeIn>
          </TarifsNav>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
