// This is a JavaScript coding problem from BFE.dev
// https://bigfrontend.dev/problem/implement-general-memoization-function

/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
export function memo(func, resolver = () => '') {
  const cache = {};
  return function (...args) {
    const key = resolver(...args) || args.join('_');
    return (cache[key] ??= func.call(this, ...args));
  };
}
