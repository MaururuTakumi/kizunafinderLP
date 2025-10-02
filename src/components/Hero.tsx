"use client";

import Link from "next/link";
import { pushEvent } from "@/lib/analytics";

export const Hero = () => {
  const handleCta = (location: "hero" | "header" | "final") => () => {
    pushEvent({ event: "cta_click", location });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
    >
      <div className="hero-container mx-auto max-w-[1120px] gap-0 px-5 pt-16 sm:pt-20">
        <div className="mb-6 flex justify-center">
          <span className="badge inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-brand">
            β版 <span className="text-gray-400">|</span> 1週間無料体験 <span className="text-gray-400">|</span> 招待制で先行ユーザー募集
          </span>
        </div>
        <h1
          className="mx-auto max-w-[22ch] text-center font-extrabold text-ink leading-[1.1] tracking-tight text-[clamp(32px,6vw,64px)]"
        >
          キーワードを入れるだけ。<br className="hidden md:block" />
          最適なインフルエンサーがすぐ見つかる。
        </h1>
        <p
          className="mx-auto mt-5 max-w-[48ch] text-center text-ink/80 text-[clamp(14px,2.2vw,18px)] leading-relaxed"
        >
          伸びている投稿の分析でディレクションから、インフルエンサーの候補提示→連絡先→下書きまでを一気通貫。
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
          <Link
            href="/#contact"
            className="btn-primary w-full sm:w-auto !px-6 !py-3 text-[15px]"
            onClick={handleCta("hero")}
            aria-label="1週間無料で試す（β）"
          >
            無料で試してみる
          </Link>
          <Link
            href="/#contact"
            className="w-full rounded-full border border-gray-300 bg-white px-6 py-3 text-[15px] font-semibold text-ink hover:bg-gray-50 sm:w-auto"
            onClick={handleCta("hero")}
            aria-label="デモを見る"
          >
            デモを見る
          </Link>
        </div>
        <div className="mx-auto mt-12 w-full max-w-[min(100%,980px)] md:mt-16 xl:max-w-[1100px]">
          <video
            src="/videos/hero-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(49,46,129,0.08)]"
          />
        </div>
      </div>
    </section>
  );
};
