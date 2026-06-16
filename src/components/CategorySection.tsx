import { categories } from "@/data/categories";
import { CategoryCard } from "./CategoryCard";

export function CategorySection() {
  return (
    <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
