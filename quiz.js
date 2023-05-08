// data for quiz
const quizData = [
  {
    question: "What is the capital of France?",
    choices: [
      { text: "London", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "What is the largest country in the world by land area?",
    choices: [
      { text: "Russia", correct: true },
      { text: "Canada", correct: false },
      { text: "United States", correct: false },
      { text: "China", correct: false },
    ],
  },
  {
    question: "What is the name of the longest river in the world?",
    choices: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    question: "Who is the current president of the United States?",
    choices: [
      { text: "Barack Obama", correct: false },
      { text: "Donald Trump", correct: false },
      { text: "Joe Biden", correct: true },
      { text: "George W. Bush", correct: false },
    ],
  },
];

// accessing the elements
const questionContainer = document.getElementById("question-container");
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit-btn");

// some functions
const addQuestionUI = (question, index) => {
  const name = `q${index + 1}`;
  const choices = addQuestionChoicesUI(question, name).join("");
  return `
        <div class="question">
        <h2>Question ${index + 1}</h2>
        <p>${question.question}</p>
        <ul>
        ${choices}
        </ul>
        </div>
        `;
};

const addQuestionChoicesUI = (question, name) => {
  return question.choices.map((choice) => {
    return `
     <li><input type="radio" name="${name}" value="${choice.text}"/>${choice.text}</li>
      `;
  });
};

const questionUIArray = quizData.map((question, index) => {
  return addQuestionUI(question, index);
});

for (const question of questionUIArray) {
  questionContainer.innerHTML += question;
}

// event listeners
startButton.addEventListener("click", () => {
  quizContainer.style.display = "block";
  submitButton.style.display = "block";
  startButton.style.display = "none";
});

submitButton.addEventListener("click", () => {
  const selectedAnswers = [];
  const allInputs = document.querySelectorAll("input[type='radio']");

  for (const input of allInputs) {
    if (input.checked) {
      selectedAnswers.push(input.value);
    }
  }

  console.log(selectedAnswers);
});
