import Ingredient from "../SimpleIngredient";
import styled from "styled-components";

interface Props {
  ingredients: BasicElement[];
  equipment?: boolean;
}
export interface BasicElement {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export const SimpleIngredientListStyled = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  list-style: none;
  max-width: ${({ theme }) => theme.width.max};
`;

const SimpleIngredientList = ({ ingredients, equipment }: Props) => {
  return (
    <>
      <SimpleIngredientListStyled>
        {ingredients.map((ingredient) => (
          <Ingredient
            equipment={equipment}
            key={ingredient.id}
            id={ingredient.id}
            name={ingredient.name}
            image={ingredient.image}
          />
        ))}
      </SimpleIngredientListStyled>
    </>
  );
};
export default SimpleIngredientList;
