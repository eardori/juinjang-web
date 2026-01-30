"use client";

/**
 * Header v3 - 주인장 B2B Corporate Style (i18n)
 *
 * @description Fixed header with gold accent, B2B corporate feel
 */

import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/brand`, label: t("brand") },
    { href: `/${locale}/partnership`, label: t("partnership") },
    { href: `/${locale}/reference`, label: t("reference") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const otherLocale = locale === "ko" ? "en" : "ko";

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#8B0000] rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">주</span>
          </div>
          <span className="text-2xl font-serif tracking-wide text-slate-900">
            주인장
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest font-semibold text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#C5A47E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={`/${otherLocale}`}
            className="text-sm font-semibold text-slate-500 hover:text-[#C5A47E] transition-colors uppercase"
          >
            {otherLocale === "ko" ? "한국어" : "EN"}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="bg-[#8B0000] text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-[#C5A47E] transition-colors"
          >
            {t("inquiry")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-800"
          aria-label="Toggle menu"
        >
          <i className={`ri-${isMobileMenuOpen ? "close" : "menu"}-line text-2xl`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-4 text-sm uppercase tracking-widest font-semibold text-slate-600 hover:text-[#C5A47E] hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-8 py-4 flex flex-col gap-4">
              <Link
                href={`/${otherLocale}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center text-sm font-semibold text-slate-500 hover:text-[#C5A47E] transition-colors uppercase py-2"
              >
                {otherLocale === "ko" ? "한국어" : "English"}
              </Link>
              <Link
                href={`/${locale}/contact`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-[#8B0000] text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-[#C5A47E] transition-colors"
              >
                {t("inquiry")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
