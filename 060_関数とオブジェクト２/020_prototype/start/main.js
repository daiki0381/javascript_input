/*
  ・オブジェクトに存在する特別なプロパティを「プロトタイプ」という。
  ・「プロトタイプ」はコンストラクター関数と併せて使用する。
  ・「プロトタイプ」を使用するには、コンストラクター関数の「prototypeプロパティ」にアクセスする。
  ・「プロトタイプ」を使用した場合、インスタンス化すると「__proto__」に「prototypeオブジェクトへの参照」が格納される。
  ・「プロトタイプ」を使用しない場合、インスタンス化するとインスタンス毎にメソッドが追加されるので、余分にリ空間を消費してしまう。
  ・「prototypeプロパティ」にメソッドを追加すると、インスタンスの「__proto__」にメソッドが追加される。
*/

//  コンストラクター関数は関数名を大文字始まりにする。
function Person(name, age) {
  //  インスタンス化した際に格納されるプロパティを「this.プロパティ = 値;」と定義する。
  this.name = name;
  this.age = age;
  // 「プロトタイプ」を使用しない場合、インスタンス化するとインスタンス毎にメソッドが追加されるので、余分にリ空間を消費してしまう。
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

// 「プロトタイプ」を使用するには、コンストラクター関数の「prototypeプロパティ」にアクセスする。
// 「プロトタイプ」を使用した場合、インスタンス化すると「__proto__」に「prototypeオブジェクトへの参照」が格納される。
// 「prototypeプロパティ」にメソッドを追加すると、インスタンスの「__proto__」にメソッドが追加される。
Person.prototype.hello = function () {
  console.log(`Hello ${this.name}`);
};

/* オブジェクトのプロトタイプ
  {
    prototype: {
      メソッド: function() {}
    }
  }
*/

//  コンストラクター関数からオブジェクトを作成するには「new コンストラクター関数();」とする。
const alice = new Person('Alice', 20);
const bob = new Person('Bob', 30);
const carol = new Person('Carol', 40);

alice.hello(); // 「Hello Alice」が表示される。
bob.hello(); // 「Hello Bob」が表示される。
carol.hello(); // 「Hello Carol」が表示される。
