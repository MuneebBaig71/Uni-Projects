var a = window.prompt("Enter a number");
var b = window.prompt("Enter a number");
var c = window.prompt("Enter a number");
var d = window.prompt("Enter a number");
if(a>b)
{
    if(a>c)
    {
        if(a>d)
        {
            document.write("<h1>a is greater</h1>");
        }
        else
        {
            document.write("<h1>d is greater</h1>");
        }
    }
    else
    {
        if(c>d)
        {
            document.write("<h1>c is greater</h1>");
        }
        else
        {
            document.write("<h1>d is greater</h1>");
        }
    }
}
