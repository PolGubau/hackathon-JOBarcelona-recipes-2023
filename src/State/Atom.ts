/**

Recoil atom for search input state.
@typedef {object} SearchState
@property {string} value - The current value of the search input.
@property {boolean} isFocused - A boolean indicating whether the search input is currently focused.
*/
/**

Recoil atom for searched recipes state.
@typedef {Array} SearchedRecipesState
*/
/**

Recoil atom for home page subtitle state.
@typedef {string} HomeSubTitle
*/
import { atom } from "recoil";
import { subtitles } from "src/models/texts";
import { getRandomElementFromArray } from "src/utils/getRandomElementFromArray";

/**

Recoil atom for search input state.
@type {SearchState}
*/
export const SearchState = atom({
  key: "SearchInputAtom",
  default: {
    value: "",
    isFocused: false,
  },
});
/**

Recoil atom for searched recipes state.
@type {SearchedRecipesState}
*/
export const SearchedRecipesState = atom({
  key: "SearchedRecipesAtom",
  default: [],
});
/**

Recoil atom for home page subtitle state.
@type {HomeSubTitle}
**/
export const HomeSubTitle = atom({
  key: "HomeSubTitleKey",
  default: getRandomElementFromArray(subtitles),
});
