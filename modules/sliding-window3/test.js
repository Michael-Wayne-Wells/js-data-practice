import fruits_into_baskets from "./index";

test("it returns the maximum number of two unique fruits in both baskets 3.", () => {
  expect(fruits_into_baskets(["A", "B", "C", "A", "C"])).toEqual(3);
});
test("it returns the maximum number of two unique fruits in both baskets.", () => {
  expect(fruits_into_baskets(["A", "B", "C", "B", "B", "C"])).toEqual(5);
});
