/**
 * Reference Page - 운영 포트폴리오
 *
 * @description 운영 중인 8개 글램독 지점 포트폴리오 그리드
 */

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { portfolioLocations } from "@/lib/data/portfolio";

export default function ReferencePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2069&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <span className="text-[#C5A47E] uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">
            {t("reference.subtitle")}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            {t("reference.title")}
          </h1>
          <p className="text-lg opacity-80">
            {t("reference.description")}
          </p>
        </div>
      </section>

      {/* Operating Locations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-slate-900 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              {t("reference.operating")}
              <span className="text-[#C5A47E]">(8)</span>
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioLocations.map((location) => (
              <PortfolioCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#C5A47E] mb-2">8</p>
              <p className="text-sm uppercase tracking-wider opacity-80">운영 지점</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#C5A47E] mb-2">6</p>
              <p className="text-sm uppercase tracking-wider opacity-80">전국 권역</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#C5A47E] mb-2">100+</p>
              <p className="text-sm uppercase tracking-wider opacity-80">총 객실 수</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#C5A47E] mb-2">9</p>
              <p className="text-sm uppercase tracking-wider opacity-80">개발투자 완료</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#fcfaf8]">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
            새로운 파트너십 기회
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            잠들어있는 공간의 새로운 가능성을 함께 만들어가세요.
            주인장과 함께라면 성공적인 시설 운영이 가능합니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/partnership"
              className="bg-[#8B0000] text-white px-10 py-4 uppercase text-sm tracking-widest hover:bg-[#C5A47E] transition-colors"
            >
              파트너십 알아보기
            </Link>
            <Link
              href="/contact"
              className="border border-slate-900 text-slate-900 px-10 py-4 uppercase text-sm tracking-widest hover:bg-slate-900 hover:text-white transition-colors"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

interface PortfolioCardProps {
  location: (typeof portfolioLocations)[0];
}

function PortfolioCard({ location }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={location.thumbnail || `https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop`}
          alt={location.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 text-xs uppercase tracking-wider rounded">
          운영중
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-[#C5A47E] text-xs uppercase tracking-wider">
              {location.region}
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              {location.name}
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
          {location.description}
        </p>

        {/* Features Tags */}
        <div className="flex flex-wrap gap-1">
          {location.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-gray-100 text-slate-600 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
