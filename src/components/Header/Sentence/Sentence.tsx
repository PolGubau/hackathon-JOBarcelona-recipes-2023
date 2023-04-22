import { useState } from "react";
import { SearchedRecipesState } from "src/State/Atom";
import { useRecoilState } from "recoil";
import { getRandomRecipes } from "src/thunks/getRandomrecipes";
import { useLocalStorage } from "pol-ui";
import { getRandomDice } from "./Dice";

const Sentence = () => {
  const [recipes, setRecipes] = useLocalStorage("recipes", []);
  const [SearchedRecipes, setSearchedRecipes] =
    useRecoilState(SearchedRecipesState);
  SearchedRecipes.length === 0 && setSearchedRecipes(recipes);

  const getRecipes = async () => {
    const response = getRandomRecipes();
    const data = await response;
    data && setRecipes(data);
    data && setSearchedRecipes(data);
  };
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
