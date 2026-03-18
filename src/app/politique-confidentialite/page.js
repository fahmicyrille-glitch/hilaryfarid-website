// src/app/politique-confidentialite/page.js

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 md:py-24 px-6 text-graywarm leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10">
        Politique de Confidentialité
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">1. Collecte des données</h2>
          <p>
            Les données personnelles collectées sur ce site (via le formulaire de contact) sont uniquement destinées à la gestion de vos demandes de rendez-vous et à la communication entre le patient et Hilary Farid.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">2. Utilisation des cookies</h2>
          <p>
            Ce site utilise des cookies (Google Analytics, GTM) afin d'analyser l'audience et d'améliorer l'expérience utilisateur. Vous pouvez vous opposer à l'enregistrement de ces cookies via les paramètres de votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">3. Vos droits</h2>
          <p>
            Conformément à la loi « Informatique et Libertés » et au RGPD, vous bénéficiez d’un droit d’accès, de rectification et de suppression des données vous concernant.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-4">4. Contact</h2>
          <p>
            Pour toute question concernant vos données, vous pouvez nous contacter par email à : <br />
            <span className="font-medium">contact@hilaryfarid-osteopathe.fr</span>
          </p>
        </section>
      </div>
    </main>
  );
}
