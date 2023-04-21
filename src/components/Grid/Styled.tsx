import styled from "styled-components";

export const GridRecipesStyled = styled.section`
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
    background-color: ${({ theme }) => theme.colors.primary};
    overflow: hidden;
    color: ${({ theme }) => theme.colors.neutral};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 20px;
    transition: all 0.1s ease-in-out;
    border-radius: 20px;
    :hover {
      border: 1px solid ${({ theme }) => theme.colors.neutral};
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: scale(0.98);
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
