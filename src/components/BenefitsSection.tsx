import { benefits } from "@/data/benefits";
import { Icon } from "./Icon";

export function BenefitsSection() {
  return (
    <section className="border-b border-gray-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {benefits.map((benefit) => (
          <article key={benefit.id} className="flex gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cta/45 bg-cta/10 text-[#D2A800]">
              <Icon name={benefit.icon} className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-sm font-black text-gray-950">{benefit.title}</h3>
              <p className="mt-1 text-xs leading-5 text-gray-600">{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
