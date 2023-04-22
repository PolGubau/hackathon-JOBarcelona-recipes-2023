import { Layout } from "src/components";
import styled from "styled-components";

export const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  width: 100%;
  padding-top: 20px;
  margin: 0 auto;

  main {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    max-width: 600px;
    width: 100%;
    padding-top: 20px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.mid};
    border-radius: 10px;
  }
`;

const About = () => {
  return (
    <Layout hasHeader>
      <AboutStyled>
        <main>
          <h1>About</h1>
          <p>
            Beecipes is a recipe app that uses the Spoonacular API to fetch
            recipes and display them in a user-friendly way.
          </p>
          <p>
            It was built using React, TypeScript, Styled Components, and Framer
            Motion.
          </p>
          <p>
            It was created by{" "}
            <a href="https://polgubauamores.me">Pol Gubau Amores</a>.
          </p>

          <p>
            This code is open source and available on{" "}
            <a href="https://github.com/PolGubau/hackathon-job-bcn-recipes-2023">
              GitHub
            </a>
            .
          </p>
        </main>
      </AboutStyled>
    </Layout>
  );
};
export default About;
