/**
 * Returns a random element from an array.
 *
 * @param {T[]} array - The array to select a random element from.
 * @returns {T} The randomly selected element.
 * @template T
 */
export const getRandomElementFromArray = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};
