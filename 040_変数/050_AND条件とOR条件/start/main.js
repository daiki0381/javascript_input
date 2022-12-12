/*
  ・「両方を満たす場合に実行する」は「&&」を使用する。
  ・「&&」は左から順に評価して「途中にfalsyな値」があれば「そのfalsyな値」を返し、「全てtruthyな値」であれば「最後のtruthyな値」を返す。
  ・「片方を満たす場合に実行する」は「||」を使用する。
  ・「||」は左から順に評価して「途中にtruthyな値」があれば「そのtruthyな値」を返し、「全てfalsyな値」であれば「最後のfalsyな値」を返す。
*/

let a = 1; // truthyな値
let b = 2; // truthyな値
let c = 3; // truthyな値
let d = 0; // falsyな値
let e = undefined; // falsyな値

console.log(a && b && c); // 「1 && 2 && 3」は「全てtruthyな値」なので「最後のtruthyな値」である「3」が表示される。
console.log(d && a && b && c) // 「0 && 1 && 2 && 3」の「0」は「falsyな値」なので「0」が表示される。

console.log(a || b || c) // 「1 || 2 || 3」の「1」は「truthyな値」なので「1」が表示される。
console.log(d || e); // 「0 || undefined」は「全てfalsyな値」なので「最後のfalsyな値」である「undefined」が表示される。

console.log((a || b) && (c || d)); // 「(1 || 2) && (3 || 0)」は「1 && 3」になり「全てtruthyな値」なので「最後のtruthyな値」である「3」が表示される。
