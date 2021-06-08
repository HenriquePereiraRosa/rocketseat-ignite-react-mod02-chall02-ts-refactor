import { Food } from "../../../model/Food/Food";

export interface ModalAddFoodProps {
  isOpen: boolean,
  setIsOpen(): void,
  handleAddFood(data: Food): void
}
