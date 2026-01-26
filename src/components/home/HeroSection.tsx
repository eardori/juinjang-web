"use client";

/**
 * HeroSection - 홈페이지 히어로 섹션
 *
 * @description 전체 화면 배경 이미지와 슬로건을 표시하는 히어로 섹션
 */

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('/images/hero-bg.jpg')`,
        }}
      />

      {/* Fallback gradient if image not loaded */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/60 -z-10" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-[var(--font-playfair)] text-white text-4xl md:text-7xl font-light mb-6 leading-tight"
        >
          잠들어 있는 공간에 <br />
          <span className="font-bold italic">토탈 솔루션</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white/90 text-lg md:text-xl font-light max-w-2xl mb-10 tracking-wide"
        >
          데이터 기반 운영과 프리미엄 호스피탈리티로 애견 친화 글램핑의 새로운 기준을 제시합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/portfolio"
            className="min-w-[200px] h-14 rounded-lg bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-xl flex items-center justify-center"
          >
            포트폴리오 보기
          </Link>
          <Link
            href="/partnership"
            className="min-w-[200px] h-14 rounded-lg border border-white text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
          >
            파트너십 안내
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
