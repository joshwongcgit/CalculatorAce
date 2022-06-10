var needed;

function filterMultiAndDivide()
{
  var storage = $currentCalc.text().split('');

  for (var i = 0; i < storage.length; i++)
  {
    if (storage[i] == multiplyChar)
    {
      storage[i] = "*";
    }

    if (storage[i] == divideChar)
    {
      storage[i] = "/";
    }

    if (storage[i] == pieChar)
    {
      storage[i] = Math.PI.toString();
    }
  }
    return storage;
  }

function addParenAtEnd()
{
  var storage = filterMultiAndDivide();
  open = 0;
  close = 0;

  for (var j = 0; j < storage.length; j++)
  {
    if (storage[j] == "(")
    {
      open++;
    }

    else if (storage[j] == ")")
    {
      close++;
    }
  }

  needed = open - close;
  
  if (needed > 0)
  {
    for (var i = 0; i < needed; i++)
    {
      storage.push(')');
    }
  }
    return storage;
}