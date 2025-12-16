import { sum } from './23-create-a-sum';

describe('sum', () => {
  it('allows reusing a partially applied sum(1)', () => {
    const sum1 = sum(1);

    expect(sum1(2) == 3).toBe(true);
    expect(sum1(3) == 4).toBe(true);
  });

  it('supports chained invocations that sum to 6', () => {
    expect(sum(1)(2)(3) == 6).toBe(true);
  });

  it('supports negative numbers in the chain', () => {
    expect(sum(5)(-1)(2) == 6).toBe(true);
  });
});
