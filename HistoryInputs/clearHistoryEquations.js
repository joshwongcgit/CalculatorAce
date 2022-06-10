var autoClearTab =  true;

function autoClearHistory()
{
  var history = $historyTab.html().splitter("</b>");
  var equalPressed = 0;

  for (var i = 0; i < history.length; i++)
  {
    if (history[i].search("equal") !== -1)
    {
      equalPressed++;
    }
  }

  if (!autoClearTab && !autoClear && equalPressed == 10)
  {
    newEquation();
  }   
    return equalPressed;
}
