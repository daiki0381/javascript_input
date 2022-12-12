'use strict';

//  キーワードを使用しない場合「window.a = 0」と解釈されるので、windowオブジェクトのプロパティに追加される。
//  思わぬバグが発生する可能性があるので「Strictモード」だとエラーになる
a = 0;
console.log(a);

//  将来使われる可能性のある予約語 (implements, interface, package等) なので「Strictモード」だとエラーになる
const implements = 0;

function fn() {
  return this;
}
// 「this」を戻り値にし「windowオブジェクト」が返却される場合「Strictモード」だと「undefined」が表示される。
console.log(fn());
