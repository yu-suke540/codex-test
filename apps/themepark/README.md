# Theme Park Prototype（ステップ1）

このディレクトリは、ブラウザで動く 2D 遊園地経営ゲームの土台です。
ステップ1では、Canvas 上に草地タイルを全面描画する最小構成のみを実装しています。

## 起動方法

### 1. Chrome で直接開く
1. `apps/themepark/index.html` を Chrome で開きます。

### 2. 簡易サーバで開く（直接開いて問題がある場合）
1. リポジトリのルートで次を実行します。
   - `py -m http.server 8000`
   - または `python -m http.server 8000`
2. Chrome で `http://localhost:8000/apps/themepark/index.html` を開きます。

## ステップ1の確認ポイント

- 画面いっぱいに草地タイル（32px 四方）が表示される。
- ウィンドウをリサイズしても表示が崩れず、全面に再描画される。
- ブラウザの開発者ツールの Console にエラーが出ていない。
