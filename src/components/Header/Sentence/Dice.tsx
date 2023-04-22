import {
  TbDice1,
  TbDice2,
  TbDice3,
  TbDice4,
  TbDice5,
  TbDice6,
} from "react-icons/tb";
/**
 * Returns an array containing all the possible dice components
 * @returns {JSX.Element[]} - The array of dice components
 */
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
/**
 * Returns a random dice component from an array of dice components
 * @returns {JSX.Element} - The random dice component
 */
export const getRandomDice = () => {
  const dices = AllDices();
  const randomDice = dices[Math.floor(Math.random() * dices.length)];
  return randomDice;
};
