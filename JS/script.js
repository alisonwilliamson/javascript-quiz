// get all the variables from the html
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const header = document.getElementById("header")
const description = document.getElementById("description")
const timer = document.getElementById("time-remaining")
let timeleft = 75;


let shuffledQuestions = "" 
let currentQuestionIndex = ""
let secondsLeft = ""

// when start button is clicked, quiz begins
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// starts the quiz
function startQuiz() {
  var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
  // removes the header, description & start button
  startButton.classList.add('hide')
  header.classList.add("hide")
  description.classList.add("hide")
  // picks a random question from the questions array
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  // starts on first question in shuffled questions array
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  

  setNextQuestion()
}












// display the next quesiton
function setNextQuestion() {
  defaultState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  // loops through the answers
  question.answers.forEach(answer => {
    // creates a button for each answer
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    // checks if answer is correct and adds data attribute onto button element
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    // listening for when correct answer is clicked
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

// resets quiz back to default everytime new question appears
function defaultState() {
  clearStatusClass(document.body)
  // hides the next button for default state
  nextButton.classList.add('hide')
  // loops through all children of answer button elements
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  // checks dataset to see if answer is correct
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  // creates an array from answer button children
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  // if answer is correct, adds "correct" class
  if (correct) {
    element.classList.add('correct')
    // if answer is wrong, adds "wrong" class
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// creates array of questions with answers
const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
        {text: "strings", correct: false},
        {text: "booleans", correct: false},
        {text: "alerts", correct: true},
        {text: "numbers", correct: false}
    ]
  },
  {
    question: "The condition in an if / else statement is enclosed within ____.",
    answers: [
      {text: "quotes", correct: false},
      {text: "curly brackets", correct: false},
      {text: "parentheses", correct: true},
      {text: "square brackets", correct: false}
    ]
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: [
      {text: "numbers and strings", correct: false},
      {text: "other array", correct: false},
      {text: "booleans", correct: false},
      {text: "all of the above", correct: true}
    ]
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      {text: "commas", correct: false},
      {text: "curly brackets", correct: false},
      {text: "quotes", correct: true},
      {text: "parentheses", correct: false},
    ]
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      {text: "JavaScript", correct: false},
      {text: "terminal / bash", correct: false},
      {text: "for loops",correct: false},
      {text: "console.log", correct: true},
    ]
  }
]























// // // set array of questions
// const questions = [
//   {
//       question: "Commonly used data types DO NOT include:",
//       answer: [
//           {text: "strings", correct: false},
//           {text: "booleans", correct: false},
//           {text: "alerts", correct: true},
//           {text: "numbers", correct: false},
//       ]
//   },{
//       question: "The condition in an if / else statement is enclosed within ____.",
//       answer: [
//           {text: "quotes", correct: false},
//           {text: "curly brackets", correct: false},
//           {text: "parentheses", correct: true},
//           {text: "square brackets", correct: false},
//       ]
//   },{
//       question: "Arrays in JavaScript can be used to store ____.",
//       answer: [
//           {text: "numbers and strings", correct: false},
//           {text: "other array", correct: false},
//           {text: "booleans", correct: false},
//           {text: "all of the above", correct: true},
//       ]
//   },{
//       question: "String values must be enclosed within ____ when being assigned to variables.",
//       answer: [
//           {text: "commas", correct: false},
//           {text: "curly brackets", correct: false},
//           {text: "quotes", correct: true},
//           {text: "parentheses", correct: false},
//       ]
//   },{
//       question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//       answer: [
//           {text: "JavaScript", correct: false},
//           {text: "terminal / bash", correct: false},
//           {text: "for loops",correct: false},
//           {text: "console.log", correct: true},
//       ]
//   }
// ];

