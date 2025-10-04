"use client";

import Link from "next/link";
import { pushEvent } from "@/lib/analytics";

export const FinalCta = () => {
  const handleClick = () => {
    pushEvent({ event: "cta_click", location: "final" });
  };

  return (
    <section className="section-container section-container-compact rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* 装飾要素 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" aria-hidden />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between relative z-10">
        {/* Z視線: テキスト左→CTA右 */}
        <div className="space-y-4 flex-1">
          <h2 className="text-3xl font-bold leading-tight">
            いまの案件で<span className="text-emerald-300">&ldquo;試し切り&rdquo;</span>しませんか？
          </h2>
          <p className="text-base text-white/90">
            実際のキャンペーン情報をもとに、最初の候補選定からアウトリーチ準備までを体験いただけます。
          </p>
        </div>

        {/* 視線誘導：右へフロー */}
        <div className="flex items-center gap-6">
          <svg className="w-8 h-8 text-emerald-300/60 hidden lg:block animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>

          <div className="relative group">
            <Link
              href="/#contact"
              className="btn-primary bg-white text-ink shadow-2xl hover:shadow-3xl transition-all text-lg font-bold px-8 py-4 inline-flex items-center gap-3 group-hover:gap-4"
              onClick={handleClick}
            >
              無料トライアルを始める
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            {/* 限定性バッジ */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl rotate-12 animate-pulse">
              先着50社限定
            </div>
            {/* CTAグロー効果 */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/30 to-emerald-300/30 blur-2xl group-hover:blur-3xl transition-all" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
};
