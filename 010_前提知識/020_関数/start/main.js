/*
  ・一連の手続き (処理) を実行する文の集まりを「関数」という。
  ・関数に渡す変数を「引数」という。
  ・関数の呼び出し元に返す値を「戻り値」という。
  ・末尾に()をつけることで関数を実行する。
*/

let name = 'Tim';

function hello(name) {
  console.log('hello ' + name);
}

hello(name);
