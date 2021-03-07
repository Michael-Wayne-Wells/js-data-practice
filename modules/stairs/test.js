import stairCount from "./index";

test("it returns 1 possible routes for 0 stairs", () => {
  expect(stairCount(0)).toEqual(1);
});
test("it returns 1 possible routes for 1 stairs", () => {
  expect(stairCount(1)).toEqual(1);
});
test("it returns 2 possible routes for 2 stairs", () => {
  expect(stairCount(2)).toEqual(2);
});
test("it returns 5 possible routes for 4 stairs", () => {
  expect(stairCount(4)).toEqual(5);
});
test("it returns 8 possible routes for 5 stairs", () => {
  expect(stairCount(5)).toEqual(8);
});
test("it returns 8 possible routes for 1000 stairs", () => {
  expect(stairCount(1000)).toEqual(7.0330367711422765e208);
});
