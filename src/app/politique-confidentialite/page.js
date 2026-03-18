"use client";

import { FadeIn } from "@/components/MotionWrapper";

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-offwhite min-h-screen py-16 md:py-24 px-6">
      <SEO
        title="Politique de confidentialité | Hilary Farid – Ostéopathe"
        description="Politique de confidentialité et protection des données personnelles du cabinet d'ostéopathie d'Hilary Farid à Sèvres et Paris 15."
        canonical="https://www.hilaryfarid-osteopathe.fr/politique-confidentialite"
      />

      <FadeIn>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold text-primary">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-graywarm">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-light p-8 md:p-14">
          <section className="space-y-8 text-base text-graywarm leading-relaxed">

            <p>
              La présente politique de confidentialité a pour objectif d’informer les
              utilisateurs du site des modalités de collecte, de traitement et de protection
              de leurs données personnelles, conformément au Règlement Général sur la
              Protection des Données (RGPD).
            </p>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                1. Responsable du traitement
              </h2>
              <p>
                Les données personnelles sont collectées par :<br />
                <strong>Hilary Farid – Ostéopathe D.O.</strong>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                2. Données collectées
              </h2>
              <p>
                Le site ne collecte des données personnelles que lorsque l’utilisateur :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li>Contacte le cabinet par téléphone ou e-mail ;</li>
                <li>Utilise le formulaire de contact présent sur le site ;</li>
                <li>Prend rendez-vous via la plateforme Doctolib.</li>
              </ul>
              <p className="mt-3">
                Les données susceptibles d’être collectées sont : nom, prénom, adresse e-mail, numéro de téléphone. <strong>Aucune donnée de santé ou médicale n’est collectée directement via ce site vitrine.</strong>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                3. Finalité du traitement
              </h2>
              <p>
                Les données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                <li>La prise de contact et la réponse à vos demandes ;</li>
                <li>La gestion des rendez-vous ;</li>
                <li>La communication liée à votre suivi avec le cabinet.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                4. Conservation des données
              </h2>
              <p>
                Les données sont conservées pendant une durée strictement nécessaire aux
                finalités pour lesquelles elles ont été collectées, conformément aux obligations légales de conservation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                5. Partage des données
              </h2>
              <p>
                Vos données personnelles sont strictement confidentielles. Elles ne sont ni vendues, ni cédées, ni louées à des tiers. La prise de
                rendez-vous en ligne est assurée par la plateforme externe <strong>Doctolib</strong>, qui dispose de sa propre politique
                de confidentialité sécurisée et certifiée pour les données de santé (HDS).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                6. Cookies
              </h2>
              <p>
                Ce site n’utilise pas de cookies de ciblage publicitaire ou de traçage invasif. Seuls des cookies
                techniques strictement nécessaires au bon fonctionnement et à la sécurité du site peuvent être utilisés. Par conséquent, aucun bandeau de consentement aux cookies n'est requis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">
                7. Vos droits
              </h2>
              <p>
                Conformément à la réglementation en vigueur (Loi Informatique et Libertés et RGPD), vous disposez d’un droit d’accès,
                de rectification, d’opposition, de limitation et de suppression des données vous
                concernant.
              </p>
              <p className="mt-3">
                Pour exercer ces droits, vous pouvez me contacter directement par e-mail :
                <br />
                <a
                  href="mailto:hilaryfarid.osteopathe@gmail.com"
                  className="inline-block mt-2 font-medium text-[#0596DE] hover:underline underline-offset-4"
                >
                  hilaryfarid.osteopathe@gmail.com
                </a>
              </p>
            </div>

          </section>
        </div>
      </FadeIn>
    </main>
  );
}
