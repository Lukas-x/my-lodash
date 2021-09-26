import { property } from './property';

export const differenceBy = (arr1: unknown[], arr2: unknown[], fn): unknown[] => {
  const iteratee = typeof fn === 'function' ? fn : property(fn);
  const processedValues1 = arr1.map(x => ({
    processed: iteratee(x),
    origin: x,
  }));
  const processedValues2 = arr2.map(y => iteratee(y));
  return processedValues1.filter(x => !processedValues2.includes(x.processed)).map(z => z.origin);
};
