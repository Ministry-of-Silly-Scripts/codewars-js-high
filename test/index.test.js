const { high } = require('../src/index');

describe('the high canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

test('high', () => {
  expect(high(0)).toBe(true);
});
