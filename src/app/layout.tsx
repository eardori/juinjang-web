import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "주인장 | 잠들어 있는 공간에 토탈 솔루션",
  description: "(주)인장매니지먼트 - 숙박사업, F&B사업, 리테일사업의 전문 공간 운영 회사",
  keywords: ["인장", "주인장", "글램독", "숙박", "위탁운영", "개발투자"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
