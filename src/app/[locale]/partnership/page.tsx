/**
 * Partnership Page - 파트너십 유형 소개
 *
 * @description 개발투자, 위탁운영, 브랜드 가맹 3가지 파트너십 유형 설명
 */

import Link from "next/link";
import { useTranslations } from "next-intl";

const partnershipIcons = [
  "ri-funds-fill",
  "ri-building-4-fill",
  "ri-store-3-fill",
];

export default function PartnershipPage() {
  const t = useTranslations();

  const partnershipTypes = partnershipIcons.map((icon, index) => ({
    icon,
    title: t(`partnership.types.${index}.title`),
    description: t(`partnership.types.${index}.description`),
    stats: t(`partnership.types.${index}.stats`),
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <span className="text-[#C5A47E] uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">
            {t("partnership.subtitle")}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            {t("partnership.title")}
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {t("partnership.description")}
          </p>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="space-y-16">
            {partnershipTypes.map((type, index) => (
              <div
                key={type.title}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-12 items-center`}
              >
                {/* Icon/Visual */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-[#8B0000] to-[#6B0000] rounded-2xl flex items-center justify-center shadow-2xl">
                    <i className={`${type.icon} text-6xl text-[#C5A47E]`} />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#C5A47E] text-5xl font-bold opacity-30">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <div className="bg-[#fcfaf8] p-6 rounded-lg border border-gray-100">
                    <p className="text-sm text-slate-700">
                      <i className="ri-checkbox-circle-fill text-[#C5A47E] mr-2" />
                      {type.stats}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#fcfaf8]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
              주인장 파트너십의 강점
            </h2>
            <p className="text-slate-600">
              검증된 비즈니스 모델과 전문 운영 노하우로 함께 성장합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-bar-chart-grouped-fill",
                title: "데이터 기반 분석",
                description: "상권분석부터 수익분석까지 데이터에 기반한 의사결정을 지원합니다.",
              },
              {
                icon: "ri-team-fill",
                title: "전문 운영팀",
                description: "경험 많은 전문 운영팀이 시설의 효율적인 관리를 책임집니다.",
              },
              {
                icon: "ri-award-fill",
                title: "브랜드 파워",
                description: "글램독 브랜드의 인지도와 마케팅 역량을 활용할 수 있습니다.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                  <i className={`${benefit.icon} text-2xl text-[#C5A47E]`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            {t("partnership.cta.title")}
          </h2>
          <p className="text-lg opacity-80 mb-10">
            {t("partnership.cta.description")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5A47E] text-white px-12 py-5 uppercase text-sm tracking-widest hover:bg-white hover:text-slate-900 transition-colors"
          >
            {t("partnership.cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
