function autofocus()
{
  $currentCalc.focus();

  if (!equalPressed)
  {
	  $currentCalc.blur(function()
	  {
      if (!$("#nameTab input").is(":focus"))
      {
        $currentCalc.focus();
      }
	  });
  }

  else
  {
  	$("#calculation").css("caret-color","transparent")
  }
}