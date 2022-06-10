function withoutParen()
{
  var storage = solveAllParen();

  var size = storage.length;

  for (var i = 0; i < size; i++)
  {
    for (var j = 0; j < specialSigns.length; j++)
    {
        if (storage[i] == specialSigns[j])  // found out if equation contains a special sign
        {
          // if it does get the elements before and after the special signs
          var prev = i-1;
          var next = i+1;
          var before = storage[prev];
          var after = storage[next];
          var whatSign = specialSigns[j]; // figure out which special sign was found

          switch (whatSign)
          {
            case '^':
            function powerRule()
            {
              var i = storage.lastIndexOf('^');
              var before = storage[i-1];
              var after = storage[i+1];

              if (after == "-")
              {
                after = -storage[i+2]
              }

              var ans = Math.pow(before,after);
              size = size-2;
              storage.splice(i-1,3,ans);

              for (var i = 0; i < storage.length; i++)
              {
                  if (storage[i] == "^")
                  {
                    powerRule();
                  }
              }
            }

            powerRule();
            break;

            case 'squared':
            var ans = Math.pow(before,2);
            storage.splice(prev,3,ans);
            size = size-2;
            break;

            case "!":
            var ans = factorial(before);
            storage.splice(prev,2,ans);
            size = size-1;
            break;

            case rootChar:
            var ans = Math.sqrt(after);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case cubeRootChar:
            var ans = Math.cbrt(after);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'log':
            var ans = Math.log10(after);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'log2':
            var ans = Math.log2(after);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'ln':
            var ans = Math.log(after);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'sin':
            var after = radianMode(after);
            var ans = Math.sin(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'cos':
            var after = radianMode(after);
            var ans = Math.cos(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'tan':
            var after = radianMode(after);
            var ans = Math.tan(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'sec':
            var after = radianMode(after);
            var ans = 1/Math.cos(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'csc':
            var after = radianMode(after);
            var ans = 1/Math.sin(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'cot':
            radianMode(after);
            var ans = 1/Math.tan(after)
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'sin-1':
            var ans = Math.asin(after);
            ans = radianModeForArcTrig(ans);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'cos-1':
            var ans = Math.acos(after);
            ans = radianModeForArcTrig(ans);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'tan-1':
            var ans = Math.atan(after);
            ans = radianModeForArcTrig(ans);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'csc-1':
            var ans = 1/Math.asin(after);
            ans = radianModeForArcTrig(ans);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'sec-1':
            var ans = 1/Math.acos(after);
            ans = radianModeForArcTrig(ans);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'cot-1':
            var ans = 1/Math.atan(after);
            ans = radianModeForArcTrig(ans);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'sinh':
            var after = radianMode(after);
            var ans = Math.sinh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'cosh':
            var after = radianMode(after);
            var ans = Math.cosh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'tanh':
            var after = radianMode(after);
            var ans = Math.tanh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'csch':
            var after = radianMode(after);
            var ans = 1/Math.asinh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'sech':
            var after = radianMode(after);
            var ans = 1/Math.acosh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'coth':
            var after = radianMode(after);
            var ans = 1/Math.atanh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'sinh-1':
            var after = radianMode(after);
            var ans = Math.asinh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'cosh-1':
            var after = radianMode(after);
            var ans = Math.acosh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'tanh-1':
            var after = radianMode(after);
            var ans = Math.atanh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'csch-1':
            var after = radianMode(after);
            var ans = 1/Math.asinh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'sech-1':
            var after = radianMode(after);
            var ans = 1/Math.acosh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;

            case 'coth-1':
            var after = radianMode(after);
            var ans = 1/Math.atanh(after);
            ans = makeAnswerZero(ans);
            storage.splice(i,2,ans);
            size = size-1;
            break;
          }
        }
    }
  }
    for (var j = 0; j < storage.length; j++)
    {
      if (storage[j] == undefined)
      {
        continue;
      }

      else if (storage[j].toString().length > 16 && !storage[j].toString().includes("."))
      {
        storage[i] = undefined;
      }
    }
      return storage;
}



