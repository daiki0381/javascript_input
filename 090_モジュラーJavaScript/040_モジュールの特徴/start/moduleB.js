/*
  ・上から順に処理を行うことを「同期処理」という。
  ・HTMLの構文解析後にスクリプトの処理を行うことを「非同期処理」という。
  ・スクリプトを非同期処理にしたい場合「defer」を付与する。
  ・「type="module"」とした場合「defer」が自動的に付与される。
  ・通常のファイルを複数回読み込んだ場合、その回数分読み込まれる (実行される)。
  ・「ES Modules (ESM)」のファイルを複数回読み込んだ場合、1回のみ読み込まれる (実行される)。
  ・「import」を複数回しても、1回のみ読み込まれる (実行される)。
  ・「nomodule」とした場合「ES Modules (ESM)」に対応していないブラウザの時に実行される。
*/

// // 「documentオブジェクト」に「HTML要素」が格納されている。
// const h1 = document.querySelector('h1');
// console.log(h1.textContent);

console.log('moduleB');

import './moduleA.js';
import './moduleA.js';
