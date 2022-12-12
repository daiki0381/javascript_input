/*
  ・無名関数の省略記法を「アロー関数」という。
  ・仮引数が1つの場合、()は省略可能。
  ・仮引数が2つ以上の場合、()は省略不可能。
  ・仮引数が0の場合、()は省略不可能。
  ・仮引数が0の場合、()は_で代用可能。
  ・実行行が1行の場合、returnと{}は省略可能。
  ・実行行が2行以上の場合、returnと{}は省略不可能。
  ・{}がある場合、returnは省略不可能。
  ・アロー関数の場合「this」「arguments」「new」「prototype」は用意されない。
*/

// 関数式 (無名関数)

const fn1 = function (name) {
  return `Hello ${name}`;
};
console.log(fn1('Tom')); // 「Hello Tom」が表示される。

// 関数式 (アロー関数)

//  仮引数が1つの場合、()は省略可能。
//  実行行が1行の場合、returnと{}は省略可能。
const fn2 = (name) => `Hello ${name}`;
console.log(fn2('Tom')); // 「Hello Tom」が表示される。

//  仮引数が2つ以上の場合、()は省略不可能。
//  実行行が2行以上の場合、returnと{}は省略不可能。
const fn3 = (name1, name2) => {
  console.log(`Hello ${name1}`);
  console.log(`Hello ${name2}`);
};
fn3('Tom', 'Bob'); // 「Hello Tom」「Hello Bob」が表示される。

//  仮引数が0の場合、()は省略不可能。
//  {}がある場合、returnは省略不可能。
const fn4 = () => {
  return 'Hello Tom';
};
console.log(fn4()); // 「Hello Tom」が表示される。

//  仮引数が0の場合、()は_で代用可能。
const fn5 = (_) => {
  return 'Hello Tom';
};
console.log(fn5()); // 「Hello Tom」が表示される。
