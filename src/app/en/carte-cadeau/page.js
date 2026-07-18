// src/app/en/carte-cadeau/page.js — Server Component
import Link from "next/link";
import { FadeInNoShift } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import { PHONE, PHONE_LINK } from "@/config/contact";
import {
  IconGift,
  IconPhone,
  IconMail,
  IconDroplets,
  IconSparkle,
  IconCheck,
} from "@/components/icons/UiIcons";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.hilaryfarid-osteopathe.fr/en/carte-cadeau#page",
    url: "https://www.hilaryfarid-osteopathe.fr/en/carte-cadeau",
    inLanguage: "en",
    name: "Gift Card – Renata França Drainage",
    description:
      "Give the gift of a Renata França drainage session in Sèvres or Paris 15.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hilaryfarid-osteopathe.fr/en" },
        { "@type": "ListItem", position: 2, name: "Gift Card", item: "https://www.hilaryfarid-osteopathe.fr/en/carte-cadeau" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.hilaryfarid-osteopathe.fr/carte-cadeau#service",
    serviceType: "Renata França Drainage Gift Card",
    provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
    areaServed: ["Sèvres", "Paris 15"],
    description:
      "Gift card for a Renata França drainage session or course, valid at the Sèvres and Paris 15 clinics.",
  },
];

const OCCASIONS = [
  "Birthday or celebration",
  "Birth & post-partum",
  "A thank-you or thoughtful gesture",
  "Preparing for an event (wedding, photoshoot…)",
  "Sports recovery",
  "Simply to feel good",
];

export default function CarteCadeauEnPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* ================= HERO ================= */}
      <section className="bg-primary text-offwhite relative overflow-hidden py-16 md:py-20 px-6">
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="mx-auto w-16 h-16 rounded-2xl bg-offwhite/10 border border-offwhite/30 flex items-center justify-center mb-6">
            <IconGift className="w-8 h-8 text-amber-300" />
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-offwhite">
            Give the gift of lightness
          </h1>
          <p className="mt-5 text-lg text-offwhite/90 max-w-2xl mx-auto">
            The Hilary Farid gift card: a <strong>Renata França drainage</strong> session,
            the ultimate wellness gift for the people who matter to you. Valid in{" "}
            <strong>Sèvres</strong> and <strong>Paris 15</strong>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
            >
              <IconPhone className="w-5 h-5" /> Order: {PHONE}
            </a>
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-offwhite border border-offwhite/50 bg-white/10 hover:bg-white/20 transition-colors"
            >
              <IconMail className="w-5 h-5" /> Via the contact form
            </Link>
          </div>
        </div>
      </section>

      {/* ================= THE 2 FORMULAS ================= */}
      <section className="py-16 px-6 bg-offwhite">
        <FadeInNoShift>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Two options to choose from
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="bg-cream rounded-3xl p-8 border border-cream-border shadow-md flex flex-col">
                <div className="w-14 h-14 bg-white text-secondary rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <IconDroplets className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-ink">The Discovery Session</h3>
                <p className="mt-3 text-graywarm flex-grow">
                  90 minutes of full-body Renata França drainage, an immediate
                  feeling of lightness. Very popular for post-partum,
                  a birthday, or ahead of a big event.
                </p>
                <p className="mt-5 text-sm text-graywarm">
                  From <strong className="text-ink text-lg">€160</strong> depending on the clinic —{" "}
                  <Link href="/en/tarifs" className="underline underline-offset-4 text-secondary hover:text-primary">
                    see pricing
                  </Link>
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-light/70 shadow-md flex flex-col">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <IconSparkle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-primary">The 5-Session Course</h3>
                <p className="mt-3 text-graywarm flex-grow">
                  The exceptional gift: lasting results for water retention,
                  silhouette and energy. A true wellness programme
                  spread over several weeks.
                </p>
                <p className="mt-5 text-sm text-graywarm">
                  <strong className="text-primary text-lg">€800</strong> (full body) —{" "}
                  <Link href="/en/tarifs" className="underline underline-offset-4 text-secondary hover:text-primary">
                    see pricing
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </FadeInNoShift>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 px-6 bg-light">
        <FadeInNoShift>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              How does it work?
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1. Contact Hilary",
                  text: `By phone (${PHONE}) or via the contact form: choose your option (single session or course).`,
                },
                {
                  step: "2. Receive the card",
                  text: "A beautiful personalised gift card, sent by email or handed to you at the clinic.",
                },
                {
                  step: "3. The recipient books",
                  text: "They choose their slot on Doctolib or by phone, in Sèvres or Paris 15. The card is valid for 12 months.",
                },
              ].map((c) => (
                <div key={c.step} className="bg-white rounded-2xl border border-light/70 p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-secondary">{c.step}</p>
                  <p className="mt-3 text-base text-graywarm leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>

            {/* Occasions */}
            <div className="mt-12 bg-white rounded-3xl border border-light/70 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-primary text-center">
                For which occasions?
              </h3>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {OCCASIONS.map((o) => (
                  <p key={o} className="flex items-center gap-2 text-sm text-graywarm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <IconCheck className="w-3.5 h-3.5" />
                    </span>
                    {o}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </FadeInNoShift>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 md:py-20 px-6 bg-offwhite">
        <FadeInNoShift>
          <div className="max-w-4xl mx-auto bg-cream border border-cream-border rounded-3xl shadow-md text-center p-10 md:p-14">
            <span className="mx-auto w-14 h-14 rounded-2xl bg-white text-secondary shadow-sm flex items-center justify-center mb-6">
              <IconGift className="w-7 h-7" />
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">
              Ready to give the gift of wellness?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-graywarm">
              Just a call or a message: Hilary will prepare the gift card — and you'll make someone's day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${PHONE_LINK}`}
                className="inline-flex items-center gap-2 bg-primary text-offwhite font-bold px-10 py-4 rounded-full shadow-md hover:bg-secondary transition"
              >
                <IconPhone className="w-5 h-5" /> {PHONE}
              </a>
              <Link
                href="/en/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                <IconMail className="w-5 h-5" /> Write to Hilary
              </Link>
            </div>
          </div>
        </FadeInNoShift>
      </section>

      <BackToTop />
    </main>
  );
}
