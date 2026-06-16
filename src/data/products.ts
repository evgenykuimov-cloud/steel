import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "p-canopy-2cars",
    slug: "naves-dlya-2-avto",
    title: "Навес для 2 авто",
    price: "от 110 000 ₽",
    imageClass: "bg-product-canopy",
    characteristics: [
      "Размер: 6×6 м",
      "Профильная труба 80×80 мм",
      "Поликарбонат 8 мм"
    ]
  },
  {
    id: "p-sliding-gate",
    slug: "otkatnye-vorota",
    title: "Откатные ворота",
    price: "от 85 000 ₽",
    imageClass: "bg-product-gate",
    characteristics: [
      "Ширина: до 5 м",
      "Профлист / евроштакетник",
      "Автоматика в комплекте"
    ]
  },
  {
    id: "p-stairs",
    slug: "lestnica-v-chastnyy-dom",
    title: "Лестница в частный дом",
    price: "от 65 000 ₽",
    imageClass: "bg-product-stairs",
    characteristics: [
      "Металл: сталь",
      "Отделка: под заказ",
      "Покраска порошковая"
    ]
  },
  {
    id: "p-hangar",
    slug: "angar-10x20-m",
    title: "Ангар 10×20 м",
    price: "от 650 000 ₽",
    imageClass: "bg-product-hangar",
    characteristics: [
      "Каркас из профильной трубы",
      "Покрытие: профлист",
      "Монтаж включён"
    ]
  },
  {
    id: "p-trusses",
    slug: "fermy-dlya-perekrytiya",
    title: "Фермы для перекрытия",
    price: "от 120 000 ₽",
    imageClass: "bg-product-beam",
    characteristics: ["Пролёт: до 24 м", "Металл: сталь", "Покраска: грунт"]
  }
];

export const findProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
