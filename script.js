'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let getRandomNumber = function (randNum) {
  return Math.floor(Math.random() * Math.floor(randNum));
};

let getStart = function () {
  let randomNumber = getRandomNumber(100);
  let startGame = function () {
    let guessNum = prompt('Угадай число от 1 до 100');
    if (guessNum === null) {
      alert('Игра окончена');
      return;
    }
    if (isNumber(guessNum)) {
      let realNum = +guessNum;
      if (realNum > randomNumber) {
        alert('Загаданное число меньше');
        startGame();
      } else if (realNum < randomNumber) {
        alert('Загаданное число больше');
        startGame();
      } else {
        if (confirm('Поздравляю, Вы угадали!!!')) {
          getStart();
        } else {
          alert('Игра окончена');
        }
      }
    } else {
      alert('Введи число!');
      startGame();
    }
  };
  startGame();
};

getStart();
