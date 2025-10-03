import Image from "next/image";

const items = [
  {
    title: "勝ちパターンが一目でわかる",
    description:
      "売れている投稿の構図・コピー・視聴者層を可視化し、推薦理由と共に提案書にそのまま貼れる形式で出力します。",
    icon: "ic-fit.svg",
  },
  {
    title: "判断待ちの時間を削減",
    description:
      "自然文の指示から数十秒で候補→連絡手段→アウトリーチ下書きまで生成。広告会議に間に合わせるためのリサーチ時間をほぼゼロに。",
    icon: "ic-speed.svg",
  },
  {
    title: "社内説明がスムーズ",
    description:
      "Why?の定量指標とナラティブを自動で添付。ブランドフィットや成果見込みを言語化し、決裁者の“なぜ?”に即回答できます。",
    icon: "ic-why.svg",
  },
];

export const Strengths = () => {
  return (
    <section id="strengths" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            WHY KIZUNAFINDER
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            CVR改善につながる3つの体験価値
          </h2>
          <p className="max-w-[56ch] text-sm text-slate-600">
            広告から流入した直後のユーザーが“これなら成果が出る”と確信できる情報を先回りで提示し、無料トライアルへのハードルを下げます。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex min-h-[180px] flex-col gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-[0_1px_2px_rgba(16,24,40,0.06)] transition hover:-translate-y-[1px] hover:shadow-md hover:ring-slate-300 focus-within:-translate-y-[1px] focus-within:shadow-md focus-within:ring-slate-300"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-100">
                <Image
                  src={`/images/${item.icon}`}
                  alt=""
                  width={28}
                  height={28}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="line-clamp-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
