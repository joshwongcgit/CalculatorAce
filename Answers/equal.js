$('#equal').click(function()
{
	equalButton();
});

currentCalc.keydown(function(event)
{
	if (event.keyCode == 187) // equal sign
	{
		event.preventDefault();
		equalButton();
	}
});

	function equalButton()
	{
	  if (equalIsClicked)
	  {
		EqualAgainError();
	  }

	  else if (sign || power || openParen)
	  {
		cannotEqual();
	  }

	  else
	  {
		equalIsPressed(equal);
	  }
		dragIt();
	}

	function checkEqualSigns()
	{
	  var content = $historyTab.text().split("");
	  var equalNumber = 0;

	  for (var i = 0; i < content.length; i++)
	  {
		if (content[i] == "=")
		{
		  equalNumber++;
		}
	  }
		return equalNumber;
	}

	function equalIsPressed()
	{
	  var equal = "=";
	  var answer = getAnswer();
	  var str = deleteX();
	  var needed = open - close;

	  for (var i = 0; i < needed; i++)
	  {
		str = str.concat('<b class = "paren">' + ")" + '</b>');
	  }
	    str = str.concat('<b class = "equal">' + equal + '</b>');

		if ($digitTab.text() == "Single")
		{
		  var ans = answer.split("");

		  for (var i = 0; i < ans.length; i++)
		  {
			str = str.concat("<b class = 'number'>" + ans[i] + "</b>");
		  }
	    }

		else
		{
	      str = str.concat('<b class = "answer">' + answer + '</b>');
		}

	    $currentCalc.html('<div class = "sepEqs"> <b class = "number">' + answer + '</b> </div>');
	    var pos = answer.length+1;
	    $currentCalc.caret("pos",pos);
		var cont = renderX(str);
		cont = cont.join('');
		$historyTab.html(cont);
		digitCount = 0;
		open = 0;
		close = 0;
		equalIsClicked = true;
		sign = false;
		decimal = false;
		numbPressed = false;
		closeParen = false;
	    historyEventClick();
	    exitLineEvent();
	}
