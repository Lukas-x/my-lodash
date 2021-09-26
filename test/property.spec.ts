import { property } from '../src/property';

describe('property', () => {
  it('should create a function that plucks a property value of a given object', () => {
    const obj = {
      user: {
        id: 1,
        info: {
          address: {
            city: 'Tokyo',
          },
        },
      },
    };
    const getValue = property('user.info.address.city');
    expect(getValue(obj)).toBe('Tokyo');
  });
});
