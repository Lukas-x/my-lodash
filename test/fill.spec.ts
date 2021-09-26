import { fill } from '../src/fill';

const array = [1, 2, 3];

describe('fill', () => {
  it('shoud fill array (mutate)', () => {
    expect(fill(array, 'a')).toEqual(['a', 'a', 'a']);
  });

  it('shoud fill new array 1', () => {
    expect(fill(Array(3), 2)).toEqual([2, 2, 2]);
  });

  it('shoud fill new array 2', () => {
    expect(fill([4, 6, 8, 10], '*', 1, 3)).toEqual([4, '*', '*', 10]);
  });
});
