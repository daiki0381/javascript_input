/*
  ・無名関数の場合「this」「arguments」「new」「prototype」は用意される。
  ・アロー関数の場合「this」「arguments」「new」「prototype」は用意されない。
  ・メソッドの関数が無名関数の場合「:」「function」は省略可能。
  ・メソッドの関数がアロー関数の場合「:」は省略不可能。
*/

window.name = 'John';

const person1 = {
  name: 'Tom',
  //  メソッドの関数が無名関数の場合「:」「function」は省略可能。
  hello() {
    console.log(`Hello ${this.name}`);
  },
};

//  helloメソッドは無名関数であるため「this」が用意される。
//  person1オブジェクトを経由して、helloメソッドを呼び出す場合、helloメソッド内の「this」は「person1オブジェクト」になる。
person1.hello(); // 「Hello Tom」が表示される。

const person2 = {
  name: 'Tom',
  //  メソッドの関数がアロー関数の場合「:」は省略不可能。
  hello: () => {
    console.log(`Hello ${this.name}`);
  },
};

//  helloメソッドはアロー関数であるため「this」が用意されない。
// 「this」をスコープチェーン (スコープが複数階層で連なっている状態) を辿って、レキシカルスコープ (内側のスコープから見た外側のスコープ) に探しに行く。
//  helloメソッドのレキシカルスコープのperson2オブジェクトはグローバルコンテキストなので、helloメソッドの「this」は「windowオブジェクト」になる。
person2.hello(); // 「Hello John」が表示される。

//  fn1関数はアロー関数であるため「this」が用意されない。
// 「this」をスコープチェーン (スコープが複数階層で連なっている状態) を辿って、レキシカルスコープ (内側のスコープから見た外側のスコープ) に探しに行く。
//  fn1関数のレキシカルスコープはグローバルスコープなので、fn関数の「this」は「windowオブジェクト」になる。
const fn1 = () => console.log(`Bye ${this.name}`);

const person3 = {
  name: 'Tom',
  //  メソッドの関数が無名関数の場合「:」「function」は省略可能。
  hello() {
    console.log(`Hello ${this.name}`);
    fn1(); // 「Bye John」が表示される。
  },
};

//  helloメソッドは無名関数であるため「this」が用意される。
//  person3オブジェクトを経由して、helloメソッドを呼び出す場合、helloメソッド内の「this」は「person3オブジェクト」になる。
person3.hello(); // 「Hello Tom」が表示される。

const person4 = {
  name: 'Tom',
  //  メソッドの関数が無名関数の場合「:」「function」は省略可能。
  hello() {
    console.log(`Hello ${this.name}`);
    //  fn2関数はアロー関数であるため「this」が用意されない。
    // 「this」をスコープチェーン (スコープが複数階層で連なっている状態) を辿って、レキシカルスコープ (内側のスコープから見た外側のスコープ) に探しに行く。
    //  fn2関数のレキシカルスコープはhelloメソッドの関数スコープなので、fn2関数の「this」は「person4オブジェクト」になる。
    const fn2 = () => console.log(`Bye ${this.name}`);
    fn2(); // 「Bye Tom」が表示される。
  },
};

//  helloメソッドは無名関数であるため「this」が用意される。
//  person4オブジェクトを経由して、helloメソッドを呼び出す場合、helloメソッド内の「this」は「person4オブジェクト」になる。
person4.hello(); // 「Hello Tom」が表示される。

function fn3() {
  //  fn4関数はアロー関数であるため「this」が用意されない。
  // 「this」をスコープチェーン (スコープが複数階層で連なっている状態) を辿って、レキシカルスコープ (内側のスコープから見た外側のスコープ) に探しに行く。
  //  fn4関数のレキシカルスコープはfn3の関数スコープであり、関数として実行された場合「this」は「windowオブジェクト」になるため、  fn4関数の「this」は「windowオブジェクト」になる。
  const fn4 = () => console.log(`Bye ${this.name}`);
  fn4(); // 「Bye John」が表示される。
}
fn3();
