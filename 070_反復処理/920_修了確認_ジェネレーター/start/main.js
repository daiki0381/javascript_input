/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 *
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 *
 * 以下のように実行した場合には
 * const it = genStep({min: 4, max: 10, step: 2});
 *
 * for(let value of it) {
 *   console.log(value); -> 4, 6, 8, 10
 * }
 *
 * の値が順番にコンソールに表示されます。
 */

//  オブジェクトの分割代入の場合、分割代入の変数にプロパティの値が格納される。
//  実引数が「undefined」で仮引数にオブジェクトの分割代入を設定している場合、デフォルト値にオブジェクトリテラルを設定すると、デフォルト値を使用してオブジェクトの分割代入を行う。
function* genStep({ min = 0, max = Infinity, step = 1 } = {}) {
  for (let i = min; i <= max; i += step) {
    yield i;
  }
}

const iterator = genStep({ min: 4, max: 10, step: 2 });

for (let value of iterator) {
  console.log(value);
}
