/*
  ・コンストラクター関数からインスタンスを作成するために使用する演算子を「new演算子」という。
  ・コンストラクター関数の戻り値がオブジェクトの場合、インスタンス化するとインスタンスはコンストラクター関数の戻り値のオブジェクトになる。
  ・コンストラクター関数の戻り値がオブジェクト以外 (戻り値が未定義) の場合、インスタンス化するとインスタンスは「prototypeオブジェクトへの参照」が格納された「__proto__」とコンストラクター関数内で定義したプロパティを格納するオブジェクトになる。
*/

// コンストラクター関数の戻り値がオブジェクトの場合

//  コンストラクター関数は関数名を大文字始まりにする。
function Person1(name, age) {
  this.name = name;
  this.age = age;
  return {};
}

//  コンストラクター関数からオブジェクトを作成するには「new コンストラクター関数();」とする。
//  コンストラクター関数の戻り値がオブジェクトの場合、インスタンス化するとインスタンスはコンストラクター関数の戻り値のオブジェクトになる。
const alice = new Person1('Alice', 20);

console.log(alice); // 「{}」が表示される。

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
//  コンストラクター関数の戻り値がオブジェクト以外 (戻り値が未定義) の場合、インスタンス化するとインスタンスは「prototypeオブジェクトへの参照」が格納された「__proto__」とコンストラクター関数内で定義したプロパティを格納するオブジェクトになる。
const bob = new Person2('Bob', 30);

console.log(bob); // 「{name: 'Bob', age: 30}」が表示される。
bob.hello(); // 「Hello Bob」が表示される。

// new演算子のメカニズム

//  コンストラクター関数は関数名を大文字始まりにする。
function F(a, b) {
  this.a = a;
  this.b = b;
  // return {};
}

F.prototype.c = function () {};

//  可変長引数 (引数の数が決まっていない引数) の場合「RESTパラメーター」を使用する。
//  「RESTパラメーター」は「実引数の配列」を取得する。
function newMechanism(C, ...args) {
  // 「Object.create(プロトタイプ)」は、引数として渡されたプロトタイプを持つオブジェクトを作成する。
  // 「_this」は、コンストラクター関数の「prototypeオブジェクトへの参照」を持つオブジェクト。
  const _this = Object.create(C.prototype);
  // 「_this」をコンストラクター関数の実行時の「this」として設定し、「_this」にプロパティを追加する。
  // 「result」は、コンストラクター関数の実行時の戻り値が格納されている。
  const result = C.apply(_this, args);
  //  コンストラクター関数の戻り値がオブジェクトの場合、コンストラクター関数の戻り値のオブジェクトになる。
  // 「typeof null」は「object」と判定される。
  if (typeof result === 'object' && result !== null) {
    return result;
  }
  //  コンストラクター関数の戻り値がオブジェクト以外 (戻り値が未定義) の場合、「prototypeオブジェクトへの参照」が格納された「__proto__」とコンストラクター関数内で定義したプロパティを格納するオブジェクトになる。
  return _this;
}

//  第1引数はコンストラクター関数。
//  第2引数以降はコンストラクター関数の引数。
const instance = newMechanism(F, 1, 2);
console.log(instance);
