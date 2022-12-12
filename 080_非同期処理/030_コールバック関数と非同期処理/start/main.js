/*
  ・コールスタックが空になると「タスクキュー」が実行される。
*/

/*
  function a() {
    setTimeout(function task1() {
      console.log('task1 done');
    });

    console.log('a done');
  }

  function b() {
    console.log('b done');
  }

   ①setTimeout (task1) が「タスクキュー」に登録される。
   ②コールスタックに積まれているコンテキストを実行する。
   ③setTimeout (task1) が実行される。

  a();
  b();
*/

function a(b) {
  setTimeout(function task1() {
    console.log('task1 done');
    b();
  });

  console.log('a done');
}

function b() {
  console.log('b done');
}

a(b);

//  ①setTimeout (task1) が「タスクキュー」に登録される。
//  ②コールスタックに積まれているコンテキストを実行する。
//  ③setTimeout (task1) が実行される。
