import { atom } from "recoil";

export const SearchState = atom({
  key: "SearchInputAtom",
  default: {
    value: "",
    isFocused: false,
  },
});

export const SearchedRecipesState = atom({
  key: "SearchedRecipesAtom",
  default: [],
});
