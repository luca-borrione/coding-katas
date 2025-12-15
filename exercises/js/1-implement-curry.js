// This is a JavaScript coding problem from BFE.dev
// https://bigfrontend.dev/problem/implement-curry

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
export function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
