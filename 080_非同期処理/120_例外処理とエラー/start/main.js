/*
  ・エラーが発生した際に飛ぶ特別な処理を「例外処理」という。
  ・エラーを捕捉する (throw) と「catch」に処理が移行する。
  ・エラーが無い場合は「try」の処理を最後まで実行する。
*/

/* 例外処理の構文
  try {
    throw new Error();
  } catch (e) {
     エラー時の処理を記述する。
  } finally {
     終了処理を記述する。
  }
*/

/* 基本的な使用法
  try {
    console.log('start');
     エラーを捕捉する (throw) と「catch」に処理が移行する。
     エラーが無い場合は「try」の処理を最後まで実行する。
    throw new Error('error message');
     エラー以下は実行されない。
    console.log('end');
  } catch (e) {
    「catch」の引数にはエラーメッセージが格納されている。
    console.error(e);
  } finally {
     最後に実行される。
    console.log('finally');
  }
*/

//  Errorクラスを継承することで独自のエラーを作成できる。(カスタムエラー)
class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoDataError';
  }
}

async function fetchUsers() {
  const response = await fetch('users.json');
  if (response.ok) {
    const json = await response.json();
    //  JSONファイルのデータが空の場合にエラーを投げる。
    if (!json.length) {
      throw new NoDataError('no data found');
    }
    return json;
  }
}

async function init() {
  try {
    const users = await fetchUsers();
    for (const user of users) {
      console.log(`name: ${user.name}, age: ${user.age}`);
    }
  } catch (e) {
    if (e instanceof NoDataError) {
      console.error(e);
    } else {
      console.error('Oops, something went wrong');
    }
  } finally {
    console.log('finally');
  }
}

init();
