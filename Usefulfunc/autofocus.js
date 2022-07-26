function autofocus()
{
 //hideKeyboard($(".resultTab"));
  $currentCalc.blur();
   // hideKeyboard($currentCalc);
  // alert("l")
  if (!equalPressed)
  { 
	  $currentCalc.blur(function()
	  {  

      $currentCalc.focus();
       //hideKeyboard($currentCalc);
      
	  });
  }

  else
  {
  	$("#calculation").css("caret-color","blue")
  }

 
}



