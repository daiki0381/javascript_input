/*
  ・スコープが複数階層で連なっている状態を「スコープチェーン」という。
  ・スコープチェーンでは内側のスコープから順に探し、グローバルスコープでも見つからなかった場合エラーになる。
*/

let a = 0; // スクリプトスコープ
function fn1() { // 関数スコープ
  let a = 1;
  function fn2() { // 関数スコープ
    let a = 2;
    console.log(a); // 内側のスコープから順に変数を探すため2が表示される。
  }
  fn2();
}
fn1();

let b = 0; // スクリプトスコープ
window.b = 1; // グローバルスコープ
function fn3() { // 関数スコープ
  // let b = 2;
  function fn4() { // 関数スコープ
    console.log(b); // スクリプトスコープが優先されるため0が表示される。
  }
  fn4();
}
fn3();

let c = 0; // スクリプトスコープ
window.c = 1; // グローバルスコープ
function fn5() { // 関数スコープ
  // let c = 2;
  function fn6() { // 関数スコープ
    console.log(c); // varは「undefined」の初期値の設定が行われるため「undefined」と表示される。
    if(true) {
      var c = 3; // varのためブロックスコープが無効になる。
    }
  }
  fn6();
}
fn5();
