var trigEnding = ['n','c','t','s'];
var hyperbolicTrigEnding = ['h'];
var theSigns = ['+','-',multiplyChar,divideChar];
var autoDisappear = true;
var showConsole = true;

function negAfterCloseParen()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> Cannot use <b class = "negative"> - </b> after <b class = "paren">)</b></span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function longNumberError()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> There cannot be more than 16 digits in a number.</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function closingAfterOpening()
{
	if (showConsole)
		{
			$(".alerta").html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> There cannot be a closing parenthesis after an opening parenthesis</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
			activa();
		}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function beforeFactorialError()
{
	if (showConsole)
		{
			$(".alerta").html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> Factorial can be used after an integer. An integer is a number without the use of decimals.</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
			activa();
		}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function noNegative()
{
	if (showConsole)
	{
		$(".alerta").html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> Negative sign is not allowed in front of a number nor a decimal</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

// --
function doubleNegativeError()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">A number has to be inserted after a negative sign</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function noTabError()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"></span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert">&times;</span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function activa()
{
	$('.errorClose').off().click(function()
	{
		$(".alerta").empty();
	});
}

// ..7
function twoDecimals()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Decimal cannot be used twice in the same number.</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert">&times;</span></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

// ++
function signAgainError(signal)
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"><b class = "sign">' + signal + '</b> cannot be used consecutively </span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

// 56=56=
function EqualAgainError()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> = is already selected</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function EverythingClearError()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Everything is already cleared.</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function CalculationClearError()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Calculation is already cleared.</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>'); // Clear calculation button, R hotkey, and c button     // just need c button
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function HistoryClearError()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">History is already cleared.</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></span>'); // Clear calculation button, R hotkey, and c button     // just need c button
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

// ())
function parenError()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">There cannot be more closing parentheses than opening parentheses </span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>'); // done
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function cannotDeleteAnswer()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">There are no elements to delete</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>'); // done
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

// (+
function signParenError(signal)
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> A number must be selected before using <b class = "sign">' + signal + ' </b> inside a parentheses </span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>'); // done
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function cannotEqual()
{
	var resultText = $currentCalc.text().split("");

	resultText = groupLetters(resultText);
	resultText = groupSomeNumbersWithLetters(resultText);

	var secondLastChar = resultText[resultText.length-2];
	var lastChar = resultText[resultText.length-1];

	if (showConsole)
	{
		if (lastChar == "^") // perfect
		{
			$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Equation cannot end with <b class = "power">' + lastChar + ' </b></span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>'); // depends
		}

			else if (logArray.includes(secondLastChar)) //log
			{
				$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Equation cannot end with <b class = "log">' + secondLastChar +  '</b><b class = "paren">(</b></span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>'); // depends
			}

			else if (trigArray.includes(secondLastChar)) // trig
			{
				console.log()
				$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Equation cannot end with <b class = "trig">' + secondLastChar +  '</b><b class = "paren">(</b></span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
			}

			else if (rootArray.includes(secondLastChar))
			{
				$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Equation cannot end with <b class = "root">' + secondLastChar +  '</b><b class = "paren">(</b></span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
			}

			else
			{
				$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Equation cannot end with <b class = "paren"> ( </b> </span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
			}

			activa();
	}

		if (autoDisappear)
		{
			disappear = setTimeout(function()
			{
				$(".alerta").empty();
			},9000)
		}
}

// +
function signBeginningError(signal)
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> <b class = "sign">' + signal +  ' </b>must not be used at the beginning of an equation </span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

// +^
function powerError(signal)
{
	if (showConsole)
	{
		var powa = "^";
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Cannot use <b class = "sign">' + signal + ' </b> after <b class = "power">' + powa + ' </b></span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

// ^+
function powerAfterSignError(powa,signal)
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> Cannot use <b class = "power">' + powa + ' </b>after <b class = "sign">' + signal + ' </b></span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

// (^
function powerAfterParenError(powa) //
{
	if (showConsole)
	{
		var paren = "(";
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> Cannot use <b class = "power">' + powa + ' </b>after using <b class = "paren">' + paren + ' </b></span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function powerAfterPowerError(powa)
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Cannot use ' + powa + ' again  </span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}


function numberAfterPie()
{
	if (showConsole)
	{
		var storage = $('.currentCalc').text();
		var lastChar = storage[storage.length-1];

		if (lastChar == pieChar)
		{
			$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Number cannot be used after the pi constant  </span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		}


		else if (lastChar == 'e')
		{
			$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Number cannot be used after the e constant </span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		}

		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function radianError()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Radian mode is already on</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

function degreeError()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent">Degree mode is already on</span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}

// ^
function cannotStartWithPower()
{
	if (showConsole)
	{
		$(".alerta").show().html('<span class="alert alert-custom alert-dismissible" role="alert"><span class = "errorContent"> Equation cannot start with <b class = "power">^ </b> </span><span class="errorClose alert" aria-label="Close" data-dismiss = "alert"><span aria-hidden="true">&times;</span></span></button></span>');
		activa();
	}

	if (autoDisappear)
	{
		disappear = setTimeout(function()
		{
			$(".alerta").empty();
		},9000)
	}
}
