import { apiKey } from "src/models/url";

/**
 * Searches for recipes that match the given query and are tagged as vegetarian.
 * @param {string} query - The search query.
 * @returns {Promise<Object[]>} A promise that resolves to an array of recipe objects.
 */
export const searchRecipes = async (query: string) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=9&tags=vegetarian&diet=vegetarian&fillIngredients=true&addRecipeInformation=true&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data.results;
};
