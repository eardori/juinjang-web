// Root layout - passes through to [locale] layouts
// This file is required by Next.js but the actual layout is in [locale]/layout.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
