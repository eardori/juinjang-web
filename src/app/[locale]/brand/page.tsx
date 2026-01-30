/**
 * Brand Page - GLAM DOG 브랜드 소개
 *
 * @description 글램독 브랜드 소개 및 8개 지점 정보
 */

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { portfolioLocations } from "@/lib/data/portfolio";

export default function BrandPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2069&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <span className="text-[#C5A47E] uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">
            {t("brand.subtitle")}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-wide">
            {t("brand.title")}
          </h1>
          <p className="text-xl md:text-2xl text-[#C5A47E] mb-6 font-light tracking-widest">
            {t("brand.tagline")}
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {t("brand.description")}
          </p>
        </div>
      </section>

      {/* Locations Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
              전국 8개 지점
            </h2>
            <p className="text-slate-600">
              반려견과 함께하는 특별한 휴식을 경험하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#8B0000] text-white">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            글램독과 함께하는 파트너십
          </h2>
          <p className="text-lg opacity-80 mb-10">
            글램독 브랜드의 위탁운영 또는 가맹에 관심이 있으시면 언제든 문의해주세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5A47E] text-white px-12 py-5 uppercase text-sm tracking-widest hover:bg-white hover:text-[#8B0000] transition-colors"
          >
            파트너십 문의
          </Link>
        </div>
      </section>
    </>
  );
}

interface LocationCardProps {
  location: (typeof portfolioLocations)[0];
}

function LocationCard({ location }: LocationCardProps) {
  const t = useTranslations();

  return (
    <div className="bg-[#fcfaf8] rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group">
      {/* Image */}
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={location.thumbnail || `https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop`}
          alt={location.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-[#8B0000] text-white px-3 py-1 text-xs uppercase tracking-wider rounded">
          {location.region}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{location.name}</h3>
        <p className="text-slate-600 text-sm mb-4">{location.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {location.features.map((feature) => (
            <span
              key={feature}
              className="bg-white border border-gray-200 px-3 py-1 text-xs text-slate-600 rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Info */}
        <div className="space-y-2 text-sm text-slate-600 border-t border-gray-100 pt-4">
          <div className="flex items-start gap-2">
            <i className="ri-map-pin-line text-[#C5A47E] mt-0.5" />
            <span>{location.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
