/**
 * 
 * JavaScript object that defines the properties of the light theme for a UI. It has the following properties:

colors: An object containing the color values used in the theme. It has the following keys:
primary: The primary color of the theme, a dark gray.
neutral: A neutral color used for backgrounds and contrast.
mid: A mid-tone gray used for borders and dividers.
accent: An accent color used for highlights and call-to-action elements, in this case a bright yellow.
error: A color used to indicate errors, in this case a dark red.
success: A color used to indicate success, in this case a green.
width: An object containing the width values used in the theme. It has the following key:
max: The maximum width for the UI, in this case 800 pixels.
  * @typedef {object} LightTheme
  * @property {object} colors - The color values used in the theme.
  *   
  * @property {string} colors.primary - The primary color of the theme, a dark gray.
  * @property {string} colors.neutral - A neutral color used for backgrounds and contrast.
  * @property {string} colors.mid - A mid-tone gray used for borders and dividers.
  *   
 */

export const lightTheme = {
  colors: {
    primary: "#181815",
    neutral: "#F5F5F7",
    mid: "#DEDEDE",
    accent: "#FBFF48",
    error: "#DE5935",
    success: "#35DE8D",
  },

  width: {
    max: "800px",
  },
};
