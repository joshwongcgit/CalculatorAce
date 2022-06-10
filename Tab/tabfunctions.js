function tabHotKeys()
{
	$currentCalc.keydown(function(e)
	{
		var letter = String.fromCharCode(e.keyCode);

		if (letter == "O") //O
		{
		   newEquation("no");
		   var menu = $('.tabby li.active').children('a').attr('data-value');
			processSwitching(menu);
		}

		else if (letter == "P") //P
		{
		  var $activeTab = $('.tabby li.active');
		  tabRemoval();
		}

		else if (letter == "N") //K
		{
	    	newEquation();
		}

		else if (e.keyCode == 40) // down or previous
		{
			var $activeTab = $('.tabby li.active');
			var $prevTab = $activeTab.prev();

			if (!$prevTab.length == 0)
			{
				tabSwitch("down");
			}
		}

		else if (e.keyCode == 38) // foward
		{
			var $activeTab = $('.tabby li.active');
			var $nextTab = $activeTab.next();

			if ($nextTab.has("a").length !== 0)
			{
				tabSwitch("up");
			}
		}
	});
}
