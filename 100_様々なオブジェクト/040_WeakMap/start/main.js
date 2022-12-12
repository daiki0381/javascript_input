/*
  ・データを管理するための入れ物を「コレクション」という。
  ・「WeakMap」は、弱参照 (キーのオブジェクトへの参照が消滅するとWeakMapのプロパティと値も削除される) のオブジェクトで値を保持するコレクション。
  ・「WeakMap」のキーは、オブジェクトである必要がある。
  ・「WeakMap」は「for...of」を使用できない。
*/

//  WeakMapコンストラクターからインスタンスを生成する。
const wm = new WeakMap();

let key1 = {};

// 「WeakMapのインスタンス.set(プロパティ, 値);」でWeakMapのインスタンスにプロパティと値を追加する。
wm.set(key1, 'value1');

//  キーのオブジェクトへの参照が消滅するとWeakMapのプロパティと値も削除される。
key1 = {};

// 「WeakMapのインスタンス.get(プロパティ);」でWeakMapのインスタンスの値を取得する。
console.log(wm.get(key1)); // 「undefined」が表示される。

const key2 = {};

wm.set(key2, 'value2');

// 「WeakMapのインスタンス.has(プロパティ);」でWeakMapのインスタンスにプロパティが存在するか確認する。
console.log(wm.has(key2)); // 「true」が表示される。

// 「WeakMapのインスタンス.delete(プロパティ);」でWeakMapのインスタンスのプロパティと値を削除する。
wm.delete(key2);

console.log(wm.get(key2)); // 「undefined」が表示される。
