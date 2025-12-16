import { firstBadVersion } from './10-first-bad-version';

describe('firstBadVersion', () => {
  it('should find first bad version 4 out of 100 versions', () => {
    expect(firstBadVersion((i) => i >= 4)(100)).toBe(4);
  });

  it('should find first bad version when total equals first bad version', () => {
    expect(firstBadVersion((i) => i >= 4)(4)).toBe(4);
  });

  it('should return -1 when no bad version exists', () => {
    expect(firstBadVersion((i) => i >= 5)(3)).toBe(-1);
  });

  it('should find first bad version when it is version 1', () => {
    expect(firstBadVersion((i) => i >= 1)(1)).toBe(1);
  });

  it('should find first bad version 1 when total is 2', () => {
    expect(firstBadVersion((i) => i >= 1)(2)).toBe(1);
  });
});
