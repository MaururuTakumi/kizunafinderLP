import Link from "next/link";

const perks = [
  "初期導入のサクセス伴走（週1 MTG）",
  "目的に合わせたテンプレート作成サポート",
  "導入企業コミュニティへの招待",
  "リクエスト機能の優先開発",
];

export const BetaSection = () => {
  return (
    <section id="beta" className="section-container rounded-3xl bg-brand text-white relative overflow-hidden border-2 border-brand/20">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            BETA PROGRAM
          </span>
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
            βプログラム
            <br />
            参加企業を限定募集
          </h2>
          <p className="text-base text-white/90 leading-relaxed">
            1ヶ月の無料トライアルを通じて、最適なワークフローの定着まで私たちが伴走します。
          </p>
        </div>
        <div className="flex-1">
          <ul className="space-y-3.5 text-sm">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-emerald-300 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/95">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
          <div className="relative group flex-shrink-0">
            <Link href="/#contact" className="btn-primary bg-white text-brand hover:bg-white/95 shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2 group-hover:gap-3 text-base font-bold px-8 py-4">
              1ヶ月無料トライアルを始める
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            {/* 緊急性バッジ */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
              残り枠わずか
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-white font-semibold flex items-center gap-1.5">
              今だけ：導入サポート+毎週無料相談
            </span>
            <span className="text-xs text-white/70">
              クレカ不要・β定員に達し次第クローズ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
