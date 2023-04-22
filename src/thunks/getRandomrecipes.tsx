export const getRandomRecipes = async (limit: number = 9) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=${limit}&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  return data.recipes;
};
