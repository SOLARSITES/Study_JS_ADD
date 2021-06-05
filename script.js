'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let getRandomNumber = function (randNum) {
  return Math.floor(Math.random() * Math.floor(randNum));
};

let getStart = function () {
  let randomNumber = getRandomNumber(100);
  let guessAttempts = 10;

  let startGame = function () {
    guessAttempts--;

    if (guessAttempts < 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        getStart();
      } else {
        alert('Игра окончена');
      }
    } else {
      let guessNum = prompt('Угадай число от 1 до 100');

      if (guessNum === null) {
        alert('Игра окончена');
        return;
      }

      if (isNumber(guessNum)) {
        let realNum = +guessNum;
        if (realNum > randomNumber) {
          alert(`Загаданное число меньше, осталось попыток: ${guessAttempts}`);
          startGame();
        } else if (realNum < randomNumber) {
          alert(`Загаданное число больше, осталось попыток: ${guessAttempts}`);
          startGame();
        } else {
          if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
            getStart();
          } else {
            alert('Игра окончена');
          }
        }
      } else {
        alert('Введи число!');
        startGame();
      }
    }
  };
  startGame();
};

getStart();
