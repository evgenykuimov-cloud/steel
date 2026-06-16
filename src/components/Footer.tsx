import Link from "next/link";
import { Icon } from "./Icon";

const catalog = ["Навесы и козырьки", "Ворота и калитки", "Лестницы и перила", "Ангары и каркасы", "Фермы и балки"];
const company = ["О компании", "Наше производство", "Портфолио", "Отзывы", "Контакты"];

export function Footer() {
  return (
    <footer className="bg-ink-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr_1.1fr]">
        <div>
          <Link className="flex items-center gap-3" href="/">
            <span className="flex h-12 w-12 items-center justify-center">
              <Icon name="logo" className="h-12 w-12" />
            </span>
            <span className="text-sm font-black leading-tight">
              Сварочные работы и металлоконструкции
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/66">
            Надёжные решения из металла для дома, бизнеса и производства.
          </p>
          <div className="mt-5 flex gap-2">
            <a className="social-link bg-[#24D366]" href="https://wa.me/74951504210" aria-label="WhatsApp" />
            <a className="social-link bg-[#28A8EA]" href="https://t.me/" aria-label="Telegram" />
            <a
              className="social-link bg-[#4B7BFF]"
              href="https://max.ru/"
              aria-label="MAX"
            />
          </div>
        </div>

        <div>
          <h2 className="footer-title">Каталог</h2>
          <ul className="footer-list">
            {catalog.map((item) => (
              <li key={item}>
                <Link href="/catalog">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Компания</h2>
          <ul className="footer-list">
            {company.map((item) => (
              <li key={item}>
                <Link href="/about">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Контакты</h2>
          <ul className="footer-list">
            <li>
              <a href="tel:+74951504210">+7 (495) 150-42-10</a>
            </li>
            <li>
              <a href="mailto:info@metal-construct.ru">info@metal-construct.ru</a>
            </li>
            <li>Московская обл., г. Балашиха, ул. Энтузиастов, 5А</li>
            <li>Ежедневно с 9:00 до 20:00</li>
          </ul>
        </div>

        <div className="rounded-card border border-cta/30 bg-white/5 p-5">
          <div className="flex gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta text-ink-950">
              <Icon name="truck" className="h-6 w-6" />
            </span>
            <p className="text-sm font-black leading-6">
              Бесплатный выезд на замер и консультация по Москве и МО
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/52 md:flex-row">
        <p>© 2026 Сварочные работы и металлоконструкции. Все права защищены.</p>
        <Link href="/privacy" className="transition hover:text-cta">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
}
