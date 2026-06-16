import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "canopies",
    title: "Навесы и козырьки",
    slug: "navesy-i-kozyrki",
    icon: "roof",
    imageClass: "bg-canopy"
  },
  {
    id: "gates",
    title: "Ворота и калитки",
    slug: "vorota-i-kalitki",
    icon: "gate",
    imageClass: "bg-gate"
  },
  {
    id: "stairs",
    title: "Лестницы и перила",
    slug: "lestnicy-i-perila",
    icon: "stairs",
    imageClass: "bg-stairs"
  },
  {
    id: "hangars",
    title: "Ангары и каркасы",
    slug: "angary-i-karkasy",
    icon: "hangar",
    imageClass: "bg-hangar"
  },
  {
    id: "beams",
    title: "Фермы и балки",
    slug: "fermy-i-balki",
    icon: "beam",
    imageClass: "bg-beam"
  },
  {
    id: "furniture",
    title: "Мебель и изделия из металла",
    slug: "mebel-i-izdeliya",
    icon: "furniture",
    imageClass: "bg-furniture"
  }
];
