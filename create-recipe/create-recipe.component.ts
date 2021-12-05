import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipe: Recipe = new Recipe();
  submitted = false;

  constructor(private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = new Recipe();
  }

  save() {
    if(this.recipe.name.length < 1)
      this.recipe.name = "Recipe";
    if(this.recipe.name.length > 50 )
    this.recipe.name = this.recipe.name.substring(0,50);
    if(this.recipe.description.length < 1)
      this.recipe.description = "This is: quick? easy? healthy? good?\n\nTime:  mins \nServings:  \n\nIngredients: \n\n\Directions: \n\nRecipe link:\n\nUse free images. Recipe Ingredients and directions are free to use. Make your own description. ";
    if(this.recipe.description.length > 1000  )
      this.recipe.description = this.recipe.description.substring(0,1000);
    if(this.recipe.image.length < 1)
      this.recipe.image = "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png";

    this.recipeService.createRecipe(this.recipe)
      .subscribe(data => console.log(data), error => console.log(error));
    this.recipe = new Recipe();
    //this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/recipes']);
  }
  gotoAdd() {
    this.router.navigate(['/add']);
  }
  images(){
    this.router.navigate(['images']);
  }

}

