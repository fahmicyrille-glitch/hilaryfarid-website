import Link from "next/link";
import { articles, getArticleBySlug, getAllSlugs } from "@/data/articles.en";
import { notFound } from "next/navigation";
import { hreflangForEn } from "@/config/i18n";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Hilary Farid`,
    description: article.description,
    alternates: hreflangForEn(`/en/blog/${params.slug}`) ?? {
      canonical: `https://www.hilaryfarid-osteopathe.fr/en/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.hilaryfarid-osteopathe.fr/en/blog/${article.slug}`,
      images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
      type: "article",
      publishedTime: article.date,
    },
  };
}

const categoryColors = {
  Infant: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
  Drainage: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-100" },
  Pregnancy: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-100" },
  Sport: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-100" },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function renderSection(section, i) {
  switch (section.type) {
    case "intro":
      return (
        <p key={i} className="text-xl text-graywarm leading-relaxed border-l-4 border-secondary pl-5 py-1 my-8 font-medium">
          {section.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-4">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl font-bold text-primary mt-8 mb-3">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-graywarm leading-relaxed my-4">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="my-4 space-y-2">
          {section.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-graywarm">
              <span className="text-secondary mt-1 shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div key={i} className="my-8 bg-primary/5 rounded-2xl p-6 border border-primary/10 flex items-start gap-4">
          <span className="text-3xl shrink-0">{section.icon}</span>
          <div>
            {section.title && <p className="font-bold text-primary mb-2">{section.title}</p>}
            <p className="text-graywarm leading-relaxed">{section.text}</p>
          </div>
        </div>
      );
    case "faq":
      return (
        <div key={i} className="my-12">
          <h2 className="text-2xl font-bold text-primary mb-6">FAQ</h2>
          <div className="space-y-4">
            {section.items.map(({ q, a }, j) => (
              <details key={j} className="group bg-offwhite rounded-2xl border border-light/60 overflow-hidden">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-primary flex justify-between items-center gap-4 list-none">
                  <span>{q}</span>
                  <span className="shrink-0 text-secondary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-graywarm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function ArticleEnPage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const colors = categoryColors[article.category] || categoryColors.Infant;
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const SITE = "https://www.hilaryfarid-osteopathe.fr";
  const articleUrl = `${SITE}/en/blog/${article.slug}`;
  const articleImage = article.image
    ? `${SITE}${article.image}`
    : `${SITE}/og-image.webp`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/en/blog` },
        { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      image: articleImage,
      datePublished: article.date,
      inLanguage: "en",
      author: {
        "@type": "Person",
        "@id": `${SITE}/#hilary-farid`,
        name: "Hilary Farid",
        jobTitle: "Osteopath D.O.",
      },
      publisher: {
        "@type": "Organization",
        name: "Hilary Farid – Osteopath D.O.",
        url: SITE,
        logo: { "@type": "ImageObject", url: `${SITE}/hilary-logo.svg` },
      },
      mainEntityOfPage: articleUrl,
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-offwhite border-b border-light/50 px-6 py-3">
        <div className="max-w-3xl mx-auto text-sm text-graywarm flex items-center gap-2 flex-wrap">
          <Link href="/en" className="hover:text-primary transition-colors">Home</Link>
          <span className="opacity-40">/</span>
          <Link href="/en/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span className="opacity-40">/</span>
          <span className="text-primary font-medium line-clamp-1">{article.title}</span>
        </div>
      </nav>

      {/* Article header */}
      <header className="bg-offwhite py-12 px-6 border-b border-light/50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className={`${colors.bg} ${colors.text} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${colors.border}`}>
              {article.category}
            </span>
            <span className="text-graywarm text-sm">{article.readTime} read</span>
            <span className="text-graywarm text-sm">·</span>
            <time dateTime={article.date} className="text-graywarm text-sm">{formatDate(article.date)}</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-graywarm text-lg leading-relaxed">{article.excerpt}</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">HF</div>
            <div>
              <p className="text-sm font-semibold text-primary">Hilary Farid</p>
              <p className="text-xs text-graywarm">Osteopath D.O. — Sèvres & Paris 15</p>
            </div>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose-custom">
          {article.sections.map((section, i) => renderSection(section, i))}
        </div>
      </article>

      {/* CTA box */}
      <section className="py-12 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary">Book an Appointment</h2>
          <p className="mt-3 text-graywarm">Consultations in <strong>Sèvres (92310)</strong> and <strong>Paris 15 (75015)</strong>.</p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <button type="button" className="trigger-booking-modal bg-doctolib text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-doctolib-dark transition-all">
              Book via Doctolib
            </button>
            <Link href="/en/tarifs" className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-primary bg-white border border-light/80 hover:bg-offwhite transition-colors">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-12 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-primary mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((a) => {
                const c = categoryColors[a.category] || categoryColors.Infant;
                return (
                  <Link key={a.slug} href={`/en/blog/${a.slug}`} className="group block bg-offwhite rounded-2xl border border-light/60 overflow-hidden hover:border-secondary/40 hover:shadow-md transition-all">
                    <div className={`${c.bg} ${c.border} border-b px-4 py-2`}>
                      <span className={`${c.text} text-xs font-bold uppercase tracking-wider`}>{a.category}</span>
                    </div>
                    <div className="p-5">
                      <p className="font-bold text-primary text-sm group-hover:text-secondary transition-colors leading-snug">{a.title}</p>
                      <span className="mt-3 inline-flex items-center text-xs font-semibold text-secondary">Read →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div className="py-8 px-6 bg-white border-t border-light/40 text-center">
        <Link href="/en/blog" className="text-secondary font-semibold hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
