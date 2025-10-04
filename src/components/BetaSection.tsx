import Link from "next/link";

const perks = [
  "初期導入のサクセス伴走（週1 MTG）",
  "目的に合わせたテンプレート作成サポート",
  "導入企業コミュニティへの招待",
  "リクエスト機能の優先開発",
];

export const BetaSection = () => {
  return (
    <section id="beta" className="section-container rounded-3xl bg-gradient-to-br from-brand via-blue-600 to-violet-600 text-white relative overflow-hidden">
      {/* 装飾的な要素 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" aria-hidden />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between relative z-10">
        <div className="flex-1 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            BETA PROGRAM
          </span>
          <h2 className="text-3xl font-bold leading-tight">
            <span className="relative inline-block">βプログラム<span className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-300/50 rotate-1" aria-hidden /></span>参加企業を<span className="text-yellow-200">限定募集</span>
          </h2>
          <p className="text-sm text-brand-50">
            1週間の無料トライアルを通じて、最適なワークフローの定着まで私たちが伴走します。
          </p>
        </div>
        <div className="flex-1">
          <ul className="space-y-3 text-sm">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-white"></span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative group">
          <Link href="/#contact" className="btn-primary bg-white text-brand hover:opacity-100 shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2 group-hover:gap-3">
            1週間無料トライアルを始める
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          {/* 緊急性バッジ */}
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
            残り枠わずか
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-sm text-white/90 font-medium">
            🎁 今だけ：導入サポート＋テンプレート集プレゼント
          </span>
          <span className="text-xs text-white/70">
            クレカ不要・β定員に達し次第クローズ
          </span>
        </div>
      </div>
    </section>
  );
};
