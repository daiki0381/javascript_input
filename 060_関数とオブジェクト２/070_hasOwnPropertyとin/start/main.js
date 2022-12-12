/*
  ・「hasOwnPropertyメソッド」は、引数に渡されたプロパティ (メソッド) がオブジェクトに存在するか確認する。(_proto_は含まない。)
  ・「in演算子」は、プロパティ (メソッド) がオブジェクトに存在するか確認する。(_proto_を含む。)
  ・「プロトタイプチェーン」の優先順位は、①自身のコンストラクター関数のメソッド②インスタンスの__proto__のメソッド③__proto__内の__proto_のメソッド④Objectの__proto__のメソッドとなる。
*/

//  コンストラクター関数は関数名を大文字始まりにする。
function Person(name, age) {
  //  インスタンス化した際に格納されるプロパティを「this.プロパティ = 値;」と定義する。
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log(`Person: Hello ${this.name}`);
};

Object.prototype.hello = function () {
  console.log(`Object: Hello ${this.name}`);
};

//  コンストラクター関数からオブジェクトを作成するには「new コンストラクター関数();」とする。
const alice = new Person('Alice', 20);

//  ②インスタンスの__proto__のメソッドにマッチするため「Person: Hello Alice」となる。
alice.hello(); // 「Person: Hello Alice」が表示される。

// 「hasOwnPropertyメソッド」は、④Objectの__proto__のメソッドにマッチする。
// 「hasOwnPropertyメソッド」は、引数に渡されたプロパティ (メソッド) がオブジェクトに存在するか確認する。(_proto_は含まない。)
//  helloメソッドは、①自身のコンストラクター関数のメソッドにマッチしないため「false」となる。
const result = alice.hasOwnProperty('hello');
console.log(result); // 「false」が表示される。

// 「in演算子」は、プロパティ (メソッド) がオブジェクトに存在するか確認する。(_proto_を含む。)
//  helloメソッドは、②インスタンスの__proto__のメソッドにマッチするため「true」となる。
console.log('hello' in alice); // 「true」が表示される。
