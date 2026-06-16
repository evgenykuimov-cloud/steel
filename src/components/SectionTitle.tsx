type SectionTitleProps = {
  title: string;
  hrefLabel?: string;
  href?: string;
  dark?: boolean;
};

export function SectionTitle({ title, hrefLabel, href = "#", dark }: SectionTitleProps) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4">
      <h2 className={`text-2xl font-black tracking-normal md:text-3xl ${dark ? "text-white" : "text-gray-950"}`}>
        {title}
      </h2>
      {hrefLabel ? (
        <a
          className={`hidden text-sm font-semibold transition md:inline-flex ${dark ? "text-white/78 hover:text-cta" : "text-steelblue hover:text-ink-950"}`}
          href={href}
        >
          {hrefLabel}
        </a>
      ) : null}
    </div>
  );
}
