import estimatePi from "./index";

test("it returns a result", () => {
  expect(estimatePi(1)).toBeDefined();
});

test("it returns an estimate of pi based on n data points between 1 and 0 ", () => {
  expect(estimatePi(100000)).toBeCloseTo(3.14, 1);
});
