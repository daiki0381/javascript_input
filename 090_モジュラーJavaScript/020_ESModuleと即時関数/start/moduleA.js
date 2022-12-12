console.log('ES Modules');

//  インポート先で「プリミティブ型」 の値を変更しようとするとエラーになる。
// export let publicVal = 10;

//  インポート先で値を変更したい場合は「オブジェクト」にする。
export let publicVal = { prop: 10 };

export function publicFn() {
  console.log(`publicFn: ${publicVal.prop}`);
}
