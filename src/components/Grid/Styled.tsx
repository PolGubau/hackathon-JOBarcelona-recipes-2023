import styled from "styled-components";

export const GridRecipesStyled = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
  .allElements {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1rem 0px;
    place-items: center;
    -webkit-box-align: center;
    place-content: center;
    -webkit-box-pack: center;
    align-items: stretch;
    justify-items: stretch;
    align-content: center;
    justify-content: center;
  }
  .element {
    overflow: hidden;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    transition: all 0.1s ease-in-out;
    border-radius: 20px;
    .elementli {
      list-style: none;
    }
    :hover {
      transform: scale(0.98);
      filter: brightness(0.9);
    }

    img {
      border-radius: 10px;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    p {
      margin: 10px 0;
      text-align: center;
    }
  }
`;
