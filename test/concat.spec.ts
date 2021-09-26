import { concat } from '../src/concat';

describe('concat', function () {
  it('should concat arrays and values', () => {
    const act = concat([1], 2, [3], [[4]]);
    expect(act).toEqual([1, 2, 3, [4]]);
  });

  it('should shallow clone `array', () => {
    const act = concat([2, 3, 4]);
    expect(act).toEqual([2, 3, 4]);
  });
});
