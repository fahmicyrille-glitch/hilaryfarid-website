// src/app/carte-cadeau/page.js — Server Component
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
    "@id": "https://www.hilaryfarid-osteopathe.fr/carte-cadeau#page",
    url: "https://www.hilaryfarid-osteopathe.fr/carte-cadeau",
    name: "Carte cadeau – Drainage Renata França",
    description:
      "Offrez une séance de drainage Renata França à Sèvres ou Paris 15.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.hilaryfarid-osteopathe.fr" },
        { "@type": "ListItem", position: 2, name: "Carte cadeau", item: "https://www.hilaryfarid-osteopathe.fr/carte-cadeau" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.hilaryfarid-osteopathe.fr/carte-cadeau#service",
    serviceType: "Carte cadeau drainage Renata França",
    provider: { "@type": "Person", "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid" },
    areaServed: ["Sèvres", "Paris 15"],
    description:
      "Carte cadeau pour une séance ou une cure de drainage Renata França, valable dans les cabinets de Sèvres et Paris 15.",
  },
];

const OCCASIONS = [
  "Anniversaire ou fête",
  "Naissance & post-partum",
  "Remerciement ou attention",
  "Préparation d'un événement (mariage, shooting…)",
  "Récupération sportive",
  "Simplement faire du bien",
];

export default function CarteCadeauPage() {
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
            Offrez un moment de légèreté
          </h1>
          <p className="mt-5 text-lg text-offwhite/90 max-w-2xl mx-auto">
            La carte cadeau Hilary Farid : une séance de <strong>drainage Renata França</strong>,
            le cadeau bien-être par excellence, à offrir à celles et ceux
            qui comptent pour vous. Valable à <strong>Sèvres</strong> et <strong>Paris 15</strong>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
            >
              <IconPhone className="w-5 h-5" /> Commander : {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-offwhite border border-offwhite/50 bg-white/10 hover:bg-white/20 transition-colors"
            >
              <IconMail className="w-5 h-5" /> Via le formulaire de contact
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LES 2 FORMULES ================= */}
      <section className="py-16 px-6 bg-offwhite">
        <FadeInNoShift>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Deux formules au choix
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="bg-cream rounded-3xl p-8 border border-cream-border shadow-md flex flex-col">
                <div className="w-14 h-14 bg-white text-secondary rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <IconDroplets className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-ink">La séance découverte</h3>
                <p className="mt-3 text-graywarm flex-grow">
                  90 minutes de drainage Renata França corps entier, sensation de
                  légèreté immédiate. Très apprécié pour un post-partum,
                  un anniversaire ou avant un grand événement.
                </p>
                <p className="mt-5 text-sm text-graywarm">
                  Dès <strong className="text-ink text-lg">160 €</strong> selon le cabinet —{" "}
                  <Link href="/tarifs" className="underline underline-offset-4 text-secondary hover:text-primary">
                    voir les tarifs
                  </Link>
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-light/70 shadow-md flex flex-col">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <IconSparkle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-primary">La cure de 5 séances</h3>
                <p className="mt-3 text-graywarm flex-grow">
                  Le cadeau d'exception : des résultats durables sur la rétention d'eau,
                  la silhouette et l'énergie. Un vrai programme bien-être
                  étalé sur plusieurs semaines.
                </p>
                <p className="mt-5 text-sm text-graywarm">
                  <strong className="text-primary text-lg">800 €</strong> (corps entier) —{" "}
                  <Link href="/tarifs" className="underline underline-offset-4 text-secondary hover:text-primary">
                    voir les tarifs
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </FadeInNoShift>
      </section>

      {/* ================= COMMENT ÇA MARCHE ================= */}
      <section className="py-16 px-6 bg-light">
        <FadeInNoShift>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary text-center">
              Comment ça marche ?
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1. Contactez Hilary",
                  text: `Par téléphone (${PHONE}) ou via le formulaire de contact : choisissez la formule (séance ou cure).`,
                },
                {
                  step: "2. Recevez la carte",
                  text: "Une jolie carte cadeau nominative, envoyée par e-mail ou remise au cabinet.",
                },
                {
                  step: "3. Le bénéficiaire réserve",
                  text: "La personne choisit son créneau sur Doctolib ou par téléphone, à Sèvres ou Paris 15. Carte valable 12 mois.",
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
                Pour quelles occasions ?
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

      {/* ================= CTA FINAL ================= */}
      <section className="py-16 md:py-20 px-6 bg-offwhite">
        <FadeInNoShift>
          <div className="max-w-4xl mx-auto bg-cream border border-cream-border rounded-3xl shadow-md text-center p-10 md:p-14">
            <span className="mx-auto w-14 h-14 rounded-2xl bg-white text-secondary shadow-sm flex items-center justify-center mb-6">
              <IconGift className="w-7 h-7" />
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">
              Prêt(e) à offrir du bien-être ?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-graywarm">
              Un appel ou un message suffit — Hilary prépare la carte cadeau, vous faites des heureux.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${PHONE_LINK}`}
                className="inline-flex items-center gap-2 bg-primary text-offwhite font-bold px-10 py-4 rounded-full shadow-md hover:bg-secondary transition"
              >
                <IconPhone className="w-5 h-5" /> {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                <IconMail className="w-5 h-5" /> Écrire à Hilary
              </Link>
            </div>
          </div>
        </FadeInNoShift>
      </section>

      <BackToTop />
    </main>
  );
}
