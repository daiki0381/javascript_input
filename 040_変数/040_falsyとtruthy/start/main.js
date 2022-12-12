/*
  ・Booleanで真偽値に変換した場合にfalseになる値を「falsyな値」という。
  ・Booleanで真偽値に変換した場合にtrueになる値を「truthyな値」という。
  ・falsyな値は「false」「null」「0」「undefined」「0n」「NaN (数値では無い値)」「''」「""」である。
  ・truthyな値は「falsyな値以外」である。
*/

let a = 0;
let b = 1;
let c = null;
let d = undefined;
let e = parseInt("文字列"); // NaN (数値では無い値)
let f = '';
let g = '文字列';

console.log(Boolean(a)); // 「Boolean(0)」は「falsyな値」なので「false」が表示される。
console.log(Boolean(b)); // 「Boolean(1)」は「truthyな値」なので「true」が表示される。
console.log(Boolean(c)); // 「Boolean(null)」は「falsyな値」なので「false」が表示される。
console.log(Boolean(d)); // 「Boolean(undefined)」は「falsyな値」なので「false」が表示される。
console.log(Boolean(e)); // 「Boolean(NaN)」は「falsyな値」なので「false」が表示される。
console.log(Boolean(f)); // 「Boolean('')」は「falsyな値」なので「false」が表示される。
console.log(Boolean(g)); // 「Boolean('文字列')」は「truthyな値」なので「true」が表示される。
