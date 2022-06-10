var autoClear = false;
var tabAutoClear = false;

$('.settings').click(function()
{
  currentPreferences = $('input:checked');
});

$('.apply').click(function()
{
  checkPreferences();
});

$('.cancel').click(function()
{
  revertBack();
});

$('#preferencesX').click(function()
{
  revertBack();
});

$(".resetSetting").click(function()
{
  $('.prefer input:first-child').prop('checked',true);
})

function revertBack()
{
  currentPreferences.prop('checked',true);
}

function checkPreferences()
{
  if ($('#showCurrentAnswer').prop('checked'))
  {
    $instantAnswer.show();
  }

  else if ($('#hideCurrentAnswer').prop('checked'))
  {
    $instantAnswer.hide();
  }

  if ($('#showConsole').prop('checked'))
  {
    showConsole = true;
  }

  else if ($('#hideConsole').prop('checked'))
  {
    showConsole = false;
  }

  if ($('#nonFriendlyButtons').prop('checked'))
  {
    $(".wordbuttons button").css("display","none");
    $(".coolie").css("display","block");
    $(".coolie2").css("display","block");
  }

  else if ($('#friendlyButtons').prop('checked'))  //
  {
    $(".wordbuttons button").css("display","block");
    $(".coolie").css("display","none");
    $(".coolie2").css("display","none");
  }

  if ($('#showHistory').prop('checked'))
  {
    historyHide = false;
    $('#historySection').show();
    $historyTab.show();
  }

  else if ($('#hideHistory').prop('checked'))
  {
    $historyTab.hide();
    historyHide = true;
  }

  else if ($('#hideWholeHistory').prop('checked'))
  {
    $('#historySection').hide();
  }

  if ($('#alertmessagesauto').prop('checked'))
  {
    autoDisappear = true;
  }

  else if ($('#alertmessagemanual').prop('checked'))
  {
    autoDisappear = false;
  }

  if ($('#manually').prop("checked"))
  {
    eraseManual = true;
    eraseEveryTime = false;
    eraseEveryEight = false;
  }

  else if ($("#autoclearEvery").prop("checked"))
  {
    eraseManual = false;
    eraseEveryTime = true;
    eraseEveryEight = false;
  }

  else if ($("#autoclearFull").prop("checked"))
  {
    eraseManual = false;
    eraseEveryTime = false;
    eraseEveryEight = true;
  }

  newPreferences()
}

function newPreferences()
{
  currentPreferences = $('input:checked');
}
