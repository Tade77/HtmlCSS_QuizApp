const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Inside which HTML do we put javaScript?",
    choice1: "<script>",
    choice2: "<Js>",
    choice3: "<javascript>",
    answer: 1,
  },
  {
    question: "What can you use to debug in chrome browser?",
    choice1: "json",
    choice2: "console",
    choice3: "vs-code",
    choice4: "js",
    answer: 2,
  },
  {
    question: "How do you write 'Hello world' in an alert box? ",
    choice1: "<msg('Hello world)>",
    choice2: "<alertBox('Hello world')>",
    choice3: "<msgBox('Hello world)>",
    choice4: "<alert('Hello world)>",
    answer: 4,
  },
  {
    question: "What is the full meaning of DRY",
    choice1: "Do React yourself",
    choice2: "Do not remove the yarn",
    choice3: "Do not repeat yourself",
    choice4: "None of the above",
    answer: 3,
  },
];

/*constants*/
const bonus = 10;
MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};
getNewQuestion = () => {
  questionCounter++;
  questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};
startGame();
