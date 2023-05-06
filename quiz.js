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

const questionContainer = document.getElementById("question-container");

const addQuestionUI = (question, index) => {
  return `
        <div class="question">
        <h2>Question ${index + 1}</h2>
        <p>${question.question}</p>
        <ul>
            <li><input type="radio" name="q${index + 1}"  />${
    question.choices[0].text
  }</li>
            <li><input type="radio" name="q${index + 1}"  /> ${
    question.choices[1].text
  }</li>
            <li><input type="radio" name="q${index + 1}" /> ${
    question.choices[2].text
  }</li>
            <li><input type="radio" name="q${index + 1}" /> ${
    question.choices[3].text
  }</li>
        </ul>
        </div>
        `;
};

const questionUIArray = quizData.map((question, index) => {
  return addQuestionUI(question, index);
});

for (const question of questionUIArray) {
  questionContainer.innerHTML += question;
}
