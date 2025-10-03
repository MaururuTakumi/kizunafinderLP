import Link from "next/link";

const perks = [
  "初期導入のサクセス伴走（週1 MTG）",
  "目的に合わせたテンプレート作成サポート",
  "導入企業コミュニティへの招待",
  "リクエスト機能の優先開発",
];

export const BetaSection = () => {
  return (
    <section id="beta" className="section-container rounded-3xl bg-brand text-white">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
            BETA PROGRAM
          </span>
          <h2 className="text-3xl font-bold leading-tight">
            βプログラム参加企業を限定募集
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
      <div className="flex flex-wrap items-center gap-3 pt-6">
        <Link href="/#contact" className="btn-primary bg-white text-brand hover:opacity-100">
          1週間無料トライアルを始める
        </Link>
        <span className="text-xs text-brand-100">
          クレカ不要・β定員に達し次第クローズします
        </span>
      </div>
    </section>
  );
};
