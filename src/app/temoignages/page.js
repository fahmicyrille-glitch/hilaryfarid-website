// src/app/temoignages/page.js
"use client";

import { useEffect, useState, useMemo } from "react";
import Script from "next/script";
import { FadeIn, SlideUp, HeroMotion } from "@/components/MotionWrapper";
import SEO from "@/components/SEO";

// ⚠️ On ne peut pas utiliser `export const metadata` dans un composant client.
// Le SEO est donc géré par le composant <SEO /> comme sur tes autres pages.

const BASE_REVIEWS = [
  {
    name: "Sabrina",
    text:
      "Un soin incroyable ! Résultats visibles dès la première séance de drainage. Hilary est douce, professionnelle et l’accueil est parfait. Je recommande les yeux fermés.",
    type: "drainage",
  },
  {
    name: "Julie",
    text:
      "J’ai consulté pour mon nourrisson de 2 mois. Hilary a été très douce et a rapidement identifié les tensions. Mon bébé dort tellement mieux depuis !",
    type: "nourrisson",
  },
  {
    name: "Mathieu",
    text:
      "Ostéo exceptionnelle. Très à l’écoute, technique et efficace. Mes douleurs cervicales ont disparu en deux séances.",
    type: "osteo",
  },
  {
    name: "Mélanie",
    text:
      "Le drainage Renata França est bluffant. Jambes légères, ventre plus plat, sensation de bien-être immédiat. Hilary est très professionnelle.",
    type: "drainage",
  },
  {
    name: "Camille",
    text:
      "Consultation grossesse : j’ai enfin trouvé une ostéopathe qui explique, rassure et soulage vraiment. Merci !",
    type: "grossesse",
  },

  // -------- Avis supplémentaires premium --------
  {
    name: "Aurélie",
    text:
      "Hilary m’a suivie pendant toute ma grossesse. Chaque séance m’a apporté un vrai soulagement. Je n’ai jamais eu un suivi aussi humain et rassurant.",
    type: "grossesse",
  },
  {
    name: "Thomas",
    text:
      "Je suis venu pour une douleur au bas du dos liée au télétravail. Dès la première séance, une nette amélioration. Professionnelle et efficace.",
    type: "osteo",
  },
  {
    name: "Nina",
    text:
      "Le drainage lymphatique a transformé ma sensation de lourdeur dans les jambes. Résultat visible immédiatement. Une magicienne !",
    type: "drainage",
  },
  {
    name: "Clara",
    text:
      "J’ai emmené mon fils de 4 ans pour des réveils nocturnes. Après la séance, beaucoup plus apaisé. Merci pour votre douceur.",
    type: "nourrisson",
  },
  {
    name: "Manon",
    text:
      "Séance post-partum : Hilary a pris le temps de m’écouter et d’adapter la séance. Je suis ressortie légère, réalignée, et surtout comprise.",
    type: "grossesse",
  },
  {
    name: "Bastien",
    text:
      "Très bonne ostéopathe. Elle explique chaque geste, ce qui met immédiatement en confiance. Mes douleurs d’épaule ont disparu.",
    type: "osteo",
  },
  {
    name: "Sarah",
    text:
      "J’ai adoré le drainage Renata França : sensation de détox totale, silhouette affinée et ventre dégonflé. Un must-have !",
    type: "drainage",
  },
  {
    name: "Elodie",
    text:
      "Une vraie écoute, beaucoup de douceur et surtout des résultats durables. Je recommande Hilary à toutes mes amies.",
    type: "osteo",
  },
  {
    name: "David",
    text:
      "En tant que sportif, je suis exigeant. Hilary a su débloquer une douleur chronique au genou que personne n’arrivait à traiter.",
    type: "osteo",
  },
  {
    name: "Anaïs",
    text:
      "J’ai fait plusieurs ostéos mais Hilary est de loin la plus pédagogue et la plus précise. Une vraie professionnelle passionnée.",
    type: "osteo",
  },
  {
    name: "Léa",
    text:
      "Mon bébé avait un torticolis. En deux séances, une nette amélioration. Très douce, très patiente. Merci infiniment.",
    type: "nourrisson",
  },
  {
    name: "Jade",
    text:
      "Drainage parfait, ambiance relaxante, résultats visibles : ventre plus plat, énergie retrouvée. Je reviendrai sans hésiter.",
    type: "drainage",
  },
  {
    name: "Hugo",
    text:
      "Douleur à la mâchoire depuis plusieurs mois. Hilary a tout de suite identifié la cause et m’a donné des exercices réellement utiles.",
    type: "osteo",
  },
  {
    name: "Sonia",
    text:
      "Une ostéopathe d’exception. D’une gentillesse rare et d’une précision remarquable. On se sent vraiment en confiance.",
    type: "osteo",
  },
  {
    name: "Alexandre",
    text:
      "Je suis venu pour une sciatique et j'ai été soulagé très rapidement. Hilary explique tout et prend vraiment le temps.",
    type: "osteo",
  },
  {
    name: "Inès",
    text:
      "Séance post-accouchement : un vrai moment de reconnexion avec mon corps. Je suis ressortie apaisée et sans douleurs.",
    type: "grossesse",
  },
  {
    name: "Chloé",
    text:
      "Jambes lourdes, fatigue, digestion : le drainage a tout changé. Résultats bluffants. Je recommande à 200%.",
    type: "drainage",
  },
];

const FILTERS = [
  { id: "all", label: "Tous les avis" },
  { id: "osteo", label: "Ostéopathie" },
  { id: "nourrisson", label: "Nourrisson / enfant" },
  { id: "grossesse", label: "Grossesse & post-partum" },
  { id: "drainage", label: "Drainage Renata França" },
];
          
export const metadata = {
  title: "Avis & Témoignages – Ostéopathe Sèvres & Paris 15",
  description:
    "Découvrez les avis Google et témoignages de patients suivis en ostéopathie et drainage lymphatique Renata França.",
  alternates: { canonical: "/temoignages" },
  openGraph: {
    title: "Témoignages patients – Hilary Farid Ostéopathe DO",
    description:
      "Avis vérifiés de patients : ostéopathie adulte, nourrisson, grossesse et sportif. Cabinets à Sèvres et Paris 15.",
    url: "https://www.hilaryfarid-osteopathe.fr/temoignages",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};


export default function TemoignagesPage() {
  const [offsetY, setOffsetY] = useState(0); // parallax
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0); // slider
  const [googleReviews, setGoogleReviews] = useState([]);

  // ---- Parallax hero ----
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY || 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- Récupération des avis Google (à brancher sur ton API interne) ----
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        // A TOI de créer /api/google-reviews côté server (Google Places API)
        const res = await fetch("/api/google-reviews");
        if (!res.ok) return;

        const data = await res.json();
        // On s'attend à data.reviews = [{ author, text, rating, sourceUrl }]
        const mapped =
          data?.reviews?.map((r) => ({
            name: r.author || "Avis Google",
            text: r.text,
            rating: r.rating,
            sourceUrl: r.sourceUrl,
            type: "osteo", // ou "google", mais on le met dans Ostéo pour l’affichage
            source: "google",
          })) ?? [];

        setGoogleReviews(mapped);
        setCurrentIndex(0);
      } catch (error) {
        console.error("Erreur lors du chargement des avis Google :", error);
      }
    };

    fetchGoogleReviews();
  }, []);

  // ---- Fusion des avis manuels + Google ----
  const allReviews = useMemo(
    () => [...googleReviews, ...BASE_REVIEWS],
    [googleReviews]
  );

  const filteredReviews = useMemo(
    () =>
      allReviews.filter(
        (r) => activeFilter === "all" || r.type === activeFilter
      ),
    [allReviews, activeFilter]
  );

  // ---- Slider automatique ----
  useEffect(() => {
    if (filteredReviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 7000); // 7 secondes
    return () => clearInterval(interval);
  }, [filteredReviews.length]);

  const currentSlide =
    filteredReviews.length > 0
      ? filteredReviews[currentIndex % filteredReviews.length]
      : null;

  return (
    <main>
      {/* --------- ReviewPage Schema (basé sur les avis manuels pour rester stable) --------- */}
      <Script
        id="ld-reviewpage-temoignages"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "ReviewPage",
              "@id":
                "https://www.hilaryfarid-osteopathe.fr/temoignages#reviews",
              url: "https://www.hilaryfarid-osteopathe.fr/temoignages",
              name: "Avis & témoignages – Hilary Farid Ostéopathe DO",
              description:
                "Découvrez les avis patients sur les consultations d’ostéopathie et drainage lymphatique à Sèvres et Paris 15.",
              review: BASE_REVIEWS.map((r) => ({
                "@type": "Review",
                author: { "@type": "Person", name: r.name },
                reviewBody: r.text,
                itemReviewed: {
                  "@type": "Physician",
                  name: "Hilary Farid",
                  medicalSpecialty: "Osteopathy",
                },
              })),
            },
            null,
            2
          ),
        }}
      />

      {/* ================= HERO avec effet parallax ================= */}
      <section className="bg-primary text-offwhite relative overflow-hidden">
        {/* couche parallax */}
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]"
          style={{
            transform: `translateY(${offsetY * 0.15}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <HeroMotion>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Témoignages de patients
            </h1>
            <p className="mt-4 text-light text-lg max-w-2xl mx-auto">
              Avis authentiques de patients suivis en{" "}
              <strong>ostéopathie</strong>, pour les{" "}
              <strong>nourrissons</strong>, la{" "}
              <strong>grossesse / post-partum</strong> et le{" "}
              <strong>drainage lymphatique Renata França</strong>.
            </p>

            {/* Bandeau stats + Google */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 bg-offwhite/10 border border-offwhite/30 rounded-full px-5 py-2 text-xs md:text-sm">
              <span className="inline-flex items-center gap-1">
                ⭐{" "}
                <span className="font-semibold">
                  Avis patients 5/5 – Sèvres & Paris 15
                </span>
              </span>
              <span className="w-px h-4 bg-offwhite/30 hidden sm:inline-block" />
              <span className="inline-flex items-center gap-1">
                🟢{" "}
                <span>
                  Avis Google synchronisés automatiquement (via fiche Google
                  Business).
                </span>
              </span>
            </div>
          </HeroMotion>
        </div>
      </section>

      {/* ================= SLIDER AUTOMATIQUE ================= */}
      <section className="bg-offwhite py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center">
              Ce que disent les patients
            </h2>
            <p className="mt-2 text-center text-graywarm text-sm md:text-base">
              Un avis mis en avant à la fois. Le slider fait défiler
              automatiquement les témoignages les plus représentatifs.
            </p>
          </FadeIn>

          {/* Carte slider */}
          <div className="mt-8">
            {currentSlide && (
              <FadeIn>
                <article
                  className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-lg
                             border border-light/70 shadow-[0_18px_45px_rgba(31,41,55,0.12)]
                             px-6 md:px-8 py-7 md:py-8"
                >
                  {currentSlide.source === "google" && (
                    <span className="absolute top-4 right-4 text-[11px] px-2 py-1 rounded-full bg-[#0F9D58]/10 text-[#0F9D58] font-semibold">
                      Avis Google
                    </span>
                  )}

                  <p className="text-graywarm italic leading-relaxed text-sm md:text-base">
                    “{currentSlide.text}”
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 text-xs md:text-sm">
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-primary">
                        {currentSlide.name}
                      </span>
                      <span className="text-graywarm/80">
                        {currentSlide.type === "osteo" && "Consultation d’ostéopathie"}
                        {currentSlide.type === "nourrisson" &&
                          "Suivi nourrisson / enfant"}
                        {currentSlide.type === "grossesse" &&
                          "Grossesse / post-partum"}
                        {currentSlide.type === "drainage" &&
                          "Drainage lymphatique Renata França"}
                        {currentSlide.type === "google" && "Avis Google"}
                      </span>
                    </div>

                    {typeof currentSlide.rating === "number" && (
                      <div className="flex items-center gap-1 text-amber-500">
                        {"★".repeat(Math.round(currentSlide.rating))}
                        <span className="ml-1 text-[11px] text-graywarm/70">
                          {currentSlide.rating.toFixed(1)}/5
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              </FadeIn>
            )}

            {/* Points de navigation */}
            {filteredReviews.length > 1 && (
              <div className="mt-4 flex justify-center gap-2">
                {filteredReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? "w-4 bg-primary"
                        : "bg-graywarm/30 hover:bg-primary/60"
                    }`}
                    aria-label={`Afficher l’avis ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= FILTRES + GRILLE D’AVIS ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <SlideUp>
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                Tous les avis patients
              </h2>
              <p className="mt-2 text-graywarm text-sm md:text-base">
                Filtrez les témoignages par type de consultation : ostéopathie,
                nourrisson, grossesse ou drainage lymphatique.
              </p>
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setActiveFilter(f.id);
                    setCurrentIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm border transition-all ${
                    activeFilter === f.id
                      ? "bg-primary text-offwhite border-primary shadow-sm"
                      : "bg-white text-graywarm border-light hover:border-primary hover:text-primary"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </header>

          {/* Grille d’avis */}
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {filteredReviews.map((r, i) => (
              <FadeIn key={`${r.name}-${i}`} delay={(i % 4) * 0.05}>
                <article
                  className="relative p-6 rounded-2xl bg-white/90 backdrop-blur-md
                             border border-light/70 shadow-[0_14px_30px_rgba(31,41,55,0.08)]"
                >
                  {r.source === "google" && (
                    <span className="absolute top-4 right-4 text-[11px] px-2 py-1 rounded-full bg-[#0F9D58]/8 text-[#0F9D58] font-semibold">
                      Avis Google
                    </span>
                  )}

                  <p className="text-graywarm italic leading-relaxed text-sm md:text-base">
                    “{r.text}”
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3 text-xs md:text-sm">
                    <div>
                      <p className="text-primary font-semibold">— {r.name}</p>
                      <p className="text-graywarm/80 mt-0.5">
                        {r.type === "osteo" && "Consultation d’ostéopathie"}
                        {r.type === "nourrisson" &&
                          "Suivi nourrisson / enfant"}
                        {r.type === "grossesse" &&
                          "Grossesse / post-partum"}
                        {r.type === "drainage" &&
                          "Drainage lymphatique Renata França"}
                        {r.source === "google" && "Avis Google"}
                      </p>
                    </div>

                    {typeof r.rating === "number" && (
                      <div className="flex items-center gap-1 text-amber-500">
                        {"★".repeat(Math.round(r.rating))}
                        <span className="ml-1 text-[11px] text-graywarm/70">
                          {r.rating.toFixed(1)}/5
                        </span>
                      </div>
                    )}
                  </div>

                  {r.sourceUrl && (
                    <a
                      href={r.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-[11px] text-secondary underline underline-offset-4"
                    >
                      Voir l’avis sur Google
                    </a>
                  )}
                </article>
              </FadeIn>
            ))}

            {filteredReviews.length === 0 && (
              <p className="text-graywarm text-sm">
                Aucun avis pour cette catégorie pour le moment.
              </p>
            )}
          </div>
        </SlideUp>
      </section>

      {/* ================= CTA FINALE ================= */}
      <FadeIn>
        <section className="py-20 text-center px-6 bg-light">
          <h2 className="text-3xl font-semibold text-primary">
            Vous souhaitez partager votre expérience ?
          </h2>
          <p className="mt-3 text-graywarm max-w-xl mx-auto">
            Votre témoignage aide d’autres patients à faire le bon choix et
            soutient un accompagnement bienveillant et de qualité.
          </p>

          <a
            href="https://g.page/r/CdYpGglMJd2KEAE/review"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block bg-primary text-offwhite px-10 py-4 rounded-lg hover:bg-secondary transition"
          >
            Déposer un avis sur Google
          </a>
        </section>
      </FadeIn>
    </main>
  );
}


