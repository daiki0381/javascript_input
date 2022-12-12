/*
  ・「Storage」は、ブラウザの保存領域にデータを格納するためのオブジェクト。
  ・「localStorage.setItem」でブラウザの保存領域にデータを保存する。
  ・「localStorage.getItem」でブラウザの保存領域からデータを取得する。
*/

// 「localStorage.setItem」でブラウザの保存領域にデータを保存する。
//  第1引数にキー。
//  第2引数に値。
localStorage.setItem('key1', 'value1');
localStorage.setItem('key2', 'value2');

// 「localStorage.getItem」でブラウザの保存領域からデータを取得する。
//  第1引数にキー。
console.log(localStorage.getItem('key1')); // 「value1」が表示される。
