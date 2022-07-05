function clearEntire()
{
  if ($historyTab.text().length < 1)
  {
	EverythingClearError();
  }

  else
  {
	$currentCalc.empty();
  }
}

$('.clearEntire').off().click(function()
{
  clearEntire();
});

function emptyBoth()
{
  $currentCalc.empty();
  $historyTab.empty();
}

function startFromEmpty()
{
  $historyTab.append('');
  $instantAnswer.text('');
}
