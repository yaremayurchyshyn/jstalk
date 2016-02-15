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