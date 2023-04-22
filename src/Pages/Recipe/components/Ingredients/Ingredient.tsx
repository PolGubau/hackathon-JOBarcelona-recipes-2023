import { ExtendedIngredients } from "src/types";
import { IngredientsStyled } from "./Styled";
import { autoCapitalize } from "src/utils/autoCapitalize";

interface IngredientProps {
  ingredient: ExtendedIngredients;
}

const Ingredient = ({ ingredient }: IngredientProps) => {
  return (
    <IngredientsStyled key={ingredient.id} className="ingredient">
      <img
        className="ingredientImage"
        src={`https://spoonacular.com/cdn/ingredients_250x250/${ingredient.image}`}
        alt={ingredient.name}
      />
      <span>
        {ingredient.amount} {ingredient.unit} -{" "}
        {autoCapitalize(ingredient.name)}
      </span>
    </IngredientsStyled>
  );
};
export default Ingredient;
