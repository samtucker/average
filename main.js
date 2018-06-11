var questions = ["What is the average amount of spikes a porcupine has?", "How many times a day does the average person go to the loo?", "What is the average age a woman gets married in Texas?", "What is the average distance flown by a British Airways B747 in a week? (in miles)", "What is the average number of touchdowns in an NFL game?", "What is the average annual water usage of a UK family of 5? (in litres)", "What is the average UK salary? (in GBP)", "How many pairs of shoes does the average British woman own?", "How many tastebuds does the average person have?", "On average,  how many times will your skin replace itself in your lifetime?", "How many snapchats does the average user send a day?", "On an average day,  how many tweets are posted on Twitter?", "What is the average life span in years of a squirrel?", "What is the average amount of food a human consumes in a life time,  in Tons?", "What is the average life span of a mosquito in days?", "What is the average amount of blood vessels in the average person, in KM?", "What is the average amount of leaves a mature oak tree sheds in Autumn?", "What is the average amount of glasses of milk a cow produces in a day?", "What is the average age American Presidents have taken office at?"];
var answers = [30000, 6, 25, 45500, 5, 523, 27300, 20, 10000, 900, 19, 500000000, 9, 35, 14, 97000, 700000, 40, 50];
var option1;
var option2;
var option3;
var option4;
var answerChoice;
var questionNumber = 0;
var currentQuestion;
var currentAnswer;
var answerOptions;
var score = 0;

function play() {
  nextQuestion();
  console.log("play");
}

function nextQuestion() {
  currentQuestion = questions[(questionNumber)];
  currentAnswer = answers[(questionNumber)];
  questionNumber++;
  writeQuestion();
  writeAnswers();
  document.getElementById('correct_image').style.display = "none";
  document.getElementById('question').style.display = "block";
  document.getElementById('incorrect_image').style.display = "none";
  document.getElementById('correct_statement').style.display = "none";
  document.getElementById('incorrect_statement').style.display = "none";
  document.getElementById('option1').style.backgroundColor = "#fff";
  document.getElementById('option2').style.backgroundColor = "#fff";
  document.getElementById('option3').style.backgroundColor = "#fff";
  document.getElementById('option4').style.backgroundColor = "#fff";
  document.getElementById('option1').style.color = "#000";
  document.getElementById('option2').style.color = "#000";
  document.getElementById('option3').style.color = "#000";
  document.getElementById('option4').style.color = "#000";
  document.getElementById('option1').style.border = "1px solid rgba(46, 49, 60, 0.1)";
  document.getElementById('option2').style.border = "1px solid rgba(46, 49, 60, 0.1)";
  document.getElementById('option3').style.border = "1px solid rgba(46, 49, 60, 0.1)";
  document.getElementById('option4').style.border = "1px solid rgba(46, 49, 60, 0.1)";
  console.log("next question");
  console.log(currentQuestion);
  console.log(currentAnswer);
  document.getElementById('question_progress').innerHTML = "QUESTION " + questionNumber + " OF 12";
  document.getElementById('score').innerHTML = "SCORE: " + score;
}

function writeAnswers() {
  createAlternativeAnswers();
  document.getElementById('option1').innerHTML = Math.round(answerOptions[0]);
  document.getElementById('option2').innerHTML = Math.round(answerOptions[1]);
  document.getElementById('option3').innerHTML = Math.round(answerOptions[2]);
  document.getElementById('option4').innerHTML = Math.round(answerOptions[3]);
}

function writeQuestion() {
  document.getElementById('question').innerHTML = currentQuestion;
}

function createAlternativeAnswers() {
  answerOptions = [(currentAnswer + currentAnswer * 0.2), (currentAnswer - currentAnswer * 0.4), (currentAnswer + currentAnswer * 0.6), (currentAnswer)];
  for (var i = answerOptions.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = answerOptions[i];
    answerOptions[i] = answerOptions[j];
    answerOptions[j] = temp;
  }
}

function submitAnswer1() {
  console.log('option1');
  findCorrectAnswer();
  if (answerOptions[0] == currentAnswer) {
    correctAnswer();
  } else {
    incorrectAnswer();
    document.getElementById('option1').style.backgroundColor = "#EB2225";
    document.getElementById('option1').style.color = "#FFF";
    document.getElementById('option1').style.border = "none";
  }
}

function submitAnswer2() {
  console.log('option2');
  findCorrectAnswer();
  if (answerOptions[1] == currentAnswer) {
    correctAnswer();
  } else {
    incorrectAnswer();
    document.getElementById('option2').style.backgroundColor = "#EB2225";
    document.getElementById('option2').style.color = "#FFF";
    document.getElementById('option2').style.border = "none";
  }
}

function submitAnswer3() {
  console.log('option3');
  findCorrectAnswer();
  if (answerOptions[2] == currentAnswer) {
    correctAnswer();
  } else {
    incorrectAnswer();
    document.getElementById('option3').style.backgroundColor = "#EB2225";
    document.getElementById('option3').style.color = "#FFF";
    document.getElementById('option3').style.border = "none";
  }
}

function submitAnswer4() {
  console.log('option4');
  findCorrectAnswer();
  if (answerOptions[3] == currentAnswer) {
    correctAnswer();
  } else {
    incorrectAnswer();
    document.getElementById('option4').style.backgroundColor = "#EB2225";
    document.getElementById('option4').style.color = "#FFF";
    document.getElementById('option4').style.border = "none";
  }
}

function correctAnswer() {
  score++;
  document.getElementById('correct_image').style.display = "block";
  document.getElementById('question').style.display = "none";
  document.getElementById('correct_statement').style.display = "block";
  console.log("correct answer");
}

function incorrectAnswer() {
  document.getElementById('incorrect_image').style.display = "block";
  document.getElementById('question').style.display = "none";
  document.getElementById('incorrect_statement').style.display = "block";
  console.log("wrong answer");
}

function findCorrectAnswer() {
  if (option1 == currentAnswer) {
    document.getElementById('option1').style.backgroundColor = "#98CD25";
    document.getElementById('option1').style.color = "#FFF";
    document.getElementById('option1').style.border = "none";
  } else if (option2 == currentAnswer) {
    document.getElementById('option2').style.backgroundColor = "#98CD25";
    document.getElementById('option2').style.color = "#FFF";
    document.getElementById('option2').style.border = "none";
  } else if (option3 == currentAnswer) {
    document.getElementById('option3').style.backgroundColor = "#98CD25";
    document.getElementById('option3').style.color = "#FFF";
    document.getElementById('option3').style.border = "none";
  } else {
    document.getElementById('option4').style.backgroundColor = "#98CD25";
    document.getElementById('option4').style.color = "#FFF";
    document.getElementById('option4').style.border = "none";
  }
}
