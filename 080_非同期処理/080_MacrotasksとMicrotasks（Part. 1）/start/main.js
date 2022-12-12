/*
  ・タスクキュー (非同期処理の待ち行列) を「マクロタスク」という。(setTimeout,setInterval,requestAnimationFrame等が登録される)
  ・タスクキュー (非同期処理の待ち行列) とは別に存在する非同期処理の待ち行列を「マイクロタスク (ジョブキュー)」という。(Promise,queueMicrotask,MutationObserver等が登録される)
  ・コールスタックが空の場合「マイクロタスク (ジョブキュー)」「マクロタスク (タスクキュー)」の順番で実行される。
  ・「マイクロタスク (ジョブキュー)」は、順番が回って来たら全てのジョブを実行する。
  ・「マクロタスク (タスクキュー)」は、順番が回って来たら1つタスクを実行し「コールスタック」「マイクロタスク (ジョブキュー)」が空であるか確認し (空では無かった場合「コールスタック」「マイクロタスク (ジョブキュー)」を実行する) 1つずつタスクを実行していく。
*/

//  ①setTimeout (task1) が「マクロタスク (タスクキュー)」に登録される。
//  ②同期処理のためコールスタックに積まれている「console.log('promise');」が実行される。
//  ③resolveが呼ばれ、Promiseのthenメソッド (job1) が「マイクロタスク (ジョブキュー)」に登録される。
//  ④同期処理のためコールスタックに積まれている「console.log('global end');」が実行される。
//  ⑤「マイクロタスク (ジョブキュー)」に登録されているPromiseのthenメソッド (job1) が実行される。
//  ⑥「マクロタスク (タスクキュー)」に登録されているsetTimeout (task1) が実行される。

setTimeout(function task1() {
  console.log('task1');
});

new Promise(function promise(resolve) {
  console.log('promise');
  resolve();
}).then(function job1() {
  console.log('job1');
});

console.log('global end');
