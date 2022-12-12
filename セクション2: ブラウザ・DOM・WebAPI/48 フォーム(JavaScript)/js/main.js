'use strict';

//  オブジェクト (フォームの情報) を格納した配列を返却する。
const formList = document.forms;

// 「document.forms.formのid属性値;」でフォームを返却する。
const form = document.forms.form;

//  下記のように記述可能。
// const form = document.getElementById('form');

// 「document.forms.formのid属性値.inputのid属性値;」でインプットを返却する。
const input = document.forms.form.your_name;

//  下記のように記述可能。
// const input = document.getElementById('form').your_name;

// テキストエリアに入力した情報をリアルタイムで表示する。

const textarea = document.forms.form.your_introduction;

// 「input」は入力したタイミング。
textarea.addEventListener('input', () => {
  const yourIntroductionValue = document.getElementById(
    'your_introduction_value'
  );
  yourIntroductionValue.textContent = textarea.value;
});
