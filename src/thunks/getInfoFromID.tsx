import { apiKey } from "src/models/url";

/**
 * Fetches information for a recipe with the specified ID from the Spoonacular API.
 * @param id - The ID of the recipe to fetch information for.
 * @returns A promise that resolves with the recipe information.
 */
export const getInfoFromID = async (id: string) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data;
};
