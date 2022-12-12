/*
  ・既にある機能を簡単に記載できるようにしたものを「シンタックスシュガー」という。
  ・コンストラクター関数のシンタックスシュガーを「クラス」という。
*/

//  クラスはクラス名を大文字始まりにする。
class Person {
  // 「constructor」はコンストラクター関数と同様の役割を果たす。
  constructor(name, age) {
    //  インスタンス化した際に格納されるプロパティを「this.プロパティ = 値;」と定義する。
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    this.name = name;
    this.age = age;
  }
  //  プロトタイプのメソッドは下記のように記載する。
  hello() {
    console.log(`Hello ${this.name}`);
  }
}

//  クラスからオブジェクトを作成するには「new クラス();」とする。
const alice = new Person('Alice', 20);
console.log(alice); // 「{name: 'Alice', age: 20}」が表示される。
alice.hello(); // 「Hello Alice」が表示される。

/* クラスの内部構造
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.hello = function () {
    console.log(`Hello ${this.name}`);
  }
*/
