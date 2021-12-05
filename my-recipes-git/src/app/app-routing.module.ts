import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeImagesComponent } from './recipe-images/recipe-images.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'images', pathMatch: 'full' }, 
  { path: 'images', component: RecipeImagesComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'add', component: CreateRecipeComponent },
 { path: 'update/:id', component: UpdateRecipeComponent },
  { path: 'details/:id', component: RecipeDetailsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
