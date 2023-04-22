import styled from "styled-components";

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral};
  color: ${({ theme }) => theme.colors.primary};
  * {
    box-sizing: border-box;
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }
  > main {
    flex: 1;
  }

  .accent {
    color: ${({ theme }) => theme.colors.accent};
  }
  .bgAccent {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  .importedIcon {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
