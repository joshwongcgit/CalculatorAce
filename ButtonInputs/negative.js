$('.negative').click(function()
{
  var neg = $(this).val();
  alert("bye")
  processNeg(neg);
});

function processNeg(neg)
{
  var txt = $currentCalc.text().split("")
  var pos = $currentCalc.caret("pos");
  var lastVal = txt[pos-1];

  if (equalIsClicked)
  {
    $currentCalc.empty();
    $currentCalc.append("<b class = 'negative'>" + neg + "</b>");
    $historyTab.append("<b class = 'negative'>" + neg + "</b>");
    bool();
  }

  else if (numbPressed || decimal)
  {
    noNegative();
  }

  else if (lastVal == "-")
  {
    doubleNegativeError();
  }

  // if a sign is used
  else if (sign)
  {
    var paren = "(";
    $currentCalc.append('<b class = "paren">' + paren + '</b>');
    $currentCalc.append("<b class = 'negative'>" + neg + "</b>");
  }

  else if (closeParen)
  {
    negAfterCloseParen();
  }

  else
  {
    $currentCalc.append("<b class = 'negative'>" + neg + "</b>");
  }
    renderAnswers();
}

function bool()
{
  equalIsClicked = false;
}
