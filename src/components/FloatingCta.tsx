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
        className="btn-primary w-full shadow-lg"
        onClick={handleClick}
      >
        1週間無料で試す
      </Link>
    </div>
  );
};
