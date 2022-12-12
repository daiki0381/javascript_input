/*
  ・bindメソッドは「this」「引数」を固定した新しい関数を作成する。
*/

window.name = 'John';

const person = {
  name: 'Tom',
  hello: function () {
    console.log(`Hello ${this.name}`);
  },
};

//  personオブジェクトを経由して、helloメソッドを呼び出す場合、helloメソッド内の「this」は「personオブジェクト」になる。
person.hello(); // 「Hello Tom」が表示される。

//  bindメソッドの第1引数のオブジェクト (personオブジェクト) を関数内 (personオブジェクトのhelloメソッド) の「this」の参照先として固定し、その固定した関数を新しい関数として定義する。
const helloTom = person.hello.bind(person);

function fn(cb) {
  // 「this」は、bindメソッドの第1引数の「personオブジェクト」になる。
  cb();
}

fn(helloTom); // 「Hello Tom」が表示される。

function a() {
  console.log(`Hello ${this.name}`);
}

//  bindメソッドの第1引数のオブジェクト ({ name: 'Tim' }) を関数内 (a) の「this」の参照先として固定し、その固定した関数を新しい関数として定義する。
const b = a.bind({ name: 'Tim' });
b(); // 「Hello Tim」が表示される

function c(name) {
  console.log(`Hello ${name}`);
}

//  関数内 (c) で「this」は使用されていないため、第1引数に「null」を設定する。
//  bindメソッドの第2引数の実引数 ('Tim') を関数内 (c) の仮引数として固定し、その固定した関数を新しい関数として定義する。
const d = c.bind(null, 'Tim');

d(); // 「Hello Tim」が表示される。
