import Layout from "../../components/Layout/Layout";
import { HomeStyled } from "./HomeStyled";
import GridRecipes from "../../components/Grid/GridRecipes";
import Header from "src/components/Header/Header";
import { SearchedRecipesState } from "src/State/Atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import useLocalStorage from "src/hooks/useLocalStorage";
import { getRandomRecipes } from "src/thunks/getRandomrecipes";
import HearthHandIcon from "src/assets/HandIcons/HearthHandIcon";
import { Recipe } from "src/types";
import exampleData from "src/models/exampleData";
import { HomeSubTitle } from "src/State/Atom";

function Home() {
  const [recipes, setRecipes] = useLocalStorage<Recipe[]>(
    "recipes",
    exampleData
  );

  const [SearchedRecipes, setSearchedRecipes] =
    useRecoilState<any>(SearchedRecipesState);

  SearchedRecipes.length === 0 && setSearchedRecipes(recipes);

  const getRecipes = async () => {
    !SearchedRecipes && setSearchedRecipes(recipes);
    if (!SearchedRecipes) {
      const response = getRandomRecipes();
      const data = await response;
      data && setRecipes(data);
      data && setSearchedRecipes(data);
    }
  };
  const subTitle = useRecoilValue<string>(HomeSubTitle);

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Layout>
      <HomeStyled>
        <Header />
        <main>
          {recipes.length === 0 ? (
            <p>No recipes found </p>
          ) : (
            <GridRecipes elements={SearchedRecipes} title={subTitle} />
          )}

          <HearthHandIcon style={{ transform: "scale(0.5)" }} />
        </main>
      </HomeStyled>
    </Layout>
  );
}

export default Home;
