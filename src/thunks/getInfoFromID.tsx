import { apiKey } from "src/models/url";

export const getInfoFromID = async (id: string) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data;
};
