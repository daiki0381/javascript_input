/*
  ・プロトタイプの多重形成 (インスタンスの「__proto__」の多階層) を「プロトタイプチェーン」という。
  ・「プロトタイプチェーン」を辿って、該当のメソッドを探しに行く。
  ・「プロトタイプチェーン」の優先順位は、①自身のコンストラクター関数のメソッド②インスタンスの__proto__のメソッド③__proto__内の__proto_のメソッド④Objectの__proto__のメソッドとなる。
*/

//  コンストラクター関数は関数名を大文字始まりにする。
function Person(name, age) {
  //  インスタンス化した際に格納されるプロパティを「this.プロパティ = 値;」と定義する。
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log(`OwnProperty: Hello ${this.name}`);
  };
}

Person.prototype.hello = function () {
  console.log(`Person: Hello ${this.name}`);
};

Object.prototype.hello = function () {
  console.log(`Object: Hello ${this.name}`);
};

//  コンストラクター関数からオブジェクトを作成するには「new コンストラクター関数();」とする。
const alice = new Person('Alice', 20);

//  ①自身のコンストラクター関数のメソッドにマッチするため「OwnProperty: Hello Alice」となる。
alice.hello(); // 「OwnProperty: Hello Alice」が表示される。

// 「hasOwnPropertyメソッド」は、④Objectの__proto__のメソッドにマッチする。
// 「hasOwnPropertyメソッド」は、引数に渡されたプロパティ (メソッド) がオブジェクトに存在するか確認する。(_proto_は含まない。)
const result = alice.hasOwnProperty('name');
console.log(result); // 「true」が表示される。
