/*
  ・別のコンストラクター関数のプロトタイプを引き継ぐことを「プロトタイプ継承」という。
  ・別のコンストラクター関数を引き継ぐことを「継承」という。
*/

//  コンストラクター関数は関数名を大文字始まりにする。
function Person(name, age) {
  //  インスタンス化した際に格納されるプロパティを「this.プロパティ = 値;」と定義する。
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log(`Hello ${this.name}`);
};

//  コンストラクター関数からオブジェクトを作成するには「new コンストラクター関数();」とする。
const alice = new Person('Alice', 20);
console.log(alice); // 「{name: 'Alice', age: 20}」が表示される。
alice.hello(); // 「Hello Alice」が表示される。

//  コンストラクター関数は関数名を大文字始まりにする。
function Japanese(name, age, gender) {
  //  Personのコンストラクター関数を引き継ぐ。
  //  callメソッドは「this」「引数」を固定した新しい関数を作成し、使用時点で実行される。
  //  Japaneseコンストラクターをインスタンス化した際に作成されるオブジェクトが「this」の参照先となる。
  Person.call(this, name, age);
  //  Japaneseコンストラクター独自のプロパティを追加可能。
  this.gender = gender;
}

//  Personのプロトタイプを引き継ぐ。
// 「Object.create(プロトタイプ)」は、引数として渡されたプロトタイプを持つオブジェクトを作成する。
//  Japaneseのプロトタイプに、Personのプロトタイプを格納したオブジェクトを代入する。
Japanese.prototype = Object.create(Person.prototype);

//  Japaneseコンストラクター独自のプロトタイプを追加可能。
Japanese.prototype.bye = function () {
  console.log(`Bye ${this.name}`);
};

//  コンストラクター関数からオブジェクトを作成するには「new コンストラクター関数();」とする。
const taro = new Japanese('Taro', 30, 'Male');
console.log(taro); // 「{name: 'Taro', age: 30, gender: 'Male'}」が表示される。
//  Personのプロトタイプを引き継いでいるため、helloメソッドが使用可能。
taro.hello(); // 「Hello Taro」が表示される。
taro.bye(); // 「Bye Taro」が表示される。
