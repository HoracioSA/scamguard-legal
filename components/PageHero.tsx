/**
 * Same dark gradient + drifting blobs treatment as the home page's hero,
 * scaled down for inner pages (Terms/Privacy/Support) so the whole site
 * shares one consistent visual identity instead of the home page looking
 * like a different product from everything else.
 */
export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="hero hero-page">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
