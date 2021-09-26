export const dropRight = (array: unknown[], drop: number = 1) => {
  const cloned = [...array];
  if (drop >= array.length) {
    return [];
  }
  for (let i = 0; i < drop; i++) {
    cloned.pop();
  }
  return cloned;
};
