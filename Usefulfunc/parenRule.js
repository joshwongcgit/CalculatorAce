function checkOpenAndClose(arr)
{

  var numberOfOpen = 0;
  var numberOfClose = 0;
  var difference;

  for (var i = 0; i < arr.length; i++)
  {
  	var elem = arr[i];

  	if (elem == "(")
  	{
      numberOfOpen++;
  	}

  	else if (elem == ")")
  	{
  	  numberOfClose++;
  	}
  }
  	difference = numberOfOpen - numberOfClose;
  	return difference;
}

function checkBoolForCloseParen(caretPosition)
{
  var calcContent = $currentCalc.text().split("");
  var numberOfOpen = 0;
  var numberOfClose = 0;

  for (var i = 0; i < caretPosition; i++)
  {
    if (calcContent[i] == "(")
    {
      numberOfOpen++;
    }

    else if (calcContent[i] == ")")
    {
      numberOfClose++;
    }
  }

  var difference = numberOfOpen - numberOfClose;

  if (difference >= 1)
  {
    return true;
  }

  else
  {
    return false;
  }


}



