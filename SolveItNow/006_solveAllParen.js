function solveAllParen()
	{
		var storage = addMultiplyOnSpecialFunc();
		
		storage.splice(i,0,"")

		var open = 0;

		for (var p = 0; p < storage.length; p++)
		{
		  if (storage[p] == "(")
		  {
			open++;
		  }
		}

		for (var i = 0; i < open; i++) // open determines how many open parentheses
		{
			var size = storage.length;
			var begin = storage.lastIndexOf('(') // locate the last opening parentheses
			{
				for (var j = begin; j < size; j++) // start looping from last opening parentheses to the end
				{
					if (storage[j] == ")") // if a closing parentheses is found, stop finding the other parentheses
					{
						var end = j;
						var deleteCount = end-begin+1;

						for (var k = begin; k <= end; k++) // loops from the opening to the closing parentheses
						{
							for (x = 0; x < specialSigns.length; x++) // figure out if a special sign is located between opening and closing parentheses
							{
								if (storage[k] == specialSigns[x])
								{
									var prev = k-1;
									var next = k+1;
									var before = storage[prev];
									var after = storage[next];
									var whatSign = specialSigns[x];

									// figure out which special sign and evaluate it based on the type
									switch (whatSign)
									{
										case '^':
										function powerRule()
										{
										  	var boy = storage.lastIndexOf('^');
											var prevTwo = boy-1;
											var nextTwo = boy+1;
											var before = storage[prevTwo];
											var after = storage[nextTwo];
										  	var ans = Math.pow(before,after);
											deleteCount = deleteCount-2;
					           				end = end-2;
										  	storage.splice(prevTwo,3,ans);

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
										break;

										case "!":
										var ans = factorial(before);
										storage.splice(prev,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case rootChar:
							            var ans = Math.sqrt(after);
							            storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
							            end = end-1;
							            break;

										case cubeRootChar:
										var ans = Math.cbrt(after);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'log':
										var ans = Math.log(after);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'log2':
										var ans = Math.log2(after);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'ln':
										var ans = Math.log(after);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'sin':
										var after = radianMode(after);
										var ans = Math.sin(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'cos':
										var after = radianMode(after);
										var ans = Math.cos(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'tan':
										var after = radianMode(after);
										var ans = Math.tan(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'sec':
										var after = radianMode(after);
										var ans = 1/Math.cos(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'csc':
										var after = radianMode(after);
										var ans = 1/Math.sin(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'cot':
										var after = radianMode(after);
										var ans = 1/Math.tan(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'sin-1':
										var ans = Math.asin(after);
				           			    ans = radianModeForArcTrig(ans);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'cos-1':
										var ans = Math.acos(after);
				            			ans = radianModeForArcTrig(ans);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'tan-1':
										var ans = Math.atan(after);
				            			ans = radianModeForArcTrig(ans);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'csc-1':
										var ans = 1/Math.asin(after);
				            			ans = radianModeForArcTrig(ans);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'sec-1':
										var ans = 1/Math.acos(after);
				            			ans = radianModeForArcTrig(ans);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'acot':
										var ans = 1/Math.atan(after);
										ans = radianModeForArcTrig(ans);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'sinh':
										var after = radianMode(after);
										var ans = Math.sinh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'cosh':
										var after = radianMode(after);
										var ans = Math.cosh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'tanh':
										var after = radianMode(after);
										var ans = Math.tanh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'csch':
										var after = radianMode(after);
										var ans = 1/Math.asinh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'sech':
										var after = radianMode(after);
										var ans = 1/Math.acosh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'coth':
										var after = radianMode(after);
										var ans = 1/Math.atanh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'sinh-1':
										var after = radianMode(after);
										var ans = Math.asinh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'cosh-1':
										var after = radianMode(after);
										var ans = Math.acosh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'tanh-1':
										var after = radianMode(after);
										var ans = Math.atanh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'csch-1':
										var after = radianMode(after);
										var ans = 1/Math.asinh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'sech-1':
										var after = radianMode(after);
										var ans = 1/Math.acosh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;

										case 'coth-1':
										var after = radianMode(after);
										var ans = 1/Math.atanh(after);
										ans = makeAnswerZero(ans);
										storage.splice(k,2,ans);
										deleteCount = deleteCount-1;
										end = end-1;
										break;
									}
								}
							}
						}
							break;
					}
				}

				var array = [];

				for (var y = begin+1; y <= end-1; y++)
				{
					array.push(storage[y]);
				}

				var ans = solver(array);

				ans = ans.toString();
				storage.splice(begin,deleteCount,ans);
			}
		}
			storage.splice(0,1);

			for (var j = 0; j < storage.length; j++)
			{
			  if (storage[j].length > 16 && !storage[j].toString().includes("."))
			  {
				storage[j] = undefined;
			  }
			}
				return storage;
	}