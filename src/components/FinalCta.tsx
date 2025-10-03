"use client";

import Link from "next/link";
import { pushEvent } from "@/lib/analytics";

export const FinalCta = () => {
  const handleClick = () => {
    pushEvent({ event: "cta_click", location: "final" });
  };

  return (
    <section className="section-container section-container-compact rounded-3xl bg-ink text-white">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold leading-tight">
            いまの案件で“試し切り”しませんか？
          </h2>
          <p className="text-sm text-white/80">
            実際のキャンペーン情報をもとに、最初の候補選定からアウトリーチ準備までを体験いただけます。
          </p>
        </div>
        <Link
          href="/#contact"
          className="btn-primary bg-white text-ink"
          onClick={handleClick}
        >
          1週間無料トライアルを始める
        </Link>
      </div>
    </section>
  );
};
