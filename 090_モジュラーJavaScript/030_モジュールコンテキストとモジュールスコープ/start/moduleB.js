/*
  ・「ES Modules (ESM)」を使用した場合「グローバルコンテキスト (JSファイルのトップレベルに書かれたコード)」が「モジュールコンテキスト」になる。
  ・「モジュールコンテキスト」では「モジュールコンテキスト内で宣言された変数・関数 (グローバルスコープ・スクリプトスコープ)」「グローバルオブジェクト (windowオブジェクト)」が使える。
  ・「ES Modules (ESM)」を使用した場合「スクリプトスコープ (JSファイルのトップレベルのlet・const)」が「モジュールスコープ」になる。
  ・「モジュールスコープ」は「export」しないとインポート先で使用できない。
*/

// 「モジュールコンテキスト」では「this」を使用できない。
console.log(this); // 「undefined」が表示される。

function fn() {
  console.log(this);
}
//  関数として実行される場合、トップレベルから呼び出されることになるので「モジュールコンテキスト」になる。
// 「モジュールコンテキスト」では「this」を使用できない。
fn(); // 「undefined」が表示される。

const obj = {
  fn,
};
// 「obj」を経由して「fnメソッド」を呼び出す場合「fnメソッド」内の「this」は「obj」になる。
obj.fn(); // 「{fn: ƒ}」が表示される。

//  windowオブジェクトは使用可能。
console.log(window); // 「{window: Window, self: Window, document: document, name: '', location: Location, …}」が表示される。

//  ファイルを読み込むだけの場合「from」は省略可能。
import './moduleA.js';

// 「モジュールスコープ」は「export」しないとインポート先で使用できない。
console.log(a); // エラーが表示される。
