export const drop = (array: unknown[], drop: number = 1): unknown[] => {
  const cloned = [...array];
  if (drop >= array.length) {
    return [];
  }
  for (let i = 0; i < drop; i++) {
    cloned.shift();
  }
  return cloned;
};
