/*
  ・外側のスコープの変数を内側のスコープの関数が使用している状態を「クロージャー」という。
*/

function addNumberFactory(num) {
  // 関数スコープ
  function addNumber(value) {
    // 関数スコープ
    //  addNumberFactoryの引数 (変数) を保持する。
    return num + value; // クロージャー
  }
  //  「return addNumber;」とした場合は関数を実行しないで、関数自体をaddNumberFactoryの呼び出し元に返却する。
  return addNumber;
}

//  addNumberFactoryの引数に5を渡し、addNumber関数が返ってくる。
const add5 = addNumberFactory(5);
//  addNumberの引数に10を渡し、addNumberFactoryの引数+addNumberの引数の結果が返ってくる。
const result5 = add5(10);
console.log(result5);

//  addNumberFactoryの引数に10を渡し、addNumber関数が返ってくる。
const add10 = addNumberFactory(10);
//  addNumberの引数に10を渡し、addNumberFactoryの引数+addNumberの引数の結果が返ってくる。
const result10 = add10(10);
console.log(result10);
