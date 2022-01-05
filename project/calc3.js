function order()
{
 var n;
n=prompt("How many orders you want to place ?");
var a=[];

for(var i=0;i<n;i++)
{
    a[i]=prompt("Enter you choice"+" " + (i+1));

    
   
}


calc();
function calc()
{
    var s=0;
    for(var i=0;i<n;i++)
    {
        if(a[i]==6|| a[i]==3||a[i]==7||a[i]==9||a[i]==12)
        {
            s+=500;
        }
        else
        if(a[i]==2||a[i]==1)
        {
            s+=300;
        }
        else
      if (a[i]==5||a[i]==4)
        {
            s+=800;
        }
     else
      if (a[i]==10||a[i]==11||a[i]==8)
        {
            s+=900;
        }


    }
    alert("Your Total Amount is:"+ " " +s);
}
}