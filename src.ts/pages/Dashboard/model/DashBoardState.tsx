import { Food } from "../../../model/Food/Food";

export interface DashBoardState {
  foods: Food[],
  editingFood: Food,
  modalOpen: boolean,
  editModalOpen: boolean,
}
