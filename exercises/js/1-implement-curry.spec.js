import { curry } from './1-implement-curry';

describe('curry', () => {
  const join = (a, b, c) => `${a}_${b}_${c}`;

  it('curries a function with 3 arguments (all at once)', () => {
    const curriedJoin = curry(join);
    expect(curriedJoin(1, 2, 3)).toBe('1_2_3');
  });

  it('curries a function with 3 arguments (one by one)', () => {
    const curriedJoin = curry(join);
    expect(curriedJoin(1)(2)(3)).toBe('1_2_3');
  });

  it('curries a function with 3 arguments (first arg, then rest)', () => {
    const curriedJoin = curry(join);
    expect(curriedJoin(1)(2, 3)).toBe('1_2_3');
  });

  it('curries a function with 3 arguments (first two, then last)', () => {
    const curriedJoin = curry(join);
    expect(curriedJoin(1, 2)(3)).toBe('1_2_3');
  });
});
