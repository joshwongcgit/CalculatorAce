// used for solving only

// [1,,,3.2,0,+,4,5,l,o,g,(,7,8)] becomes [1320,+,45,log] 
function combineNumbersTogether(str)
{
  var equation = addParenAtEnd();
  equation = stripCommas(equation);
  equation = groupNumbers(equation);
  equation = groupLetters(equation);
  return equation;
}

function changeE()
{
  var txt = $currentCalc.text();
  txt = stripCommas(txt).join("");
  var equation = combineNumbersTogether(txt);

  return equation;
}

// alert(splitPowerWithNumbers(["5","4","^2","9"])
function groupTrigWithNegativeOne(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (shortenTrigArray.includes(arr[i]) && arr[i+1] == "-" && arr[i+2] == "1")
    {
      arr[i+1] = arr[i+1].concat(arr[i+2]);
      arr[i]= arr[i].concat(arr[i+1]);
      arr.splice(i,3,arr[i]);
    }

    if (arr[i] == "log" && arr[i+1] != undefined)
    {
      if (arr[i+1].includes("2"))
      {
        arr[i] = arr[i].concat("2");
        arr.splice(i,2,arr[i]);
      }
    }
  }
    return arr;
}

function addMultiplyOnSpecialFunc()
{
  var equation = changeE();
  equation = groupTrigWithNegativeOne(equation);
  
  for (var i = 0; i < equation.length; i++)
  {
    var first = equation[i];
    var second = equation[i+1];

    if (first !== " ")
    {
      if (!isNaN(first) && shortenTrigArray.includes(second))
      {
        equation.splice(i+1,0,"*");
      }

      if (!isNaN(first) && shortenLogArray.includes(second))
      {
        equation.splice(i+1,0,"*");
      }

      if (!isNaN(first) &&  shortenRootArray.includes(second))
      {
        equation.splice(i+1,0,"*");
      }

      if (!isNaN(first) && second == "(")
      {
        equation.splice(i+1,0,"*");
      }

      if (first == ")" && second  == "(")
      {
        equation.splice(i+1,0,"*");
      }
    }
  }
  
    return equation;
}

function powerNegatives(equation)
{
  for (var i = 0; i < equation.length; i++)
  {
    if (equation[i] == "^" && equation[i+1] == "-" && equation[i+2] !== "(")
    {
      var newNumber = -equation[i+1];
      equation.splice(i+1,2,newNumber);
    }
  }
}