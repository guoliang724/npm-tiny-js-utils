import { truncate } from "../src/string";

test("should handle truncating strings to a given length", () => {
  expect(truncate("Hello World", 5)).toBe("He...");
  expect(truncate("Hello World", 10)).toBe("Hello W...");
  expect(truncate("Hello World", 11)).toBe("Hello World");
  expect(truncate("Hello World", 15)).toBe("Hello World");
  expect(truncate("1231323423424", 5)).toBe("12...");
  expect(truncate("12345", 5)).toBe("12345");
  expect(truncate("1231323423424", 5, "-")).toBe("1231-");
});

test("should handle the length parameter is not a number", () => {
  expect(truncate("Hello World", NaN)).toBe("");
  expect(truncate("Hello World", "abc" as any)).toBe("");
});

test("should handle empty strings and undefined input", () => {
  expect(truncate("", 5)).toBe("");
  expect(truncate(undefined, 5)).toBe("un...");
});

test("should handle omission parameter", () => {
  expect(truncate("Hello World", 5, "...")).toBe("He...");
  expect(truncate("Hello World", 10, "---")).toBe("Hello W---");
});

test("should always return a string", () => {
  expect(typeof truncate("Hello World", 5)).toBe("string");
  expect(typeof truncate("Hello World", NaN)).toBe("string");
  expect(typeof truncate(undefined, 5)).toBe("string");
});
