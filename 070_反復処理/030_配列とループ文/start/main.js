const array = [1, 2, 3, 4, 5];

// forを使用した場合

for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // 「1」「2」「3」「4」「5」が表示される。
}

// whileを使用した場合

let i = 0;
while (i < array.length) {
  console.log(array[i]); // 「1」「2」「3」「4」「5」が表示される。
  i++;
}

let v1,
  v2 = 0;

/* 内部構造
  「undefined」が格納されている。
  let v1;
  「0」が格納されている。
  let v2 = 0;
*/

//  後置インクリメントの場合、オペランド (v2) を返した後に+1をする。
//  配列の中身以上を取得しようとすると()内は「undefined」となり処理が止まる。
while ((v1 = array[v2++])) {
  console.log(v1); // 「1」「2」「3」「4」「5」が表示される。
}
