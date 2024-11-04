export const ALTERAR_MODAL = "ALTERAR_MODAL";

export const initialState = {
  isVisible: false,
};

export const ModalReducer = (state, action) => {
  switch (action.type) {
    case ALTERAR_MODAL:
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
};
