import { Food } from "../../../model/Food/Food";

export interface FoodProps {
  food: Food,
  handleDelete(id : number): void,
  handleEditFood(food: Food): void,
}
