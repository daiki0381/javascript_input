/*
  ・「Strictモード」は、通常のJavaScriptで許容されている一部の書き方を制限する。
  ・「Strictモード」の目的は、①意図しないバグの防止②将来使われる可能性のある予約語 (implements,interface,package等) の確保③コードの安全化。
  ・「Strictモード」の有効化は「'use strict';」をファイルの先頭、もしくは関数内の先頭に記述する。
  ・クラスのコンストラクターやメソッドの内部は自動的に「Strictモード」になる。
*/

class C {
  constructor() {
    //  将来使われる可能性のある予約語 (implements, interface, package等) なので「Strictモード」だとエラーになる
    const implements = 0;
  }
  method() {
    //  将来使われる可能性のある予約語 (implements, interface, package等) なので「Strictモード」だとエラーになる
    const implements = 0;
  }
}

const c = new C();
c.method();
