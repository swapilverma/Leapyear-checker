// packages
var readlineSync = require("readline-sync");
const chalk = require("chalk")

// functions
function leapYear(num1){
  if ((num1%4) == 0){
    console.log(chalk.greenBright.bgBlack.bold("\n\nYou were born on a leap year\n\n"));
  }
  else{
    console.log (chalk.redBright.bgBlack.bold("\n\nYou were not born on a leap year\n\n"));
  }
}

//program start
console.log(chalk.greenBright.bgBlack.bold("LEAP YEAR CHECKER\n"));

while (true){
  var dob= readlineSync.question( chalk.white.bgBlue.bold ("\nType your birthdate in the format DD/MM/YYYY: \n"));

  var [bdate,bmonth,byear] = dob.split("/")
  console.log

  if (bdate>=1 && bdate<=31 && bmonth>=1 && bmonth<=12 && byear>=1 &&byear<=2021 && (bmonth===2 || bdate<=29) && (bmonth == [4,6,9,11] || bdate<=30)){
    leapYear(byear) ;
  }
  else{
    console.log(chalk.red.bgWhite.bold("You have not entered the data incorrectly. Please check the format and try again\n"))
  }

  if (readlineSync.keyInYN(chalk.white.bgBlue.bold("want to try again ?"))) {
    continue
  }
  else{
    break
  }

} 