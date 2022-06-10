function caretFilter(pos)
{
  var text = $currentCalc.text().split("");
  var lastVal = text[pos-1];
  var nextVal = text[pos];
  
  // after a number and before a non sign  Ex: 43ln(2)    before 3 and l
  if (numericArray.includes(lastVal) && !signArray.includes(nextVal))
  {
    numbPressed = true;
    sign = false;
    openParen = false;
    power = false;
  }

  else if (signArray.includes(lastVal))
  {
    equalIsClicked = false;
    numbPressed = false;
    sign = true;
    decimal = false
    closeParen = false;
  }

  else if (powerArray.includes(lastVal))
  {
    power = true;
    numbPressed = false;
    closeParen = false;
    sign = false;
  }

  else if (parenArray.includes(lastVal))
  {
    power = true;
    sign = true;
  }
}
