/*
  ・呼び出し元のオブジェクトへの参照を保持するキーワードを「this」という。
  ・オブジェクトを経由してメソッドを呼び出す場合、メソッド内の「this」は「オブジェクト」になる。
  ・実行コンテキストによって「this」の参照先は変わる。
*/

const person = {
  name: 'Tom',
  hello: function () {
    console.log(`Hello ${this.name}`);
  },
};

//  personオブジェクトを経由して、helloメソッドを呼び出す場合、helloメソッド内の「this」は「personオブジェクト」になる。
person.hello(); // 「Hello Tom」が表示される。
