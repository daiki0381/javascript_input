const moduleA = (function () {
  console.log('Immediately Invoked Function Expression');

  let publicVal = 10;

  function publicFn() {
    console.log(`publicFn: ${publicVal}`);
  }

  return {
    //  オブジェクトのプロパティ値に「プリミティブ型」の「変数」を渡した場合、「参照先の値」がコピーされる。
    //  参照先の値がコピーされるため「プロパティのpublicVal」と「変数のpublicVal」の値は独立している。
    publicVal,
    publicFn,
  };
})();

// moduleA.publicFn(); // 「publicFn: 10」が表示される。
// console.log(moduleA.publicVal++); // 「10」が表示される。
// console.log(moduleA.publicVal++); // 「11」が表示される。
// console.log(moduleA.publicVal++); // 「12」が表示される。
// moduleA.publicFn(); // 「publicFn: 10」が表示される。

//  分割代入の変数名を変更したい場合は「:」とする。
const moduleB = (function ({ publicVal: val, publicFn: fn }) {
  fn(); //publicFn: 10」が表示される。
  console.log(val++); // 「10」が表示される。
  console.log(val++); // 「11」が表示される。
  console.log(val++); // 「12」が表示される。
  fn(); // 「publicFn: 10」が表示される。
})(moduleA);
