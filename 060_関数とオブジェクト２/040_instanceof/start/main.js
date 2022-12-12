/*
  ・「オブジェクト instanceof コンストラクター」は、どのコンストラクターから生成されたオブジェクトなのか確認する。
  ・「instanceof」は、内部的にインスタンスのプロトタイプの参照先とコンストラクターのプロトタイプの参照先を比較している。
  ・「return {};」は、Objectコンストラクターから生成されたオブジェクト。
*/

// コンストラクター関数の戻り値がオブジェクトの場合

//  コンストラクター関数は関数名を大文字始まりにする。
function Person1(name, age) {
  this.name = name;
  this.age = age;
  // 「return {};」を省略せずに記載すると「return  new Object();」となる。
  //  Objectコンストラクターから生成されたオブジェクト。
  return {};
}

//  コンストラクター関数からオブジェクトを作成するには「new コンストラクター関数();」とする。
//  コンストラクター関数の戻り値がオブジェクトの場合、インスタンスはObjectコンストラクターから生成されたオブジェクト。
const alice = new Person1('Alice', 20);

console.log(alice instanceof Person1); // 「false」が表示される。
// 「instanceof」は、内部的にインスタンスのプロトタイプの参照先とコンストラクターのプロトタイプの参照先を比較している。
console.log(alice.__proto__ === Person1.prototype); // 「false」が表示される。

console.log(alice instanceof Object); // 「true」が表示される。
// 「instanceof」は、内部的にインスタンスのプロトタイプの参照先とコンストラクターのプロトタイプの参照先を比較している。
console.log(alice.__proto__ === Object.prototype); // 「true」が表示される。

// コンストラクター関数の戻り値がオブジェクト以外 (戻り値が未定義) の場合

//  コンストラクター関数は関数名を大文字始まりにする。
function Person2(name, age) {
  //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
  this.name = name;
  this.age = age;
}

Person2.prototype.hello = function () {
  console.log(`Hello ${this.name}`);
};

//  コンストラクター関数からオブジェクトを作成するには「new コンストラクター関数();」とする。
//  コンストラクター関数の戻り値がオブジェクト以外 (戻り値が未定義) の場合、インスタンスはPerson2コンストラクターから生成されたオブジェクト。
const bob = new Person2('Bob', 30);

console.log(bob instanceof Person2); // 「true」が表示される。
// 「instanceof」は、内部的にインスタンスのプロトタイプの参照先とコンストラクターのプロトタイプの参照先を比較している。
console.log(bob.__proto__ === Person2.prototype); // 「true」が表示される。

//  Person2コンストラクターから生成されたオブジェクトは、Objectコンストラクターを継承しているため「true」となる。(プロトタイプチェーン)
console.log(bob instanceof Object); // 「true」が表示される。
// 「instanceof」は、内部的にインスタンスのプロトタイプの参照先とコンストラクターのプロトタイプの参照先を比較している。
console.log(bob.__proto__ === Object.prototype); // 「false」が表示される。

// instanceofの実例

function fn(arg) {
  //  配列とオブジェクトでは値の追加の記法が異なるので、コンストラクターによって条件分岐する。
  if (arg instanceof Array) {
    arg.push('value');
  } else if (arg instanceof Object) {
    arg['key'] = 'value';
  }
  console.log(arg);
}

fn([]); // 「[value]」が表示される。
fn({}); // 「{key: 'value'}」が表示される。
