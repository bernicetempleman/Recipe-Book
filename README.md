# Recipe-Book
Develop a recipe book app. 
The functionality is listed as below 
1. The user should be able to add a recipe. 
2. The user should be able to view/ view details of a recipe. 
3. The user should be able to edit/update a recipe. 
4. The user should be able to delete a recipe. Each recipe should have a recipeId, recipeName ,Description and Image
5. Optional Requirements 1. The user can add ingredients for the recipe, this is a dynamic feature as some recipe will require more or ingredients then other.

## Technologies Used
- Angular
- Bootstrap
- NodeJS

## Features

List of features ready and TODOs for future development
- Create
- Read
- Update
- Delete

To-do list:
- Add confirm message for delete

## Getting Started

### Recipe Project
1. Create a new angular project RecipeBook
   ng new my-recipes
2. check the project is running 
   ng s -o 
3. add the routing //or add on install
    ng generate module app-routing --flat --module=app
    npm install @angular/forms --save
4. Change the title to Recipe Management in 
   app.component.ts
5. Edit the html  to display the title
   app.component.html 
6. Create an recipe model class in app folder name it as 
   recipe.ts
7. For database we will be using a fake api , which is json-server.
8. Install json server , 
    npm install -g json-servere
10. In the root of your project create a folder(backenddb) and add a file to it
    database.json
11. Add some data to the database,json file 
12. start the json server, 
    json-server --watch .\backendbd\database.json
13. Your server will start
14. open the browser and access the url to get the data from json fil
    http://localhost:3000/recipes 
15. Create the following components 
    ng g c create-recipe
    ng g c update-recipe
    ng g c recipe-details
    ng g c recipe-list
16. Now we will create a service which will make calls to our API , 
    ng g s recipe
17. Update the recipe.service.ts file , inject the httpclient and create a method to get all recipes
    recipe.service.ts
18. Register the HttpClientModule in 
    app.module.ts
19. Update the recipe-list component to call the service and 
    recipe-list.component.ts
    recipe-list.component.html
20. Update the 
    app-routing.module.ts
21. Update 
    app.component.html 
22. Install Bootstrap and add it to the styles.css
    npm install bootstrap --save  
    styles.css 
/* You can add global styles to this file, and also import other style files */
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

23. Start the app
    ng s -o
--------------------------------------------------------------------------------------------------------------
### Details
1. Update recipe-list.component.ts and add the method  recipeDetails
2. Update the recipe-list.html add a button to display the details
3. Add getRecipe method in the recipe.service.ts
4. Update the recipes-details.component.ts file
5. Update recipe-details.html file
------------------------------------------------------------------------------------------------------
### Add Recipe
1. create method createRecipe in recipe.service.ts
2. Import the FormsModule in app.module.ts
3. Update create-recipe.component.html and create-recipe.component.ts
----------------------------------------------------------------------------------------
### Update Recipe
1. create method updateRecipe in recipe.service.ts
2. update update-recipe.component.ts and update-recipe.html
--------------------------------------------------
### Delete Recipe
1. Add the method deleteRecipe in recipe.service.ts
2. Update the recipe-list.component.ts

### Recipe Book
Develop a recipe book app. 
The functionality is listed as below 
1. The user should be able to add a recipe. 
2. The user should be able to view/ view details of a recipe. 
3. The user should be able to edit/update a recipe. 
4. The user should be able to delete a recipe. 

### Each recipe should have a 
* recipeId 
* recipeName
* Description
* Image 
* Optional Requirements : The user can add ingredients for the recipe, 
this is a dynamic feature as some recipe will require more or ingredients then other.

## Usage
Start the app
    ng s -o
    
## Contributors
Here list the people who have contributed to this project. 
- Bernice Templeman

## License
This site was built using [GitHub](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).

This project uses the following license: [license_name](https://github.com/bernicetempleman/PROJECT-NAME).
