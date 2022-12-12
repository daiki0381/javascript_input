/*
  ・「Reflect」は、JSエンジンの内部メソッドを呼び出すメソッドが格納されているオブジェクト。
  ・「Reflect」の目的は、①JSエンジンの内部メソッドを呼び出す関数の格納場所②Proxyと合わせて使用するため。
*/

class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C('a', 'b');
console.log(obj1); // 「{a: 'a', b: 'b'}」が表示される。

// 「Reflect.construct」は「new演算子」と同様のJSエンジンの内部メソッドを呼び出している。
//  第1引数にコンストラクター関数。
//  第2引数にコンストラクター関数に渡す実引数を配列に格納する。
const obj2 = Reflect.construct(C, ['a', 'b']);
console.log(obj2); // 「{a: 'a', b: 'b'}」が表示される。

// 「in演算子」は、プロパティ (メソッド) がオブジェクトに存在するか確認する。(_proto_を含む。)
console.log('a' in obj2); // 「true」が表示される。

// 「Reflect.has」は「in演算子」と同様のJSエンジンの内部メソッドを呼び出している。
//  第1引数にオブジェクト。
//  第2引数にプロパティ (メソッド)。
console.log(Reflect.has(obj2, 'a')); // 「true」が表示される。

// 「Object」に格納されている静的メソッド (インスタンス化せずに使用できるメソッド) はES6以降「Reflect」から呼び出すことが推奨されている。
// Object.defineProperty
Reflect.defineProperty;

const bob = {
  name: 'Bob',
  _hello() {
    console.log(`hello ${this.name}`);
  },
};

const tom = {
  name: 'Tom',
  _hello() {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    this._hello();
  },
};

//  プロパティの値を取得するように記述するとゲッターが呼ばれる。
tom.hello; // 「hello Tom」が表示される。

// 「Reflect.get」は、ゲッターが呼ばれるのと同様のJSエンジンの内部メソッドを呼び出している。
//  第1引数にオブジェクト。
//  第2引数にゲッター。
//  第3引数に固定したい「this」のオブジェクト。
//  第3引数が省略されると「this」は第1引数のオブジェクトになる。
Reflect.get(tom, 'hello', bob); // 「hello Bob」が表示される。
