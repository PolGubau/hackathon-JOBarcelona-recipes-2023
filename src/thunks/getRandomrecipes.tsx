/**

Fetches an array of 9 random vegetarian recipes from the Spoonacular API.
@async
@function
@returns {Promise<Object[]>} Array of objects representing the recipes
@throws {Error} If the API request fails
*/

import { apiKey } from "src/models/url";

export const getRandomRecipes = async () => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data.recipes;
};
