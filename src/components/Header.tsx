"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { pushEvent } from "@/lib/analytics";

const NAV_ITEMS = [
  { label: "プロダクト", href: "/#hero" },
  { label: "強み", href: "/#strengths" },
  { label: "使い方", href: "/#steps" },
  { label: "比較", href: "/#compare" },
  { label: "Now / Next", href: "/#nownext" },
  { label: "テンプレート", href: "/#templates" },
  { label: "FAQ", href: "/#faq" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCta = (location: "header" | "hero" | "final") => () => {
    pushEvent({ event: "cta_click", location });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-white ${
        isScrolled
          ? "shadow-md"
          : "border-b border-gray-100"
      }`}
    >
      <div className="flex h-20 w-full items-center justify-between px-gutter lg:px-16 2xl:px-24">
        <Link href="/" className="flex items-center gap-2 text-nav font-semibold text-ink">
          <Image
            src="/images/logo.png"
            alt="KizunaFinder"
            width={180}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-nav text-ink lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="font-semibold hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden btn-secondary text-nav-cta lg:inline-flex"
            onClick={handleCta("header")}
          >
            デモを見る
          </Link>
          <Link
            href="/#contact"
            className="btn-primary text-nav-cta"
            onClick={handleCta("header")}
          >
            1週間無料で試す
          </Link>
        </div>
      </div>
    </header>
  );
};
