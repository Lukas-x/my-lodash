import { chunk } from '../src/chunk';

describe('chunk', function () {
  const array = [0, 1, 2, 3, 4, 5];

  it('should return chunked arrays', function () {
    const actual = chunk(array, 3);
    expect(actual).toEqual([
      [0, 1, 2],
      [3, 4, 5],
    ]);
  });

  it('should return the last chunk as remaining elements', function () {
    const actual = chunk(array, 4);
    expect(actual).toEqual([
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });
});
