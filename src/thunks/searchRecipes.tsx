import { apiKey } from "src/models/url";

export const searchRecipes = async (query: string) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=9&tags=vegetarian&diet=vegetarian&fillIngredients=true&addRecipeInformation=true&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data.results;
};
