import { Footer } from "./Footer";
import { Header } from "./Header";

type SimplePageProps = {
  kicker: string;
  title: string;
  lead: string;
};

export function SimplePage({ kicker, title, lead }: SimplePageProps) {
  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="section-kicker">{kicker}</p>
          <h1 className="page-title">{title}</h1>
          <p className="page-lead">{lead}</p>
          <div className="mt-10 rounded-[24px] border border-gray-200 bg-white p-8 shadow-card">
            <h2 className="text-xl font-black text-gray-950">Раздел готов к развитию</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Структура маршрута создана на App Router. Сюда можно подключить API, CMS,
              каталог, CRM-данные и отдельные коммерческие сценарии без переделки главной страницы.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
