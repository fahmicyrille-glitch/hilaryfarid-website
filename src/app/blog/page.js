import Link from "next/link";
import { articles } from "@/data/articles";

const categoryColors = {
  Nourrisson: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
  Drainage: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-100" },
  Grossesse: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-100" },
  Sport: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-100" },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Hilary Farid — Ostéopathie & Drainage Renata França",
            url: "https://www.hilaryfarid-osteopathe.fr/blog",
            description: "Conseils et articles sur l'ostéopathie nourrisson, la grossesse, le drainage Renata França.",
            author: {
              "@type": "Person",
              "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid",
              name: "Hilary Farid",
            },
          })
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="bg-offwhite border-b border-light/50 px-6 py-3">
        <div className="max-w-5xl mx-auto text-sm text-graywarm flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span className="opacity-40">/</span>
          <span className="text-primary font-medium">Blog</span>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-offwhite py-16 px-6 border-b border-light/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
            Conseils & informations
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Blog
          </h1>
          <p className="mt-5 text-lg text-graywarm max-w-2xl mx-auto leading-relaxed">
            Articles de conseils sur l'ostéopathie nourrisson, la grossesse, le drainage Renata França et la santé naturelle — par Hilary Farid, ostéopathe D.O.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => {
              const colors = categoryColors[article.category] || categoryColors.Nourrisson;
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block bg-offwhite rounded-2xl border border-light/60 overflow-hidden hover:border-secondary/40 hover:shadow-lg transition-all"
                >
                  {/* Category stripe */}
                  <div className={`${colors.bg} ${colors.border} border-b px-6 py-3 flex items-center justify-between`}>
                    <span className={`${colors.text} text-xs font-bold uppercase tracking-wider`}>
                      {article.category}
                    </span>
                    <span className="text-graywarm text-xs">{article.readTime} de lecture</span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-graywarm mb-3">{formatDate(article.date)}</p>
                    <h2 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-graywarm text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                      Lire l'article →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-light text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-primary">Une question ? Prenez RDV</h2>
          <p className="mt-3 text-graywarm">Consultations à Sèvres (92310) et Paris 15 (75015).</p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <button type="button" className="trigger-booking-modal bg-[#0596DE] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#047cbd] transition-all">
              Prendre RDV Doctolib
            </button>
            <Link href="/osteopathie" className="inline-flex items-center px-8 py-3 rounded-full font-bold text-primary bg-white border border-light/80 hover:bg-offwhite transition-colors">
              Nos spécialités
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
