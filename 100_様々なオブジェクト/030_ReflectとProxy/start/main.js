/*
  ・「Proxy」は、プロパティの操作 (プロパティ値の変更/プロパティ値の取得/プロパティの削除) に独自の処理を追加するためのオブジェクト。
  ・「Reflect」は、JSエンジンの内部メソッドを呼び出すメソッドが格納されているオブジェクト。
  ・「Reflect」の目的は、①JSエンジンの内部メソッドを呼び出す関数の格納場所②Proxyと合わせて使用するため。
*/

const targetObj = {
  a: 0,
  get value() {
    // return this.a;
    return this.b;
  },
};

const handler = {
  get(target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    // 「hasOwnPropertyメソッド」は、引数に渡されたプロパティ (メソッド) がオブジェクトに存在するか確認する。(_proto_は含まない。)
    if (target.hasOwnProperty(prop)) {
      // 「this」の参照先が「proxy」になる。
      return Reflect.get(target, prop, receiver);
    } else {
      return -1;
    }
  },
};

const proxy = new Proxy(targetObj, handler);
// console.log(proxy.a); // 「[get]: a」「0」が表示される。
// console.log(proxy.b); // 「[get]: b」「-1」が表示される。
console.log(proxy.value); // 「[get]: value」「[get]: b」「-1」が表示される。
