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
  navigator.virtualKeyboard.hide();
}


 $("#calculation").on("click", function(e) {
  alert("hey")
      e.preventDefault();
  });

