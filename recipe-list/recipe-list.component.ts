import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Observable<Recipe[]> | undefined;


 
  constructor(private recipeService: RecipeService, private router: Router)  {
  }

  ngOnInit() {
      this.reloadData();
  }

  reloadData() {
    this.recipes = this.recipeService.getRecipesList();
  }

  recipeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateRecipe(id: number): void {
    this.router.navigate(['update', id]);
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => console.log(error));
  }
}