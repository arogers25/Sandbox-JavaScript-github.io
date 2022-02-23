console.log("You made it to Demerit Points.js");

let stop = false; //Boolean for testNaN() validation function, see end of file
let speedLimit;

function javascript () { //Where colsole.log tested file goes

}
//
function getDemerits (speed)
{
  if (speed <= speedLimit) // If the speed is not above the speed limit, they have 0 demerits
    return 0;

  let pointsOver = Math.floor((speed-speedLimit)/5)
  return (pointsOver >= 12) ? "Suspended!" : pointsOver;
} // end getDemerits
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
//Main Function, necessary lines of code
function main() {
  stop = false;
  let inputSpeed; //Variables particular to JavsScript Assignment
  inputSpeed = document.getElementById("textField1").value;
  speedLimit = document.getElementById("textField2").value;
  document.getElementById("validityTest1").innerHTML = testNaN(inputSpeed);
  document.getElementById("validityTest2").innerHTML = testNaN(speedLimit);
  if (stop == true) {
      alert("Please re-enter your values");
      document.getElementById("answer").innerHTML = "Unknown";
    } else {
      //Difference between calling functions with arguements and sending to parameter's, local variables
      document.getElementById("answer").innerHTML = getDemerits(parseInt(inputSpeed));
    }
} //End main()
//
