import styled from "styled-components";

export const SearchFieldStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0px;
  place-items: center;
  -webkit-box-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral};
  height: 50px;
  border-radius: 9999px;
  padding: 30px 5px 30px 30px;
  outline: 1px solid black;
  max-width: 600px;

  input {
    display: flex;
    font-size: 1.4em;
    flex: 1;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.neutral};
    border: none;
    outline-style: none;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.neutral};
    border: none;
    outline-style: none;
    cursor: pointer;
    padding: 0px;
    margin: 0px;
    border-radius: 9999px;
    padding: 10px;
    :hover {
      filter: brightness(0.8);
    }
  }
`;
