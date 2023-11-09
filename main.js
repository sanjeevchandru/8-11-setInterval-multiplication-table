document.write("Print Multiplication table using setInterval() method"+"<br>");
document.write("--------------------------------------"+"<br>");

let table=prompt("Enter a multiplication table :");
let y=prompt("Enter length of Table:");
let x=0;
let a=setInterval(function(){
    document.write(x+"*"+table+"="+x*table+"<br>");
    x++;
    
        if(x>y)
        {
            clearInterval(a);
        }
},1000);


