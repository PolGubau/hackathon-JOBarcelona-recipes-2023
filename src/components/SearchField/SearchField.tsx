import { SearchFieldStyled } from "./Styled";
import { TbSearch } from "react-icons/tb";
import { HomeSubTitle, SearchedRecipesState } from "src/State/Atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useMemo, useRef } from "react";
import { searchRecipes } from "src/thunks/searchRecipes";
import useLocalStorage from "src/hooks/useLocalStorage";
import { getRandomElementFromArray } from "src/utils/getRandomElementFromArray";
import { inputPlaceholder, subtitles } from "src/models/texts";
import exampleData from "src/models/exampleData";

const SearchField = () => {
  const inputRef = useRef(null);
  const [recipes, setRecipes] = useLocalStorage<any>("recipes", []);

  const [SearchedRecipes, setSearchedRecipes] =
    useRecoilState(SearchedRecipesState);

  SearchedRecipes.length === 0 && setSearchedRecipes(recipes);

  const getRecipes = async (query: string) => {
    const response = searchRecipes(query);
    const data = await response;
    setRecipes(data);
    setSearchedRecipes(data);
  };

  const placeHolder = useMemo(
    () => getRandomElementFromArray(inputPlaceholder),
    []
  );
  const setSubTitle = useSetRecoilState<string>(HomeSubTitle);

  const handleSearchDirect = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const current: any = inputRef?.current;
    const newValue: string = current.value;
    setSubTitle(getRandomElementFromArray(subtitles));

    if (newValue.length === 0) {
      setRecipes(exampleData);

      setSearchedRecipes(exampleData as any);
      return;
    }
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
