function autofocus()
{

 //hideKeyboard($(".resultTab"));
  $currentCalc.focus();
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



