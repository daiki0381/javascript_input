/*
  ・コンテキスト内で宣言した変数や関数の定義をコード実行前にリーに保存することを「ホイスティング」という。
*/

// 関数宣言のホイスティング ▶︎ 表示される。
a();
function a() {
  console.log('a is called');
}

// 変数 (var) のホイスティング ▶︎ 「undefined」の初期値の設定が行われるため「undefined」と表示される。
console.log(b);
var b = 0;

// 変数 (let,const) のホイスティング ▶︎「undefined」の初期値の設定が行われないためエラーになる。
console.log(c);
console.log(d);
let c = 0;
const d = 0;

// 関数式のホイスティング ▶︎ 「undefined」の初期値の設定が行われないためエラーになる。
e();
const e = function () {
  console.log('e is called');
};
