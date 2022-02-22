console.log("You made it to Modulus Assignment.js");

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
function evenOrOdd (number)
{
  return (number%2 == 0) ? "Even" : "Odd"
}//end evenOrOdd
//
//Main Function, necessary lines of code
function main() {
  stop = false;
  let firstNumber; //Variables particular to JavsScript Assignment
  firstNumber = document.getElementById("textField1").value;
  testNaN(firstNumber);
  if (stop == true) {
      alert(testNaN(firstNumber));
      document.getElementById("answer").innerHTML = "Unknown" //Change to more appropriate message
    } else {
      //Difference between calling functions with arguements and sending to parameter's, local variables
      document.getElementById("answer").innerHTML = evenOrOdd(firstNumber);
    }
} //End main()
