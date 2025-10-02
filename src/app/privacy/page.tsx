import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "プライバシーポリシー | kizuna finder",
  description: "株式会社honkomaが提供する「kizuna finder」のプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-8 text-4xl font-bold text-ink">
          プライバシーポリシー
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-ink/80">
          <section>
            <p>
              株式会社honkoma（以下「当社」といいます。）は、当社が提供する「kizuna
              finder」および関連ウェブサイト・アプリ・管理画面等（以下総称して「本サービス」といいます。）における、ユーザーの個人情報等の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。なお、本ポリシーで用いる用語は、特段の定めがない限り、個人情報の保護に関する法律（以下「個人情報保護法」）その他関連法令に定義された意味によります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">第1条（事業者情報）</h2>
            <ul className="list-none space-y-1">
              <li>事業者名：株式会社honkoma</li>
              <li>所在地：文京区本駒込1-20-16 モンテベルデ本駒込102</li>
              <li>代表者名：林拓海</li>
              <li>代表電話：08085266978</li>
              <li>代表メール：quickclip@ltdhonkoma.com</li>
              <li>
                公式サイト：
                <a
                  href="https://ltdhonkoma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  https://ltdhonkoma.com/
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">第2条（適用範囲）</h2>
            <p>
              本ポリシーは、本サービスの提供・運営に関連して当社が取得・利用・保管・移転・削除等を行うすべての情報に適用されます。なお、当社がリンクする第三者のサイト・サービスでの情報取扱いについては、各事業者のポリシーに従うものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">第3条（定義）</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>「個人情報」等の用語は個人情報保護法等に従います。</li>
              <li>
                Cookie、広告識別子、アクセスログ、閲覧履歴等の「個人関連情報」について、法令で求められる場合は、本人の同意に基づき個人データとして取り扱います。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第4条（取得する情報の種類）
            </h2>
            <p>
              当社は、適法かつ公正な手段により、必要最小限の範囲で以下の情報を取得します。
            </p>

            <h3 className="mt-4 text-xl font-semibold text-ink">
              ユーザーが直接ご提供する情報
            </h3>
            <p>
              氏名、ニックネーム、会社名・部署・役職、住所、電話番号、メールアドレス、アカウントID、プロフィール情報、問い合わせ内容、本人確認書類（必要な場合）、請求・支払情報（請求先、取引ID等）など。
            </p>
            <p className="text-sm">
              ※クレジットカード番号等の機微な決済情報は決済代行事業者が処理し、当社は原則として保有しません。
            </p>

            <h3 className="mt-4 text-xl font-semibold text-ink">
              自動的に取得する情報
            </h3>
            <p>
              端末情報、OS・ブラウザ情報、IPアドレス、リファラ、タイムスタンプ、Cookie・広告識別子・セッションID、利用ログ（操作・エラー・認証）、閲覧・検索・クリック等の行動情報、位置情報（端末設定により許諾された場合）など。
            </p>

            <h3 className="mt-4 text-xl font-semibold text-ink">
              連携・外部サービスから取得する情報（同意範囲）
            </h3>
            <p>
              SNS/動画プラットフォーム（例：YouTube、Instagram、TikTok、X）等の公開プロフィール、投稿メタデータ、フォロワー数・エンゲージメント等の指標、連携許諾に基づくAPI経由データ、CRM/ヘルプデスク/広告・分析・決済等の外部ツールからの連携データ。
            </p>

            <h3 className="mt-4 text-xl font-semibold text-ink">
              生成AI・機械学習に関連して取り扱う情報
            </h3>
            <p>
              公開情報やユーザー提供コンテンツ、プロンプト、モデル入力/出力、推論結果、評価・フィードバック、チューニング・精度検証のためのログ等。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第5条（個人情報の収集方法）
            </h2>
            <p>
              当社は、ユーザーによる登録・入力、問い合わせ等の送信、API連携の許諾、Cookie等の利用、委託先・提携先からの適法な提供、公開情報の収集等の方法により情報を取得します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">第6条（利用目的）</h2>
            <p>当社は、取得した情報を、以下の目的で利用します。</p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>本サービスの提供・運営、本人確認、アカウント管理、認証</li>
              <li>問い合わせ対応・サポート、障害対応、重要なお知らせの通知</li>
              <li>
                機能追加・改善、品質向上、パフォーマンス最適化、セキュリティ対策
              </li>
              <li>課金・請求・支払処理、領収書発行、与信・不正利用防止</li>
              <li>
                クリエイター/インフルエンサーの探索・分析・スコアリング・レコメンド、案件管理・レポーティング
              </li>
              <li>
                マーケティング（キャンペーン、アンケート、イベント、メール配信等）
              </li>
              <li>統計データの作成（個人を識別できない形での分析・公表）</li>
              <li>利用規約違反の調査、法令対応、権利・利益・安全の保護</li>
              <li>上記目的に付随・関連する目的</li>
            </ol>
            <p className="mt-2 text-sm">
              ※
              利用目的を変更する場合は、変更前と合理的関連性を有する範囲で行い、当社所定の方法により公表又は通知します（第16条）。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第7条（Cookie等の利用・外部送信とオプトアウト）
            </h2>
            <p>
              当社は、利便性向上、利用状況の把握、広告配信・効果測定、サポート等のため、Cookie、ローカルストレージ、ピクセル、広告識別子等（以下「Cookie等」）を利用します。
            </p>
            <p>
              Cookie等の利用に伴い、ページURL、閲覧日時、リファラ、IPアドレス、端末・ブラウザ情報、識別子、行動ログ等が、分析・広告・SNS等の外部事業者に送信される場合があります。各事業者での取扱いは当該事業者のポリシーに従います。
            </p>

            <h3 className="mt-4 text-xl font-semibold text-ink">
              主な外部事業者（導入済み/予定）
            </h3>
            <div className="ml-4">
              <p className="font-semibold">（導入予定）Google Analytics 4（計測）</p>
              <p className="ml-4">
                送信される情報の例：ページURL、閲覧日時、リファラ、IPアドレス（設定により匿名化）、ブラウザ/端末情報、イベント（ページビュー等）、Cookie識別子（_ga
                等）
              </p>
              <p className="ml-4 mt-2">
                オプトアウト：各事業者のオプトアウトページから設定してください。
              </p>
              <ul className="ml-8 mt-1 list-disc space-y-1">
                <li>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    Google アナリティクス オプトアウト アドオン
                  </a>
                </li>
                <li>
                  （将来、広告機能を有効化した場合）
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    Google 広告設定
                  </a>
                </li>
              </ul>
            </div>
            <p className="mt-4">
              ブラウザ設定でCookieを無効化できますが、本サービスの一部機能が利用できない場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">第8条（第三者提供）</h2>
            <p>
              当社は、次の場合を除き、本人の同意なく個人データを第三者に提供しません。
            </p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                法令に基づく場合、人の生命・身体・財産の保護に必要な場合、公衆衛生の向上・児童の健全育成の推進に特に必要な場合、国等の法令事務への協力が必要な場合
              </li>
              <li>
                利用目的達成に必要な範囲で業務委託する場合（委託先への適切な監督を行います）
              </li>
              <li>事業承継（合併、会社分割、営業譲渡等）に伴う提供</li>
              <li>
                個人関連情報を第三者から取得し当社で個人データとして取り扱う場合に、法令で求められる同意取得・確認等を行ったとき
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">第9条（委託）</h2>
            <p>
              当社は、システム運用、データ保管、決済、カスタマーサポート、物流、分析・広告等を委託することがあり、委託先に対する必要かつ適切な監督を行います。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">第10条（共同利用）</h2>
            <p>
              現時点で共同利用は実施していません。共同利用を開始する場合には、共同利用する項目、範囲、目的、管理責任者等を本ポリシーに追記・公表します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">第11条（国外移転）</h2>
            <p>
              当社は、クラウド、分析、サポート等の目的で、外国にある第三者へ個人データを提供・移転する場合があります。その際は、本人の同意取得、移転先の制度確認、契約等による体制整備その他個人情報保護法に基づく必要な措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第12条（安全管理措置）
            </h2>
            <p>
              当社は、個人データの漏えい、滅失、き損等の防止及び是正のため、次の安全管理措置を講じます（概要）。
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                組織的：管理規程整備、権限管理、職務分掌、ログ監査、委託先管理
              </li>
              <li>
                人的：教育・誓約、権限に応じたアクセス、退職時の権限剥奪
              </li>
              <li>
                物理的：入退室管理、デバイス持出制限、盗難・紛失防止、媒体廃棄
              </li>
              <li>
                技術的：暗号化、アクセス制御、多要素認証、脆弱性/マルウェア対策、バックアップ
              </li>
            </ul>
            <p className="mt-2 text-sm">
              ※
              詳細の開示が当社のセキュリティに支障を及ぼす場合を除き、合理的範囲で個別開示に応じます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">第13条（保有期間）</h2>
            <p>
              個人データは、利用目的達成に必要な範囲で保有し、不要となった場合は遅滞なく消去又は匿名化します（法令に保存義務がある場合を除く）。
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>アカウント情報：退会後 12ヶ月</li>
              <li>請求・会計データ：7年（会社規程で10年とする場合あり）</li>
              <li>ログデータ：運用・セキュリティ目的で 13ヶ月</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第14条（未成年者の個人情報）
            </h2>
            <p>
              未成年のユーザーは、親権者等の同意を得た上で本サービスをご利用ください。13歳未満の児童の情報を故意に収集しません。判明した場合は速やかに削除します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第15条（自動化された意思決定）
            </h2>
            <p>
              本サービスでは、探索・要約・スコアリング・レコメンド等の自動処理を行う場合があります。重要な判断に関わる事項については、合理的範囲で人的関与に努めます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第16条（利用目的の変更）
            </h2>
            <p>
              当社は、利用目的が変更前と合理的関連性を有すると認められる場合に限り、個人情報の利用目的を変更することができます。変更後の目的は、当社所定の方法（本サイト掲示・個別通知等）により公表又は通知します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第17条（開示等の請求／訂正・削除・利用停止等）
            </h2>
            <p>
              当社は、保有個人データに関して、本人（又は正当な代理人）からの以下の請求に対応します：利用目的の通知、開示、訂正・追加・削除（「訂正等」）、利用停止・消去、第三者提供の停止（以下総称して「開示等」）。
            </p>
            <p className="mt-2">
              申請に際しては、本人確認書類（代理人の場合は委任状等）の提出をお願いする場合があります。
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>手数料：1,000円/件</li>
              <li>
                回答方法：書面又は電子的方法。法令に定める不開示事由がある場合は、全部又は一部を開示しないことがあります。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第18条（YouTube API等のプラットフォーム特則）
            </h2>
            <p>
              本サービスは、YouTube
              APIサービスその他の外部APIを利用して、YouTube等のコンテンツやデータを取得・分析する場合があります。
            </p>
            <p className="mt-2">
              ユーザーは、本サービスの利用により、以下の規約にも同意したものとみなされます。
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  YouTube利用規約
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  Googleプライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/youtube/terms/api-services-terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline"
                >
                  YouTube APIサービス利用規約
                </a>
              </li>
            </ul>
            <p className="mt-2">
              ユーザーが本サービスを通じてYouTubeデータを利用する場合、各API規約に定められる制限を遵守してください。
            </p>
            <p className="mt-2">
              APIの仕様変更・制限・提供停止等により、本サービスの全部又は一部が利用できない場合があっても、当社は責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第19条（プライバシーポリシーの変更）
            </h2>
            <p>
              本ポリシーは、法令・ガイドラインの改定やサービス内容の変更等に応じて改定することがあります。重要な変更は本サイト等で周知し、掲示又は通知時に効力を生じます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink">
              第20条（お問い合わせ窓口）
            </h2>
            <p>
              本ポリシー、個人情報の取扱い、開示等の請求、苦情・相談に関するお問い合わせは、下記へご連絡ください。
            </p>
            <ul className="mt-2 list-none space-y-1">
              <li>窓口名：株式会社honkoma 個人情報お問い合わせ窓口</li>
              <li>メール：quickclip@ltdhonkoma.com</li>
              <li>住所：113-0021 文京区本駒込1-20-16 モンテベルデ本駒込102</li>
              <li>受付時間：平日10:00〜18:00（年末年始・当社休業日を除く）</li>
            </ul>
          </section>

          <section className="mt-12 border-t border-ink/20 pt-8 text-right">
            <p>制定日：2025年10月1日</p>
            <p className="mt-2 font-semibold">株式会社honkoma</p>
            <p>kizuna finder運営チーム</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
