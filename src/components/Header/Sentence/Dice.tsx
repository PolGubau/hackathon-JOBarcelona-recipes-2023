import {
  TbDice1,
  TbDice2,
  TbDice3,
  TbDice4,
  TbDice5,
  TbDice6,
} from "react-icons/tb";

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
export const getRandomDice = () => {
  const dices = AllDices();
  const randomDice = dices[Math.floor(Math.random() * dices.length)];
  return randomDice;
};
