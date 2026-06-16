"use client";

import { FormEvent, useState } from "react";
import { reviews } from "@/data/reviews";
import { Button } from "./Button";

type FormState = {
  name: string;
  phone: string;
  type: string;
  comment: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  type: "",
  comment: ""
};

export function LeadAndReviews() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [message, setMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.name.trim().length < 2) {
      setMessage("Укажите имя, чтобы менеджер мог обратиться к вам.");
      return;
    }

    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setMessage("Укажите корректный телефон для связи.");
      return;
    }

    setMessage("Заявка подготовлена к отправке. Подключите API для приёма заявок.");
    setForm(initialForm);
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lead-panel h-full overflow-hidden rounded-[24px] bg-ink-950 p-6 text-white shadow-dark md:p-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-black leading-tight md:text-3xl">
              Оставьте заявку на расчёт вашего проекта
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/78">
              Ответим в течение 15 минут и подготовим коммерческое предложение бесплатно
            </p>
          </div>

          <form id="lead-form" className="mt-7 grid gap-3" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="sr-only" htmlFor="lead-name">
                Ваше имя
              </label>
              <input
                id="lead-name"
                className="form-field"
                placeholder="Ваше имя"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
              />
              <label className="sr-only" htmlFor="lead-phone">
                Телефон
              </label>
              <input
                id="lead-phone"
                className="form-field"
                placeholder="Телефон"
                inputMode="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
              />
            </div>
            <label className="sr-only" htmlFor="lead-type">
              Тип конструкции
            </label>
            <select
              id="lead-type"
              className="form-field"
              value={form.type}
              onChange={(event) => updateField("type", event.target.value)}
            >
              <option value="">Тип конструкции</option>
              <option value="Навес">Навес</option>
              <option value="Ворота">Ворота</option>
              <option value="Лестница">Лестница</option>
              <option value="Ангар">Ангар</option>
              <option value="Фермы">Фермы</option>
              <option value="Другое изделие">Другое изделие</option>
            </select>
            <label className="sr-only" htmlFor="lead-comment">
              Комментарий
            </label>
            <textarea
              id="lead-comment"
              className="form-field min-h-24 resize-none"
              placeholder="Комментарий"
              value={form.comment}
              onChange={(event) => updateField("comment", event.target.value)}
            />
            <Button type="submit" className="w-full">
              Отправить заявку
            </Button>
            <p className="text-xs leading-5 text-white/58">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
            {message ? (
              <p className="rounded-xl border border-white/15 bg-white/10 p-3 text-sm text-white" role="status">
                {message}
              </p>
            ) : null}
          </form>
        </div>

        <div>
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-black text-gray-950 md:text-3xl">
              Отзывы наших клиентов
            </h2>
            <a className="hidden text-sm font-semibold text-steelblue hover:text-ink-950 md:block" href="/reviews">
              Все отзывы →
            </a>
          </div>
          <div className="grid items-stretch gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="flex h-full min-h-[318px] flex-col rounded-card border border-gray-200 bg-white p-5 shadow-card"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-black text-gray-950">
                      {review.name}, {review.city}
                    </h3>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                  <span className="text-sm text-cta" aria-label={`${review.rating} из 5`}>
                    {"★".repeat(review.rating)}
                  </span>
                </div>
                <p className="mt-4 min-h-[120px] text-sm leading-6 text-gray-600">
                  {review.text}
                </p>
                <div
                  className={`mt-auto h-28 rounded-xl bg-cover bg-center ${review.imageClass}`}
                  role="img"
                  aria-label={`Фото объекта клиента ${review.name}`}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
