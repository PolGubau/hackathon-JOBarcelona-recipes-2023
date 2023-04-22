/**
 * This is a React component that renders the header of the web page. It imports several other components and icons, such as TbHexagons from the react-icons/tb library, SearchField and Sentence from local files, and UndrawHandIcon from an SVG file.

The Header component returns a JSX structure with a HeaderStyled container that has three main parts: titles, searchCombo, and UndrawHandIcon. In titles, it renders the Beecipes title and a subtitle. In searchCombo, it renders a SearchField component and a Sentence component that displays a random sentence. Finally, it renders an SVG image of a hand holding a smartphone, imported as UndrawHandIcon.

The component does not receive any props.
 */

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
