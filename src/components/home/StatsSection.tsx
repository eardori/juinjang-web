"use client";

/**
 * StatsSection - 회사 실적 통계 섹션
 *
 * @description 운영 시설 수, 관리 객실 수, 평균 입실률 등을 표시
 */

import { motion } from "framer-motion";

const stats = [
  {
    label: "운영 지점",
    value: "8",
    description: "전국 프리미엄 글램핑 리조트",
  },
  {
    label: "관리 객실",
    value: "150+",
    description: "프리미엄 글램핑 텐트 및 객실",
  },
  {
    label: "평균 입실률",
    value: "98%",
    description: "연중 안정적인 예약률",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3">
            Company Performance
          </span>
          <h2 className="text-3xl font-bold tracking-tight">
            숫자로 보는 주인장
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center gap-2 rounded-xl p-10 border border-border-card-light bg-surface-light shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-primary text-base font-bold uppercase tracking-widest">
                {stat.label}
              </p>
              <p className="text-[#1d0c0c] tracking-tighter text-6xl font-black">
                {stat.value}
              </p>
              <p className="text-[#1d0c0c]/60 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
