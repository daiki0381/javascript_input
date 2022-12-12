/*
  ・外側のスコープの変数を内側のスコープの関数が使用している状態を「クロージャー」という。
*/

function fn1() {
  // 関数スコープ
  let a = 1;
  function fn2() {
    // 関数スコープ
    console.log(a); // クロージャー
  }
  fn2();
}
fn1(); // グローバルスコープ

function incrementFactory() {
  // 関数スコープ
  let num = 0;
  function increment() {
    // 関数スコープ
    num = num + 1; // クロージャー
    console.log(num);
  }
  // 「return increment;」とした場合は関数を実行しないで、関数自体をincrementFactoryの呼び出し元に返却する。
  //  「return increment();」とした場合は関数を実行してincrementFactoryの呼び出し元に返却するが、incrementにはreturn文がないため、undefinedが返却される。
  return increment;
}

//  右辺 ▶︎ numの宣言が行われて、increment関数が返ってくる。
//  左辺 ▶︎ 戻り値のincrement関数のみが代入されている。
const increment = incrementFactory();
//  increment関数を実行する。
increment();
increment();
increment();

console.log(num); // 関数スコープ外なのでエラーになる。
