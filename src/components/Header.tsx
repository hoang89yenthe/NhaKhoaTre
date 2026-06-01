"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: "#home", label: "Trang chủ" },
    { href: "#about", label: "Về chúng tôi" },
    { href: "#appliances", label: "Cẩm nang" },
    { href: "#register", label: "Đăng ký tư vấn" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId.replace("#", ""));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-semibold tracking-wide text-green-100/90 transition-colors hover:text-brand-accent nav-link-underline pb-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="tel:0901334334"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-accent transition-colors hover:bg-white/20 shadow-sm"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-full h-10 w-10"
                />
              }
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Mở menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] border-l border-white/10 bg-brand-dark/95 backdrop-blur-xl p-6 text-white"
            >
              <SheetTitle className="text-left text-lg font-bold text-brand-accent mb-6 font-serif">
                Nha Khoa Trẻ
              </SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-base font-semibold text-green-100 hover:text-brand-accent transition-colors border-b border-white/5 pb-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
                  <a
                    href="tel:0901334334"
                    className="flex items-center gap-3 text-sm font-semibold text-green-100 hover:text-brand-accent"
                  >
                    <Phone className="h-4 w-4 text-brand-accent" />
                    <span>0901.334.334</span>
                  </a>
                  <Button
                    onClick={(e) => handleScroll(e, "#register")}
                    className="w-full rounded-full bg-brand-accent text-brand-dark font-bold hover:bg-brand-accent-light h-10 text-sm animate-shimmer-btn shadow-md"
                  >
                    Đăng ký tư vấn
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
