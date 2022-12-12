const person = {
  name: 'Tom',
  bye() {
    console.log('Bye ' + this.name);
  },
  hello: function (greeting) {
    console.log(greeting + ' ' + this.name);
    return greeting + ' ' + this.name;
  },
  /**
   * 問題４：
   * 1秒後に"hello Tom"
   * と出力されるような、メソッドを
   * personオブジェクトに追加してみてください。
   *
   * 以下のように使用するものとします。
   * `person.hello1s()`
   * -> 1秒後に"hello Tom"と出力
   *
   * 3通りの方法で実装してみてください。
   * １．bind
   * ２．アロー関数
   * ３．thisを一旦変数に代入
   */
  hello1s() {
    //  ①bind
    setTimeout(this.hello.bind(this, 'hello'), 1000);
    //  ②アロー関数
    setTimeout(() => {
      //  アロー関数であるため「this」が用意されない。
      // 「this」をスコープチェーン (スコープが複数階層で連なっている状態) を辿って、レキシカルスコープ (内側のスコープから見た外側のスコープ) に探しに行く。
      //  アロー関数のレキシカルスコープはhello1sの関数スコープであり、personオブジェクトを経由して呼び出しているので、「this」は「 personオブジェクト」になる。
      this.hello('hello');
    }, 1000);
    //  ③thisを一旦変数に代入
    const _this = this;
    setTimeout(function () {
      _this.hello('hello');
    }, 1000);
  },
};

person.hello1s();

/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
setTimeout(person.hello.bind(person, 'hello'), 1000);

/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
alert(person.hello('hello'));

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
setTimeout(person.bye.bind(person), 1000);
