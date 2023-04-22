import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { SingleStyled } from "./SingleStyled";
import { useLocalStorage, useRouter } from "pol-ui";
import { ExtendedIngredients, Recipe } from "src/types";
import axios from "axios";
import { SearchedRecipesState } from "src/State/Atom";
import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";
import Icon from "src/components/Icon/Icon";
import {
  TbBallVolleyball,
  TbCarrot,
  TbMoneybag,
  TbPlant,
} from "react-icons/tb";
import Stars from "src/components/Stars/Stars";
import { motion } from "framer-motion";
import IngredientList from "./components/Ingredients/List/List";
import Instructions from "./components/Instructions/Instructions";
import Image from "./components/Image/Image";
import { autoCapitalize } from "src/utils/autoCapitalize";

//

function SingleRecipe() {
  const router = useRouter();
  const { id } = router.params;
  const [recipes, setRecipes] = useLocalStorage("recipes", []);

  const [SearchedRecipes, setSearchedRecipes] =
    useRecoilState(SearchedRecipesState);

  SearchedRecipes.length === 0 && setSearchedRecipes(recipes);
  const [openedRecipe, setOpenedRecipe] = useState<Recipe | null>(null);

  const searchRecipeInAlreadySearched = (id: string | undefined) => {
    !id && <Navigate replace to="/" />;
    const uuid = Number(id);
    const recipe = SearchedRecipes.find((recipe: Recipe) => recipe.id === uuid);
    if (recipe) {
      setOpenedRecipe(recipe);
      return recipe;
    } else {
      return null;
    }
  };

  useEffect(() => {
    !searchRecipeInAlreadySearched(id)
      ? axios
          .get(`https://api.spoonacular.com/recipes/${id}/information`)
          .then((response) => {
            setOpenedRecipe(response.data);
          })
      : null;
  }, [id]);

  const {
    title,
    image,
    cheap,
    vegan,
    vegetarian,
    cookingMinutes,
    healthScore,
    sourceName,
    diets,
    veryPopular,
    preparationMinutes,
    analyzedInstructions,
    instructions,
    summary,
    veryHealthy,
  } = openedRecipe || {};

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
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

  const IconArray = [
    {
      icon: <TbPlant />,
      boolean: vegetarian,
      text: "Vegetarian",
    },
    {
      icon: <TbCarrot />,
      boolean: vegan,
      text: "Vegan",
    },
    {
      icon: <TbMoneybag />,
      boolean: cheap,
      text: "Cheap",
    },
    {
      icon: <TbBallVolleyball />,
      boolean: veryHealthy,
      text: "Healthy",
    },
  ];

  return !openedRecipe ? (
    <p>Loading...</p>
  ) : (
    <Layout hasHeader>
      <SingleStyled>
        {image && title && <Image url={image} title={title} />}
        <h1>{title}</h1>
        <div className="stats">
          <motion.ul
            className="icons"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {IconArray.map((icon) => (
              <motion.li
                className="icon"
                variants={item}
                key={icon.text}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {
                  <Icon
                    icon={icon.icon}
                    text={icon.text}
                    boolean={icon.boolean}
                  />
                }
              </motion.li>
            ))}
          </motion.ul>
          <div className="notes bigText">
            {veryPopular ? (
              <p>Such a popular recipe 😎</p>
            ) : (
              <p>That's an innovative recipe😋</p>
            )}
          </div>
          {summary && (
            <>
              <h2>Summary</h2>
              <div dangerouslySetInnerHTML={{ __html: summary }} />
            </>
          )}

          {diets && (
            <div className="diets">
              <h2>Diets</h2>
              {diets.length > 0
                ? diets.map((diet: string) => (
                    <p key={diet}>{autoCapitalize(diet)}</p>
                  ))
                : null}
            </div>
          )}
          <div className="notes">
            {cookingMinutes && cookingMinutes > 0 ? (
              <p>Preparation time: {cookingMinutes} min</p>
            ) : null}
            {preparationMinutes && preparationMinutes > 0 ? (
              <p>Portions: {preparationMinutes} min</p>
            ) : null}

            {healthScore && healthScore > 0 ? (
              <div className="center bigText">
                <Stars points={healthScore / 2} />
              </div>
            ) : null}
            {healthScore && healthScore > 0 ? (
              <p className="center">Health score: {healthScore}</p>
            ) : null}

            <p className="center">Source: {sourceName}</p>
          </div>
        </div>
          <IngredientList ingredients={openedRecipe.extendedIngredients} />
        <Instructions simple={instructions} complex={analyzedInstructions} />
        {/* <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(openedRecipe, null, 2)}
        </pre> */}
      </SingleStyled>
    </Layout>
  );
}

export default SingleRecipe;
