# お問い合わせフォーム要件定義

## 1. 概要
- 目的: LP の `ContactForm` から送信された内容を Google スプレッドシートに自動保存し、同時に Discord に通知する。
- 対象範囲: Next.js (フロントエンド) → Google Apps Script (サーバレス) → スプレッドシート / Discord Webhook。
- 前提: Google フォームは使用しない。Apps Script Web アプリを新規作成する。

## 2. データフロー
1. ユーザーが LP の `ContactForm` に「氏名・メール・会社名・お問い合わせ内容」を入力し送信。
2. Next.js から Apps Script Web アプリ (`NEXT_PUBLIC_GAS_WEBAPP_URL`) に JSON で POST。
3. Apps Script は受信データを検証 → スプレッドシートに 1 行追記 → Discord Webhook にメッセージ投稿 → 成功レスポンス ({ ok: true }) を返却。
4. Next.js 側はレスポンスを受け取り、成功/失敗 UI を表示し、`form_success` イベントを計測に送出。

## 3. Google スプレッドシート & Apps Script
### 3.1 スプレッドシート
- 新規ファイル例: `KizunaFinder Contacts` (任意のドライブ階層)。
- シート名: `Leads` (任意だが固定しておく)。
- カラム構成 (左から順番に固定):
  1. `timestamp` (Apps Script が `Asia/Tokyo` で自動付与)
  2. `name`
  3. `email`
  4. `company`
  5. `message`
- 文字コードは UTF-8。Apps Script から `appendRow` でリッチテキストは使わない。

### 3.2 Apps Script (GAS) Web アプリ
- `doPost(e)` を実装する。想定処理:
  ```ts
  function doPost(e) {
    try {
      const payload = JSON.parse(e.postData.contents);
      validatePayload(payload);          // 必須項目/文字数チェック
      const sheet = getSheet();          // SpreadsheetApp.openById(...)
      appendRow(sheet, payload);         // [timestamp, name, email, company, message]
      notifyDiscord(payload);            // ウェブフックに送信
      return createResponse({ ok: true });
    } catch (err) {
      console.error(err);
      return createResponse({ ok: false, error: "internal_error" }, 500);
    }
  }
  ```
- `validatePayload` では以下を確認:
  - `name`, `email`, `message` は非空。
  - `email` は簡易メールフォーマットに一致。
  - `message` は 1000 文字以内。
- `appendRow` は `new Date()` を `Utilities.formatDate` で `Asia/Tokyo` に整形し、シートに追記。
- エラー時も `console.error` を残し、Discord 通知は飛ばさない (保存失敗時は通知を抑止)。
- 公開設定: 「ウェブアプリとして導入」→「アプリケーションにアクセスできるユーザー: 全員」。発行された URL をフロントエンドで利用。

## 4. Discord Webhook
- Discord 側で Incoming Webhook を作成し、URL を Apps Script のスクリプトプロパティに保存。
- メッセージ内容はプレーンテキストで統一 (Embed 不使用):
  ```text
  📮 新しいお問い合わせが届きました
  氏名: ${name}
  メール: ${email}
  会社: ${company || "(未入力)"}
  内容:
  ${message}
  ```
- `UrlFetchApp.fetch(webhookUrl, { method: "post", contentType: "application/json", payload: JSON.stringify({ content: formattedMessage }) });`
- 通知失敗時もシート保存は成功させ、Script ログで検知。

## 5. Next.js 側の実装ポイント
- `.env.local` に `NEXT_PUBLIC_GAS_WEBAPP_URL="https://script.google.com/macros/s/.../exec"` を追加。
- `ContactForm` から送信する JSON:
  ```json
  {
    "name": "山田 太郎",
    "email": "taro@example.com",
    "company": "Kizuna inc.",
    "message": "β版の詳細を知りたいです"
  }
  ```
- 成功レスポンス `{ ok: true }` でフォームを初期化し、成功 UI を表示。エラーレスポンスは 1 行テキストでユーザーに通知。
- `pushEvent({ event: "form_submit" })`/`form_success` は既存の通り使用。

## 6. セキュリティ・運用
- 現時点では追加トークンなしで公開。Google 側のアクセスログを定期チェック。
- 今後の拡張余地: Shared Secret の導入、reCAPTCHA/Turnstile の追加、Discord 通知にリトライ機構を持たせる等。
- GAS デプロイ更新後は URL が変わる点に注意。バージョン管理で `doPost` の振る舞いを固定する。

## 7. テストフロー
1. `.env.local` に GAS URL を設定し、`npm run dev` でローカル確認。
2. フォームにテストデータを送信し、`status === "success"` になることを確認。
3. スプレッドシートに新規行が追加され、各カラムが正しく反映されているか確認。
4. Discord チャンネルに通知が届き、内容が整形されているかを確認。
5. Discord Webhook URL をあえて間違えて再デプロイし、シート保存のみ成功することを確認 (通知失敗時の挙動テスト)。

以上を満たせば、LP からの問い合わせがスプレッドシート保存＆Discord 通知される運用が完成します。
