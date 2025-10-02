"use client";

import { useState } from "react";

const faqs = [
  {
    question: "どんなデータソースを利用していますか？",
    answer:
      "公開情報と許諾済みデータソースを組み合わせ、各プラットフォームの規約に沿った範囲で候補を提示します。",
  },
  {
    question: "無料体験ではどこまで試せますか？",
    answer:
      "主要機能（自然文検索、候補提示、Why?、連絡先抽出の一部、メール下書き生成）を期間中制限なくご利用いただけます。",
  },
  {
    question: "導入後のサポートはありますか？",
    answer:
      "βプログラム参加企業には専任のカスタマーサクセスが伴走し、週次ミーティングで成果最大化を支援します。",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-container">
      <div className="flex flex-col gap-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          FAQ
        </span>
        <h2 className="text-3xl font-bold text-ink">よくある質問</h2>
        <p className="text-ink/70">
          さらに詳細を知りたい場合はフォームからお問い合わせください。
        </p>
      </div>
      <dl className="mx-auto w-full max-w-3xl divide-y divide-brand/10 overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-card">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <dt>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-sm font-semibold text-ink">{faq.question}</span>
                  <span className="text-brand">{isOpen ? "−" : "+"}</span>
                </button>
              </dt>
              {isOpen && (
                <dd className="px-6 pb-5 text-sm text-ink/70">{faq.answer}</dd>
              )}
            </div>
          );
        })}
      </dl>
    </section>
  );
};
