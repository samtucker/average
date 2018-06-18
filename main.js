var questions = ["What is the average amount of spikes a porcupine has?", "How many times a day does the average person go to the loo?", "What is the average age a woman gets married in Texas?", "What is the average distance flown by a British Airways B747 in a week? (in miles)", "What is the average number of touchdowns in an NFL game?", "What is the average annual water usage of a UK family of 5? (in litres)", "What is the average UK salary? (in GBP)", "How many pairs of shoes does the average British woman own?", "How many tastebuds does the average person have?", "On average,  how many times will your skin replace itself in your lifetime?", "How many snapchats does the average user send a day?", "On an average day,  how many tweets are posted on Twitter?", "What is the average life span in years of a squirrel?", "What is the average amount of food a human consumes in a life time,  in Tons?", "What is the average life span of a mosquito in days?", "What is the average amount of blood vessels in the average person, in KM?", "What is the average amount of leaves a mature oak tree sheds in Autumn?", "What is the average amount of glasses of milk a cow produces in a day?", "What is the average age American Presidents have taken office at?", "Average number of hairs on a redhead's head?", "Average number of people killed by a vending machine per year?", "Average number of months to build a Rolls Royce?", "Average number of gallons used by a jumbo jet for take off?", "Average number of countries visited by a British person in a lifetime?, Average speed of signals in the brain in Mph", "Average WAL-MART revenue per 7 minutes in dollars?", "Average possible growth of sea weed per day in cm?", "Average number of people choked to death by ball point pens per year?", "Average number of people airbourne over the US per hour?",  "Average number of people injured by jewellery in the US per year?", "Average number of hours to build a Toyota car?", "Average number of dates before marriage?", "Average number of babies born worldwide per minute?", "Average number of mosquitoes to drain all the blood of a human?", "Average number of minutes spent kissing in a human life?", "Average number of metres crawled by a baby per day?", "Average number of sesame seeds on a Big Mac?", "Average number of minutes before falling asleep?", "Average amount of words a standard bic pen would write before running out?", "Average number of miles a pencil is able to write?", "Average age of an American child at which they first swear?", "Average amount of hamburgers sold by Macdonalds every second?", "Average amount of time spent waiting in a queue in a life time in hours?", "Average number of teeth an adult has?", "Average amount of money that an American has in their wallet in dollars?", "Average number of hamburgers eaten a week in America per person?", "Average number of facebook friends?", "Average number of instagram followers?", "Average number of hamburgers eaten a year in America in billions?", "Average height of top 20 tallest skyscrapers in metres?", "Average amount that an American spends on a haircut in USD", "Average number of people a person physically meets in a lifetime?", "Average percentage of water in the brain?", "Average time spent asleep in years?", "Average number of dimples on a golf ball?", "Average amount of years for a mattress to double in weight due to dust mite infestation?", "Average number of eggs laid by a hen each year?", "Average number of human taste buds?", "Average Kg of dung produced by an elephant each day?", "Average % of restaurant meals that contain potato chips?", "Average weight of an ice berg in tonnes?", "Average number of dreams a person has each year?", "Average % of junk food in an American's diet?", "Average number of peas in a pod?", "Average life span of a mosqueto in weeks?", "Average shower temperature in °C?", "Average number of leaves shed by an oak tree in Autumn?", "Average age of a polar bear in the wild?", "Average number of words in a person's vocabulary?", "Average amout of skin shed by a human a year in grams?", "Average amount an American spends per day in USD?", "Average amount of hours of video uploaded to Youtube every minute?", "Average amount of videos viewed on youtube per day?", "Average amount of water used to produce a pint of beer in liters?", "Average amount of swipes on tinder per minute worldwide?", "Average amount of apps downloaded per minute?", "Average amount of tweets per minute?", "Average amount of likes on Facebook per minute?", "Average amount of Snapchats per minute?", "Average amount of Uber rides per minute?", "Average number of hairs a redhead has on their head?", "Average amount of profit Apple generates per minute in USD?", "How many calories does the average American eat in a day?", "Average litres of beer consumed in Oktoberfest in millions?", "Average number of visits to Youtube in a day worldwide in millions?", "Average number of hours spent brushing teeth in a lifetime?", "Average number of people to die out of 1000 people each year?", "Average number of cells to die in your body each day?", "Average amount of Skype calls per minute?", "Average amount of iPhones bought from Apple per hour?", "Average number of earthquakes in Japan per year?", "Average number of steps taken in a day?", "Average number of pay rises in a Britons lifetime?", "Average amount spent by the NHS per person per year in GBP?", "Average amount of skin shed by a human per year (in pounds)", "Average number of left-handed people killed by operating equipment meant for right-handed people per year" ];
var answers = [30000, 6, 25, 45500, 5, 523, 27300, 20, 10000, 900, 19, 500000000, 9, 35, 14, 97000, 700000, 40, 50, 90000, 10, 6, 4000, 7, 268, 3000000, 12, 100, 61000, 50000, 13, 100, 225, 1200000, 20160, 200, 180, 7, 40000, 35, 3, 75, 192, 32, 34, 3, 338, 50, 600, 24, 80000, 73, 25, 336, 10, 228, 10000, 22, 22, 20000000, 2460, 55, 8, 2, 38, 400000, 17, 5500, 700, 69, 300, 4000000, 300, 600000, 51000, 350000, 4000000, 280000, 700, 9000, 70000, 2638, 7, 30, 852, 8, 50000000000, 35000, 36000, 1500, 1500, 9, 2100, 40, 2500];
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
var questionStart = 0;

function play() {
  questionNumber = Math.floor(Math.random() * (questions.length + 1));
  // questionStart = questionNumber;
  nextQuestion();
  console.log("play");
}

function nextQuestion() {
  currentQuestion = questions[(questionNumber)];
  currentAnswer = answers[(questionNumber)];
  questionNumber++;
  if (questionNumber > questions.length) {
    questionNumber = 0;
  }
  if (questionStart >= 12) {
    endGame();
  }
  questionStart ++;
  writeQuestion();
  writeAnswers();
  enableButtons();
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
  document.getElementById('question_progress').innerHTML = "QUESTION " + questionStart + " OF 12";
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
  disableButtons();
  if (answerOptions[0] == currentAnswer) {
    document.getElementById('option1').style.backgroundColor = "#98CD25";
    document.getElementById('option1').style.color = "#FFF";
    document.getElementById('option1').style.border = "none";
  } else if (answerOptions[1] == currentAnswer) {
    document.getElementById('option2').style.backgroundColor = "#98CD25";
    document.getElementById('option2').style.color = "#FFF";
    document.getElementById('option2').style.border = "none";
  } else if (answerOptions[2] == currentAnswer) {
    document.getElementById('option3').style.backgroundColor = "#98CD25";
    document.getElementById('option3').style.color = "#FFF";
    document.getElementById('option3').style.border = "none";
  } else if (answerOptions[3] == currentAnswer){
    document.getElementById('option4').style.backgroundColor = "#98CD25";
    document.getElementById('option4').style.color = "#FFF";
    document.getElementById('option4').style.border = "none";
  } else {
    console.log("no answers found");
  }
}

function disableButtons() {
  console.log("disable");
  document.getElementById('option1').disabled = true;
  document.getElementById('option2').disabled = true;
  document.getElementById('option3').disabled = true;
  document.getElementById('option4').disabled = true;
}

function enableButtons() {
  console.log("enable");
  document.getElementById('option1').disabled = false;
  document.getElementById('option2').disabled = false;
  document.getElementById('option3').disabled = false;
  document.getElementById('option4').disabled = false;
}

function endGame() {
  document.getElementById('score1').innerHTML = "SCORE: " + score;
  document.getElementById('playing').style.display = "none";
  document.getElementById('result').style.display = "block";

}
