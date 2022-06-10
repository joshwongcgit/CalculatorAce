$(".switchMode").click(function()
{
  var ans = $(this).html();

  if (ans == "Deg")
  {
    $(this).html("Rad");
  }

  else
  {
    $(this).html("Deg")
  }

  if (!$currentCalc.text()[$currentCalc.text().length-1] == powa)
  {
    renderAnswers();
  }
});
