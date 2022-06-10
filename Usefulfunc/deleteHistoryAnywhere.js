var noSign = false;

// count how many br there are
function countNumberOfBr(cont)
{
  var br = 0;

  for (var i = 0; i < cont.length; i++)
  {
    if (cont[i].search("</div>") !== -1)
    {
      br++;
    }
  }
    return br;
}

// exit event
function deleteLines()
{
  $(".exitLine").click(function()
  {
    $(this).parent().remove();
    var historyContent = $historyTab.html().splitter("</div>"); 
    historyContent[historyContent.length-1] = historyContent[historyContent.length-1].trim();

    if ((historyContent[historyContent.length-1] == " " || historyContent[historyContent.length-1] == "") && historyContent.length > 1)
    {
      if (historyContent[historyContent.length-2].includes("equal"))
      {
        equalPressed = true;
      }

      else
      {
    
      }
    }
  });
}

function historyClicking()
{
  $(".historyInputs b").not(".exitLine").off().click(function()
  {
    var value = $(this).text();
    processValue(value);
    $currentCalc.focus();
  });
}


