/*
  ・反復操作を行う際に使用するオブジェクト (反復可能オブジェクト) を「イテレーター」という。
  ・「for...of」は「イテレーター」を持つオブジェクトの反復操作を行う。
  ・「for...of」は、オブジェクトに格納されている「イテレーター」によって挙動が変わる。
*/

const array = ['a', 'b', 'c'];

array[4] = 'e';

Object.prototype.method = function () {};

Object.defineProperty(array, 0, {
  enumerable: false,
});

//  ()内の変数には値が格納されている。
for (let v of array) {
  //  配列イテレーターは、インデックス順にループ処理を行うため、設定されていない[3]は「undefined」となる。
  //  配列イテレーターは、プロトタイプに格納した値を表示しない。
  //  配列イテレーターは「enumerable」を参照しないので「false」でも表示される。
  console.log(v); // 「a」「b」「c」「undefined」「e」が表示されている。
}
