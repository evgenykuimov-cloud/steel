type IconProps = {
  name: string;
  className?: string;
};

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  switch (name) {
    case "logo":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2 3.4 6.9v10.2L12 22l8.6-4.9V6.9L12 2Zm0 2.9 5.4 3.1-5.4 3.1L6.6 8 12 4.9Zm-6 5.3 4.8 2.8v5.9L6 16.1v-5.9Zm7.2 8.7V13l4.8-2.8v5.9l-4.8 2.8Z" />
        </svg>
      );
    case "roof":
      return (
        <svg {...common}>
          <path d="M3 11 12 5l9 6" />
          <path d="M5 10.5V20h14v-9.5" />
          <path d="M8 20v-6h8v6" />
        </svg>
      );
    case "gate":
      return (
        <svg {...common}>
          <path d="M4 7h16v13H4z" />
          <path d="M8 7v13M12 7v13M16 7v13" />
          <path d="M3 20h18" />
        </svg>
      );
    case "stairs":
      return (
        <svg {...common}>
          <path d="M4 19h5v-4h5v-4h6" />
          <path d="M4 15h5M9 11h5M14 7h6" />
        </svg>
      );
    case "hangar":
      return (
        <svg {...common}>
          <path d="M3 20V9l9-5 9 5v11" />
          <path d="M7 20v-8h10v8" />
          <path d="M7 12h10M9 16h6" />
        </svg>
      );
    case "beam":
      return (
        <svg {...common}>
          <path d="M3 7h18M3 17h18" />
          <path d="m5 7 4 10 4-10 4 10 2-5" />
        </svg>
      );
    case "furniture":
      return (
        <svg {...common}>
          <path d="M5 10h14v6H5z" />
          <path d="M7 16v4M17 16v4M8 10V6h8v4" />
        </svg>
      );
    case "factory":
      return (
        <svg {...common}>
          <path d="M3 21V9l6 4V9l6 4V7h6v14H3Z" />
          <path d="M7 17h2M12 17h2M17 17h2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4.3 2.8 8.2 7 10 4.2-1.8 7-5.7 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "steel":
      return (
        <svg {...common}>
          <path d="M4 7h16v4H4zM6 11h12v6H6z" />
          <path d="M8 17v3M16 17v3" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v5h4M9 13h6M9 17h6" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
    case "request":
      return (
        <svg {...common}>
          <path d="M12 3v8" />
          <circle cx="12" cy="15" r="6" />
          <path d="M9.5 15H12l2-2" />
        </svg>
      );
    case "measure":
      return (
        <svg {...common}>
          <path d="m4 15 8-8 8 8-8 6-8-6Z" />
          <path d="M8 14h8M10 11h4" />
        </svg>
      );
    case "contract":
      return (
        <svg {...common}>
          <path d="M6 3h9l3 3v15H6z" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      );
    case "production":
      return (
        <svg {...common}>
          <path d="M4 19h16M6 19V9l5 4V9l5 4V7h4v12" />
        </svg>
      );
    case "mount":
      return (
        <svg {...common}>
          <path d="M4 16h16M6 16V9h12v7" />
          <path d="m8 9 4-4 4 4" />
          <path d="M9 19h6" />
        </svg>
      );
    case "handover":
      return (
        <svg {...common}>
          <path d="M4 15h5l2 2h4l5-5" />
          <path d="M4 20h16" />
          <path d="M7 10V5h10v7" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M5 20 6.2 16.5A7.7 7.7 0 1 1 9 19.1L5 20Z" />
          <path d="M9.4 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.5 1.2c.1.3 0 .5-.2.7l-.3.4c.5.9 1.2 1.6 2.1 2.1l.4-.3c.2-.2.4-.3.7-.2l1.2.5c.3.1.4.3.4.6v.4c0 .4-.2.6-.5.8-.7.3-2.1.1-3.6-.8-1.6-.9-2.8-2.2-3.4-3.6-.5-1.1-.4-1.9 0-2.4Z" />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common}>
          <path d="m21 5-3.2 15-5.1-4-3 3 .7-4.7L20 5.8 8.1 13.1 3 11.4 21 5Z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
  }
}
