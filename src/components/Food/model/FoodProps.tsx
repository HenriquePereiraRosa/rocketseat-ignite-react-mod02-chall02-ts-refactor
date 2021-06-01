import { FoodModel } from "../../../model/Food/FoodModel";

export interface FoodProps {
  food: FoodModel,
  handleDelete(id : number): void,
  handleEditFood(food: FoodModel): void,
}
