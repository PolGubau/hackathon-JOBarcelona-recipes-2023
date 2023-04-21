import { getRandomPlaceholder } from "src/utils/inputPlaceholder";
import { SearchFieldStyled } from "./Styled";
import { TbSearch } from "react-icons/tb";
import { SearchState } from "src/State/Atom";
import { useRecoilState } from "recoil";
import { useDebounce } from "pol-ui";
import { useEffect, useState } from "react";

const SearchField = () => {
  const [searchState, setSearchState] = useRecoilState(SearchState);
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    setSearchState({
      ...searchState,
      value: debouncedValue || "",
    });
  }, [debouncedValue]);

  const handleSearch = (e: any) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <SearchFieldStyled>
      <TbSearch size={30} className="icon" />
      <input
        type="text"
        placeholder={getRandomPlaceholder()}
        autoFocus
        value={value}
        onChange={handleSearch}
      />
    </SearchFieldStyled>
  );
};
export default SearchField;
