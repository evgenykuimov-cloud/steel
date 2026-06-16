import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { SectionTitle } from "./SectionTitle";

export function ProductSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Популярные изделия" hrefLabel="Смотреть все товары →" href="/catalog" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
