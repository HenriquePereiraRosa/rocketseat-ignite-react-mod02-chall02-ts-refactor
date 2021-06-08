import { Food } from "../../../model/Food/Food";

export interface ModalEditFoodProperties {
  isOpen: boolean;
  editingFood: any;
  setIsOpen(): void;
  handleUpdateFood(data: Food): void;
}
