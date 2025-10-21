import { range } from "../src/arrary";

test("should handle valid case", () => {
  expect(range(1, 6)).toEqual([1, 2, 3, 4, 5]);
  expect(range(1, 6, 2)).toEqual([1, 3, 5]);
  expect(range(6, 1)).toEqual([6, 5, 4, 3, 2]);
  expect(range(6, 1, -2)).toEqual([6, 4, 2]);
});

test("should handle error case", () => {
  expect(range()).toEqual([]);
  expect(range("a", "b", "c")).toEqual([]);
});

test("should handle edge case", () => {
  expect(range(2)).toEqual([2, 1]);
  expect(range(-2)).toEqual([-2, -1]);
  expect(range(1, 6, -2)).toEqual([1, 3, 5]);
  expect(range(6, 1, 2)).toEqual([6, 4, 2]);
});
