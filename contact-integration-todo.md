# Contact Integration TODO

このシートは「Coding Agent が準備するもの」と「人間（hayashitakumi さん）が実行するもの」を分け、迷いなく進めるための手順書です。下の順番どおりに進めてください。

## Coding Agent タスク（先に共有する情報）
- [ ] GAS `Code.gs` テンプレートを提示する。以下をそのままコピー＆ペーストするだけで動作するコードです。必要箇所（`SHEET_ID` 等）は Script Properties で差し込む前提にしています。

```ts
const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();
const DEFAULT_SHEET_NAME = 'Leads';
const TIMEZONE = 'Asia/Tokyo';

function doPost(e) {
  try {
    const payload = parsePayload(e);
    validatePayload(payload);

    const config = getConfig();
    const sheet = getSheet(config);

    appendRow(sheet, payload);
    notifyDiscord(config, payload);

    return createResponse({ ok: true });
  } catch (err) {
    console.error('[doPost] error', err);

    if (err && err.name === 'ValidationError') {
      return createResponse({ ok: false, error: 'validation_error', messages: err.messages || [] });
    }

    return createResponse({ ok: false, error: 'internal_error' });
  }
}

function parsePayload(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('invalid_request');
  }

  const payload = JSON.parse(e.postData.contents);
  return {
    name: String(payload.name || ''),
    email: String(payload.email || ''),
    company: payload.company ? String(payload.company) : '',
    message: String(payload.message || ''),
  };
}

function validatePayload(payload) {
  const issues = [];

  if (!payload.name.trim()) {
    issues.push('name is required');
  }
  if (!payload.email.trim()) {
    issues.push('email is required');
  } else if (!/^([^\s@]+)@([^\s@]+)$/i.test(payload.email.trim())) {
    issues.push('email format is invalid');
  }
  if (!payload.message.trim()) {
    issues.push('message is required');
  } else if (payload.message.trim().length > 1000) {
    issues.push('message must be 1000 characters or fewer');
  }

  if (issues.length > 0) {
    const error = new Error('validation_error');
    error.name = 'ValidationError';
    error.messages = issues;
    throw error;
  }
}

function appendRow(sheet, payload) {
  const timestamp = Utilities.formatDate(new Date(), TIMEZONE, 'yyyy/MM/dd HH:mm:ss');
  sheet.appendRow([
    timestamp,
    payload.name.trim(),
    payload.email.trim(),
    payload.company.trim(),
    payload.message.trim(),
  ]);
}

function notifyDiscord(config, payload) {
  if (!config.discordWebhookUrl) {
    console.warn('[notifyDiscord] DISCORD_WEBHOOK_URL is not set; skipping notification');
    return;
  }

  const content = formatDiscordMessage(payload);

  try {
    UrlFetchApp.fetch(config.discordWebhookUrl, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ content }),
      muteHttpExceptions: true,
    });
  } catch (err) {
    console.error('[notifyDiscord] failed', err);
  }
}

function formatDiscordMessage(payload) {
  const company = payload.company.trim() || '(未入力)';
  return [
    '📮 新しいお問い合わせが届きました',
    `氏名: ${payload.name.trim()}`,
    `メール: ${payload.email.trim()}`,
    `会社: ${company}`,
    '内容:',
    payload.message.trim(),
  ].join('\n');
}

function getConfig() {
  const sheetId = SCRIPT_PROPERTIES.getProperty('SHEET_ID');
  const sheetName = SCRIPT_PROPERTIES.getProperty('SHEET_NAME') || DEFAULT_SHEET_NAME;
  const discordWebhookUrl = SCRIPT_PROPERTIES.getProperty('DISCORD_WEBHOOK_URL');

  if (!sheetId) {
    throw new Error('Missing Script Property: SHEET_ID');
  }

  return {
    sheetId,
    sheetName,
    discordWebhookUrl,
  };
}

function getSheet(config) {
  const spreadsheet = SpreadsheetApp.openById(config.sheetId);
  const sheet = spreadsheet.getSheetByName(config.sheetName);
  if (!sheet) {
    throw new Error(`Sheet not found: ${config.sheetName}`);
  }
  return sheet;
}

function createResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
```

- [ ] Script Properties に設定すべきキーを明示する。
  - `SHEET_ID`: 例 `1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890` (スプレッドシート URL の `/d/` と `/edit` の間)。
  - `SHEET_NAME`: 例 `Leads`（シート名を変えないなら省略可能）。
  - `DISCORD_WEBHOOK_URL`: Discord で発行した Incoming Webhook URL。

- [ ] `.env.local` に追加する値のテンプレートを提示する。

```dotenv
NEXT_PUBLIC_GAS_WEBAPP_URL="https://script.google.com/macros/s/<deployment-id>/exec"
```

- [ ] テスト時に確認すべきポイントを整理して共有する。
  1. フォーム送信後に成功 UI が表示されること。
  2. スプレッドシートに `[timestamp, name, email, company, message]` が 1 行追加されること。
  3. Discord の指定チャンネルにメッセージが届くこと。本文は GAS で整形したフォーマットと一致すること。
  4. Discord Webhook URL をわざと無効値にして再送信した際、シート追加は成功し、Discord 側が失敗しても GAS が落ちないこと（`notifyDiscord` のログで確認）。

## 人間タスク（hayashitakumi さんが実施）
- [ ] Google スプレッドシートを新規作成し、ファイル名を任意（例: `KizunaFinder Contacts`）に設定する。
- [ ] 1 枚目のシート名を `Leads` に変更し、1 行目にカラム名 `timestamp`, `name`, `email`, `company`, `message` を入力する。
- [ ] スプレッドシートの URL から `SHEET_ID` を控える。
- [ ] スプレッドシートで `拡張機能 > Apps Script` を開き、既存コードを削除して上記の `Code.gs` を貼り付け、保存する。
- [ ] Apps Script の `プロジェクトの設定` で Script Properties を開き、以下の 3 つを設定する。
  - `SHEET_ID`: 前ステップで控えた ID。
  - `SHEET_NAME`: `Leads`（別名にしたい場合はシート名と合わせる）。
  - `DISCORD_WEBHOOK_URL`: Discord の Incoming Webhook URL。
- [ ] Apps Script のエディタで `サービス` に `UrlFetchApp` と `SpreadsheetApp` が含まれていることを確認（標準で利用可）。
- [ ] `デプロイ > 新しいデプロイ > 種類: ウェブアプリ` を選択し、以下で公開する。
  - 説明: `contact-form-handler v1` など任意。
  - `実行するアプリケーション`: 今のプロジェクト。
  - `アクセスできるユーザー`: 全員。
  - デプロイ後に表示される Web アプリ URL をコピーして控える。
- [ ] プロジェクトの `.env.local` に Coding Agent が提示したテンプレートどおりに `NEXT_PUBLIC_GAS_WEBAPP_URL` を追加し、Next.js を再起動する（開発中ならターミナルで `npm run dev` を再実行）。
- [ ] ローカルでフォームにテスト入力して送信し、以下 3 点をチェックする。
  1. フロントエンドで成功メッセージが表示される。
  2. スプレッドシートに新しい行が追加されている（文字化けがないことも確認）。
  3. Discord に通知が届く。
- [ ] Discord Webhook URL を無効値に変更して再デプロイし、フォーム送信後にスプレッドシートのみ更新される動きを確認したら、正しい URL に戻して再デプロイする。（運用時のフェイルセーフ確認。）
- [ ] すべて問題なければ `.env.local` を共有リポジトリにコミットしないよう注意しつつ、作業完了とする。

---
この TODO を上から順番に実施すれば、LP の問い合わせデータがスプレッドシート保存と Discord 通知の両方で運用できるようになります。
