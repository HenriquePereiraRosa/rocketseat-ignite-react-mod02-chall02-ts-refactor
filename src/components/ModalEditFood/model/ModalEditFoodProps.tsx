import { FoodModel } from "../../../model/Food/FoodModel";

export interface ModalEditFoodProps {
  isOpen: boolean,
  editingFood: any,
  setIsOpen(): void,
  handleUpdateFood(data: FoodModel): void
}
