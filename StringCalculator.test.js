const calc = require('./StringCalculator');

test('Empty string should return 0', () => {
  expect(calc.add("")).toBe(0);
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