/*
  ・データを管理するための入れ物を「コレクション」という。
  ・「WeakMap」は、弱参照 (キーのオブジェクトへの参照が消滅するとWeakMapのプロパティと値も削除される) のオブジェクトで値を保持するコレクション。
  ・「WeakMap」のキーは、オブジェクトである必要がある。
  ・「WeakMap」は「for...of」を使用できない。
*/

const wm = new WeakMap();

export class Person {
  constructor(name) {
    // this._name = name;
    wm.set(this, name);
  }

  hello() {
    console.log(`hello ${wm.get(this)}`);
  }
}
