/*
  ・データを管理するための入れ物を「コレクション」という。
  ・「Map」「Set」は「コレクション」である。
  ・「Map」は「[[Entries]]」という格納場所でプロパティと値を管理している。
  ・配列の分割代入の場合、分割代入の変数に順に配列の値が格納される。
  ・Setは配列のようにインデックス番号で値を取得することができないので、インデックス番号で値を取得したい場合、配列に変換する必要がある。

  Object
  ・キー ▶︎ 文字列
  ・for...in ▶︎ ⭕️
  ・for...of ▶︎ ❌

  Map
  ・キー ▶︎ 制約なし
  ・for...in ▶︎ ❌
  ・for...of ▶︎ ⭕️

  Array
  ・重複値 ▶︎ ⭕️
  ・for...in ▶︎ ⭕️
  ・for...of ▶︎ ⭕️

  Set
  ・重複値 ▶︎ ❌
  ・for...in ▶︎ ❌
  ・for...of ▶︎ ⭕️
*/

// Map

//  Mapコンストラクターからインスタンスを生成する。
const map = new Map();

const key1 = {};
// 「Mapのインスタンス.set(プロパティ, 値);」でMapのインスタンスにプロパティと値を追加する。
map.set(key1, 'value1');
// 「Mapのインスタンス.get(プロパティ);」でMapのインスタンスの値を取得する。
console.log(map.get(key1)); // 「value1」が表示される。
// 「key1」は「オブジェクト」であるため「オブジェクトへの参照」を保持している。
// 「{}」とすると別の「オブジェクトへの参照」となるので「undefined」になる。
console.log(map.get({})); // 「undefined」が表示される。

const key2 = function () {};
// 「Mapのインスタンス.set(プロパティ, 値);」でMapのインスタンスにプロパティと値を追加する。
map.set(key2, 'value2');
// 「Mapのインスタンス.get(プロパティ);」でMapのインスタンスの値を取得する。
console.log(map.get(key2)); // 「value2」が表示される。

const key3 = 0;
// 「Mapのインスタンス.set(プロパティ, 値);」でMapのインスタンスにプロパティと値を追加する。
map.set(key3, 'value3');
// 「Mapのインスタンス.get(プロパティ);」でMapのインスタンスの値を取得する。
console.log(map.get(key3)); // 「value3」が表示される。
// 「key3」は「プリミティブ型」であるため「値」を保持している。
// 「0」としても「key3」の保持している「値」と一致するため「value3」となる。
console.log(map.get(0)); // 「value3」が表示される。

// 「Mapのインスタンス.delete(プロパティ);」でMapのインスタンスのプロパティと値を削除する。
map.delete(key3);
// 「Mapのインスタンス.get(プロパティ);」でMapのインスタンスの値を取得する。
// 「key3」は削除されているので「undefined」となる。
console.log(map.get(key3)); // 「undefined」が表示される。

//  配列の分割代入の場合、分割代入の変数に順に配列の値が格納される。
const [value1, value2] = ['value1', 'value2'];
console.log(value1, value2); // 「value1 value2」が表示される。

//  ()内の変数には配列でプロパティと値が格納されている。
for (const [property, value] of map) {
  console.log(property, value); // 「{} 'value1'」「ƒ () { } 'value2'」が表示される。
}

// Set

//  Setコンストラクターからインスタンスを生成する。
const set = new Set();

// 「Setのインスタンス.add(値);」でSetのインスタンスに値を追加する。
set.add('value1');
//  値が重複する場合は追加されない。
set.add('value1');
// 「Setのインスタンス.add(値);」でSetのインスタンスに値を追加する。
set.add('value2');
// 「Setのインスタンス.add(値);」でSetのインスタンスに値を追加する。
set.add('value3');
// 「Setのインスタンス.delete(値);」でSetのインスタンスの値を削除する。
set.delete('value3');
// 「Setのインスタンス.has(値);」でSetのインスタンスに値が存在するか確認する。
console.log(set.has('value1')); // 「true」が表示される。

//  ()内の変数には値が格納されている。
for (const value of set) {
  console.log(value); // 「value1」「value2」が表示される。
}

//  Setは配列のようにインデックス番号で値を取得することができないので、インデックス番号で値を取得したい場合、配列に変換する必要がある。
// 「Array.from(配列に変換したい要素);」で配列に変換することができる。
const array1 = Array.from(set);
console.log(array1[0]); // 「value1」が表示される。
console.log(array1[1]); // 「value2」が表示される。

//  スプレッド演算子で配列に変換することができる。
const array2 = [...set];
console.log(array2[0]); // 「value1」が表示される。
console.log(array2[1]); // 「value2」が表示される。
