"use client";

/**
 * Header - 상단 네비게이션 헤더 컴포넌트
 *
 * @description 고정형 헤더, backdrop-blur 효과, 반응형 네비게이션
 */

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/partnership", label: "파트너십" },
  { href: "/about", label: "회사소개" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-background-light/80 backdrop-blur-md border-b border-solid border-border-light px-6 lg:px-40 py-4">
      <div className="flex w-full max-w-[1200px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fillRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-text-primary text-xl font-extrabold leading-tight tracking-tight uppercase">
            Juinjang
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold tracking-wide transition-transform active:scale-95 hover:bg-primary/90"
          >
            문의하기
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center size-10 rounded-lg hover:bg-border-light transition-colors"
            aria-label="메뉴 열기"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background-light/95 backdrop-blur-md border-b border-border-light md:hidden">
          <nav className="flex flex-col py-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-semibold hover:text-primary transition-colors border-b border-border-light last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 flex items-center justify-center rounded-lg h-12 bg-primary text-white font-bold transition-transform active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              문의하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
