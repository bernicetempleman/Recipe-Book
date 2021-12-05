import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-images',
  templateUrl: './recipe-images.component.html',
  styleUrls: ['./recipe-images.component.css']
})
export class RecipeImagesComponent implements OnInit {

  recipes: Observable<Recipe[]> | undefined;

  //constructor() { }
  constructor(private recipeService: RecipeService, private router: Router)  {
  }

  //ngOnInit(): void {}
  ngOnInit() {
    this.reloadData();
}

reloadData() {
  this.recipes = this.recipeService.getRecipesImages();
}


recipeDetails(id: number) {
  this.router.navigate(['details', id]);
}

}


 








