import Layout from "../../components/Layout/Layout";
import { HomeStyled } from "./HomeStyled";
import GridRecipes from "../../components/Grid/GridRecipes";
import exampleData from "../../models/exampleData";
import Header from "src/components/Header/Header";
import { SearchedRecipesState } from "src/State/Atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { createUrl, url } from "src/models/url";
import axios from "axios";
import { useLocalStorage } from "pol-ui";

function Home() {
  const [recipes, setRecipes] = useLocalStorage("recipes", []);

  const [SearchedRecipes, setSearchedRecipes] =
    useRecoilState(SearchedRecipesState);

  SearchedRecipes.length === 0 && setSearchedRecipes(recipes);

  const uri = createUrl(url.RANDOM);

  const getRecipes = (uri: string) => {
    // axios.get(uri).then((response: any) => {
    //   setSearchedRecipes(response.data);
    // });
    setSearchedRecipes(exampleData.recipes as any);
    setRecipes(exampleData.recipes as any);
  };

  useEffect(() => {
    getRecipes(uri);
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
