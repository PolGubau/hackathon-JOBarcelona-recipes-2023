import { getRandomPlaceholder } from "src/utils/inputPlaceholder";
import { SearchFieldStyled } from "./Styled";
import { TbSearch } from "react-icons/tb";
import { SearchedRecipesState } from "src/State/Atom";
import { useRecoilState } from "recoil";
import { useMemo, useRef } from "react";
import { searchRecipes } from "src/thunks/searchRecipes";
import useLocalStorage from "src/hooks/useLocalStorage";

const SearchField = () => {
  const inputRef = useRef(null);
  const [recipes, setRecipes] = useLocalStorage("recipes", []);

  const [SearchedRecipes, setSearchedRecipes] =
    useRecoilState(SearchedRecipesState);

  SearchedRecipes.length === 0 && setSearchedRecipes(recipes);

  const getRecipes = async (query: string) => {
    const response = searchRecipes(query);
    const data = await response;
    setRecipes(data);
    setSearchedRecipes(data);
  };

  const placeHolder = useMemo(() => getRandomPlaceholder(), []);

  const handleSearchDirect = (e: any) => {
    e.preventDefault();
    const current: any = inputRef?.current;
    const newValue: string = current.value;
    getRecipes(newValue);
  };

  return (
    <SearchFieldStyled onSubmit={handleSearchDirect}>
      <input ref={inputRef} type="text" placeholder={placeHolder} autoFocus />
      <button type="submit">
        <TbSearch size={30} className="icon" />
      </button>
    </SearchFieldStyled>
  );
};
export default SearchField;
