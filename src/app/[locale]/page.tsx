/**
 * Home Page v3 - 주인장 B2B Corporate Design (i18n)
 *
 * @description Hero, About, Stats, Portfolio Preview, CTA sections
 */

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { portfolioLocations } from "@/lib/data/portfolio";

const serviceIcons = [
  "ri-line-chart-fill",
  "ri-building-2-fill",
  "ri-handshake-fill",
];

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations();

  const services = serviceIcons.map((icon, index) => ({
    icon,
    title: t(`about.services.${index}.title`),
    description: t(`about.services.${index}.description`),
    cta: t(`about.services.${index}.cta`),
  }));

  const stats = [
    { value: t("stats.facilitiesValue"), label: t("stats.facilities"), unit: t("stats.facilitiesUnit") },
    { value: t("stats.lodgingValue"), label: t("stats.lodging"), unit: t("stats.lodgingUnit") },
    { value: t("stats.fnbValue"), label: t("stats.fnb"), unit: t("stats.fnbUnit") },
    { value: t("stats.investmentValue"), label: t("stats.investment"), unit: t("stats.investmentUnit") },
  ];

  // Get 4 featured locations for preview
  const featuredLocations = portfolioLocations.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[900px] flex items-center justify-center pt-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <span className="text-[#C5A47E] uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">
            (주)인장매니지먼트
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight tracking-wide">
            {t("hero.title")}
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 mb-4 font-light">
            {t("hero.subtitle")}
          </p>
          <p className="text-lg opacity-70 mb-10 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-[#C5A47E] text-white px-10 py-4 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              {t("hero.ctaPartnership")}
            </Link>
            <Link
              href="/reference"
              className="border border-white text-white px-10 py-4 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              {t("hero.ctaReference")}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[#C5A47E] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              {t("about.subtitle")}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("about.description")}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#fcfaf8] p-10 rounded-lg border border-gray-100 mb-16">
            <p className="text-lg text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
              {t("about.vision")}
            </p>
          </div>

          {/* 3 Core Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-8 border border-gray-100 group hover:border-[#C5A47E] hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C5A47E] transition-colors">
                  <i
                    className={`${service.icon} text-2xl text-white`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={index === 0 ? "/contact" : index === 1 ? "/brand" : "/partnership"}
                  className="text-[#C5A47E] text-sm font-semibold uppercase tracking-wider hover:text-[#8B0000] transition-colors inline-flex items-center gap-2"
                >
                  {service.cta}
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#8B0000] text-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <h3 className="text-5xl md:text-6xl font-bold text-[#C5A47E] mb-2">
                  {stat.value}
                  <span className="text-2xl ml-1">{stat.unit}</span>
                </h3>
                <p className="text-sm uppercase tracking-wider opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-32 bg-[#fcfaf8]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div>
              <span className="text-[#C5A47E] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
                {t("portfolio.subtitle")}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
                {t("portfolio.title")}
              </h2>
              <p className="text-slate-600 mt-4">{t("portfolio.locations")}</p>
            </div>
            <Link
              href="/reference"
              className="mt-6 md:mt-0 text-[#C5A47E] font-semibold uppercase tracking-wider hover:text-[#8B0000] transition-colors inline-flex items-center gap-2"
            >
              {t("portfolio.viewAll")}
              <i className="ri-arrow-right-line" />
            </Link>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLocations.map((location) => (
              <div
                key={location.id}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={location.thumbnail || `https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop`}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-[#C5A47E] text-xs uppercase tracking-wider">
                    {location.region}
                  </span>
                  <h3 className="text-lg font-bold mt-1">{location.name}</h3>
                  <p className="text-sm opacity-80 mt-1 line-clamp-1">
                    {location.features.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A47E] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B0000] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-[800px] mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg opacity-80 mb-10 leading-relaxed">
            {t("cta.description")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5A47E] text-white px-12 py-5 uppercase text-sm tracking-widest hover:bg-white hover:text-slate-900 transition-colors"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
