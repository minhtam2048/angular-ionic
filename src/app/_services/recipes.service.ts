import { Injectable } from "@angular/core";
import { Recipe } from "../_models/recipes.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "pizza",
      imageUrl: "https://i.ibb.co/cLW53qJ/pizza.jpg",
      ingredients: ["French fries", "Pork meat", "Salad"]
    },
    {
      id: "r2",
      title: "spaghetti",
      imageUrl: "https://i.ibb.co/d2mdWxn/spaghetti.jpg",
      ingredients: ["paste", "Meat", "Tomatoes"]
    }
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
