var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your Name? ");
console.log("Welcome " + userName + " to DO YOU KNOW Malay?");
console.log("-----------------");
var score = 0;

var highScore = [
  {
    name : "Malay",
    score : 3
  },
  {
    name : "Nivi",
    score : 3
  }
];

var questions = [{
    question : "Where do i Live? ",
    answer : "Bhavnagar"
  },
  {
    question : "Who is my favourtie cricketer? ",
    answer : "Kohli"
  },
  {
    question : "Which food do i like the most? ",
    answer : "Pani Puri"
  }
];

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    score++;
    console.log("Correct! Your Current Score is: "+score);
  }else{
    console.log("Incorrect! Your Current Score is: "+score);
  }
  console.log("-----------------");
}

function checkAnswer(){
  for(var i = 0;i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
  }
}

function printScore(){
  console.log("YAY! Your final score is: "+score);

  console.log("Thank you for playing the game. These are the high-scores below:- ");
  for(var i = 0 ; i<highScore.length;i++){
    console.log(highScore[i].name + " : " + highScore[i].score);
  }
  console.log("Ping me if you want your score to be added!");
}

checkAnswer();
printScore();