$('.clearHistory').off().click(function()
{
  clearHistory();
});

function clearHistory()
{
  if ($realHistoryInput.text().length == $textie.text().length)
  {
    // history already cleared error
    HistoryClearError();
  }

  else
  {
    $historyTab.empty();
  }
}
