function historyEventClick()
{
  $historyTab.find(".number, .answer").hover(function()
  {
    $(this).css("background-color","#ed6200");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });

  $historyTab.find(".number, .answer").click(function()
  {
    var clicker = $(this).text();
  	processNumber(clicker);
  });

  $historyTab.find(".sign").hover(function()
  {
    $(this).css("background-color","#0649d8");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });

  $historyTab.find(".sign").click(function()
  {
    var signal = $(this).text();
    processSign(signal);
  });

  $historyTab.find(".negative").click(function()
  {
    var signal = $(this).text();
    processNeg(signal);
  });


  $historyTab.find(".log").hover(function()
  {
    $(this).css("background-color","#364051");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });

  $historyTab.find(".log").click(function()
  {
    var logie = $(this).text();
    processLog(logie);
  });

  $historyTab.find(".trig").hover(function()
  {
    $(this).css("background-color","#87ff8f");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });


  $historyTab.find(".trig").click(function()
  {
    var trigie = $(this).text();
    processTrig(trigie);
  });

  $historyTab.find(".pieInHistory").hover(function()
  {
    $(this).css("background-color","#dbad53");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });


  $historyTab.find(".pieInHistory").click(function()
  {
    var pie = $(this).text();
    pieOptions(pie);
  });

  $historyTab.find(".power").hover(function()
  {
    $(this).css("background-color","#82fff0");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });


  $historyTab.find(".power").click(function()
  {
    var powa = $(this).text();
    processPower(powa);
  });

  $historyTab.find(".paren").hover(function()
  {
    $(this).css("background-color","#f882ff");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });


  $historyTab.find(".paren").click(function()
  {
    var paren = $(this).text();
		processParen(paren);
  });

  $historyTab.find(".decimal").hover(function()
  {
    $(this).css("background-color","black");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });


  $historyTab.find(".decimal").click(function()
  {
    processDecimals(deci);
  });

  $historyTab.find(".equal").hover(function()
  {
    $(this).css("background-color","#af0ad1");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },
  function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });

  $historyTab.find(".equal").click(function()
  {
    equalButton();
  });

  $historyTab.find(".root").hover(function()
  {
    $(this).css("background-color","pink");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },
  function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });

  $historyTab.find(".root").click(function()
  {
    var rootChar = $(this).text();
    processRoot(rootChar);
  });

  $historyTab.find(".factorial").hover(function()
  {
    $(this).css("background-color","red");
    $(this).css("border-width","1px");
    $(this).css("border-color","black");
    $(this).css("border-style","solid");
  },
  function()
  {
    $(this).css("background-color","");
    $(this).css("border-width","");
    $(this).css("border-color","");
    $(this).css("border-style","");
  });

  $historyTab.find(".factorial").click(function()
  {
    var factorial = $(this).text();
    processFactorial(factorial);
  });
}
