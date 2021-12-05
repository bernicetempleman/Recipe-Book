import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {

  id!: number;
  recipe!: Recipe;
  submited = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = new Recipe();
    this.submited = false;

    this.id = this.route.snapshot.params['id'];
    
    this.recipeService.getRecipe(this.id)
      .subscribe(data => {
        console.log(data)
        this.recipe = data;
      }, error => console.log(error));
  }

  updateRecipe() {

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

    this.recipeService.updateRecipe(this.id, this.recipe)
      .subscribe(data => console.log(data), error => console.log(error));
    this.recipe = new Recipe();
    //this.gotoList(); 
  }

  onSubmit() {
    this.submited = true;
    this.updateRecipe(); 
  }
  gotoList() {
    this.router.navigate(['/recipes']);
  }

}

