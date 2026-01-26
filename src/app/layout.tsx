import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "주인장 | 잠들어 있는 공간에 토탈 솔루션",
  description: "(주)인장매니지먼트 - 숙박사업, F&B사업, 리테일사업의 전문 공간 운영 회사",
  keywords: ["인장", "주인장", "글램독", "숙박", "위탁운영", "개발투자", "글램핑"],
  openGraph: {
    title: "주인장 | 잠들어 있는 공간에 토탈 솔루션",
    description: "(주)인장매니지먼트 - 숙박사업, F&B사업, 리테일사업의 전문 공간 운영 회사",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${playfairDisplay.variable} font-[var(--font-manrope)] antialiased bg-background-light text-text-primary`}
      >
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1 mt-[72px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
