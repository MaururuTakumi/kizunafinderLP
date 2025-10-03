import Link from "next/link";

const policyLinks = [
  { label: "プライバシーポリシー", href: "/privacy" },
];

const resourceLinks = [
  { label: "プロダクト", href: "/#hero" },
  { label: "テンプレート", href: "/#templates" },
  { label: "FAQ", href: "/#faq" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 px-5 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="space-y-3">
            <p className="text-lg font-semibold">KizunaFinder</p>
            <p className="text-sm text-white/70">
              AIによるインフルエンサーキャスティングプラットフォーム。
              ブランドの意図を理解し、最適な候補とWhy?を提示します。
            </p>
            <p className="text-sm text-white/50">
              お問い合わせ: <a href="mailto:quickclip@ltdhonkoma.com">quickclip@ltdhonkoma.com</a>
            </p>
          </div>
          <div className="flex gap-10 text-sm">
            <div className="space-y-3">
              <p className="font-semibold">リソース</p>
              <ul className="space-y-2 text-white/70">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">ポリシー</p>
              <ul className="space-y-2 text-white/70">
                {policyLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {year} KizunaFinder. All rights reserved.</span>
          <span>βプログラム: 招待制で先行ユーザー募集中</span>
        </div>
      </div>
    </footer>
  );
};
