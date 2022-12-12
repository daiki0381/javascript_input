/*
  ・「JSON.parse」は「JSON」から「Object」に変換する。
  ・「JSON.stringify」は「Object」から「JSON」に変換する。
  ・サーバーにオブジェクトは渡せないので、JSONに変換する必要がある。
*/

const obj1 = { a: 0, b: 1, c: 2 };

// 「JSON.stringify」は「Object」から「JSON」に変換する。
//  第1引数に変換したいオブジェクト。
const json1 = JSON.stringify(obj1);
console.log(json1); // 「{"a":0,"b":1,"c":2}」が表示される。

//  第1引数にプロパティが格納されている。
//  第2引数に値が格納されている。
//  戻り値がJSONの文字列に格納される。
function replacer(prop, value) {
  if (value < 1) {
    return;
  } else {
    return value;
  }
}

// 「JSON.stringify」は「Object」から「JSON」に変換する。
//  第1引数に変換したいオブジェクト。
//  第2引数に関数or配列を設定することで、条件を付与する。
const json2 = JSON.stringify(obj1, replacer);
console.log(json2); // 「{"b":1,"c":2}」が表示される。

// 「JSON.stringify」は「Object」から「JSON」に変換する。
//  第1引数に変換したいオブジェクト。
//  第2引数に関数or配列を設定することで、条件を付与する。
const json3 = JSON.stringify(obj1, ['b', 'c']);
console.log(json3); // 「{"b":1,"c":2}」が表示される。

// 「JSON.parse」は「JSON」から「Object」に変換する。
//  第1引数に変換したいJSON。
const obj2 = JSON.parse(json1);
console.log(obj2); // 「{a: 0, b: 1, c: 2}」が表示される。
