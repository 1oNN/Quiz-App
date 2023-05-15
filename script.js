const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Arctic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Which country is famous for the Taj Mahal?",
    options: ["India", "China", "Japan", "Egypt"],
    answer: "India",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.textContent = currentQuizData.question;
  optionsEl.innerHTML = "";

  currentQuizData.options.forEach((option, index) => {
    const optionEl = document.createElement("div");
    optionEl.className = "option";

    const radioBtn = document.createElement("input");
    radioBtn.type = "radio";
    radioBtn.name = "option";
    radioBtn.value = option;
    radioBtn.id = `option${index + 1}`;

    const label = document.createElement("label");
    label.htmlFor = `option${index + 1}`;
    label.textContent = option;

    optionEl.appendChild(radioBtn);
    optionEl.appendChild(label);

    optionsEl.appendChild(optionEl);
  });
}

function selectOption() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  const currentQuizData = quizData[currentQuestion];

  if (selectedOption && selectedOption.value === currentQuizData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  questionEl.textContent = `You've completed the quiz! Your score is ${score}/${quizData.length}`;
  optionsEl.innerHTML = "";
  submitBtn.style.display = "none";
  resetBtn.style.display = "inline-block";
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  submitBtn.style.display = "inline-block";
  resetBtn.style.display = "none";
  loadQuestion();
}

loadQuestion();

submitBtn.addEventListener("click", () => {
  selectOption();
});

resetBtn.addEventListener("click", () => {
  resetQuiz();
});
