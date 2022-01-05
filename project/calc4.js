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
        
        if(a[i]==5||a[i]==1)
        {
            s+=750;
        }
        else
        if (a[i]==2)
        {
            s+=650;
        }
      else
      if (a[i]==3||a[i]==4)
        {
            s+=880;
        }
     

    }
    alert("Your Total Amount is:"+ " " +s);
}
}