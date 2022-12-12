/*
  ・「Strictモード」は、通常のJavaScriptで許容されている一部の書き方を制限する。
  ・「Strictモード」の目的は、①意図しないバグの防止②将来使われる可能性のある予約語 (implements,interface,package等) の確保③コードの安全化。
  ・「Strictモード」の有効化は「'use strict';」をファイルの先頭、もしくは関数内の先頭に記述する。
  ・「ES Modules (ESM)」のファイル内は「Strictモード」になる。
*/

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
