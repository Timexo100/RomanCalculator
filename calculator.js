class Converter {
  constructor() {
    this.arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    this.roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  }

  arabToRoman(number) {
    if (!number) return "";

    let ret = "";
    let i = this.arab.length - 1;
    while (number > 0) {
      if (number >= this.arab[i]) {
        ret += this.roman[i];
        number -= this.arab[i];
      } else {
        i--;
      }
    }
    return ret;
  }

  romanToArab(str) {
    str = str.toUpperCase();
    let ret = 0;
    let i = this.arab.length - 1;
    let pos = 0;
    while (i >= 0 && pos < str.length) {
      if (str.substr(pos, this.roman[i].length) === this.roman[i]) {
        ret += this.arab[i];
        pos += this.roman[i].length;
      } else {
        i--;
      }
    }
    return ret;
  }
}

export default class Calculator {
  constructor() {
    this.arab = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    this.roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    this.converter = new Converter();
  }

  make(operation, a, b) {
    switch (operation) {
      case "+":
        return +a + +b;
      case "-":
        return +a - +b;
      case "*":
        return Math.floor(+a * +b);
      case "/":
        return Math.floor(+a / +b);
      default:
        break;
    }
  }

  calculate(expression) {
    const pExp = expression.split(" ");

    const operator = pExp[1];
    const a = pExp[0];
    const b = pExp[2];

    if (pExp.length === 3) {
      if (this.roman.includes(a) && this.roman.includes(b)) {
        let aCon = this.converter.romanToArab(a);
        let bCon = this.converter.romanToArab(b);
        let result = this.make(operator, aCon, bCon);
        return result > 0 ? this.converter.arabToRoman(result) : "";
      } else {
        return this.make(operator, a, b) + "";
      }
    }
  }
}
