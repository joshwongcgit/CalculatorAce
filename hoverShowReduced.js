$('.number').off().hover(function()
{
  var num = $(this).attr("data-index");
  var ind = storeInd.indexOf(num);

  if (ind !== -1)
  {
    var fullAnswer = storeFullAnswer[ind];
    $(this).attr("");
    $(this).attr("title",fullAnswer);
  }
});
