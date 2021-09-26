import { drop } from '../src/drop';

describe('drop', () => {
  it('shoud create array without first N elements', () => {
    const arr = [1, 2, 3, 4];
    expect(drop(arr, 2)).toEqual([3, 4]);
  });

  it('shoud create array without first element', () => {
    const arr = [1, 2, 3, 4];
    expect(drop(arr)).toEqual([2, 3, 4]);
  });

  it('shoud create empty array', () => {
    const arr = [1, 2, 3, 4];
    expect(drop(arr, 10)).toEqual([]);
  });
});
