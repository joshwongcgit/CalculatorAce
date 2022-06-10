// Checks to see if the answer you clicked on has a decimal point.

function answerDecimalCheck(answer)
{
  answer = answer.toString();

  if (answer.includes('.'))
  {
    return -1;
  }

  else
  {
    return 1;
  }
}
