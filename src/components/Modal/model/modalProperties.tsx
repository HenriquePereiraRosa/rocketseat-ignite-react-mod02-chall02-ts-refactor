import { ReactNode } from "react";

export interface ModalProperties {
  isOpen: boolean;
  setIsOpen(): void;
  children: ReactNode;
}
