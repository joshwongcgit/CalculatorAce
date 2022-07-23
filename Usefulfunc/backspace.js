function backspace()
{
  calculationLength = $currentCalc.text().split("").length;

  if (calculationLength == 0)
  {
  
  }

  else
  {
	  caretPosition = $currentCalc.caret("pos");
	 
	  var pos = $currentCalc.caret("pos");

	  var calcContent = $currentCalc.text().split("");
	  
	  var calcContentCopy = $currentCalc.text().split("");
	  calcContentCopy = groupLetters(calcContentCopy);
	  calcContentCopy = groupTrigWithNegativeOne(calcContentCopy);
	  calcContentCopy = addFillerElemOnFunc(calcContentCopy);

	 // [1,2,3,sin,(,34)]
	  if (calcContent[pos-1] == ",")
	  {
	  	calcContent.splice(pos-1,1);
	  	calcContent.splice(pos-2,1);
    }

	  else if (calcContentCopy[pos-1] == "(" && calcContentCopy[pos-2] == "filler")
	  {

	  	calcContent.splice(pos-1,1);
	  	calcContent.splice(pos-2,1);

	  	for (var i = pos-3; i >= 0; i--)
	  	{
	  	  if (calcContentCopy[i] == "filler")
	  	  {
	  	  	calcContent.splice(i,1)
	  	  }

	  	  else
	  	  {
	  	  	break;
	  	  }
	  	}
	  }

	  else 
	  {
	  	calcContent.splice(pos-1,1);
	  }

	  calcContent = groupLetters(calcContent);
	  calcContent = groupTrigWithNegativeOne(calcContent);
	  calcContent = processNumbers(calcContent);

	  renderContent(calcContent);

	  var newCalculationLength = $currentCalc.text().split("").length;
	  var calc = calculationLength - caretPosition;
	  newCaretPosition = newCalculationLength - calc;
	  $currentCalc.caret("pos",newCaretPosition);
  }
}

function addFillerElemOnFunc(cont)
{
	var arr = cont;

	for (var i = 0; i < arr.length; i++)
	  {
	    if (shortenTrigArray.includes(arr[i]) || shortenLogArray.includes(arr[i]) || shortenRootArray.includes(arr[i]))
	    {
	      caretPositionsArr.push(i); 
	      charLength = arr[i].length;

	      for (var j = 0; j < charLength; j++)
	      {
	        arr.splice(j+i,0,"filler");
	      }

	      arr.splice(charLength+i,1);
	        
	      i += charLength;
	    }

	    else if (arr[i] != ",")
	    {
	      caretPositionsArr.push(i); 
	    }
	  }
	  	return arr;
}


