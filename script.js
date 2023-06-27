"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//we just make a function which will display the messages in the place of start guessing

// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };

//setting the check button
document
  .querySelector(".js-check-button")
  .addEventListener("click", function () {
    const guess = Number(document.querySelector(".js-guess-box").value);
    //console.log(guess);

    if (!guess) {
      //if player does not select any number..
      document.querySelector(".message").textContent = "No Number ❌🥱";
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct number🎉";

      document.querySelector("body").style.backgroundColor = "#60b347";

      document.querySelector(".secret-number").textContent = secretNumber;

      document.querySelector(".secret-number").style.width = "15rem";

      document.querySelector(".secret-number").style.textAlign = "center";

      //will set the high score

      if (score > highScore) {
        highScore = score;
        document.querySelector(".real-high-score").textContent = highScore;
      }
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "This number is big";
        score--;

        document.querySelector(".real-score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You lose the game";

        document.querySelector(".real-score").textContent = 0;
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "This number is small";
        score--;

        document.querySelector(".real-score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You lose the game";

        document.querySelector(".real-score").textContent = 0;
      }
    }
  });

//setting up the again button
// document
//   .querySelector(".js-again-buttom")
//   .addEventListener("click", function () {
//     console.log("check");
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     document.querySelector(".secret-number").textContent = "?";
//     document.querySelector("real-score").textContent = score;
//     document.querySelector(".message").textContent = "Start Guessing....";
//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector("secret-number").style.padding = "20px 50px";
//   });

document
  .querySelector(".js-again-button")
  .addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".secret-number").textContent = "?";
    document.querySelector(".guess-box").value = "";
    document.querySelector(".real-score").textContent = score;
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".secret-number").style.padding = "10px 10px";

    document.querySelector("guess").textContent = "0";
  });
