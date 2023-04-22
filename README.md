# **Beecipes**

This is my Participation in JOBarcelona 2023 hackathon. Beecipes is a recipe app that uses the Spoonacular API to fetch recipes and display them in a user-friendly way.

This App is built with React and Recoil.

Uses the Spoonacular API to fetch recipes and display them.

## **Features**

- Search for recipes by name
- Search for recipes randomly

- Local storage to save recipes
- Less fetches to the API saving data

These features are designed to improve the user experience by providing useful functionality and reducing the amount of data that needs to be fetched from the API. The ability to search for recipes by name allows users to quickly find the recipe they are looking for, while the ability to search for recipes randomly provides a fun and easy way to discover new recipes.

The addition of local storage also improves the user experience by allowing users to save their favorite recipes and access them offline. This reduces the reliance on internet connectivity and allows users to access their saved recipes at any time.

Finally, by reducing the number of fetches to the API, we can save on data usage and improve the overall speed of the application. This is an important consideration for users who may have limited data plans or slower internet connections.

## **Installation**

This project is build using Vite.

    ```bash
    npm install
    npm run dev
    ```

## **Usage**

Instructions on how to use the project.

To use the app you need to get an API key from [Spoonacular](https://spoonacular.com/food-api).

After obtaining the API key from Spoonacular, you can follow these steps to use the app:

Open the project in your preferred code editor.
Navigate to the src/models/url.ts file and replace YOUR_API_KEY with your actual API key obtained from Spoonacular.
Save the changes made to the src/models/url.ts file.
Open the project using `npm run dev` .
You should now be able to use the app to search for recipes by name or randomly and save them to local storage.
Note: Make sure you have a stable internet connection while using the app to avoid any errors while fetching data from the API.

## **Roadmap**

Future plans for the project.

1. Filter recipes by ingredients, calories, etc.
2. Add a shopping list
3. Add a favorites list
4. Add a login system

## **Contributing**

Guidelines on how to contribute to the project.

1. Fork the project
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## **License**

License information for the project.

This project is licensed under the MIT License.
Is totally free to use and modify as is Open Source.
