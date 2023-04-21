import { TbHexagons } from "react-icons/tb";
import Layout from "../../components/Layout/Layout";
import { HomeStyled } from "./HomeStyled";
import GridRecipes from "../../components/Grid/GridRecipes";
import exampleData from "../../models/exampleData";
import { Recipe } from "types";
import { getRandomPlaceholder } from "../../utils/inputPlaceholder";

function Home() {
  const recipes: Recipe[] = exampleData.recipes;

  return (
    <Layout>
      <HomeStyled>
        <header className="flex column bgAccent">
          <div className="flex marginTop">
            <TbHexagons size={50} />
            <h1>Beecipes</h1>
          </div>
          <h2>Vegan, cheap and ecological recipes.</h2>
          <input type="text" placeholder={getRandomPlaceholder()} />
        </header>
        <main>
          <GridRecipes elements={recipes} title="Our preferences :)" />
        </main>
      </HomeStyled>
    </Layout>
  );
}

export default Home;
