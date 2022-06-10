$('.number').off().hover(function()
{
  // checks the index number of the number
  var num = $(this).attr("data-index");
  var ind = storeInd.indexOf(num);

  if (ind !== -1)
  {
    var fullAnswer = storeFullAnswer[ind];
    $(this).attr("data-toggle","tooltip");
    $(this).attr("title",fullAnswer);
  }
});

var hist = $historyTab.html().splitter("</b>");

for (var i = 0; i < hist.length; i++)
{
  if ()
  {

  }
}
