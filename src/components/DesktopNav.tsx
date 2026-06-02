"use client";

import * as React from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home",       label: "Trang chủ",     section: "home"       },
  { href: "#about",      label: "Về chúng tôi",   section: "about"      },
  { href: "#appliances", label: "Cẩm nang",       section: "appliances" },
  { href: "#register",   label: "Đăng ký tư vấn", section: "register"   },
];

export default function DesktopNav() {
  const [active, setActive] = React.useState("home");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    navLinks.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm font-semibold tracking-wide transition-colors nav-link-underline pb-1 ${
            active === link.section
              ? "text-brand-accent"
              : "text-green-100/90 hover:text-brand-accent"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
