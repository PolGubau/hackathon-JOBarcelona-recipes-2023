import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { SingleStyled } from "./SingleStyled";
import { useLocalStorage, useRouter } from "pol-ui";
import { Recipe } from "src/types";
import axios from "axios";
import { SearchedRecipesState } from "src/State/Atom";
import { useRecoilState } from "recoil";
import { Navigate } from "react-router-dom";
import Icon from "src/components/Icon/Icon";
import { TbCarrot, TbMoneybag, TbPlant } from "react-icons/tb";
import Stars from "src/components/Stars/Stars";

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
    veryPopular,
    preparationMinutes,
  } = openedRecipe || {};

  return !openedRecipe ? (
    <p>Loading...</p>
  ) : (
    <Layout hasHeader>
      <SingleStyled>
        <div className="topPart">
          <img src={image} alt={title} />
        </div>
        <h1>{title}</h1>
        <div className="stats">
          <div className="icons">
            <Icon icon={<TbPlant />} boolean={vegetarian} text="Vegetarian" />
            <Icon icon={<TbCarrot />} boolean={vegan} />
            <Icon icon={<TbMoneybag />} boolean={cheap} />
          </div>
          <div>
            {cookingMinutes && cookingMinutes > 0 ? (
              <p>Preparation time: {cookingMinutes} min</p>
            ) : null}
            {preparationMinutes && preparationMinutes > 0 ? (
              <p>Portions: {preparationMinutes} min</p>
            ) : null}
            {veryPopular ? (
              <p>Such a popular recipe 😎</p>
            ) : (
              <p>That's an innovative recipe😋</p>
            )}

            {healthScore && healthScore > 0 ? (
              <>
                <p>Health score: {healthScore}</p>
                <Stars points={healthScore} />
              </>
            ) : null}

            <p>Source: {sourceName}</p>
          </div>{" "}
        </div>

        <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(openedRecipe, null, 2)}
        </pre>
      </SingleStyled>
    </Layout>
  );
}

export default SingleRecipe;
