/*
  ・関数は「実行可能なオブジェクト」である。
  ・末尾に()を付けると「実行可能なオブジェクト」が実行される。
*/

function fn() {
  console.log('fn is called');
}

//  関数オブジェクトにプロパティを追加する。
fn.prop = 0;
//  関数オブジェクトにメソッドを追加する。
fn.method = function () {
  console.log('method is called');
};

fn(); // 「fn is called」が表示される。
fn.method(); // 「method is called」が表示される。
console.log(fn.prop); // 「0」が表示される。
