const nowItems = [
  "自然文検索でニーズを理解",
  "候補リストとスコアを提示",
  "Why?で根拠と引用を表示",
  "主要チャネルの連絡先を抽出（限定提供）",
  "Gmail下書きを生成して共有",
];

const nextItems = [
  "伸びる投稿の自動収集と逆引き",
  "AIによるディレクション提案",
  "成果データからの逆学習サイクル",
  "CRM / MA との連携",
];

export const NowNext = () => {
  return (
    <section id="nownext" className="section-container section-container-compact">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-brand/10 bg-white p-8 shadow-card">
          <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-brand">
            NOW
          </h3>
          <h2 className="mt-2 text-2xl font-bold text-ink">
            いま提供しているワークフロー
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-ink/80">
            {nowItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-brand/10 bg-brand/5 p-8 shadow-card">
          <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-brand">
            NEXT
          </h3>
          <h2 className="mt-2 text-2xl font-bold text-ink">
            これから強化する領域
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-ink/80">
            {nextItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
