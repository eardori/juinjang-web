"use client";

/**
 * Footer v3 - 주인장 B2B Corporate Style (i18n)
 *
 * @description Dark footer with company info and newsletter
 */

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const quickLinks = [
    { href: `/${locale}`, label: t("links.home") },
    { href: `/${locale}/brand`, label: t("links.brand") },
    { href: `/${locale}/partnership`, label: t("links.partnership") },
    { href: `/${locale}/reference`, label: t("links.reference") },
    { href: `/${locale}/contact`, label: t("links.contact") },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#1a1a1a] text-white pt-24 pb-12 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#8B0000] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">주</span>
              </div>
              <div>
                <span className="text-xl font-serif tracking-wide block">
                  {t("brand")}
                </span>
                <span className="text-xs text-gray-500">{t("company")}</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              {t("description")}
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>{t("businessInfo.ceo")}</p>
              <p>{t("businessInfo.businessNumber")}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">{t("quickLinks")}</h4>
            <ul className="space-y-3 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C5A47E] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">{t("contactTitle")}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[#C5A47E] mt-0.5" />
                <span className="whitespace-pre-line">{t("address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-[#C5A47E]" />
                <span>{t("phone")}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-[#C5A47E]" />
                <span>{t("email")}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">{t("newsletter.title")}</h4>
            <p className="text-gray-400 mb-4 text-sm">
              {t("newsletter.description")}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="w-full bg-gray-900 border border-gray-800 p-3 text-white text-sm focus:outline-none focus:border-[#C5A47E] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#8B0000] text-white p-3 uppercase text-xs tracking-widest font-bold hover:bg-[#C5A47E] transition-colors"
              >
                {t("newsletter.button")}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-gray-500 text-xs gap-4">
          <p>{t("copyright")}</p>
          <p className="text-[#C5A47E] font-semibold tracking-wider">{t("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
