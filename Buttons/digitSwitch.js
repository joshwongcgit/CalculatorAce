var singleDigit = true;
var wholeDigit = false;;
var numberStore = [];
var switchedDigits = false;

// text
$(".digits").off().click(function()
{
  switchMode();
});

//button
$('.digitConverter').off().click(function()
{
  switchMode();
});

// render
function switchMode()
{
  if ($digitTab.text() == "Single")
  {
    $digitTab.html("Whole");
  }

  else
  {
    $digitTab.html("Single");
  }

  switchedDigits = true;

  var historyContent = $historyTab.text();
  historyContent = historyContent.trim();
  historyContent = historyContent.split("");

  if ($digitTab.text() == "Whole" && historyContent.length != 0)
  {
    historyContent = processNumbers(historyContent);
  }

  renderContent(historyContent);
}

/* function convertmode(bool)
{
  var len = $historyTab.text().length;

  if (len !== 0)
  {
  // deletes the x at the end and turns it into text to render
    var hist = $historyTab.html().splitter("</b>");
    hist = deleteAllXHtml(hist);
    hist = htmlToText($historyTab,hist);

    if (hist[0] == " ")
    {
      hist = hist.split("");
      hist.splice(0,1);
    }

    hist = noTwoBlank(hist);

    // whole

    if (!bool)
    {
      hist = groupNumbers(hist);
      var equalInd = returnAllIndex(hist,"=",true);
      var ind = [];

      for (var i = 0; i < equalInd.length; i++)
      {
        ind.push(equalInd[i]+1);
      }
    }

    // single
    else if (len !== 0)
    {
      var equalInd = returnAllIndex(hist,"=",true);
      var breakInd = returnAllIndex(hist," ", true);
      var ind = [];

      if (equalInd.length > breakInd.length)
      {
        breakInd.push(hist.length);
      }

      for (var i = 0; i < equalInd.length; i++)
      {
        var difference = breakInd[i] - equalInd[i];

        for (var j = 1; j < difference; j++)
        {
          ind.push(equalInd[i]+j);
        }
      }
    }
  }

  var cont = renderLoop(hist,ind,true); // reinserts content without x
  cont = cont.splitter("</b>");
  cont = renderX(cont); // reinsert all the x back
  cont = cont.concat("</div>");
  $historyTab.html(cont.join(""));
  exitLineEvent();
  historyEventClick();
}

*/