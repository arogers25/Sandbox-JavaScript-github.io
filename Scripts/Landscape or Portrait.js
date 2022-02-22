console.log("You made it to Landscape or Portrait.js");

let stop = false; //Boolean for testNaN() validation function, see end of file

function javascript () { //Where colsole.log tested file goes

}
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
function geometry (w, h) // width and height parameters
{
  if (w == h) return "Square";
  return (w > h) ? "Landscape" : "Portrait";
}//end geometry
//
//Main Function, necessary lines of code
function main() {
  stop = false
  let width, height; //Variables particular to JavsScript Assignment
  //Get the value of the Heighth Input Field, id="testfield1", assign it to a variable
  width = document.getElementById("textField1").value;
  height = document.getElementById("textField2").value;
  document.getElementById("validityTest1").innerHTML = testNaN(width);
  document.getElementById("validityTest2").innerHTML = testNaN(height);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Unknown" //Change to more appropriate message
      alert("Please re-enter your values");
    } else {
      //Difference between calling functions with arguements and sending to parameter's, local variables
      //console.log("What did you say?", javaScriptFunction-Solution (width, height)); // Change to more appropriate message
      document.getElementById("answer").innerHTML = geometry (width, height);
    }
} //End main()
//
