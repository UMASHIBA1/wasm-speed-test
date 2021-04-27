# rust wasm env on docker

WebAssembly(Rust)プロジェクトを動かせる Docker 環境です。

## 環境構築手順

### 1. 実行環境作成

`docker-build.ps1`のスクリプトを実行した後、`docker-run.ps1`のスクリプトを実行してください。  
app ディレクトリ内が共有された状態で rust wasm 実行環境に入ります。  
基本的に app ディレクトリ内で作業することを想定しています。

実行環境は[こちら](https://rustwasm.github.io/docs/book/game-of-life/setup.html)のセットアップが完了した状態になっています

### 2. cargo generate でプロジェクト作成

```
cargo generate --git https://github.com/rustwasm/wasm-pack-template
```

※ ここでプロジェクト名が聞かれるので今回使うプロジェクト名`[ProjectName]`を指定

### 3. wasm-pack build で js との橋渡しをするコード群生成

```
cd `[ProjectName]`
wasm-pack build
```

### 4. Web アプリケーション部分を作成

```
npm init wasm-app www
cd www
npm install
```

### 5. 開発サーバー起動用の設定

Docker 外部のブラウザから開発サーバーにアクセスできるように www/package.json の scripts を変更する

```json
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "start": "webpack-dev-server"
  },
```

↓

```json
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "start": "webpack-dev-server --host 0.0.0.0"
  },
```

### 6. 開発サーバー起動

```
npm run start
```

### 7. ブラウザからアクセス

以下の URL にアクセス

http://127.0.0.1:8080
