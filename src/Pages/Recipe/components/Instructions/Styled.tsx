import styled from "styled-components";

export const InstructionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: fit-content;
    padding: 5px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.mid};
    max-width: ${({ theme }) => theme.width.max};
  }
`;

interface IButtonSelect {
  selected: boolean;
}

export const ButtonSelect = styled.button<IButtonSelect>`
  min-width: 100px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.light : theme.colors.mid};
  color: ${({ theme }) => theme.colors.dark};
  border: 0;
  padding: 10px 20px;
  border-radius: 20px;
  :hover {
    filter: brightness(0.8);
  }
`;
