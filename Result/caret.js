function caretPositionLocations(cont)
{
  var charLength = 0;
  caretPositionsArr = [];
  cont = addFillerElemOnFunc(cont);
  caretPositionsArr.push(cont.length)
  return caretPositionsArr;
} 

 function hideKeyboard(element) {
    element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
    element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
    setTimeout(function() {
        element.blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttr('readonly');
        element.removeAttr('disabled');
    }, 100);
}


function clickCaret(previousPos,caretArr)
{
  $(".sepEqs").off().click(function()
  { 
    var currentCaretPosition = $(this).parent().caret("pos");
    // correct
    if (caretArr.includes(currentCaretPosition))
    {
      $currentCalc.caret("pos",currentCaretPosition);
      clickCaret(currentCaretPosition,caretArr)
    }

    // wrong
    else
    {
      $currentCalc.caret("pos",previousPos);
      clickCaret(previousPos,caretArr)
    }
  });
}

function newLineProcess(newCalculationLength)
{
  if (newCalculationLength == 0 && $historyTab.text().length > 0)
  {
    equalPressed = true;
    equalArray[activeTabNumber] = true;
  }
}

function caretRelocating()
{
  var newCalculationLength = $currentCalc.text().split("").length;

  newLineProcess(newCalculationLength);

  if (caretPosition == 0 && newCalculationLength == 1)
  {
    newCaretPosition =  newCalculationLength;
    $currentCalc.caret("pos",newCaretPosition);
    // hideKeyboard($currentCalc);
  }

  else
  {
    var diff = calculationLength - caretPosition;
    newCaretPosition = newCalculationLength - diff;
    $currentCalc.caret("pos",newCaretPosition);
    // hideKeyboard($currentCalc);
  }

   

  var calcContent = $currentCalc.text().split("");
  calcContent = groupLetters(calcContent);
  calcContent = groupTrigWithNegativeOne(calcContent);
  var caretPositionArr = caretPositionLocations(calcContent);
  clickCaret(newCaretPosition,caretPositionArr);
}




// try to locate caret location that results in multiple deletes and how much it woudl delete

// positions the caret every action
/*function setCaretPosition(len,position)
{
  var textLength = $currentCalc.text().split("").length;

  var difference = textLength-len;

  // if caret was already at the end
  if (len == position || position == 0 || len == undefined)
  {
    $currentCalc.caret("pos",textLength);
  }

  // if inserting an element not at the end it adds the difference
  else
  {
    if (difference > 0)
    {
      position += difference;
    }

    if (difference < 0)
    {
      var diff = len - textLength;
      position += diff;
    }

    $currentCalc.caret("pos",position)
  }

  caretClicking(textLength);
  caretMovementEnabled();
}

/*


/*
function caretClicking(pos)
{
  $currentCalc.off().click(function()
  {
    var textContent = textWithGroupedFunc();
    textContent = groupNumbers(textContent);
    var arrOfValues = caretPositionSearch(textContent);
    var ind = arrOfValues[0];
    var clickedPos = $(this).caret("pos");

    // go back to previous caret position on wrong click position
    if (ind.indexOf(clickedPos) == -1)
    {
      $currentCalc.caret('pos',pos);
    }

    else
    {
      $currentCalc.caret("pos",clickedPos);
    }
      var currentPosition = $currentCalc.caret("pos");
      caretClicking(currentPosition);
  });
}

*/

// search for indices where caret can be positioned at
/*function caretPositionSearch(arr)
{
  var ind = [];
  var wholeNumbers = [];
  var fullIndex = [];

  for (var i = 0; i < arr.length; i++)
  {
    if (listOfLongDeletes.includes(arr[i]))
    {
      var splitted = arr[i].split("");

      arr.splice(i,1);

      for (var j = 0; j < splitted.length; j++)
      {
        arr.splice(i+j,0,splitted[j]);
      }
        i += splitted.length-2;
    }

    else if ((!isNaN(arr[i]) && arr[i] !== " ")  || arr[i].includes(","))
    {
      wholeNumbers.push(arr[i]);
      var splitted = arr[i].split("");
      arr.splice(i,1);
      var arrInd = [];
      arrInd.push(i);

      for (var j = 0; j < splitted.length; j++)
      {
        ind.push(i+j+1);
        arrInd.push(i+j+1);
        arr.splice(i+j,0,splitted[j]);
      }
        fullIndex.push(arrInd)
        i += splitted.length-1;
    }

    else if (arr[i] !== ",")
    {
      ind.push(i+1);
    }
  }
      return [ind,wholeNumbers,fullIndex];
}
*/

// enable left and right arrows to move caret
/*function caretMovementEnabled()
{
  $currentCalc.keydown(function(e)
  {
    var currentPos = $currentCalc.caret("pos");
    var textContent = textWithGroupedFunc();
    textContent = groupNumbers(textContent);
    var arr = caretPositionSearch(textContent);
    var posArray = arr[0];

    e.stopImmediatePropagation();
    var ind = 0;
    var pos = 0;

    ind = posArray.indexOf(currentPos);

    if (e.keyCode == 37)
    {
      ind--;
    }

    else if (e.keyCode == 39)
    {
      ind++;
    }
      event.preventDefault();
      pos = posArray[ind];
      $currentCalc.caret('pos',pos);
      caretFilter(pos);
  });
}
*/


/*
function numberChanged(pos)
{
  var threeTrig = ["sin","cos","tan","sec","csc","cot"];
  var fourTrig = ["sinh","cosh","tanh","sech","csch","coth"];
  var fiveTrig = ["sin","cos-1","tan-1","sec-1","csc-1","cot-1"];
  var sixTrig = ["sinh-1","cosh-1","tanh-1","sech-1","csch-1","coth-1"];

  var cont = $currentCalc.html().splitter("</b>");

  if (pos > cont)
  {
    pos = len;
  }

  for (var i = 0; i < cont.length; i++)
  {

    if (cont[i].includes("log"))
    {
      if (cont[i].includes("ln"))
      {
        pos = pos-2;
      }

      else if (cont[i].includes("log")) // log(
      {
        pos = pos-3;
      }

      else if (cont[i].includes("log2")) // log2(
      {
        pos = pos-4;
      }
    }

    else if (cont[i].includes("trig"))
    {
      if (cont[i].arrSearch(threeTrig))
      {
        pos = pos-2;
      }

      if (cont[i].arrSearch(fourTrig))
      {
        pos = pos-3;
      }

      if (cont[i].arrSearch(fiveTrig))
      {
        pos = pos-4;
      }

      if (cont[i].arrSearch(sixTrig))
      {
        pos = pos-5;
      }
    }

    else if (cont[i].includes("root"))
    {
      pos--;
    }
  }
    return pos;
}

*/

// caret librarys
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], function ($) {
      return (root.returnExportsGlobal = factory($));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

//@ sourceMappingURL=jquery.caret.map
/*
  Implement Github like autocomplete mentions
  http://ichord.github.com/At.js
  Copyright (c) 2013 chord.luo@gmail.com
  Licensed under the MIT license.
*/

/*
本插件操作 textarea 或者 input 内的插入符
只实现了获得插入符在文本框中的位置，我设置
插入符的位置.
*/

"use strict";
var EditableCaret, InputCaret, Mirror, Utils, discoveryIframeOf, methods, oDocument, oFrame, oWindow, pluginName, setContextBy;

pluginName = 'caret';

EditableCaret = (function() {
  function EditableCaret($inputor) {
    this.$inputor = $inputor;
    this.domInputor = this.$inputor[0];
  }

  EditableCaret.prototype.setPos = function(pos) {
    var fn, found, offset, sel;
    if (sel = oWindow.getSelection()) {
      offset = 0;
      found = false;
      (fn = function(pos, parent) {
        var node, range, _i, _len, _ref, _results;
        _ref = parent.childNodes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          node = _ref[_i];
          if (found) {
            break;
          }
          if (node.nodeType === 3) {
            if (offset + node.length >= pos) {
              found = true;
              range = oDocument.createRange();
              range.setStart(node, pos - offset);
              sel.removeAllRanges();
              sel.addRange(range);
              break;
            } else {
              _results.push(offset += node.length);
            }
          } else {
            _results.push(fn(pos, node));
          }
        }
        return _results;
      })(pos, this.domInputor);
    }
    return this.domInputor;
  };

  EditableCaret.prototype.getIEPosition = function() {
    return this.getPosition();
  };

  EditableCaret.prototype.getPosition = function() {
    var inputor_offset, offset;
    offset = this.getOffset();
    inputor_offset = this.$inputor.offset();
    offset.left -= inputor_offset.left;
    offset.top -= inputor_offset.top;
    return offset;
  };

  EditableCaret.prototype.getOldIEPos = function() {
    var preCaretTextRange, textRange;
    textRange = oDocument.selection.createRange();
    preCaretTextRange = oDocument.body.createTextRange();
    preCaretTextRange.moveToElementText(this.domInputor);
    preCaretTextRange.setEndPoint("EndToEnd", textRange);
    return preCaretTextRange.text.length;
  };

  EditableCaret.prototype.getPos = function() {
    var clonedRange, pos, range;
    if (range = this.range()) {
      clonedRange = range.cloneRange();
      clonedRange.selectNodeContents(this.domInputor);
      clonedRange.setEnd(range.endContainer, range.endOffset);
      pos = clonedRange.toString().length;
      clonedRange.detach();
      return pos;
    } else if (oDocument.selection) {
      return this.getOldIEPos();
    }
  };

  EditableCaret.prototype.getOldIEOffset = function() {
    var range, rect;
    range = oDocument.selection.createRange().duplicate();
    range.moveStart("character", -1);
    rect = range.getBoundingClientRect();
    return {
      height: rect.bottom - rect.top,
      left: rect.left,
      top: rect.top
    };
  };

  EditableCaret.prototype.getOffset = function(pos) {
    var clonedRange, offset, range, rect, shadowCaret;
    if (oWindow.getSelection && (range = this.range())) {
      if (range.endOffset - 1 > 0 && range.endContainer !== this.domInputor) {
        clonedRange = range.cloneRange();
        clonedRange.setStart(range.endContainer, range.endOffset - 1);
        clonedRange.setEnd(range.endContainer, range.endOffset);
        rect = clonedRange.getBoundingClientRect();
        offset = {
          height: rect.height,
          left: rect.left + rect.width,
          top: rect.top
        };
        clonedRange.detach();
      }
      if (!offset || (offset != null ? offset.height : void 0) === 0) {
        clonedRange = range.cloneRange();
        shadowCaret = $(oDocument.createTextNode("|"));
        clonedRange.insertNode(shadowCaret[0]);
        clonedRange.selectNode(shadowCaret[0]);
        rect = clonedRange.getBoundingClientRect();
        offset = {
          height: rect.height,
          left: rect.left,
          top: rect.top
        };
        shadowCaret.remove();
        clonedRange.detach();
      }
    } else if (oDocument.selection) {
      offset = this.getOldIEOffset();
    }
    if (offset) {
      offset.top += $(oWindow).scrollTop();
      offset.left += $(oWindow).scrollLeft();
    }
    return offset;
  };

  EditableCaret.prototype.range = function() {
    var sel;
    if (!oWindow.getSelection) {
      return;
    }
    sel = oWindow.getSelection();
    if (sel.rangeCount > 0) {
      return sel.getRangeAt(0);
    } else {
      return null;
    }
  };

  return EditableCaret;

})();

InputCaret = (function() {
  function InputCaret($inputor) {
    this.$inputor = $inputor;
    this.domInputor = this.$inputor[0];
  }

  InputCaret.prototype.getIEPos = function() {
    var endRange, inputor, len, normalizedValue, pos, range, textInputRange;
    inputor = this.domInputor;
    range = oDocument.selection.createRange();
    pos = 0;
    if (range && range.parentElement() === inputor) {
      normalizedValue = inputor.value.replace(/\r\n/g, "\n");
      len = normalizedValue.length;
      textInputRange = inputor.createTextRange();
      textInputRange.moveToBookmark(range.getBookmark());
      endRange = inputor.createTextRange();
      endRange.collapse(false);
      if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
        pos = len;
      } else {
        pos = -textInputRange.moveStart("character", -len);
      }
    }
    return pos;
  };

  InputCaret.prototype.getPos = function() {
    if (oDocument.selection) {
      return this.getIEPos();
    } else {
      return this.domInputor.selectionStart;
    }
  };

  InputCaret.prototype.setPos = function(pos) {
    var inputor, range;
    inputor = this.domInputor;
    if (oDocument.selection) {
      range = inputor.createTextRange();
      range.move("character", pos);
      range.select();
    } else if (inputor.setSelectionRange) {
      inputor.setSelectionRange(pos, pos);
    }
    return inputor;
  };

  InputCaret.prototype.getIEOffset = function(pos) {
    var h, textRange, x, y;
    textRange = this.domInputor.createTextRange();
    pos || (pos = this.getPos());
    textRange.move('character', pos);
    x = textRange.boundingLeft;
    y = textRange.boundingTop;
    h = textRange.boundingHeight;
    return {
      left: x,
      top: y,
      height: h
    };
  };

  InputCaret.prototype.getOffset = function(pos) {
    var $inputor, offset, position;
    $inputor = this.$inputor;
    if (oDocument.selection) {
      offset = this.getIEOffset(pos);
      offset.top += $(oWindow).scrollTop() + $inputor.scrollTop();
      offset.left += $(oWindow).scrollLeft() + $inputor.scrollLeft();
      return offset;
    } else {
      offset = $inputor.offset();
      position = this.getPosition(pos);
      return offset = {
        left: offset.left + position.left - $inputor.scrollLeft(),
        top: offset.top + position.top - $inputor.scrollTop(),
        height: position.height
      };
    }
  };

  InputCaret.prototype.getPosition = function(pos) {
    var $inputor, at_rect, end_range, format, html, mirror, start_range;
    $inputor = this.$inputor;
    format = function(value) {
      value = value.replace(/<|>|`|"|&/g, '?').replace(/\r\n|\r|\n/g, "<br/>");
      if (/firefox/i.test(navigator.userAgent)) {
        value = value.replace(/\s/g, '&nbsp;');
      }
      return value;
    };
    if (pos === void 0) {
      pos = this.getPos();
    }
    start_range = $inputor.val().slice(0, pos);
    end_range = $inputor.val().slice(pos);
    html = "<span style='position: relative; display: inline;'>" + format(start_range) + "</span>";
    html += "<span id='caret' style='position: relative; display: inline;'>|</span>";
    html += "<span style='position: relative; display: inline;'>" + format(end_range) + "</span>";
    mirror = new Mirror($inputor);
    return at_rect = mirror.create(html).rect();
  };

  InputCaret.prototype.getIEPosition = function(pos) {
    var h, inputorOffset, offset, x, y;
    offset = this.getIEOffset(pos);
    inputorOffset = this.$inputor.offset();
    x = offset.left - inputorOffset.left;
    y = offset.top - inputorOffset.top;
    h = offset.height;
    return {
      left: x,
      top: y,
      height: h
    };
  };

  return InputCaret;

})();

Mirror = (function() {
  Mirror.prototype.css_attr = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontWeight", "height", "letterSpacing", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "outlineWidth", "overflow", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap"];

  function Mirror($inputor) {
    this.$inputor = $inputor;
  }

  Mirror.prototype.mirrorCss = function() {
    var css,
      _this = this;
    css = {
      position: 'absolute',
      left: -9999,
      top: 0,
      zIndex: -20000
    };
    if (this.$inputor.prop('tagName') === 'TEXTAREA') {
      this.css_attr.push('width');
    }
    $.each(this.css_attr, function(i, p) {
      return css[p] = _this.$inputor.css(p);
    });
    return css;
  };

  Mirror.prototype.create = function(html) {
    this.$mirror = $('<div></div>');
    this.$mirror.css(this.mirrorCss());
    this.$mirror.html(html);
    this.$inputor.after(this.$mirror);
    return this;
  };

  Mirror.prototype.rect = function() {
    var $flag, pos, rect;
    $flag = this.$mirror.find("#caret");
    pos = $flag.position();
    rect = {
      left: pos.left,
      top: pos.top,
      height: $flag.height()
    };
    this.$mirror.remove();
    return rect;
  };

  return Mirror;

})();

Utils = {
  contentEditable: function($inputor) {
    return !!($inputor[0].contentEditable && $inputor[0].contentEditable === 'true');
  }
};

methods = {
  pos: function(pos) {
    if (pos || pos === 0) {
      return this.setPos(pos);
    } else {
      return this.getPos();
    }
  },
  position: function(pos) {
    if (oDocument.selection) {
      return this.getIEPosition(pos);
    } else {
      return this.getPosition(pos);
    }
  },
  offset: function(pos) {
    var offset;
    offset = this.getOffset(pos);
    return offset;
  }
};

oDocument = null;

oWindow = null;

oFrame = null;

setContextBy = function(settings) {
  var iframe;
  if (iframe = settings != null ? settings.iframe : void 0) {
    oFrame = iframe;
    oWindow = iframe.contentWindow;
    return oDocument = iframe.contentDocument || oWindow.document;
  } else {
    oFrame = void 0;
    oWindow = window;
    return oDocument = document;
  }
};

discoveryIframeOf = function($dom) {
  var error;
  oDocument = $dom[0].ownerDocument;
  oWindow = oDocument.defaultView || oDocument.parentWindow;
  try {
    return oFrame = oWindow.frameElement;
  } catch (_error) {
    error = _error;
  }
};

$.fn.caret = function(method, value, settings) {
  var caret;
  if (methods[method]) {
    if ($.isPlainObject(value)) {
      setContextBy(value);
      value = void 0;
    } else {
      setContextBy(settings);
    }
    caret = Utils.contentEditable(this) ? new EditableCaret(this) : new InputCaret(this);
    return methods[method].apply(caret, [value]);
  } else {
    return $.error("Method " + method + " does not exist on jQuery.caret");
  }
};

$.fn.caret.EditableCaret = EditableCaret;

$.fn.caret.InputCaret = InputCaret;

$.fn.caret.Utils = Utils;

$.fn.caret.apis = methods;


}));
