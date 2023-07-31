const { high, letterScore } = require('../src/index');

describe('the high canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('letterScore', () => {
  it('should return 1 for input equal to "a"', () => {
    expect(letterScore('a')).toBe(1);
  });

  it('should return 5 for input equal to "e"', () => {
    expect(letterScore('e')).toBe(5);
  });

  it('should return 26 for input equal to "z"', () => {
    expect(letterScore('z')).toBe(26);
  });
});

test('high', () => {
  expect(high(0)).toBe(true);
});
