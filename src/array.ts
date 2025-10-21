export function range(start?: any, end?: any, step?: any) {
  start = start ? (isNaN(+start) ? 0 : +start) : 0;
  end = end ? (isNaN(+end) ? 0 : +end) : 0;
  step = step ? (isNaN(+step) ? 1 : +step) : 1;

  if ((start < end && step < 0) || (start > end && step > 0)) {
    step = -step;
  }

  const arr: number[] = [];
  for (let i = start; start > end ? i > end : i < end; i += step) {
    arr.push(i);
  }

  return arr;
}
