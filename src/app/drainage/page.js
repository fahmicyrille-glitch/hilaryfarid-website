"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/MotionWrapper";
import DrainageGallery from "@/components/DrainageGallery";
import SEO from "@/components/SEO";

const SECTIONS = [
  { id: "a-propos", label: "À propos du drainage" },
  { id: "effets", label: "Effets & résultats" },
  { id: "avant-apres", label: "Avant / Après" },
  { id: "benefices", label: "Bénéfices au quotidien" },
  { id: "contre-indications", label: "Contre-indications" },
  { id: "galerie", label: "Galerie" },
  { id: "faq", label: "FAQ" },
];

export default function DrainagePage() {
  const [activeId, setActiveId] = useState("a-propos");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scrollspy + bouton retour en haut
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = activeId;

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop - 140;
          if (scrollY >= offsetTop) {
            current = section.id;
          }
        }
      }

      if (current !== activeId) {
        setActiveId(current);
      }
      setShowBackToTop(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  // Smooth scroll (JS pur, pas de TS)
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleBackToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main>
      <SEO
        title="Drainage lymphatique Renata França"
        description="Méthode Renata França : dégonflement, détox, jambes légères, ventre plat et silhouette affinée. Sèvres & Paris 15."
        canonical="/drainage"
        image="/og-image.jpg"
      />

      {/* ========= SCHEMA UNIQUE ========= */}
      <Script
        id="schema-drainage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              {
                "@context": "https://schema.org",
                "@type": "MedicalWebPage",
                "@id":
                  "https://www.hilaryfarid-osteopathe.fr/drainage#medical",
                url: "https://www.hilaryfarid-osteopathe.fr/drainage",
                name: "Drainage lymphatique – Méthode Renata França",
                description:
                  "Drainage lymphatique méthode Renata França : dégonflement, légèreté, ventre plat, amélioration de la circulation et détox immédiate.",
                about: [
                  {
                    "@type": "TherapeuticProcedure",
                    name: "Drainage lymphatique Renata França",
                  },
                ],
                medicalAudience: ["Adult", "PostpartumWomen", "Athlete"],
                mainEntity: {
                  "@type": "Physician",
                  name: "Hilary Farid",
                  image:
                    "https://www.hilaryfarid-osteopathe.fr/Hilary.png",
                  url: "https://www.hilaryfarid-osteopathe.fr",
                  medicalSpecialty: [
                    "Osteopathy",
                    "PhysicalTherapy",
                    "LymphaticTherapy",
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name:
                      "Quels sont les effets du drainage lymphatique Renata França ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "La méthode Renata França réduit la rétention d’eau, dégonfle immédiatement, affine la silhouette, améliore la digestion et procure une sensation de légèreté et de bien-être.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Combien de séances sont nécessaires ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Une séance permet déjà un dégonflement visible. Une cure de 3 à 5 séances optimise les résultats.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Le drainage Renata França fait-il mal ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "La méthode est tonique mais jamais douloureuse. Les pressions sont adaptées au confort de chacun.",
                    },
                  },
                ],
              },
            ],
            null,
            2
          ),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/drainage/drainage_ventre.png"
          alt="Drainage lymphatique Renata França"
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center text-center px-6">
          <FadeIn>
            <Image
              src="/drainage/drainage_Logo.png"
              alt="Logo Renata França"
              width={160}
              height={160}
              className="mx-auto w-40 mb-6 opacity-90"
            />

            <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
              Drainage lymphatique <br />
              Méthode Renata França
            </h1>

            <p className="mt-4 text-offwhite text-lg md:text-xl max-w-2xl mx-auto">
              Une technique dynamique aux résultats <strong>immédiats</strong> :
              dégonflement, légèreté, détox, silhouette affinée.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= WRAPPER SOMMAIRE + CONTENU ================= */}
      <section className="bg-offwhite py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex gap-10">

          {/* ===== SOMMAIRE STICKY (DESKTOP) ===== */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-light/70 p-5">
              <h2 className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Sommaire
              </h2>

              <nav className="space-y-2 text-sm">
                {SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => handleSmoothScroll(e, section.id)}
                    className={`block rounded-lg px-3 py-2 transition ${
                      activeId === section.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-graywarm hover:text-primary hover:bg-light/70"
                    }`}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ===== CONTENU PRINCIPAL ===== */}
          <div className="flex-1 space-y-16">

            {/* ===== Sommaire Mobile ===== */}
            <div className="lg:hidden mb-4">
              <div className="bg-white rounded-2xl shadow-sm border border-light/70 p-4">
                <h2 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  Sommaire
                </h2>

                <div className="flex flex-wrap gap-2 text-xs">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={(e) => handleSmoothScroll(e, section.id)}
                      className={`px-3 py-1 rounded-full border text-[11px] transition ${
                        activeId === section.id
                          ? "bg-primary text-offwhite border-primary"
                          : "border-light text-graywarm hover:border-primary hover:text-primary"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ================================================================= */}
            {/* ====================== SECTION : A PROPOS ======================= */}
            {/* ================================================================= */}
            <SlideUp>
              <section
                id="a-propos"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">
                  Un drainage unique, aux résultats immédiats
                </h2>

                <div className="mt-10 space-y-8 text-graywarm leading-relaxed text-base md:text-lg">

                  <p className="text-center">
                    Le <strong>drainage lymphatique Renata França</strong> est
                    une méthode révolutionnaire, bien plus tonique que le
                    drainage classique. Elle stimule intensément la circulation{" "}
                    <strong>lymphatique</strong> et <strong>sanguine</strong> pour
                    obtenir un effet visible dès la première séance.
                  </p>

                  <p className="text-center font-medium text-xl text-primary">
                    👉 Résultats immédiats : silhouette affinée, ventre dégonflé,
                    jambes légères, énergie retrouvée.
                  </p>

                  <hr className="border-graywarm/30 my-8" />

                  {/* ============================================================= */}
                  {/* ====================== SECTION : EFFETS ===================== */}
                  {/* ============================================================= */}
                  <div id="effets">
                    <h3 className="text-2xl font-semibold text-primary text-center">
                      Pourquoi cette méthode est-elle si efficace ?
                    </h3>

                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li>Pressions profondes et rythmées</li>
                      <li>Circulation lymphatique relancée</li>
                      <li>Déstockage de l’eau stagnante</li>
                      <li>Détoxification naturelle du corps</li>
                    </ul>

                    <p className="mt-4 italic">
                      Une sensation incomparable de légèreté, dès la première séance.
                    </p>
                  </div>

                  <hr className="border-graywarm/30 my-8" />

                  <div>
                    <h3 className="text-2xl font-semibold text-primary text-center">
                      Les résultats que vous pouvez attendre
                    </h3>

                    <ul className="mt-4 space-y-3 list-disc list-inside">
                      <li>
                        ✔️ <strong>Diminution de la rétention d’eau</strong>
                      </li>
                      <li>✔️ Jambes affinées et légères</li>
                      <li>✔️ Ventre plus plat & meilleure digestion</li>
                      <li>✔️ Silhouette redessinée</li>
                      <li>✔️ Bien-être et détente profonde</li>
                    </ul>
                  </div>

                  <hr className="border-graywarm/30 my-8" />

                  <div>
                    <h3 className="text-2xl font-semibold text-primary text-center">
                      Parfait avant un événement
                    </h3>

                    <p className="mt-3 text-center">
                      Idéal avant un <strong>shooting</strong>, un{" "}
                      <strong>mariage</strong>, des vacances, une compétition ou un{" "}
                      <strong>post-partum</strong>.
                    </p>
                  </div>

                  <hr className="border-graywarm/30 my-8" />

                  <div>
                    <h3 className="text-2xl font-semibold text-primary text-center">
                      Combien de séances ?
                    </h3>

                    <ul className="mt-4 space-y-2 list-disc list-inside">
                      <li>✔️ Une séance = effet immédiat</li>
                      <li>✔️ Cure de 3 à 5 séances = résultats optimisés</li>
                    </ul>
                  </div>

                  <hr className="border-graywarm/30 my-8" />

                  <div>
                    <h3 className="text-2xl font-semibold text-primary text-center">
                      Une praticienne formée et certifiée
                    </h3>

                    <p className="mt-3 text-center">
                      Je suis <strong>formée et certifiée</strong> à la Méthode
                      Renata França, et j’adapte chaque séance à votre morphologie.
                    </p>
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ================================================================= */}
            {/* ====================== SECTION : AVANT APRES ==================== */}
            {/* ================================================================= */}
            <SlideUp>
              <section
                id="avant-apres"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Résultats Avant / Après
                </h2>

                <div className="grid md:grid-cols-2 gap-12 mt-12">
                  <div className="shadow-xl rounded-lg overflow-hidden">
                    <Image
                      src="/drainage/avant_apres_jambe.png"
                      alt="Résultat avant après jambes drainage lymphatique"
                      width={900}
                      height={900}
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="shadow-xl rounded-lg overflow-hidden">
                    <Image
                      src="/drainage/avant_apres_ventre.png"
                      alt="Résultat avant après ventre drainage lymphatique"
                      width={900}
                      height={900}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </section>
            </SlideUp>

            {/* ================================================================= */}
            {/* ====================== SECTION : BENEFICES ====================== */}
            {/* ================================================================= */}
            <SlideUp>
              <section
                id="benefices"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Les bénéfices du drainage
                </h2>

                <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
                  <Image
                    src="/drainage/drainage_jambe.png"
                    alt="Drainage lymphatique jambes méthode Renata França"
                    width={800}
                    height={800}
                    className="rounded-lg shadow-lg"
                  />

                  <ul className="space-y-4 text-graywarm text-lg">
                    <li>✔️ Effet immédiat dès la première séance</li>
                    <li>✔️ Diminution de la rétention d’eau</li>
                    <li>✔️ Jambes légères</li>
                    <li>✔️ Amélioration de la digestion</li>
                    <li>✔️ Silhouette affinée et harmonieuse</li>
                    <li>✔️ Détox naturelle du corps</li>
                  </ul>
                </div>
              </section>
            </SlideUp>

            {/* ================================================================= */}
            {/* ================= SECTION : CONTRE INDICATIONS ================= */}
            {/* ================================================================= */}
            <SlideUp>
              <section
                id="contre-indications"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  Contre-indications & précautions
                </h2>

                <p className="mt-6 text-graywarm text-center max-w-2xl mx-auto">
                  Le drainage lymphatique Renata França est une méthode puissante.
                  Certaines situations demandent un avis médical préalable :
                </p>

                <ul className="mt-6 space-y-3 text-graywarm list-disc list-inside">
                  <li>Grossesse sans avis médical</li>
                  <li>Insuffisance cardiaque ou rénale non stabilisée</li>
                  <li>Phlébite / thrombose récente</li>
                  <li>Infections aiguës, fièvre</li>
                  <li>Cancer en cours de traitement (avis médical obligatoire)</li>
                </ul>

                <p className="mt-6 text-graywarm text-center">
                  En cas de doute, je vous invite à me contacter avant la séance.
                </p>
              </section>
            </SlideUp>

            {/* ================================================================= */}
            {/* ====================== SECTION : GALERIE ======================== */}
            {/* ================================================================= */}
            <SlideUp>
              <section
                id="galerie"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center mb-8">
                  Galerie du drainage Renata França
                </h2>

                <DrainageGallery />
              </section>
            </SlideUp>

            {/* ================================================================= */}
            {/* ====================== SECTION : FAQ ============================ */}
            {/* ================================================================= */}
            <SlideUp>
              <section
                id="faq"
                className="bg-white rounded-2xl shadow-sm border border-light/70 p-6 md:p-8"
              >
                <h2 className="text-3xl font-semibold text-primary text-center">
                  FAQ – Drainage lymphatique Renata França
                </h2>

                <div className="mt-10 space-y-6">
                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Quels sont les effets dès la première séance ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Diminution de la rétention d’eau, ventre plus plat, jambes
                      légères, sensation de dégonflement immédiate.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Est-ce que la méthode est douloureuse ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Non. La pression est tonique mais jamais douloureuse et toujours adaptée à votre confort.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Combien de séances sont recommandées ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Une séance suffit pour un effet immédiat. Une cure de 3 à 5 séances optimise les résultats.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Est-ce adapté en post-partum ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Oui, très recommandé pour éliminer la rétention d’eau, améliorer la digestion et réduire les gonflements.
                    </p>
                  </details>

                  <details className="bg-offwhite/80 border rounded-xl p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer">
                      Faut-il boire beaucoup d’eau après la séance ?
                    </summary>
                    <p className="mt-2 text-graywarm text-sm">
                      Oui, il est conseillé de bien s’hydrater pour accompagner la détoxification naturelle.
                    </p>
                  </details>
                </div>
              </section>
            </SlideUp>

            {/* ================================================================= */}
            {/* ====================== CTA FINAL =============================== */}
            {/* ================================================================= */}
            <FadeIn>
              <section className="bg-primary text-offwhite rounded-2xl shadow-sm p-8 md:p-10 text-center">
                <h2 className="text-3xl font-semibold">
                  Réserver votre séance
                </h2>

                <p className="mt-3 text-offwhite/90">
                  Drainage lymphatique disponible à <strong>Sèvres</strong> et{" "}
                  <strong>Paris 15</strong>.
                </p>

                <a
                  href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10"
                  target="_blank"
                  className="mt-6 inline-block bg-offwhite text-primary px-10 py-4 rounded-lg hover:bg-light transition"
                >
                  Réserver une séance
                </a>
              </section>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== Bouton retour en haut ===== */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-6 right-4 md:right-6 z-40 bg-primary text-offwhite w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-lg hover:bg-secondary transition"
          aria-label="Revenir en haut de la page"
        >
          ↑
        </button>
      )}
    </main>
  );
}
