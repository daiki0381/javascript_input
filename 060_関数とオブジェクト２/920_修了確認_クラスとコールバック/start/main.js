/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 *
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 *
 * ※２通りの方法で実装してみてください。
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}

const bob = new Person('Bob', 23);
//  オブジェクトのメソッドを()をつけない状態で第1引数に入れるとメソッドではなく、コールバック関数として実行されるので「関数オブジェクトへの参照」がコピーされ「this」は「windowオブジェクト」になる。
// setTimeout(bob.hello, 1000);
setTimeout(bob.hello.bind(bob), 1000);
setTimeout(function () {
  bob.hello();
}, 1000);
