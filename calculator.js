function calculator(string) {

  //This converter from Wiki
  var converter = {

    arab: [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000],
    roman: ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],

    arabToRoman: function(number) {
      if (!number) return '';

      var ret = '';
      var i = this.arab.length - 1;
      while (number > 0) {
        if (number >= this.arab[i]) {
          ret += this.roman[i];
          number -= this.arab[i];
        } else {
          i--;
        }
      }
      return ret;
    },
    romanToArab: function(str) {

      str = str.toUpperCase();
      var ret = 0;
      var i = this.arab.length - 1;
      var pos = 0;
      while (i >= 0 && pos < str.length) {
        if (str.substr(pos, this.roman[i].length) == this.roman[i]) {
          ret += this.arab[i];
          pos += this.roman[i].length;
        } else {
          i--;
        }
      }
      return ret;
    }
  }

  var calculator = {

    digitSets: {
      arab: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      roman: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    },

    operations: {
      sum: (a, b) => Number(a) + Number(b),
      difference: (a, b) => Number(a) - Number(b),
      multiply: (a, b) => Number(a) * Number(b),
      divide: (a, b) => Math.floor(Number(a) / Number(b))
    },

    makeOperation(operator, op1, op2) {
      if (operator == '+') return this.operations.sum(op1, op2);
      if (operator == '-') return this.operations.difference(op1, op2);
      if (operator == '*') return this.operations.multiply(op1, op2);
      if (operator == '/') return this.operations.divide(op1, op2);
      throw new Error();
    },

    calculate(expression) {

      pExp = expression.split(" ");

      operator = pExp[1];
      op1 = pExp[0];
      op2 = pExp[2];

      if (pExp.length > 3) throw new Error();

      romanDigitSet = this.digitSets.roman;
      arabDigitSet = this.digitSets.arab;

      if (romanDigitSet.includes(op1) && romanDigitSet.includes(op2)) {

        op1 = converter.romanToArab(op1);
        op2 = converter.romanToArab(op2);

        result = this.makeOperation(operator, op1, op2);
        result > 0 ? result = converter.arabToRoman(result) : result = '';

        return result;
      }

      if (arabDigitSet.includes(op1) && arabDigitSet.includes(op2)) {
        return this.makeOperation(operator, op1, op2);
      }

      throw new Error();
    }
  }

  return String(calculator.calculate(string));
}

module.exports = calculator; // Не трогайте эту строчку