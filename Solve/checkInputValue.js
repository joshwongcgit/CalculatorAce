var numberLength = 30;
var signLength = 28;
var lnLength = 28;
var logLength = 29;
var powerLength = 22;
var rootLength = 28;
var threeLetterTrigLength = 30;
var fourLetterTrigLength = 31;
var fiveLetterTrigLength = 32;
var parenthesesLength = 29;

var numbersAndThreeTrig = ['0','1','2','3','4','5','6','7','8','9','0','sin','cos','tan','cos','sec','cot','csc'];
var signsAndLnAndRoot = ['+','-',multiplyChar,divideChar,'ln',rootChar,cubeRootChar];
var logAndParen = ['log','(',')'];
var powerOnly = ['^'];
var fourLetterTrig = ['asin','acos','atan','asec','acot','acsc','sinh','cosh','tanh','sech','csch','coth'];
var fiveLetterTrig = ['asinh','acosh','atanh','asech','acsch','acoth'];

function combineNumbersOnly()
{
  var equation = $currentCalc.text().split('');
  var regexp = /[0-9,.]*/g;
  var newForm = $currentCalc.text().match(regexp);
  var historyText = $historyTab.html().split('');

  // turn all consecutive number elements into one element
  for (var i = 0; i < newForm.length; i++)
  {
    if (newForm[i] !== '')
    {
      var length = newForm[i].length;
      equation.splice(i,length,newForm[i]);
    }
  }

  // goes through the newly formed array and checks for each element.
  // examines if the element is big enough.
  for (var i = 0; i < equation.length; i++)
  {
    var currentCalculation = $currentCalc.text();
    var answer = equation[i];
    checkAnswerValue(answer);

    if (shortenAnswer)
    {
      // the element needs change
      var position = i;  // the text position of the current calculation without any html
      var startingPosition = 0;
      var inputLength = answer.length;

      for (var i = 0; i < position; i++)
      {
        if (numbersAndThreeTrig.includes(currentCalculation[i]))
        {
          startingPosition += numberLength;
        }

        if (signsAndLnAndRoot.includes(currentCalculation[i]))
        {
          startingPosition += signLength;
        }

        if (logAndParen.includes(currentCalculation[i]))
        {
          startingPosition += logLength;
        }

        if (powerOnly.includes(currentCalculation[i]))
        {
          startingPosition += powerLength;
        }

        if (fourLetterTrig.includes(currentCalculation[i]))
        {
          startingPosition += fourLetterTrigLength;
        }

        if (fiveLetterTrig.includes(currentCalculation[i]))
        {
          startingPosition += fiveLetterTrigLength;
        }
      }

      if (historyText.lastIndexOf('<br>') !== -1)
      {
        var positionOfBr = historyText.lastIndexOf('<br>');
        var totalPosition = positionOfBr + startingPosition;
      }

      else
      {
        var totalPosition = startingPosition;
      }

      var deletionLength = inputLength*numberLength   // numberLength = 30

      historyText.splice(totalPosition,deletionLength,shortenInputsWithHTML); // something wrong with this
      var newStringHistoryText = historyText.join('');

      $historyTab.html(newStringHistoryText);
    }

  }
}
