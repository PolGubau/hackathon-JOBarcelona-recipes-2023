import { TbHexagons } from "react-icons/tb";
import SearchField from "../SearchField/SearchField";
import { HeaderStyled } from "./Styled";


const Header = () => {
  return (
    <HeaderStyled>
      <div className="flex marginTop">
        <TbHexagons size={50} />
        <h1>Beecipes</h1>
      </div>
      <h2>Vegan, cheap and ecological recipes.</h2>
      <SearchField />
    </HeaderStyled>
  );
};
export default Header;
