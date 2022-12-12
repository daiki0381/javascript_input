/*
  ・関数定義と同時に1度だけ実行される関数を「即時関数」という。
  ・即時関数は、関数内でのみ使える変数 (関数) と関数外でも使える変数 (関数) を明確に区別したい時に使用する。
*/

// 通常関数 (関数宣言)
function a() {
  console.log('通常関数 (関数宣言) is called');
}
a();

// 通常関数 (関数式)
const b = function () {
  console.log('通常関数 (関数式) is called');
};
b();

// 即時関数 (関数宣言)
(function () {
  console.log('即時関数 (関数宣言) is called');
})();

// 即時関数 (関数式)
const c = (function () {
  console.log('即時関数 (関数式) called');
})();

const d = (function (num) {
  return num;
})(10);
console.log(d);

// 即時関数の利用例
const e = (function () {
  //  privateValは即時関数が実行された時に1度だけ初期化される。
  let privateVal = 0;
  //  publicValは即時関数が実行された時に1度だけ初期化される。
  let publicVal = 1;

  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log('publicFn is called');
  }
  function publicFnWithPrivateVal() {
    console.log('publicFn is called' + privateVal++);
  }
  //  オブジェクトを戻り値として返却する。
  return {
    //  プロパティと変数名が一致する場合は:以降を省略できる。
    publicVal,
    //  関数自体を戻り値として返却する。
    publicFn,
    publicFnWithPrivateVal,
  };
})();
e.publicFn();
console.log(e.publicVal);

//  privateValは即時関数が実行された時に1度だけ初期化されるので、それ以降は加算することができる。
e.publicFnWithPrivateVal(); // publicFn is called0
e.publicFnWithPrivateVal(); // publicFn is called1
e.publicFnWithPrivateVal(); // publicFn is called2
