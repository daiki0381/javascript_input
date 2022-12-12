/*
  ・プリミティブ値を内包するオブジェクトを「ラッパーオブジェクト」という。
  ・プリミティブ値は「ラッパーオブジェクト」を使用することでメソッドを呼び出すことができる。
  ・メソッドが呼ばれる際に暗黙的にラッパーオブジェクトのメソッドが呼ばれている。
*/

const a = new String('hello');
console.log(a); // 「{'hello'}」が表示される。
console.log(a.toUpperCase()); // 「HELLO」が表示される。

const b = 'hello';
//  メソッドが呼ばれる際に暗黙的にラッパーオブジェクトのメソッドが呼ばれている。
console.log(b.toUpperCase()); // 「HELLO」が表示される。

const c = new Number(100);
console.log(c); // 「{100}」が表示される。
console.log(c.toExponential()); // 「1e+2」が表示される。

const d = 100;
//  メソッドが呼ばれる際に暗黙的にラッパーオブジェクトのメソッドが呼ばれている。
console.log(d.toExponential()); // 「1e+2」が表示される。
