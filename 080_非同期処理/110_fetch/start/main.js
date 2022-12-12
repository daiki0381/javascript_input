/*
  ・「fetch」は、サーバー上からデータを取得できる。
  ・「fetch」の引数にデータを取得したいURL (ファイル) を渡す。
  ・「fetch(URL)」は「Promise」を返却する。
  ・「JSON」は、JavaScriptからサーバー上にデータを取りに行ったり、サーバーに対してデータをリクエストする時に使用されるファイル形式。
  ・「JSON」は、①シングルクォーテーションは使用できない②オブジェクトのプロパティはダブルクォーテーションで囲む必要がある③最後の要素にカンマを付けてはいけない。
*/

// 「fetch」は、サーバー上からデータを取得できる。
// 「fetch」の引数にデータを取得したいURL (ファイル) を渡す。
// 「fetch(URL)」は「Promise」を返却する。
//  thenメソッドのコールバック関数の引数 (response) にはサーバーから返却されたデータが格納されている。
fetch('users.json')
  .then(function (response) {
    //  非同期処理をチェーンさせるには、thenメソッドのコールバック関数内の「return」にPromiseのインスタンスを設定する。
    // 「response.json()」は、JSON情報が格納された「Promise」を返却する。
    return response.json();
    //  thenメソッドのコールバック関数の引数 (json) にはJSONファイルから取得したデータが格納されている。
  })
  .then(function (json) {
    for (const user of json) {
      console.log(`name: ${user.name}, age: ${user.age}`);
    }
  });

async function fetchUsers() {
  // 「await」は「Promise」のインスタンスを返却する関数の「Promise」が結果を返す (resolve,rejectが実行される) まで待機する。
  // 「await」は「Promise」のインスタンスを返却する関数の「Promise」の結果 ([[PromiseResult]]の値) を戻り値として返す。
  const response = await fetch('users.json');
  const json = await response.json();
  for (const user of json) {
    console.log(`name: ${user.name}, age: ${user.age}`);
  }
}
fetchUsers();
