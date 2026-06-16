import { workSteps } from "@/data/benefits";
import { Icon } from "./Icon";

export function WorkSteps() {
  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-7 text-2xl font-black text-gray-950 md:text-3xl">Как мы работаем</h2>
        <div className="grid gap-4 lg:grid-cols-6">
          {workSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <article className="min-h-[156px] rounded-card border border-gray-200 bg-white p-5 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-card">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-ink-900">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-black text-gray-950">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-600">{step.description}</p>
              </article>
              {index < workSteps.length - 1 ? (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-xl font-black text-gray-400 lg:block">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
