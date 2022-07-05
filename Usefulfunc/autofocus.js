function autofocus()
{
  $currentCalc.focus();
  // alert("l")
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

  alert("po")
  navigator.virtualKeyboard.hide();
  var ghostInput = document.getElementById("ghostInput");
  ghostInput.focus();
}



