"use client";

import { useState, useCallback } from "react";
import { pushEvent } from "@/lib/analytics";

type ViewMode = "before" | "after";

const COPY = {
  title: "導入で、現場がこう変わる。",
  subtitle:
    "手動の候補調査と営業DMをAIが一気通貫。アウトリーチまで任せて、チームは\"本当にやるべきこと\"に集中できます。",
  cards: [
    {
      title: "手作業と不確実性 → 自動化で\"確実な一歩\"へ",
      before: "スプレッドシートとタブを往復。候補探し・連絡先・DM下書きに時間。成果は運任せに。",
      after:
        "自然文で要件入力 → 候補とWhy?提示 → 連絡先抽出＆下書き生成まで一気通貫。",
      tags: ["候補提示", "連絡先抽出", "下書き自動"],
    },
    {
      title: "代理店依存・認識ズレ → 内製で\"伝わる\"運用に",
      before: "要望が伝わらず往復、スピード低下。ブランド表現もブレがち。",
      after:
        "KIZUNAで内製化。ブランドの言語・トーンをテンプレ化、Why?で社内説明もスムーズ。",
      tags: ["内製化", "ブランド一貫性", "社内合意"],
    },
    {
      title: "ディレクション不足 → \"部門が1つ増えた\"体験へ",
      before: "伸びる切り口の仮説づくりに時間。",
      after: "（Soon）伸び傾向の学習からディレクションを提案。",
      tags: ["伸び傾向の逆引き", "提案自動", "Soon"],
    },
  ],
};

const FLOW_COPY = {
  before: {
    title: "導入前のフロー",
    sub: "作業中心の運用",
    steps: ["要件整理","候補検索","投稿チェック","連絡先探し","DM下書き","差し込み調整","送信/追跡"],
    summary: "候補探し〜送信まで人手で分断。往復・転記が多い。",
    badge: "7ステップ",
  },
  after: {
    title: "導入後のフロー",
    sub: "AI主導の自動化運用",
    steps: ["要件入力（自然文）","候補＋Why?提示","連絡先抽出＆下書き生成","送信キュー（順次DM/メール）"],
    summary: "要件入力から送信キューまでをAIが一気通貫で自動化。",
    badge: "4ステップ（−3）",
  },
};

const CLOSING = {
  heading: "売れる未来に、最短で届く。",
  sub: "見つける・声をかける・届けるをAIが自動化。社内で自走する仕組みで、欲しい顧客に確実に近づく。",
  ctaPrimary: { label: "1週間無料トライアルを始める", href: "#contact" },
};

export function CompareTable() {
  const [mode, setMode] = useState<ViewMode>("before");

  const handleToggle = useCallback((newMode: ViewMode) => {
    setMode(newMode);
    try {
      pushEvent({ event: "compare:toggle", payload: { value: newMode } });
    } catch (e) {
      // pushEvent might not exist
    }
  }, []);

  const handleCTAClick = useCallback(() => {
    try {
      pushEvent({ event: "compare:cta_primary_click" });
    } catch (e) {
      // pushEvent might not exist
    }
  }, []);

  return (
    <section id="compare" className="relative bg-slate-50 py-20">
      {/* 装飾的境界 */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-emerald-50/30 to-transparent" aria-hidden />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-ink md:text-4xl">
              導入で、<span className="text-brand">現場がこう変わる</span>。
            </h2>
            <p className="mx-auto max-w-3xl text-base text-ink/70 md:text-lg">
              {COPY.subtitle}
            </p>
          </div>

          {/* Toggle */}
          <div
            role="tablist"
            aria-label="導入前後の切り替え"
            className="inline-flex items-center gap-1 rounded-full bg-slate-200 p-1"
          >
            <button
              role="tab"
              aria-selected={mode === "before"}
              aria-controls="compare-content"
              aria-pressed={mode === "before"}
              onClick={() => handleToggle("before")}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft" && mode === "after") handleToggle("before");
                if (e.key === "ArrowRight" && mode === "before") handleToggle("after");
              }}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                mode === "before"
                  ? "bg-white text-ink shadow-sm"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              導入前
            </button>
            <button
              role="tab"
              aria-selected={mode === "after"}
              aria-controls="compare-content"
              aria-pressed={mode === "after"}
              onClick={() => handleToggle("after")}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft" && mode === "after") handleToggle("before");
                if (e.key === "ArrowRight" && mode === "before") handleToggle("after");
              }}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                mode === "after"
                  ? "bg-white text-ink shadow-sm"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              導入後
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          id="compare-content"
          className="mb-16 grid gap-6 md:grid-cols-3"
          role="tabpanel"
        >
          {COPY.cards.map((card, i) => (
            <article
              key={i}
              className={`flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg ${i === 1 ? 'md:scale-[1.02]' : ''}`}
            >
              <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
              <div className="relative min-h-[80px]">
                <p
                  className={`text-sm text-ink/70 transition-all duration-300 ${
                    mode === "before"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 absolute"
                  }`}
                  style={{ transitionProperty: "opacity, transform" }}
                >
                  {card.before}
                </p>
                <p
                  className={`text-sm text-ink/70 transition-all duration-300 ${
                    mode === "after"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 absolute"
                  }`}
                  style={{ transitionProperty: "opacity, transform" }}
                >
                  {card.after}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Workflow Timeline - Card UI with Visual Contrast */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {/* Before Flow Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 opacity-95">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-slate-500 md:text-xl">{FLOW_COPY.before.title}</h3>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600 md:text-sm">
                {FLOW_COPY.before.badge}
              </span>
            </div>
            <p className="mb-4 text-sm text-slate-500">{FLOW_COPY.before.sub}</p>
            <div className="mb-4 flex flex-col gap-3">
              {FLOW_COPY.before.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                    {i + 1}
                  </div>
                  <p className="text-sm text-ink/70">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500">{FLOW_COPY.before.summary}</p>
          </div>

          {/* After Flow Card - Emphasized */}
          <div className="rounded-2xl bg-white p-6 shadow-md ring-2 ring-blue-100 transition-all hover:shadow-lg md:hover:-translate-y-0.5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-blue-700 md:text-2xl">{FLOW_COPY.after.title}</h3>
              <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700 md:text-sm">
                {FLOW_COPY.after.badge}
              </span>
            </div>
            <p className="mb-4 text-sm text-blue-700/80">{FLOW_COPY.after.sub}</p>
            <div className="mb-4 flex flex-col gap-3">
              {FLOW_COPY.after.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow">
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium text-ink">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-blue-700">{FLOW_COPY.after.summary}</p>
          </div>
        </div>

        {/* Closing CTA Section - Core Message */}
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-br from-brand/5 to-brand/10 p-8 text-center md:p-10">
          <div className="pt-4">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-center">
              <span className="text-emerald-600">売れる未来</span>に、<br className="block md:hidden" /><span className="font-black">最短で</span>届く。
            </h3>
            <p className="mt-3 text-base md:text-lg text-slate-600 max-w-3xl mx-auto text-center">
              見つける・声をかける・届けるをAIが自動化。<br className="hidden md:block" />社内で<span className="font-semibold text-violet-600">自走する仕組み</span>で、<span className="font-semibold text-blue-700">欲しい顧客</span>に確実に近づく。
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={CLOSING.ctaPrimary.href}
              onClick={handleCTAClick}
              className="btn-primary"
            >
              {CLOSING.ctaPrimary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
