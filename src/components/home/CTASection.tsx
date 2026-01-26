"use client";

/**
 * CTASection - 파트너십 유도 CTA 섹션
 *
 * @description 파트너십 문의를 유도하는 콜투액션 섹션
 */

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-primary text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[800px] mx-auto text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-[var(--font-playfair)] font-bold mb-6">
          프리미엄 글램핑 운영의
          <br />
          파트너가 되어주세요
        </h2>
        <p className="text-lg opacity-90 mb-10 leading-relaxed font-light">
          주인장의 토탈 매니지먼트 솔루션으로 잠들어 있는 공간을
          <br className="hidden md:block" />
          고수익 프리미엄 리조트로 탈바꿈시키세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all"
          >
            상담 신청하기
          </Link>
          <Link
            href="/partnership"
            className="border border-white/40 hover:bg-white/10 px-10 py-4 rounded-lg font-bold text-lg transition-all"
          >
            서비스 모델 보기
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
