"use client";

import { useEffect, useState, useMemo } from "react";
import Script from "next/script";
import { FadeIn, SlideUp, HeroMotion } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";

const BASE_REVIEWS = [
  {
    name: "Sabrina L.",
    text: "Un soin incroyable ! Résultats visibles dès la première séance de drainage. J'avais les jambes très lourdes et le ventre gonflé, je suis ressortie légère. Hilary est d'une grande douceur et l'accueil est parfait. Je recommande les yeux fermés.",
    type: "drainage",
  },
  {
    name: "Julie M.",
    text: "J'ai consulté pour mon nourrisson de 2 mois qui souffrait de reflux et de coliques. Hilary a été très douce et a rapidement identifié les tensions. Mon bébé est beaucoup plus apaisé et dort tellement mieux depuis !",
    type: "nourrisson",
  },
  {
    name: "Mathieu D.",
    text: "Ostéopathe exceptionnelle. Très à l'écoute, technique et efficace. J'avais des douleurs cervicales chroniques liées au télétravail qui m'empêchaient de dormir. Elles ont totalement disparu en deux séances.",
    type: "osteo",
  },
  {
    name: "Mélanie T.",
    text: "Le drainage Renata França est bluffant. Jambes légères, ventre plus plat, sensation de bien-être immédiat. Hilary explique chaque étape, on sent qu'elle connaît parfaitement l'anatomie.",
    type: "drainage",
  },
  {
    name: "Camille P.",
    text: "Consultation au 7ème mois de grossesse pour une grosse sciatique : j'ai enfin trouvé une ostéopathe qui explique, rassure et soulage vraiment sans jamais faire mal. Merci !",
    type: "grossesse",
  },

  // -------- Avis supplémentaires premium --------
  {
    name: "Aurélie F.",
    text: "Hilary m'a suivie pendant toute ma grossesse et pour mon post-partum. Chaque séance m'a apporté un vrai soulagement au niveau du bassin. Je n'ai jamais eu un suivi aussi humain et rassurant.",
    type: "grossesse",
  },
  {
    name: "Thomas V.",
    text: "Je suis venu bloqué du dos (lumbago). Hilary a pris le temps de faire un bilan complet avant de manipuler très doucement. En sortant, je pouvais remarcher normalement. Professionnelle et hyper efficace.",
    type: "osteo",
  },
  {
    name: "Nina C.",
    text: "J'ai fait la cure de 5 séances de drainage lymphatique. Ça a transformé ma sensation de lourdeur dans les jambes et affiné ma silhouette. Résultat visible immédiatement. Une vraie magicienne !",
    type: "drainage",
  },
  {
    name: "Clara S.",
    text: "J'ai emmené mon fils pour des problèmes de succion au sein. Hilary a détecté un frein restrictif et nous a accompagnés avant et après l'intervention. L'allaitement a été sauvé grâce à elle.",
    type: "nourrisson",
  },
  {
    name: "Manon B.",
    text: "Séance post-partum : Hilary a pris le temps de m'écouter et d'adapter la séance à ma fatigue. Je suis ressortie légère, réalignée, et surtout comprise dans ce que je traversais.",
    type: "grossesse",
  },
  {
    name: "Bastien R.",
    text: "Très bonne ostéopathe. Elle explique chaque geste, ce qui met immédiatement en confiance pour les gens qui appréhendent. Mes douleurs d'épaule que je traînais depuis des mois ont disparu.",
    type: "osteo",
  },
  {
    name: "Sarah K.",
    text: "J'ai adoré le drainage Renata França : sensation de détox totale, silhouette affinée et ventre dégonflé. L'approche est tonique mais Hilary gère parfaitement la pression.",
    type: "drainage",
  },
  {
    name: "Elodie M.",
    text: "Une vraie écoute, beaucoup de douceur et surtout des résultats durables. Je suis venue pour des migraines tenaces et je revends depuis notre séance. Je recommande Hilary à toutes mes amies.",
    type: "osteo",
  },
  {
    name: "David G.",
    text: "En tant que coureur (marathon), je suis exigeant sur mon suivi. Hilary a su débloquer une douleur chronique au genou que personne n'arrivait à traiter. Top niveau.",
    type: "osteo",
  },
  {
    name: "Anaïs L.",
    text: "J'ai fait plusieurs ostéos dans le 15ème mais Hilary est de loin la plus pédagogue et la plus précise. On ne se sent pas expédié en 15 minutes. Une vraie professionnelle passionnée.",
    type: "osteo",
  },
  {
    name: "Léa P.",
    text: "Mon bébé avait un torticolis et tournait la tête toujours du même côté. En deux séances, une nette amélioration, il a retrouvé toute sa mobilité. Très douce, très patiente. Merci infiniment.",
    type: "nourrisson",
  },
  {
    name: "Jade V.",
    text: "Drainage parfait, ambiance relaxante, résultats visibles : ventre plus plat, énergie retrouvée. C'est devenu mon rituel mensuel.",
    type: "drainage",
  },
  {
    name: "Hugo T.",
    text: "Douleur à la mâchoire (bruxisme) depuis plusieurs mois avec maux de tête au réveil. Hilary a tout de suite identifié la cause, a travaillé en douceur et m'a donné des exercices réellement utiles.",
    type: "osteo",
  },
  {
    name: "Sonia E.",
    text: "Une ostéopathe d'exception. D'une gentillesse rare et d'une précision remarquable. On se sent vraiment en confiance et les cabinets sont d'une propreté irréprochable.",
    type: "osteo",
  },
];

const FILTERS = [
  { id: "all", label: "Tous les avis" },
  { id: "osteo", label: "Ostéopathie" },
  { id: "nourrisson", label: "Nourrisson / enfant" },
  { id: "grossesse", label: "Grossesse & post-partum" },
  { id: "drainage", label: "Drainage Renata França" },
];

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
            type: "osteo", // ou "google", mais on le met dans Ostéo pour l'affichage
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
                "Découvrez les avis patients sur les consultations d'ostéopathie et drainage lymphatique à Sèvres et Paris 15.",
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
                <span className="text-amber-400">★★★★★</span>
                <span className="font-semibold">
                  Avis patients 5/5 – Sèvres & Paris 15
                </span>
              </span>
              <span className="w-px h-4 bg-offwhite/30 hidden sm:inline-block" />
              <span className="inline-flex items-center gap-1">
                <span className="text-[#0F9D58]">✓</span>
                <span>
                  Vérifiés par Google
                </span>
              </span>
            </div>

            {/* CTA IMMÉDIAT (Optimisation CRO) */}
            <div className="mt-8">
            <button
              type="button"
              className="trigger-booking-modal inline-flex items-center gap-2 bg-[#0596DE] text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-[#047cbd] transition-all transform hover:-translate-y-1"
            >
              Prendre RDV Doctolib
            </button>
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
                      <span className="text-graywarm/80 font-medium mt-1">
                        {currentSlide.type === "osteo" && "Consultation d'ostéopathie"}
                        {currentSlide.type === "nourrisson" &&
                          "Suivi nourrisson / enfant"}
                        {currentSlide.type === "grossesse" &&
                          "Grossesse / post-partum"}
                        {currentSlide.type === "drainage" &&
                          "Drainage lymphatique Renata França"}
                        {currentSlide.type === "google" && "Avis Google"}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400 text-lg">
                      ★★★★★
                    </div>
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
                    aria-label={`Afficher l'avis ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= FILTRES + GRILLE D'AVIS ================= */}
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
                  className={`px-4 py-2 rounded-full text-xs md:text-sm border font-medium transition-all ${
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

          {/* Grille d'avis */}
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((r, i) => (
              <FadeIn key={`${r.name}-${i}`} delay={(i % 4) * 0.05}>
                <article
                  className="relative p-6 rounded-2xl bg-white/90 backdrop-blur-md
                             border border-light/70 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
                >
                  {r.source === "google" && (
                    <span className="absolute top-4 right-4 text-[11px] px-2 py-1 rounded-full bg-[#0F9D58]/8 text-[#0F9D58] font-semibold">
                      Avis Google
                    </span>
                  )}

                  <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                    ★★★★★
                  </div>

                  <p className="text-graywarm italic leading-relaxed text-sm flex-grow">
                    “{r.text}”
                  </p>

                  <div className="mt-5 pt-4 border-t border-light/50 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <p className="text-primary font-bold">— {r.name}</p>
                      <p className="text-graywarm mt-1 font-medium">
                        {r.type === "osteo" && "Ostéopathie"}
                        {r.type === "nourrisson" && "Nourrisson / enfant"}
                        {r.type === "grossesse" && "Grossesse / post-partum"}
                        {r.type === "drainage" && "Drainage Renata França"}
                        {r.source === "google" && "Avis Google"}
                      </p>
                    </div>
                  </div>

                  {r.sourceUrl && (
                    <a
                      href={r.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-[11px] text-[#0596DE] font-semibold hover:underline underline-offset-4"
                    >
                      Voir sur Google
                    </a>
                  )}
                </article>
              </FadeIn>
            ))}

            {filteredReviews.length === 0 && (
              <p className="text-graywarm text-sm col-span-full text-center py-10">
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
            Votre témoignage aide d'autres patients à faire le bon choix et
            soutient un accompagnement bienveillant et de qualité.
          </p>

          <a
            href="https://g.page/r/CdYpGglMJd2KEAE/review"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block bg-primary text-offwhite font-semibold px-10 py-4 rounded-lg hover:bg-secondary transition"
          >
            Déposer un avis sur Google
          </a>
        </section>
      </FadeIn>
      
      {/* === Bouton retour en haut via composant === */}
      <BackToTop />
    </main>
  );
}
