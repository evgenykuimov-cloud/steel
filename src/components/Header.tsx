"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

const navItems = [
  { href: "/catalog", label: "Каталог" },
  { href: "/services", label: "Услуги" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/about", label: "О компании" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#061523]/95 text-white shadow-[0_12px_32px_rgba(6,21,35,0.28)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:gap-6 lg:px-8">
        <Link
          className="flex min-w-0 shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-black/90 px-2.5 py-2 shadow-[0_0_26px_rgba(255,255,255,0.10)]"
          href="/"
          aria-label="На главную"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center">
            <Icon name="logo" className="h-11 w-11 drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]" />
          </span>
          <span className="grid max-w-[165px] leading-tight sm:max-w-[220px]">
            <span className="text-xs font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.24)] sm:text-sm md:text-base">
              Сварочные работы и металлоконструкции
            </span>
            <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.08em] text-white/66 drop-shadow-[0_0_7px_rgba(255,255,255,0.22)] sm:text-[10px]">
              Проектирование, изготовление, монтаж
            </span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 text-sm font-semibold text-white/88 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} className="whitespace-nowrap transition hover:text-cta" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a className="min-w-[150px] text-right" href="tel:+74951504210">
            <span className="block whitespace-nowrap text-sm font-black">+7 (495) 150-42-10</span>
            <span className="block whitespace-nowrap text-xs text-white/64">Ежедневно с 9:00 до 20:00</span>
          </a>
          <Button href="/#lead-form" className="min-h-10 px-4 py-2 text-xs">
            Оставить заявку
          </Button>
          <div className="flex gap-2">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#24D366] text-white transition hover:scale-105"
              href="https://wa.me/74951504210"
              aria-label="Написать в WhatsApp"
            />
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#28A8EA] text-white transition hover:scale-105"
              href="https://t.me/"
              aria-label="Написать в Telegram"
            >
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4B7BFF] text-white transition hover:scale-105"
              href="https://max.ru/"
              aria-label="Написать в MAX"
            />
          </div>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white lg:hidden"
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink-950 px-4 pb-5 pt-2 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 text-sm font-bold">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="rounded-xl px-3 py-3 text-white/90 transition hover:bg-white/8 hover:text-cta"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-3">
            <a className="font-black" href="tel:+74951504210">
              +7 (495) 150-42-10
            </a>
            <Button href="/#lead-form" onClick={() => setOpen(false)}>
              Оставить заявку
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
