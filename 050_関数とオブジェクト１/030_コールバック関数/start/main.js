/*
  ・他の関数に引数として渡される関数 (メソッド) を「コールバック関数」という。
  ・何ミリ秒待ってから実行したい場合「setTimeout(コールバック関数, 待ち時間);」を使用する。
*/

// コールバック関数

function fn1() {
  console.log('fn1 is called');
}

function fn2() {
  console.log('fn2 is called');
}

function fn3(cb) {
  //  仮引数の関数を実行する。
  cb();
}

//  実引数に関数を設定する。
fn3(fn1); // 「fn1 is called」が表示される。
fn3(fn2); // 「fn2 is called」が表示される。
fn3(function () {
  console.log('fn is called');
});

function fn4(is_called) {
  console.log(`fn4 ${is_called}`);
}

function fn5(is_called) {
  console.log(`fn5 ${is_called}`);
}

function fn6(cb) {
  //  仮引数の関数に実引数を設定する。
  cb('is called');
}

//  実引数に関数を設定する。
fn6(fn4); // 「fn4 is called」が表示される。
fn6(fn5); // 「fn5 is called」が表示される。
fn6(function (is_called) {
  console.log(`fn ${is_called}`);
});

// 実例

function fn7() {
  console.log('fn7 is called');
}

function fn8(is_called) {
  console.log(`fn8 ${is_called}`);
}

//  何ミリ秒待ってから実行したい場合「setTimeout(コールバック関数, 待ち時間);」を使用する。
setTimeout(fn7, 1000); // 1秒待ってから「fn7 is called」が実行される。
setTimeout(fn8, 1000); // 1秒待ってから「fn8 undefined」が実行される。

/*  setTimeoutの第1引数の挙動
  setTimeout(cb) {
    //  第1引数の関数には実引数が設定されていない。
    cb();
  }
*/
