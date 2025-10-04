import { BetaSection } from "@/components/BetaSection";
import { CompareTable } from "@/components/CompareTable";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { FloatingCta } from "@/components/FloatingCta";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadCapture } from "@/components/LeadCapture";
import { NowNext } from "@/components/NowNext";
import { Steps } from "@/components/Steps";
import { Strengths } from "@/components/Strengths";
import { Templates } from "@/components/Templates";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* 背景装飾パターン - ドットパターン */}
      <div className="fixed inset-0 -z-10 opacity-[0.015]" aria-hidden>
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-slate-900" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* 斜めストライプ装飾（薄く） */}
      <div className="fixed top-0 right-0 w-1/3 h-screen -z-10 opacity-[0.02]" aria-hidden>
        <svg width="100%" height="100%">
          <pattern id="stripes" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="5" height="10" fill="currentColor" className="text-violet-600" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#stripes)" />
        </svg>
      </div>

      {/* グリッドノイズ */}
      <div className="fixed bottom-0 left-0 w-1/2 h-1/2 -z-10 opacity-[0.03]" aria-hidden>
        <svg width="100%" height="100%">
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-600" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Header />
      <main className="flex flex-col gap-16 pb-32">
        <Hero />
        <Strengths />
        <Steps />
        <CompareTable />
        <NowNext />
        <Templates />
        <BetaSection />
        <ContactForm />
        <Faq />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
