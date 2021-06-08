import { Food } from "../../../model/Food/Food";

export interface DashboardProps {
  isOpen: boolean,
  editingFood: any,
  setIsOpen(): void,
  handleAddFood(data: Food): void
  handleUpdateFood(data: Food): void
  handleDeleteFood(id : number): void
}
