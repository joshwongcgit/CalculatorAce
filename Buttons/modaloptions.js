currentCalc.keydown(function(e)
{
  var letter = String.fromCharCode(e.keyCode);

  if (letter == "M")
  {
    $('#option').modal('toggle');
  }

  else if (letter == "V")
  {
    $('#help').modal('toggle');
  }

});
