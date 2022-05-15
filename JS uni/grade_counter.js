var total = 0;
var grade_counter = 1;
while(grade_counter <= 10){
    var grade = prompt("Enter grade " + grade_counter + ":" , "0");
    total += parseInt(grade);
    grade_counter++;
}
 var average = total / 10;
 document.write("<h1>Average: " + average + "</h1>");
