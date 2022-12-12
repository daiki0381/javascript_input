/**
 * 問題：
 * オブジェクトの状態をlocalStorageに保存してみましょう。
 * 以下の要件に従ってlocalStorageに状態を保持するオブジェクト
 * を作成してみてください。
 *
 * １．オブジェクトの値が変更された場合に
 * オブジェクトをJSONに変換してlocalStorageに
 * 登録します。localStorageに登録する際のキー
 * は"test-data"としてください。
 *
 * ２．プログラムが実行される際にlocalStorage
 * を指定のキーで検索し、JSONがすでに登録されて
 * いる場合には、そのJSONからオブジェクトを復元し
 * 初期値のオブジェクトとしてください。
 */
const KEY = 'test-data';

class DataSource {
  static getLocal(KEY) {
    console.log('get from local');
    const json = localStorage.getItem(KEY);
    return JSON.parse(json);
  }

  static setLocal(KEY, target) {
    console.log('set to local');
    const json = JSON.stringify(target);
    localStorage.setItem(KEY, json);
  }
}

const targetObj = DataSource.getLocal(KEY) || {};

const pxy = new Proxy(targetObj, {
  set(target, prop, value, receiver) {
    target[prop] = value;
    DataSource.setLocal(KEY, target);
  }
});

console.log('init', pxy);
pxy.name = 'Tom';
console.log('change', pxy);
pxy.name = 'Sun';
console.log('change2', pxy);
