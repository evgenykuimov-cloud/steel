import type { Review } from "@/types";

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Алексей",
    city: "г. Истра",
    date: "16.01.2026",
    rating: 5,
    text: "Заказывали навес и откатные ворота. Всё сделали в срок, качество отличное, документы и смета понятные.",
    imageClass: "bg-review-canopy"
  },
  {
    id: "r2",
    name: "Мария",
    city: "г. Подольск",
    date: "22.02.2026",
    rating: 5,
    text: "Лестницу получили именно такой, как мы хотели. Спасибо за профессиональный замер и аккуратный монтаж.",
    imageClass: "bg-review-stairs"
  },
  {
    id: "r3",
    name: "Дмитрий",
    city: "г. Одинцово",
    date: "08.04.2026",
    rating: 5,
    text: "Построили ангар 10×20 м под склад. Работы довели до конца, бригада была на связи каждый день.",
    imageClass: "bg-review-hangar"
  }
];
