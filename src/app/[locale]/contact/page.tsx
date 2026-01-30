/**
 * Contact Page - 문의하기
 *
 * @description 파트너십 및 기타 문의 폼
 */

"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    facilityName: "",
    inquiryTypes: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const inquiryTypeOptions = [
    { value: "facility", label: t("form.types.facility") },
    { value: "investment", label: t("form.types.investment") },
    { value: "partnership", label: t("form.types.partnership") },
    { value: "other", label: t("form.types.other") },
  ];

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryTypes: prev.inquiryTypes.includes(value)
        ? prev.inquiryTypes.filter((type) => type !== value)
        : [...prev.inquiryTypes, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          facilityName: "",
          inquiryTypes: [],
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <span className="text-[#C5A47E] uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">
            {t("subtitle")}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            {t("title")}
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t("form.name")} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("form.namePlaceholder")}
                      className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#C5A47E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      {t("form.phone")} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t("form.phonePlaceholder")}
                      className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#C5A47E] transition-colors"
                    />
                  </div>
                </div>

                {/* Facility Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {t("form.facilityName")}
                  </label>
                  <input
                    type="text"
                    value={formData.facilityName}
                    onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
                    placeholder={t("form.facilityNamePlaceholder")}
                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#C5A47E] transition-colors"
                  />
                </div>

                {/* Inquiry Type - Checkboxes */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-4">
                    {t("form.inquiryType")} *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {inquiryTypeOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-3 p-4 border cursor-pointer transition-all ${
                          formData.inquiryTypes.includes(option.value)
                            ? "border-[#C5A47E] bg-[#fcfaf8]"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.inquiryTypes.includes(option.value)}
                          onChange={() => handleCheckboxChange(option.value)}
                          className="w-5 h-5 accent-[#C5A47E]"
                        />
                        <span className="text-sm text-slate-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {t("form.message")}
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("form.messagePlaceholder")}
                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#C5A47E] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.inquiryTypes.length === 0}
                    className="w-full md:w-auto bg-[#8B0000] text-white px-12 py-4 uppercase text-sm tracking-widest hover:bg-[#C5A47E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t("form.submitting") : t("form.submit")}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                    {t("form.success")}
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {t("form.error")}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#fcfaf8] p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {t("info.title")}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-[#C5A47E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">주소</p>
                      <p className="text-sm text-slate-600">{t("info.address")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-[#C5A47E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">전화</p>
                      <p className="text-sm text-slate-600">{t("info.phone")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#8B0000] rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-[#C5A47E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">이메일</p>
                      <p className="text-sm text-slate-600">{t("info.email")}</p>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-slate-900 mb-4">회사 정보</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>법인명: (주)인장매니지먼트</li>
                    <li>대표자: 노경표</li>
                    <li>사업자등록번호: 793-86-01745</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
