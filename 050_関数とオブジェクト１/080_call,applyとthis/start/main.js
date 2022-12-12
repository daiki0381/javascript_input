/*
  ・bindメソッドは「this」「引数」を固定した新しい関数を作成し、使用時点では実行されない。
  ・callメソッド,applyメソッドは「this」「引数」を固定した新しい関数を作成し、使用時点で実行される。
  ・配列を展開する場合「スプレッド演算子」を使用する。
*/

// 第1引数

function a() {
  console.log(`Hello ${this.name}`);
}

const tim = { name: 'Tim' };

//  bindメソッドの第1引数のオブジェクト ({ name: 'Tim' }) を関数内 (a) の「this」の参照先として固定し、その固定した関数を新しい関数として定義する。
//  使用時点では実行されない。
const b = a.bind(tim);
b(); // 「Hello Tim」が表示される。

//  callメソッドの第1引数のオブジェクト ({ name: 'Tim' }) を関数内 (a) の「this」の参照先として固定し、その固定した関数を新しい関数として定義する。
//  使用時点で実行される。
a.call(tim); // 「Hello Tim」が表示される。

//  applyメソッドの第1引数のオブジェクト ({ name: 'Tim' }) を関数内 (a) の「this」の参照先として固定し、その固定した関数を新しい関数として定義する。
//  使用時点で実行される。
a.apply(tim); // 「Hello Tim」が表示される。

// 第2引数以降

function c(name1, name2, name3) {
  console.log(`Hello ${name1}`);
  console.log(`Hello ${name2}`);
  console.log(`Hello ${name3}`);
}

//  関数内 (c) で「this」は使用されていないため、第1引数に「null」を設定する。
//  bindメソッドの第2引数以降の実引数 ('Alice', 'Bob', 'Carol') を関数内 (c) の仮引数として固定し、その固定した関数を新しい関数として定義する。
//  使用時点では実行されない。
const d = c.bind(null, 'Alice', 'Bob', 'Carol');
d(); // 「Hello Alice」「Hello Bob」「Hello Carol」が表示される。

//  関数内 (c) で「this」は使用されていないため、第1引数に「null」を設定する。
//  callメソッドの第2引数以降の実引数 ('Alice', 'Bob', 'Carol') を関数内 (c) の仮引数として固定し、その固定した関数を新しい関数として定義する。
//  使用時点で実行される。
c.call(null, 'Alice', 'Bob', 'Carol'); // 「Hello Alice」「Hello Bob」「Hello Carol」が表示される。

//  関数内 (c) で「this」は使用されていないため、第1引数に「null」を設定する。
//  applyメソッドの第2引数の実引数 (['Alice', 'Bob', 'Carol']) は関数内 (c) の仮引数に展開されて渡される。
//  applyメソッドの第2引数の実引数 (['Alice', 'Bob', 'Carol']) を関数内 (c) の仮引数として固定し、その固定した関数を新しい関数として定義する。
//  使用時点で実行される。
c.apply(null, ['Alice', 'Bob', 'Carol']); // 「Hello Alice」「Hello Bob」「Hello Carol」が表示される。

// applyメソッドの実例

const array = [1, 2, 3, 4, 5];

//  Mathオブジェクトのmaxメソッドの関数内の仮引数にapplyメソッドの第2引数の実引数 ([1, 2, 3, 4, 5]) を展開する。
const result1 = Math.max.apply(null, array);
console.log(result1); // 「5」が表示される。

// 配列を展開する場合「スプレッド演算子」を使用する。
const result2 = Math.max(...array);
console.log(result2); // 「5」が表示される。
