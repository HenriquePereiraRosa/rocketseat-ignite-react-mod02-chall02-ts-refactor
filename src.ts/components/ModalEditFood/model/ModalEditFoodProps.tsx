import { Food } from "../../../model/Food/Food";

export interface ModalEditFoodProps {
  isOpen: boolean,
  editingFood: any,
  setIsOpen(): void,
  handleUpdateFood(data: Food): void
}
