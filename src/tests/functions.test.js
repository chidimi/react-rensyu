const timesTwo = (x) => {
  return x * 2;
}

test("multiplies by two", () => {
  expect(timesTwo(2)).toBe(4);
});
