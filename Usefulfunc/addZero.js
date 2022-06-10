// Add a zero when no nothing is clicked on
function addZero()
{
  var zero = '0';
  $currentCalc.append('<b class = "number">' + zero + '</b>');
  $historyTab.append('<b class = "number">' + zero + '</b>');
  similarityTwo();
}

function addZeroBreak()
{
  similarityTwo();
  var zero = '0';
  $currentCalc.append('<b class = "number">' + zero + '</b>');
  $historyTab.append('<br> <br> <b class = "number">' + zero + '</b>');
  equalIsClicked = false;
}

function similarityTwo()
{
  numbPressed = true;
  prevDecimal = false
}
