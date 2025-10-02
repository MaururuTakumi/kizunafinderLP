import Image from "next/image";

const items = [
  {
    title: "適合度",
    description: "意図を読み取り、“伸びてる投稿”から逆引きして候補を提示。",
    icon: "ic-fit.svg",
  },
  {
    title: "速度",
    description: "自然言語での入力から数十秒で候補→連絡先→下書きまでを生成。",
    icon: "ic-speed.svg",
  },
  {
    title: "根拠",
    description: "Why?で「なぜ合うか」を定量・自然文で提示し、社内説明も一発。",
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
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">選ばれる3つの理由</h2>
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
