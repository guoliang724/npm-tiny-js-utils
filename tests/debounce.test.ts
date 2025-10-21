import { debounce } from "../src/function";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

test("should call the function after the wait time", () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  debouncedFunc();
  jest.advanceTimersByTime(500);
  expect(func).toHaveBeenCalledTimes(0);

  jest.advanceTimersByTime(500);
  expect(func).toHaveBeenCalledTimes(1);
});

test("should handle the case where the debounce function is called multiple times", () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  debouncedFunc("a");
  debouncedFunc("b");
  debouncedFunc("c");

  jest.advanceTimersByTime(1000);
  expect(func).toHaveBeenCalledWith("c");
});

test("should reset the timer when the function is called again within the wait time", () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  debouncedFunc();
  jest.advanceTimersByTime(500);

  debouncedFunc();
  jest.advanceTimersByTime(500);
  expect(func).toHaveBeenCalledTimes(0);

  jest.advanceTimersByTime(1000);
  expect(func).toHaveBeenCalledTimes(1);
});
