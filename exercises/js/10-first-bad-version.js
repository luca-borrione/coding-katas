// This is a JavaScript coding problem from BFE.dev
// https://bigfrontend.dev/problem/first-bad-version

/**
 * @typedef {(version: number) => boolean} IsBad
 */

/**
 * @param {IsBad} isBad
 * @return {(v: number) => number}
 */
// Inefficient but beatiful
// export function firstBadVersion(isBad) {
//   return (version) =>
//     Array(version)
//       .fill()
//       .map((_, i) => i + 1)
//       .find((x) => isBad(x)) || -1;
// }

export function firstBadVersion(isBad) {
  return (version) => {
    if (!isBad(version)) {
      return -1;
    }
    for (let i = 0; i <= version; i++) {
      if (isBad(i)) {
        return i;
      }
    }
  };
}
