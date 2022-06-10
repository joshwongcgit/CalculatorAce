// str will be an array;
// instead of adding stuff to hiddenAnswer with every action, it will not clone app.answer.value, then run a for loop to evaluate

function negAfterMinus()
{
  var storage = withoutParen();

  for (var i = 0; i < storage.length-1; i++)
  {
    if (storage[i] == "-" && storage[i+1].includes("-"))
    {
      storage[i] = "+";
      storage[i+1] = -storage[i+1];
    }
  }
      return storage;
}

function convertNumberToString()
{
  var storage = negAfterMinus();

  for (var i = 0; i < storage.length; i++)
  {
    if (typeof(storage[i]) == "Number");
    {
      storage[i] = storage[i].toString();
    }
  }
    return storage;
}

// returns a answer in string with commas
function getAnswer()
{
  var storage = convertNumberToString();
  
  for (var i = 0; i < storage.length; i++)
  {
    if (storage[i].search(","))
    {
      var split = storage[i].split("");

      for (var j = 0; j < split.length; j++)
      {
        if (split[j] == ",")
        {
          split.splice(j,1);
        }
      }
        storage[i] = split.join("");
    }
  }

  answer = solver(storage);
  //answer = addCommas(answer);

  return answer;
}

function removeCommas(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i].includes(","))
    {
      arr.splice(i,1);
    }
  }
    return arr;
}


