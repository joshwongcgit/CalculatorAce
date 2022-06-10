// returns an index stating number that matches the regexp at some point
Array.prototype.lookFor = function(value,fromIndex)
{
  if (fromIndex == undefined)
  {
    fromIndex = 0;
  }

  for (var i = fromIndex; i < this.length; i++)
  {
    if (this[i].search(value) !== -1)
    {
      return i;
    }
  }
    return -1;
}

Array.prototype.lastIndexMatch = function(value)
{
  for (var i = this.length-1; i >= 0; i--)
  {
    if (this[i].search(value) !== -1)
    {
      return i;
    }
  }
    return -1;
}

Array.prototype.splitWithBlank = function()
{
  for (var i = 0; i < this.length; i++)
  {
    if (this[i].length > 1)
    {
      var arr = this[i].split("");

      this.splice(i,1);

      for (var j = arr.length-1; j>= 0; j--)
      {
        this.splice(i,0,arr[j])
      }
    }
  }

  for (var k = 0; k < this.length; k++)
  {
    if (this[k] == "" && this[k+1] == " ")
    {
      this.splice(k,2);
    }
  }
    return this;
}

// looks for the last index of a group of letters in an array (does not have to match whole thing)
Array.prototype.lastIndexOfSearch = function(value)
{
  for (var i = this.length-1; i >= 0; i--)
  {
    if (this[i].search(value) !== -1)
    {
      return i;
    }
  }
    return -1;
}

String.prototype.arrSearch = function(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (this.includes(arr[i]))
    {
      return true;
    }
  }
}

// splits a string and puts it to the end
String.prototype.splitter = function(delimiter)
{
  var splitted = this.split(delimiter);

  for (var i = 0; i < splitted.length-1; i++)
  {
    if (i !== splitted.length-1)
    {
      splitted[i] = splitted[i] + delimiter;
    }
  }
    return splitted;
}

String.prototype.splitFromBegin = function(delimiter)
{
  var splitted = this.split(delimiter);

  for (var i = 0; i < splitted.length-1; i++)
  {
    splitted[i] = delimiter + splitted[i+1];
  }
    splitted.pop();
    return splitted;
}

// remove commas from answers
function stripCommasFromAnswer(answer)
{
  var answer = answer.toString();
  answer = answer.split("");

  for (var i = 0; i < answer.length; i++)
  {
    if (answer[i] == ",")
    {
      answer.splice(i,1);
    }
  }
    answer = answer.join("");
    return answer;
}

// returns an array containing the index position
function lookForOccurence(arr,val)
{
  var indexArr = [];

  for (i = 0; i < arr.length; i++)
  {
    if (arr[i].search(val) !== -1)
    {
      indexArr.push(i);
    }
  }
    return indexArr;
}

function replaceElement(arr,elem,newElem)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] == elem)
    {
      arr[i] = newElem;
    }
  }
    return arr;
}

// if bool is true, then it has to match all
function returnAllIndex(arr,str,bool)
{
  var ind = [];

  if (bool)
  {
    for (var i = 0; i < arr.length; i++)
    {
      if (arr[i] == str)
      {
        ind.push(i);
      }
    }
  }

  else
  {
    for (var i = 0; i < arr.length; i++)
    {
      if (arr[i].search(str) !== -1)
      {
        ind.push(i);
      }
    }
  }

  if (ind.length !== 0)
  {
    return ind;
  }

    ind.push(arr.length+1);
    return ind
}
