$('.degree').css("background-color","#e6f5f5");

$(".trigswitch").click(function()
{
  var mode = $(this).val();

  if ($(this).css("background-color") == "rgb(230, 245, 245)")
  {
    if (mode == "Deg")
    {
      // degreeError();
    }

    else if (mode == "Rad")
    {
      // radianError();
    }
  }

  else
  {
    $(this).css("background-color","#e6f5f5");
  }

  if (mode == "Deg")
  {
    $(".radian").css("background-color","");
    $trigTab.html('Deg');
  }

  else if (mode == "Rad")
  {
    $(".degree").css("background-color","");
    $trigTab.html('Rad');
  }
    answer = getAnswer();
    $instantAnswer.html(answer);
});

function radianMode(after)
{
  if ($(".trigMode").text() == "Rad")
  {
    after = after*(Math.PI/180);
  }
    return after;
}

function radianModeForArcTrig(answer)
{
  if ($(".switchMode") == "Deg")
  {
    answer = answer*57.2957795131;
  }
    return answer;
}

function makeAnswerZero(answer)
{
  if (answer <= 0.000001 && answer > -0.0000001)
  {
    answer = 0;
  }
    return answer;
}
