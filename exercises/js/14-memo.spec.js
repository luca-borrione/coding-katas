import { memo } from './14-memo';

describe('memo()', () => {
  it('memo() should return a function', () => {
    const func = () => {};
    const memoed = memo(func);
    expect(typeof memoed).toBe('function');
  });

  it('memo() should return a function when resolver is passed', () => {
    const func = () => {};
    const memoed = memo(func, () => 'key');
    expect(typeof memoed).toBe('function');
  });

  it('memo() should use passed function to get the result', () => {
    const func = jest.fn((a, b) => a + b);
    const memoed = memo(func);

    expect(memoed(1, 2)).toBe(3);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1, 2);
  });

  it('memo() should relay the right `this` and `arguments`', () => {
    function funcThis(b) {
      console.log(this);
      return `${this.a}_${b}`;
    }
    const memoed = memo(funcThis);
    const a = { a: 1, memoed };
    expect(a.memoed(2)).toBe('1_2');
  });

  it('memoed function should return the result right away if cache has entry', () => {
    let callCount = 0;
    const func = (a, b) => {
      callCount += 1;
      return a + b;
    };
    const memoed = memo(func);
    memoed(1, 2);
    expect(callCount).toBe(1);
    memoed(1, 2);
    expect(callCount).toBe(1);
    memoed(1, 3);
    expect(callCount).toBe(2);
  });

  it('should use resolver to get the cache key if passed', () => {
    let callCount = 0;
    const func = (a, b) => {
      callCount += 1;
      return a + b;
    };
    const memoed = memo(func, (a, b) => ((a + b) % 2 === 0 ? 'even' : 'odd'));
    memoed(1, 2);
    expect(callCount).toBe(1);
    memoed(1, 4);
    expect(callCount).toBe(1);
    memoed(1, 3);
    expect(callCount).toBe(2);
    memoed(11, 31);
    expect(callCount).toBe(2);
  });
});
