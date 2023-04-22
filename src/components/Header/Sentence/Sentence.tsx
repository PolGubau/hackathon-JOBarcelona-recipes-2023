/**

This component renders a sentence and a dice icon. When the mouse hovers over the sentence or the user clicks on it, it calls a function that gets a random recipe and updates the local storage with it. It also updates the home subtitle and the SearchedRecipes state with the fetched data. The dice icon changes randomly when the mouse hovers over the sentence.
*/
import { useState } from "react";
import { HomeSubTitle, SearchedRecipesState } from "src/State/Atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getRandomRecipes } from "src/thunks/getRandomrecipes";
import useLocalStorage from "src/hooks/useLocalStorage";
import { getRandomDice } from "./Dice";
import { getRandomElementFromArray } from "src/utils/getRandomElementFromArray";
import { randomMessage } from "src/models/texts";
const Sentence = () => {
  // Get and set recipes from/to local storage
  const [recipes, setRecipes] = useLocalStorage("recipes", []);

  // Get and set SearchedRecipes state
  const [SearchedRecipes, setSearchedRecipes] =
    useRecoilState(SearchedRecipesState);

  // If SearchedRecipes is empty, set it to the recipes from local storage
  SearchedRecipes.length === 0 && setSearchedRecipes(recipes);

  // Get and set HomeSubTitle state
  const setSubTitle = useSetRecoilState<string>(HomeSubTitle);

  // Fetch a random recipe, update local storage, HomeSubTitle and SearchedRecipes state
  const getRecipes = async () => {
    const response = getRandomRecipes();
    const data = await response;
    data && setRecipes(data);
    data && setSubTitle(getRandomElementFromArray(randomMessage));
    data && setSearchedRecipes(data);
  };

  // Get and set the dice state
  const [dice, setDice] = useState(getRandomDice());

  return (
    <p
      className="sentence"
      onMouseEnter={() => setDice(getRandomDice())}
      onClick={getRecipes}
    >
      {dice}
      Not decided yet, give me ideas
    </p>
  );
};

export default Sentence;
