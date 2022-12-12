'use strict';

const tabLabels = document.querySelectorAll('.tab__label li a');
const tabContents = document.querySelectorAll('.tab__content');

tabLabels.forEach((label) => {
  label.addEventListener('click', (e) => {
    //  aタグは初期設定でクリックすると自動でリンクに飛び、画面を再読み込みする。
    // 「e.preventDefault();」で初期設定を止める。
    e.preventDefault();

    tabLabels.forEach((label) => {
      label.classList.remove('active');
    });

    label.classList.add('active');

    tabContents.forEach((content) => {
      content.classList.remove('active');
    });

    // 「dataset.カスタム属性名」でカスタム属性の値を取得する。
    document.getElementById(label.dataset.id).classList.add('active');
  });
});
