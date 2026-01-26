"use client";

/**
 * PortfolioCarousel - 포트폴리오 미리보기 캐러셀
 *
 * @description 운영 중인 글램독 지점들을 가로 스크롤 캐러셀로 표시
 */

import Link from "next/link";
import Image from "next/image";
import { portfolioLocations } from "@/lib/data/portfolio";

export default function PortfolioCarousel() {
  return (
    <>
      {/* Section Header */}
      <section className="pt-10 pb-4 bg-background-light">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
              Portfolio
            </span>
            <h2 className="text-text-primary text-3xl font-bold leading-tight tracking-tight">
              글램독 포트폴리오
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-primary font-bold flex items-center gap-2 hover:underline"
          >
            전체 보기{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="pb-20 bg-background-light overflow-hidden">
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 lg:px-[calc((100vw-1200px)/2)]">
          <div className="flex items-stretch py-8 gap-6">
            {portfolioLocations.map((location) => (
              <div
                key={location.id}
                className="snap-start flex h-full flex-col gap-5 rounded-xl bg-surface-light shadow-lg min-w-[320px] md:min-w-[400px] border border-black/5 group"
              >
                {/* Image */}
                <div className="w-full aspect-[16/10] rounded-t-xl overflow-hidden relative bg-gray-200">
                  <Image
                    src={location.thumbnail}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 320px, 400px"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between p-6 pt-0 gap-6">
                  <div>
                    <p className="text-text-primary text-xl font-bold mb-1">
                      {location.name}
                    </p>
                    <p className="text-primary text-sm font-semibold flex items-center gap-1 uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm">
                        location_on
                      </span>
                      {location.region}
                    </p>
                  </div>
                  <Link
                    href={`/portfolio/${location.slug}`}
                    className="flex w-full items-center justify-center rounded-lg h-12 px-4 bg-border-light text-text-primary text-sm font-bold transition-colors hover:bg-primary hover:text-white"
                  >
                    자세히 보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
