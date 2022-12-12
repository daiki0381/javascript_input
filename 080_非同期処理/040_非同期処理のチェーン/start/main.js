function sleep(callback, value) {
  setTimeout(function () {
    console.log(value++);
    callback(value);
  }, 1000);
};

sleep(function (value) {
  sleep(function (value) {
    sleep(function (value) {
      sleep(function (value) {}, value);
    }, value);
  }, value);
}, 0);
