import Calculator from "./calculator";

const calculator = new Calculator();
test("должен работать с десятичными числами (сложение)", () => {
  expect(calculator.calculate("1 + 1")).toBe("2");
  expect(calculator.calculate("1 + 2")).toBe("3");
  expect(calculator.calculate("4 + 3")).toBe("7");
  expect(calculator.calculate("10 + 10")).toBe("20");
});

test("должен работать с десятичными числами (вычитание)", () => {
  expect(calculator.calculate("10 - 1")).toBe("9");
  expect(calculator.calculate("5 - 4")).toBe("1");
  expect(calculator.calculate("4 - 4")).toBe("0");
  expect(calculator.calculate("1 - 10")).toBe("-9");
  expect(calculator.calculate("4 - 5")).toBe("-1");
});

test("должен работать с десятичными числами (умножение)", () => {
  expect(calculator.calculate("10 * 10")).toBe("100");
  expect(calculator.calculate("4 * 10")).toBe("40");
  expect(calculator.calculate("5 * 1")).toBe("5");
  expect(calculator.calculate("5 * 5")).toBe("25");
});

test("должен работать с десятичными числами (деление)", () => {
  expect(calculator.calculate("10 / 1")).toBe("10");
  expect(calculator.calculate("6 / 2")).toBe("3");
  expect(calculator.calculate("5 / 4")).toBe("1");
  expect(calculator.calculate("2 / 4")).toBe("0");
});

test("должен работать с римскими числами (сложение)", () => {
  expect(calculator.calculate("I + I")).toBe("II");
  expect(calculator.calculate("I + II")).toBe("III");
  expect(calculator.calculate("IV + III")).toBe("VII");
  expect(calculator.calculate("X + X")).toBe("XX");
  expect(calculator.calculate("X + IX")).toBe("XIX");
});

test("должен работать с римскими числами (вычитание)", () => {
  expect(calculator.calculate("X - I")).toBe("IX");
  expect(calculator.calculate("V - IV")).toBe("I");
  expect(calculator.calculate("IV - IV")).toBe("");
  expect(calculator.calculate("I - X")).toBe("");
  expect(calculator.calculate("IV - V")).toBe("");
});

test("должен работать с римскими числами (умножение)", () => {
  expect(calculator.calculate("X * X")).toBe("C");
  expect(calculator.calculate("IV * X")).toBe("XL");
  expect(calculator.calculate("V * I")).toBe("V");
  expect(calculator.calculate("V * V")).toBe("XXV");
});

test("должен работать с римскими числами (деление)", () => {
  expect(calculator.calculate("X / I")).toBe("X");
  expect(calculator.calculate("VI / II")).toBe("III");
  expect(calculator.calculate("V / IV")).toBe("I");
  expect(calculator.calculate("II / IV")).toBe("");
});

test("должен выбрасывать ошибку на некорректных данных", () => {
  expect(() => calculator.calculate("")).toThrowError();
  expect(() => calculator.calculate(" ")).toThrowError();
  expect(() => calculator.calculate("     ")).toThrowError();
  expect(() => calculator.calculate("4")).toThrowError();
  expect(() => calculator.calculate("+")).toThrowError();
  expect(() => calculator.calculate("++1")).toThrowError();
  expect(() => calculator.calculate("V")).toThrowError();
  expect(() => calculator.calculate("3 % 4")).toThrowError();
  expect(() => calculator.calculate("1 + 1 + 1")).toThrowError();
  expect(() => calculator.calculate("11 + 1")).toThrowError();
  expect(() => calculator.calculate("1 + 11")).toThrowError();
  expect(() => calculator.calculate("XI + I")).toThrowError();
  expect(() => calculator.calculate("I + XI")).toThrowError();
  expect(() => calculator.calculate("1 + V")).toThrowError();
  expect(() => calculator.calculate("I + 1")).toThrowError();
  expect(() => calculator.calculate("5 / 0")).toThrowError();
  expect(() => calculator.calculate("0 + 1")).toThrowError();
  expect(() => calculator.calculate("1 + 0")).toThrowError();
});
