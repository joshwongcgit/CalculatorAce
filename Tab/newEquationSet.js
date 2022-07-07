  $('.newEquationSet').click(function()
  {
    newEquation();
  });

  function newEquation(val)
  {
      if (listOfTabNumbers.length == 2)
      {
        $(".addTab").remove();
      }

      // selects a number from 1 to 5 to name the tabs
      var tabNumber = listOfTabNumbers[0];
      var hrefValue = "#tab" + tabNumber;
      var idValue = "tab" + tabNumber;

      if (val == undefined)
      {
        $('.tabby li, #free div').removeClass('active');
      }

      // creates a tab ui and a section to append content
      // it either stays on current tab or goes on to the next tab
      if (val == "no")
      {
        $('.tabby').append('<li> <a data-toggle="tab" data-value =' + tabNumber + ' class = "tabs" href =' + hrefValue + '>  <input class = ' + tabNumber + ' maxlength = "5"/> <button class = "exitTab"> &times; </button> </a> </li>'); // make it a button
      }

      else
      {
        $('.tabby').append('<li class = "active"> <a data-toggle="tab" data-value =' + tabNumber + ' class = "tabs" href =' + hrefValue + '> <input class = ' + tabNumber + ' maxlength = "5"/> <button class = "exitTab"> &times; </button> </a> </li>');
      }

      $("input[class*=" + tabNumber +"]").val(tabNumber);

      // creates new history
      $(".historyInputs .tab-pane").removeClass("active");
      $(".historyInputs").append("<div id = " + idValue + " class = 'tab-pane active historyTab historyTab" + tabNumber + "'> </div");
      $historyTab = $('.historyTab' + tabNumber);
      $historyTab.css('font-size','20px').css('z-index','5');

      $(".digitsMode .tab-pane").removeClass("active");
      $(".digitsMode").append("<div id = " + idValue + " class = 'tab-pane active digits digitsTab digitsTab" + tabNumber + "'>Single</div>")
      $digitTab = $('.digitsTab' + tabNumber);
      $(".trigMode .tab-pane").removeClass("active");
      $(".trigMode").append("<div id = " + idValue + " class = 'tab-pane active trigTab trigTab" + tabNumber + "'> Deg </div>")
      $trigTab = $('.trigTab' + tabNumber);

      $(".resultboxMiddle  .tab-pane").removeClass("active");
      // create tab content to store calculation
      $(".resultboxMiddle").append("<div contenteditable = 'true' inputmode = 'none' id = 'calculation "  + idValue + "' class = 'tab-pane active resultTab resultTab" + tabNumber + "'> </div>");
      $currentCalc = $('.resultTab' + tabNumber);
      $currentCalc.css("outline","0px solid transparent");
      $currentCalc.focus();
      $currentCalc.css("white-space","nowrap");

      // $(".resultboxMiddle  .tab-pane").removeClass("active");
      // creates tab content to store instant answer view (current or preview answer)
      $('.resultboxMiddle').append("<div class = 'tab-pane active instantAnswerTab instantAnswerTab" + tabNumber + "'> </div>");
      $instantAnswer = $('.instantAnswerTab' + tabNumber);
      $instantAnswer.addClass('instantAnswer');
      $instantAnswer.empty();
      
      // remove the add tab gui and you can delete the new tab
      $('#addTab').remove();
      removeTab();

      listOfTabNumbers.splice(0,1);

      // if the numbers of tabs are not full
      /*if (listOfTabNumbers.length !== 0)
      {
      
        addTab();
      }

      */

      if (historyHide)
      {
        $historyTab.hide();
      }

      else
      {
        $historyTab.show();
      }
        activeTab();
        renamingTab();
        initiateKeydown();
        autofocus();
    }
  


