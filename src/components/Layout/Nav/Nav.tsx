import { TbHexagons } from "react-icons/tb";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import UserHandIcon from "src/assets/HandIcons/UserHandIcon";
export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.neutral};
  /* border-bottom: 3px solid ${({ theme }) => theme.colors.mid}; */

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: transparent;
    border: none;
    font-size: 1.1em;
    font-weight: 500;
  }
  .title {
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    h3 {
      font-size: 1.2em;
      font-weight: 500;
      margin: 0;
    }
  }
`;

const Nav = () => {
  const location = useLocation();
  return (
    <NavStyled>
      <Link to={"/"}>
        <div className="title">
          <TbHexagons size={30} />
          <h3>Beecipes</h3>
        </div>
      </Link>
      {location.pathname !== "/about" && (
        <Link to={"/about"}>
          <UserHandIcon style={{ transform: "scale(0.5)" }} />
          About
        </Link>
      )}
    </NavStyled>
  );
};

export default Nav;
