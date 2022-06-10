function factorial(num)
{
  var answer = 1;

  if (num == 1 || num == 0)
  {
  	return answer;
  }


  for (var i = num; i > 1; i--)
  {
  	answer *= i;
  }
 	return answer;
}
