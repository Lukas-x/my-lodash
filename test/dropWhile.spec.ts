import { dropRightWhile } from '../src/dropRightWhile';

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

describe('dropRightWhile', () => {
  it('shoud return one obj', () => {
    expect(dropRightWhile(users, o => !o.active)).toEqual([{ user: 'pebbles', active: true }]);
  });
});
