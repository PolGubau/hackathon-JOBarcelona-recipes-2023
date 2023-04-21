export const apiKey = "b44b6dd9cc51420cacee8374b6b474e8";

export const url = {
  AUTOCOMPLETE:
    "https://api.spoonacular.com/recipes/autocomplete?number=10&query=",
  RANDOM: "https://api.spoonacular.com/recipes/random",
};

export const createUrl = (url: string, query?: string) => {
  return `${url}${query}&apiKey=${apiKey}`;
};
