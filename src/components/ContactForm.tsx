"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { pushEvent } from "@/lib/analytics";

const GAS_ENDPOINT = process.env.NEXT_PUBLIC_GAS_WEBAPP_URL;

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type ValidationErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

export const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: ValidationErrors = {};
    if (!formState.name.trim()) {
      nextErrors.name = "氏名は必須です";
    }
    if (!formState.email.trim()) {
      nextErrors.email = "メールアドレスは必須です";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = "メールアドレスの形式が正しくありません";
    }
    if (!formState.phone.trim()) {
      nextErrors.phone = "電話番号は必須です";
    } else if (!/^[0-9+\-() ]{6,20}$/.test(formState.phone)) {
      nextErrors.phone = "電話番号の形式が正しくありません";
    }
    if (!formState.message.trim()) {
      nextErrors.message = "お問い合わせ内容を入力してください";
    } else if (formState.message.length > 1000) {
      nextErrors.message = "1000文字以内で入力してください";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    if (!GAS_ENDPOINT) {
      setErrorMessage("送信エンドポイントが未設定です。NEXT_PUBLIC_GAS_WEBAPP_URL を設定してください。");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);
    pushEvent({ event: "form_submit" });

    try {
      const response = await fetch(GAS_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const payload = await response.json().catch(() => ({}));
      if (payload.ok !== undefined && payload.ok !== true) {
        throw new Error("Unexpected response from GAS endpoint");
      }

      setStatus("success");
      setFormState(INITIAL_STATE);
      pushEvent({ event: "form_success" });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage("送信に失敗しました。時間を置いて再度お試しください。");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="section-container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl bg-brand/10 p-10 text-center shadow-card">
          <h2 className="text-2xl font-bold text-brand">
            お問い合わせを受け付けました
          </h2>
          <p className="text-sm text-ink/70">
            担当者より1営業日以内にご連絡いたします。
          </p>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setStatus("idle")}
          >
            さらに問い合わせる
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-container">
      <div className="mx-auto w-full max-w-2xl space-y-6 rounded-2xl border border-brand/15 bg-white p-10 shadow-card">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-ink">β版への参加・お問い合わせ</h2>
          <p className="text-sm text-ink/70">
            1ヶ月の無料トライアルを希望される場合は、下記フォームをご利用ください。
          </p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-ink">
              氏名 <span className="text-brand">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="input mt-1"
              autoComplete="name"
              value={formState.name}
              onChange={handleChange("name")}
              required
            />
            {errors.name && <p className="mt-1 text-xs text-brand">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-ink">
              メールアドレス <span className="text-brand">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="input mt-1"
              autoComplete="email"
              value={formState.email}
              onChange={handleChange("email")}
              required
            />
            {errors.email && <p className="mt-1 text-xs text-brand">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-ink">
              電話番号 <span className="text-brand">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="input mt-1"
              autoComplete="tel"
              value={formState.phone}
              onChange={handleChange("phone")}
              required
            />
            {errors.phone && <p className="mt-1 text-xs text-brand">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-ink">
              会社名 / チーム名
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="input mt-1"
              autoComplete="organization"
              value={formState.company}
              onChange={handleChange("company")}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-ink">
              お問い合わせ内容 <span className="text-brand">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="input mt-1 h-32 resize-none"
              value={formState.message}
              onChange={handleChange("message")}
              required
            />
            {errors.message && (
              <p className="mt-1 text-xs text-brand">{errors.message}</p>
            )}
            <p className="mt-1 text-xs text-ink/50">1000文字まで。</p>
          </div>
          {errorMessage && (
            <div className="rounded-lg border border-brand/30 bg-brand/10 p-3 text-sm text-brand">
              {errorMessage}
            </div>
          )}
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "送信中..." : "送信する"}
            </button>
            <p className="text-xs text-ink/60">
              フォーム送信で<a href="/privacy" className="underline">プライバシーポリシー</a>に同意したものとみなします。
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
