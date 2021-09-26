import { dropRight } from '../src/dropRight';

describe('dropRight', () => {
  it('shoud create array without last N elements', () => {
    const arr = [1, 2, 3, 4];
    expect(dropRight(arr, 2)).toEqual([1, 2]);
  });

  it('shoud create array without last element', () => {
    const arr = [1, 2, 3, 4];
    expect(dropRight(arr)).toEqual([1, 2, 3]);
  });

  it('shoud create empty array', () => {
    const arr = [1, 2, 3, 4];
    expect(dropRight(arr, 10)).toEqual([]);
  });
});
