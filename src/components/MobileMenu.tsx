"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/lib/content";

const navLinks = [
  { href: "#home",     label: "Trang chủ" },
  { href: "#about",    label: "Về chúng tôi" },
  { href: "#appliances", label: "Cẩm nang" },
  { href: "#register", label: "Đăng ký tư vấn" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex md:hidden items-center gap-4">
      <a
        href={CLINIC_PHONE_TEL}
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
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-green-100 hover:text-brand-accent transition-colors border-b border-white/5 pb-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
              <a
                href={CLINIC_PHONE_TEL}
                className="flex items-center gap-3 text-sm font-semibold text-green-100 hover:text-brand-accent"
              >
                <Phone className="h-4 w-4 text-brand-accent" />
                <span>{CLINIC_PHONE_DISPLAY}</span>
              </a>
              <Link
                href="#register"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full rounded-full bg-brand-accent text-brand-dark font-bold hover:bg-brand-accent-light h-10 text-sm animate-shimmer-btn shadow-md"
              >
                Đăng ký tư vấn
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
