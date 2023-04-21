import styled from "styled-components";

export const SingleStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px;
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
    margin-bottom: 20px;
  }
  .icons {
    min-width: 100px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }
  .stats {
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    width: 100%;
    max-width: 500px;
  }

  img {
    width: 100%;
    max-width: 500px;
    height: 100%;
    object-fit: cover;
    position: relative;
    border-radius: 40px;
  }
`;
