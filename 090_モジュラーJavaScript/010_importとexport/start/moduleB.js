/*
  ・ソースコードを機能毎に分割して、メンテナンスしやすくする仕組みを「モジュール」という。
  ・「ES Modules (ESM)」は、ブラウザ上でのモジュール管理 (import/export) の仕組み。
  ・「CommonJS (CJS)」は、Node.js上でのモジュール管理 (require/exports) の仕組み。
  ・「import (require)」は、モジュールの読み込みに使用する。
  ・「export (exports)」は、モジュールの露出に使用する。
  ・「webpack (モジュールを1つのファイルにまとめる)」を使用する場合は「.js」を省略可能。
*/

/* 「export」を読み込む場合
  import { publicVal, publicFn } from './moduleA.js';
  「publicVal」が表示される。
  console.log(publicVal);
  「publicFn」が表示される。
  publicFn();
*/

/*「export default」を読み込む場合
  import defaultObject from './moduleA.js';
  「defaultVal」が表示される。
  console.log(defaultObject.defaultVal);
  「defaultFn」が表示される。
  defaultObject.defaultFn();
*/

/* 「export」「export default」を読み込む場合
   別名を付けたい場合は「as」を使用する。
  import defaultObject, { publicVal as val, publicFn as fn } from './moduleA.js';
  「publicVal」が表示される。
  console.log(val);
  「publicFn」が表示される。
  fn();
  「defaultVal」が表示される。
  console.log(defaultObject.defaultVal);
  「defaultFn」が表示される。
  defaultObject.defaultFn();
*/

//  別名を付けたい場合は「as」を使用する。
// 「export」「export default」を全て読み込みたい場合は「*」を使用する。
import * as moduleA from './moduleA.js';

// 「publicVal」が表示される。
console.log(moduleA.publicVal);
// 「publicFn」が表示される。
moduleA.publicFn();

// 「defaultVal」が表示される。
console.log(moduleA.default.defaultVal);
// 「defaultFn」が表示される。
moduleA.default.defaultFn();
