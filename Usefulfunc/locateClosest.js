function closestIndexOfAnElement(arr,pos,elem)
{
  for (var i = pos; i < arr.length; i++)
  {
  	if (arr[i] == elem)
  	{
  	  return i;
  	}
  }
}