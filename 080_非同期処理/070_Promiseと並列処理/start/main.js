function sleep(value) {
  //  Promiseのインスタンスを戻り値とする。
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(value++);
      resolve(value);
    }, value * 500);
  });
}

// 「Promise.all(反復可能オブジェクト内にPromiseのインスタンスを詰める);」で非同期処理の並列処理が可能になる。
//  反復可能オブジェクト内のPromiseのインスタンスが全て完了するまで、次のthenメソッドは実行されない。
// 「Promise.all()」自身がPromiseのインスタンスを返却する。
//  resolveの実引数の配列 (値が格納されている) がthenメソッドのコールバック関数の引数に設定される。
//  rejectが呼ばれた場合は、catchメソッドが実行される。
Promise.all([sleep(0), sleep(1), sleep(2)]).then(function (data) {
  console.log(data);
});

// 「Promise.race(反復可能オブジェクト内にPromiseのインスタンスを詰める);」で非同期処理の並列処理が可能になる。
//  反復可能オブジェクト内のPromiseのインスタンスが1つ完了した時点で、次のthenメソッドが実行される。
// 「Promise.race()」自身がPromiseのインスタンスを返却する。
//  resolveの実引数がthenメソッドのコールバック関数の引数に設定される。
Promise.race([sleep(0), sleep(1), sleep(2)]).then(function (data) {
  console.log(data);
});

// 「Promise.allSettled(反復可能オブジェクト内にPromiseのインスタンスを詰める);」で非同期処理の並列処理が可能になる。
//  反復可能オブジェクト内のPromiseのインスタンスが全て完了するまで、次のthenメソッドは実行されない。
// 「Promise.allSettled()」自身がPromiseのインスタンスを返却する。
//  resolveの実引数の配列 (オブジェクト (status,value) が格納されている) がthenメソッドのコールバック関数の引数に設定される。
//  rejectが呼ばれた場合は、thenメソッドが実行され、thenメソッドのコールバック関数の引数の配列内のオブジェクトの「status」が「rejected」となる。
Promise.allSettled([sleep(0), sleep(1), sleep(2)]).then(function (data) {
  console.log(data);
});
