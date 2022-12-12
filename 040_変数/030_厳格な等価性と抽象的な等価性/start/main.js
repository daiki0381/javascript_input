/*
  ・厳格な等価性 (型の比較あり) は「===」を使用する。
  ・抽象的な等価性 (型の比較なし) は「==」を使用する。
*/

let a = '1';
let b = 1;
let c = true;
let e = '';
let d = 0;
let f = '0';
let g = undefined;
let h = null;

console.log(a === b); // 「'1' === 1」は型が異なるので「false」が表示される。
console.log(a == b); // 型が暗黙的に変換される ('1'が1に変換される) ため「true」が表示される。

console.log(b === c); // 「1 === true」は型が異なるので「false」が表示される。
console.log(b == c); // 型が暗黙的に変換される (trueが1に変換される) ため「true」が表示される。

console.log(e === d); // 「'' === 0」は型が異なるので「false」が表示される。
console.log(e == d); // 型が暗黙的に変換される (''が0に変換される) ため「true」が表示される。

console.log(d === f); // 「0 === '0'」は型が異なるので「false」が表示される。
console.log(d == f); // 型が暗黙的に変換される ('0'が0に変換される) ため「true」が表示される。
