function hello(name) {
  // 「nameの値」が「falsyな値」であれば初期値を設定する。
  name = name || 'Alice';
  console.log(`Hello ${name}`);
}
hello(); // 「nameの値」が「undefined」になり「falsyな値」なので初期値が設定され「Hello Alice」と表示される。

let name = 'Bob';
// 「nameの値」が「truthyな値」であればhelloを実行する。
name && hello(name);
