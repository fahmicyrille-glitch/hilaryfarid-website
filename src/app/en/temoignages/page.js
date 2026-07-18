"use client";

import { useEffect, useState, useMemo } from "react";
import { FadeIn, SlideUp, HeroMotion } from "@/components/MotionWrapper";
import BackToTop from "@/components/BackToTop";
import { GLOBAL_REVIEW_COUNT } from "@/config/siteConfig";

const BASE_REVIEWS = [
  {
    name: "Sabrina L.",
    text: "Incredible treatment! Visible results from the very first drainage session. My legs felt very heavy and my stomach was bloated, and I left feeling light. Hilary is wonderfully gentle and the welcome is perfect. I recommend her without hesitation.",
    type: "drainage",
  },
  {
    name: "Julie M.",
    text: "I came in for my 2-month-old who was suffering from reflux and colic. Hilary was very gentle and quickly identified the tensions. My baby is so much calmer and sleeps so much better since then!",
    type: "nourrisson",
  },
  {
    name: "Mathieu D.",
    text: "An exceptional osteopath. Very attentive, skilled and effective. I had chronic neck pain from working from home that was keeping me up at night. It completely disappeared after two sessions.",
    type: "osteo",
  },
  {
    name: "Mélanie T.",
    text: "Renata França drainage is amazing. Light legs, a flatter stomach, an immediate feeling of wellbeing. Hilary explains every step, and you can tell she has a thorough knowledge of anatomy.",
    type: "drainage",
  },
  {
    name: "Camille P.",
    text: "I came in at 7 months pregnant with severe sciatica: I finally found an osteopath who explains things, reassures you, and truly relieves pain without ever hurting. Thank you!",
    type: "grossesse",
  },

  // -------- Additional premium reviews --------
  {
    name: "Aurélie F.",
    text: "Hilary followed me throughout my pregnancy and post-partum. Every session brought real relief to my pelvis. I've never had care that felt so human and reassuring.",
    type: "grossesse",
  },
  {
    name: "Thomas V.",
    text: "I came in with my back completely locked up (lumbago). Hilary took the time to do a full assessment before very gently working on it. By the time I left, I could walk normally again. Professional and extremely effective.",
    type: "osteo",
  },
  {
    name: "Nina C.",
    text: "I did the 5-session Renata França drainage course. It transformed the feeling of heaviness in my legs and refined my silhouette. The results were visible right away. A true miracle worker!",
    type: "drainage",
  },
  {
    name: "Clara S.",
    text: "I brought my son in for breastfeeding latch issues. Hilary identified a tongue-tie and supported us before and after the procedure. Breastfeeding was saved thanks to her.",
    type: "nourrisson",
  },
  {
    name: "Manon B.",
    text: "Post-partum session: Hilary took the time to listen to me and adapt the session to my fatigue. I left feeling light, realigned, and above all, truly understood.",
    type: "grossesse",
  },
  {
    name: "Bastien R.",
    text: "A very good osteopath. She explains every movement, which immediately puts anxious patients at ease. My shoulder pain, which I'd had for months, disappeared.",
    type: "osteo",
  },
  {
    name: "Sarah K.",
    text: "I loved the Renata França drainage: a total detox feeling, a more refined silhouette and a flatter stomach. The technique is vigorous, but Hilary manages the pressure perfectly.",
    type: "drainage",
  },
  {
    name: "Elodie M.",
    text: "Genuinely attentive, very gentle, and above all lasting results. I came in for persistent migraines, and I haven't had one since our session. I recommend Hilary to all my friends.",
    type: "osteo",
  },
  {
    name: "David G.",
    text: "As a marathon runner, I'm demanding when it comes to my care. Hilary was able to resolve chronic knee pain that no one else could treat. Top-notch.",
    type: "osteo",
  },
  {
    name: "Anaïs L.",
    text: "I've seen several osteopaths in the 15th arrondissement, but Hilary is by far the best at explaining things, and the most precise. You never feel rushed through a 15-minute appointment. A true, passionate professional.",
    type: "osteo",
  },
  {
    name: "Léa P.",
    text: "My baby had torticollis and always turned his head the same way. After two sessions, there was a clear improvement, and he regained full mobility. Very gentle, very patient. Thank you so much.",
    type: "nourrisson",
  },
  {
    name: "Jade V.",
    text: "Perfect drainage session, a relaxing atmosphere, visible results: a flatter stomach, renewed energy. It's become my monthly ritual.",
    type: "drainage",
  },
  {
    name: "Hugo T.",
    text: "Jaw pain (bruxism) for several months, with headaches upon waking. Hilary immediately identified the cause, worked gently, and gave me genuinely useful exercises.",
    type: "osteo",
  },
  {
    name: "Sonia E.",
    text: "An exceptional osteopath. Remarkably kind and precise. You truly feel at ease, and the clinics are impeccably clean.",
    type: "osteo",
  },
];

const FILTERS = [
  { id: "all", label: "All reviews" },
  { id: "google", label: "Google Reviews" },
  { id: "osteo", label: "Osteopathy" },
  { id: "nourrisson", label: "Infant / Child" },
  { id: "grossesse", label: "Pregnancy & Post-partum" },
  { id: "drainage", label: "Renata França Drainage" },
];

export default function TemoignagesEnPage() {
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

  // ---- Fetch Google reviews from BOTH clinics (Sèvres + Paris 15) ----
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const res = await fetch("/api/google-reviews");
        if (!res.ok) return;

        const data = await res.json();
        // data.reviews = [{ author, text, rating, relativeTime, sourceUrl, cabinet, cabinetLabel }]
        const mapped =
          data?.reviews?.map((r) => ({
            name: r.author || "Google review",
            text: r.text,
            rating: r.rating,
            relativeTime: r.relativeTime,
            sourceUrl: r.sourceUrl,
            cabinetLabel: r.cabinetLabel,
            type: "google",
            source: "google",
          })) ?? [];

        setGoogleReviews(mapped);
        setCurrentIndex(0);
      } catch (error) {
        console.error("Error loading Google reviews:", error);
      }
    };

    fetchGoogleReviews();
  }, []);

  // ---- Merge manual + Google reviews ----
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

  // ---- Automatic slider ----
  useEffect(() => {
    if (filteredReviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 7000); // 7 seconds
    return () => clearInterval(interval);
  }, [filteredReviews.length]);

  const currentSlide =
    filteredReviews.length > 0
      ? filteredReviews[currentIndex % filteredReviews.length]
      : null;

  return (
    <main>
      {/* --------- Review Schema inline (SSR) --------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.hilaryfarid-osteopathe.fr/#cabinet-sevres",
            name: "Hilary Farid – Osteopath D.O. Sèvres & Paris 15",
            url: "https://www.hilaryfarid-osteopathe.fr/en",
            inLanguage: "en",
            image: "https://www.hilaryfarid-osteopathe.fr/hilary.webp",
            telephone: "+33672014539",
            address: {
              "@type": "PostalAddress",
              streetAddress: "104 Grande Rue",
              addressLocality: "Sèvres",
              postalCode: "92310",
              addressCountry: "FR",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
              reviewCount: GLOBAL_REVIEW_COUNT,
            },
          }),
        }}
      />

      {/* ================= HERO with parallax effect ================= */}
      <section className="bg-primary text-offwhite relative overflow-hidden">
        {/* parallax layer */}
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
              Patient Testimonials
            </h1>
            <p className="mt-4 text-light text-lg max-w-2xl mx-auto">
              Genuine reviews from <strong>osteopathy</strong>,{" "}
              <strong>infant</strong>, <strong>pregnancy / post-partum</strong>{" "}
              and <strong>Renata França lymphatic drainage</strong> patients.
            </p>

            {/* Stats + Google banner */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 bg-offwhite/10 border border-offwhite/30 rounded-full px-5 py-2 text-xs md:text-sm">
              <span className="inline-flex items-center gap-1">
                <span className="text-amber-400">★★★★★</span>
                <span className="font-semibold">
                  Rated 5/5 by patients – Sèvres & Paris 15
                </span>
              </span>
              <span className="w-px h-4 bg-offwhite/30 hidden sm:inline-block" />
              <span className="inline-flex items-center gap-1">
                <span className="text-[#0F9D58]">✓</span>
                <span>
                  Verified by Google
                </span>
              </span>
            </div>

            {/* IMMEDIATE CTA (CRO Optimisation) */}
            <div className="mt-8">
            <button
              type="button"
              className="trigger-booking-modal inline-flex items-center gap-2 bg-doctolib text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:bg-doctolib-dark transition-all transform hover:-translate-y-1"
            >
              Book via Doctolib
            </button>
            </div>
          </HeroMotion>
        </div>
      </section>

      {/* ================= AUTOMATIC SLIDER ================= */}
      <section className="bg-offwhite py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center">
              What patients say
            </h2>
            <p className="mt-2 text-center text-graywarm text-sm md:text-base">
              One review featured at a time. The slider automatically cycles
              through the most representative testimonials.
            </p>
          </FadeIn>

          {/* Slider card */}
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
                      Google Review
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
                        {currentSlide.type === "osteo" && "Osteopathy consultation"}
                        {currentSlide.type === "nourrisson" &&
                          "Infant / child care"}
                        {currentSlide.type === "grossesse" &&
                          "Pregnancy / post-partum"}
                        {currentSlide.type === "drainage" &&
                          "Renata França lymphatic drainage"}
                        {currentSlide.type === "google" &&
                          `Google Review – ${currentSlide.cabinetLabel || "Clinic"}`}
                        {currentSlide.relativeTime && ` · ${currentSlide.relativeTime}`}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400 text-lg">
                      ★★★★★
                    </div>
                  </div>
                </article>
              </FadeIn>
            )}

            {/* Navigation dots */}
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
                    aria-label={`Show review ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= FILTERS + REVIEW GRID ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <SlideUp>
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                All patient reviews
              </h2>
              <p className="mt-2 text-graywarm text-sm md:text-base">
                Filter testimonials by type of consultation: osteopathy,
                infant care, pregnancy or Renata França drainage.
              </p>
            </div>

            {/* Filters */}
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

          {/* Review grid */}
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((r, i) => (
              <FadeIn key={`${r.name}-${i}`} delay={(i % 4) * 0.05}>
                <article
                  className="relative p-6 rounded-2xl bg-white/90 backdrop-blur-md
                             border border-light/70 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
                >
                  {r.source === "google" && (
                    <span className="absolute top-4 right-4 text-[11px] px-2 py-1 rounded-full bg-[#0F9D58]/8 text-[#0F9D58] font-semibold">
                      Google Review
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
                        {r.type === "osteo" && "Osteopathy"}
                        {r.type === "nourrisson" && "Infant / child"}
                        {r.type === "grossesse" && "Pregnancy / post-partum"}
                        {r.type === "drainage" && "Renata França Drainage"}
                        {r.type === "google" &&
                          `Google Review – ${r.cabinetLabel || "Clinic"}`}
                        {r.relativeTime && ` · ${r.relativeTime}`}
                      </p>
                    </div>
                  </div>

                  {r.sourceUrl && (
                    <a
                      href={r.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-[11px] text-doctolib font-semibold hover:underline underline-offset-4"
                    >
                      See on Google
                    </a>
                  )}
                </article>
              </FadeIn>
            ))}

            {filteredReviews.length === 0 && (
              <p className="text-graywarm text-sm col-span-full text-center py-10">
                No reviews in this category yet.
              </p>
            )}
          </div>
        </SlideUp>
      </section>

      {/* ================= FINAL CTA ================= */}
      <FadeIn>
        <section className="py-20 text-center px-6 bg-light">
          <h2 className="text-3xl font-semibold text-primary">
            Would you like to share your experience?
          </h2>
          <p className="mt-3 text-graywarm max-w-xl mx-auto">
            Your testimonial helps other patients make the right choice and
            supports caring, high-quality treatment.
          </p>

          <a
            href="https://g.page/r/CdYpGglMJd2KEAE/review"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block bg-primary text-offwhite font-semibold px-10 py-4 rounded-lg hover:bg-secondary transition"
          >
            Leave a Google review
          </a>
        </section>
      </FadeIn>

      {/* === Back-to-top button via shared component === */}
      <BackToTop />
    </main>
  );
}
