var needed;

function addMultiplyOnClosingParen()
{
  var equation = $currentCalc.text().split("");

  for (var i = 0; i < equation.length; i++)
  {
    var first = equation[i];
    var second = equation[i+1];

    if (first == ")" && !isNaN(second))
    {
      equation.splice(i+1,0,"*")
    }

    if (!isNaN(first) && second == pieChar)
    {
      equation.splice(i+1,0,"*");
    }

    if (!isNaN(first) && second == "e")
    {
      equation.splice(i+1,0,"*");
    }
  }
    return equation;
}

function filterMultiAndDivide()
{
  var equation = addMultiplyOnClosingParen();

  for (var i = 0; i < equation.length; i++)
  {
    if (equation[i] == multiplyChar)
    {
      equation[i] = "*";
    }

    if (equation[i] == divideChar)
    {
      equation[i] = "/";
    }

    if (equation[i] == pieChar)
    {
      equation[i] = Math.PI.toString();
    }

    if (equation[i] == "e")
    {
      equation[i] = Math.E.toString();
    }
  }
  
    return equation;
  }

function addParenAtEnd()
{
  var equation = filterMultiAndDivide();
  open = 0;
  close = 0;

  for (var j = 0; j < equation.length; j++)
  {
    if (equation[j] == "(")
    {
      open++;
    }

    else if (equation[j] == ")")
    {
      close++;
    }
  }

  needed = open - close;
  
  if (needed > 0)
  {
    for (var i = 0; i < needed; i++)
    {
      equation.push(')');
    }
  }
    return equation;
}