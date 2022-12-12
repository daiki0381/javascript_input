/*
  ・「スプレッド演算子」は、反復可能オブジェクトや列挙可能オブジェクトの展開を行う。
  ・関数の仮引数の「スプレッド演算子」を「RESTパラメーター」という。
  ・「RESTパラメーター」は、実引数の配列を取得する。
  ・配列内で「スプレッド演算子」を使用する場合、イテレーターの設定に従う。
  ・オブジェクト内で「スプレッド演算子」を使用する場合、オブジェクトが展開される。
*/

const array1 = [1, 2, 3, 4, 5];
const array2 = [0, ...array1, 6];
console.log(array1, array2); // 「[1, 2, 3, 4, 5] [0, 1, 2, 3, 4, 5, 6]」が表示される。

function sum(...args) {
  let total = 0;
  for (let value of args) {
    total += value;
  }
  return total;
}
const result = sum(1, 2, 3, 4, 5);
console.log(result); // 「15」が表示される。

const obj1 = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
};

//  オブジェクトのプロトタイプにSymbol.iterator (イテレーターの設定) を追加することで「スプレッド演算子」を使用可能にする。
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

//  オブジェクトは反復可能オブジェクトではないので、イテレーターを追加する必要がある。
//  配列内で「スプレッド演算子」を使用する場合、イテレーターの設定に従う。
const array3 = [...obj1];
console.log(array3); // 「[['prop1', 'value1'], ['prop2', 'value2'], ['prop3', 'value3']]」が表示される。

//  オブジェクト内で「スプレッド演算子」を使用する場合、オブジェクトが展開される。
const obj2 = { ...obj1 };
console.log(obj2); // 「{prop1: 'value1', prop2: 'value2', prop3: 'value3'}」が表示される。
