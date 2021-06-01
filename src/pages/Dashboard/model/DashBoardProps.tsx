import { FoodModel } from "../../../model/Food/FoodModel";

export interface DashboardProps {
  isOpen: boolean,
  editingFood: any,
  setIsOpen(): void,
  handleAddFood(data: FoodModel): void
  handleUpdateFood(data: FoodModel): void
  handleDeleteFood(id : number): void
}
