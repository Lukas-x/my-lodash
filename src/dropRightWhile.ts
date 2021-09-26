export const dropRightWhile = (array: unknown[], predicateFn: (o) => boolean) => {
  return array.reverse().filter(x => !predicateFn(x));
};
