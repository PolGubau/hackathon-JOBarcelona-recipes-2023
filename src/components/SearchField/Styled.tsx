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
  height: 50px;
  border-radius: 9999px;
  padding: 30px 5px 30px 30px;
  outline: 1px solid black;
  background-color: ${({ theme }) => theme.colors.neutral};
  position: relative;
  max-width: 600px;
  overflow: hidden;

  input {
    display: flex;
    font-size: 1.4em;
    flex: 1;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.neutral};
    border: none;
    outline-style: none;
    @media (max-width: 600px) {
      font-size: 1.2em;
    }
  }
  button {
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.neutral};
    border: none;
    outline-style: none;
    cursor: pointer;
    border-radius: 9999px;
    height: 100%;
    aspect-ratio: 1/1;
    padding: 0;
    margin: 0;
    :hover {
      filter: brightness(0.8);
    }
  }
`;
