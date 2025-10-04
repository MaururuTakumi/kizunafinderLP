"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    label: "STEP 01",
    title: "課題とターゲットを自然文で投げる",
    description: "「広告費を抑えながらリピート率を上げたい」「Z世代向けに動画で訴求したい」など、現状の悩みをそのまま入力するだけ。",
    video: "step-01-brief.mp4",
  },
  {
    label: "STEP 02",
    title: "成果につながる候補とWhy?を即受け取る",
    description: "伸びている投稿の勝ち要素を解析し、CVR改善につながる打ち手と共に候補を提示。社内共有スライドにも貼れる要約を自動生成します。",
    video: "step-02-results.mp4",
  },
  {
    label: "STEP 03",
    title: "下書きとタスクまで自動化し実行に移す",
    description: "連絡先取得、メール・DMの下書き、タスク共有までワンフロー。営業チームや代理店への引き継ぎもリンク一つで完了します。",
    video: "step-03-outreach.mp4",
  },
];

export const Steps = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentStep, setCurrentStep] = useState(1); // 初期値を Step2 (index 1)
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const scrollToStep = (stepIndex: number, smooth = true) => {
    const container = scrollRef.current;
    if (!container) return;

    // カード幅の 70% を基準に計算
    const containerWidth = container.clientWidth;
    const cardWidth = containerWidth * 0.7;
    const gap = 40;

    // センタリング計算：選択カードが中央に来るようオフセット
    const offset = (containerWidth - cardWidth) / 2;
    const targetScroll = Math.max(0, stepIndex * (cardWidth + gap) - offset);

    container.scrollTo({
      left: targetScroll,
      behavior: smooth ? "smooth" : "auto"
    });
  };

  // 初期表示を Step2 に設定
  useEffect(() => {
    if (!isInitialized && scrollRef.current) {
      scrollToStep(1, false); // Step2 を中央に（アニメーションなし）
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // 自動スクロール: Step2 → Step3 → Step1 → Step2 → 停止
  useEffect(() => {
    if (!isInitialized || isPaused || isComplete) return;

    const autoScrollSequence = [
      { step: 1, delay: 2000 }, // Step2 で 2秒待機
      { step: 2, delay: 2500 }, // Step3 へ移動して 2.5秒
      { step: 0, delay: 2500 }, // Step1 へ移動して 2.5秒
      { step: 1, delay: 2000 }, // Step2 に戻って停止
    ];

    const currentSequence = autoScrollSequence[currentStep];
    if (!currentSequence) {
      setIsComplete(true);
      return;
    }

    const timer = setTimeout(() => {
      if (currentStep < autoScrollSequence.length - 1) {
        const nextStep = autoScrollSequence[currentStep + 1].step;
        scrollToStep(nextStep);
        setCurrentStep(currentStep + 1);
      } else {
        setIsComplete(true);
      }
    }, currentSequence.delay);

    return () => clearTimeout(timer);
  }, [currentStep, isInitialized, isPaused, isComplete]);

  const handleUserInteraction = () => {
    setIsPaused(true);
    setIsComplete(true);
  };

  return (
    <section id="steps" className="relative bg-slate-50 py-20">
      {/* 装飾的な境界 */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" className="w-full h-16 text-white">
          <path d="M0,0 Q300,60 600,30 T1200,0 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-violet-600">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            <span className="text-brand">CVR改善</span>までを<span className="font-black">3ステップ</span>で完結
          </h2>
          <p className="max-w-[60ch] text-slate-600">
            広告から流入した瞬間に「このツールで次の施策が回せる」と確信してもらうために、<span className="font-semibold text-brand">課題整理→勝ち筋共有→実行のタスク化</span>までを一本化しました。
          </p>
          {/* 視線誘導：下へのフロー */}
          <div className="mt-2 flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-brand/40 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1200px]">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide px-4"
            role="region"
            aria-label="製品の使い方 - ステップ紹介"
            onMouseEnter={handleUserInteraction}
            onTouchStart={handleUserInteraction}
            onPointerDown={handleUserInteraction}
            onClick={handleUserInteraction}
          >
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="flex h-full min-h-[180px] flex-shrink-0 basis-[70%] flex-col gap-6 rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-[0_1px_2px_rgba(16,24,40,0.06)] snap-center transition hover:-translate-y-[1px] hover:shadow-md hover:ring-slate-300 md:basis-[68%] lg:basis-[70%]"
                style={{ minWidth: "min(70vw, 750px)" }}
              >
                <div className="flex flex-col gap-3 text-left">
                  <span className="inline-flex w-fit rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{step.label}</span>
                  <h3 className="text-2xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-base text-slate-600">{step.description}</p>
                </div>
                <div className="relative w-full overflow-hidden rounded-xl bg-slate-50 aspect-video md:h-[520px]">
                  <video
                    src={`/videos/${step.video}`}
                    className="h-full w-full object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={`${step.title}のデモ動画`}
                  >
                    お使いのブラウザは動画タグをサポートしていません。
                  </video>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
