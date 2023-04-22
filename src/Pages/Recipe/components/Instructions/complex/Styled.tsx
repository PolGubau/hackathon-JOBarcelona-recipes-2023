import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 100%;
`;
export const ComplexStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: ${({ theme }) => theme.width.max};
  width: 100%;
`;
export const StepStyled = styled.article`
  display: flex;
  border-radius: 40px;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 30px;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
  background-color: ${({ theme }) => theme.colors.mid};
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      h3 {
        min-width: 160px;
        font-size: 3em;
        margin: 0;
      }
    }
    .icon {
      font-size: 30px;
    }
  }
  .images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
`;
