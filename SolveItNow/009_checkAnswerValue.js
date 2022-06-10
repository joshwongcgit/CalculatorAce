function checkViableEq(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] == "^" && arr[i+1] == undefined)
    {
      return false;
    }

    if (arr[i] == "(" && (arr[i+1] == undefined || arr[i+1] == " "))
    {
      return false;
    }

    if (signArray.includes(arr[i]) && arr[i+1] == undefined)
    {
      return false;
    }
  }
    return true;
}

function addParenthesesToFunc(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (shortenTrigArray.includes(arr[i]) || shortenLogArray.includes(arr[i]) || shortenRootArray.includes(arr[i]))
    {
      arr.splice(i+1,0,"(")

    }
  }
    return arr;
}

// this module converts long answers into shorten answers if necessary
function checkAnswerValue(ans)
{
  var answer = stripCommasFromAnswer(ans);
  var numberedAnswer = Number(answer);
  stringAnswer = answer.toString();
  arrayAnswer = stringAnswer.split('');
  var dec = stringAnswer.indexOf('.');

  if (dec < 4 && stringAnswer.length > 8 && stringAnswer.includes("."))   // 4.44444444444444444444 = 4.44
  {
    shortenAnswer = stringAnswer.substring(0,dec+3);
    shortenInputsWithHTML = '<b class = "shortenInputs">' + shortenAnswer + '</b>';
    return shortenAnswer;
  }

  else if (dec >= 4 && stringAnswer.length >= 15)
  {
    shortenAnswer = stringAnswer.substring(0,dec+3);
    shortenInputsWithHTML = '<b class = "shortenInputsWithHTML">' + shortenAnswer + '</b>';
    return shortenAnswer;
  }

  else if (stringAnswer.length > 8 && dec == -1 && !stringAnswer.includes('e') || (deci > 7 && deci+2 <= stringAnswer.length))  // 44444444444444444 = 4.44e^14
  {
    shortenAnswer = numberedAnswer.toExponential(2);
    shortenInputsWithHTML = '<b class = "shortenInputs">' + shortenAnswer + '</b>';
    return shortenAnswer;
  }

  else if (dec < 4 && stringAnswer.length > 8 && stringAnswer.length < 17)   // 4444.4444444444444444444 = 4444.44
  {
    shortenAnswer = numberedAnswer.toExponential(2);
    shortenInputsWithHTML = '<b class = "shortenInputs">' + shortenAnswer + '</b>';
    return shortenAnswer;
  }
    return -1;
}
