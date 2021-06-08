import { Food } from "../../../model/Food/Food";

export interface FoodProperties {
  food: Food,
  handleDelete(id : number): void,
  handleEditFood(food: Food): void,
}
