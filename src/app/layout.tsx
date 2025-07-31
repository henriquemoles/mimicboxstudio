import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jorgin",
  description: "Jorgin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${anton.className} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
