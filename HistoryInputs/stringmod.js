// remove commas in history
// returns array
function processNumbers(content)
{
  content = removeParenFromFunc(content);
  content = stripCommas(content);
  content = groupNumbers(content);
  content = addCommasToEqs(content);
  return content;
}

function removeParenFromFunc(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    var elem = arr[i];

    if ((shortenTrigArray.includes(elem) || shortenLogArray.includes(elem) || shortenRootArray.includes(elem)) && arr[i+1] == "(")
    {
      arr.splice(i+1,1);
    }
  }
    return arr;
}

function addCommasToEqs(arr)
{ 
  if (arr != undefined && arr != " " && arr != "")
  {
    var decimalLast = false;
  
    // [543,"+",6789]  -->  6789  (this is arr[arr.length-1]) --> 9  this is 

    if (arr[arr.length-1] == "" || arr[arr.length-1]  == " ")
    {
      arr.pop();
    }

    var len = arr[arr.length-1].length-1;
 
    if (arr[arr.length-1][len].includes("."))
    {
      decimalLast = true;
    }

    for (var i = 0; i < arr.length; i++)
    { 
      var content = arr[i];
    
      if (["1","2","3","4","5","6","7","8","9","0"].includes(content[0]))
      {
        arr[i] = Number(arr[i]).toLocaleString(undefined,
          {minimumFractionDigits: 0,
           maximumFractionDigits: 16});
      }
    }

    if (decimalLast)
    {
      var content = arr[arr.length-1].split("");
      content.push(".");
      content = content.join("");
      arr[arr.length-1] = content;
    }

    for (var j = 0; j < arr.length; j++)
    {
      arr[j] = arr[j].toString();
    }  
  }  
    return arr;
}

function addCommas(ans)
{
  if (typeof ans !== "string")
  {
    ans = ans.toString();
  }

  var test = ans;

  if (ans.search("e") == -1)
  {
    ans = Number(ans).toLocaleString(undefined,
          {minimumFractionDigits: 0,
           maximumFractionDigits: 16});
  }

  // if decimal is last
  if (test.toString().lastIndexOf(".") == test.length-1)
  {
    ans = ans.concat(".");
  }

    return ans;
}

function stripCommas(arr,pos)
{
  if (pos == undefined)
  {
    pos = 0;
  }

  if (typeof arr == "string")
  {
    arr = arr.split("");
  }
    
  for (var i = pos; i < arr.length; i++)
  {
    if (arr[i].includes(","))
    {
      arr.splice(i,1);
    }
  }
    return arr;
}

//alert(stripCommas(["1","2","+","1,234","+","4.238"]))

function groupNegatives(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] == "-" && !isNaN(arr[i+1]))
    {
      arr[i] = arr[i].concat(arr[i+1]);
      arr.splice(i+1,1);
    }
  }
    return arr;
}

// change from ["1","2","+"] to ["12","+"]
function groupNumbers(cont)
{
  var arr = [];

  for (var i = 0; i < cont.length; i++)
  {
    var str = cont[i];

    if (((!isNaN(str) && str !== " " && ((!isNaN(cont[i+1]) || cont[i+1] == ".") || cont[i+1] == ",") && cont[i+1] !== " ")))
    {
      str = str.concat(cont[i+1]);
      var incre = 1;

      for (var j = i+2; j < cont.length; j++)
      {
        if ((!isNaN(cont[j]) || cont[j] == "." || cont[j] == ",") && cont[j] !== " ")
        {
          str = str.concat(cont[j]);
          incre++;
        }

        else
        {
          break;
        }
      }
        i += incre;
    }
      arr.push(str);
  }

  // for 5.00e+4
  for (var x = 0; x < arr.length; x++)
  {
    if (!isNaN(arr[x]) && arr[x+1] == "e" && arr[x+2] == "+" && !isNaN(arr[x+3]))
    {
      var elem = arr.splice(x+1,3);
      arr[x] = arr[x] + elem.join("");
    }
  }
      return arr;
}

// makes ["l","o","g","2"] into ["log","2"]
function groupLetters(arr)
{
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  for (var i = 0; i < arr.length; i++)
  {
    var elem = arr[i];
    var elemTwo = arr[i+1]

    if (alphabet.includes(elem) && alphabet.includes(elemTwo))
    {
      arr[i] = arr[i].concat(arr[i+1]);
      arr.splice(i+1,1);

      for (var j = i+1; j < arr.length; j++)
      {
        if (alphabet.includes(arr[j]))
        {
          arr[i] = arr[i].concat(arr[j]);
          arr.splice(j,1);
          j--;
        }

        else
        {
          break;
        }
      }
    }
  }
    return arr;
}

// make ["sin","-","1","(","3"] into ["sin-1","(","3"]
function groupSomeNumbersWithLetters(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i+1] != undefined)
    {
      // ["log","2","*"] turns to ["log2","*"]
      if (arr[i] == "log" && arr[i+1] == "2")
      {
        arr[i] = arr[i].concat(arr[i+1]);
        arr.splice(i+1,1);
      }

      //  ["sin","-","1"] turns to ["sin-1"]
      else if (trigWithoutInv.includes(arr[i]) && arr[i+1] == "-" && arr[i+2] == "1")
      {
        arr[i] = arr[i].concat(arr[i+1]);
        arr[i] = arr[i].concat(arr[i+2]);
        arr.splice(i+1,2);
      }

      // if [sin,"-1"]
      else if (trigWithoutInv.includes(arr[i]) && arr[i+1].includes("-1"))
      {
        arr[i] = arr[i].concat(arr[i+1]);
        arr.splice(i+1,1);
      }
    }
  }
    return arr;
}

function splitPowerWithNumbers(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i].includes("^") && arr[i].length > 1)
    {
      var power = arr[i][1];
      arr[i] = "^";
      arr.splice(i+1,0,power);
    }
  }
    return arr;
}


function isElemNumeric(elem)
{
  if (shortenTrigArray.includes(elem) || shortenLogArray.includes(elem)  || shortenRootArray.includes(elem))
  {
    return false;
  }

  var arr = elem.split("");

  for (var i = 0; i < arr.length; i++)
  {
    if (numericArray.includes(arr[i]))
    {
      return true;
    }
  }
}
