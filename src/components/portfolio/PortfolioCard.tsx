"use client";

/**
 * PortfolioCard - 포트폴리오 그리드용 카드 컴포넌트
 *
 * @description 4:5 비율 이미지와 호버 효과가 있는 포트폴리오 카드
 */

import Link from "next/link";
import Image from "next/image";
import { PortfolioLocation } from "@/types/portfolio";

interface PortfolioCardProps {
  location: PortfolioLocation;
}

export default function PortfolioCard({ location }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${location.slug}`}
      className="portfolio-card group cursor-pointer flex flex-col gap-4"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-200">
        <Image
          src={location.thumbnail}
          alt={location.name}
          fill
          className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">pets</span>
            Pet Friendly
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-text-primary text-lg font-bold leading-tight">
          {location.name}
        </h3>
        <p className="text-primary text-sm font-semibold flex items-center gap-1 uppercase tracking-wider">
          <span className="material-symbols-outlined text-xs">location_on</span>
          {location.region}
        </p>
      </div>
    </Link>
  );
}
