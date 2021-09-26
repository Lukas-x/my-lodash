import { find } from '../src/find';

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 39, active: true },
];

describe('find', () => {
  it('shoud find user', () => {
    expect(find(users, o => o.age < 40 && o.active)).toStrictEqual([
      {
        user: 'barney',
        age: 36,
        active: true,
      },
      { user: 'pebbles', age: 39, active: true },
    ]);
  });

  it('shoud find user from index', () => {
    expect(find(users, o => o.age < 40 && o.active, 1)).toStrictEqual([
      {
        user: 'pebbles',
        age: 39,
        active: true,
      },
    ]);
  });

  it('shoud not find any users', () => {
    expect(find(users, o => o.age < 40 && !o.active)).toStrictEqual([]);
  });
});
