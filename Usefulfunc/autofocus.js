function autofocus()
{
  navigator.virtualKeyboard.hide();
  $currentCalc.attr("readonly","readonly")
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
}


 $("#calculation").on("click", function(e) {
  alert("hey")
      e.preventDefault();
  });

