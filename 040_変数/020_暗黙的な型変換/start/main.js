/*
  ・値の型を「データ型」という。
  ・「型名:真偽値」「英名:Boolean」「例:true/false」
  ・「型名:数値」「英名:Number」「例:12」
  ・「型名:文字列」「英名:String」「例:"hello"」
  ・「型名:undefined (値が未定義)」「英名:Undefined」「例:undefined」
  ・「型名:null (変数が空である)」「英名:Null」「例:null」
  ・「型名:シンボル (一意の値)」「英名:Symbol」「例:一意の値」
  ・「型名:BigInt (桁が多い数値)」「英名:BigInt」「例:12n」
  ・「型名:オブジェクト」「英名:Object」「例:{a: 'value'}」
  ・値の型を調べるには「typeof 値」を使用する。
*/

let a = 0; // 0
console.log(typeof a, a) // 「型名:number」「値:0」が表示される。

let b = '1' + a; // '1' + 0
console.log(typeof b, b) // 文字列+数値は、数値が暗黙的に文字列に変換されるため「型名:string」「値:10」が表示される。

let c = 15 - b; // 15 - '10'
console.log(typeof c, c); // 数値-文字列は、文字列が暗黙的に数値に変換されるため「型名:number」「値:5」が表示される。

let d = c - null; // 5 - null
console.log(typeof d, d); // 数値-nullは、nullが暗黙的に数値 (0) に変換されるためため「型名:number」「値:5」が表示される。

let e = d - true; // 5 - true
console.log(typeof e, e); // 数値-trueは、trueが暗黙的に数値 (1) に変換されるためため「型名:number」「値:4」が表示される。
