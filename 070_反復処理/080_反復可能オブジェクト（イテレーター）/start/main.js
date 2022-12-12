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

const obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
};

//  オブジェクトのプロトタイプにSymbol.iterator (イテレーターの設定) を追加することで「for...of」を使用可能にする。
//  オブジェクトのプロトタイプのSymbol.iteratorを設定した場合、全てのオブジェクトの反復処理に反映される。
Object.prototype[Symbol.iterator] = function () {
  // 「Object.keys(オプジェクト);」でオブジェクトのプロパティを配列に格納する。
  //  obj[Symbol.iterator]()とJSエンジンによってイテレータが実行されるので「this」の参照先は「obj」となる。
  const keys = Object.keys(this);
  // 「obj」のプロパティの値を取得したいため「_this」に「obj」を格納する。
  const _this = this;
  //  オブジェクトのプロパティのインデックス番号。
  let i = 0;
  return {
    next() {
      //  後置インクリメントの場合、オペランド (i) を返した後に+1をする。
      //  オブジェクトのプロパティを取得する。
      let key = keys[i++];
      return {
        // 「true」の場合、ループを中止する。
        done: i > keys.length,
        //  nextメソッドの「this」の参照先は「イテレーター」となる。
        //  for...ofの変数にプロパティと値を格納した配列を渡す。
        value: [key, _this[key]],
      };
    },
  };
};

//  ()内の変数にはプロパティと値が配列で格納されている。
//  配列の分割代入の場合、分割代入の変数に順に配列の値が格納される。
// 「for...of」とした場合、内部でnextメソッドが実行されている。
for (let [prop, value] of obj) {
  console.log(prop, value); // 「prop1 value1」「prop2 value2」「prop3 value3」が表示される。
}

//  オブジェクトは「for...of」を使用できない。
// 「Object.entries(オブジェクト)」でオブジェクトを配列に変換する。
// const array = Object.entries(obj);
//  ()内の変数にはプロパティと値が配列で格納されている。
//  配列の分割代入の場合、分割代入の変数に順に配列の値が格納される。
// for (let [prop, value] of array) {
//   console.log(prop, value); // 「prop1 value1」「prop2 value2」「prop3 value3」が表示される。
// }
