const { high, letterScore, wordScore } = require('../src/index');

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

describe('wordScore', () => {
  it('should return 1 for input equal to "a"', () => {
    expect(wordScore('a')).toBe(1);
  });
});

describe('high', () => {
  it('should return "a" for input equal to "a"', () => {
    expect(high('a')).toBe('a');
  });

  it('should return "b" for input equal to "a b"', () => {
    expect(high('a b')).toBe('b');
  });

  it('should return "c" for input equal to "b a c"', () => {
    expect(high('b a c')).toBe('c');
  });
});
