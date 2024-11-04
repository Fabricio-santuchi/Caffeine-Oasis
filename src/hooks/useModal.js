import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";

export const useModal = () => {
  return useContext(ModalContext);
};
