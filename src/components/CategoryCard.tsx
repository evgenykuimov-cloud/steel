import type { Category } from "@/types";
import { Icon } from "./Icon";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <a
      className="group grid min-h-[118px] grid-cols-[1fr_92px] overflow-hidden rounded-card border border-gray-200 bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:border-cta"
      href={`/catalog?category=${category.slug}`}
    >
      <span className="flex flex-col justify-between gap-3 p-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-ink-900 transition group-hover:bg-cta">
          <Icon name={category.icon} className="h-5 w-5" />
        </span>
        <span className="text-sm font-extrabold leading-tight text-gray-950">
          {category.title}
        </span>
      </span>
      <span
        className={`m-2 rounded-xl bg-cover bg-center ${category.imageClass}`}
        role="img"
        aria-label={`Миниатюра категории ${category.title}`}
      />
    </a>
  );
}
