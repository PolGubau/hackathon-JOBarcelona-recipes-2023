import styled from "styled-components";

export const SingleStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  flex-wrap: nowrap;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }
  .topPart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: ${({ theme }) => theme.width.max};

    width: 100%;
    margin-bottom: 20px;
  }
  .icons {
    flex-wrap: wrap;
    min-width: 100px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    .icon {
      list-style: none;
    }
  }
  .stats {
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    width: 100%;
    max-width: ${({ theme }) => theme.width.max};

    .notes {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: ${({ theme }) => theme.colors.mid};
      padding: 20px;
      border-radius: 30px;
    }
  }



  .diets {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    p {
      font-size: 1.2em;
      background-color: ${({ theme }) => theme.colors.mid};
      padding: 10px 20px;
      border-radius: 30px;
    }
  }
`;
