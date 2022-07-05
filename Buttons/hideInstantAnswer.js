var hideAnswer = false;

$('.hideAnswer').off().click(function()
{
  hideTheAnswer();
});

function hideTheAnswer()
{
  if (hideAnswer)
  {
    $instantAnswer.show();
    $('.currentAnswer').show();
    hideAnswer = false;
  }

  else if (!hideAnswer)
  {
    $instantAnswer.hide();
    $('.currentAnswer').hide();
    hideAnswer = true;
  }
}

currentCalc.keydown(function(event)
{
  if (event.keyCode == 90)
  {
    hideTheAnswer();
  }
});
