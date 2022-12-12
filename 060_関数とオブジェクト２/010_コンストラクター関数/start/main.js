/*
  ・新しくオブジェクトを作成するための雛形となる関数を「コンストラクター関数」という。
  ・「new演算子」でコンストラクター関数からオブジェクトを作成することを「インスタンス化」という。
  ・「new演算子」でコンストラクター関数から作成したオブジェクトを「インスタンス」という。
  ・コンストラクター関数は関数名を大文字始まりにする。
  ・インスタンス化した際に格納されるプロパティを「this.プロパティ = 値;」と定義する。
  ・コンストラクター関数からオブジェクトを作成するには「new コンストラクター関数();」とする。
*/

//  コンストラクター関数は関数名を大文字始まりにする。
function Person(name, age) {
  //  インスタンス化した際に格納されるプロパティを「this.プロパティ = 値;」と定義する。
  this.name = name;
  this.age = age;
}

//  コンストラクター関数からオブジェクトを作成するには「new コンストラクター関数();」とする。
const alice = new Person('Alice', 20);
const bob = new Person('Bob', 30);
const carol = new Person('Carol', 40);

console.log(alice); // 「{name: 'Alice', age: 20}」が表示される。
console.log(bob); // 「{name: 'Bob', age: 30}」が表示される。
console.log(carol); // 「{name: 'Carol', age: 40}」が表示される。
