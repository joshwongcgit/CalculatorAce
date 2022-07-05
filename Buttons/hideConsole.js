var hideConsole = false;

  $('.hideConsole').off().click(function()
  {
    hideTheConsole();
  });

  function hideTheConsole()
  {
    if (hideConsole)
    {
      $('.hideConsole').text('Hide console messages');
      hideConsole = false;
    }

    else if (!hideConsole)
    {
      $('.hideConsole').text('Show console messages');
      hideConsole = true;
    }
  }

currentCalc.keydown(function(event)
{
  if (event.keyCode == 88)
  {
    hideTheConsole();
  }
  });
