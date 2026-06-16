import { Button } from "./Button";
import { Icon } from "./Icon";

const advantages = [
  { icon: "shield", title: "Гарантия до 5 лет" },
  { icon: "factory", title: "Собственное производство" },
  { icon: "clock", title: "Опыт работы более 10 лет" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-28 text-white md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_20%,rgba(11,77,140,0.55),transparent_34%),linear-gradient(90deg,#061523_0%,rgba(6,21,35,0.94)_36%,rgba(6,21,35,0.55)_63%,rgba(6,21,35,0.85)_100%)]" />
      <div
        className="hero-visual absolute inset-y-0 right-0 hidden w-[68%] bg-cover bg-center opacity-80 md:block"
        role="img"
        aria-label="Металлический навес с подсветкой и автомобилями"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-ink-950/45" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-[0.92fr_1.08fr] md:pb-24 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-normal sm:text-5xl lg:text-6xl">
            Надёжные
            <br />
            металлоконструкции
            <br />
            <span className="text-cta">под любые задачи</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/82">
            Проектируем, изготавливаем и монтируем металлоконструкции любой сложности
            “под ключ” по Москве и Московской области
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/8 text-cta">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold leading-tight text-white/90">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#lead-form">Рассчитать проект</Button>
            <Button href="#portfolio" variant="secondary">
              Смотреть портфолио
            </Button>
          </div>
        </div>

        <div className="relative min-h-[300px] md:min-h-[430px]">
          <div className="hero-card absolute bottom-0 right-0 h-[88%] w-full rounded-[26px] border border-white/14 bg-white/8 shadow-dark backdrop-blur-[1px] md:hidden" />
        </div>
      </div>
    </section>
  );
}
