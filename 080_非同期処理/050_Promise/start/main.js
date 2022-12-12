/*
  ・「Promise」は、非同期処理をより簡単に、可読性が上がるように記述出来るようにしたもの。
  ・「reject();」は「new Promise」のコールバック関数以外では使用できない。
  ・特定のthenメソッドのコールバック関数内でcatchメソッドに移行したい場合「throw」を使用する。
  ・finallyメソッドのコールバック関数は引数を使用できない。
*/

/* Promise構文
  new Promise(function (resolve, reject) {
     resolveが呼ばれた場合、thenメソッドのコールバック関数が実行される。
    resolve(実引数);
     rejectが呼ばれた場合、catchメソッドのコールバック関数が実行される。
    reject(実引数);
  }).then(function (data) {
     resolveが呼ばれた場合の処理を記述する。
  }).catch(function (data) {
     rejectが呼ばれた場合の処理を記述する。
  ).finally(function () {
     終了処理を記述する。
  });

  new Promise(
    同期処理
  }).then(
    非同期処理 (resolveを待つ)
  }).catch(
    非同期処理 (rejectを待つ)
  ).finally(
    非同期処理 (then,catchを待つ)
  });
*/

/* Promiseの使用例①
   ①同期処理のためコールスタックに積まれている「console.log('Promise');」が実行される。
   ②同期処理のためコールスタックに積まれている「console.log('Global end');」が実行される。
   ③非同期処理の「console.log('then');」が順番に実行され、「console.log('finally');」が実行される。

  new Promise(function (resolve, reject) {
    console.log('Promise');
     resolveが呼ばれないと、thenメソッドは実行されない。
    resolve();
  }).then(function () {
    console.log('then');
  }).then(function () {
    console.log('then');
  }).then(function () {
    console.log('then');
  }).finally(function () {
    console.log('finally');
  });
  console.log('Global end');
*/

/* Promiseの使用例②
   ①同期処理のためコールスタックに積まれている「console.log('Promise');」が実行される。
   ②同期処理のためコールスタックに積まれている「console.log('Global end');」が実行される。
   ③非同期処理の「console.log('catch');」が実行され、「console.log('finally');」が実行される。

  new Promise(function (resolve, reject) {
    console.log('Promise');
     rejectが呼ばれないと、catchメソッドは実行されない。
    reject();
  })
  .then(function () {
    console.log('then');
  })
  .then(function () {
    console.log('then');
  })
  .then(function () {
    console.log('then');
  })
  .catch(function () {
    console.log('catch');
  })
  .finally(function () {
    console.log('finally');
  });
  console.log('Global end');
*/

/* Promiseの使用例③
   ①同期処理のためコールスタックに積まれている「console.log('Promise');」が実行される。
   ②同期処理のためコールスタックに積まれている「console.log('Global end');」が実行される。
   ③非同期処理の「console.log('then');」が実行される。
   ④非同期処理の「console.log('catch');」が実行される。
   ⑤非同期処理の「console.log('finally');」が実行される。

  new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
  })
  .then(function () {
    console.log('then');
    「reject();」は「new Promise」のコールバック関数以外では使用できない。
     特定のthenメソッドのコールバック関数内でcatchメソッドに移行したい場合「throw」を使用する。
    throw new Error();
  })
  .then(function () {
    console.log('then');
  })
  .then(function () {
    console.log('then');
  })
  .catch(function () {
    console.log('catch');
  })
  .finally(function () {
    console.log('finally');
  });
  console.log('Global end');
*/

/* Promiseの使用例④
   ①同期処理のためコールスタックに積まれている「console.log('Promise');」が実行される。
   ②同期処理のためコールスタックに積まれている「console.log('Global end');」が実行される。
   ③非同期処理の「console.log('then');」が順番に実行され、「console.log('finally');」が実行される。

  new Promise(function (resolve, reject) {
    console.log('Promise');
     1つ目のthenメソッドのコールバック関数に引数を渡す。
    resolve('then');
  }).then(function (data) {
    console.log(data);
     2つ目のthenメソッドのコールバック関数に引数を渡す。
    return data;
  }).then(function (data) {
    console.log(data);
     3つ目のthenメソッドのコールバック関数に引数を渡す。
    return data;
  }).then(function (data) {
    console.log(data);
  }).finally(function () {
    console.log('finally');
  });
  console.log('Global end');
*/

/* Promiseの使用例⑤
   ①同期処理のためコールスタックに積まれている「console.log('Promise');」が実行される。
   ②同期処理のためコールスタックに積まれている「console.log('Global end');」が実行される。
   ③非同期処理の「console.log('catch');」が実行され、「console.log('finally');」が実行される。

  new Promise(function (resolve, reject) {
    console.log('Promise');
     1つ目のcatchメソッドのコールバック関数に引数を渡す。
    reject('catch');
  })
  .then(function () {
    console.log('then');
  })
  .then(function () {
    console.log('then');
  })
  .then(function () {
    console.log('then');
  })
  .catch(function (data) {
    console.log(data);
  })
  .finally(function () {
    console.log('finally');
  });
  console.log('Global end');
*/

//  ①同期処理のためコールスタックに積まれている「console.log('Promise');」が実行される。
//  ②同期処理のためコールスタックに積まれている「console.log('Global end');」が実行される。
//  ③1秒後に非同期処理の「console.log('then');」が順番に実行され、「console.log('finally');」が実行される。

new Promise(function (resolve, reject) {
  console.log('Promise');
  setTimeout(function () {
    resolve();
  }, 1000);
})
  .then(function () {
    console.log('then');
  })
  .then(function () {
    console.log('then');
  })
  .then(function () {
    console.log('then');
  })
  .catch(function () {
    console.log('catch');
  })
  .finally(function () {
    console.log('finally');
  });
console.log('Global end');
