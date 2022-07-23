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

  return storage;
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