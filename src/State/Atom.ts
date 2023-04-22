import { atom } from "recoil";
import exampleData from "src/models/exampleData";

export const SearchState = atom({
  key: "SearchInputAtom",
  default: {
    value: "",
    isFocused: false,
  },
});

export const SearchedRecipesState = atom({
  key: "SearchedRecipesAtom",
  default: exampleData,
});
