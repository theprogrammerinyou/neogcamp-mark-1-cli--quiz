var readLineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

var score = 0;

var name = readLineSync.question("What's your name? ");

log(chalk.red("Hello " + name + ", Welcome to the GoT quiz "));


function play(question, answer){
  var userAnswer = readLineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    log(chalk.green("right "));
    score = score + 1;
  }
  else {
    log(chalk.yellow("wrong! "));
  }

  log(chalk.yellow("Current score is : " + score));
  log(chalk.green('-----------'));
}

var questions = [
  {
    question : "What is the Iron Bank's representative, played by Mark Gatiss called? ",
    answer : "tycho nestoris"
  },
  {
    question : "Who is responsible for the creation of Dark Knight? ",
    answer : "the children of forest"
  },
  {
    question : "In the TV show, what was Hodor called before he got his tragic door holding nickname? ",
    answer : "wylis"
  },
  {
    question : "Dany's Dragon were called Drogon, Viserion and ?",
    answer : "rhaegal"
  },
  {
    question : "Where is the house of black and white, the training temple of the faceless men? ",
    answer : "bravos"
  }
];

for(var i = 0 ; i < questions.length ; i++){
  var currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer);
}

log(chalk.red(name , " your final score is : " , score));