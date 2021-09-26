export const property = (path: string): ((obj: object) => unknown) => {
  return function getValue(obj: object) {
    const keys = path.split('.');
    const res = keys.reduce((obj, currentKey) => {
      return obj[currentKey];
    }, obj);
    return res;
  };
};
