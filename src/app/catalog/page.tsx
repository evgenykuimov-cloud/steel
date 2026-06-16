import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Каталог металлоконструкций",
  description: "Каталог популярных металлоконструкций: навесы, ворота, лестницы, ангары и фермы."
};

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="section-kicker">Каталог</p>
          <h1 className="page-title">Готовые решения и изделия под заказ</h1>
          <p className="page-lead">
            Базовая структура каталога уже готова для подключения API, фильтров, цен и CRM.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
