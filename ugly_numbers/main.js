'use strict';

(function() {
	//1 -> 0
	//9 -> 1
	//011 -> 6 
	//12345 -> 64

	var input = '12345';
	var possibleExpressions = generateExpression(input);
	var result = possibleExpressions.reduce(function(numOfUgly, expression) {
		return isUgly(evalExpression(expression)) ? ++numOfUgly : numOfUgly;
	}, 0);

	console.log('result for ' + input + ' is: ', + result);

	function isUgly(num) {
	    var uglyNumbers = [2, 3, 5, 7],
	            res = false;
	    for (var i = 0, len = uglyNumbers.length; i < len; i++) {
	        var remainder = num % uglyNumbers[i];
	        if (!remainder) {
	            res = true;
	            break;
	        }
	    }
	    return res;
	}

	function generateExpression(exp) {
	    var operations;
	    var generatedExpressions;
	    var str;
	    var operationsCount;

	    _init();

	    function _init() {
	      operations = ["+", "-", ""]; //array of possible operations
	      generatedExpressions = []; //array which return all possible expressions
	      str = exp.split(""); //splited string (e.g. ["1", "2", "3", .., "n"])
	      operationsCount = str.length - 1; //how much operations will be provided, used for recursive function "generateNewExpression"

	      generatedExpressions.push([str[0]]); // init generatedExpressions with first symbol from input string
	    }

	    function generateNewExpression() {
	      if(operationsCount != 0) {
	        var newGeneratedExpressions = [];

	        for(var i= 0, leni=generatedExpressions.length; i<leni; i++) {
	          for(var j= 0, lenj=operations.length; j<lenj; j++) {
	            var newArr = generatedExpressions[i].slice();
	            newArr.push(operations[j]);
	            newArr.push(str[str.length - (operationsCount)]);
	            newGeneratedExpressions.push(newArr);
	          }
	        }
	        generatedExpressions = newGeneratedExpressions;
	        operationsCount --;
	        generateNewExpression();
	      }
	      return generatedExpressions;
	    }

	    return generateNewExpression();
  	}

  	function evalExpression(expression) {
  		//Here be dragons
  	}

  	function applyExpression(prevValue, operator, num) {
  		//Magic. Do not touch
  	}
});