import { Recipe } from "src/types";
import { GridRecipesStyled } from "./Styled";
import { Link } from "react-router-dom";

interface GridRecipesProps {
  elements: Recipe[];
  title?: string;
}

const GridRecipes = ({ elements, title }: GridRecipesProps) => {
  return (
    <GridRecipesStyled>
      {title && <h2>{title}</h2>}

      <section className="allElements">
        {elements.map((element) => (
          <Link
            to={`./recipes/${element.id}`}
            key={element.id}
            className="element"
          >
            <img src={element.image} alt={element.title} />
            <p>{element.title}</p>
          </Link>
        ))}
      </section>
    </GridRecipesStyled>
  );
};
export default GridRecipes;
