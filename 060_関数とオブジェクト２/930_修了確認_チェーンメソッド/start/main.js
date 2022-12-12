/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 *
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 *
 *
 * 例１）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 *
 * 例２）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.multiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

class Calculator {
  constructor() {
    //  インスタンスが生成される時に初期化される。
    this.val = null;
    // 「_」から始まるプロパティは、他の開発者にクラス内でのみ使用してくださいと暗示的に伝えている。
    this._operator;
  }

  set(val) {
    // 1つ目のsetメソッド (計算結果は出力しない)
    if (this.val === null) {
      //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
      //  1つ目のsetメソッドの引数は2つ目のsetメソッドが呼ばれるまで保持する必要がある。
      //  インスタンスのvalプロパティに値を保持しておく。
      this.val = val;
      // 2つ目以降のsetメソッド (計算結果を出力する)
    } else {
      //  2つの値を元に計算結果を出力する。
      //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
      this._operator(this.val, val);
    }
    return this;
  }
  minus() {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    this._operator = function (val1, val2) {
      const result = val1 - val2;
      //  クラス内の_equalメソッドを実行する。
      this._equal(result);
    };
    return this;
  }
  multiply() {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    this._operator = function (val1, val2) {
      const result = val1 * val2;
      //  クラス内の_equalメソッドを実行する。
      this._equal(result);
    };
    return this;
  }
  divide() {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    this._operator = function (val1, val2) {
      const result = val1 / val2;
      //  クラス内の_equalメソッドを実行する。
      this._equal(result);
    };
    return this;
  }
  plus() {
    //  インスタンス化した際に作成されたオブジェクトが「this」の参照先となる。
    this._operator = function (val1, val2) {
      const result = val1 + val2;
      //  クラス内の_equalメソッドを実行する。
      this._equal(result);
    };
    return this;
  }
  // 「_」から始まるプロパティは、他の開発者にクラス内でのみ使用してくださいと暗示的に伝えている。
  _equal(result) {
    //  計算結果 (result) と新しい値で計算をする必要がある。
    this.val = result;
    //  計算結果を出力する。
    console.log(result);
  }
}

const calc = new Calculator();

calc.set(10).minus().set(3).multiply().set(6).divide().set(2).plus().set(2);
