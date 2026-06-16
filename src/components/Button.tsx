import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

const variants = {
  primary:
    "bg-cta text-ink-950 shadow-[0_12px_24px_rgba(255,210,31,0.22)] hover:bg-[#ffe05a]",
  secondary:
    "border border-white/35 bg-white/5 text-white hover:border-white/70 hover:bg-white/10",
  dark: "bg-ink-950 text-white hover:bg-ink-850"
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
