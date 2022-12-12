/*
  ・実行待ちの非同期処理の行列を「タスクキュー」という。
  ・「タスクキュー」は、非同期処理の実行順を管理している。
  ・キュー (実行待ちの行列) の仕組みを「先入れ先出し」という。
  ・「イベントループ」は、コールスタックにコンテキストが積まれているか定期的に確認し、積まれていない場合は「タスクキュー」に通知する。
  ・コールスタックが空になると「タスクキュー」が実行される。
*/

const btn = document.querySelector('button');

btn.addEventListener('click', function task2() {
  console.log('task2 done');
});

function fn() {
  setTimeout(function task1() {
    console.log('task1 done');
  }, 4000);

  //  fn関数が実行された際に1度だけ実行され、実行された時刻が「startTime」に格納されている。
  const startTime = new Date();
  //  2秒間ループする。
  while (new Date() - startTime < 2000);

  console.log('fn is done');
}

//  ①setTimeout (非同期処理) により4秒間「メインスレッド」に空きが出る。
//  ②「while (new Date() - startTime < 2000);」が2秒間「メインスレッド」を占有する。
//  ③コールスタックに積まれているコンテキストを実行する。
//  ④setTimeout (非同期処理) が実行される。
fn();
