'use strict';

const yourImage = document.forms.form.your_image;
const preview = document.forms.form.preview;

// 「change」は変化したタイミング。
yourImage.addEventListener('change', (e) => {
  // 「イベントオブジェクト.target.files[インデックス番号]」でアップロードしたファイルのオブジェクト (情報) が返却される。
  const uploadFile = e.target.files[0];
  // 「FileReader」はファイルを表示させるためのオブジェクト。
  const fileReader = new FileReader();
  // 「FileReaderオブジェクト.readAsDataURL(アップロードしたファイルのオブジェクト)」でファイルを読み込む。
  fileReader.readAsDataURL(uploadFile);

  fileReader.addEventListener('load', () => {
    // 「FileReaderオブジェクト.result」でBase64形式 (画像を表示する仕組み) のファイルが返却される。
    preview.src = fileReader.result;
  });
});
