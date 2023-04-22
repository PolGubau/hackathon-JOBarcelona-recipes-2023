import { useState } from "react";
import { HomeSubTitle, SearchedRecipesState } from "src/State/Atom";
import { useRecoilState } from "recoil";
import { getRandomRecipes } from "src/thunks/getRandomrecipes";
import useLocalStorage from "src/hooks/useLocalStorage";
import { getRandomDice } from "./Dice";
import { getRandomElementFromArray } from "src/utils/getRandomElementFromArray";
import { randomMessage } from "src/models/texts";

const Sentence = () => {
  const [recipes, setRecipes] = useLocalStorage("recipes", []);
  const [SearchedRecipes, setSearchedRecipes] =
    useRecoilState(SearchedRecipesState);
  SearchedRecipes.length === 0 && setSearchedRecipes(recipes);
  const [subTitle, setSubTitle] = useRecoilState<string>(HomeSubTitle);
  const getRecipes = async () => {
    const response = getRandomRecipes();
    const data = await response;
    data && setRecipes(data);
    data && setSubTitle(getRandomElementFromArray(randomMessage));
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
