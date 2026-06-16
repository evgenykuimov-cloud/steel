import { Fragment } from "react";
import { workSteps } from "@/data/benefits";
import { Icon } from "./Icon";

export function WorkSteps() {
  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-7 text-2xl font-black text-gray-950 md:text-3xl">Как мы работаем</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:flex lg:items-stretch lg:gap-0">
          {workSteps.map((step, index) => (
            <Fragment key={step.id}>
              <article className="min-h-[156px] rounded-card border border-gray-200 bg-white p-5 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-card lg:flex lg:flex-1 lg:basis-0 lg:flex-col lg:items-center lg:justify-start">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-ink-900">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-black text-gray-950">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-600">{step.description}</p>
              </article>
              {index < workSteps.length - 1 ? (
                <span className="hidden w-8 shrink-0 items-center justify-center text-xl font-black text-gray-400 lg:flex">
                  →
                </span>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
