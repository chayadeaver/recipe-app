import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Biscuit Taco Casserole',
      'Stretch a half-pound of ground beef deliciously into eight hearty servings!',
      'https://images-gmi-pmc.edge-generalmills.com/c24bc565-4f51-4064-9beb-4fd10aa6d8e5.jpg',
      [
        new Ingredient('Ground beef', 1),
        new Ingredient('Biscuits', 1),
        new Ingredient('Taco sauce', 1)

      ]),
    new Recipe(
      'Spaghetti and Meatballs',
      "Making your sauce is always better—it's cheaper and so much more flavorful. This one comes together in about 15 minutes and is the perfect accompaniment to the big garlicky meatballs.",
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1600x2399/gallery-1506456122-delish-spaghetti-meatballs-2.jpg?resize=768:*',
      [
        new Ingredient('Spaghetti pasta', 16),
        new Ingredient('Ground beef', 16),
        new Ingredient('Canned Tomatoes', 3)
      ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
