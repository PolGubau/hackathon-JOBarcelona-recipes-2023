import { TbArrowNarrowLeft, TbHexagons, TbUser } from "react-icons/tb";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.accent};

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
  .description {
    font-size: 0.8em;
    margin: 0;
    a {
      display: inline;
      font-size: 0.8em;
      margin: 0;
      padding: 2px 5px;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.primary};
      :hover {
        color: ${({ theme }) => theme.colors.accent};
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Link to={"/"}>
        <div className="title">
          <TbHexagons size={30} />
          <h3>Beecipes</h3>
        </div>
      </Link>
      <p className="description">
        Website made in less than 24 hours as part of the {` `}
        <a
          href="https://nuwe.io/dev/competitions/job-barcelona-23/jobarcelona-23-frontend"
          target="_blank"
        >
          JOBarcelona '23 | Frontend
        </a>
        {` `}
        hackathon. Using React without IAs neither UI Frameworks. 2023 - 04 - 23
      </p>

      <Link to={"https://www.polgubauamores.me"} target="_blank">
        <TbUser />
        Pol Gubau Amores
      </Link>
    </FooterStyled>
  );
};

export default Footer;
