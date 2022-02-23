console.log("You made it to Ordering Grades.js");

let stop = false; //Boolean for testNaN() validation function, see end of file
let gradesEntered = false; //if at least 1 grade has been entered
let validGrades = 0; // The amount of real grades that have been entered for the mean
let addedGrade = 0; // The combined total of every grade for the mean

function javascript () { //Where colsole.log tested file goes

}
//
function testGrade (grade)
{
  if (grade == "") return "Skipped";
  if (isNaN(grade))
  {
    stop = true;
    return "Grade must be a Real Number"
  }
  if (grade <= 0)
  {
    stop = true;
    return "Grade must be higher than 0";
  }
  if (grade > 100)
  {
    stop = true;
    return "Grade must be 100 or lower";
  }
  validGrades++;
  addedGrade += parseInt(grade);
  gradesEntered = true;
  return "Valid Grade";
}//end testGrade
//
function gradeLetter (mean)
{
  if (mean < 60)
    return 'F';
  if (mean < 70)
    return 'D';
  if (mean < 80)
    return 'C';
  if (mean < 90)
    return 'B';

  return 'A';
} // end gradeLetter
//
//Main Function, necessary lines of code
function main() {
  stop = false;
  gradesEntered = false;
  validGrades = 0;
  addedGrade = 0;
  let grade1, grade2, grade3, grade4, grade5; //Variables particular to JavsScript Assignment
  //Get the value of the Heighth Input Field, id="testfield1", assign it to a variable
  grade1 = document.getElementById("textField1").value;
  grade2 = document.getElementById("textField2").value;
  grade3 = document.getElementById("textField3").value;
  grade4 = document.getElementById("textField4").value;
  grade5 = document.getElementById("textField5").value;
  //Validate by alert or HTML Text in p-tag
  document.getElementById("gradeLabel1").innerHTML = testGrade(grade1);
  document.getElementById("gradeLabel2").innerHTML = testGrade(grade2);
  document.getElementById("gradeLabel3").innerHTML = testGrade(grade3);
  document.getElementById("gradeLabel4").innerHTML = testGrade(grade4);
  document.getElementById("gradeLabel5").innerHTML = testGrade(grade5);
  if (gradesEntered == false)
    stop = true;

  if (stop == true) {
    if (gradesEntered == false) //Done twice to prevent an unentered grade from coming out as NaN%
    {
      alert("Please enter at least one grade");
    } else {
      alert("Please re-enter your values");
    }
      document.getElementById("answer").innerHTML = "Unknown";
    } else {
      //Difference between calling functions with arguements and sending to parameter's, local variables
      //alert(validGrades);
      //console.log("What did you say?", javaScriptFunction-Solution (firstNumber, secondNumber)); // Change to more appropriate message
      let meanGrade = addedGrade / validGrades;
      document.getElementById("answer").innerHTML = gradeLetter(meanGrade) + " (" + meanGrade + "%) ";
    }
} //End main()
