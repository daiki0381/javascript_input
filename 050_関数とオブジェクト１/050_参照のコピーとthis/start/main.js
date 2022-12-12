/*
  ・オブジェクトのメソッドとして実行された場合「this」は「呼び出し元のオブジェクト」になる。
  ・関数として実行された場合「this」は「windowオブジェクト」になる。
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
//  helloメソッドの「関数オブジェクトへの参照」がコピーされる。
const ref = person.hello;
//  windowオブジェクトを経由して関数を実行しているため、関数内の「this」は「windowオブジェクト」になる。
ref(); // 「Hello John」が表示される。

function fn() {
  console.log(`Hello ${this.name}`);
}

//  windowオブジェクトを経由して関数を実行しているため、関数内の「this」は「windowオブジェクト」になる。
fn(); // 「Hello John」が表示される。
