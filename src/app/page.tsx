import type { Metadata } from "next";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CategorySection } from "@/components/CategorySection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadAndReviews } from "@/components/LeadAndReviews";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProductSection } from "@/components/ProductSection";
import { WorkSteps } from "@/components/WorkSteps";

export const metadata: Metadata = {
  title: "Сварочные работы и металлоконструкции под ключ",
  description:
    "Изготовление и монтаж металлоконструкций: навесы, ворота, лестницы, ангары, фермы и изделия по чертежам. Расчёт стоимости и заявка онлайн.",
  openGraph: {
    title: "Сварочные работы и металлоконструкции под ключ",
    description:
      "Изготовление и монтаж металлоконструкций: навесы, ворота, лестницы, ангары, фермы и изделия по чертежам. Расчёт стоимости и заявка онлайн."
  }
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <ProductSection />
        <PortfolioSection />
        <BenefitsSection />
        <WorkSteps />
        <LeadAndReviews />
      </main>
      <Footer />
    </>
  );
}
