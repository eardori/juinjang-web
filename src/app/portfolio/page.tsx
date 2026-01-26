/**
 * Portfolio Page - 포트폴리오 그리드 페이지
 *
 * @description 운영 중인 8개 글램독 지점을 그리드로 표시
 */

import { Metadata } from "next";
import Link from "next/link";
import { portfolioLocations } from "@/lib/data/portfolio";
import PortfolioCard from "@/components/portfolio/PortfolioCard";

export const metadata: Metadata = {
  title: "포트폴리오 | 주인장",
  description: "주인장이 운영하는 8개 글램독 프리미엄 애견 펜션 포트폴리오",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Headline Section */}
      <section className="px-6 lg:px-40 pt-16 pb-8 text-center max-w-[1200px] mx-auto">
        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
          Curated Collection
        </span>
        <h1 className="text-text-primary tracking-tight text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          글램독 포트폴리오
        </h1>
        <p className="text-text-primary/70 text-lg font-normal max-w-2xl mx-auto leading-relaxed">
          전국 8개 프리미엄 애견 친화 글램핑 리조트를 만나보세요.
          <br className="hidden md:block" />
          자연과 건축이 어우러진 특별한 공간입니다.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 lg:px-40 py-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {portfolioLocations.map((location) => (
            <PortfolioCard key={location.id} location={location} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-40 py-24 max-w-[1200px] mx-auto">
        <div className="bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
          <div className="max-w-[720px] mx-auto flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-text-primary text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                파트너십에 관심이 있으신가요?
              </h2>
              <p className="text-text-primary/80 text-lg leading-relaxed">
                주인장과 함께 잠들어 있는 공간을 프리미엄 글램핑 리조트로
                <br className="hidden md:block" />
                탈바꿈시키세요.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                상담 신청하기
              </Link>
              <Link
                href="/partnership"
                className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 border-2 border-primary text-primary text-base font-bold tracking-wide hover:bg-primary hover:text-white transition-all"
              >
                파트너십 안내
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
