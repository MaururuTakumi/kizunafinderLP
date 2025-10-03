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
      className="relative overflow-hidden bg-white"
    >
      <div className="hero-container mx-auto flex max-w-[1120px] flex-col items-center gap-12 px-5 pt-16 sm:pt-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="badge inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-brand">
            β版先行公開 <span className="text-gray-400">|</span> 1週間無料トライアル <span className="text-gray-400">|</span> クレカ不要
          </span>
          <h1 className="max-w-[24ch] text-center font-extrabold leading-[1.1] tracking-tight text-[clamp(34px,6.5vw,66px)] text-ink">
            広告費をムダにせず、成果の出るインフルエンサーを即特定。
          </h1>
          <p className="max-w-[54ch] text-[clamp(15px,2.1vw,19px)] leading-relaxed text-ink/80">
            伸びている投稿を自動で読み解き、商材とのフィットやWhy?を添えて候補を提示。ディレクション共有からアウトリーチ下書きまで、広告チームの判断とスピードを落としません。
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="btn-primary w-full sm:w-auto !px-8 !py-3 text-[15px]"
              onClick={handleCta("hero")}
              aria-label="1週間無料トライアルを始める"
            >
              1週間無料トライアルを始める
            </Link>
            <p className="text-xs font-medium text-ink/50">
              クレジットカード不要・いつでもキャンセル可能
            </p>
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
