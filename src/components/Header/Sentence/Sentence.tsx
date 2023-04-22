import {
  TbDice1,
  TbDice2,
  TbDice3,
  TbDice4,
  TbDice5,
  TbDice6,
} from "react-icons/tb";
import { useState } from "react";
import { SearchedRecipesState } from "src/State/Atom";
import { useRecoilState } from "recoil";
import { shuffleArray } from "src/utils/shuffleArray";

const AllDices = () => {
  const dices = [
    <TbDice1 />,
    <TbDice2 />,
    <TbDice3 />,
    <TbDice4 />,
    <TbDice5 />,
    <TbDice6 />,
  ];
  return dices;
};
const getRandomDice = () => {
  const dices = AllDices();
  const randomDice = dices[Math.floor(Math.random() * dices.length)];
  return randomDice;
};

const Sentence = () => {
  const [recipes, setRecipes] = useRecoilState(SearchedRecipesState);
  const [dice, setDice] = useState(getRandomDice());

  const handleClick = () => {
    const shuffled: any = shuffleArray(recipes);
    setRecipes(shuffled);
  };

  return (
    <p
      className="sentence"
      onMouseEnter={() => setDice(getRandomDice())}
      onClick={handleClick}
    >
      {dice}
      Not decided yet, give me ideas
    </p>
  );
};
export default Sentence;
