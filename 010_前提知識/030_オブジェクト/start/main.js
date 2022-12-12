/*
  ・名前 (プロパティ・キー) と値 (バリュー) をペアで管理する入れ物を「オブジェクト」という。
  ・オブジェクトのプロパティに格納された関数のことを「メソッド」という。
*/

let obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: function() {
    console.log('value3');
  },
  prop4: {
    prop5: 'value5'
  }
}

console.log(obj.prop1);
console.log(obj['prop1']);

obj.prop3();

console.log(obj.prop4.prop5);

obj.prop6 = 'value6';
console.log(obj.prop6);

console.log(obj);
