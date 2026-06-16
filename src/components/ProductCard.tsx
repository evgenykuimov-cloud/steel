import type { Product } from "@/types";
import { Button } from "./Button";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const price = product.price.replace(/\s/g, "\u00A0");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-gray-200 bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`h-44 bg-cover bg-center transition duration-300 group-hover:scale-[1.03] ${product.imageClass}`}
        role="img"
        aria-label={`Изображение изделия ${product.title}`}
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="min-h-[52px] text-lg font-black leading-snug text-gray-950">
          {product.title}
        </h3>
        <ul className="mt-3 min-h-[74px] space-y-1.5 text-sm leading-5 text-gray-600">
          {product.characteristics.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          <p className="whitespace-nowrap text-lg font-black text-ink-950">{price}</p>
          <Button
            href={`/catalog/${product.slug}`}
            className="mt-3 w-full min-h-9 rounded-lg px-4 py-2 text-xs"
          >
            Подробнее
          </Button>
        </div>
        <a
          className="mt-3 text-sm font-bold text-steelblue transition hover:text-ink-950"
          href={`#lead-form?product=${product.id}`}
        >
          Оставить заявку
        </a>
      </div>
    </article>
  );
}
