var total = 0;
var grade_counter = 0;
var grade;
var gradeValue;
var average;

grade = window.prompt("Enter your grade , press -1 to quit: ", "0");

gradeValue = parseInt(grade);

while (gradeValue != -1) {
  total += gradeValue;
  grade_counter= grade_counter+1;
  grade = window.prompt("Enter your grade , press -1 to quit: ", "0");
  gradeValue = parseInt(grade);
}
if (grade_counter != 0) {
  average = total / grade_counter;
  document.writeln("<h1>Average: " + average + "</h1>");
} else 
  document.writeln("<h1>No grades were entered</h1>");

