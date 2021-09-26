import { differenceBy } from '../src/differenceBy';

describe('differenceBy', () => {
  it('shoud return elements that not present in second array', () => {
    const actual = differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    const actual2 = differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x');
    expect(actual).toEqual([1.2]);
    expect(actual2).toEqual([{ x: 2 }]);
  });
});
