//const calc = require('./StringCalculator');
const calc = require('./add');

test('Empty string should return 0', () => {
  expect(calc("")).toBe(0);
});
test('1 should return 1', () => {
  expect(calc("1")).toBe(1);
});
test('1, 2 should return 3', () => {
  expect(calc("1,2")).toBe(3);
});
test('1, 2, 3, 4 should return 10', () => {
  expect(calc("1,2,3,4")).toBe(10);
});
test('2, 0, 0, 0, 5, 8 should return 15', () => {
  expect(calc("2,0,0,0,5,8")).toBe(15);
});
test('1\n2,3 should return 6', () => {
  expect(calc("1\n2,3")).toBe(6);
});
test('1, 2\n3\n4 should return 10', () => {
  expect(calc("1,2\n3\n4")).toBe(10);
});

test('-1, 2 should throw Negatives not allowed: -1', () => {
	function testCalc() {
		calc("-1");
	}
	expect(testCalc).toThrowError('Negatives not allowed: -1');
});

test('2, -4, 3, -5 should throw Negatives not allowed: -4,-5', () => {
	function testCalc() {
		calc("2,-4,3,-5");
	}
	expect(testCalc).toThrowError('Negatives not allowed: -4,-5');
});

test('1001, 2 should return 2', () => {
  expect(calc("1001,2")).toBe(2);
});
test('//;\n1;2 should return 3', () => {
  expect(calc("//;\n1;2")).toBe(3);
});