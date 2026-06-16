import { Button } from "./Button";
import { Icon } from "./Icon";

const advantages = [
  { icon: "shield", title: "Гарантия до 5 лет" },
  { icon: "factory", title: "Собственное производство" },
  { icon: "clock", title: "Опыт работы более 10 лет" }
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-28 text-white md:pt-32">
      <div
        className="hero-photo absolute inset-0"
        role="img"
        aria-label="Металлический навес с подсветкой и автомобилями"
      />
      <div className="hero-shade absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/68 via-ink-950/5 to-ink-950/70" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-14 pt-10 sm:px-6 md:grid-cols-[0.92fr_1.08fr] md:gap-10 md:pb-24 lg:grid-cols-[minmax(0,850px)_1fr] lg:px-8">
        <div className="min-w-0 max-w-[850px]">
          <h1
            className="hero-title font-black uppercase tracking-normal"
            aria-label="Надёжные металлоконструкции под любые задачи"
          >
            <span className="hidden sm:inline" aria-hidden="true">
              Надёжные
              <br />
              металлоконструкции
              <br />
              <span className="text-cta lg:whitespace-nowrap">под любые задачи</span>
            </span>
            <span className="sm:hidden" aria-hidden="true">
              Надёжные
              <br />
              металло-
              <br />
              конструкции
              <br />
              <span className="text-cta">под любые задачи</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/82 sm:text-base">
            Проектируем, изготавливаем и монтируем металлоконструкции любой сложности
            “под ключ” по Москве и Московской области
          </p>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/8 text-cta">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold leading-tight text-white/90">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
            <Button href="/#lead-form" className="w-full sm:w-auto">
              Рассчитать проект
            </Button>
            <Button href="#portfolio" variant="secondary" className="w-full sm:w-auto">
              Смотреть портфолио
            </Button>
          </div>
        </div>

        <div className="relative min-h-[230px] sm:min-h-[300px] md:min-h-[430px]">
          <div
            className="hero-mobile-photo absolute inset-x-0 bottom-0 mx-auto h-full max-w-[560px] rounded-[24px] border border-white/18 shadow-dark md:hidden"
            role="img"
            aria-label="Навес для двух автомобилей вечером"
          />
        </div>
      </div>
    </section>
  );
}
