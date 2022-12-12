/*
  ・Promiseを使用して非同期処理を順次実行することを「プロミスチェーン」という。
  ・非同期処理をチェーンさせるには、thenメソッドのコールバック関数内の「return」にPromiseのインスタンスを設定する。
*/

function sleep(value) {
  //  Promiseのインスタンスを戻り値とする。
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(value++);
      resolve(value);
    }, 1000);
  });
}

//  Promiseのインスタンスが戻り値となるので、thenメソッドが使用できる。
sleep(0)
  .then(function (value) {
    //  非同期処理をチェーンさせるには、thenメソッドのコールバック関数内の「return」にPromiseのインスタンスを設定する。
    return sleep(value);
  })
  .then(function (value) {
    return sleep(value);
  })
  .then(function (value) {
    return sleep(value);
  })
  .then(function (value) {
    return sleep(value);
  });
