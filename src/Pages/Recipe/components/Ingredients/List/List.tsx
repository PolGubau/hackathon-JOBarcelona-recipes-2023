import { ExtendedIngredients } from "src/types";
import Ingredient from "../Ingredient";
import styled from "styled-components";

interface IngredientListProps {
  ingredients: ExtendedIngredients[];
}
export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
`;
export const IngredientListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
`;

const IngredientList = ({ ingredients }: IngredientListProps) => {
  return (
    <SectionStyled>
      <h2 className="center bigText">Ingredients</h2>

      <IngredientListStyled>
        {ingredients.map((ingredient: ExtendedIngredients) => (
          <Ingredient key={ingredient.id} ingredient={ingredient} />
        ))}
      </IngredientListStyled>
    </SectionStyled>
  );
};
export default IngredientList;
