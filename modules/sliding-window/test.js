import max_sub_array_of_size_k from "./index";

test("function returns max sum of subarrays defined by k", () => {
  const array = [
    2,
    4,
    5,
    6,
    4,
    2,
    1,
    2,
    6,
    7,
    8,
    4,
    2,
    4,
    7,
    1,
    8,
    6,
    4,
    2,
    6,
    7,
    8,
    4,
    5,
    7,
    3,
    7,
    8,
    5,
    4,
    3,
    2,
  ];
  const ks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sums = [8, 15, 21, 25, 31, 37, 42, 49, 55, 60];

  ks.forEach((k, i) => {
    let result = max_sub_array_of_size_k(k, array);
    expect(result).toEqual(sums[i]);
  });
});
