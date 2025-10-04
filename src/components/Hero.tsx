"use client";

import Image from "next/image";
import Link from "next/link";
import { pushEvent } from "@/lib/analytics";

export const Hero = () => {
  const handleCta = (location: "hero" | "header" | "final") => () => {
    pushEvent({ event: "cta_click", location });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      {/* 装飾的な背景要素 */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-200/20 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" aria-hidden />

      <div className="hero-container mx-auto flex max-w-[1120px] flex-col items-center gap-12 px-5 pt-16 sm:pt-20 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="badge inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-brand border border-brand/20 bg-gradient-to-r from-blue-50 to-violet-50">
            β版先行公開 <span className="text-gray-400">|</span> 1週間無料トライアル <span className="text-gray-400">|</span> クレカ不要
          </span>
          <h1 className="max-w-[24ch] text-center font-extrabold leading-[1.1] tracking-tight text-[clamp(34px,6.5vw,66px)] text-ink">
            広告費をムダにせず、<span className="relative inline-block text-emerald-600">
              成果の出るインフルエンサー
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-400/40" aria-hidden />
            </span>を<span className="font-black text-brand">即特定</span>。
          </h1>
          <p className="max-w-[54ch] text-[clamp(15px,2.1vw,19px)] leading-relaxed text-ink/80">
            伸びている投稿を自動で読み解き、商材とのフィットやWhy?を添えて候補を提示。ディレクション共有からアウトリーチ下書きまで、広告チームの判断とスピードを落としません。
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            {/* Z視線: 左上→右上→左下→右下の流れ */}

            {/* 視線誘導：説明→CTA */}
            <div className="flex items-center gap-3 text-sm text-ink/70 max-w-md text-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" aria-hidden />
              <span>まずは無料で体験</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" aria-hidden />
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <div className="relative group">
                <Link
                  href="/#contact"
                  className="btn-primary !px-10 !py-4 text-base font-bold relative z-10 shadow-xl shadow-brand/30 hover:shadow-2xl hover:shadow-brand/50 transition-all hover:scale-105"
                  onClick={handleCta("hero")}
                  aria-label="1週間無料トライアルを始める"
                >
                  1週間無料トライアルを始める
                </Link>
                {/* 限定性バッジ - より目立つ位置 */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg rotate-12 z-20 animate-pulse">
                  β枠残りわずか
                </div>
                {/* 視線誘導の光 */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-400/20 to-brand/20 blur-2xl group-hover:blur-3xl transition-all" aria-hidden />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <p className="text-xs text-ink/60 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  クレカ不要・即日開始
                </p>
                <p className="text-xs font-semibold text-brand flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  初期設定サポート無料
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-ink/10 bg-slate-50 px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-1 flex-col gap-1 text-sm text-ink/70">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/70">
                Trusted teams
              </span>
              <p className="text-base font-semibold text-ink">
                D2C・アプリ・エンタメのマーケターがβ版で検証中
              </p>
            </div>
            <div className="flex flex-1 flex-wrap justify-center gap-4 text-xs font-semibold text-ink/60 sm:justify-end">
              {[
                "D2Cブランド",
                "モバイルアプリ",
                "ライブ配信サービス",
                "デジタル広告代理店",
              ].map((brand) => (
                <span
                  key={brand}
                  className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand/60" aria-hidden />
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr),320px]">
            <div className="order-2 w-full lg:order-1">
              <video
                src="/videos/hero-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full overflow-hidden rounded-3xl bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
              />
            </div>
            <div className="order-1 flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-6 text-left shadow-[0_12px_24px_rgba(15,23,42,0.06)] lg:order-2">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/images/gallery-3.png"
                    alt="β参加企業マーケターの写真"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="text-sm text-ink/80">
                  <p className="font-semibold text-ink">D2Cブランド マーケティング責任者</p>
                  <p>βユーザー</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/80">
                「レポート作成に費やしていた2日分の工数がなくなり、広告チームが毎週の施策会議で“次の一手”を即決できるようになりました。」
              </p>
              <span className="mt-5 text-xs font-medium uppercase tracking-[0.3em] text-brand/70">
                体験談
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
