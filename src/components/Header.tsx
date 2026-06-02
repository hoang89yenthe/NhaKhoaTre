import Link from "next/link";
import Image from "next/image";
import { CLINIC_PHONE_TEL } from "@/lib/content";
import MobileMenu from "@/components/MobileMenu";
import DesktopNav from "@/components/DesktopNav";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-primary/80 backdrop-blur-lg shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#" className="flex items-center group">
          <div className="relative h-14 w-14 md:h-16 md:w-16 transition-transform duration-300 group-hover:scale-[1.03]">
            <Image
              src="/images/logo.png"
              alt="Nha Khoa Trẻ Logo"
              fill
              className="object-contain"
              sizes="70px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={CLINIC_PHONE_TEL}
            className="text-sm font-semibold text-green-100/90 hover:text-brand-accent transition-colors"
          >
          </a>
          <Link
            href="#register"
            className="rounded-full bg-brand-accent px-5 py-2 text-sm font-bold text-brand-dark hover:bg-brand-accent-light transition-colors animate-shimmer-btn shadow-md"
          >
            Đăng ký tư vấn
          </Link>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu />
      </div>
    </header>
  );
}
