export const find = (arr: unknown[], fn: (value) => boolean, fromIndex: number = 0) => {
  return arr.slice(fromIndex, arr.length).filter(fn);
};
