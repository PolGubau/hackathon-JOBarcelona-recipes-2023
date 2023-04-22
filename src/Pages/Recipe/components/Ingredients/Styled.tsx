import styled from "styled-components";

export const IngredientsStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ingredientImage {
    max-width: 100px;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
    filter: chroma(color = #ffffff);
  }
`;
