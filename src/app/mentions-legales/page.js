// src/app/mentions-legales/page.js
"use client";

import { FadeIn } from "@/components/MotionWrapper";

export default function MentionsLegalesPage() {
  return (
    <main className="bg-offwhite min-h-screen py-16 md:py-24 px-6 text-graywarm leading-relaxed">
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold text-primary">
            Mentions légales
          </h1>
          <p className="mt-4 text-graywarm">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-light p-8 md:p-14">
          <section className="space-y-8 text-base">
            <p>
              Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la
              confiance dans l’économie numérique, il est précisé aux utilisateurs du site
              l’identité des différents intervenants dans le cadre de sa réalisation et de
              son suivi.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                1. Éditeur du site
              </h2>
              <p>
                <strong>Hilary Farid</strong><br />
                Ostéopathe D.O.<br />
                Téléphone : <a href="tel:+33672014539" className="text-[#0596DE] font-medium hover:underline underline-offset-4">06 72 01 45 39</a><br />
                Email : <a href="mailto:hilaryfarid.osteopathe@gmail.com" className="text-[#0596DE] font-medium hover:underline underline-offset-4">hilaryfarid.osteopathe@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                2. Cabinets
              </h2>
              <p>
                <strong>Cabinet de Paris 15 :</strong> 28 rue Letellier – 75015 Paris<br />
                <strong>Cabinet de Sèvres :</strong> 104 Grande Rue – 92310 Sèvres
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                3. Hébergement
              </h2>
              <p>
                Le site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723 – États-Unis<br />
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#0596DE] font-medium hover:underline underline-offset-4">https://vercel.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                4. Propriété intellectuelle
              </h2>
              <p>
                Le site et chacun des éléments qui le composent (textes, images, graphismes,
                logo, structure, etc.) sont protégés par le droit de la propriété intellectuelle.
                Toute reproduction, représentation ou adaptation, totale ou partielle, sans
                autorisation écrite préalable est strictement interdite.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                5. Responsabilité
              </h2>
              <p>
                Les informations fournies sur ce site sont données à titre informatif et ne
                remplacent en aucun cas un avis médical. L’ostéopathie est une thérapie manuelle de
                première intention, de bien-être et de prévention.
              </p>
            </div>
          </section>
        </div>
      </FadeIn>
    </main>
  );
}
