var passes = 0;
var failures = 0;
var students = 1;
var result;

while (students <= 4) {
    students =parseInt(students);
  result = window.prompt("Enter the result(1 =pass, 2=fail): ", "0");
  if (result == "1") 
  passes++;
  else 
  failures++;

  students++;
}
document.writeln("<h1>numer of passes:<h1>  " + passes);
document.writeln(" number of failures: " + failures);

if (passes > 4) {
  document.writeln("Bonus to instructor");
}
