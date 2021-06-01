import { FoodModel } from "../../../model/Food/FoodModel";

export interface ModalAddFoodProps {
  isOpen: boolean,
  setIsOpen(): void,
  handleAddFood(data: FoodModel): void
}
