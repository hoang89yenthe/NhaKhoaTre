import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});



const BASE_URL = "https://nhakhoatre.vn"; // TODO: cập nhật khi có domain thực tế

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nha Khoa Trẻ – Chỉnh Nha Trẻ Em Tiêu Chuẩn Đức | Hà Nội",
    template: "%s | Nha Khoa Trẻ",
  },
  description:
    "Nha Khoa Trẻ – phòng khám chỉnh nha trẻ em tiên phong công nghệ số tại Hà Nội. Tiêu chuẩn Đức, 100% số hoá, đội ngũ bác sĩ tốt nghiệp Đại học Y Hà Nội. Đặt lịch tư vấn miễn phí!",
  keywords: [
    "chỉnh nha trẻ em",
    "niềng răng trẻ em Hà Nội",
    "nha khoa trẻ em",
    "chỉnh nha sớm",
    "phòng khám nha khoa Thanh Xuân",
    "nha khoa tiêu chuẩn Đức",
    "niềng răng trẻ em tiêu chuẩn Đức",
    "chỉnh nha công nghệ số",
    "Nha Khoa Trẻ",
  ],
  authors: [{ name: "Nha Khoa Trẻ" }],
  creator: "Nha Khoa Trẻ",
  publisher: "Nha Khoa Trẻ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: BASE_URL,
    siteName: "Nha Khoa Trẻ",
    title: "Nha Khoa Trẻ – Chỉnh Nha Trẻ Em Tiêu Chuẩn Đức | Hà Nội",
    description:
      "Phòng khám chỉnh nha trẻ em tiên phong công nghệ số tại Hà Nội. Tiêu chuẩn Đức, 100% số hoá. Đặt lịch tư vấn miễn phí!",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nha Khoa Trẻ – Chỉnh Nha Trẻ Em Tiêu Chuẩn Đức",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nha Khoa Trẻ – Chỉnh Nha Trẻ Em Tiêu Chuẩn Đức | Hà Nội",
    description:
      "Phòng khám chỉnh nha trẻ em tiên phong công nghệ số tại Hà Nội. Tiêu chuẩn Đức, 100% số hoá.",
    images: ["/images/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Nha Khoa Trẻ",
  description:
    "Phòng khám chỉnh nha trẻ em tiêu chuẩn Đức, tiên phong công nghệ số tại Hà Nội.",
  url: BASE_URL,
  telephone: "+840901334334",
  email: "cskh.nhakhoatre@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Số 38 Ngụy Như Kon Tum",
    addressLocality: "Phường Nhân Chính, Quận Thanh Xuân",
    addressRegion: "Hà Nội",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.9976,
    longitude: 105.8126,
  },
  image: `${BASE_URL}/images/og-image.png`,
  priceRange: "$$",
  medicalSpecialty: "Orthodontics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style>{`
            .opacity-0 {
              opacity: 1 !important;
            }
            .anim-slide-up, .anim-slide-left, .anim-slide-right, .anim-scale-up {
              animation: none !important;
              opacity: 1 !important;
            }
          `}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-text">
        {children}
      </body>
    </html>
  );
}
