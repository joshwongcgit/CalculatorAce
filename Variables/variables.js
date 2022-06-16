var num = 0;

var $historyTab;
var $currentCalc;
var $prompt;
var $instantAnswer;
var $digitTab;
var $trigTab;

var activeTabNumber = 0;

var key;
var erase;
var numbPressed = false;
var sign;
var parentheses;
var wholeDigitsOnly = false;
var singleDigitsOnly = true;
var decimal = false;
var prevDecimal;
var answerNoDecimal;
var needed;
var numberOfOpenParen = 0;
var numberOfCloseParen = 0;
var openParen;
var closeParen;

var showInstantAnswer = true;

var answer;
var powerChar = "^";

var rootChar = decodeEntities('&radic;');
var cubeRootChar = decodeEntities('&#8731;');
var pieChar = decodeEntities("&#960;");
var log10 = decodeEntities('log&#8321;&#8320;');
var log2 = decodeEntities('log&#8322;');
var log = "log";
var specialSigns = ['^',rootChar,cubeRootChar,'log','log10','ln','e','sin','cos','tan','sec','cot','csc','asin','acos','atan','acsc','asec','acot','sinh','cosh','tanh',
'sech','csch','coth','asinh','acosh','atanh','acsch','asech','acoth',"!","log2","sin-1","cos-1","tan-1","csc-1","cot-1","sec-1","sinh-1","cosh-1","tanh-1","coth-1","csch-1","sech-1"];
var multiplyChar = decodeEntities('&times;');
var divideChar = decodeEntities('&divide;');
var subtractChar = decodeEntities('&#x2212;');
var prevDecimal;
var shortenAnswer;
var shortenInputs;
var shortenInputsWithHTML;
var shortenAnswer;
var squaredChar = decodeEntities('x&sup2');
var cubedChar = decodeEntities('x&sup3');
var currentCalc = $('.currentCalc');
var pie = decodeEntities("&pi;");
var backspaceChar = decodeEntities("&#8592;");

var emptyArray = ["", " ",undefined];
var numericArray = ['0','1','2','3','4','5','6','7','8','9'];
var commasArray = [','];
var decimalArray = ['.'];
var negativeArray = ['-'];
var shortenTrigArray = ['sin','cos','tan','sec','cot','csc','sin-1','cos-1','tan-1','sec-1','csc-1','cot-1','sinh','cosh','tanh','csch','sech',
'coth','sinh-1','cosh-1','tanh-1','csch-1','sech-1','coth-1','sec','cot','csc'];
var shortenInverseTrigArray = ['sin-1','cos-1','tan-1','sec-1','cot-1','csc-1','sinh-1','cosh-1','tanh-1','csch-1','sech-1',
'coth-1'];
var trigArray = ['sin(','cos(','tan(','sec(','cot(','csc(','sin-1(','cos-1(','tan-1(','sec-1(','csc-1(','cot-1(','sinh(','cosh(','tanh(','csch(','sech(',
'coth(','sinh-1(','cosh-1(','tanh-1(','csch-1(','sech-1(','coth-1('];
var inverseTrigArray = ['sin-1(','cos-1(','tan-1(','sec-1(','csc-1(','cot-1(','sinh-1(','cosh-1(','tanh-1(','csch-1(','sech-1(','coth-1('];
var trigWithoutInv = ['sin(','cos(','tan(','sec(','cot(','csc(','sinh(','cosh(','tanh(','csch(','sech(','coth('];
var shortenLogArray = ["log2",log10,"ln","log"];
var logArray = ["log2(",log10 + "(",'ln(',"log("];
var shortenRootArray = [rootChar,cubeRootChar];
var rootArray = [rootChar + "(",cubeRootChar + "("];
var powerArray = ["^","^2","^3"];
var parenArray = ["("];
var pi = [pie,"e"];
var factorialArray = ['!'];
var signArray = ['+',subtractChar,multiplyChar,divideChar];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var listOfLongDeletes = ['sin(','cos(','tan(','sec(','cot(','csc(','sin-1(','cos-1(','tan-1(','sec-1(','csc-1(','cot-1(','sinh(','cosh(','tanh(','csch(','sech(',
'coth(','sinh-1(','cosh-1(','tanh-1(','csch-1(','sech-1(','coth-1(',"ln(","log2(","log(",rootChar + '(',cubeRootChar + '('];  // 2,4,5,6,7
var listOfLongDeletesWithoutParen = ['sin','cos','tan','sec','cot','csc','sin-1','cos-1','tan-1','sec-1','csc-1','cot-1','sinh','cosh','tanh','csch','sech',
'coth','sinh-1','cosh-1','tanh-1','csch-1','sech-1','coth-1',"ln","log2","log",rootChar,cubeRootChar];

var number = true; // 0
var decimals = true; // 1
var negative = true;  // 2
var sign = true;  // 3
var paren = true;  // 4
var trig = true; // 5
var root = true; // 6
var log = true; // 7
var power = true; // 8
var pie = true; // 9
var factorial = true; // 10
var empty = true; // 11

var number2 = true; // 0
var decimals2 = true; // 1
var negative2 = true;  // 2
var sign2 = true;  // 3
var paren2 = true;  // 4
var trig2 = true; // 5
var root2 = true; // 6
var log2 = true; // 7
var power2 = true; // 8
var pie2 = true; // 9
var factorial2 = true; // 10
var empty2 = true; // 11

var typeArray = [numericArray,decimalArray,negativeArray,signArray,parenArray,shortenTrigArray,shortenRootArray,shortenLogArray,powerArray,pi,factorialArray,emptyArray];
var type = ["number","decimal","negative","sign","paren","trig","root","log","power","pie","factorial","empty"];
var typeBool = [number,decimals,negative,sign,paren,trig,root,log,power,pie,factorial,empty];
var typeBool2 = [number2,decimals2,negative2,sign2,paren2,trig2,root2,log2,power2,pie2,factorial2,empty2];
var typeBoolFunc = [numbersBool,decimalsBool,negativeBool,signBool,parenBool,trigBool,rootBool,logBool,powerBool,pieBool,factorialBool,emptyBool];
var typeBoolFunc2 = [numbersBool2,decimalsBool2,negativeBool2,signBool2,parenBool2,trigBool2,rootBool2,logBool2,powerBool2,pieBool2,factorialBool2,emptyBool2]
var trigLong = ['sin(','cos(','tan(','sec(','cot(','csc(','sin-1(','cos-1(','tan-1(','sec-1(','csc-1(','cot-1(','sinh(','cosh(','tanh(','csch(','sech(','coth(','sinh-1(','cosh-1(','tanh-1(','csch-1(','sech-1(','coth-1('];
var logLong = ["ln(","log2(","log("];
var rootLong = [rootChar + '(',cubeRootChar + '('];

var equalArray = [];

function emptyBool()
{
  typeBool[3] = false;
  typeBool[8] = false;
  typeBool[10] = false;
}

function parenBool()
{
  typeBool[1] = false;
  typeBool[3] = false;
  typeBool[8] = false;
  typeBool[10] = false;
}

function numbersBool()
{
 
  // nothing is false
}

function decimalsBool()
{
  typeBool[1] = false;
  typeBool[2] = false;
  typeBool[3] = false;
  typeBool[4] = false;
  typeBool[5] = false;
  typeBool[6] = false;
  typeBool[7] = false;
  typeBool[8] = false;
  typeBool[9] = false;
  typeBool[10] = false;
}

function negativeBool()
{
  typeBool[1] = false;
  typeBool[2] = false;
  typeBool[3] = false;
  typeBool[8] = false;
  typeBool[10] = false;
}

function signBool()
{
  typeBool[1] = false;
  typeBool[3] = false;
  typeBool[8] = false;
  typeBool[10] = false; 
}

function trigBool()
{
  typeBool[3] = false;
  typeBool[8] = false;
  typeBool[10] = false;
}

function logBool()
{
  typeBool[3] = false;
  typeBool[8] = false;
  typeBool[10] = false;
}

function rootBool()
{
  typeBool[3] = false;
  typeBool[8] = false;
  typeBool[10] = false;
}

function powerBool()
{
  typeBool[1] = false;
  typeBool[3] = false;
  typeBool[8] = false;
  typeBool[10] = false;
}

function pieBool()
{
  typeBool[0] = false;
  typeBool[1] = false;
  typeBool[2] = false;
  typeBool[9] = false;
  typeBool[10] = false;
}

function factorialBool()
{
  typeBool[0] = false;
  typeBool[1] = false;
  typeBool[2] = false;
  typeBool[8] = false;
  typeBool[10] = false;
}

function emptyBool2()
{
  
}

function parenBool2()
{
  typeBool[1] = false;
}

function numbersBool2()
{
  typeBool[9] = false;
  typeBool[10] = false;
}

function decimalsBool2()
{
  typeBool[1] = false;
  typeBool[2] = false;
  typeBool[3] = false;
  typeBool[4] = false;
  typeBool[5] = false;
  typeBool[6] = false;
  typeBool[7] = false;
  typeBool[8] = false;
  typeBool[9] = false;
  typeBool[10] = false;
}

function negativeBool2()
{
  typeBool[0] = false;
  typeBool[1] = false;
  typeBool[2] = false;
  typeBool[9] = false;
  typeBool[10] = false;
}

function signBool2()
{
  typeBool[1] = false;
  typeBool[2] = false;
  typeBool[3] = false;
  typeBool[4] = false; 
  typeBool[5] = false;
  typeBool[6] = false; 
  typeBool[7] = false;
  typeBool[8] = false; 
}

function trigBool2()
{
  typeBool[1] = false;
}

function logBool2()
{
  typeBool[1] = false;
}

function rootBool2()
{
  typeBool[1] = false;
}

function powerBool2()
{
  typeBool[1] = false;
  typeBool[2] = false;
  typeBool[3] = false;
  typeBool[4] = false;
  typeBool[5] = false;
  typeBool[6] = false;
  typeBool[7] = false;
  typeBool[8] = false;
  typeBool[10] = false;
}

function pieBool2()
{
  typeBool[1] = false;
  typeBool[9] = false;
}

function factorialBool2()
{
  typeBool[1] = false;
  typeBool[2] = false;
  typeBool[3] = false;
  typeBool[4] = false;
  typeBool[5] = false;
  typeBool[6] = false;
  typeBool[7] = false;
  typeBool[8] = false;
}



