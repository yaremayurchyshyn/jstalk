(function() {
console.log('generateExpressions');

  function generateExpression(exp) {
    var operations = ["+", "-", ""];
    var generatedExpressions = [];
    var str = exp.split("");
    var operationsCount = str.length - 1;

    _init();

    function _init() {
      generatedExpressions.push([str[0]]);
    }

    function generateNewExpression() {
      if(operationsCount != 0) {
        var newGeneratedExpressions = [];

        for(var i= 0, leni=generatedExpressions.length; i<leni; i++) {
          var temp = [];
          for(var j= 0, lenj=operations.length; j<lenj; j++) {
            var newArr = generatedExpressions[i].slice();
            newArr.push(operations[j]);
            newArr.push(str[str.length - (operationsCount)]);
            temp.push(newArr);
          }
          newGeneratedExpressions = newGeneratedExpressions.concat(temp);
        }
        generatedExpressions = newGeneratedExpressions;
        operationsCount --;
        generateNewExpression();
      }
      return generatedExpressions;
    }

    return generateNewExpression();
  }

  console.log(generateExpression('123456789'));
  console.log(generateExpression('123'));
  console.log(generateExpression('1234'));

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