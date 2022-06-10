// used for solving only

// [1,,,3.2,0,+,4,5,l,o,g,(,7,8)] becomes [1320,+,45,log] 
function combineNumbersTogether(str)
{
  var storage = addParenAtEnd();
  storage = stripCommas(storage);
  storage = groupNumbers(storage);
  storage = groupLetters(storage);
  return storage;
}

function changeE()
{
  var txt = $currentCalc.text();
  txt = stripCommas(txt).join("");
  var storage = combineNumbersTogether(txt);

  for (var i = 0; i < storage.length; i++)
  {
    if (storage[i] == "e")
    {
      storage[i] = Math.E;
    }
  }
    return storage;
}

function addMultiplyOnSpecialFunc()
{
  var storage = changeE();
  storage = groupTrigWithNegativeOne(storage);
  
  for (var i = 0; i < storage.length; i++)
  {
    var first = storage[i];
    var second = storage[i+1];

    if (first !== " ")
    {
      if (!isNaN(first) && shortenTrigArray.includes(second))
      {
        storage.splice(i+1,0,"*");
      }

      if (!isNaN(first) && shortenLogArray.includes(second))
      {
        storage.splice(i+1,0,"*");
      }

      if (!isNaN(first) &&  shortenRootArray.includes(second))
      {
        storage.splice(i+1,0,"*");
      }

      if (!isNaN(first) && second == "(")
      {
        storage.splice(i+1,0,"*");
      }

      if (first == ")" && second  == "(")
      {
        storage.splice(i+1,0,"*");
      }
    }
  }
  
    return storage;
}

function powerNegatives(storage)
{
  for (var i = 0; i < storage.length; i++)
  {
    if (storage[i] == "^" && storage[i+1] == "-" && storage[i+2] !== "(")
    {
      var newNumber = -storage[i+1];
      storage.splice(i+1,2,newNumber);
    }
  }
}