/*
  ・イテレーターを生成するための特殊な関数を「ジェネレーター」という。
  ・「ジェネレーター」を使用することでより簡略化してイテレーターを生成するための関数を記述できる。
*/

/* genIteratorの記述
  function genIterator() {
     genIteratorの戻り値がイテレーター。
    return {
       イテレーターはnextメソッドを保持している。
      next: function () {
         nextメソッドの戻り値はオブジェクト。
        return {
          「false」の場合、ループを継続する。
          「true」の場合、ループを中止する。
          done: true / false,
           ループ時に渡ってくる値。
          value: 値
        }
      }
    }
  }
*/

/* ジェネレーターの記述
  「*」を付けることでジェネレーター関数を定義する。
  function* gen() {
    if (ループ継続) {
      「yield」は「イテレーター」の「nextメソッド」の「done: false」「value: 値」を表現している。
      yield 値;
    } else {
      「return」は「イテレーター」の「nextメソッド」の「done: true」「value: 値」を表現している。
      return 値;
    }
  }
*/

// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// 「ジェネレーター」から「イテレーター」を生成する。
// const iterator = gen();

//  ジェネレーター関数は、yield (return) が完了した時点で次のnextメソッドが呼ばれるまで待機する。
//  returnが完了した時点で次のnextメソッドは「{value: undefined, done: true}」が表示される。
// console.log(iterator.next()); // 「{value: 1, done: false}」が表示される。
// console.log(iterator.next()); // 「{value: 2, done: false}」が表示される。
// console.log(iterator.next()); // 「{value: 3, done: true}」が表示される。
// console.log(iterator.next()); // 「{value: undefined, done: true}」が表示される。

//  genIteratorの引数にループの上限値を設定する。
function* genIterator(max) {
  //  ループの回数を保持する。
  let i = 0;

  //  ジェネレーター関数は、yield (return) が完了した時点で次のnextメソッドが呼ばれるまで待機する。
  // 「if」とした場合、1回目のnextメソッドはyieldが実行され、2回目のnextメソッドはreturnが実行される。
  // 「while」とした場合、1回目のnextメソッドはyieldが実行され、2回目以降のnextメソッドもループが継続するのでyieldが実行され、ループが終了するとreturnが実行される。
  while (i < max) {
    // 「yield」は「イテレーター」の「nextメソッド」の「done: false」「value: 値」を表現している。
    yield i++;
  }
  // 「return」は「イテレーター」の「nextメソッド」の「done: true」を表現している。
  return;
}

// 「ジェネレーター」から「イテレーター」を生成する。
const iterator = genIterator(10);

// 「a」は、nextメソッドの戻り値のオブジェクトが格納されている。
let a = iterator.next();

//  nextメソッドの戻り値のオブジェクトの「done」が「false」の場合はループを継続させる。
while (!a.done) {
  //  新しいnextメソッドの戻り値のオブジェクトが格納されている。
  //  valueの値が1ずつインクリメントしているオブジェクトが変数aにループ時に代入されている。
  a = iterator.next();
}

const obj = {
  // 「genIterator (イテレーターを戻り値とする関数)」を「Symbol.iterator」に格納すると「反復可能オブジェクト」になる。
  //  bindメソッドで上限値を設定している。
  //  オブジェクトリテラルのプロパティとしてSymbol.iteratorを設定した場合は、設定したオブジェクトの反復処理のみ反映される。
  [Symbol.iterator]: genIterator.bind(null, 10),
};

/* オブジェクトのプロパティの値にジェネレーター関数を記述する。
  const obj = {
    *[Symbol.iterator](max) {
      let i = 0;
      while (i < max) {
        yield i++;
      }
      return
    }
  }
*/

// 「for...of」とした場合、内部でnextメソッドが実行されている。
for (const value of obj) {
  console.log(value); // 「0」「1」「2」「3」「4」「5」「6」「7」「8」「9」が表示される。
}
