function autofocus()
{

 hideKeyboard($(".resultTab"));
  $currentCalc.focus();
  // alert("l")
  if (!equalPressed)
  {
	  $currentCalc.blur(function()
	  {  
      $currentCalc.focus();
       hideKeyboard($(".resultTab")); 
	  });
  }

  else
  {
  	$("#calculation").css("caret-color","transparent")
  }

 
}



