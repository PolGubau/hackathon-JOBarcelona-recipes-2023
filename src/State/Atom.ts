import { atom } from "recoil";
import { subtitles } from "src/models/texts";
import { getRandomElementFromArray } from "src/utils/getRandomElementFromArray";

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
export const HomeSubTitle = atom({
  key: "HomeSubTitleKey",
  default: getRandomElementFromArray(subtitles),
});
