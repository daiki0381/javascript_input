/*
  ・「Proxy」は、プロパティの操作 (プロパティ値の変更/プロパティ値の取得/プロパティの削除) に独自の処理を追加するためのオブジェクト。
*/

//  対象となるオブジェクト。
const targetObj = { a: 0 };

//  プロパティの操作 (プロパティ値の変更/プロパティ値の取得/プロパティの削除) に関するメソッドを格納したオブジェクト。
const handler = {
  //  プロパティ値が変更された際に実行される。
  //  第1引数に対象となるオブジェクトが格納されている。
  //  第2引数に変更されたプロパティの名前が格納されている。
  //  第3引数に変更されたプロパティ値が設定されている。
  //  第4引数にProxyのオブジェクトが格納されている。
  set: function (target, prop, value, receiver) {
    //  独自の処理
    console.log(`[set]: ${prop} ${value}`);
    //  プロパティ値の変更
    target[prop] = value;
  },
  //  プロパティ値が取得された際に実行される。
  //  第1引数に対象となるオブジェクトが格納されている。
  //  第2引数に取得されたプロパティの名前が格納されている。
  //  第3引数にProxyのオブジェクトが格納されている。
  get: function (target, prop, receiver) {
    //  独自の処理
    console.log(`[get]: ${prop}`);
    //  プロパティ値の取得
    return target[prop];
  },
  //  プロパティが削除された際に実行される。
  //  第1引数に対象となるオブジェクトが格納されている。
  //  第2引数に削除されたプロパティの名前が格納されている。
  deleteProperty: function (target, prop) {
    //  独自の処理
    console.log(`[deleteProperty]: ${prop}`);
    //  プロパティの削除
    delete target[prop];
  },
};

//  Proxyコンストラクターからインスタンスを生成する。
//  第1引数に対象となるオブジェクト。
//  第2引数にプロパティの操作 (プロパティ値の変更/プロパティ値の取得/プロパティの削除) に関するメソッドを格納したオブジェクト。
const proxy = new Proxy(targetObj, handler);

proxy.a = 1;

proxy.a;

delete proxy.a;
