"use client";

import Link from "next/link";
import { pushEvent } from "@/lib/analytics";

export const FloatingCta = () => {
  const handleClick = () => {
    pushEvent({ event: "cta_click", location: "final" });
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <Link
        href="/#contact"
        className="btn-primary w-full shadow-xl shadow-emerald-500/20 transition-all hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-[1.02]"
        onClick={handleClick}
      >
        1週間無料トライアルを始める
      </Link>
    </div>
  );
};
