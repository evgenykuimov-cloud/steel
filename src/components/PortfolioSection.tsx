import { portfolioItems } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-ink-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Наши работы"
          hrefLabel="Смотреть все работы →"
          href="/portfolio"
          dark
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {portfolioItems.map((item) => (
            <article
              key={item.id}
              className="group relative min-h-[178px] overflow-hidden rounded-card border border-white/10 bg-white/8 shadow-dark"
            >
              <div
                className={`absolute inset-0 bg-cover bg-center transition duration-300 group-hover:scale-105 ${item.imageClass}`}
                role="img"
                aria-label={`Работа: ${item.title}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/15 to-transparent" />
              <h3 className="absolute bottom-4 left-4 right-4 text-sm font-black text-white">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
