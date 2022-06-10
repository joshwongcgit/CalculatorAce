function answerIsPressed(answer)
{
  $currentCalc.append('<b class = "number">' + answer + '</b>');
  sign = false;
  numbPressed = false;
  renderAnswers();
  numberBeforeEqual();
}
