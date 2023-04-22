/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export const autoCapitalize = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
