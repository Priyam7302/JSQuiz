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
    imgUrl: "dice_2.png",
    answer: "Moscow",
    options: ["Moscow", "St. Petersberg", "Paris", "Dublin"],
  },
];

let quesArr = [];
let score = 0;
let score_para = document.querySelector(".score");
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
let cnt = 0;
fn();
let timing = setInterval(() => {
  cnt++;
  fn();
}, 2000);

function fn() {
  let quesNum = getRandomNumber();
  const parent = document.querySelector(".question");

  console.log(quesNum);

  const question = document.querySelector(".qn-para");
  question.innerText = quiz[quesNum].question;

  const answer = document.querySelector(".answer-para");

  //   answer.innerText = quiz[quesNum].answer;

  const imgQn = document.querySelector("img");
  imgQn.src = "";
  if (
    quiz[quesNum].imgUrl &&
    (quiz[quesNum].imgUrl.toLowerCase().endsWith(".jpg") ||
      quiz[quesNum].imgUrl.toLowerCase().endsWith(".png") ||
      quiz[quesNum].imgUrl.toLowerCase().endsWith(".gif"))
  ) {
    imgQn.src = quiz[quesNum].imgUrl;
  }

  const optionDiv = document.querySelector("div");
  const options = document.querySelectorAll(".option");

  for (let j = 0; j < 4; j++) {
    options[j].innerText = quiz[quesNum].options[j];
  }

  for (let i = 0; i < options.length; i++)
    options[i].addEventListener("click", checkAns);

  function checkAns(e) {
    if (e.target.innerText === answer) {
      score += 1;
      score_para.innerText = score;
    }
  }

  if (cnt == 3) {
    clearInterval(timing);
  }
}
