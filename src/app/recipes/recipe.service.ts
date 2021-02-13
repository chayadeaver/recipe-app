import { Recipe } from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c.pxhere.com/photos/e9/46/avocado_bread_breakfast_cooking_cuisine_delicious_diet_dinner-1515351.jpg!d'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://c.pxhere.com/photos/e9/46/avocado_bread_breakfast_cooking_cuisine_delicious_diet_dinner-1515351.jpg!d')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
