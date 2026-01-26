/**
 * Footer - 하단 푸터 컴포넌트
 *
 * @description 회사 정보, 링크, 연락처를 포함한 4컬럼 푸터
 */

import Link from "next/link";

const resourceLinks = [
  { href: "/partnership#managed", label: "위탁운영" },
  { href: "/partnership#investment", label: "개발투자" },
  { href: "/partnership#franchise", label: "브랜드 가맹" },
];

const networkLinks = [
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/partnership", label: "파트너십" },
  { href: "/about", label: "회사소개" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-light py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-primary/10 pb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-6 text-primary">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fillRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-text-primary">Juinjang</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              잠들어 있는 공간에 토탈 솔루션.
              <br />
              프리미엄 애견 글램핑 리조트 운영 전문 기업.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">서비스</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div>
            <h4 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">바로가기</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              {networkLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-primary uppercase tracking-widest text-xs">연락처</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-primary">mail</span>
                contact@juinjang.co.kr
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-primary">call</span>
                031-791-2597
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-lg text-primary">pin_drop</span>
                <span>경기도 하남시 미사강변동로 72,<br />9층 915호</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <p>© 2024 (주)인장매니지먼트. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-primary">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
