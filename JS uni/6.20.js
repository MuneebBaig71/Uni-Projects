/*var a = window.prompt("Enter a number");
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
}*/

var size = 4;
var arr_name = [size];
let m_buffer_1 , m_buffer_2;

for (let i = 0; i < size; ++i)
{
    arr_name[i] = i + 10;
}


m_buffer_1 = arr_name[0];
m_buffer_2 = arr_name[0];
for (let i = 1; i < size; ++i)
{
    if (arr_name[i] < m_buffer_1) 
    {
        m_buffer_1 = arr_name[i];
    }
}

for (let i = 1; i < size; ++i)
{
    if (arr_name[i] < m_buffer_2 && m_buffer_1 != m_buffer_2)
    {
        m_buffer_2 = arr_name[i];
    }
}
