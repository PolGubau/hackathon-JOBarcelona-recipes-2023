import { AnalyzedInstructions } from "src/types";
import SimpleIngredientList from "../../SimpleIngredients/List/SimpleList";
import { ComplexStyled, SectionStyled, StepStyled } from "./Styled";

const SimpleInstructions = ({
  instructions,
}: {
  instructions: AnalyzedInstructions[];
}) => {
  return (
    <SectionStyled>
      {instructions.map((step, index) => {
        return (
          <ComplexStyled key={index + step.steps[0].number}>
            {step.steps.map((step, index) => {
              return (
                <StepStyled key={index}>
                  <header>
                    <h3>Step {step.number}</h3>
                    <p>{step.step}</p>
                  </header>
                  <div className="images">
                    {step.ingredients && step.ingredients.length > 0 && (
                      <article>
                        <h4>Ingredients</h4>
                        <SimpleIngredientList ingredients={step.ingredients} />
                      </article>
                    )}
                    {step.equipment && step.equipment.length > 0 && (
                      <article>
                        <h4>Equipment</h4>
                        <SimpleIngredientList
                          equipment
                          ingredients={step.equipment}
                        />
                      </article>
                    )}
                  </div>
                </StepStyled>
              );
            })}
          </ComplexStyled>
        );
      })}
    </SectionStyled>
  );
};
export default SimpleInstructions;
