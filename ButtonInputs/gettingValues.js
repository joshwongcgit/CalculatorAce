// retrieves the last element in an equation
function getLastCharacter()
{
  var resultText = $currentCalc.text();
  var lastSign = resultText[resultText.length-1];
  return lastSign;
}

// retrieves the html of the result frmo the beginning to the last position of the value
function newResult(value)
{
  var resultText = $currentCalc.html();
  var findLastElemPos = resultText.lastIndexOf(value);
  var newResult = resultText.substring(0,findLastElemPos);
  return newResult;
}

// retrivees the html of the history from the beginning to the last position of the value
function newHistory(value)
{
  var historyText = $historyTab.html();
  var findLastElemPos = historyText.lastIndexOf(value);
  var newHistory = historyText.substring(0,findLastElemPos);
  return newHistory;
}
