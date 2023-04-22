import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.accent};
  .titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .titleIcon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
  .searchCombo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .sentence {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px 20px;
      border-radius: 40px;
      width: fit-content;
      background-color: ${({ theme }) => theme.colors.accent};
      :hover {
        cursor: pointer;
        filter: brightness(0.9);
      }
    }
  }
`;
