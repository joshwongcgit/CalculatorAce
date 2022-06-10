// array of caret position that decimal or number with decimals cannot be inserted into
function checkDecimalsArr(arr)
{
  var decimalArray = [];

  for (var i = 0; i < arr.length; i++)
  {
  	if (arr[i] == ".")
  	{
      decimalArray.push(i);

  	  for (var j = i+1; j < arr.length; j++)
  	  {
  	  	decimalArray.push(j);

  	  	if (numericArray.indexOf(arr[j]) == -1)
  	  	{
  	  	  break;
  	  	}
  	  }

      decimalArray.push(j);

      for (var k = i-1; k >= 0; k--)
      {
        if (numericArray.indexOf(arr[k]) == -1)
        { 
          break;
        }

        else
        {
           decimalArray.push(k);
        }
      }
    }
  }  	
  	return decimalArray;
}

// alert(checkDecimalsArr(["1","+","4","3","2",".","2","3","+","4","3","3","+","4",".","5","5","+","s","i","n","(","3","2",")"]));
// [2,3,4,5,6,7,8,13,14,15,16,17]
