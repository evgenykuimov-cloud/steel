import type { Benefit, WorkStep } from "@/types";

export const benefits: Benefit[] = [
  {
    id: "production",
    title: "Собственное производство",
    description: "Контроль качества на каждом этапе: от закупки металла до покраски.",
    icon: "factory"
  },
  {
    id: "timing",
    title: "Честные сроки",
    description: "Фиксируем этапы в договоре и заранее предупреждаем о рисках.",
    icon: "clock"
  },
  {
    id: "warranty",
    title: "Гарантия до 5 лет",
    description: "Предоставляем гарантию на металл, сварные швы и монтаж.",
    icon: "shield"
  },
  {
    id: "materials",
    title: "Прочные материалы",
    description: "Используем сертифицированный металл и проверенные покрытия.",
    icon: "steel"
  },
  {
    id: "contract",
    title: "Работаем по договору",
    description: "Фиксируем стоимость, сроки, комплектацию и условия оплаты.",
    icon: "doc"
  },
  {
    id: "delivery",
    title: "Доставка и монтаж",
    description: "Доставляем конструкции на объект и выполняем монтаж под ключ.",
    icon: "truck"
  }
];

export const workSteps: WorkStep[] = [
  {
    id: "request",
    title: "Заявка",
    description: "Оставляете заявку на сайте или по телефону.",
    icon: "request"
  },
  {
    id: "measure",
    title: "Замер и расчёт",
    description: "Выезжаем на объект, делаем замеры и расчёт.",
    icon: "measure"
  },
  {
    id: "contract",
    title: "Договор",
    description: "Согласовываем проект, сроки и стоимость.",
    icon: "contract"
  },
  {
    id: "production",
    title: "Изготовление",
    description: "Производим конструкцию на собственном производстве.",
    icon: "production"
  },
  {
    id: "mount",
    title: "Доставка и монтаж",
    description: "Доставляем и монтируем конструкцию под ключ.",
    icon: "mount"
  },
  {
    id: "handover",
    title: "Сдача объекта",
    description: "Вы принимаете работу и получаете гарантию.",
    icon: "handover"
  }
];
