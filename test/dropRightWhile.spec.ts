import { dropRightWhile } from '../src/dropRightWhile';

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];

describe('dropRightWhile', () => {
  it('shoud return one obj', () => {
    expect(dropRightWhile(users, o => !o.active)).toEqual([{ user: 'barney', active: true }]);
  });
});
