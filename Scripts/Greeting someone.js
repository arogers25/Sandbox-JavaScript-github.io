console.log("You made it to Greeting someone.js");

let stop = false; //Boolean for testNaN() validation function, see end of file
let amCheck, pmCheck; // Boolean for AM and PM radio boxes

function javascript () { //Where colsole.log tested file goes

}
//
function testNaN (number)
{
  if (number == "") //Checking for null, submit-button misfire
  //Variable returns empty string, not null
  {
    stop = true;
    return "Please type a number into the textfield";
  }//End null check
  //
  if ( isNaN(number) ) //Returns a Boolean
  {
    stop = true;
    return "Type a Real Number";
  } else
  {
    return "Input Validated";
  }
}//end testNaN
//
function testTime(hours, mins)
{
  testNaN(hours);
  testNaN(mins);
  if (stop == true)
  {
    return "Please re-enter your time";
  } else {
    if (hours < 0 || hours > 12)
    {
      stop = true;
      return "Please enter a valid hour";
    }
    if ((mins + " ").length != 3)
    {
      // Parsing a number that is just 2 zeros returns a length of 1 and toString().length does not work on mins for some reason
      // This converts mins to a string by adding a space and checks if it is a 2 digit number
      stop = true;
      return "Minutes need to be 2 digits";
    }
    if (mins < 0 || mins > 59)
    {
      stop = true;
      return "Please enter a valid minute";
    }
  }
}
//
function findGreeting(hours, mins) // Takes hours in 24-hour time for clarity
{
  if (hours == 7 && mins == 0 || hours < 7) return "Good Morning!";
  if (hours == 7 && mins > 0 || hours > 7 && hours < 12) return "Good Afternoon!";
  if (hours >= 12 && hours < 20) return "Good Evening!";
  if (hours >= 8 && hours < 24) return "Good Night!";
  return "Hello!";
}
//Main Function, necessary lines of code
function main() {
  stop = false;
  let firstNumber, secondNumber; //Variables particular to JavsScript Assignment
  firstNumber = document.getElementById("textField1").value;
  secondNumber = document.getElementById("textField2").value;
  amCheck = document.getElementById("radioGroup1_0").checked;
  pmCheck = document.getElementById("radioGroup1_1").checked;
  let validTime = testTime(firstNumber, secondNumber);
  if (stop == true) {
      alert(validTime);
      document.getElementById("answer").innerHTML = "???"
    } else {
      if (amCheck && firstNumber == 12) firstNumber = 0;
      if (pmCheck && firstNumber < 12) firstNumber = parseInt(firstNumber)+12; //Convert the hours to 23 hour time
      document.getElementById("answer").innerHTML = findGreeting(firstNumber, secondNumber);
    }
} //End main()
