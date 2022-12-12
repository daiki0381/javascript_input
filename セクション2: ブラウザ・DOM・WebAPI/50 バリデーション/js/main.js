'use strict';

// サニタイズ
function sanitize(value) {
  // 「文字列.replace(対象文字, 置換文字);」で対象文字を置換文字に変換する。
  value = value.replace(/&/g, '&amp;');
  value = value.replace(/</g, '&lt;');
  value = value.replace(/>/g, '&gt;');
  value = value.replace(/"/g, '&quot;');
  value = value.replace(/'/g, '&#39;');
  return value;
}

// 正規表現

const postCodeRegExp = /^\d{3}-\d{4}$/g;
const postCode = '165-0026';
postCode.match(postCodeRegExp);

const emailRegExp = /^[A-Za-z0-9]*@[A-Za-z0-9]*\.[A-Za-z0-9]*$/g;
const email = 'daiki03810218@gmail.com';
email.match(emailRegExp);
