/**
 * Home Page - 주인장 메인 홈페이지
 *
 * @description Hero, Stats, Portfolio Carousel, CTA 섹션으로 구성
 */

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import PortfolioCarousel from "@/components/home/PortfolioCarousel";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PortfolioCarousel />
      <CTASection />
    </>
  );
}
