function dragIt()
{
  $historyTab.sortable(
  {
    revert: true,
    tolerance:"pointer"
  });

  $historyTab.find(".sepEqs").draggable(
  {
    connectToSortable: $historyTab
  });
}

function renderScrolling()
{
 
  $historyTab.scrollTop(50000000);

  if (!equalPressed)
  {
  //alert($currentCalc.text().split(""))
    $currentCalc.scrollLeft(2000000);
  }
}

function initiatePostRenderEvents()
{
      /*var newContentLength = value.length;

      if (trigArray.includes(value) || logArray.includes(value) || rootArray.includes(value))
      {
        newContentLength++;
      }
  */
  resetBoolType();
  deleteLines();
  historyClicking();
  initiateKeydown();  
  autofocus();
  //renderScrolling();
}

function renderContent(content,value) 
{
  $(".historyInputs").scrollTop(50000000);

  if ($digitTab.text() == "Single")
  {
      var elemArr = [];
      var singleDigitArr = [];

      for (var i = 0; i < content.length; i++)
      {
        var elem = content[i];

        if (numericArray.includes(elem[0]))
        {
          elemArr = elem.split("");

          for (var k = 0; k < elemArr.length; k++)
          {
            singleDigitArr.push(elemArr[k]);
          }
        }

        else
        {
          singleDigitArr.push(elem)
        }
      }
        content = singleDigitArr;
    }

     var str = "";

     for (var i = 0; i < content.length; i++)
     {
        var elem = content[i];
      
        if (i == 0)
        {
          str = str.concat("<div class = 'sepEqs'>");
        }

        if ((elem == "" || elem == " ") && switchedDigits)
        {
          str = str.concat("</div> <div class = 'sepEqs'>");
        }

        if (numericArray.includes(content[i].split("")[0]))
        {
          str = str.concat("<b class = 'number'>" + elem + "</b>");
        }

        if (signArray.indexOf(elem) != -1)
        {
          if (elem == multiplyChar && (content[i+1] == " " || content[i+1] == undefined) && switchedDigits)
          {
            str = str.concat("<b class ='exitLine'>&times;</b>")
          }

          else
          {
            str = str.concat("<b class = 'sign'>" + elem + "</b>");
          }
        }

        if (elem == ",")
        {
          str = str.concat('<b class = "commas">&comma;</b>');
        }

        else if (pi.indexOf(elem) != -1)
        {
          str = str.concat('<b class = "pieInHistory">' + elem + '</b>');
        }

        /*if (elem == " ")
        {
          str = str.concat("<b class ='exit'data-no ="+ number +">&times;</b></div> <div class = 'sepEqs'>");
          number++;
        } */

        // checks if the answers needs to be reduced

        else if (elem == "-")
        {
          str = str.concat("<b class = 'negative'>" + elem + "</b>");
        }

        else if (elem == "=")
        {
          str = str.concat("<b class = 'equal'>" + elem + "</b>");
        }

        else if (elem == ".")
        {
          str = str.concat('<b class = "decimal">' + elem + '</b>');
        }

        else if (elem == "!")
        {
          str = str.concat('<b class = "factorial">!</b>');
        }

        else if (parenArray.includes(elem))
        {
          str = str.concat('<b class = "paren">' + elem + '</b>');
        }

        else if (elem == ")")
        {
          str = str.concat('<b class = "paren">' + elem + '</b>');
        }

        else if (powerArray.indexOf(elem) !== -1)
        {
          str = str.concat('<b class = "power">' + elem + '</b>');
        }

        else if (shortenLogArray.indexOf(elem) !== -1)
        {
          if (elem == "log" || elem == "ln")
          {
            str = str.concat('<b class = "log">' + elem + '</b>');
          }

          else if (elem == "log2")
          {
            str = str.concat('<b class = "log">log<sub>2</sub></b>');
          }
            str = str.concat('<b class = "paren">(</b>')
        }

        else if (shortenRootArray.indexOf(elem) !== -1)
        {
          str = str.concat('<b class = "root">' + elem + '</b>');
          str = str.concat('<b class = "paren">(</b>')
        }

        else if (shortenTrigArray.indexOf(elem) !== -1)
        {
          if (shortenInverseTrigArray.includes(elem))
          {
            elem = elem.slice(0,elem.length-2)
            str = str.concat('<b class = "trig">' + elem + '<sup>-1</sup></b>');
          }

          else
          {
            str = str.concat('<b class = "trig">' + elem + '</b>');
          }
            str = str.concat('<b class = "paren">(</b>')
        }

        // it says 1,234 does not belong here but it should
        /*if ((!isNaN(elem) || (elem.includes(",") && elem.arrSearch(numericArray)) || elem == "0") && !ind.includes(i))
        {
          str = str.concat("<b class = 'number'>" + elem + "</b>");
        } */
        
      }

        if (switchedDigits)
        {
          $historyTab.empty();
          str = str.concat("</div> ")
          $historyTab.html(str);
          switchedDigits = false;
        }

        else
        {            
          $currentCalc.html(str);
          answer = getAnswer();
       
          answer = addCommas(answer);
          
          var textContent = $currentCalc.text();
          var textLength = textContent.length;
          
          if (textContent[textLength-1] == "(" || answer == "NaN" || textLength < 1)
          {
            $instantAnswer.html("");
          }

          else
          {
            $instantAnswer.html(answer);
          }

          var historyContent = $historyTab.html().splitFromBegin('<div class="sepEqs">');
          var historyContentLength = historyContent.length;
          
          historyContent.splice(historyContentLength-1,1,str);
          historyContent = historyContent.join("");

          if (textLength >= 1)
          {
            historyContent = historyContent.concat("<b class ='exitLine'>&times;</b></div> ");
          }
        
          $historyTab.html(historyContent); 
        } 

        renderScrolling();
        caretRelocating();
        initiatePostRenderEvents(); 
  }
