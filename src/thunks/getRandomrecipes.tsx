import { apiKey } from "src/models/url";

export const getRandomRecipes = async () => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data.recipes;
};
