export const dropWhile = (array: unknown[], predicateFn: (o) => boolean) => {
  return array.filter(x => !predicateFn(x));
};
