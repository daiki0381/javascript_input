/*
  ・反復操作を行う際に使用するオブジェクト (反復可能オブジェクト) を「イテレーター」という。
  ・決められたルールに則って「イテレーター」を記述する。
  ・「genIterator (イテレーターを戻り値とする関数)」を「Symbol.iterator」に格納すると「反復可能オブジェクト」になる。
  ・「Symbol.iterator」は「イテレーター」の設定をするためのプロパティ。
*/

/* イテレーターの記述ルール
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

// イテレーターの内部構造

//  genIteratorは「イテレーター」を生成する関数。
//  genIteratorの引数にループの上限値を設定する。
function genIterator(max) {
  //  ループの回数を保持する。
  let i = 0;

  //  genIteratorの戻り値がイテレーター。
  return {
    //  イテレーターはnextメソッドを保持している。
    next: function () {
      //  nextメソッドの戻り値はオブジェクト。

      if (i >= max) {
        return {
          // 「true」の場合、ループを中止する。
          done: true,
        };
      } else {
        return {
          // 「false」の場合、ループを継続する。
          done: false,
          //  後置インクリメントの場合、オペランド (i) を返した後に+1をする。
          value: i++,
        };
      }
    },
  };
}

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

// 「for...of」とした場合、内部でnextメソッドが実行されている。
for (const value of obj) {
  console.log(value); // 「0」「1」「2」「3」「4」「5」「6」「7」「8」「9」が表示される。
}

//  反復可能オブジェクトを設定すると、インスタンスに初期値を設定できる。
const set = new Set(obj);

for (const value of set) {
  console.log(value); // 「0」「1」「2」「3」「4」「5」「6」「7」「8」「9」が表示される。
}
