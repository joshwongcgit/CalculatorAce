var historyHide;
var listOfTabNumbers = [1,2,3,4,5,6];
var $storeHistory;

// switch tabs
function activeTab()
{
  $('.tabby li a ').off().click(function()
  {
    $(".historyTab").removeClass("active")
    var value = $(this).attr("data-value");
    $(".historyTab" + value).addClass("active");

    tabObjects(value);
  });
}

function tabObjects(value)
{
  $currentCalc = $(".resultTab" + value);
  $instantAnswer = $(".instantAnswerTab" + value);
  $historyTab = $(".historyTab" + value);

  getData(value);
}

function getData(value)
{
  var len = $currentCalc.text().split("").length;
  $currentCalc.caret("pos",len);
  $currentCalc.focus();

  var bool = equalArray[value];

  if (bool)
  {
    equalPressed = true;
  }

  else
  {
    equalPressed = false;
  }
}

/*
function tabSwitch(elem)
{
  alert("3")
  // reads the tab number after clicking on a tab
  if (elem !== "up" && elem !== "down")
  {
    var tabNumber = elem.attr('data-value');
  }

  else if (elem == "down")
  {
    var $activeTab = $('.tabby li.active');
    var id = $activeTab.children("a").attr("data-value");
		var $prevTab = $activeTab.prev();
		var tabNumber = $prevTab.children("a").attr("data-value");
    $activeTab.removeClass("active");
    $prevTab.addClass("active");
    $("#free #tabNumber" + tabNumber).addClass("active");
    $("#free #tabNumber" + id).removeClass("active");
  }

  else if (elem == "up")
  {
    var $activeTab = $('.tabby li.active');
    var id = $activeTab.children("a").attr("data-value");
		var $nextTab = $activeTab.next();
		var tabNumber = $nextTab.children("a").attr("data-value");
    $activeTab.removeClass("active");
    $nextTab.addClass("active");
    $("#free #tabNumber" + tabNumber).addClass("active");
    $("#free #tabNumber" + id).removeClass("active");
  }
    processSwitching(tabNumber);
    hideHistoria();
    resultSwitch();
    checkPreferences();
}

*/

$('.addTab').off().click(function()
  {
    newEquation();
  });

// adds a tab
function addTab()
{
  $('.addTab').off().click(function()
  {
    newEquation();
  });

  $('.tabby #addTab').hover(function()
  {
    $(this).css('cursor','pointer');
  });
}

// the elements are inserted into the right tab


// hide history section
function hideHistoria()
{
  if (historyHide)
  {
    $historyTab.hide();
  }

  else
  {
    $historyTab.show();
  }
}


// deletes the tab
function removeTab()
{
  $('.exitTab').off().on('click',function(event)
  {
    if (listOfTabNumbers.length == 1)
    {
      $(".addingTab").append("<span class = 'addTab'> + </span>")
    }

    var thisTab = $(this);
    tabRemoval(thisTab);  
  });
}

// deleting tab 
function tabRemoval(thisTab)
{
  // if there is one tab left, cannot delete
  if (listOfTabNumbers.length == 5)
  {
    noTabError();
  }

  else
  {
    var $activeTab = $('.tabby li.active');
    var previousTabLength = $activeTab.prev().length;
    var tabNumber = $activeTab.children('a').attr('data-value');
    var hrefValue = "#tabNumber" + tabNumber;

    if (thisTab !== undefined)
    {
      // gets the tab number and remove it and queues it
      var tabNumberNumber = thisTab.parent().attr('data-value');
    }

    else
    {
      var tabNumberNumber = tabNumber;
    }

    // deletes a non active tab
    if (tabNumber !== tabNumberNumber)
    {
      var tabNumber = thisTab.parent().attr('data-value');
      $('#tabNumber' + tabNumber).remove();
    }

    // deleting the active tabs transfer active status to the tab left of it
    else if (previousTabLength == 1)
    {
      $(".tab" + tabNumber).remove();
      $(".historyTab" + tabNumber).remove();
      $(".result" + tabNumber).remove();

      var $prevTab = $activeTab.prev();
      $prevTab.addClass('active');
      var prevTabNumber = $prevTab.children('a').attr('data-value');
      $('#tabNumber' + prevTabNumber).addClass('active');

      $(".result" + prevTabNumber).addClass("active");
      $(".historyTab" + prevTabNumber).addClass("active");

      tabObjects(prevTabNumber);

      hideHistoria();
    }

    // deleting the active tabs transfer active status to the tab right of it
    else
    {

      $(".tab" + tabNumber).remove();
      $(".historyTab" + tabNumber).remove();
      $(".result" + tabNumber).remove();
    
      var $nextTab = $activeTab.next();
      $nextTab.addClass('active');
      var nextTabNumber = $nextTab.children('a').attr('data-value');
      $('#tabNumber' + tabNumber).addClass('active');
      hideHistoria();


      $(".tab" + nextTabNumber).addClass("active");
      $(".historyTab" + nextTabNumber).addClass("active");
    }

    if (thisTab !== undefined)
    {
      thisTab.parent().parent().remove();
    }

    else
    {
      $activeTab.remove();
    }

    listOfTabNumbers.push(tabNumberNumber);
    listOfTabNumbers.sort();

    // erases the + next to each tab, then add a + on the last child tab again and position it
    $('#addTab').remove();
    addTab();
    checkPreferences();
    // if you exit an active tab, the one left to it will have an active
  }
}

// $(".tabby").sortable(
// {
 //  revert: true,
//   tolerance:"pointer"
// });

$(".tabby li a> input").not(".tabby .exitTab").draggable(
{
  connectToSortable: "#sortable",
  helper: "clone",
  revert: "invalid"
});
