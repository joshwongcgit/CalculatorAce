var equalPressed = false;
var answer;
var caretPosition = 0;
var calculationLength = 0;
var caretPositionsArr = [];
var newCaretPosition = 0;

$("#buttonbox input, #buttonbox button").not(".exitLine").off().click(function()
{
	if (!$(this).hasClass("btnOpt"))
	{
	  var value = $(this).val();
	
	  if ($(this).hasClass("backspace"))
	  {
	    backspace();
	  }

	  else
	  {
		processValue(value);
	  }	
	}
});

$(".left").off().click(function()
{
	 var index = caretPositionsArr.indexOf(newCaretPosition);

	 newCaretPosition = caretPositionsArr[index-1];
				
	if (newCaretPosition == undefined)
	{
		newCaretPosition = caretPositionsArr[index];
	}
		$currentCalc.caret("pos",newCaretPosition);
});

$(".right").off().click(function()
{
	var index = caretPositionsArr.indexOf(newCaretPosition);
	newCaretPosition = caretPositionsArr[index+1];
				
	if (newCaretPosition == undefined)
	{
		newCaretPosition = caretPositionsArr[index];
	}
		$currentCalc.caret("pos",newCaretPosition);
});


function resetBoolType()
{
  for (var i = 0; i < typeBool.length; i++)
  {
  	typeBool[i] = true;
  }

  for (var i = 0; i < typeBool2.length; i++)
  {
  	typeBool2[i] = true;
  }
}

function processValue(value)
{
	activeTabNumber = $(".tabby").find("li.active a").attr("data-value");
	var calcContent;
	var lastValue = "";
	var nextValue = "";
  	caretPosition = $currentCalc.caret("pos");

	if (!equalPressed)
	{
	  calcContent = $currentCalc.text().split("");
	  calculationLength = calcContent.length;
	  lastValue = calcContent[caretPosition-1];
	  nextValue = calcContent[caretPosition];
	  
	  /*if (calculationLength == 0)
	  {
	 	$historyTab.append("<div></div>");
	  } */

	  if (lastValue == undefined)
	  {
			lastValue = "";
	  }

	  if (nextValue == undefined)
	  {
	  	nextValue = "";
	  }
	}

	if (value == "=" && $instantAnswer.text().length == 0)
	{
		
	}

	else if (value == undefined)
	{

	}

	else if (value == "=")
	{
		if (!equalPressed)
		{
			if (!answer.includes(","))
			{
				answer = addCommas(answer);
			}
	
			var cont = $currentCalc.text().split("");
			var diff = checkOpenAndClose(cont);
			$instantAnswer.html(answer);
			$currentCalc.html("<div class = 'sepEqs'> <div>" + answer + "</div> </div>");
			var historyContent = $historyTab.html().splitter("</b>");

		  // if theres is a difference in opening and closing parentheses
			for (var i = 0; i < diff; i++)
			{
				historyContent.splice(historyContent.length-2,0,"<b class = 'paren'>)</b>")
			}

		  historyContent.splice(historyContent.length-2,0,"<b class = 'equal'>=</b>");

		  // single form
		  if ($digitTab.text() == "Single")
		  {
		  	var ansLength = answer.length;
		  	var pos = historyContent.length-2;
		  	var initialCounter = 0;

		  	if (answer < 0)
				{
					historyContent.splice(pos,0,"<b class = 'negative'>-</b>");
					pos++;
					initialCounter++;
				}

		  	for (var x = initialCounter; x < answer.length; x++)
		  	{	
		      historyContent.splice(pos,0,"<b class = 'number'>" + answer[x] + "</b>");
		      pos++;
		  	}
		  }

		  // whole form
		  else
		  {
		  	var startingIndex = historyContent.length-2;

		  	if (answer < 0)
		  	{
		  		answer = answer.split("");
		  		answer.shift();
		  		answer = answer.join("");
		  		historyContent.splice(startingIndex,0,"<b class = 'negative'>-</b>");
		  		startingIndex++;	
		  	}

		  	historyContent.splice(startingIndex,0,"<b class = 'number'>" + answer + "</b>");

		  	answer = answer.split("");
		  	answer.splice(0,"-");
		  	answer = answer.join("");
		  }

		  historyContent = historyContent.join("");
		  $historyTab.html(historyContent);
		  equalPressed = true;
		  equalArray[activeTabNumber] = true;
			initiatePostRenderEvents();
		  //$currentCalc.blur();
		}
	}

	else
	{
	  if (value == ")") 
	  {
		  if (!checkBoolForCloseParen(caretPosition))
		  {
		 
		  }

		  else if (lastValue == "(")
		  {
		  	
		  }

		  else if (checkOpenAndClose(calcContent) <= 0) 
		  {
		 
		  }

		  else
		  {
		  	calcContent.splice(caretPosition,0,")");
		  }	  	
	  }

	  else if (signArray.includes(value) && signArray.includes(lastValue))
		{
			calcContent.splice(caretPosition-1,1,value);
		}

	  else
	  {
		  for (var i = 0; i < typeArray.length; i++)
		  {
		  	if (typeArray[i].includes(lastValue))
		  	{
		  	  typeBoolFunc[i]();
		  	}
		  }

		  for (var j = 0; j < typeArray.length; j++)
		  {
		  	if (typeArray[j].includes(nextValue))
		  	{
		  	  typeBoolFunc2[j]();
		  	}
		  }

		  for (k = 0; k < typeArray.length; k++)
		  {
		  	// value is inside the array 
		  	if ((typeArray[k].includes(value) || (typeArray[k].includes(value[value.length-1]) && !shortenInverseTrigArray.includes(value) && !shortenLogArray.includes(value))) && ((typeBool[k] && typeBool2[k]) || equalPressed))
		  	{
				  if (equalPressed)
				  {
				  	equalPressed = false;
    				equalArray[activeTabNumber] = false;
					calcContent = [];
				  	$currentCalc.empty();
				  	$instantAnswer.empty();
		
				  	$("#calculation").css("caret-color","rgb(137, 155, 161)")
			
				  	if (signArray.includes(value))
				  	{
				  	  $historyTab.append("<div class = 'sepEqs'>" + answer);
				  	  $historyTab.append("<b class = 'sign'>" + value + "</b>");

				  	  for (var x = 0; x < answer.length; x++)
				  	  {
				  	  	calcContent.push(answer[x]);
				  	  }
						calculationLength = answer.length; 
						caretPosition += calculationLength;
				  	}

				  	else
				  	{
				  	  $historyTab.append("<div class = 'sepEqs'>" + value);
				  	}

				  		// insert value in the set caretposition	 
				  		calcContent.splice(caretPosition,0,value); 

				  		
				  }

				  else if (value == "." || value.includes("."))
					{
						var decimalArray = checkDecimalsArr(calcContent);
						
						//alert(caretPosition)
						if (!decimalArray.includes(caretPosition))
						{
							if (value.length > 1)
							{
								for (var j = 0; j < value.length; j++)
								{
								  calcContent.splice(caretPosition + j,0,value[j]);
								}	
							}

							else
							{
								calcContent.splice(caretPosition,0,value);
							
							}
						}

						else
						{		
							// $currentCalc.caret("pos",caretPosition);
						}
					}

					else
					{
						if (isElemNumeric(value) && value.length > 1)
						{
						  for (var i = 0; i < value.length; i++)
						  {
							calcContent.splice(caretPosition + i,0,value[i]);
							
						  }	
						}

						else
						{
						  var duplicate = cloneArray(calcContent)
			  	  		  duplicate.splice(caretPosition,0,value); 

					  	  if (checkNumLength(duplicate))
						  {
							calcContent.splice(caretPosition,0,value)
						  }

						  else
						  {
									
						  }
					  	}
			  }
			}
		}
	}

	calcContent = splitPowerWithNumbers(calcContent);
	calcContent = groupLetters(calcContent);
	calcContent = groupTrigWithNegativeOne(calcContent);
	calcContent = processNumbers(calcContent);
	renderContent(calcContent,value);
}

}

	function checkNumLength(arr)
	{
		var numberLength = 0;
	
		for (var i = 0; i < arr.length; i++)
		{
			if (arr[i] == "," || numericArray.includes(arr[i]))
			{
				numberLength++;

				if (numberLength >= 22)
				{
					return false;
				}
			}

			else
			{
				numberLength = 0;
			}
		}
			return true;
  }

  function cloneArray(arr)
  {
  	var newArray = [];

  	for (var i = 0; i < arr.length; i++)
  	{
  		newArray.push(arr[i]);
  	}
  		return newArray;
  }