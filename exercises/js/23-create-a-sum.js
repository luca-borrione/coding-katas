// This is a JavaScript coding problem from BFE.dev
// https://bigfrontend.dev/problem/create-a-sum

/**
 * @param {number} num
 */
export function sum(...args) {
  const total = args.reduce((acc, x) => acc + x, 0);
  const curried = sum.bind(this, ...args);
  curried.valueOf = () => total;
  curried.toString = () => total;
  return curried;
}
