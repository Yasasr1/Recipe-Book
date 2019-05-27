import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Fat juicey burger',
         'Big fat juicey and delicious burger  ',
         'https://media.timeout.com/images/103902673/image.jpg',
         [
             new Ingredient('cheese', 4),
             new Ingredient('meat', 1)
         ]),
        new Recipe('Another Test recipe',
         'this is simply a test',
         'https://www.196flavors.com/wp-content/uploads/2014/08/Nasi-Goreng-3-FP.jpg',
         [
             new Ingredient('prawn', 10),
             new Ingredient('egg', 1)
         ])
      ];

      constructor(private shoppinglistService: ShoppingListService) {}


     getRecipes()
     {
         return this.recipes.slice();
     } 

     addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppinglistService.addIngredients(ingredients);
     }
}