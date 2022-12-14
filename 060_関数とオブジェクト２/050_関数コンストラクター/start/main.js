/*
  ・「コンストラクター関数」は、オブジェクトを生成するための関数。
  ・「関数コンストラクター」は、関数を生成するためのコンストラクター関数。
  ・「関数コンストラクター」の引数は文字列で記述する。
  ・「関数コンストラクター」の最後の引数以外は、関数の仮引数を表す。
  ・「関数コンストラクター」の最後の引数は、関数の内部を表す。
  ・「関数コンストラクター」から関数を生成する場合、グローバルスコープで行われるため、最後の引数 (関数の内部) に外部変数が含まれている場合、グローバルスコープ (スクリプトスコープ) に変数を探しに行く。
*/

// 「関数コンストラクター」は、関数を生成するためのコンストラクター関数。
// 「関数コンストラクター」の引数は文字列で記述する。
// 「関数コンストラクター」の最後の引数以外は、関数の仮引数を表す。
// 「関数コンストラクター」の最後の引数は、関数の内部を表す。
// 「関数コンストラクター」から関数を生成する場合、グローバルスコープで行われるため、最後の引数 (関数の内部) に外部変数が含まれている場合、グローバルスコープ (スクリプトスコープ) に変数を探しに行く。
const fn1 = new Function('a', 'b', 'return a + b');

/*  関数コンストラクターから生成される関数
  const fn1 = function(a, b) {
    return a + b;
  }
*/

const result = fn1(1, 2);
console.log(result); // 「3」が表示される。

//  関数を定義した場合、内部的に「new Function();」が実行されている。
const fn2 = function (a, b) {
  return a + b;
};

//  関数は「関数コンストラクター」から生成されたインスタンスのため「true」となる。
console.log(fn2 instanceof Function); // 「true」が表示される。
