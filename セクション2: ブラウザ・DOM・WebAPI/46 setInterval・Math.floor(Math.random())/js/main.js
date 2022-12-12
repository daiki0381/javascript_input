'use strict';

//  load (画像を含むウィンドウ全体が読み込まれたタイミング)
window.addEventListener('load', () => {
  // 「setInterval(コールバック関数, ミリ秒);」で○ミリ秒毎に実行する。
  setInterval(() => {
    // 「Math.random();」で「0」以上「1」未満の小数点の乱数を返す。
    // 「Math.floor();」で小数点以下を切り捨てる。
    // 「Math.floor(Math.random() * N);」で「0」以上「N」未満の整数の乱数を返す。
    let target = Math.floor(Math.random() * images.length);
    document.querySelectorAll('.carousel__thumbnails li')[target].click();
  }, 2000);
});

const images = [
  'images/image000.jpg',
  'images/image001.jpg',
  'images/image002.jpg',
  'images/image003.jpg',
  'images/image004.jpg',
  'images/image005.jpg',
  'images/image006.jpg',
];

let currentIndex = 0;

const mainImage = document.getElementById('carousel__main');
mainImage.src = images[currentIndex];

// 「entries()」でインデックス番号を取得する。
//  ブロックスコープが有効である場合、1ループごとにブロックスコープが切り替わる。
for (let [index, image] of images.entries()) {
  const img = document.createElement('img');
  img.src = image;

  const li = document.createElement('li');

  li.appendChild(img);
  document.querySelector('.carousel__thumbnails').appendChild(li);

  //  初期状態で1枚目のサムネイルに「current」クラスを追加する。
  if (index === currentIndex) {
    li.classList.add('current');
  }

  li.addEventListener('click', () => {
    mainImage.src = image;
    mainImage.classList.add('active');

    setTimeout(() => {
      mainImage.classList.remove('active');
    }, 800);

    const thumbnails = document.querySelectorAll('.carousel__thumbnails li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  });
}

const next = document.getElementById('carousel__next');
next.addEventListener('click', () => {
  let target = currentIndex + 1;
  if (target === images.length) {
    target = 0;
  }
  document.querySelectorAll('.carousel__thumbnails li')[target].click();
});

const prev = document.getElementById('carousel__prev');
prev.addEventListener('click', () => {
  let target = currentIndex - 1;
  if (target < 0) {
    target = 6;
  }
  document.querySelectorAll('.carousel__thumbnails li')[target].click();
});
