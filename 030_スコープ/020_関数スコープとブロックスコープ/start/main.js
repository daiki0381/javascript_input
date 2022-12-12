/*
  ・関数のブロック内のスコープを「関数スコープ」という。
  ・ブロック内のスコープを「ブロックスコープ」という。
  ・ブロックスコープは変数 (const・let) を使用した時のみ有効になる。
*/

// 関数スコープ
function a() {
  let b = 0;
  console.log(b); // 関数スコープ内なので表示される。
}
a();
console.log(b); // 関数スコープ外なのでエラーになる。

// ブロックスコープ
{
  let c = 1;
  console.log(c); // ブロックスコープ内なので示される。
  const d = 1;
  console.log(d); // ブロックスコープ内なので示される。
  var e = 1;
  function f() {
    console.log('f is called');
  }
  const g = function() {
    console.log('g is called');
  }
}
console.log(c); // ブロックスコープが有効になり、エラーになる。
console.log(d); // ブロックスコープが有効になり、エラーになる。
console.log(e); // ブロックスコープが無効になり、表示される。
f(); // ブロックスコープが無効になり、表示される。
g(); // ブロックスコープが有効になり、エラーになる。
