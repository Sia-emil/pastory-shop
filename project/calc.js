


function order()
{
 var n;
n=prompt("How many orders you want to place ?");
var a=[];
var b=[];
for(var i=0;i<n;i++)
{
    a[i]=prompt("Enter you choice"+" " + (i+1));

    b[i]=prompt("How many scoops :"+" " + (i+1)+" " +"choice");
   
}
calc();
function calc()
{
    var s=0;
    for(var i=0;i<n;i++)
    {
        if(b[i]==1)
        {
            s+=50;
        }
        else
        if(b[i]==2)
        {
            s+=150;
        }
        else
        if (b[i]==3)
        {
            s+=250;
        }
    }
    alert("Your Total Amount is:"+ " " +s);
}
}