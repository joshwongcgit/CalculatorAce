function checkViableEq(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] == "^" && arr[i+1] == undefined)
    {
      return false;
    }

    if (arr[i] == "(" && (arr[i+1] == undefined || arr[i+1] == " "))
    {
      return false;
    }

    if (signArray.includes(arr[i]) && arr[i+1] == undefined)
    {
      return false;
    }
  }
    return true;
}

function addParenthesesToFunc(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (shortenTrigArray.includes(arr[i]) || shortenLogArray.includes(arr[i]) || shortenRootArray.includes(arr[i]))
    {
      arr.splice(i+1,0,"(")

    }
  }
    return arr;
}

