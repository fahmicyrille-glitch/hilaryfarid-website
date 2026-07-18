import Link from "next/link";
import { articles } from "@/data/articles.en";

const categoryColors = {
  Infant: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
  Drainage: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-100" },
  Pregnancy: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-100" },
  Sport: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-100" },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogEnPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Hilary Farid Blog — Osteopathy & Renata França Drainage",
            url: "https://www.hilaryfarid-osteopathe.fr/en/blog",
            description: "Advice and articles on infant osteopathy, pregnancy and Renata França drainage.",
            inLanguage: "en",
            author: {
              "@type": "Person",
              "@id": "https://www.hilaryfarid-osteopathe.fr/#hilary-farid",
              name: "Hilary Farid",
            },
          })
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-offwhite border-b border-light/50 px-6 py-3">
        <div className="max-w-5xl mx-auto text-sm text-graywarm flex items-center gap-2 flex-wrap">
          <Link href="/en" className="hover:text-primary transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <span className="text-primary font-medium">Blog</span>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-offwhite py-16 px-6 border-b border-light/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-secondary mb-3 font-semibold">
            Advice & Information
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Blog
          </h1>
          <p className="mt-5 text-lg text-graywarm max-w-2xl mx-auto leading-relaxed">
            Articles and advice on infant osteopathy, pregnancy, Renata França drainage and natural health — by Hilary Farid, Osteopath D.O.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => {
              const colors = categoryColors[article.category] || categoryColors.Infant;
              return (
                <Link
                  key={article.slug}
                  href={`/en/blog/${article.slug}`}
                  className="group block bg-offwhite rounded-2xl border border-light/60 overflow-hidden hover:border-secondary/40 hover:shadow-lg transition-all"
                >
                  {/* Category stripe */}
                  <div className={`${colors.bg} ${colors.border} border-b px-6 py-3 flex items-center justify-between`}>
                    <span className={`${colors.text} text-xs font-bold uppercase tracking-wider`}>
                      {article.category}
                    </span>
                    <span className="text-graywarm text-xs">{article.readTime} read</span>
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
                      Read article →
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
          <h2 className="text-2xl font-bold text-primary">Have a question? Book an appointment</h2>
          <p className="mt-3 text-graywarm">Consultations in Sèvres (92310) and Paris 15 (75015).</p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <button type="button" className="trigger-booking-modal bg-doctolib text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-doctolib-dark transition-all">
              Book via Doctolib
            </button>
            <Link href="/en/osteopathie" className="inline-flex items-center px-8 py-3 rounded-full font-bold text-primary bg-white border border-light/80 hover:bg-offwhite transition-colors">
              Our Specialties
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
