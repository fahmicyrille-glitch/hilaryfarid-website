import SEO from "@/components/SEO";

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <SEO
        title="Mentions légales | Hilary Farid – Ostéopathe"
        description="Mentions légales du site hilaryfarid-osteopathe.fr"
        canonical="https://www.hilaryfarid-osteopathe.fr/mentions-legales"
      />

      <h1 className="text-3xl font-semibold text-primary mb-8">
        Mentions légales
      </h1>

      <section className="space-y-6 text-sm text-graywarm leading-relaxed">
        <p>
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la
          confiance dans l’économie numérique, il est précisé aux utilisateurs du site
          l’identité des différents intervenants dans le cadre de sa réalisation et de
          son suivi.
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Éditeur du site
        </h2>
        <p>
          Hilary Farid<br />
          Ostéopathe DO<br />
          Téléphone : 06 72 01 45 39<br />
          Email : hilaryfarid.osteopathe@gmail.com
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Cabinets
        </h2>
        <p>
          28 rue Letellier – 75015 Paris<br />
          104 Grande Rue – 92310 Sèvres
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Hébergement
        </h2>
        <p>
          Le site est hébergé par :<br />
          Vercel Inc.<br />
          440 N Barranca Ave #4133<br />
          Covina, CA 91723 – États-Unis<br />
          <a
            href="https://vercel.com"
            target="_blank"
            className="underline underline-offset-4 text-primary"
          >
            https://vercel.com
          </a>
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Propriété intellectuelle
        </h2>
        <p>
          Le site et chacun des éléments qui le composent (textes, images, graphismes,
          logo, structure, etc.) sont protégés par le droit de la propriété intellectuelle.
          Toute reproduction, représentation ou adaptation, totale ou partielle, sans
          autorisation écrite préalable est interdite.
        </p>

        <h2 className="text-lg font-semibold text-primary">
          Responsabilité
        </h2>
        <p>
          Les informations fournies sur ce site sont données à titre informatif et ne
          remplacent en aucun cas un avis médical. L’ostéopathie est une pratique de
          bien-être et de prévention.
        </p>
      </section>
    </main>
  );
}
