/*
  ・オブジェクトのプロパティはディスクリプター (value,configurable,enumerable,writable) を保持している。
  ・「value」は「値」を保持している。
  ・「configurable」は「設定を変更できるか,プロパティを削除できるか」を保持している。
  ・「enumerable」は「for...inのループを使用した場合にプロパティが参照されるか」を保持している。
  ・「writable」は「値を変更できるか」を保持している。
  ・「Object.getOwnPropertyDescriptor(オブジェクト, プロパティ);」は、オブジェクトのプロパティのディスクリプターを確認する。
  ・オブジェクトリテラルの場合「configurable」「enumerable」「writable」のデフォルト値は「true」となる。
  ・「Object.defineProperty」の場合「configurable」「enumerable」「writable」のデフォルト値は「false」となる。
*/

//  オブジェクトリテラルの場合「configurable」「enumerable」「writable」のデフォルト値は「true」となる。
const obj1 = { prop: 0 };

// 「Object.getOwnPropertyDescriptor(オブジェクト, プロパティ);」は、オブジェクトのプロパティのディスクリプターを確認する。
const descriptor1 = Object.getOwnPropertyDescriptor(obj1, 'prop');
console.log(descriptor1); // 「{value: 0, writable: true, enumerable: true, configurable: true}」が表示される。

const obj2 = {};
// 「Object.defineProperty(オブジェクト, プロパティ, {ディスクリプターの設定});」は、オブジェクトのプロパティのディスクリプターを設定する。
// 「Object.defineProperty」の場合「configurable」「enumerable」「writable」のデフォルト値は「false」となる。
Object.defineProperty(obj2, 'prop', { value: 0 });

// 「writable」が「false」の場合

//  変更されない。(ファイルの先頭に'use strict';を記述するとエラーになる。)
obj2.prop = 1;

// 「configurable」が「false」の場合

//  エラーになる。
Object.defineProperty(obj2, 'prop', { writable: true });

// 「delete オブジェクト.プロパティ」は、オブジェクトのプロパティを削除する。
//  削除されない。(ファイルの先頭に'use strict';を記述するとエラーになる。)
delete obj2.prop;

const descriptor2 = Object.getOwnPropertyDescriptor(obj2, 'prop');
console.log(descriptor2); // 「{value: 0, writable: false, enumerable: false, configurable: false}」が表示される。
