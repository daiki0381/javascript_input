/*
  ・他のクラスのプロパティとメソッドを引き継ぐことを「クラス継承」という。
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

//  クラスはクラス名を大文字始まりにする。
// 「extends クラス」でクラスを引き継ぐ。
//  Personクラスを引き継ぐ。
class Japanese extends Person {
  // 「constructor」はコンストラクター関数と同様の役割を果たす。
  constructor(name, age, gender) {
    // 「super(継承先のコンストラクターの引数);」でコンストラクターを引き継ぐ。
    //  Personのコンストラクターを引き継ぐ。
    super(name, age);
    //  Japaneseクラス独自のプロパティを追加可能。
    this.gender = gender;
  }
  // 「extends クラス」でクラスのメソッドを引き継ぐ。
  //  Personクラスのメソッドを引き継ぐ。
  //  Japaneseクラス独自のメソッドを追加可能。
  bye() {
    console.log(`Bye ${this.name}`);
  }
}

//  クラスからオブジェクトを作成するには「new クラス();」とする。
const taro = new Japanese('Taro', 30, 'Male');

console.log(taro); // 「{name: 'Taro', age: 30, gender: 'Male'}」が表示される。
//  Personのメソッドを引き継いでいるため、helloメソッドが使用可能。
taro.hello(); // 「Hello Taro」が表示される。
taro.bye(); // 「Bye Taro」が表示される。

/* クラス継承の内部構造
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.hello = function () {
    console.log(`Hello ${this.name}`);
  }

  function Japanese(name, age, gender) {
    Person.call(this, name, age);
    this.gender = gender;
  }

  Japanese.prototype = Object.create(Person.prototype);

  Japanese.prototype.bye = function () {
    console.log(`Bye ${this.name}`);
  }

  const taro = new Japanese('Taro', 30, 'Male');

  console.log(taro);
  taro.hello();
  taro.bye();
*/
