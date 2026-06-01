import type { Metadata } from "next";
import { Outfit, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Nha Khoa Trẻ - Phòng Khám Chỉnh Nha Trẻ Em Tiêu Chuẩn Đức",
  description: "Nha Khoa Trẻ tự hào là phòng khám tiên phong công nghệ số trong điều trị chỉnh nha cho trẻ em. Đội ngũ bác sĩ giàu kinh nghiệm 100% tốt nghiệp Đại học Y Hà Nội.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${outfit.variable} ${playfair.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-text">
        {children}
      </body>
    </html>
  );
}
