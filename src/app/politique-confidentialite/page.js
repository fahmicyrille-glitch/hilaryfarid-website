import SEO from "@/components/SEO";

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <SEO
        title="Politique de confidentialité | Hilary Farid – Ostéopathe"
        description="Politique de confidentialité et protection des données personnelles."
        canonical="https://www.hilaryfarid-osteopathe.fr/politique-confidentialite"
      />

      <h1 className="text-3xl font-semibold text-primary mb-8">
        Politique de confidentialité
      </h1>

      <section className="space-y-6 text-sm text-graywarm leading-relaxed">
        <p>
          La présente politique de confidentialité a pour objectif d’informer les
          utilisateurs du site des modalités de collecte, de traitement et de protection
          de leurs données personnelles, conformément au Règlement Général sur la
          Protection des Données (RGPD).
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Responsable du traitement
        </h2>
        <p>
          Les données personnelles sont collectées par :<br />
          Hilary Farid – Ostéopathe DO
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Données collectées
        </h2>
        <p>
          Le site ne collecte des données personnelles que lorsque l’utilisateur :
        </p>
        <ul className="list-disc list-inside">
          <li>contacte le cabinet par téléphone ou email</li>
          <li>prend rendez-vous via la plateforme Doctolib</li>
        </ul>

        <p>
          Les données susceptibles d’être collectées sont : nom, prénom, coordonnées de
          contact. Aucune donnée médicale n’est collectée via ce site.
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Finalité du traitement
        </h2>
        <p>
          Les données sont utilisées exclusivement pour :
        </p>
        <ul className="list-disc list-inside">
          <li>la prise de contact</li>
          <li>la gestion des rendez-vous</li>
          <li>la communication avec les patients</li>
        </ul>

        <h2 className="text-lg font-semibold text-primary">
          Conservation des données
        </h2>
        <p>
          Les données sont conservées pendant une durée strictement nécessaire aux
          finalités pour lesquelles elles ont été collectées.
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Partage des données
        </h2>
        <p>
          Les données personnelles ne sont ni vendues ni cédées à des tiers. La prise de
          rendez-vous en ligne est assurée par Doctolib, qui dispose de sa propre politique
          de confidentialité.
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Droits des utilisateurs
        </h2>
        <p>
          Conformément à la réglementation en vigueur, vous disposez d’un droit d’accès,
          de rectification, d’opposition, de limitation et de suppression des données vous
          concernant.
        </p>

        <p>
          Pour exercer ces droits, vous pouvez contacter :
          <br />
          <a
            href="mailto:contact@hilaryfarid-osteopathe.fr"
            className="underline underline-offset-4 text-primary"
          >
            hilaryfarid.osteopathe@gmail.com
          </a>
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Cookies
        </h2>
        <p>
          Le site n’utilise pas de cookies de suivi ou de publicité. Seuls des cookies
          techniques nécessaires au bon fonctionnement du site peuvent être utilisés.
        </p>
      </section>
    </main>
  );
}
