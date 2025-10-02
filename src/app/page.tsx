import { BetaSection } from "@/components/BetaSection";
import { CompareTable } from "@/components/CompareTable";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { FloatingCta } from "@/components/FloatingCta";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NowNext } from "@/components/NowNext";
import { Steps } from "@/components/Steps";
import { Strengths } from "@/components/Strengths";
import { Templates } from "@/components/Templates";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main className="flex flex-col gap-16 pb-32">
        <Hero />
        <Strengths />
        <Steps />
        <CompareTable />
        <NowNext />
        <Templates />
        <BetaSection />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
