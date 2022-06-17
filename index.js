$(document).ready(function()
  { 
    $('.addTab').off().click(function()
  {
    newEquation();
  });
   
  var newTab = false;

  $('#historyInputs').empty();
  newEquation();

  $('.exitResult, .clearBtn').click(function()
  {
    $currentCalc.empty();
    $instantAnswer.empty();
    equalPressed = true;
    equalArray[activeTabNumber] = true;
  });

  $('.exitHistory').click(function()
  {
    $historyTab.empty();
  });

  $(".functionTabs li a ").click(function()
  {

  });
});
