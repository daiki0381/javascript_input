/*
  ・通常のインポートを使用した場合「export」「export default」で宣言された変数・関数を同期的に読み込む。
  ・「ダイナミックインポート」を使用した場合「export」「export default」で宣言された変数・関数を非同期的に読み込む。
  ・「ダイナミックインポート」を使用した場合「Promise」のインスタンスを返却する。
*/

// 通常のインポート (同期)

// import defaultVal, { publicVal, publicFn } from './moduleA';

// ダイナミックインポート (非同期)

// 「ダイナミックインポート」を使用した場合「Promise」のインスタンスを返却する。
// 「export」「export default」で宣言された変数・関数をプロパティとするオブジェクトがthenメソッドのコールバック関数の引数に設定される。
import('./moduleA.js').then(function (moduleA) {
  console.log(moduleA.publicVal); // 「0」が表示される。
  console.log(moduleA.default); // 「1」が表示される。
  moduleA.publicFn(); // 「publicFn called」が表示される。
});

async function fn() {
  const moduleA = await import('./moduleA.js');
  console.log(moduleA.publicVal); // 「0」が表示される。
  console.log(moduleA.default); // 「1」が表示される。
  moduleA.publicFn(); // 「publicFn called」が表示される。
}
fn();
