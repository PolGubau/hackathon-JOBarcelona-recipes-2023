import { TbHexagons } from "react-icons/tb";
import SearchField from "../SearchField/SearchField";
import { HeaderStyled } from "./Styled";
import Sentence from "./Sentence/Sentence";
import UndrawHandIcon from "src/assets/HandIcons/UndrawHandIcon";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="titles">
        <div className="titleIcon">
          <TbHexagons size={50} />
          <h1>Beecipes</h1>
        </div>
        <h2>Vegan, cheap and ecological recipes.</h2>
      </div>
      <div className="searchCombo">
        <SearchField />
        <Sentence />
      </div>
      <UndrawHandIcon />
    </HeaderStyled>
  );
};
export default Header;
