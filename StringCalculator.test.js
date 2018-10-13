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
test('1, 2, 3, 4 should return 3', () => {
  expect(calc("1,2,3,4")).toBe(3);
});


/*
test("", 0);
test("1", 1);
test("1,2", 3);
test("1,2,3,4", 10);

function test(i, o) {
	expect(calc.add(i).toBe(o));
}
*/