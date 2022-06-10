function autoClearHistory(clicker)
{
  var history = $historyTab.html();
  history = history.split(' ');
  var equalPressed = 0;

  for (var i = 0; i < history.length; i++)
  {
    if (history[i] == "class="equal\">")
    {
      equalPressed++;
    }
  }

  if (!autoClearTab && !autoClear && equalPressed == 10)
  {
    newEquation();
  }

  else if (autoClear && equalPressed >= 1)
  {
    $historyTab.empty();
    $currentCalc.empty();
  }

  else if (autoClearTab)
  {
    if (equalPressed == 10 && autoClearTab)
    {
      $historyTab.empty();
      $currentCalc.empty();
      numberClicked(clicker);
    }

    else if (equalIsClicked)
    {
      numberClickedWithEqual(clicker);
    }

    else
    {
      numberClicked(clicker);
    }
  }
}
