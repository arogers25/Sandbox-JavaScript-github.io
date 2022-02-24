console.log("You made it to FizzBuzz.js");

let stop = false; //Boolean for testNaN() validation function, see end of file

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
function fizzBuzz(number)
{
  let out = ""; // The output for our FizzBuzz return
  if (number % 3 == 0) out += "Fizz";
  if (number % 5 == 0) out += "Buzz";
  return (out == "") ? number : out; //If nothing was added to the output it is not divisible by 3 or 5
}
//Main Function, necessary lines of code
function main() {
  stop = false;
  let firstNumber; //Variables particular to JavsScript Assignment
  firstNumber = document.getElementById("textField1").value
  let validCheck = testNaN (firstNumber); // Test the number once, save it, and have it appear as an alert instead of putting it in a validity check
  if (stop == true) {
      alert(validCheck);
      document.getElementById("answer").innerHTML = "Unknown";
    } else {
      document.getElementById("answer").innerHTML = fizzBuzz(firstNumber);
    }
} //End main()
