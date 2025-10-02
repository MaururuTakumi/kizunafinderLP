const templates = [
  "Z世代向けのスキンケアで伸びているTikTokを分析して",
  "直近1ヶ月で平均エンゲージが上がっているファッション系インスタグラマー",
  "YouTubeでレビューが好評な家電クリエイターの候補",
  "数万人規模のコミュニティを運営しているX（旧Twitter）インフルエンサー",
  "Why?で社内説明に使えるポイントも整理して",
];

export const Templates = () => {
  return (
    <section id="templates" className="section-container">
      <div className="flex flex-col gap-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          PROMPT TEMPLATE
        </span>
        <h2 className="text-3xl font-bold text-ink">そのまま使えるクエリテンプレ</h2>
        <p className="text-ink/70">
          自然文で入力するだけ。意図も粒度も、テンプレートがガイドします。
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {templates.map((template) => (
          <span
            key={template}
            className="inline-flex max-w-sm items-center rounded-full border border-brand/20 bg-white px-4 py-2 text-sm text-ink/80 shadow-sm"
          >
            {template}
          </span>
        ))}
      </div>
    </section>
  );
};
