const estimatePi = require("./index");

test("it returns a result", () => {
  expect(estimatePi()).toBeDefined();
});
