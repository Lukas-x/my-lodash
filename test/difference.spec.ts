import { difference } from '../src/difference';

describe('difference', () => {
  it('shoud return elements that not present in second array', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4];
    const actual = difference(arr1, arr2);
    expect(actual).toEqual([1, 2]);
  });
});
