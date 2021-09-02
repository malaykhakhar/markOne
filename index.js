var readlineSync = require("readline-sync");
const chalk = require('chalk');

var userName = readlineSync.question(chalk.blue("What is your Name? "));
console.log(chalk.cyanBright("Welcome " + chalk.italic.yellowBright(userName) + " to DO YOU KNOW Malay?"));
console.log(chalk.cyanBright("-----------------"));
var score = 0;

var highScore = [
  {
    name : "Malay",
    score : 5
  },
  {
    name : "Nivi",
    score : 4
  }
];

var questions = [{
    question : "Where do i Live? ",
    answer : "Bhavnagar"
  },{
    question: "Which is my favourtie sport? ",
    answer: "Cricket"
  },
  {
    question : "Who is my favourtie cricketer? ",
    answer : "Virat Kohli"
  },
  {
    question : "Which cuisine do i like the most? ",
    answer : "South Indian"
  },
  {
    question: "Which is my favourtie movie? ",
    answer: "Zindagi Na Milegi Dobara"
  }
];

function play(question,answer){
  var userAnswer = readlineSync.question(chalk.cyan(question));
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    score++;
    console.log(chalk.greenBright("Correct! Your Current Score is: "+score));
  }else{
    console.log(chalk.red("Incorrect! Your Current Score is: "+score));
  }
  console.log("-----------------");
}

function checkAnswer(){
  for(var i = 0;i<questions.length; i++){
  play(questions[i].question, questions[i].answer);
  }
}

function checkBeatHighScore(){
  if(score >= highScore[0].score){
    console.log(chalk.bold.greenBright("Yeay! You have beat the highest score set till now by "+highScore[0].name));
  }else{
    for (var i = 1; i < highScore.length; i++) {
      if(score >= highScore[i].score){
        if((i+1) === 2){
          console.log(chalk.bold.cyanBright("You beat the " +(i+1)+ "nd highest score by " + highScore[i].name));
        }else if((i+1)===3){
          console.log(chalk.bold.cyanBright("You beat the " +(i+1)+ "rd highest score by " + highScore[i].name));
        }else{
          console.log(chalk.bold.cyanBright("You beat the " +(i+1)+ "th highest score by " + highScore[i].name));
        }
        return;
      }
    }
    console.log(chalk.bold.redBright("You could not beat any high score but you can try again!"));
  }
}

function printScore(){
  console.log(chalk.magentaBright("YAY! Your final score is: "+score));

  console.log(chalk.bold.yellowBright("Thank you for playing the game. These are the high-scores below:- "));
  for(var i = 0 ; i<highScore.length;i++){
    console.log(chalk.yellowBright(highScore[i].name + " : " + highScore[i].score));
  }

  checkBeatHighScore();

  console.log(chalk.blueBright("Ping me if you want your score to be added!"));
}

checkAnswer();
printScore();