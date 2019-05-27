import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('tomatoes', 10)
      ];

      addIngredient(ingredient: Ingredient)
      {
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice());
      }

      getIngredients()
     {
         return this.ingredients.slice();
        
     } 

     addIngredients(ingredients: Ingredient[])
     {
        /*for(let ing of ingredients) 
        {
            this.addIngredient(ing);
        }*/
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
     }
}