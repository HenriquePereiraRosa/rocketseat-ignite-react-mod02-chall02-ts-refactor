import { FoodModel } from "../../../model/Food/FoodModel";

export interface DashBoardState {
  foods: FoodModel[],
  editingFood: FoodModel,
  modalOpen: boolean,
  editModalOpen: boolean,
}
