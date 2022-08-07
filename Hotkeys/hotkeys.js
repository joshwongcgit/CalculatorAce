var enableKeys = [45,46,112,113,114,115,116,117,118,119,120,121,122,123];
var numericKeys = ["0","1","2","3","4","5","6","7","8","9"];
var alphabetKeys = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","v","W","X","Y","Z"];

function initiateKeydown()
{
	$(window).off().on("keydown",function(event)
	{
	 if ($(".modal").hasClass("in"))
	 {
	   if (event.keyCode == 75  && $("#keys").hasClass("in")) 
	   {
	   	 $("#keys").modal("toggle");
	   	 event.preventDefault(); 
	   }

	   else if (event.keyCode == 88 && $("#preferences").hasClass("in")) 
	   {
	   	 $("#preferences").modal("toggle");
	   	 event.preventDefault(); 
	   }

	   else if (event.keyCode == 86 && $("#help").hasClass("in")) 
	   {
	   	 $("#help").modal("toggle");
	   	 event.preventDefault(); 
	   }

	   else if ($("#nameTab").hasClass("in"))
	   {
	     var character = String.fromCharCode(event.keyCode);
	     var value = $("#nameTab input").val();
	 
	     if ((numericKeys.includes(character) || alphabetKeys.includes(character)) && value.length < 6)
	     {
		    value =  value + character;
		    $('#nameTab input').val(value);
	     }

	     if (event.keyCode == 8)
	     {
	     	 value = value.slice(0,value.length-1);
	     	 $('#nameTab input').val(value);
	     }
	   }
	 }

	 else if (event.shiftKey)
	 {
				if (event.keyCode == 57)
				{
				  var paren = "(";
				  processValue(paren);
				}

				else if (event.keyCode == 48)
				{
				  var paren = ")";
				  processValue(paren);
				}

				else if (event.keyCode == 54)
				{
					var powa = "^";
					processValue(powa);
				}

				else if (event.keyCode == 187)
				{
				  var sign = '+';
				  processValue(sign);
				}

				else if (event.keyCode == 56)
				{
					var sign = multiplyChar;
					processValue(sign);
				}

				else if (event.keyCode == 49)
				{
				  var sign = "!";
				  processValue(sign);
				}
		}

		else
		{
			if (event.keyCode == 49 || event.keyCode == 97)
				{
					var number = "1";
					processValue(number);
				}

				else if (event.keyCode == 50 || event.keyCode == 98)
				{
					var number = "2";
					processValue(number);
				}

				else if (event.keyCode == 51 || event.keyCode == 99)
				{
					var number = "3";
					processValue(number);
				}

				else if (event.keyCode == 52 || event.keyCode == 100)
				{
					var number = "4";
					processValue(number);
				}

				else if (event.keyCode == 53 || event.keyCode == 101)
				{
					var number = "5";
					processValue(number);
				}

				else if (event.keyCode == 54 || event.keyCode == 102)
				{
					var number = "6";
					processValue(number);
				}

				else if (event.keyCode == 55 || event.keyCode == 103)
				{
					var number = "7";
					processValue(number);
				}

				else if (event.keyCode == 56 || event.keyCode == 104)
				{
					var number ="8";
					processValue(number);
				}

				else if (event.keyCode == 57 || event.keyCode == 105)
				{
				  var number = "9";
				  processValue(number);
				}

				else if (event.keyCode == 48 || event.keyCode == 96)
				{
				  var number = "0";
				  processValue(number);
				}

			    else if (event.keyCode == 191)  // /
				{
				  var sign = divideChar;
				  processValue(sign);
				}

				else if (event.keyCode == 189) // -
				{
				  var sign = subtractChar;
				  processValue(sign);
				}


				else if (event.keyCode == 190) // .
				{
				  var deci = ".";
				  processValue(deci);
				}

			  else if (event.keyCode == 187) // =
				{
				  var sign = "=";
				  processValue(sign);
				}	

				/*else if (event.keyCode == 37) // <--
				{
				  var index = caretPositionsArr.indexOf(newCaretPosition);
				  newCaretPosition = caretPositionsArr[index-1];

				  if (newCaretPosition == undefined)
				  {
				  	newCaretPosition = caretPositionsArr[index];
					}

					$currentCalc.caret("pos",newCaretPosition);
				}

				else if (event.keyCode == 39) // -->
				{
				  var index = caretPositionsArr.indexOf(newCaretPosition);

				  newCaretPosition = caretPositionsArr[index+1];
				
					if (newCaretPosition == undefined)
				  {
				  	newCaretPosition = caretPositionsArr[index];
					}

					$currentCalc.caret("pos",newCaretPosition);
				} */

			  else if (event.keyCode == 76) // l
				{
				  var func = "log";
				  processValue(func);
				}

			   else if (event.keyCode == 78) // n
				{
				  var func = "ln";
				  processValue(func);
				}

				else if (event.keyCode == 69) // e
				{
				  var func = "e";
				  processValue(func);
				}

			  else if (event.keyCode == 83) // s
				{
				  var func = "sin";
				  processValue(func);
				}

			    else if (event.keyCode == 67) // c
				{
				  var func = "cos";
				  processValue(func);
				}

				else if (event.keyCode == 84) // t
				{
				  var func = "tan";
				  processValue(func);
				}

				else if (event.keyCode == 8) // backspace
				{
				  backspace();
				}

				else if (event.keyCode == 81) // q
				{
				  switchMode();
				}

			    else if (event.keyCode == 86) // v
				{
			      $("#help").modal("toggle"); 
				}

				else if (event.keyCode == 90) // z
				{
				  if (showInstantAnswer)
				  {
				  	$instantAnswer.hide();
				  	showInstantAnswer = false;
				  }

				  else
				  {
				  	$instantAnswer.show();
				  	showInstantAnswer = true;
				  }
				}

				else if (event.keyCode == 88) // x
				{
				  $("#preferences").modal("toggle"); 
				}

			    else if (event.keyCode == 75) // k
				{
				  $("#keys").modal("toggle"); 
				}

				else if (event.keyCode == 68) // d
				{
					clearEntire();
				}

			  else if (event.keyCode == 82) // r
				{
					clearResult();
				}

			  else if (event.keyCode == 72) // h
				{
				  clearHistory();
				}

				else if (event.keyCode == 65) // a
				{
					clearHistory();
					clearResult();
				}

				else if (event.keyCode == 79) // o
				{
				  newEquation();
				}

				else if (event.keyCode == 80) // p
				{
				
				}

			    else if (event.keyCode == 77) // m
				{
				 
				}

				else
				{

				}
		  }

			if (!enableKeys.includes(event.keyCode))
			{
				stop(event);
			}
	});

} // windows hotkey

function stop(event)
{
  event.stopPropagation();
  event.preventDefault();
}
