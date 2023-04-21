import { Recipe } from "types";
import { GridRecipesStyled } from "./Styled";

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
          <article key={element.id} className="element">
            <img src={element.image} alt={element.title} />
            {element.title}
          </article>
        ))}
      </section>
    </GridRecipesStyled>
  );
};
export default GridRecipes;
