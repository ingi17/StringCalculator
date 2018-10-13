const calc = require('./StringCalculator');

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
test('1, 2\n3\n4 should return 10', () => {
  expect(calc("-1")).toBe(10);
});

test('Negatives not allowed', () => {
	function testCalc(input) {
		calc(input);
	}
	expect(testCalc("-1,2")).toThrowError("Negatives not allowed: -1");
	expect(testCalc("2,-4,3,-5")).toThrowError(/Negatives/);
});
test('2Negatives not allowed2', () => {
	function testCalc() {
		calc("-1,2");
	}
	expect(testCalc()).toThrowError();
});


/*
test('-1, 2 should throw Negatives not allowed: -1', () => {
  expect(calc("-1,2")).toThrow();
});
test('2, -4, 3, -5 should throw Negatives not allowed: -4,-5', () => {
  expect(calc("2,-4,3,-5")).toThrow();
});
test('Negatives not allowed', () => {
	var e = null;
	function testCalc(input) {
		try { calc(input); }
		catch(ex) { e = ex; }
	}
  testCalc("-1,2");
	expect(e).toBeDefined();
	expect(testCalc("2,-4,3,-5")).toThrowError(/Negatives/);
});
*/