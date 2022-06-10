var tabBeingFocused = false;
var textBeingFocused = false;

function enableAutoFocus()
{
  $currentCalc.on("blur", function()
  {
    var position = $currentCalc.caret("pos")
    if (!tabBeingFocused)
    {
      setTimeout(function()
      {
        $currentCalc.focus();
        $currentCalc.caret("pos",position);
      },0);
    }
  });
}

function renamingTab()
{
  $(".tabby li a input").keydown(function(evt)
  {
    if (evt.keyCode == "13")
    {
      $(".tabby li a input").blur();
      $currentCalc.focus();
    }
  })

  $(".tabby li a input").click(function()
  {
      $(this).blur();
  });

  $(".tabby li a input").dblclick(function()
  {
    tabBeingFocused = true;
    $(this).focus();
    $(this).css("color","black");
  });

  $(".tabby li a input").blur(function()
  {
    $(this).css("color","transparent");
    $currentCalc.focus();
    tabBeingFocused = false;
  });
}
