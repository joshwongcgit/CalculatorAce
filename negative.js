// adding negatives only
var nummy = ["-",34,"+",22,"-",11];

for (var i = 0; i < nummy.length; i++)
{
	if (nummy[i] == "-")
  {
		// if negative sign not at beginning, then + -4
  	if (i !== 0)
    {
      nummy[i+1] = -nummy[i+1];
      nummy[i] = "+";
    }

		// if negative sign at begnning, then just -4
    else
    {
    	nummy.splice(i,2,-nummy[i+1]);
    }
  }
}

for (var i = 0; i < nummy.length; i++)
{
  if (nummy[i] == "+")
  {
  	var answer = nummy[i-1] + nummy[i+1];
    nummy.splice(i-1,3,answer);
    i -= 1;
  }
}

document.write("<br>" + nummy);

// logic for using negatives

// 1. you can use it at beginning like -54 + 4
// 2. you can use it with multiplication or divison like 54*-43 or 4/-2
// 3. you cannot use negative sign after - or +
// 4. you can use negative sign after parenthese (   Ex: 5 + (-3)  or 5 - (-3^-3)

// 1. if equalIsClicked is true or (whole history length is 0 and equalIsClicked is not true (the beginning))
// 2. you can use - sign after * and /
// 3. you cannot use - sign after + and -
// 4. if ( is used, you can use negative sign
