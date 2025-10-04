"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { pushEvent } from "@/lib/analytics";

const GAS_ENDPOINT = process.env.NEXT_PUBLIC_GAS_WEBAPP_URL;

const GOALS = [
  "まずは製品資料を見たい",
  "無料トライアルの準備を相談したい",
  "導入判断のためのデモが欲しい",
];

type Status = "idle" | "loading" | "success" | "error";

export const LeadCapture = () => {
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState(GOALS[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("有効なメールアドレスをご入力ください。");
      return;
    }

    try {
      pushEvent({ event: "lead_capture_submit" });
    } catch (error) {
      console.debug("lead capture push failed", error);
    }

    if (!GAS_ENDPOINT) {
      if (typeof window !== "undefined") {
        window.location.hash = "contact";
      }
      setStatus("idle");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(GAS_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          type: "lead_capture",
          email,
          goal,
        }),
      });

      if (!response.ok) {
        throw new Error(`Lead capture failed with status ${response.status}`);
      }

      setStatus("success");
      setEmail("");
      setGoal(GOALS[0]);
    } catch (err) {
      console.error("Lead capture error", err);
      setStatus("error");
      setError("送信に失敗しました。お手数ですが下のフォームからお問い合わせください。");
    }
  };

  if (status === "success") {
    return (
      <section className="section-container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand/20 bg-brand/5 p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold text-brand">
            資料送付のリクエストを受け付けました
          </h2>
          <p className="mt-2 text-sm text-brand/80">
            営業担当より24時間以内に資料とβ参加のご案内をお送りします。
          </p>
          <button
            type="button"
            className="btn-secondary mt-6"
            onClick={() => setStatus("idle")}
          >
            もう一度入力する
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-container">
      <div className="mx-auto flex flex-col gap-6 rounded-3xl border border-ink/10 bg-white p-8 shadow-card md:flex-row md:items-center md:gap-10">
        <div className="flex-1 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/70">
            QUICK ACCESS
          </span>
          <h2 className="text-3xl font-bold text-ink leading-tight">
            まずは<span className="text-brand">メールで資料・導入ステップ</span>を受け取る
          </h2>
          <p className="text-sm text-ink/70">
            「とりあえず情報だけ欲しい」という方のために、超短いフォームをご用意。広告施策に活用できる<span className="font-semibold text-brand">導入チェックリスト</span>も合わせてお送りします。
          </p>
        </div>
        <form className="flex flex-1 flex-col gap-5" onSubmit={handleSubmit}>
          {/* F視線: 上から下へ、フォーム→CTA */}
          <div className="relative">
            <label htmlFor="lead-email" className="block text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Work Email
            </label>
            <input
              id="lead-email"
              type="email"
              className="input mt-2 transition-all duration-200 focus:ring-2 focus:ring-brand focus:border-brand peer"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="lead-goal" className="block text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              What You Need
            </label>
            <select
              id="lead-goal"
              className="input mt-2 transition-all duration-200 focus:ring-2 focus:ring-brand focus:border-brand"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
            >
              {GOALS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {error && <p className="text-xs text-rose-600">{error}</p>}

          {/* 視線誘導：CTA強調 */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="relative group">
              <button
                type="submit"
                className="btn-primary w-full text-base font-bold shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/50 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === "loading"}
              >
                {status === "loading" ? "送信中..." : "資料を受け取る"}
              </button>
              {/* CTAへの視線誘導 */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand/10 to-emerald-400/10 blur-xl group-hover:blur-2xl transition-all" aria-hidden />
            </div>
            <p className="text-[11px] text-ink/50">
              送信いただいたメールアドレス宛にβ先行案内とチェックリストのダウンロードリンクをお送りします。
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
