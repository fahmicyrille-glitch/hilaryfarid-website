"use client";

import { FadeIn, SlideUp } from "@/components/MotionWrapper";

export default function Home() {
  return (
    <main>
      <div>

        {/* HERO */}
        <section className="bg-primary text-offwhite py-16 text-center px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Votre bien-être entre de bonnes mains
            </h1>
            <p className="mt-4 text-light text-lg max-w-2xl mx-auto">
              Ostéopathie & drainage lymphatique méthode Renata França à Sèvres et Paris 15.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <a
                href="https://www.doctolib.fr/osteopathe/sevres/hilary-farid/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
                target="_blank"
                rel="noreferrer"
                className="bg-secondary text-offwhite px-6 py-3 rounded-md hover:bg-light hover:text-primary transition"
              >
                Prendre rendez-vous
              </a>
              <a
                href="/osteopathie"
                className="underline underline-offset-4 hover:text-light"
              >
                En savoir plus
              </a>
            </div>
          </FadeIn>
        </section>

        {/* SPECIALITES */}
        <section className="py-16 bg-offwhite">
          <SlideUp>
            <h2 className="text-center text-3xl font-semibold text-primary">
              Mes expertises
            </h2>
          </SlideUp>

          <div className="grid md:grid-cols-2 gap-8 mt-10 px-6 max-w-5xl mx-auto">

            <FadeIn delay={0.2}>
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition bg-white">
                <h3 className="text-xl font-semibold text-primary">Ostéopathie</h3>
                <p className="text-graywarm mt-2">
                  Soulagement des douleurs, posture, stress, troubles digestifs,
                  mobilité et tensions.
                </p>
                <a
                  href="/osteopathie"
                  className="text-secondary mt-4 inline-block underline"
                >
                  En savoir plus
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition bg-white">
                <h3 className="text-xl font-semibold text-primary">
                  Drainage lymphatique Renata França
                </h3>
                <p className="text-graywarm mt-2">
                  Jambes légères, détox, amélioration de la digestion,
                  sensation de bien-être immédiat.
                </p>
                <a
                  href="/drainage"
                  className="text-secondary mt-4 inline-block underline"
                >
                  Découvrir le drainage
                </a>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* LOCALISATIONS */}
        <section className="py-16 text-center bg-light">
          <SlideUp>
            <h2 className="text-3xl font-semibold text-primary">Où consulter ?</h2>
          </SlideUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10 px-6">
            <FadeIn delay={0.1}>
              <div className="p-6 border rounded-lg bg-offwhite">
                <h3 className="text-xl font-semibold text-primary">Sèvres</h3>
                <p className="text-graywarm mt-2">104 Grande Rue, 92310 Sèvres</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-6 border rounded-lg bg-offwhite">
                <h3 className="text-xl font-semibold text-primary">Paris 15</h3>
                <p className="text-graywarm mt-2">28 Rue Letellier, 75015 Paris</p>
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </main>
  );
}
