export const inputPlaceholder = [
  "Spicy Salad with Kidney Beans, Cheddar, and Nuts",
  "Cinnamon Eggless Coffee Cake",
  "Vegan Chocolate Chip Cookies",
  "Wild Blackberry Sorbet With Garden Mint & Lavender",
  "Mulled Wine with Orange & Cinnamon",
  "Vegetarian Shepherd’s Pie",
  "Chocolate Pistachio Energy Bites",
  "Cooper’s Hawk’s Favorite Vegan Chocolate Chip Cookies",
  "Cookie Dough Truffles",
  "Nutty Chocolate Chip Cookies",
  "Potato and Leek Soup",
  "Polenta with Mushrooms and Spinach",
  "Ancho Chili and Lime Marinated Tofu",
];
export const getRandomPlaceholder = () => {
  const randomIndex = Math.floor(Math.random() * inputPlaceholder.length);
  return inputPlaceholder[randomIndex];
};
