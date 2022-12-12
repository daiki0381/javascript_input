/*
  ・「配列.forEach」で配列の各値に対して処理を行う。
  ・「配列.map」で配列の各値に対して処理を行い、新しい配列を作成する。
  ・「配列.filter」で「return」に続く条件が「true」の値のみ、新しい配列に格納される。
*/

const array1 = [1, 2, 3, 4, 5];

// 「配列.forEach」で配列の各値に対して処理を行う。
//  第1引数にコールバック関数を設定する。
//  コールバック関数の第1引数に配列の値が格納されている。
//  コールバック関数の第2引数に配列のインデックス番号が格納されている。
//  コールバック関数の第3引数に配列が格納されている。
array1.forEach(function (value, index, array) {
  console.log(value); // 「1」「2」「3」「4」「5」が表示される。
});

// 「配列.map」で配列の各値に対して処理を行い、新しい配列を作成する。
//  第1引数にコールバック関数を設定する。
//  コールバック関数の第1引数に配列の値が格納されている。
//  コールバック関数の第2引数に配列のインデックス番号が格納されている。
//  コールバック関数の第3引数に配列が格納されている。
const array2 = array1.map(function (value, index, array) {
  //  新しい配列に値を格納する。
  return value * 2;
});
console.log(array2); // 「[2, 4, 6, 8, 10]」が表示される。

// 「配列.filter」で「return」に続く条件が「true」の値のみ、新しい配列に格納される。
//  第1引数にコールバック関数を設定する。
//  コールバック関数の第1引数に配列の値が格納されている。
//  コールバック関数の第2引数に配列のインデックス番号が格納されている。
//  コールバック関数の第3引数に配列が格納されている。
const array3 = array1.filter(function (value, index, array) {
  // 「return」に続く条件が「true」の値のみ、新しい配列に格納される。
  return value >= 3;
});
console.log(array3); // 「[3, 4, 5]」が表示される。
