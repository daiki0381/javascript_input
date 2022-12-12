/*
  ・イテレーターを生成するための特殊な関数を「ジェネレーター」という。
  ・「ジェネレーター」を使用することでより簡略化してイテレーターを生成するための関数を記述できる。
*/

/* ジェネレーターの記述
  「*」を付けることでジェネレーター関数を定義する。
  function* gen() {
    if (ループ継続) {
      「yield」は「イテレーター」の「nextメソッド」の「done: false」「value: 値」を表現している。
      yield 値;
    } else {
      「return」は「イテレーター」の「nextメソッド」の「done: true」「value: 値」を表現している。
      return 値;
    }
  }
*/

const obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
};

//  オブジェクトのプロトタイプにSymbol.iterator (イテレーターの設定) を追加することで「for...of」を使用可能にする。
//  オブジェクトのプロトタイプのSymbol.iteratorを設定した場合、全てのオブジェクトの反復処理に反映される。
Object.prototype[Symbol.iterator] = function* () {
  //  ()内の変数にはオブジェクトのプロパティが格納されている。
  //  obj[Symbol.iterator]()とJSエンジンによってイテレータが実行されるので「this」の参照先は「obj」となる。
  //  ジェネレーター関数は、yield (return) が完了した時点で次のnextメソッドが呼ばれるまで待機する。
  // 「for」とした場合、1回目のnextメソッドはyieldが実行され、2回目以降のnextメソッドもループが継続するのでyieldが実行され、ループが終了するとreturnが実行される。
  for (let key in this) {
    yield [key, this[key]];
  }
  return;
};

//  ()内の変数にはプロパティと値が配列で格納されている。
//  配列の分割代入の場合、分割代入の変数に順に配列の値が格納される。
// 「for...of」とした場合、内部でnextメソッドが実行されている。
for (let [prop, value] of obj) {
  console.log(prop, value); // 「prop1 value1」「prop2 value2」「prop3 value3」が表示される。
}
