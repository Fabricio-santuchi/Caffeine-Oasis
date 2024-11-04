/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { ALTERAR_MODAL, initialState, ModalReducer } from "./ModalReducer.js";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ModalReducer, initialState);

  const alterarModal = () => dispatch({ type: ALTERAR_MODAL });

  return (
    <ModalContext.Provider value={{ ...state, alterarModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
