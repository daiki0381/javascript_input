/*
  ・「async/await」は「Promise」を更に直感的に記述出来るようにしたもの。
  ・「async」関数は「Promise」のインスタンスを返却する。
  ・「await」は「Promise」のインスタンスを返却する関数の「Promise」が結果を返す (resolve,rejectが実行される) まで待機する。
  ・「await」は「Promise」のインスタンスを返却する関数の「Promise」の結果 ([[PromiseResult]]の値) を戻り値として返す。
  ・「await」は「async」関数内でのみ使用可能。
*/

/*
  書き換え①
  async function fn() {
    「async」関数の「return」に続く戻り値が自動的に「Promise」で「resolve」された値になる。
    return 'hello';
  }
  fn().then(function(data) {
    console.log(data);
  });

  書き換え②
  async function fn1() {
    「async」関数の「return」に続く戻り値が自動的に「Promise」で「resolve」された値になる。
    return 'hello';
  }
  async function fn2() {
    「await」は「async」関数内でのみ使用可能。
    「await」は「Promise」のインスタンスを返却する関数の「Promise」が結果を返す (resolve,rejectが実行される) まで待機する。
    「await」は「Promise」のインスタンスを返却する関数の「Promise」の結果 ([[PromiseResult]]の値) を戻り値として返す。
    const result = await fn1();
    console.log(result);
  }
  fn2();

  書き換え③
  async function fn() {
    「async」関数の「return」に「Promise」「resolve」としても問題ない。
    return new Promise(function (resolve) {
      resolve('hello');
    });
  }
  fn().then(function (data) {
    console.log(data);
  });

  書き換え④
  async function fn1() {
    「async」関数の「return」に「Promise」「resolve」としても問題ない。
    return new Promise(function (resolve) {
      resolve('hello');
    });
  }
  async function fn2() {
    「await」は「async」関数内でのみ使用可能。
    「await」は「Promise」のインスタンスを返却する関数の「Promise」が結果を返す (resolve,rejectが実行される) まで待機する。
    「await」は「Promise」のインスタンスを返却する関数の「Promise」の結果 ([[PromiseResult]]の値) を戻り値として返す。
    const result = await fn1();
    console.log(result);
  }
  fn2();

  書き換え⑤
  Promise.resolve('hello').then(function (data) {
    console.log(data);
  });

  書き換え⑥
  new Promise(function (resolve) {
    resolve('hello);
  }).then(function (data) {
    console.log(data);
  });
*/

// 「async」関数は「Promise」のインスタンスを返却する。
async function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// 「async」関数は「Promise」のインスタンスを返却する。
async function init() {
  // 「await」は「async」関数内でのみ使用可能。
  // 「await」は「Promise」のインスタンスを返却する関数の「Promise」が結果を返す (resolve,rejectが実行される) まで待機する。
  // 「await」は「Promise」のインスタンスを返却する関数の「Promise」の結果 ([[PromiseResult]]の値) を戻り値として返す。
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  //  thenメソッドのコールバック関数に引数を渡す。
  return val;
  //  catchメソッドに処理を移行する。
  // throw new Error();
}

init()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  });
