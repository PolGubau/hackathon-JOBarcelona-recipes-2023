import Layout from "../../components/Layout/Layout";
import { HomeStyled } from "./HomeStyled";
import GridRecipes from "../../components/Grid/GridRecipes";
import exampleData from "../../models/exampleData";
import Header from "src/components/Header/Header";
import { SearchedRecipesState } from "src/State/Atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { createUrl, url } from "src/models/url";
import { useLocalStorage } from "pol-ui";
import { getRandomRecipes } from "src/thunks/getRandomrecipes";

function Home() {
  const [recipes, setRecipes] = useLocalStorage("recipes", []);

  const [SearchedRecipes, setSearchedRecipes] =
    useRecoilState(SearchedRecipesState);

  SearchedRecipes.length === 0 && setSearchedRecipes(recipes);

  const getRecipes = async () => {
    !SearchedRecipes && setSearchedRecipes(recipes);

    if (!SearchedRecipes) {
      const response = getRandomRecipes();
      const data = await response;
      console.log(data);

      data && setRecipes(data);
      data && setSearchedRecipes(data);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Layout>
      <HomeStyled>
        <Header />
        <main>
          <GridRecipes elements={SearchedRecipes} title="Our preferences :)" />
        </main>
      </HomeStyled>
    </Layout>
  );
}

export default Home;
