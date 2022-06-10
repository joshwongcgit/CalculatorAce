function solver(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] == "*")
    {
      var ans = arr[i-1]*arr[i+1];
      arr.splice(i-1,3,ans);
      i = i-1;
    }
  }

  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] == "/")
    {
      var ans = arr[i-1]/arr[i+1];
      arr.splice(i-1,3,ans);
      i = i-1;
    }
  }

  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] == "+")
    {
      var ans = Number(arr[i-1]) + Number(arr[i+1]);
      arr.splice(i-1,3,ans);
      i = i-1;
    }
  }

  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] == subtractChar)
    {
      var ans = arr[i-1]-arr[i+1];
      arr.splice(i-1,3,ans);
      i = i-1;
    }
  }



    if (typeof arr !== "string")
    {
      arr = arr.join("");
    }
      return arr;
}
