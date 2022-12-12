/*
  ・オブジェクトのプロパティのディスクリプターは「value」「configurable」「enumerable」「writable」の他に「get」「set」を保持している。
	・「ゲッター」は、値を取得する。
	・「セッター」は、値を変更する。
	・インスタンス化せずに使用できるメソッドを「静的メソッド (スタティックメソッド)」という。
*/

// コンストラクター関数 (ゲッター・セッター・スタティック)

function Person1(name, age) {
  //  Person1のプロトタイプのnameプロパティとプロパティ名が重複しないように先頭に「_」をつけている。
  this._name = name;
  this._age = age;
}

//  インスタンス化せずに使用できるメソッドを「静的メソッド (スタティックメソッド)」という。
Person1.hello = function () {
  console.log('Hello');
};

Person1.hello(); // 「Hello」が表示される。

// 「Object.defineProperty(オブジェクト, プロパティ, {ディスクリプターの設定});」は、オブジェクトのプロパティのディスクリプターを設定する。
//  Person1のプロトタイプのnameプロパティのディスクリプターを設定する。
Object.defineProperty(Person1.prototype, 'name', {
  get: function () {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    // 「ゲッター」は、値を取得する。
    //  _nameプロパティの値を取得する。
    return this._name;
  },
  //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
  // 「セッター」は、値を変更する。
  //  _nameプロパティの値を変更する。
  set: function (value) {
    this._name = value;
  },
});

const alice = new Person1('Alice', 20);

//  プロパティの値を変更するように記述するとセッターが呼ばれる。
alice.name = 'Bob';

//  プロパティの値を取得するように記述するとゲッターが呼ばれる。
console.log(alice.name);

// クラス (ゲッター・セッター・スタティック)

//  クラスはクラス名を大文字始まりにする。
class Person2 {
  // 「constructor」はコンストラクター関数と同様の役割を果たす。
  constructor(name, age) {
    //  インスタンス化した際に格納されるプロパティを「this.プロパティ = 値;」と定義する。
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    this._name = name;
    this._age = age;
  }
  // ゲッター
  get name() {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    // 「ゲッター」は、値を取得する。
    //  _nameプロパティの値を取得する。
    return this._name;
  }
  // セッター
  set name(value) {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    // 「セッター」は、値を変更する。
    //  _nameプロパティの値を変更する。
    this._name = value;
  }
  // スタティック
  //  インスタンス化せずに使用できるメソッドを「静的メソッド (スタティックメソッド)」という。
  static hello() {
    console.log('Hello');
  }
}

Person2.hello(); // 「Hello」が表示される。

const bob = new Person2('Bob', 30);

//  プロパティの値を変更するように記述するとセッターが呼ばれる。
bob.name = 'Carol';

//  プロパティの値を取得するように記述するとゲッターが呼ばれる。
console.log(bob.name);
