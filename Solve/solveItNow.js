// str will be an array;
// instead of adding stuff to hiddenAnswer with every action, it will not clone app.answer.value, then run a for loop to evaluate

function negAfterMinus()
{
  var equation = withoutParen();

  for (var i = 0; i < equation.length-1; i++)
  {
    if (equation[i] == "-" && equation[i+1].includes("-"))
    {
      equation[i] = "+";
      equation[i+1] = -equation[i+1];
    }
  }
      return equation;
}

function convertNumberToString()
{
  var equation = negAfterMinus();

  for (var i = 0; i < equation.length; i++)
  {
    if (typeof(equation[i]) == "Number");
    {
      equation[i] = equation[i].toString();
    }
  }
    return equation;
}

// returns a answer in string with commas
function getAnswer()
{
  var equation = convertNumberToString();
  
  for (var i = 0; i < equation.length; i++)
  {
    if (equation[i].search(","))
    {
      var split = equation[i].split("");

      for (var j = 0; j < split.length; j++)
      {
        if (split[j] == ",")
        {
          split.splice(j,1);
        }
      }
        equation[i] = split.join("");
    }
  }

  answer = solver(equation);
  
  //answer = addCommas(answer);

  return answer;
}

function removeCommas(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i].includes(","))
    {
      arr.splice(i,1);
    }
  }
    return arr;
}


