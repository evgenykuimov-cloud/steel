import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://metal-construct.example"),
  title: {
    default: "Сварочные работы и металлоконструкции под ключ",
    template: "%s | Сварочные работы и металлоконструкции"
  },
  description:
    "Изготовление и монтаж металлоконструкций: навесы, ворота, лестницы, ангары, фермы и изделия по чертежам. Расчёт стоимости и заявка онлайн.",
  openGraph: {
    title: "Сварочные работы и металлоконструкции под ключ",
    description:
      "Изготовление и монтаж металлоконструкций: навесы, ворота, лестницы, ангары, фермы и изделия по чертежам.",
    locale: "ru_RU",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
