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
        if(a[i]==1|| a[i]==3||a[i]==4||a[i]==8)
        {
            s+=500;
        }
        else
        if(a[i]==2||a[i]==5)
        {
            s+=1500;
        }
        else
        if (a[i]==6||a[i]==10)
        {
            s+=2500;
        }
      else
      if (a[i]==7)
        {
            s+=700;
        }
 else
      if (a[i]==11)
        {
            s+=900;
        }
 else
      if (a[i]==13)
        {
            s+=2800;
        }
else
      if (a[i]==12)
        {
            s+=2300;
        }
else
      if (a[i]==9)
        {
            s+=2700;
        }

    }
    alert("Your Total Amount is:"+ " " +s);
}
}