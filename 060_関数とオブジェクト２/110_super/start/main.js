/*
  ・継承元の関数を呼び出すためのキーワードを「super (スーパー)」という。
  ・「constructor」は関数コンテキストで実行されているため「super」を使用できる。
  ・「super」の使用用途は①クラスの継承先のコンストラクター内でクラスの継承元のコンストラクターを呼び出す②クラスの継承先のメソッド内でクラスの継承元のメソッドを呼び出す③プロトタイプ継承したオブジェクトのメソッドを呼び出す。
  ・コンストラクター内で「super」を使用する場合、先頭に記述する必要がある。
  ・メソッド内で「super」を使用する場合、どこに記述してもOK。
*/

//  クラスはクラス名を大文字始まりにする。
class Person {
  // 「constructor」はコンストラクター関数と同様の役割を果たす。
  // 「constructor」は関数コンテキストで実行されている。
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
  // 「constructor」は関数コンテキストで実行されている。
  constructor(name, age, gender) {
    // 「super(継承先のコンストラクターの引数);」でコンストラクターを引き継ぐ。
    //  Personのコンストラクターを引き継ぐ。
    //  クラスの継承先のコンストラクター内でクラスの継承元のコンストラクターを呼び出す。
    //  コンストラクター内で「super」を使用する場合、先頭に記述する必要がある。
    super(name, age);
    //  Japaneseクラス独自のプロパティを追加可能。
    this.gender = gender;
  }
  // 「extends クラス」でクラスのメソッドを引き継ぐ。
  //  Personクラスのメソッドを引き継ぐ。
  //  Japaneseクラス独自のメソッドを追加可能。
  bye() {
    //  クラスの継承先のメソッド内でクラスの継承元のメソッドを呼び出す。
    //  Personクラスのhelloメソッドを呼び出している。
    //  メソッド内で「super」を使用する場合、どこに記述してもOK。
    super.hello();
    console.log(`Bye ${this.name}`);
  }
}

//  クラスからオブジェクトを作成するには「new クラス();」とする。
const taro = new Japanese('Taro', 30, 'Male');

console.log(taro); // 「{name: 'Taro', age: 30, gender: 'Male'}」が表示される。
//  Personのメソッドを引き継いでいるため、helloメソッドが使用可能。
taro.hello(); // 「Hello Taro」が表示される。
taro.bye(); // 「Hello Taro」「Bye Taro」が表示される。

const american = {
  hello() {
    console.log('hello ' + this.name);
  },
};

const alice = {
  name: 'Alice',
  hello() {
    //  プロトタイプ継承したオブジェクトのメソッドを呼び出す。
    super.hello();
  },
};

//  americanのプロトタイプを引き継ぐ。
// 「Object.setPrototypeOf(継承先のオブジェクト, 継承元のオブジェクト);」は、継承元のオブジェクトのプロトタイプを継承先のオブジェクトのプロトタイプに継承する。
Object.setPrototypeOf(alice, american);

alice.hello(); // 「Hello Alice」が表示される。
