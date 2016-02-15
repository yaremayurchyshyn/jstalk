(function() {
console.log('generateExpressions');

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

  var result = generateExpression('12345');
  console.log(result);

})();

//123
/*
1+23
12+3
1+2+3

12-3
1-23
1-2-3

1+2-3
1-2+3

123

*/