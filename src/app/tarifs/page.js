import Link from "next/link";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import Faq from "@/components/Faq";
import TarifsNav from "@/components/TarifsNav";
import { IconInfo, IconMapPin, IconGift } from "@/components/icons/UiIcons";
import { GLOBAL_REVIEW_COUNT, GLOBAL_REVIEW_RATING } from "@/config/siteConfig";

const DRAINAGE_REGULAR_PRICES = {
  "Paris 15": 160,
  "Sèvres": 180,
};

export default function TarifsPage() {
  const tarifs = [
    { label: "Adulte - Consultation d'ostéopathie", price: "70 €" },
    { label: "Nourrisson et enfant (jusqu'à 12 ans) - Consultation d'ostéopathie", price: "50 €" },
    { label: "Jours fériés et Dimanches - Consultation d'ostéopathie", price: "90 €" },
    { label: "Offre post-accouchement Maman + Bébé", price: "100 €" },
  ];

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
              "@id": "https://www.hilaryfarid-osteopathe.fr/tarifs#page",
              url: "https://www.hilaryfarid-osteopathe.fr/tarifs",
              name: "Tarifs Ostéopathie & Drainage – Hilary Farid",
              description:
                "Tarifs des consultations d'ostéopathie et du drainage lymphatique Renata França dans les cabinets de Sèvres et Paris 15.",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.hilaryfarid-osteopathe.fr" },
                  { "@type": "ListItem", position: 2, name: "Tarifs", item: "https://www.hilaryfarid-osteopathe.fr/tarifs" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/osteopathie#service",
              serviceType: "Consultation d'ostéopathie",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr#hilary-farid" },
              areaServed: ["Sèvres", "Paris 15"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Tarifs des consultations d'ostéopathie",
                itemListElement: [
                  { "@type": "Offer", name: "Consultation ostéopathie adulte", price: "70", priceCurrency: "EUR" },
                  { "@type": "Offer", name: "Consultation nourrisson / enfant", price: "50", priceCurrency: "EUR" },
                  { "@type": "Offer", name: "Consultation ostéopathie jours fériés / dimanche", price: "90", priceCurrency: "EUR" },
                  { "@type": "Offer", name: "Offre post-accouchement : Maman + Bébé", price: "100", priceCurrency: "EUR" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.hilaryfarid-osteopathe.fr/drainage#service",
              serviceType: "Drainage lymphatique – Méthode Renata França",
              provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr#hilary-farid" },
              areaServed: ["Sèvres", "Paris 15"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Tarifs drainage lymphatique Renata França",
                itemListElement: [
                  { "@type": "Offer", name: "Séance drainage Renata França corps entier – Paris 15", price: "160", priceCurrency: "EUR" },
                  { "@type": "Offer", name: "Séance drainage Renata França corps entier – Sèvres", price: "180", priceCurrency: "EUR" },
                  { "@type": "Offer", name: "Cure 5 séances drainage Renata França", price: "800", priceCurrency: "EUR" },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://www.hilaryfarid-osteopathe.fr/tarifs#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Les tarifs sont-ils les mêmes à Sèvres et Paris 15 ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui pour l'ostéopathie. Le tarif du drainage Renata França diffère entre les cabinets : 160 € à Paris 15, 180 € à Sèvres." },
                },
                {
                  "@type": "Question",
                  name: "Les séances d'ostéopathie sont-elles remboursées ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui, la majorité des mutuelles remboursent les séances. Une facture est remise après chaque consultation." },
                },
                {
                  "@type": "Question",
                  name: "Le drainage lymphatique Renata França est-il remboursé ?",
                  acceptedAnswer: { "@type": "Answer", text: "Non, il s'agit d'un soin bien-être non remboursé. Seules les séances d'ostéopathie peuvent être prises en charge selon votre mutuelle." },
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
            <h1 className="text-4xl md:text-5xl font-semibold">Tarifs & Prestations</h1>
            <p className="mt-4 text-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Des honoraires clairs et transparents. Les consultations d'ostéopathie sont prises en charge par la majorité des mutuelles.
            </p>
            <div className="mt-6 mb-8 flex flex-col items-center justify-center gap-1">
              <div className="flex text-amber-400 text-xl tracking-widest drop-shadow-md">★★★★★</div>
              <span className="text-offwhite/90 text-sm font-medium tracking-wide">{GLOBAL_REVIEW_RATING}/5 sur Google ({GLOBAL_REVIEW_COUNT} avis)</span>
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

      {/* ================= WRAPPER CONTENT + SOMMAIRE ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">
          <TarifsNav>
            {/* ================= SECTION : TARIFS OSTÉO ================= */}
            <SlideUp>
              <section
                id="consultations"
                className="bg-white rounded-2xl shadow-sm border border-light p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center mb-10">
                  Consultations d'Ostéopathie
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

                {/* ===== DRAINAGE LYMPHATIQUE ===== */}
                <h2 className="text-3xl font-semibold text-primary text-center mt-16 mb-10">
                  Drainage Lymphatique Renata França
                </h2>

                <div className="border border-primary/20 rounded-2xl p-6 bg-offwhite/50 shadow-sm">
                  <div className="flex flex-col gap-4">
                    <p className="text-primary font-semibold text-lg md:text-xl">
                      Séance de drainage Renata França corps entier (90 min)
                    </p>
                  </div>

                  {/* Prix par cabinet */}
                  <div className="mt-6 space-y-3 bg-white p-4 rounded-xl border border-light">
                    {["Paris 15", "Sèvres"].map((city) => (
                      <div
                        key={city}
                        className="flex items-center justify-between pb-2 border-b border-light/50 last:border-0 last:pb-0"
                      >
                        <span className="text-base font-medium text-graywarm flex items-center gap-2">
                          <IconMapPin className="w-4 h-4 text-primary" /> Cabinet de {city}
                        </span>
                        <span className="text-primary font-bold text-xl">
                          {DRAINAGE_REGULAR_PRICES[city]} €
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ===== CURE DE 5 SÉANCES ===== */}
                  <div className="mt-8 pt-8 border-t border-graywarm/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between px-2">
                      <div>
                        <p className="text-primary font-bold text-lg md:text-xl">
                          Cure de 5 séances (corps entier)
                        </p>
                        <p className="text-graywarm text-sm mt-1">
                          Recommandé pour des résultats durables et un suivi métabolique.
                        </p>
                      </div>
                      <p className="text-primary font-bold text-2xl md:text-3xl mt-2 md:mt-0">
                        800 €
                      </p>
                    </div>
                    <div className="mt-4 bg-primary/5 rounded-xl p-3 text-center">
                      <p className="text-xs text-graywarm italic">
                        * Cure valable 12 mois. Paiement en plusieurs fois au cabinet.
                      </p>
                    </div>
                  </div>

                  {/* ===== CARTE CADEAU ===== */}
                  <div className="mt-8 pt-8 border-t border-graywarm/20">
                    <Link
                      href="/carte-cadeau"
                      className="group flex items-center justify-between gap-4 rounded-xl bg-cream border border-cream-border p-4 hover:shadow-md transition-all"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-white text-secondary flex items-center justify-center shadow-sm shrink-0">
                          <IconGift className="w-5 h-5" />
                        </span>
                        <span>
                          <span className="block font-semibold text-ink">Offrez une séance</span>
                          <span className="block text-sm text-graywarm">Carte cadeau drainage Renata França</span>
                        </span>
                      </span>
                      <span className="text-secondary font-semibold group-hover:translate-x-1 transition-transform shrink-0">→</span>
                    </Link>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ================= NOTE IMPORTANTE ================= */}
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
                    <h3 className="text-xl font-semibold text-primary mb-2">Informations importantes</h3>
                    <p className="text-graywarm text-sm leading-relaxed">
                      Une facture vous sera systématiquement délivrée en fin de consultation pour votre mutuelle. Le règlement s'effectue au cabinet à la fin de chaque séance.
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
                  FAQ – Tarifs & Remboursements
                </h2>
                <div className="mt-10">
                  <Faq
                    tone="offwhite"
                    items={[
                      {
                        q: "Les tarifs sont-ils identiques dans les deux cabinets ?",
                        a: "Oui pour l'ostéopathie ! Les tarifs des consultations d'ostéopathie sont strictement identiques à Sèvres et Paris 15. En revanche, le tarif du drainage Renata França varie selon le cabinet : 160 € à Paris 15 et 180 € à Sèvres.",
                      },
                      {
                        q: "Les consultations d'ostéopathie sont-elles remboursées ?",
                        a: "Oui, la grande majorité des mutuelles prennent en charge tout ou partie des séances d'ostéopathie (forfait annuel ou par séance). Une facture détaillée vous sera envoyée par e-mail après chaque consultation pour faciliter vos démarches de remboursement.",
                      },
                      {
                        q: "Le drainage Renata França est-il remboursé par la mutuelle ?",
                        a: "Non, le drainage Renata França est une pratique de bien-être, différente du drainage lymphatique médical prescrit et remboursé par la Sécurité sociale. Il n'est pas pris en charge par les mutuelles santé classiques, contrairement aux séances d'ostéopathie.",
                      },
                    ]}
                  />
                </div>
              </section>
            </SlideUp>

            {/* ================= CTA FINAL ================= */}
            <FadeIn>
              <section
                id="cta"
                className="bg-offwhite border border-light rounded-2xl shadow-sm p-10 text-center"
              >
                <h2 className="text-3xl font-semibold text-primary">Prendre rendez-vous</h2>
                <p className="mt-3 text-graywarm text-lg">
                  Réservez directement votre consultation sur Doctolib à Sèvres ou Paris 15.
                </p>
                <button
                  type="button"
                  className="trigger-booking-modal mt-8 inline-flex items-center justify-center gap-2 bg-doctolib text-white font-bold px-10 py-4 rounded-full hover:bg-doctolib-dark transition shadow-md text-center"
                >
                  Réserver sur Doctolib
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
