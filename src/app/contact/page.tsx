"use client";

/**
 * Contact Page - 문의하기 페이지
 *
 * @description 문의 양식과 연락처 정보를 표시
 */

import { useState } from "react";
import KakaoMap from "@/components/contact/KakaoMap";

const inquiryTypes = [
  { value: "", label: "문의 유형 선택" },
  { value: "파트너십 문의", label: "파트너십 문의" },
  { value: "투자 문의", label: "투자 문의" },
  { value: "위탁운영 문의", label: "위탁운영 문의" },
  { value: "기타 문의", label: "기타 문의" },
];

// 회사 주소 및 좌표
const COMPANY_ADDRESS = "경기도 하남시 미사강변동로 72";
const COMPANY_COORDS = { lat: 37.5606, lng: 127.2011 };
const KAKAO_MAP_SEARCH_URL = `https://map.kakao.com/link/search/${encodeURIComponent(COMPANY_ADDRESS)}`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    propertyName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          propertyName: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "문의 전송에 실패했습니다.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background-light min-h-screen">
      <div className="px-6 md:px-20 lg:px-40 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Headline Section */}
          <div className="mb-12">
            <h1 className="font-[var(--font-playfair)] text-[#1d0c0c] text-[48px] md:text-[64px] font-medium leading-tight mb-4">
              문의하기
            </h1>
            <p className="text-lg text-[#1d0c0c]/70 max-w-2xl">
              파트너십, 투자, 위탁운영에 관심이 있으시면 아래 양식을 통해
              문의해주세요. 담당자가 빠른 시일 내에 연락드리겠습니다.
            </p>
          </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Inquiry Form */}
          <div className="flex-1 bg-surface-light p-8 md:p-10 rounded-xl shadow-sm border border-border-light">
            {submitStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-green-600 text-4xl">
                    check_circle
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1d0c0c] mb-2">
                  문의가 접수되었습니다
                </h3>
                <p className="text-[#1d0c0c]/60 mb-6">
                  담당자가 영업일 기준 1-2일 내에 연락드리겠습니다.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="text-primary font-semibold hover:underline"
                >
                  새 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1d0c0c]/80 text-sm font-semibold uppercase tracking-wider">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="flex w-full rounded-lg text-[#1d0c0c] focus:ring-1 focus:ring-primary border border-border-card-light bg-white focus:border-primary h-14 placeholder:text-[#1d0c0c]/40 p-4 text-base font-normal outline-none transition-all"
                    placeholder="홍길동"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1d0c0c]/80 text-sm font-semibold uppercase tracking-wider">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="flex w-full rounded-lg text-[#1d0c0c] focus:ring-1 focus:ring-primary border border-border-card-light bg-white focus:border-primary h-14 placeholder:text-[#1d0c0c]/40 p-4 text-base font-normal outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1d0c0c]/80 text-sm font-semibold uppercase tracking-wider">
                    연락처
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex w-full rounded-lg text-[#1d0c0c] focus:ring-1 focus:ring-primary border border-border-card-light bg-white focus:border-primary h-14 placeholder:text-[#1d0c0c]/40 p-4 text-base font-normal outline-none transition-all"
                    placeholder="010-1234-5678"
                  />
                </div>

                {/* Inquiry Type Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1d0c0c]/80 text-sm font-semibold uppercase tracking-wider">
                    문의 유형 *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="flex w-full rounded-lg text-[#1d0c0c] focus:ring-1 focus:ring-primary border border-border-card-light bg-white focus:border-primary h-14 p-4 text-base font-normal outline-none appearance-none transition-all cursor-pointer"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property Name Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1d0c0c]/80 text-sm font-semibold uppercase tracking-wider">
                    시설명 / 회사명
                  </label>
                  <input
                    type="text"
                    name="propertyName"
                    value={formData.propertyName}
                    onChange={handleChange}
                    className="flex w-full rounded-lg text-[#1d0c0c] focus:ring-1 focus:ring-primary border border-border-card-light bg-white focus:border-primary h-14 placeholder:text-[#1d0c0c]/40 p-4 text-base font-normal outline-none transition-all"
                    placeholder="(선택사항)"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1d0c0c]/80 text-sm font-semibold uppercase tracking-wider">
                    문의 내용 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="flex w-full rounded-lg text-[#1d0c0c] focus:ring-1 focus:ring-primary border border-border-card-light bg-white focus:border-primary placeholder:text-[#1d0c0c]/40 p-4 text-base font-normal outline-none transition-all resize-none"
                    placeholder="문의 내용을 입력해주세요."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full cursor-pointer items-center justify-center rounded-lg h-14 bg-primary text-white text-base font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined animate-spin">
                        progress_activity
                      </span>
                      전송 중...
                    </span>
                  ) : (
                    "문의 보내기"
                  )}
                </button>

                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Right Column: Office Details */}
          <div className="lg:w-[400px] flex flex-col gap-10">
            {/* Kakao Map */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-border-light relative">
              <KakaoMap
                latitude={COMPANY_COORDS.lat}
                longitude={COMPANY_COORDS.lng}
                markerTitle="(주)인장매니지먼트"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <a
                  href={KAKAO_MAP_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                  <span className="text-sm font-bold text-primary">
                    카카오맵에서 보기
                  </span>
                </a>
              </div>
            </div>

            {/* Contact Info List */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">
                  본사
                </h3>
                <p className="text-lg font-medium leading-relaxed text-[#1d0c0c]">
                  경기도 하남시 미사강변동로 72,
                  <br />
                  9층 915호
                  <br />
                  (주)인장매니지먼트
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1d0c0c]/50">
                      전화
                    </p>
                    <a href="tel:031-791-2597" className="text-base font-semibold text-[#1d0c0c] hover:text-primary transition-colors">
                      031-791-2597
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1d0c0c]/50">
                      이메일
                    </p>
                    <a href="mailto:contact@juinjang.co.kr" className="text-base font-semibold text-[#1d0c0c] hover:text-primary transition-colors">
                      contact@juinjang.co.kr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1d0c0c]/50">
                      영업시간
                    </p>
                    <p className="text-base font-semibold text-[#1d0c0c]">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="pt-6 border-t border-border-light">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">
                회사 정보
              </h3>
              <div className="text-sm text-[#1d0c0c]/70 space-y-1">
                <p>
                  <span className="font-semibold text-[#1d0c0c]">법인명:</span> (주)인장매니지먼트
                </p>
                <p>
                  <span className="font-semibold text-[#1d0c0c]">대표자:</span> 노경표
                </p>
                <p>
                  <span className="font-semibold text-[#1d0c0c]">사업자번호:</span> 793-86-01745
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
