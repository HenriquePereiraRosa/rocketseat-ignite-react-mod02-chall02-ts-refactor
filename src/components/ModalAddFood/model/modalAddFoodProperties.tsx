import { Food } from "../../../model/Food/Food";

export interface ModalAddFoodProperties {
  isOpen: boolean,
  setIsOpen(): void,
  handleAddFood(data: Food): void
}
