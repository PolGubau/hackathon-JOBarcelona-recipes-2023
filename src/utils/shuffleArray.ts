/**
 * Shuffles the elements of an array randomly.
 *
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} The shuffled array.
 * @template T
 */
export const shuffleArray = <T>(array: T[]): T[] =>
  [...array].sort(() => Math.random() - 0.5);
