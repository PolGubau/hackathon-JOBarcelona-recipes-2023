import { IngredientsStyled } from "./Styled";
import { autoCapitalize } from "src/utils/autoCapitalize";

interface SimpleIngredientProps {
  name: string;
  image: string;
  id: number;
  equipment?: boolean;
}

const SimpleIngredient = ({
  name,
  image,
  id,
  equipment,
}: SimpleIngredientProps) => {
  const url = equipment
    ? "https://spoonacular.com/cdn/equipment_250x250/"
    : "https://spoonacular.com/cdn/ingredients_250x250/";
  return (
    <IngredientsStyled key={id} className="ingredient">
      <img className="ingredientImage" src={`${url}${image}`} alt={name} />
      <span>{autoCapitalize(name)}</span>
    </IngredientsStyled>
  );
};
export default SimpleIngredient;
