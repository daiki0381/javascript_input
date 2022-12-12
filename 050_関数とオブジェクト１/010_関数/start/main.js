/*
  ・実引数と仮引数の数が一致しなくても実行される。
  ・関数名が重複している場合、最後に宣言した関数が実行される。
  ・実引数が「undefined」の場合、仮引数のデフォルト値が代入される。
  ・意図して値が空であることを伝えたい場合は「null」を使用する。
  ・実引数が「argumentsオブジェクト」に格納される。
  ・可変長引数 (引数の数が決まっていない引数) の場合「RESTパラメーター」を使用する。
  ・「RESTパラメーター」は「実引数の配列」を取得する。
  ・実行結果を呼び出し元に返すには「return」を使用する。
  ・「return」がない場合「undefined」が戻り値になる。
*/

function fn1(a, b) {
  console.log(a, b);
}

fn1(0, 1); // 「0 1」が表示される。
//  実引数と仮引数の数が一致しなくても実行される。
fn1(0); // 「0 undefined」が表示される。
fn1(null, 1); // 「null 1」が表示される。

function fn2(a, b) {
  console.log(a, b);
}

function fn2() {
  console.log(2);
}

//  関数名が重複している場合、最後に宣言した関数が実行される。
fn2(0, 1); // 「2」が表示される。

function fn3(a, b = 1) {
  console.log(a, b);
}

//  実引数が「undefined」の場合、仮引数のデフォルト値が代入される。
fn3(0); // 「0 1」が表示される。
fn3(0, undefined); // 「0 1」が表示される。
fn3(0, null); // 「0 null」が表示される。
//  意図して値が空であることを伝えたい場合は「null」を使用する。
let c = null;

function fn4() {
  console.log(arguments);
  const a = arguments[0];
  const b = arguments[1];
  console.log(a, b); // 「0 1」が表示される。
}

//  実引数が「arguments配列」に格納される。
fn4(0, 1); // 「Arguments(2) [0, 1, callee: ƒ, Symbol(Symbol.iterator): ƒ]」が表示される。

//  可変長引数 (引数の数が決まっていない引数) の場合「RESTパラメーター」を使用する。
function fn5(...args) {
  //  「RESTパラメーター」は「実引数の配列」を取得する。
  console.log(args);
}

fn5(0, 1, 2); // 「[0, 1, 2]」が表示される。

function fn6(a, b) {
  //  実行結果を呼び出し元に返すには「return」を使用する。
  // 「return」がない場合「undefined」が戻り値になる。
  return a;
}

const result = fn6(0, 1);
console.log(result); // 「0」が表示される。
