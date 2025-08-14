const quiz = [
  {
    question: "What is the capital of Australia?",
    answer: "Canberra",
    options: ["Sydney", "Canberra", "Perth", "NSW"],
  },

  {
    question: "What is the capital of India?",
    answer: "New Delhi",
    options: ["New Delhi", "Jaipur", "Mohali", "Mumbai"],
  },

  {
    question: "What is the capital of Bangladesh?",
    answer: "Dhaka",
    options: ["Chittagong", "Canberra", "Dhaka", "NSW"],
  },
  {
    question: "What is the capital of Russia?",
    imgUrl: "saint-basil-s-cathedral-red-square-moscow-russia.jpg",
    answer: "Moscow",
    options: ["Moscow", "St. Petersberg", "Paris", "Dublin"],
  },
];

let quesArr = [];
let score = 0;

let score_head = document.querySelector(".score");

function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * quiz.length);
  if (quesArr.includes(randomNum)) {
    return getRandomNumber();
  } else {
    quesArr.push(randomNum);
    return randomNum;
  }
}

let container = document.querySelector(".container");
let cnt = 1;
let timeCnt = 5;
let timer = document.querySelector(".timer");
console.log(timer.innerText);

fn();
setTime();
let timing = setInterval(() => {
  cnt++;
  fn();
  setTime();
}, 5000);

function setTime() {
  let timerFun = setInterval(() => {
    timeCnt--;
    if (timeCnt <= 0) {
      clearInterval(timerFun);
      timeCnt = 5;
    }
    timer.innerText = timeCnt;

    console.log(timeCnt);
  }, 1000);
}

function fn() {
  if (cnt > quiz.length) {
    clearInterval(timing);
    score_head.innerText = score;
    console.log("Your score is: " + score);
  } else {
    let quesNum = getRandomNumber();
    const parent = document.querySelector(".question");

    const question = document.querySelector(".qn-para");
    question.innerText = quiz[quesNum].question;

    const imgQn = document.querySelector("#imgQn");

    imgQn.src = "";
    if (
      quiz[quesNum].imgUrl &&
      (quiz[quesNum].imgUrl.toLowerCase().endsWith(".jpg") ||
        quiz[quesNum].imgUrl.toLowerCase().endsWith(".png") ||
        quiz[quesNum].imgUrl.toLowerCase().endsWith(".gif"))
    ) {
      imgQn.src = quiz[quesNum].imgUrl;
      imgQn.classList.remove("hidden-img");
    } else {
      imgQn.src = ""; 
      imgQn.classList.add("hidden-img");
    }

    const optionDiv = document.querySelector("div");
    const options = document.querySelectorAll(".option");
    for (let j = 0; j < 4; j++) {
      options[j].innerText = quiz[quesNum].options[j];
    }

    let optionClicked = false;
    for (let i = 0; i < options.length; i++) {
      options[i].style.color = "black";

      options[i].addEventListener("click", clickFn);

      function clickFn(e) {
        let userans = e.target.innerText;

        if (optionClicked == false) {
          optionClicked = true;
          e.target.style.color = "red";
        }

        if (quiz[quesNum].answer === userans) {
          score++;
        }
      }
    }
  }
}
