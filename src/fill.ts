export const fill = (
  arr: unknown[],
  value: unknown,
  start: number = 0,
  end: number = arr.length
) => {
  for (let i = start; i < end; i++) {
    arr[i] = value;
  }
  return arr;
};
