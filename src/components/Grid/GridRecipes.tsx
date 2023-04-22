/**

@typedef {Object} Recipe - Represents a recipe
@property {number} id - The id of the recipe
@property {string} title - The title of the recipe
@property {string} image - The image url of the recipe
@property {string} [summary] - The summary of the recipe
@property {string[]} [ingredients] - The list of ingredients of the recipe
@property {string[]} [instructions] - The list of instructions of the recipe
*/
import { GridRecipesStyled } from "./Styled";
import { Link } from "react-router-dom";
import { CupCakeHandIcon } from "src/assets/HandIcons";
import { motion } from "framer-motion";
import { Recipe } from "src/types";

/**

Grid of recipe components
@param {Object} GridRecipesProps - The props object
@param {Recipe[]} GridRecipesProps.elements - The array of recipes to display
@param {string} [GridRecipesProps.title] - The title of the grid (optional)
@returns {JSX.Element} The GridRecipes component
*/
const GridRecipes = ({
  elements,
  title,
}: {
  elements: Recipe[];
  title?: string;
}) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <GridRecipesStyled>
      {title && (
        <h2>
          <CupCakeHandIcon
            style={{
              transform: "scale(0.6)",
            }}
          />
          {title}
        </h2>
      )}
      php Copy code
      <motion.ul
        className="allElements"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {elements.map((element) => (
          <Link
            to={`./recipes/${element.id}`}
            key={element.id}
            className="element"
          >
            <motion.li
              className="elementli"
              variants={item}
              key={element.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={element.image} alt={element.title} />
              <p>{element.title}</p>
            </motion.li>
          </Link>
        ))}
      </motion.ul>
    </GridRecipesStyled>
  );
};
export default GridRecipes;
