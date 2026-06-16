import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { findProductBySlug, products } from "@/data/products";

type ProductPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = findProductBySlug(params.slug);

  if (!product) {
    return { title: "Товар не найден" };
  }

  return {
    title: product.title,
    description: `${product.title}: ${product.price}. Изготовление, доставка и монтаж металлоконструкций под ключ.`
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = findProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="section-kicker">Карточка товара</p>
            <h1 className="page-title">{product.title}</h1>
            <p className="page-lead">
              Карточка подготовлена под будущие цены, комплектации, калькулятор и заявки из CRM.
            </p>
            <ul className="mt-8 grid gap-3 text-gray-700">
              {product.characteristics.map((item) => (
                <li key={item} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-3xl font-black text-ink-950">{product.price}</p>
            <Button href="/#lead-form" className="mt-6">
              Оставить заявку
            </Button>
          </div>
          <div
            className={`min-h-[360px] rounded-[24px] bg-cover bg-center shadow-card ${product.imageClass}`}
            role="img"
            aria-label={`Изображение товара ${product.title}`}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
