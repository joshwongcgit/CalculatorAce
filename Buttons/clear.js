$('.clearHistory').off().click(function()
{
  clearHistory();
});

function clearHistory()
{
  if ($historyTab.text().length == 0)
  {
    // history already cleared error
    historyClearError();
  }

  else
  {
    $historyTab.empty();
  }
}


function clearResult()
{
  if ($currentCalc.text().length > 0)
  {
    $currentCalc.empty();
    $instantAnswer.empty();
  }
}