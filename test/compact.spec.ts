import { compact } from '../src/compact';

describe('compact', function () {
  it('should filter falsey values', () => {
    const arrayToCreate = [0, 1, false, 2, '', 3];
    expect(compact(arrayToCreate)).toStrictEqual([1, 2, 3]);
  });
});
