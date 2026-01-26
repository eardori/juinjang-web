/**
 * Partnership Page - 파트너십 & 투자 안내 페이지
 *
 * @description 위탁운영, 개발투자, 브랜드 가맹 안내
 */

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "파트너십 | 주인장",
  description: "주인장의 파트너십 프로그램 - 위탁운영, 개발투자, 브랜드 가맹",
};

const managementFeatures = [
  {
    icon: "settings_account_box",
    title: "운영 전문성",
    description:
      "5성급 호스피탈리티 프로토콜을 활용한 전문 인력 운영, 교육 프로그램, 시설 관리를 제공합니다.",
  },
  {
    icon: "trending_up",
    title: "수익 최적화",
    description:
      "다이나믹 프라이싱 알고리즘과 데이터 기반 마케팅으로 REVPAR을 극대화하고 연중 높은 입실률을 보장합니다.",
  },
  {
    icon: "pets",
    title: "애견 친화 IP",
    description:
      "독자적인 'Paws-First' 어메니티 스위트와 안전 기준으로 프리미엄 애견 호스피탈리티의 표준을 제시합니다.",
  },
];

const stats = [
  { value: "98%", label: "평균 입실률" },
  { value: "22%", label: "연간 수익률" },
  { value: "8", label: "운영 지점" },
  { value: "4.9/5", label: "고객 평점" },
];

export default function PartnershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[520px] flex flex-col gap-6 md:gap-8 items-start justify-end px-6 md:px-12 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url('/images/partnership-hero.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/60 -z-10" />

        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-bold tracking-widest uppercase rounded mb-4">
            Partnership & Investment
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
            혁신을 통한 성장,
            <br />
            호스피탈리티의 새 기준
          </h1>
          <p className="text-white/90 text-sm md:text-lg font-medium leading-relaxed max-w-xl">
            주인장과 함께 15조원 규모의 프리미엄 펫 여행 시장을 선도하세요.
            세계적 수준의 운영 표준과 고수익 투자 구조를 제공합니다.
          </p>
        </div>
        <Link
          href="/contact"
          className="relative z-10 flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold transition-transform hover:scale-105 shadow-lg shadow-black/20"
        >
          문의하기
        </Link>
      </section>

      {/* Tabs Section */}
      <section className="py-2 max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex border-b border-primary/10 gap-8 md:gap-12 overflow-x-auto">
          <a
            href="#management"
            className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-4 pt-4 transition-all whitespace-nowrap"
          >
            <p className="text-sm font-extrabold leading-normal tracking-[0.015em] uppercase">
              위탁운영
            </p>
          </a>
          <a
            href="#investment"
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-text-primary/50 pb-4 pt-4 hover:text-primary transition-all whitespace-nowrap"
          >
            <p className="text-sm font-extrabold leading-normal tracking-[0.015em] uppercase">
              개발투자
            </p>
          </a>
          <a
            href="#franchise"
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-text-primary/50 pb-4 pt-4 hover:text-primary transition-all whitespace-nowrap"
          >
            <p className="text-sm font-extrabold leading-normal tracking-[0.015em] uppercase">
              브랜드 가맹
            </p>
          </a>
        </div>
      </section>

      {/* Management Solutions */}
      <section
        id="management"
        className="py-10 bg-surface-light max-w-[1200px] mx-auto px-4 md:px-6"
      >
        <div className="flex flex-col gap-10 py-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
              운영 전문성
            </h2>
            <h3 className="text-text-primary tracking-tight text-3xl md:text-5xl font-black leading-tight max-w-[800px]">
              프리미엄 숙박시설의 턴키 운영
            </h3>
            <p className="text-text-primary/70 text-lg font-medium leading-relaxed max-w-[720px]">
              고급 리조트 운영의 부담을 덜어드립니다. 독자적인 애견 친화
              프로토콜과 고효율 시스템을 모든 위탁 시설에 적용합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {managementFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-1 gap-6 rounded-xl border border-primary/10 bg-background-light p-8 flex-col hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    {feature.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-text-primary text-xl font-bold">
                    {feature.title}
                  </h4>
                  <p className="text-text-primary/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Stats Section */}
      <section
        id="investment"
        className="py-16 bg-background-dark text-white"
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
                투자자 인텔리전스
              </h2>
              <h3 className="text-4xl font-black leading-tight tracking-tight">
                성장하는 니치 시장에서의 예측 가능한 수익
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                저희의 투자 구조는 프라임 부동산과 급성장하는 펫 여행 부문에
                노출됩니다. 장기적 자산 가치 상승과 지속 가능한 수익을
                우선시합니다.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-primary pl-4">
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="text-white/50 text-xs uppercase font-bold tracking-widest mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group bg-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-white/20 text-[200px]">
                  apartment
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <p className="text-sm font-medium italic">
                  &ldquo;주인장의 데이터 중심 리조트 개발 접근 방식이 저성과
                  토지를 플래그십 럭셔리 목적지로 탈바꿈시켰습니다.&rdquo;
                </p>
                <p className="mt-3 font-bold text-xs uppercase tracking-widest text-primary">
                  — 투자 파트너, APAC 포트폴리오
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section
        id="franchise"
        className="py-16 bg-background-light max-w-[1200px] mx-auto px-4 md:px-6"
      >
        <div className="flex flex-col gap-8 text-center items-center">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
            브랜드 가맹
          </h2>
          <h3 className="text-text-primary text-3xl md:text-4xl font-black leading-tight max-w-[600px]">
            글램독 브랜드 가맹
          </h3>
          <p className="text-text-primary/70 text-lg leading-relaxed max-w-[600px]">
            글램독 브랜드 가맹 프로그램은 현재 준비 중입니다. 관심이 있으시면
            문의 양식을 통해 연락해 주세요.
          </p>
          <div className="flex items-center justify-center p-8 bg-primary/5 rounded-xl border border-primary/10">
            <span className="text-primary font-bold">준비 중</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-3xl font-black text-text-primary">
              주인장과 파트너가 되세요
            </h2>
            <p className="text-text-primary/60 max-w-2xl">
              자산을 변환하거나 포트폴리오를 다각화할 준비가 되셨나요? 맞춤형
              파트너십 제안을 위해 문의해 주세요.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              상담 신청하기
            </Link>
            <Link
              href="/portfolio"
              className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 border-2 border-primary text-primary text-base font-bold tracking-wide hover:bg-primary hover:text-white transition-all"
            >
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
