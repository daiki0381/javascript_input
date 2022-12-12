/*
	・「for...in」は、列挙可能プロパティに対して順不同で反復処理を実行する。
	・「for...in」は、プロトタイプチェーン内も列挙対象となる。
	・Symbolで定義したプロパティは「for...in」の列挙対象にならない。
  ・オブジェクトのプロパティのディスクリプターの「enumerable」は「for...inのループを使用した場合にプロパティが参照されるか」を保持している。
	・オブジェクトのプロパティのディスクリプターの「enumerable」が「false」の場合、「for...in」の実行時の列挙対象から外れる。
	・変数をオブジェクトのプロパティに追加する場合は[]をつける。
*/

// 「シンボル」を定義する時は、Symbol関数を呼び出す。
//  Symbol関数の戻り値は必ず一意の値となる。
const s = Symbol();

const obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  //  変数をオブジェクトのプロパティに追加する場合は[]をつける。
  //  Symbolで定義したプロパティは「for...in」の列挙対象にならない。
  [s]: 'value4',
};

//  Objectのプロトタイプにメソッドを追加する。
//  Objectのプロトタイプのmethodの「enumerable」が「true」の場合、「for...in」の実行時にプロトタイプチェーン内も列挙対象となるため表示される。
Object.prototype.method = function () {};

// 「Object.defineProperty(オブジェクト, プロパティ, {ディスクリプターの設定});」は、オブジェクトのプロパティのディスクリプターを設定する。
// 「enumerable」が「false」の場合、「for...in」の実行時の列挙対象から外れる。
Object.defineProperty(Object.prototype, 'method', {
  enumerable: false,
});

//  ()内の変数にはオブジェクトのプロパティ (メソッド) が格納されている。
for (var key in obj) {
  console.log(key, obj[key]); // 「prop1 value1」「prop2 value2」「prop3 value3」が表示される。
}

for (var key in obj) {
  //  プロトタイプを列挙対象から外す。
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]); // 「prop1 value1」「prop2 value2」「prop3 value3」が表示される。
  }
}
