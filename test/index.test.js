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
});

test('high', () => {
  expect(high(0)).toBe(true);
});
