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
  $(".tabby li a input").click(function()
  {
    $(this).blur();
  });

  $(".tabby li a input").dblclick(function()
  {
    $("#nameTab").modal("show");
    tabBeingFocused = true;
    $("#nameTab input").focus();
    alert($("#nameTab input").is(":focus"))
    $currentCalc.blur();

  });

  $(".tabby li a input").blur(function()
  {
    $(this).css("color","transparent");
    $currentCalc.focus();
    tabBeingFocused = false;
  });
}
