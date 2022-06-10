function autofocus()
{
  if (!equalPressed)
  {
	  $currentCalc.blur(function()
	  {
	    $currentCalc.focus();
	  });
  }

  else
  {
  	$("#calculation").css("caret-color","transparent")
  }
}