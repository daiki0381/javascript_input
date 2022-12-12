/*
  ・「プリミティブ型」では「参照先の値」を比較する。
  ・「オブジェクト」では「オブジェクトへの参照」を比較する。
*/

const a = {
  prop: 0,
};

const b = {
  prop: 0,
};

const c = a;

console.log(a === b); // オブジェクトの参照先が異なるため「false」が表示される。
console.log(a.prop === b.prop); // 参照先の値が一致するため「true」が表示される。
console.log(a === c); // オブジェクトの参照先が一致するため「true」が表示される。
